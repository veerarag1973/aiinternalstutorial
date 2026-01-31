'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  ArrowLeft, 
  BookOpen, 
  Server, 
  Shield, 
  Users,
  GraduationCap,
  Award,
  CheckCircle2,
  Laptop,
  Menu,
  X
} from 'lucide-react';

export default function TrainingPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      {/* Navigation */}
      <nav className="border-b border-gray-200 bg-white/90 backdrop-blur-md fixed w-full z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-purple-600 rounded-lg flex items-center justify-center shadow-lg">
              <Shield className="w-5 h-5 text-white" />
            </div>
            <span className="text-gray-900 font-bold text-xl tracking-tight">AI Internals</span>
          </Link>
          <div className="hidden md:flex space-x-8 text-sm font-medium">
            <Link href="/products" className="text-gray-600 hover:text-blue-600 transition-colors">Products</Link>
            <a href="/#consulting" className="text-gray-600 hover:text-blue-600 transition-colors">Consulting</a>
            <a href="/#training" className="text-gray-600 hover:text-blue-600 transition-colors">Training</a>
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
              <a href="/#consulting" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Consulting</a>
              <a href="/#training" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Training</a>
              <Link href="/contact" className="block text-gray-600 hover:text-blue-600 transition-colors py-2" onClick={() => setMobileMenuOpen(false)}>Contact Us</Link>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl flex items-center justify-center mx-auto shadow-lg">
            <BookOpen className="w-10 h-10 text-white" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
            Training & Education
          </h1>
          <p className="text-xl text-gray-600 leading-relaxed">
            Empower your team with cutting-edge AI knowledge. Expert-led workshops and training programs designed for real-world application and immediate impact.
          </p>
        </div>
      </section>

      {/* Main Programs */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Server className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Corporate Workshops</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hands-on technical training for engineering teams. Learn to build, deploy, and maintain production AI systems with industry best practices.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">LLM Security Architecture</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Production RAG Systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">MLOps Best Practices</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <Shield className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Compliance Training</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Prepare your developers to build AI systems that meet regulatory standards and ethical guidelines across different jurisdictions.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">EU AI Act compliance</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">GDPR for AI systems</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Ethical AI development</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border-2 border-gray-200 hover:border-purple-500 hover:shadow-xl transition-all">
            <div className="w-14 h-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
              <GraduationCap className="w-7 h-7 text-purple-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Advanced Certifications</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Comprehensive certification programs that validate expertise in modern AI engineering, security, and deployment practices.
            </p>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">AI Security Specialist</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">MLOps Engineer</span>
              </li>
              <li className="flex items-start space-x-3">
                <CheckCircle2 className="w-5 h-5 text-purple-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-600">Production AI Architect</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Course Formats */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <div className="bg-white rounded-2xl border-2 border-gray-200 p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Flexible Learning Formats</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Users className="w-6 h-6 text-purple-600 mr-3" />
                In-Person Workshops
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">On-Site Training</p>
                    <p className="text-gray-600 text-sm">Customized programs delivered at your office (1-5 days)</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Public Workshops</p>
                    <p className="text-gray-600 text-sm">Join scheduled sessions with teams from other companies</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Bootcamps</p>
                    <p className="text-gray-600 text-sm">Intensive 2-week programs for rapid skill development</p>
                  </div>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                <Laptop className="w-6 h-6 text-purple-600 mr-3" />
                Online Learning
              </h3>
              <ul className="space-y-4">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Live Virtual Classes</p>
                    <p className="text-gray-600 text-sm">Interactive sessions with real-time Q&A and collaboration</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Self-Paced Courses</p>
                    <p className="text-gray-600 text-sm">Access recorded content and labs on your own schedule</p>
                  </div>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-purple-600 rounded-full mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-gray-900">Hybrid Programs</p>
                    <p className="text-gray-600 text-sm">Combination of online learning and in-person practice sessions</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16 px-6 max-w-7xl mx-auto">
        <h2 className="text-3xl font-bold text-gray-900 mb-12 text-center">Featured Training Programs</h2>
        <div className="bg-white p-16 rounded-2xl border-2 border-gray-200 text-center">
          <div className="w-20 h-20 bg-purple-100 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <GraduationCap className="w-10 h-10 text-purple-600" />
          </div>
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Coming Soon</h3>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            We're preparing exciting new training sessions. Check back soon for upcoming workshop schedules and registration details.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-6 max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-br from-purple-500 to-purple-600 rounded-2xl p-12 shadow-2xl">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Upskill Your Team Today
          </h2>
          <p className="text-purple-100 text-lg mb-8">
            Custom training programs tailored to your team's needs. Contact us to discuss your requirements.
          </p>
          <Link href="/contact" className="inline-block bg-white text-purple-600 font-semibold px-8 py-4 rounded-lg hover:shadow-xl transition-all">
            Request Training Consultation
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
