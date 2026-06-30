import React from 'react';
import Link from 'next/link';
import { Inter, Cormorant_Garamond } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-inter',
});

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '600'],
  style: ['normal', 'italic'],
  variable: '--font-cormorant',
});

export default function PrivacyPolicy() {
  return (
    <div className={`${inter.variable} ${cormorant.variable} font-sans bg-[#FBF9F6] min-h-screen text-left`}>
      <div className="max-w-3xl mx-auto px-6 py-24 md:py-32">
        {/* Back Link */}
        <Link 
          href="/" 
          className="text-xs uppercase tracking-[0.2em] font-semibold text-[#6B6E68] hover:text-[#1A1B12] transition-colors duration-200 mb-12 inline-block"
        >
          ← Return to Canvas
        </Link>

        {/* Heading */}
        <div className="mb-12">
          <h1 className="text-4xl md:text-5xl font-serif font-semibold text-[#2D2624] tracking-tight leading-[1.1] mb-2">
            PRIVACY POLICY
          </h1>
          <p className="text-xs text-[#A09995] uppercase tracking-wider font-medium">
            Last updated: June 29, 2026
          </p>
        </div>

        {/* Corporate Legal Structure */}
        <div className="prose prose-stone prose-sm md:prose-base text-[#2D2624]/80 max-w-none space-y-8 leading-relaxed">
          <section className="border-t border-[#2D2624]/10 pt-8">
            <h2 className="text-lg font-serif font-semibold text-[#2D2624] mb-3 uppercase tracking-wider">
              1. Governance & Corporate Structure
            </h2>
            <p>
              Governance and operations of the website, licensing, and distribution of material are managed strictly under individual ownership of <strong>ARUN KUMAR KODIREKKA</strong>, located at Church Road, Miryalaguda, Telangana 508207, India. All correspondence and legal notifications must be dispatched to this address or directed to our support email channel at <a href="mailto:axiomhq0@gmail.com" className="text-[#C4956A] hover:underline">axiomhq0@gmail.com</a>.
            </p>
          </section>

          <section className="border-t border-[#2D2624]/10 pt-8">
            <h2 className="text-lg font-serif font-semibold text-[#2D2624] mb-3 uppercase tracking-wider">
              2. Core Offerings & Operational Limits
            </h2>
            <p>
              Our operations provide three distinct digital product frameworks, governed by the following operational boundaries:
            </p>
            <ul className="list-disc pl-5 space-y-3 mt-3">
              <li>
                <strong>The $97 Complete Transformation:</strong> A comprehensive digital educational framework for skin management consisting of reference E-books, daily tracking worksheets, and layout templates. This is strictly educational material. It does not constitute medical, clinical, or professional dermatological advice.
              </li>
              <li>
                <strong>The $47 Calm Your Skin (Phase 1):</strong> A digital toolset and foundational sequence text targeting irritation-reducing habits and skin stabilization routines.
              </li>
              <li>
                <strong>The $27 Roadmap:</strong> A digital strategic planning e-book focusing on habit formation and long-term process execution.
              </li>
            </ul>
          </section>

          <section className="border-t border-[#2D2624]/10 pt-8">
            <h2 className="text-lg font-serif font-semibold text-[#2D2624] mb-3 uppercase tracking-wider">
              3. Payment Gateway & Transaction Transparency
            </h2>
            <p>
              We prioritize pristine transaction security. We do not collect, process, or store credit card details or billing numbers. All payment transactions, verification states, and license provisioning are handled, encrypted, and stored entirely by our proxy partner, <strong>Whop</strong>. You can review their full encryption protocols and data compliance standards at <a href="https://whop.com/privacy/" target="_blank" rel="noopener noreferrer" className="text-[#C4956A] hover:underline">https://whop.com/privacy/</a>.
            </p>
          </section>

          <section className="border-t border-[#2D2624]/10 pt-8">
            <h2 className="text-lg font-serif font-semibold text-[#2D2624] mb-3 uppercase tracking-wider">
              4. Personal Data Disclosure Ledger (Last 12 Months)
            </h2>
            <p className="mb-4">
              To reflect our pristine data-hygiene setup, we explicitly declare that we do not extract or commercialize your personal or sensitive data.
            </p>

            {/* Responsive Table with Silver Seams */}
            <div className="overflow-x-auto my-6 rounded-[8px]">
              <table 
                className="w-full text-xs md:text-sm text-left border-collapse bg-white/40"
                style={{ 
                  border: '1px solid rgba(255, 255, 255, 0.45)', 
                  boxShadow: '0 0 0 1px rgba(212, 212, 216, 0.15)' 
                }}
              >
                <thead>
                  <tr className="bg-stone-100/50 border-b border-[#2D2624]/10">
                    <th className="p-4 font-semibold text-[#2D2624]">Data Category</th>
                    <th className="p-4 font-semibold text-[#2D2624]">Collected</th>
                    <th className="p-4 font-semibold text-[#2D2624]">Disclosed for Commerce</th>
                    <th className="p-4 font-semibold text-[#2D2624]">Sold or Shared</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#2D2624]/5">
                  <tr>
                    <td className="p-4 font-medium text-[#2D2624]">Identifiers (Name, email)</td>
                    <td className="p-4 text-stone-500">NO*</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#2D2624]">Commercial Records</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#2D2624]">Biometric Information</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#2D2624]">Geolocation Data</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                  </tr>
                  <tr>
                    <td className="p-4 font-medium text-[#2D2624]">Financial Details (Card details)</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                    <td className="p-4 text-stone-500">NO</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-[#A09995] italic leading-normal">
              *Note: We only gather basic name and email parameters voluntarily provided during direct client support correspondence. This data is never sold or shared.
            </p>
          </section>

          <section className="border-t border-[#2D2624]/10 pt-8">
            <h2 className="text-lg font-serif font-semibold text-[#2D2624] mb-3 uppercase tracking-wider">
              5. Contact & Support
            </h2>
            <p>
              For any questions regarding our compliance setups, terms of service, or details removal requests, please establish contact via:
            </p>
            <address className="not-italic mt-3 text-[#2D2624]/80 space-y-1">
              <strong>ARUN KUMAR KODIREKKA</strong><br />
              Church Road, Miryalaguda,<br />
              Telangana 508207, India<br />
              Email: <a href="mailto:axiomhq0@gmail.com" className="text-[#C4956A] hover:underline">axiomhq0@gmail.com</a>
            </address>
          </section>
        </div>
      </div>
    </div>
  );
}
