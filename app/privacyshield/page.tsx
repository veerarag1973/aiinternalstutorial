'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  Shield, 
  Smartphone,
  Eye,
  BookOpen,
  Award,
  Lock,
  CheckCircle2,
  Brain,
  Target,
  Zap,
  Users,
  Menu,
  X
} from 'lucide-react';

export default function PrivacyShieldPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
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
          <div className="hidden md:flex items-center space-x-2">
            <Link href="/" className="flex items-center space-x-2 text-gray-600 hover:text-green-600 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              <span className="text-sm font-medium">Back to Home</span>
            </Link>
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
              <Link href="/" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Home</Link>
              <Link href="/products" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Products</Link>
              <Link href="/#consulting" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Consulting</Link>
              <Link href="/#training" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Training</Link>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center space-x-2 bg-green-50 border border-green-200 px-4 py-2 rounded-full text-sm text-green-700 font-medium shadow-sm">
            <Smartphone className="w-4 h-4" />
            <span>Android Mobile App</span>
          </div>
          <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <Shield className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            PrivacyShield
          </h1>
          <p className="text-2xl text-gray-600 font-medium">
            Understand Your Privacy
          </p>
          <p className="text-xl text-gray-600 leading-relaxed">
            An educational privacy dashboard that helps Android users see exactly what permissions their apps have and learn what they mean in plain English.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
            <button className="bg-gradient-to-r from-green-500 to-emerald-600 hover:from-green-600 hover:to-emerald-700 text-white px-8 py-4 rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl flex items-center justify-center space-x-2">
              <span>Coming Soon to Play Store</span>
            </button>
          </div>
        </div>
      </section>

      {/* What It Is Section */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-12">
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <CheckCircle2 className="w-8 h-8 text-green-600 mr-3" />
                What We ARE
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-semibold">A Facts Dashboard</p>
                    <p className="text-gray-600">See exactly what permissions your apps have</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-semibold">Educational Platform</p>
                    <p className="text-gray-600">Learn what permissions mean in plain English</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-green-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-900 font-semibold">Privacy-First Tool</p>
                    <p className="text-gray-600">100% offline, zero data collection</p>
                  </div>
                </li>
              </ul>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                <Target className="w-8 h-8 text-gray-400 mr-3" />
                What We're NOT
              </h2>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-600">Not a security monitoring tool</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-600">Not an enforcement platform</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-gray-400 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="text-gray-600">Not using fear tactics or surveillance</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Key Features</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
              <Eye className="w-7 h-7 text-green-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart App Analysis</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Scan all installed apps instantly</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Detect hidden apps with no icon</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Find unused apps with sensitive access</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span>Compare to category averages</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
              <BookOpen className="w-7 h-7 text-blue-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Education</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>18-question Privacy Quiz (3 levels)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>25 real-world privacy stories</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Plain English explanations</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span>Context-aware learning tips</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Brain className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Privacy Insights</h3>
            <ul className="space-y-3 text-gray-600">
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Privacy Score (0-100)</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>18 achievements to unlock</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Permission intelligence guides</span>
              </li>
              <li className="flex items-start space-x-2">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span>Shareable privacy reports</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Target Audience */}
      <section className="py-16 px-6 max-w-7xl mx-auto bg-gradient-to-br from-green-50 to-white rounded-3xl">
        <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Built For</h2>
        <div className="grid md:grid-cols-4 gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-green-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">The Curious User</h3>
            <p className="text-sm text-gray-600">Wants to understand what apps are doing</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Shield className="w-6 h-6 text-blue-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Privacy-Conscious</h3>
            <p className="text-sm text-gray-600">Knows privacy matters but unsure where to start</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-6 h-6 text-purple-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Parents</h3>
            <p className="text-sm text-gray-600">Want to understand family phones in plain language</p>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-200 text-center">
            <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="w-6 h-6 text-orange-600" />
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Students</h3>
            <p className="text-sm text-gray-600">Learning about digital privacy and security</p>
          </div>
        </div>
      </section>

      {/* Privacy First */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl p-12 text-white">
          <div className="text-center mb-12">
            <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-6">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-4xl font-bold mb-4">100% Privacy-First</h2>
            <p className="text-green-100 text-xl">Zero data collection. Complete transparency.</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Zap className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Works Offline</h3>
              <p className="text-green-100">No internet permission required</p>
            </div>
            <div className="text-center">
              <Shield className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Zero Tracking</h3>
              <p className="text-green-100">We collect absolutely nothing</p>
            </div>
            <div className="text-center">
              <Lock className="w-12 h-12 text-white mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">On-Device Only</h3>
              <p className="text-green-100">All processing happens locally</p>
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Built With Modern Tech</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                  <span className="text-blue-600 font-bold">F</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Flutter 3.10+</p>
                  <p className="text-sm text-gray-600">Cross-platform framework</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
                  <span className="text-green-600 font-bold">M3</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Material Design 3</p>
                  <p className="text-sm text-gray-600">Modern, beautiful UI</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
                  <span className="text-purple-600 font-bold">R</span>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Riverpod</p>
                  <p className="text-sm text-gray-600">State management</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">100% Offline</p>
                  <p className="text-sm text-gray-600">No cloud dependencies</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Local Knowledge Base</p>
                  <p className="text-sm text-gray-600">All explanations on-device</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center">
                  <CheckCircle2 className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Open Source</p>
                  <p className="text-sm text-gray-600">Transparent and auditable</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Products Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
              Explore Our Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover our suite of tools designed to help you use AI safely and responsibly
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* PrivacyShield Card - Current Product */}
            <div className="bg-gradient-to-br from-green-50 to-emerald-50 rounded-2xl p-8 shadow-lg border-2 border-green-200">
              <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Smartphone className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                PrivacyShield
                <span className="ml-3 text-xs bg-green-600 text-white px-3 py-1 rounded-full">You are here</span>
              </h3>
              <p className="text-gray-600 leading-relaxed mb-4">
                Mobile app that makes privacy education accessible through interactive quizzes, engaging stories, and plain English explanations.
              </p>
              <div className="flex flex-wrap gap-2 text-sm text-gray-500">
                <span className="bg-green-100 px-3 py-1 rounded-full">Android</span>
                <span className="bg-green-100 px-3 py-1 rounded-full">100% Offline</span>
                <span className="bg-green-100 px-3 py-1 rounded-full">Zero Data Collection</span>
              </div>
            </div>

            {/* More Products - Link to Products Page */}
            <Link href="/products" className="group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all border border-gray-100">
              <div className="w-16 h-16 bg-gradient-to-br from-blue-600 to-purple-600 rounded-2xl flex items-center justify-center mb-6 shadow-lg">
                <Shield className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-4 text-gray-900 flex items-center">
                View All Products
                <Zap className="w-6 h-6 ml-2 text-blue-600 group-hover:rotate-12 transition-transform" />
              </h3>
              <p className="text-gray-600 leading-relaxed">
                Explore our complete suite of products including enterprise MLOps tools, security platforms, privacy solutions, and compliance frameworks.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-gray-200 text-center bg-gradient-to-br from-gray-50 to-white">
        <p className="text-gray-500 text-sm">&copy; 2025 AI Internals, a SansqrTech Company. All rights reserved.</p>
      </footer>
    </div>
  );
}
