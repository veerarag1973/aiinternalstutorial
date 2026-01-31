'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Shield, 
  Lock,
  Activity,
  Smartphone,
  Server,
  Eye,
  Zap,
  ChevronRight,
  Cpu,
  Terminal,
  Menu,
  X
} from 'lucide-react';

export default function ProductsPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Terminal className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 font-bold text-xl tracking-tight">AI Internals</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</Link>
            <Link href="/#consulting" className="text-gray-600 hover:text-blue-600 transition-colors">Consulting</Link>
            <Link href="/#training" className="text-gray-600 hover:text-blue-600 transition-colors">Training</Link>
            <Link href="/contact" className="text-gray-600 hover:text-blue-600 transition-colors">Contact Us</Link>
          </div>
          <button 
            className="md:hidden text-gray-900"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-6 py-4 space-y-4">
              <Link href="/products" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link href="/#consulting" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Consulting</Link>
              <Link href="/#training" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Training</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-8">
          <div className="inline-flex items-center space-x-2 bg-blue-50 border border-blue-200 px-4 py-2 rounded-full text-sm text-blue-700 font-medium shadow-sm">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
            <span>Building the Future of Safe AI</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-gray-900 tracking-tight leading-tight">
            Our Products
          </h1>
          
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building essential tools that help teams deploy AI safely and responsibly. From mobile privacy education to enterprise security platforms, our products focus on making AI deployment secure, compliant, and trustworthy.
          </p>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-blue-600 to-purple-600 rounded-3xl p-12 md:p-16 text-white shadow-2xl">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Our Vision</h2>
            <p className="text-xl text-blue-100 leading-relaxed mb-8">
              AI is transforming how we build software, but it brings new challenges in security, privacy, and compliance. We're creating tools that don't compromise—products that let you ship AI confidently while protecting user data and meeting regulatory standards.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Shield className="w-10 h-10 text-white mb-4" />
                <h3 className="text-lg font-bold mb-2">Security by Default</h3>
                <p className="text-blue-100 text-sm">Built-in guardrails that prevent vulnerabilities before they reach production</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Lock className="w-10 h-10 text-white mb-4" />
                <h3 className="text-lg font-bold mb-2">Privacy First</h3>
                <p className="text-blue-100 text-sm">Automatic PII detection and protection at every layer</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <Activity className="w-10 h-10 text-white mb-4" />
                <h3 className="text-lg font-bold mb-2">Always Compliant</h3>
                <p className="text-blue-100 text-sm">GDPR and EU AI Act compliance built into the core</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Product Philosophy */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 text-center">What Guides Us</h2>
          <div className="space-y-8">
            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-blue-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Transparency Over Obscurity</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Users deserve to know what's happening with their data and AI systems. Our products provide clear visibility into permissions, data flows, and security posture—no black boxes, no hidden behaviors.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Education Over Fear</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We don't use scare tactics. Our products educate users in plain English about risks and tradeoffs, empowering informed decisions rather than creating panic or anxiety about technology.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-6 h-6 text-purple-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Action Over Alerts</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Passive monitoring isn't enough. Our tools provide actionable guidance—clear steps to fix issues, intelligent recommendations, and automated remediation where possible.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border-2 border-gray-200 p-8">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-orange-100 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lock className="w-6 h-6 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">Privacy as Standard</h3>
                  <p className="text-gray-600 leading-relaxed">
                    We practice what we preach. Our products collect zero unnecessary data, work offline when possible, and are built with privacy-first architecture from day one.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Current Products */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Products</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Tools designed to make AI safe and accessible for everyone
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* PrivacyShield */}
          <Link href="/privacyshield" className="group">
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl border-2 border-green-200 p-8 hover:border-green-400 hover:shadow-2xl transition-all h-full">
              <div className="flex items-start justify-between mb-6">
                <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                  <Smartphone className="w-8 h-8 text-white" />
                </div>
                <div className="inline-flex items-center space-x-2 bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-medium">
                  <span className="w-2 h-2 bg-green-500 rounded-full"></span>
                  <span>Android App</span>
                </div>
              </div>
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                PrivacyShield
                <ChevronRight className="w-6 h-6 text-green-600 group-hover:translate-x-2 transition-transform" />
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                An educational privacy dashboard for Android that helps users understand what permissions their apps have. Features privacy quizzes, real-world stories, and plain English explanations.
              </p>
              <div className="space-y-2">
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Shield className="w-4 h-4 text-green-600" />
                  <span>100% offline, zero data collection</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Eye className="w-4 h-4 text-green-600" />
                  <span>Smart app analysis & hidden app detection</span>
                </div>
                <div className="flex items-center space-x-2 text-sm text-gray-600">
                  <Activity className="w-4 h-4 text-green-600" />
                  <span>Privacy education through gamification</span>
                </div>
              </div>
              <div className="mt-6 pt-6 border-t border-green-200">
                <p className="text-sm text-green-700 font-semibold">Learn more →</p>
              </div>
            </div>
          </Link>

          {/* Coming Soon Card */}
          <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl border-2 border-gray-200 p-8 relative overflow-hidden">
            <div className="absolute top-4 right-4">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-medium">
                <span className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></span>
                <span>In Development</span>
              </div>
            </div>
            <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg mb-6">
              <Server className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-3xl font-bold text-gray-900 mb-4">More Coming Soon</h3>
            <p className="text-gray-600 leading-relaxed mb-6">
              We're working on innovative solutions across multiple areas to help organizations deploy AI safely and responsibly at scale.
            </p>
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Shield className="w-4 h-4 text-blue-600" />
                </div>
                <span>Enterprise security solutions</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="w-8 h-8 bg-purple-100 rounded-lg flex items-center justify-center">
                  <Lock className="w-4 h-4 text-purple-600" />
                </div>
                <span>Privacy & compliance tools</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-gray-600">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Activity className="w-4 h-4 text-green-600" />
                </div>
                <span>AI operations & monitoring</span>
              </div>
            </div>
            <div className="mt-6 pt-6 border-t border-gray-200">
              <p className="text-sm text-gray-500 font-medium">Stay tuned for updates</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 bg-gradient-to-br from-blue-600 to-purple-600">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">Get In Touch</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Ready to build secure, scalable AI systems? Whether you need consulting, training, or our products — let's discuss how we can help you succeed.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-600 px-10 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl">
            Contact Us
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center bg-gradient-to-br from-gray-50 to-white">
        <p className="text-gray-500 text-sm">&copy; 2025 AI Internals, a SansqrTech Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
