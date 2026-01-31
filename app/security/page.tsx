'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Shield, 
  Activity, 
  Lock, 
  AlertTriangle,
  FileSearch,
  Eye,
  CheckCircle2,
  ShieldCheck
} from 'lucide-react';

export default function SecurityPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-green-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 font-bold text-xl tracking-tight">AI Internals</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Security & Compliance
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Comprehensive AI security audits and privacy protection. We identify vulnerabilities, implement guardrails, and ensure your AI systems meet regulatory requirements.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Activity className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Red Team Assessment</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Adversarial testing to identify vulnerabilities before attackers do. We simulate real-world attack scenarios to stress-test your AI systems.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Prompt injection testing</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Jailbreaking attempts</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Data exfiltration scenarios</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Lock className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Protection</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Implement robust privacy controls to protect sensitive information. Real-time monitoring and filtering to prevent data leakage.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">PII detection & scrubbing</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Output content filtering</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Data anonymization techniques</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-green-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <ShieldCheck className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Auditing</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Ensure your AI systems meet regulatory standards including GDPR, EU AI Act, and industry-specific requirements.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">GDPR compliance assessment</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">EU AI Act readiness</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Documentation & reporting</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Threat Landscape */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">AI Security Threat Landscape</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <AlertTriangle className="w-6 h-6 text-green-600 mr-3" />
                Common Vulnerabilities
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Prompt Injection Attacks</p>
                    <p className="text-gray-600 text-sm">Malicious prompts that manipulate model behavior</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Training Data Poisoning</p>
                    <p className="text-gray-600 text-sm">Compromised training data affecting model integrity</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Model Inversion</p>
                    <p className="text-gray-600 text-sm">Extracting sensitive training data from models</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Adversarial Examples</p>
                    <p className="text-gray-600 text-sm">Carefully crafted inputs that fool AI systems</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <FileSearch className="w-6 h-6 text-green-600 mr-3" />
                Our Defense Strategies
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Input Validation</p>
                    <p className="text-gray-600 text-sm">Multi-layer filtering and sanitization of user inputs</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Output Monitoring</p>
                    <p className="text-gray-600 text-sm">Real-time analysis of model outputs for anomalies</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Access Control</p>
                    <p className="text-gray-600 text-sm">Fine-grained permissions and authentication systems</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Continuous Monitoring</p>
                    <p className="text-gray-600 text-sm">24/7 threat detection and incident response</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Audit Process */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Security Audit Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Reconnaissance', desc: 'Map your AI system architecture and identify attack surfaces', icon: Eye },
            { step: '02', title: 'Testing', desc: 'Execute comprehensive security tests and vulnerability scans', icon: Activity },
            { step: '03', title: 'Analysis', desc: 'Analyze findings and prioritize risks by severity', icon: FileSearch },
            { step: '04', title: 'Remediation', desc: 'Provide actionable recommendations and implementation support', icon: ShieldCheck }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-green-600 font-bold text-sm mb-2">STEP {item.step}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Secure Your AI Systems Today
          </h2>
          <p className="text-green-100 text-lg mb-8">
            Don't wait for a security breach. Schedule a comprehensive AI security audit with our expert team.
          </p>
          <button className="bg-white text-green-600 font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all">
            Request Security Audit
          </button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center bg-gradient-to-br from-gray-50 to-white">
        <p className="text-gray-500 text-sm">&copy; 2025 AI Internals. All rights reserved.</p>
      </footer>
    </div>
  );
}
