'use client';

import React from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Cpu, 
  Server, 
  Zap, 
  Database, 
  GitBranch, 
  Cloud,
  CheckCircle2,
  Code2
} from 'lucide-react';

export default function EngineeringPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Cpu className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 font-bold text-xl tracking-tight">AI Internals</span>
          </Link>
          <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            <span className="text-sm font-medium">Back to Home</span>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Cpu className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Engineering Excellence
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Transform your AI research into production-grade systems. We architect, build, and deploy scalable machine learning infrastructure that handles real-world workloads.
          </p>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">MLOps Pipelines</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              End-to-end automation for your machine learning lifecycle. From data ingestion to model deployment, we build robust CI/CD pipelines that ensure reliability and reproducibility.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Automated model training & versioning</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Continuous integration & deployment</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Model registry & experiment tracking</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Zap className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Performance Optimization</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Reduce inference latency and infrastructure costs without sacrificing accuracy. Our optimization techniques deliver 40-60% cost savings on average.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Model quantization & pruning</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Knowledge distillation</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">GPU/TPU optimization strategies</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-blue-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <Cloud className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Cloud Architecture</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Design and deploy cloud-native AI infrastructure that scales with your needs. Multi-cloud support for AWS, Azure, and GCP.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Kubernetes orchestration</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Auto-scaling & load balancing</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Cost optimization & monitoring</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Technical Capabilities */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Technical Capabilities</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Database className="w-6 h-6 text-blue-600 mr-3" />
                Data Engineering
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Data Pipeline Development</p>
                    <p className="text-gray-600 text-sm">Build robust ETL pipelines for large-scale data processing</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Feature Engineering</p>
                    <p className="text-gray-600 text-sm">Design and implement feature stores for ML systems</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Data Quality Monitoring</p>
                    <p className="text-gray-600 text-sm">Implement validation and monitoring for data drift</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <GitBranch className="w-6 h-6 text-blue-600 mr-3" />
                Model Development
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Model Architecture Design</p>
                    <p className="text-gray-600 text-sm">Custom architectures tailored to your specific use case</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Hyperparameter Tuning</p>
                    <p className="text-gray-600 text-sm">Automated optimization for peak performance</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Transfer Learning</p>
                    <p className="text-gray-600 text-sm">Leverage pre-trained models to accelerate development</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Our Engineering Process</h2>
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { step: '01', title: 'Discovery', desc: 'Understand your requirements and current infrastructure', icon: Code2 },
            { step: '02', title: 'Architecture', desc: 'Design scalable systems aligned with your goals', icon: Cpu },
            { step: '03', title: 'Implementation', desc: 'Build and test production-ready solutions', icon: Server },
            { step: '04', title: 'Deployment', desc: 'Launch with monitoring and ongoing support', icon: Cloud }
          ].map((item, idx) => (
            <div key={idx} className="text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center mx-auto mb-4 shadow-lg">
                <item.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-blue-600 font-bold text-sm mb-2">STEP {item.step}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Build Production-Grade AI?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Let's discuss how we can transform your AI initiatives into scalable, reliable systems.
          </p>
          <button className="bg-white text-blue-600 font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all">
            Schedule a Consultation
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
