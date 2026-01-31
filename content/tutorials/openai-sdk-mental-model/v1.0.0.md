# Tutorial 1

## The OpenAI SDK Mental Model (Why Most Developers Use It Wrong)

> If you only learn how to call the API, you'll keep building fragile demos.  
> If you learn the mental model, you'll build real AI systems.

This tutorial is about the mental framework you must have before writing serious AI code.

No hype. No chatbot fluff.

---

## 1. What the OpenAI SDK Actually Is

Most people think the OpenAI SDK is:

> "A way to send text to a model and get text back"

That's wrong.

### Correct mental model

The OpenAI SDK is a **general-purpose reasoning runtime** with:

1. **Models** – different reasoning engines optimized for different tasks
2. **Inputs** – text, images, audio, structured data
3. **Outputs** – text, JSON, tool calls, function results
4. **Control mechanisms** – tools, schemas, streaming, parameters
5. **Constraints** – cost, latency, context limits, determinism

Think of it like this:

> You are not chatting with a model.  
> You are orchestrating a reasoning process.

That shift matters.

---

## 2. The Core Object You Must Understand: Response

Old APIs returned:

- text blobs
- loosely structured messages

The modern SDK returns a **Response object**.

A Response can contain:

- multiple content blocks
- tool calls (with arguments)
- partial streams
- structured JSON data
- metadata (tokens used, finish reason, model ID)

This is intentional.

### Why this matters

Real applications need to:

- inspect decisions the model made
- validate outputs before acting
- retry selectively on failures
- route errors appropriately
- track costs per request

You cannot do that with "just text".

---

## 3. Models Are Not "Smarter or Dumber"

Stop ranking models like Pokémon.

Models differ in **capabilities**, not intelligence.

### Think in task shapes

| Task Shape | Model Category | Why |
|------------|----------------|-----|
| Multi-step reasoning | Reasoning-optimized models | Extended thinking time |
| Vision + text | Multimodal models | Can process images + text |
| Fast classification | Smaller, faster models | Speed + cost efficiency |
| Creative writing | Balanced general models | Strong language capabilities |
| Deterministic extraction | Any model with temp=0 | Parameter matters more than size |

### Mentor rule

> Choose models based on task shape, not vibes.

**Bad question:**
> "What's the best model?"

**Good question:**
> "What constraints does this task have?"

Think: reasoning depth, speed requirement, cost budget, multimodal needs.

---

## 4. Context Windows Are Hard Limits

Every model has a maximum token budget:

- **Input tokens** (your messages + tool definitions + context)
- **Output tokens** (model's response)
- **Total** = your hard constraint

Context windows vary by model:

- Smaller, faster models: typically 8K-128K tokens
- Larger models: can go up to 200K+ tokens
- Check current specs in the API documentation

### What happens when you exceed it

The API will:

1. Reject the request (error)
2. Truncate automatically (in some endpoints)
3. Never tell you which messages got dropped

### Design for this

You must:

- Count tokens before sending (use tiktoken library)
- Truncate intelligently (drop old messages, summarize, or compress)
- Fail gracefully when limits hit

Don't discover this in production.

---

## 5. Messages Are NOT a Conversation Log

This is a huge beginner mistake.

People treat messages as:

- chat history
- memory
- state

They are none of those.

### Messages are:

**Context provided to a single reasoning run.**

The model has no memory between API calls. Zero.

If you want memory:

- you build it
- you store it (database, vector store, cache)
- you re-inject it as messages

This is **power**, not inconvenience.

### Why this is good

You control:

- what context is included
- when to compress or summarize
- what gets forgotten
- how memory is structured

The model is stateless. Your application manages state.

---

## 6. System Messages Set Initial Behavior

The first message is special.

**System message** = instructions that shape the model's behavior.

```python
messages = [
    {"role": "system", "content": "You are a technical documentation assistant. Be precise and cite sources."},
    {"role": "user", "content": "Explain async/await"}
]
```

### Rules

- System message typically comes first
- Sets the initial framing for the conversation
- Model generally follows it, but can drift in very long conversations
- Use it for task framing, tone, and output format expectations
- Not for examples (use user/assistant pairs for those)

User and assistant messages follow. These are the back-and-forth.

### Important nuance

The system message is influential, not a hard constraint. In edge cases:

- Long conversations may drift from initial instructions
- Conflicting user messages can override system guidance
- The model balances system instructions with being helpful

Think of it as strong guidance, not immutable law.

---

## 7. Tools Are Contracts, Not Suggestions

Most tutorials show tool calling like this:

> "If the model wants, it may call this function"

That mindset is sloppy.

### Correct framing

A tool is a **strict contract**:

- Input schema (typed parameters)
- Output expectations (what gets returned)
- Validation rules (you enforce, not the model)
- Failure handling (what happens on errors)

**The model is not trusted. You validate everything.**

### Critical capabilities

**Parallel tool calls:** The model can call multiple tools simultaneously. Your code must handle this.

```python
# Model might return:
tool_calls = [
    {"name": "get_weather", "args": {"city": "NYC"}},
    {"name": "get_weather", "args": {"city": "SF"}},
]
```

**Required vs optional tools:** You decide enforcement level.

- `tool_choice="auto"` → model decides whether to call
- `tool_choice="required"` → model must call at least one
- `tool_choice={"type": "function", "function": {"name": "extract_data"}}` → model must call this specific tool

### If you don't validate

- you will ship bugs
- you will leak data
- you will break workflows

Tool results go back as messages with `role="tool"`. The model sees what your function returned.

---

## 8. Structured Outputs Beat Prompt Engineering

If your app depends on regex parsing, it's broken.

The SDK supports structured outputs for a reason.

### Two approaches

**1. JSON mode** (deprecated approach)
```python
response_format={"type": "json_object"}
```
Guarantees valid JSON. Does NOT guarantee structure.

**2. Structured outputs** (correct approach)
```python
response_format={
    "type": "json_schema",
    "json_schema": {
        "name": "extraction",
        "schema": {...}  # Your JSON schema
    }
}
```
Guarantees both valid JSON AND conformance to your schema.

### Why this is critical

- **Predictability** – same structure every time
- **Type safety** – validate in your application code
- **Easier testing** – assert on fields, not text patterns
- **Fewer prompt hacks** – no more "format as JSON", "use this exact structure"

Prompt engineering is a last-mile concern, not a foundation.

---

## 9. Parameters Are Policy Decisions

`temperature`, `max_tokens`, `top_p` aren't knobs to tweak randomly.

They are policy decisions.

### Temperature

- **0** = deterministic (same input → same output, mostly)
- **0.7** = balanced creativity
- **1.0+** = high variability

Use **temperature=0** for:
- Data extraction
- Classification tasks
- Code generation
- Anything where consistency matters

Use **temperature=0.7-1.0** for:
- Creative writing
- Brainstorming
- When diversity in outputs is valuable

### max_tokens

This is your **budget control**, not quality control.

- Sets maximum output length
- Stops generation when limit hit
- Model's response may be incomplete if you set this too low

Don't set it lower than needed. Don't set it at 4096 "just in case" on every call.

### top_p

Controls nucleus sampling. Leave at **default (1.0)** unless you have a specific reason.

This isn't a magic quality slider.

---

## 10. Streaming Is a UX Decision, Not a Feature

People add streaming because it "looks cool".

Wrong reason.

### Streaming is about:

- **Perceived latency** – user sees progress immediately
- **User trust** – transparency in model's thinking
- **Interruption handling** – user can stop/redirect mid-generation
- **Long responses** – 30+ second generations need feedback

### When to stream

If your user can:
- Cancel mid-response → **stream**
- Edit the prompt while generating → **stream**
- React to partial output → **stream**

If not:
- **don't stream**

Examples:

- Chatbot → stream
- Background classification → don't stream
- Code autocomplete → stream
- Batch data extraction → don't stream

Engineering follows UX, not the other way around.

### Implementation note

Streaming requires handling:
- Partial chunks
- Connection failures mid-stream
- Reassembly of tool calls across chunks
- Proper cleanup on interruption

Don't add this complexity unless your UX needs it.

---

## 11. Cost Is a First-Class Constraint

Most tutorials ignore this.

Production systems don't.

### You must think about:

**Token budgets:**
- Input tokens cost less than output tokens (usually)
- Different models have different pricing
- Some providers offer prompt caching (can reduce costs by 50-90% for repeated content)

**Prompt caching (if available):**
Some APIs cache parts of your prompt automatically. When available:
- Reuse system messages and tool definitions across requests
- Keep static context in a consistent order
- Check your provider's documentation for caching behavior

Note: Caching availability and implementation varies by provider and model.

**Retries:**
- Exponential backoff on rate limits
- Don't retry on 4xx errors (client errors)
- Do retry on 5xx errors (server errors)

**Fallbacks:**
- Try expensive model → falls back to cheaper model on failure
- Different model for different parts of the task

**Model selection by cost:**
- Use smaller, cheaper models for most routine tasks
- Reserve larger models for tasks that actually need advanced capabilities
- Test if a cheaper model works before defaulting to expensive ones

### If you don't design for cost:

Finance will shut you down later.

Track costs per request. Set budgets. Build dashboards.

---

## 12. Error Handling Is Not Optional

The API will fail. Plan for it.

### Common errors:

**Rate limits (429):**
- You exceeded requests/minute or tokens/minute
- Solution: exponential backoff, queue requests, upgrade tier

**Context length exceeded (400):**
- Your input is too long
- Solution: truncate, summarize, or compress messages

**Timeout:**
- Request took too long
- Solution: retry, use streaming, or redesign task

**Server error (500-599):**
- OpenAI infrastructure issue
- Solution: retry with backoff

### Build resilience

```python
# Pseudocode pattern
try:
    response = client.chat.completions.create(...)
except RateLimitError:
    # Wait and retry
    pass
except ContextLengthExceededError:
    # Truncate and retry
    pass
except APIError:
    # Log, alert, fallback
    pass
```

Don't just `.create()` and hope.

---

## 13. The Real Mental Model (Put This in Your Head)

Here's the model I want you to internalize:

```
User input + Context
        ↓
[Validation: token count, content policy, cost check]
        ↓
Model selection (chosen for task shape)
        ↓
Controlled reasoning
  - tools (with parallel execution)
  - structured outputs (with schema validation)
  - parameters (temperature, max_tokens)
  - limits (timeouts, budgets)
        ↓
[Error handling: retries, fallbacks, logging]
        ↓
Validated output
  - Parse structured data
  - Validate tool results
  - Check safety/business rules
        ↓
Application logic
```

**You are in control. The model is a component, not the boss.**

---

## 14. Common Antipatterns (What Not to Do)

### Security

- ❌ Don't store API keys in code
- ❌ Don't expose API keys in client-side JavaScript
- ❌ Don't trust user input without validation

### Reliability

- ❌ Don't assume the model will call your tool
- ❌ Don't parse text outputs when structured outputs exist
- ❌ Don't ignore token counts until production breaks

### Cost

- ❌ Don't use the most expensive model for everything
- ❌ Don't send entire conversation history on every call
- ❌ Don't use high temperature for deterministic tasks

### Design

- ❌ Don't build "memory" by keeping infinite message history
- ❌ Don't retry errors blindly
- ❌ Don't stream when your UX doesn't need it

Learn these now. They're expensive to learn in production.

---

## 15. What You'll Build Next (Preview)

In the next tutorial, we will write code, but not a toy.

We will:

- Make a real OpenAI SDK call
- Enforce structured output with JSON schema
- Validate failures and handle errors
- Design for extension (swap models, add tools)
- Track costs and tokens

No chatbots yet. We earn that later.

---

## 15. Out of Scope (For Now)

This tutorial focuses on core mental models. We're deliberately skipping:

**Advanced topics:**
- Fine-tuning and custom models
- Embeddings and vector search
- Multi-agent systems
- Batch API for async processing
- Vision API specifics (image generation, vision fine-tuning)

**Deployment concerns:**
- Production infrastructure patterns
- Monitoring and observability
- A/B testing model responses
- Security and compliance frameworks

**Optimization techniques:**
- Advanced prompt engineering patterns
- Chain-of-thought prompting
- Few-shot learning strategies
- Model distillation

We'll cover these when you have the fundamentals solid.

Right now: **understand the runtime, master the basics, build good habits**.

---

## 16. Mentor Homework (Important)

Before moving on, you should be able to answer:

1. **Why is "chat history" a misleading concept?**
   - Answer: Messages are context for a single reasoning run, not persistent memory. The model is stateless.

2. **When would you avoid streaming?**
   - Answer: When the user cannot interrupt, react to partial output, or when latency isn't a UX concern (batch processing, background tasks).

3. **Why are structured outputs more important than prompts?**
   - Answer: Structured outputs guarantee format, enable type safety, simplify validation, and reduce fragility from prompt tweaking.

4. **How would you swap models without rewriting logic?**
   - Answer: Abstract the model selection. Pass model name as a parameter, keep message structure and tool definitions model-agnostic.

5. **What happens when you exceed the context window?**
   - Answer: API returns an error (400). You must truncate input, summarize, or compress context before retrying.

6. **Why would you use temperature=0 for production workflows?**
   - Answer: Determinism. Same input produces consistent output, which is critical for classification, extraction, and reliable automation.

7. **When should a tool call be required vs optional?**
   - Answer: Required when the task cannot be completed without the tool (data lookup, external action). Optional when the model should decide if it's necessary.

If you can't answer these, reread this tutorial.

---

## 17. Next Steps

**Tutorial #2** will be hands-on code.

Choose your language:

- **Python** (recommended for most developers)
- **TypeScript** (if you're building web applications)

We'll build a production-grade baseline project with:

- Proper error handling
- Structured outputs
- Cost tracking
- Model abstraction
- Tool validation

Tell me: 👉 **Python or TypeScript?**
