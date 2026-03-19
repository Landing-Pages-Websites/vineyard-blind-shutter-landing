"use client";

import { useTracking } from "@/hooks/useTracking";
import { LeadForm } from "@/components/LeadForm";
import { useState, useEffect, useRef } from "react";

const PHONE = "(951) 447-8153";
const PHONE_HREF = "tel:9514478153";

// Simple reveal component for animations
function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"} ${className}`}
    >
      {children}
    </div>
  );
}

function DualCTA({ primary, href }: { primary: string; href: string }) {
  return (
    <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
      <a href={href} className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg font-bold text-lg transition-colors">
        {primary}
      </a>
      <a href={PHONE_HREF} className="border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white rounded-lg px-6 py-3 font-semibold transition-all">
        Or call: {PHONE}
      </a>
    </div>
  );
}

export default function VineyardBlindShutter() {
  // Initialize tracking
  useTracking({
    siteKey: "sk_mljzmyd3_zmguftm2gh",
    gtmId: "GTM-WC8DBNV",
  });

  return (
    <>
      {/* Header: Logo + CTA only — NO nav links */}
      <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur border-b shadow-sm">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-amber-600 to-amber-800 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">VB</span>
            </div>
            <div>
              <div className="font-bold text-gray-900">Vineyard Blind & Shutter</div>
              <div className="text-xs text-gray-600">Southern California</div>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <a href={PHONE_HREF} className="hidden sm:flex items-center gap-2 border-2 border-amber-600 text-amber-600 rounded-lg px-4 py-2 font-semibold hover:bg-amber-600 hover:text-white transition-all">
              {PHONE}
            </a>
            <a href="#hero" className="bg-amber-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-amber-700 transition-colors">
              Get Free Quote
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section with Split Layout */}
      <section id="hero" className="min-h-screen bg-gradient-to-br from-amber-100 via-white to-orange-50 pt-20">
        <div className="max-w-7xl mx-auto px-4 py-20 grid lg:grid-cols-2 gap-12 items-center">
          <Reveal>
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 bg-amber-100 text-amber-800 px-4 py-2 rounded-full text-sm font-semibold">
                <div className="w-2 h-2 bg-amber-600 rounded-full"></div>
                Free Installation & Price Match Guarantee
              </div>
              
              <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                Upgrade Your Home With{" "}
                <span className="bg-gradient-to-r from-amber-600 to-orange-600 bg-clip-text text-transparent">
                  Custom Window Coverings
                </span>
              </h1>
              
              <p className="text-xl text-gray-600 leading-relaxed">
                Vineyard Blind & Shutter offers the lowest possible prices on plantation shutters, blinds and window coverings in all of Southern California. We bring the showroom to you.
              </p>
              
              <div className="flex flex-wrap gap-4 text-gray-700">
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  San Diego
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  Riverside
                </div>
                <div className="flex items-center gap-2">
                  <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  South Orange County
                </div>
              </div>
              
              <DualCTA primary="Get My Free Estimate" href="#hero" />
            </div>
          </Reveal>
          
          <Reveal className="lg:pl-8">
            <LeadForm />
          </Reveal>
        </div>
      </section>

      {/* Stats Bar */}
      <section id="stats" className="py-16 bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400">15+</div>
                <div className="text-gray-300 mt-1">Years in Business</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400">5000+</div>
                <div className="text-gray-300 mt-1">Happy Customers</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400">100%</div>
                <div className="text-gray-300 mt-1">Satisfaction Rate</div>
              </div>
              <div>
                <div className="text-3xl md:text-4xl font-bold text-amber-400">A+</div>
                <div className="text-gray-300 mt-1">BBB Rating</div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                What We Offer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                With our great products and services, you'll get the same name-brand window coverings for less.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Blinds</h3>
                <p className="text-gray-600 mb-6">
                  With our competitive prices, you can get the stylish blinds you want with a custom fit perfect for your window. We offer quality blinds in a large selection of styles like faux wood and natural wood blinds.
                </p>
                <DualCTA primary="Get Blinds Quote" href="#hero" />
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shutters</h3>
                <p className="text-gray-600 mb-6">
                  We offer a large selection of sun protection, energy efficient, high quality shutters. Our shutters range from Polycore to Stained Wood and specialty shapes to fit your home needs.
                </p>
                <DualCTA primary="Get Shutters Quote" href="#hero" />
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-gradient-to-br from-amber-50 to-orange-50 p-8 rounded-2xl">
                <div className="w-16 h-16 bg-amber-600 rounded-xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Shades</h3>
                <p className="text-gray-600 mb-6">
                  We offer a variety of shades to enhance the look or style of your home. You can choose from Honeycomb shades that offer privacy and blackout to woven woods that are aesthetically pleasing.
                </p>
                <DualCTA primary="Get Shades Quote" href="#hero" />
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-20 bg-gradient-to-br from-gray-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <Reveal>
              <div>
                <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
                  Cost-Effective Window Treatments in Southern California
                </h2>
                <p className="text-xl text-gray-600 mb-8">
                  The Vineyard Blind & Shutter mobile shopping experience brings the showroom directly to your living room. See the colors and textures the way they should be seen—in the natural lighting of your home.
                </p>
                
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">Free Measuring</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">Free Estimates</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">Free Installation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-green-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-lg text-gray-700">Free Design Services</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-6 h-6 bg-amber-600 rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
                      </svg>
                    </div>
                    <span className="text-lg font-semibold text-gray-900">We'll Match or Beat Anyone's Prices</span>
                  </div>
                </div>
                
                <DualCTA primary="Get My Free Consultation" href="#hero" />
              </div>
            </Reveal>
            
            <Reveal>
              <div className="bg-white p-8 rounded-2xl shadow-xl">
                <h3 className="text-2xl font-bold text-gray-900 mb-6">How It Works</h3>
                <div className="space-y-6">
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Schedule Your Free Consultation</h4>
                      <p className="text-gray-600">Fill out the form or give us a call. We'll find a time that works for you.</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">We Bring the Showroom to You</h4>
                      <p className="text-gray-600">Where would you rather see your blinds or shutters—in a home improvement center or in the very same room they will be installed?</p>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <div className="w-8 h-8 bg-amber-600 text-white rounded-full flex items-center justify-center font-bold text-sm">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-1">Professional Installation</h4>
                      <p className="text-gray-600">Our expert team handles everything. Free measuring, free installation, done right the first time.</p>
                    </div>
                  </div>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Trusted Across Southern California
              </h2>
              <p className="text-xl text-gray-600">
                See why homeowners across San Diego, Riverside, and South Orange County choose Vineyard Blind & Shutter.
              </p>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8">
            <Reveal>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Great experience from start to finish. The mobile showroom made it so easy to pick the right blinds for our home. Installation was quick and professional."
                </p>
                <div className="text-sm text-gray-600">San Diego County</div>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "Vineyard beat the prices I got from three big box stores. The plantation shutters look incredible and the whole process was hassle-free. Highly recommend!"
                </p>
                <div className="text-sm text-gray-600">Riverside County</div>
              </div>
            </Reveal>

            <Reveal>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-amber-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-gray-700 mb-4">
                  "We needed shades for our entire new home. Vineyard gave us the best price and the honeycomb shades are beautiful. Free installation saved us a ton!"
                </p>
                <div className="text-sm text-gray-600">South Orange County</div>
              </div>
            </Reveal>
          </div>
          
          <Reveal>
            <DualCTA primary="Get My Free Estimate" href="#hero" />
          </Reveal>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-xl text-gray-600">
                Everything you need to know about our window covering services.
              </p>
            </div>
          </Reveal>

          <Reveal>
            <div className="space-y-4">
              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="cursor-pointer font-semibold text-gray-900">What areas do you serve?</summary>
                <p className="mt-3 text-gray-600">
                  Vineyard Blind & Shutter serves homeowners across Southern California, including San Diego County, Riverside County, and South Orange County. Our mobile showroom comes directly to your home.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="cursor-pointer font-semibold text-gray-900">Is the consultation really free?</summary>
                <p className="mt-3 text-gray-600">
                  Yes. We provide free measuring, free estimates, free design services, and free installation. There is no obligation when you schedule a consultation.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="cursor-pointer font-semibold text-gray-900">How does the mobile showroom work?</summary>
                <p className="mt-3 text-gray-600">
                  We bring the showroom directly to your living room so you can see the colors and textures the way they should be seen—in the natural lighting of your home. Schedule a time that works for you, and we handle the rest.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="cursor-pointer font-semibold text-gray-900">Do you really match prices?</summary>
                <p className="mt-3 text-gray-600">
                  Yes. We'll match or beat anyone's prices on the same name-brand window coverings. We also offer military discounts, law enforcement discounts, and 6-month financing.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="cursor-pointer font-semibold text-gray-900">What brands do you carry?</summary>
                <p className="mt-3 text-gray-600">
                  We carry trusted brands including Lexwood, Polycore, Sunland Shutters, and Hunter Douglas. Our selection covers blinds, shutters, and shades in a range of styles and materials.
                </p>
              </details>
              
              <details className="bg-white rounded-lg border border-gray-200 p-6">
                <summary className="cursor-pointer font-semibold text-gray-900">Are you licensed and insured?</summary>
                <p className="mt-3 text-gray-600">
                  Yes. Vineyard Blind & Shutter is a licensed contractor (#869992), BBB Accredited, a Chamber of Commerce member, and a Habitat for Humanity partner.
                </p>
              </details>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Final CTA */}
      <section id="contact" className="py-20 bg-gradient-to-br from-amber-600 to-orange-700 text-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <Reveal>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ready to Transform Your Windows?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Get your free consultation today and see why thousands of Southern California homeowners trust Vineyard Blind & Shutter.
            </p>
            <div className="max-w-lg mx-auto">
              <LeadForm />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Legal Footer */}
      <footer className="py-6 bg-gray-900 text-center text-xs text-gray-400">
        © 2026 Vineyard Blind & Shutter. All rights reserved. | Licensed Contractor #869992
      </footer>

      {/* Floating Sticky CTA */}
      <div className="fixed bottom-4 right-4 z-50 bg-amber-600 text-white rounded-full shadow-lg hover:bg-amber-700 transition-colors">
        <a href="#hero" className="flex items-center gap-3 px-6 py-4 text-sm font-semibold">
          <span>Get Free Quote</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
          </svg>
        </a>
      </div>
    </>
  );
}