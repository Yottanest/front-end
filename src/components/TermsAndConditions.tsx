"use client";

export default function TermsAndConditions() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl lg:text-5xl font-bold text-obsidian mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Terms and Conditions
          </h1>
          <p className="text-slate">Last Updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-graphite">
            {/* Section 1 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                1. Agreement to Terms
              </h2>
              <p className="leading-relaxed">
                By accessing or using YottaNest&apos;s services (&quot;Service&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you disagree with any part of these Terms, you may not access the Service.
              </p>
            </div>

            {/* Section 2 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                2. Description of Service
              </h2>
              <p className="leading-relaxed mb-3">
                YottaNest provides AI-powered compliance automation and credit decision tools for financial institutions, including but not limited to:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Automated KYC/AML compliance processing</li>
                <li>Credit risk assessment and analysis</li>
                <li>Report generation and regulatory documentation</li>
                <li>Ultimate Beneficial Owner (UBO) mapping</li>
                <li>Access to EU registries and data sources</li>
              </ul>
            </div>

            {/* Section 3 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                3. Eligibility
              </h2>
              <p className="leading-relaxed mb-3">
                The Service is intended solely for:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Licensed financial institutions</li>
                <li>Regulated entities subject to KYC/AML requirements</li>
                <li>Corporate clients in the banking and financial services sector</li>
              </ul>
              <p className="leading-relaxed mt-3">
                By using the Service, you represent that you have the legal authority to bind your organization to these Terms.
              </p>
            </div>

            {/* Section 4 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                4. User Accounts and Security
              </h2>
              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">4.1 Account Registration</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must provide accurate, complete, and current information</li>
                <li>You are responsible for maintaining the confidentiality of your account credentials</li>
                <li>You must notify us immediately of any unauthorized access</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">4.2 Authorized Users</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Your organization is responsible for all activities under your account</li>
                <li>You may designate authorized users within your organization</li>
                <li>You must ensure all users comply with these Terms</li>
              </ul>
            </div>

            {/* Section 5 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                5. Data Processing and Privacy
              </h2>
              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">5.1 Data Ownership</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain all rights to data you input into the Service</li>
                <li>We process data solely to provide the Service to you</li>
                <li>Our data processing practices comply with GDPR and applicable EU regulations</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">5.2 Data Sovereignty</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>On-premise deployment options ensure data remains within your infrastructure</li>
                <li>Cloud deployments maintain data within EU territories</li>
                <li>We do not sell, share, or transfer your data to third parties except as necessary to provide the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">5.3 Data Security</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We implement industry-standard security measures</li>
                <li>Regular security audits and compliance certifications</li>
                <li>Encryption of data in transit and at rest</li>
              </ul>
            </div>

            {/* Section 6 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                6. Acceptable Use
              </h2>
              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">6.1 Permitted Use</h3>
              <p className="leading-relaxed mb-2">You may use the Service only for:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Internal compliance and risk assessment purposes</li>
                <li>Legitimate business operations in accordance with applicable laws</li>
                <li>Regulatory reporting and audit requirements</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">6.2 Prohibited Activities</h3>
              <p className="leading-relaxed mb-2">You may not:</p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Use the Service for illegal purposes or in violation of regulations</li>
                <li>Attempt to reverse engineer, decompile, or extract source code</li>
                <li>Interfere with or disrupt the Service&apos;s integrity or performance</li>
                <li>Access data or systems without authorization</li>
                <li>Resell, sublicense, or redistribute the Service without our written consent</li>
                <li>Use the Service to violate the privacy or rights of individuals</li>
              </ul>
            </div>

            {/* Section 7 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                7. Intellectual Property Rights
              </h2>
              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">7.1 Our IP</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Service, including all software, algorithms, and models, is our proprietary property</li>
                <li>Our trademarks, logos, and branding remain our exclusive property</li>
                <li>You receive a limited, non-exclusive license to use the Service</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">7.2 Your IP</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You retain ownership of your data and content</li>
                <li>You grant us a limited license to process your data to provide the Service</li>
              </ul>
            </div>

            {/* Section 8 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                8. AI-Generated Content and Recommendations
              </h2>
              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">8.1 Nature of AI Output</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>The Service uses artificial intelligence to analyze data and generate recommendations</li>
                <li>AI outputs are tools to assist human decision-making, not definitive legal or financial advice</li>
                <li>You are solely responsible for final compliance and credit decisions</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">8.2 Human Oversight</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You must maintain human oversight (&quot;human-in-the-loop&quot;) for all critical decisions</li>
                <li>We recommend independent verification of AI-generated findings</li>
                <li>The Service does not replace professional judgment or regulatory obligations</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">8.3 No Guarantee</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We do not guarantee the accuracy, completeness, or reliability of AI outputs</li>
                <li>External data sources may contain errors or outdated information</li>
                <li>You assume all risk associated with decisions based on Service outputs</li>
              </ul>
            </div>

            {/* Section 9 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                9. Regulatory Compliance
              </h2>
              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">9.1 Your Obligations</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>You remain solely responsible for compliance with all applicable laws and regulations</li>
                <li>You must conduct independent due diligence as required by regulators</li>
                <li>You must maintain appropriate records and audit trails</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">9.2 Regulatory Changes</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will make reasonable efforts to update the Service for regulatory changes</li>
                <li>You are responsible for understanding how regulatory changes affect your use</li>
              </ul>
            </div>

            {/* Section 10 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                10. Limitation of Liability
              </h2>
              <p className="leading-relaxed mb-3">
                To the maximum extent permitted by law:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We are not liable for indirect, incidental, consequential, or punitive damages</li>
                <li>We are not liable for lost profits, data loss, or business interruption</li>
                <li>Our total liability shall not exceed the fees paid by you in the 12 months preceding the claim</li>
                <li>You acknowledge that the Service is a tool to assist, not replace, human judgment</li>
                <li>We are not liable for decisions you make based on Service outputs</li>
                <li>You bear sole responsibility for compliance failures or incorrect credit decisions</li>
              </ul>
            </div>

            {/* Section 11 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                11. Term and Termination
              </h2>
              <p className="leading-relaxed mb-3">
                We may suspend or terminate your access if you breach these Terms, your account becomes delinquent, or as required by law. Upon termination, you must cease all use of the Service. We will provide data export capabilities for a reasonable period.
              </p>
            </div>

            {/* Section 12 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                12. Modifications to Terms
              </h2>
              <p className="leading-relaxed">
                We may modify these Terms with 30 days&apos; notice. Continued use after changes constitutes acceptance. Material changes affecting on-premise deployments require mutual agreement.
              </p>
            </div>

            {/* Section 13 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                13. Governing Law
              </h2>
              <p className="leading-relaxed">
                These Terms are governed by the laws of Bulgaria and applicable EU regulations. Parties submit to the exclusive jurisdiction of Bulgarian courts. Disputes shall first be subject to good-faith negotiation.
              </p>
            </div>

            {/* Section 14 */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                14. Contact Information
              </h2>
              <p className="leading-relaxed mb-3">
                For questions about these Terms, contact us at:
              </p>
              <div className="bg-mist-gray p-6 rounded-xl">
                <p className="font-semibold text-obsidian mb-2">YottaNest</p>
                <p>Sofia, Bulgaria</p>
                <p>Email: <a href="mailto:legal@yottanest.com" className="text-royal-blue hover:underline">legal@yottanest.com</a></p>
                <p>Support: <a href="mailto:support@yottanest.com" className="text-royal-blue hover:underline">support@yottanest.com</a></p>
              </div>
            </div>

            {/* Final Notice */}
            <div className="bg-ice-blue border-l-4 border-royal-blue p-6 rounded-r-xl mt-8">
              <p className="text-graphite font-medium">
                By using YottaNest&apos;s services, you acknowledge that you have read, understood, and agree to be bound by these Terms and Conditions.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
