# 🚀 GPUTop Pro - GPU Monitoring API for AI Infrastructure

**REST API for GPU Monitoring, Cost Analytics & Performance Diagnostics**

A high-performance GPU monitoring service built in Rust. GPUTop Pro provides real-time metrics, cost tracking, bottleneck detection, and health monitoring through a comprehensive REST API with OpenAPI documentation.

Perfect for ML infrastructure teams, GPU cluster operators, AI platform builders, and cloud GPU users.

![GPUTop Demo](https://img.shields.io/badge/Platform-Linux%20%7C%20Windows-blue)
![Rust](https://img.shields.io/badge/Language-Rust-orange)
![License](https://img.shields.io/badge/License-MIT-green)
![Version](https://img.shields.io/badge/Version-2.5.0-brightgreen)



**What you get:**
- ✅ Production-ready binary (Windows/Linux)
- ✅ Full REST API access
- ✅ OpenAPI/Swagger documentation
- ✅ Multi-vendor GPU support
- ✅ Lifetime updates for v2.x
- ✅ Priority email support

---

## ✨ Features

### 🌐 REST API & Integration
- **Axum-based HTTP server** - High-performance async API
- **8 core endpoints** - GPUs, metrics, health, bottlenecks, suggestions, runs, cost estimation
- **OpenAPI 3.0 documentation** - Auto-generated API schemas  
- **Swagger UI** - Interactive API explorer at `/swagger-ui`
- **CORS enabled** - Cross-origin requests supported
- **JSON responses** - Clean, typed API responses

### 🔥 Multi-Vendor GPU Monitoring
- **NVIDIA GPUs** - Native NVML integration for real-time metrics
- **AMD GPUs** - ROCm-SMI support for RDNA/CDNA cards
- **Intel GPUs** - XPU-SMI/Level-Zero for Arc/Xe GPUs
- **Multi-GPU support** - Monitor all GPUs simultaneously
- **Real-time metrics** - Utilization, memory, temperature, power, clocks
- **Process tracking** - GPU process monitoring with PID/command details

### 📊 Live Telemetry & Real-Time Diagnostics
- **Comprehensive metric collection** - NVIDIA `nvidia-smi dmon` equivalent, fully programmable
- **Utilization tracking:**
  - GPU compute utilization (%)
  - Memory controller utilization (%)
  - Video encoder utilization (%)
  - Video decoder utilization (%)
- **VRAM monitoring:**
  - Used, total, free memory (bytes)
  - Real-time usage percentages
- **Thermal sensors:**
  - GPU core temperature
  - Memory temperature (NVIDIA)
  - Hotspot/junction temperature
  - Fan speed monitoring
- **Power metrics:**
  - Current power draw (W)
  - Power limits and states (P0-P12)
  - Power usage percentage
- **Clock speeds:**
  - GPU, memory, SM, video clocks (MHz)
  - Maximum clock frequencies
- **PCIe throughput:**
  - TX/RX bandwidth (MB/s, GB/s)
  - PCIe generation (1-5) and link width (x1-x16)
  - Real-time bus utilization
- **Per-GPU timelines:**
  - Historical data with configurable retention (default: 300 points)
  - Time-series analysis and statistics
  - Average, peak, and trend calculations
- **Throttle detection:**
  - Active throttling reasons (thermal, power, etc.)
  - Performance state monitoring
- **Process-level metrics:**
  - Per-process GPU utilization
  - Per-process VRAM allocation
  - Encoder/decoder usage by process
- **See `TELEMETRY.md` for complete API documentation**

### 🔍 Automatic Bottleneck Detection
- **6 bottleneck types detected:**
  - Memory bottleneck (VRAM exhaustion)
  - Thermal bottleneck (temperature throttling)  
  - Power-limit bottleneck (hitting TDP ceiling)
  - I/O bottleneck (GPU idle while CPU busy)
  - Compute vs VRAM imbalance
  - Underutilization warnings
- **Real-time severity scoring** (0-100 scale)
- **Actionable explanations** for each bottleneck
- **Available via `/api/v1/bottlenecks` endpoint**

### 🏥 Health Monitoring
- **Comprehensive health scoring** (0-100 scale)
- **Temperature analytics** - Trends, peaks, critical thresholds
- **Power analysis** - Efficiency metrics, spike detection
- **Memory health** - Usage trends, leak detection
- **Thermal throttling detection** - Real-time status
- **Health alerts** - Critical condition warnings
- **Available via `/api/v1/gpus/:id/health` endpoint**

### 📈 Model Run Tracking
- **Track training/inference sessions** with comprehensive metrics
- **Session metrics captured:**
  - Peak and average memory usage
  - GPU utilization statistics
  - Temperature readings
  - Power consumption
  - Runtime duration
  - Detected bottlenecks
  - Estimated rental costs
- **Run history** - Store up to 30 runs with persistence
- **Available via `/api/v1/runs` endpoints** (GET/POST)

### 💰 Enhanced GPU Cost Analytics
- **6 cloud providers supported:**
  - Vast.ai, RunPod, Lambda Labs (GPU rentals)
  - AWS (p3/p4/g5 instances)
  - Google Cloud Platform (A100/V100/T4/L4/H100)
  - Microsoft Azure (NC/ND series)
- **60+ GPU/provider combinations** in pricing database
- **Cost forecasting** - Hourly/daily/monthly projections
- **Budget tracking** - Monitor spending against thresholds
- **Provider recommendations** - Find cheapest options automatically
- **REST API endpoint** - `POST /api/v1/cost/estimate` for programmatic access

### 💡 Optimization Suggestions
- **AI-focused recommendations** based on detected issues
- **4 priority levels**: Critical, High, Medium, Low
- **6 suggestion categories:**
  - Memory optimization (batch size, VRAM management)
  - Thermal management (cooling solutions)
  - Power optimization (efficiency tuning)
  - Compute efficiency (utilization improvements)
  - Process management (workload conflicts)
  - Configuration tuning (driver/system settings)
- **Context-aware** - Suggestions adapt to current GPU state
- **Available via `/api/v1/suggestions` endpoint**
---

## 🛠️ Installation

### Prerequisites
- **GPU Drivers** with monitoring APIs:
  - NVIDIA: Latest drivers with NVML support
  - AMD: ROCm drivers (optional)
  - Intel: Latest GPU drivers (optional)

### Download

**Windows:**
[Download gputop-v2.5.0-windows-x64.zip](https://github.com/humaxai2025/gputop/releases/latest)

**Linux:**
```bash
# Coming soon - build from source for now
```

### Building from Source

```bash
# Clone the repository
git clone https://github.com/humaxai2025/gputop.git
cd gputop

# Build with all vendors + API server (recommended)
cargo build --release --features all-vendors,api-server

# Install globally
cargo install --path .
```

## 🚀 Quick Start

### Start the API Server

```bash
# Start on default port 8080
gputop --api

# Start on custom port
gputop --api --port 3000
```

### Test the API

```bash
# List all GPUs
curl http://localhost:8080/api/v1/gpus

# Get GPU metrics
curl http://localhost:8080/api/v1/gpus/0/metrics

# Get health status
curl http://localhost:8080/api/v1/gpus/0/health

# Get bottleneck detections
curl http://localhost:8080/api/v1/bottlenecks

# Get optimization suggestions
curl http://localhost:8080/api/v1/suggestions

# Estimate costs
curl -X POST http://localhost:8080/api/v1/cost/estimate \
  -H "Content-Type: application/json" \
  -d '{"gpu_name":"RTX 4090","duration_seconds":86400}'
```

### Access Swagger Documentation

Open your browser to: **http://localhost:8080/swagger-ui**

---
## 🌐 REST API Reference

### API Endpoints

#### GPU Management

**GET /api/v1/gpus**
- Lists all detected GPUs with real-time metrics
- Returns: Array of GPU objects with utilization, memory, temperature, power, etc.

**GET /api/v1/gpus/:id/metrics**
- Detailed metrics for specific GPU (by index)
- Returns: Complete GPU state snapshot

**GET /api/v1/gpus/:id/health**
- Health assessment for specific GPU
- Returns: Health score, alerts, temperature/power/memory analysis

#### Analysis & Optimization

**GET /api/v1/bottlenecks**
- Current bottleneck detections across all GPUs
- Returns: Array of detected bottlenecks with severity scores

**GET /api/v1/suggestions**
- Optimization recommendations based on current state
- Returns: Prioritized list of actionable suggestions

#### Run Tracking

**GET /api/v1/runs**
- Model run history
- Returns: Array of past runs with metrics

**POST /api/v1/runs**
- Create new run record
- Body: `{"model_name": "string", "notes": "string"}`
- Returns: Created run object

#### Cost Estimation

**POST /api/v1/cost/estimate**
- Calculate GPU rental costs across providers
- Body: `{"gpu_name": "RTX 3090", "duration_seconds": 86400, "provider": "vastai"}`
- Returns: Cost estimates for all matching providers with recommendations

### OpenAPI Documentation

Interactive API documentation available at:
```
http://localhost:8080/swagger-ui
```

Swagger UI provides:
- Complete API schema
- Request/response examples
- Try-it-out functionality
- Model definitions

---

## 🖥️ Terminal UI (TUI)

In addition to the REST API, GPUTop includes a rich terminal interface:

```bash
# Start interactive TUI (default)
gputop

# Update interval in milliseconds
gputop --interval 500

# Monitor specific GPU
gputop --gpu 0
```

### TUI Features

**Real-time Dashboard:**
- **5 live gauges** - GPU compute, memory controller, temperature, encoder, decoder
- **System status bar** - Power (current/limit), fan speed, clocks, PCIe throughput, throttle status
- **Processes view** - Running processes with GPU%, VRAM%, encoder/decoder usage

**Performance View:**
- Time-series charts for GPU utilization, memory usage, temperature, power
- Real-time metrics bar showing all telemetry data
- Memory controller and encoder/decoder utilization
- PCIe throughput monitoring (TX/RX in GB/s)

**Hardware View:**
- Complete GPU specifications and current state
- All utilization metrics (compute, memory, encoder, decoder)
- Detailed memory statistics (used/total/free)
- Thermal monitoring (GPU, memory, hotspot temperatures)
- Power metrics (draw, limit, state)
- All clock speeds (GPU, memory, SM, video) with max clocks
- PCIe information (generation, link width, throughput)
- Throttle status with specific reasons
- ECC errors, compute mode, performance state

**Health View:**
- Health score (0-100) with visual indicators
- Temperature, power, and memory health breakdown
- Trend analysis and peak values
- Critical alerts and warnings

**Bottlenecks View:**
- Real-time bottleneck detection
- Severity scores and explanations
- Actionable recommendations

**Keyboard Shortcuts:**
- `1-7` - Switch between views
- `Tab/←→` - Cycle through GPUs
- `s` - Settings
- `h` - Help
- `q/Esc` - Quit

### Integration Examples

**Python**
```python
import requests

# Get GPU metrics
response = requests.get('http://localhost:8080/api/v1/gpus')
gpus = response.json()
print(f"GPU 0 Utilization: {gpus[0]['utilization']}%")

# Cost estimation
cost_req = {
    "gpu_name": "RTX 4090",
    "duration_seconds": 3600 * 24,  # 24 hours
}
response = requests.post('http://localhost:8080/api/v1/cost/estimate', json=cost_req)
estimates = response.json()
print(f"24hr cost: ${estimates['estimates'][0]['total_cost']:.2f}")
```

**Node.js**
```javascript
const axios = require('axios');

// Get GPU health
const health = await axios.get('http://localhost:8080/api/v1/gpus/0/health');
console.log(`Health Score: ${health.data.health_score}`);

// Get optimization suggestions
const suggestions = await axios.get('http://localhost:8080/api/v1/suggestions');
suggestions.data.forEach(s => {
  console.log(`[${s.priority}] ${s.title}: ${s.description}`);
});
```

**curl**
```bash
# Monitor GPU in real-time
watch -n 1 'curl -s http://localhost:8080/api/v1/gpus | jq ".[0] | {util:.utilization, temp:.temperature, mem_used:.memory_used}"'

# Get cost estimates
curl -X POST http://localhost:8080/api/v1/cost/estimate \
  -H "Content-Type: application/json" \
  -d '{"gpu_name":"A100","duration_seconds":86400}'
```

### Use Cases

- **Grafana Dashboards** - Poll API for time-series GPU metrics
- **Alerting Systems** - Monitor `/health` endpoint, trigger on critical alerts
- **CI/CD Pipelines** - Track model training costs via `/cost/estimate`
- **Auto-scaling** - Scale GPU instances based on utilization metrics
- **Slack Bots** - Post GPU status updates to team channels
- **Custom Monitoring** - Integrate with existing observability stacks


## 📊 Data Export Features

### Export Types
| Export | Hotkey | Content |
|--------|--------|---------|
| **Full Snapshot** | `Ctrl+E` | Complete system state: GPU info, processes, health metrics |
| **Process Data** | `Ctrl+S` | Current GPU processes with detailed statistics |
| **Health Report** | Via API | Health metrics, alerts, and analysis data |

### Export Format
- **CSV Format** - Standard comma-separated values
- **Timestamped** - All data includes precise timestamps
- **Auto-naming** - Files named with date/time (e.g., `gputop_snapshot_20240101_143022.csv`)
- **Comprehensive** - Includes all available metrics and metadata

### Export Data Includes
- GPU specifications and current state
- Process information (PID, user, command, usage)
- Health metrics and scores
- Temperature, power, and memory analytics
- Historical trends and alerts
- System configuration and uptime

## ⚙️ Settings & Configuration

### Settings Management
- **Interactive Settings Panel** - Access with `Alt+S`
- **Health Thresholds** - Customize temperature, power, memory limits  
- **Notification Settings** - Configure desktop notifications
- **Update Intervals** - Adjust monitoring frequency
- **Persistent Storage** - Settings saved to `~/.config/gputop/settings.json`

### Configurable Thresholds
```json
{
  "health_thresholds": {
    "temperature_warning": 80.0,
    "temperature_critical": 90.0,
    "power_warning": 85.0,
    "power_critical": 95.0,
    "memory_usage_warning": 80.0,
    "memory_usage_critical": 95.0
  }
}
```

### Command Line Options

```bash
gputop [OPTIONS]

OPTIONS:
    -i, --interval <INTERVAL>    Update interval in milliseconds [default: 1000]
    -g, --gpu <GPU>             GPU to monitor (0-indexed)
    -d, --debug                 Enable debug mode
    -h, --help                  Print help information
    -V, --version               Print version information
```

### Command Palette Commands (20+)

Access with `Ctrl+P`:

**Navigation & Views:**
- `show processes` - Switch to Processes view
- `show performance` or `show perf` - Switch to Performance view
- `show hardware` or `show hw` - Switch to Hardware view
- `show health` - Switch to Health view
- `show bottlenecks` - Switch to Bottlenecks view
- `show suggestions` - Switch to Suggestions view
- `show runs` or `show history` - Switch to Run History view

**Export & Reports:**
- `export report` - Export HTML health report
- `export snapshot` - Export CSV system snapshot
- `export processes` - Export process data to CSV

**Run Tracking:**
- `start recording` or `start run` - Start tracking model run
- `stop recording` or `stop run` - Stop tracking current run
- `run summary` - Show current run statistics

**Utilities:**
- `quit` or `q` - Exit application
- `sort pid` / `sort user` / `sort gpu` / `sort memory` / `sort command` - Sort process list
- `tree` - Toggle tree view
- `collapse` - Toggle pane collapse
- `help` - Show help modal

## 🏗️ Architecture

GPUTop Pro is built with a modular architecture:

```
src/
├── main.rs          # Application entry point & CLI parsing
├── app.rs           # Application state & event handling  
├── gpu.rs           # GPU detection & monitoring
├── process.rs       # Process management & detection
├── ui.rs            # Terminal UI rendering (7 view modes)
├── health.rs        # Health monitoring system
├── analysis.rs      # 🆕 Bottleneck detection engine
├── runlog.rs        # 🆕 Model run tracking & comparison
├── cost.rs          # 🆕 GPU rental cost estimation
├── suggestions.rs   # 🆕 Optimization suggestions engine
├── report.rs        # 🆕 HTML health report generation
├── export.rs        # Data export functionality
├── settings.rs      # Configuration management
├── notifications.rs # Desktop notification system
└── utils.rs         # Utility functions & helpers
```

### Key Components

- **GPU Manager** - NVIDIA GPU detection via NVML with fallback mock data
- **Process Manager** - GPU process tracking with system process filtering and termination
- **Health Monitor** - Advanced health analytics and alerting system
- **Bottleneck Analyzer** - 🆕 Automatic bottleneck detection with 6 detection types
- **Run Logger** - 🆕 Model run tracking with JSON persistence and comparison
- **Cost Estimator** - 🆕 GPU rental cost tracking for Vast.ai, RunPod, Lambda Labs
- **Suggestion Engine** - 🆕 Rule-based optimization recommendations
- **Report Generator** - 🆕 HTML health report export with CSS styling
- **Export System** - Comprehensive data export with multiple formats
- **Settings Manager** - Configuration persistence and management
- **Notification System** - Desktop alerts for critical conditions
- **UI Engine** - Modern terminal interface with ratatui and 7 view modes
- **Event System** - Async event handling with tokio

## 🔌 GPU Vendor Support

### NVIDIA (Full Support)
- **NVML integration** - Complete hardware monitoring via nvml-wrapper
- **All telemetry metrics:**
  - Compute, memory controller, encoder, decoder utilization
  - VRAM usage (used/total/free)
  - GPU, memory, hotspot temperatures
  - Power draw, limits, and states (P0-P12)
  - All clock domains (GPU, memory, SM, video) with max clocks
  - PCIe throughput (TX/RX) and generation detection
  - Throttle reason analysis (thermal, power, HW slowdown)
  - ECC error monitoring
  - Compute mode and performance states
- **Process tracking** - Real-time GPU process detection and management
- **Multi-GPU** - Support for multiple NVIDIA GPUs with independent tracking
- **Health analytics** - Advanced health scoring and trend analysis

### AMD (Partial Support)
- **ROCm-SMI integration** - Command-line tool wrapper
- **Available metrics:**
  - GPU utilization, VRAM usage, temperature
  - Power draw and clock speeds
- **Limited:** Encoder/decoder metrics, PCIe throughput
- Framework ready for expansion

### Intel (Partial Support)
- **XPU-SMI integration** - Intel GPU monitoring tool
- **Available metrics:**
  - GPU utilization, VRAM usage, temperature, power
- **Limited:** Advanced telemetry features
- Framework ready for expansion

### Fallback Mode
- Mock GPU data when no hardware detected
- Demonstrates all features without GPU hardware
- Realistic simulated telemetry for development
- Full UI functionality for testing

## 🏥 Health Monitoring System

### Health Scoring Algorithm
The health score (0-100) combines multiple factors:
- **Temperature Health** (40% weight) - Based on current temp vs. safe limits
- **Power Efficiency** (30% weight) - GPU utilization per watt consumed
- **Memory Health** (30% weight) - Leak detection and fragmentation analysis

### Alert System
- **Temperature Alerts** - Warning at 80°C, critical at 90°C
- **Power Alerts** - Efficiency drops and consumption spikes
- **Memory Alerts** - Potential leaks and high fragmentation
- **Thermal Throttling** - Real-time throttling detection

### Health Status Levels
- 🟢 **Excellent** (90-100) - Optimal performance, no issues
- 🔵 **Good** (70-89) - Normal operation, minor concerns
- 🟡 **Warning** (50-69) - Attention needed, potential issues
- 🔴 **Critical** (0-49) - Immediate attention required

## 🔔 Notification System

### Desktop Notifications
- **Export Success/Failure** - File export status updates
- **Health Alerts** - Critical condition notifications  
- **Process Events** - Process termination confirmations
- **System Status** - Throttling and performance alerts

### Notification Settings
- **Enable/Disable** - Toggle notifications on/off
- **Minimum Interval** - Prevent notification spam
- **Selective Types** - Choose which events trigger notifications

## 🤝 Contributing

We welcome contributions! 

### Development Setup

```bash
# Clone and setup
git clone https://github.com/yourusername/gputop.git
cd gputop

# Install development dependencies
rustup component add rustfmt clippy

# Run with mock data (no GPU required)
cargo run

# Format code
cargo fmt

# Lint code
cargo clippy
```

### Adding New Features
- **Health Metrics** - Extend health monitoring in `src/health.rs`
- **Export Formats** - Add new export types in `src/export.rs`
- **GPU Vendors** - Add AMD/Intel support in `src/gpu.rs`
- **UI Components** - Enhance interface in `src/ui.rs`

## 📦 Dependencies

### Core Dependencies
- **ratatui** - Modern terminal UI framework
- **crossterm** - Cross-platform terminal manipulation
- **tokio** - Async runtime for real-time updates
- **sysinfo** - System process information
- **clap** - Command-line argument parsing
- **chrono** - Date/time handling for timestamps
- **serde** - Serialization for settings and export

### GPU & System Support
- **nvml-wrapper** - NVIDIA GPU monitoring (optional feature)
- **nix** - Unix process signals (Unix only)
- **dirs** - User configuration directory access
- **anyhow** - Error handling and propagation

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **[ratatui](https://github.com/ratatui-org/ratatui)** - Modern terminal UI framework
- **[nvml-wrapper](https://github.com/Cldfire/nvml-wrapper)** - NVIDIA GPU monitoring
- **[sysinfo](https://github.com/GuillaumeGomez/sysinfo)** - System information
- **[tokio](https://github.com/tokio-rs/tokio)** - Async runtime

## 🐛 Known Issues

- Windows process termination requires proper permissions
- AMD/Intel GPU detection uses CLI tools (rocm-smi, xpu-smi) - requires vendor drivers installed
- Mock data shown when no compatible GPU hardware detected
- Process filtering heuristic may include non-GPU processes
- PowerShell notification system temporarily disabled on Windows

## 📚 Documentation

- **[TELEMETRY.md](TELEMETRY.md)** - Complete live telemetry API documentation
- **[TELEMETRY_QUICKREF.md](TELEMETRY_QUICKREF.md)** - Quick reference for telemetry usage
- **[examples/telemetry_demo.rs](examples/telemetry_demo.rs)** - Working telemetry example

## 📊 Performance

GPUTop Pro is designed to be lightweight and efficient:

- **Binary size**: ~3.5 MB (optimized release build with API server)
- **Memory usage**: ~10-20MB RAM (TUI), ~15-30MB (API server mode)
- **Telemetry overhead**: <1ms per GPU (NVIDIA), ~10ms (AMD/Intel)
- **CPU usage**: <2% on modern systems
- **Update frequency**: Configurable (default 1Hz)
- **Startup time**: <500ms (TUI), <1s (API server)
- **Data retention**: 300 telemetry points per GPU (5 minutes at 1Hz) + 30 run logs
- **Export speed**: Sub-second for CSV, ~1s for HTML reports
- **API response time**: <10ms for most endpoints

## 💰 Pricing & Licensing

**GPUTop Pro** - $24.99 (one-time purchase)
- Lifetime updates up to major version 2.0
- All premium features included:
  - Automatic bottleneck detection
  - Model run tracking & comparison
  - GPU rental cost estimation
  - Optimization suggestions
  - HTML health reports
- Priority roadmap voting
- Email support

### Why $24.99?
GPUTop Pro isn't just a monitor—it's a **diagnostics and optimization tool** that:
- Saves you hours of debugging performance issues
- Helps reduce GPU rental costs through optimization
- Prevents hardware damage through proactive health monitoring
- Accelerates model development with run insights

Perfect for solo developers, local LLM users, AI builders, and anyone serious about GPU performance.

## 🚀 Roadmap

### Version 2.0 (Rust Desktop GUI)
- **Tauri or Egui-based desktop app** - Beautiful native GUI
- **Visual charts** - Interactive performance graphs
- **Multi-GPU dashboard** - Side-by-side GPU comparison
- **Desktop notifications** - Enhanced alert system
- **Run comparison UI** - Visual run diff interface
- **Shared engine** - CLI backend powers GUI

### Phase 2 Features (Enterprise Edition)
- ✅ **AMD GPU Support** - Implemented via ROCm-SMI (v2.5.0)
- ✅ **Intel GPU Support** - Implemented via XPU-SMI/Level-Zero (v2.5.0)
- ✅ **REST API** - Full HTTP API with OpenAPI docs (v2.5.0)
- ✅ **Enhanced Cost Analytics** - 6 cloud providers with forecasting (v2.5.0)
- ✅ **Live Telemetry System** - Comprehensive metrics collection and timeline tracking (v2.5.0)
- **Authentication & Authorization** - JWT tokens, API keys, RBAC
- **Multi-node Monitoring** - Centralized GPU cluster dashboard
- **Persistent Storage** - PostgreSQL/SQLite for historical metrics
- **Advanced Alerting** - Slack/PagerDuty/email webhooks
- **Container Deployment** - Docker image + Kubernetes Helm charts
- **Advanced Analytics** - ML-based health predictions
- **Plugin System** - Extensible monitoring plugins
- **Prometheus/InfluxDB Export** - Time-series database integration
- **WebSocket Streaming** - Real-time telemetry push

---

## 🎯 Who Is This For?

✅ **ML Infrastructure Teams** - Monitor GPU clusters, track costs, integrate with dashboards  
✅ **AI Platform Builders** - Embed GPU monitoring in your SaaS product via REST API  
✅ **Cloud GPU Users** - Track rental costs across Vast.ai, RunPod, Lambda Labs, AWS, GCP, Azure  
✅ **ML Engineers** - Diagnose bottlenecks, optimize training runs, prevent thermal throttling  
✅ **DevOps Teams** - Integrate with Grafana/Prometheus, automate GPU health monitoring  

---

## 📞 Support

- **GitHub Issues**: [Report bugs](https://github.com/humaxai2025/gputop/issues)
- **Email**: support@gputoppro.com (Pro license holders)
- **Documentation**: Full API docs at `/swagger-ui`

---

**Made with ❤️ in Rust | Version 2.5.0 - Commercial Edition**

*GPU monitoring for production AI infrastructure. Monitor smarter, not harder.*
