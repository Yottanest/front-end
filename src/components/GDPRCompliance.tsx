"use client";

export default function GDPRCompliance() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl lg:text-5xl font-bold text-obsidian mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            GDPR Compliance
          </h1>
          <p className="text-slate">
            General Data Protection Regulation Compliance Statement
          </p>
          <p className="text-sm text-slate mt-2">Last Updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-graphite">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Our Commitment to GDPR
              </h2>
              <p className="leading-relaxed">
                YottaNest is committed to protecting the privacy and security of personal data in accordance with the General Data Protection Regulation (GDPR) (EU) 2016/679. As a provider of AI-powered compliance automation services to financial institutions, we understand the critical importance of data protection and have implemented comprehensive measures to ensure GDPR compliance.
              </p>
            </div>

            {/* Data Controller Information */}
            <div className="bg-ice-blue p-6 rounded-xl border-l-4 border-royal-blue">
              <h3 className="text-xl font-semibold text-obsidian mb-3">Data Controller</h3>
              <p className="mb-2"><strong>YottaNest</strong></p>
              <p className="text-sm">Sofia, Bulgaria</p>
              <p className="text-sm">Email: <a href="mailto:dpo@yottanest.com" className="text-royal-blue hover:underline">dpo@yottanest.com</a></p>
              <p className="text-sm">Data Protection Officer: <a href="mailto:dpo@yottanest.com" className="text-royal-blue hover:underline">dpo@yottanest.com</a></p>
            </div>

            {/* Legal Basis for Processing */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Legal Basis for Processing
              </h2>
              <p className="leading-relaxed mb-4">
                We process personal data based on the following legal grounds under Article 6 of GDPR:
              </p>

              <div className="space-y-4">
                <div className="bg-mist-gray p-5 rounded-xl">
                  <h4 className="font-semibold text-obsidian mb-2">1. Contractual Necessity (Article 6(1)(b))</h4>
                  <p className="text-sm">Processing necessary to perform our contract with you or to take steps at your request before entering into a contract.</p>
                </div>

                <div className="bg-mist-gray p-5 rounded-xl">
                  <h4 className="font-semibold text-obsidian mb-2">2. Legal Obligation (Article 6(1)(c))</h4>
                  <p className="text-sm">Processing necessary to comply with legal obligations, including anti-money laundering (AML) and know-your-customer (KYC) regulations.</p>
                </div>

                <div className="bg-mist-gray p-5 rounded-xl">
                  <h4 className="font-semibold text-obsidian mb-2">3. Legitimate Interest (Article 6(1)(f))</h4>
                  <p className="text-sm">Processing necessary for our legitimate interests or those of a third party, such as fraud prevention, network security, and service improvement.</p>
                </div>

                <div className="bg-mist-gray p-5 rounded-xl">
                  <h4 className="font-semibold text-obsidian mb-2">4. Consent (Article 6(1)(a))</h4>
                  <p className="text-sm">Where you have given clear consent for us to process your personal data for specific purposes (e.g., marketing communications).</p>
                </div>
              </div>
            </div>

            {/* Data We Collect */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Personal Data We Process
              </h2>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">From Our Clients (Financial Institutions)</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Contact information (names, email addresses, phone numbers)</li>
                <li>Company information and business details</li>
                <li>Account credentials and authentication data</li>
                <li>Usage data and system logs</li>
                <li>Communication records</li>
              </ul>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">Processed on Behalf of Clients (Data Subjects of Compliance Checks)</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Personal identification data (names, dates of birth, addresses)</li>
                <li>Business registration information</li>
                <li>Beneficial ownership structures</li>
                <li>Publicly available registry data</li>
                <li>Sanctions and watchlist information</li>
                <li>Adverse media mentions</li>
              </ul>

              <div className="bg-ice-blue border-l-4 border-royal-blue p-5 rounded-r-xl mt-4">
                <p className="text-sm text-graphite">
                  <strong>Note:</strong> When processing data on behalf of our clients for compliance purposes, we act as a Data Processor. Our clients remain the Data Controllers responsible for the legal basis and lawfulness of processing.
                </p>
              </div>
            </div>

            {/* GDPR Rights */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Your Rights Under GDPR
              </h2>
              <p className="leading-relaxed mb-4">
                Under GDPR, data subjects have the following rights:
              </p>

              <div className="space-y-4">
                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Right to Access (Article 15)</h4>
                    <p className="text-sm">Request confirmation of whether we process your personal data and obtain a copy of it.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Right to Rectification (Article 16)</h4>
                    <p className="text-sm">Request correction of inaccurate or incomplete personal data.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Right to Erasure (&quot;Right to be Forgotten&quot;) (Article 17)</h4>
                    <p className="text-sm">Request deletion of your personal data under certain circumstances.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">4</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Right to Restriction of Processing (Article 18)</h4>
                    <p className="text-sm">Request limitation of how we process your data in certain situations.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">5</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Right to Data Portability (Article 20)</h4>
                    <p className="text-sm">Receive your personal data in a structured, commonly used format and transmit it to another controller.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">6</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Right to Object (Article 21)</h4>
                    <p className="text-sm">Object to processing based on legitimate interests or for direct marketing purposes.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">7</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Rights Related to Automated Decision-Making (Article 22)</h4>
                    <p className="text-sm">Not be subject to decisions based solely on automated processing, including profiling, which produces legal effects.</p>
                  </div>
                </div>

                <div className="flex gap-4">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-royal-blue/10 flex items-center justify-center">
                    <span className="text-royal-blue font-bold">8</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-obsidian mb-1">Right to Withdraw Consent</h4>
                    <p className="text-sm">Withdraw consent at any time where processing is based on consent, without affecting the lawfulness of processing before withdrawal.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* How to Exercise Rights */}
            <div className="bg-mist-gray p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-obsidian mb-3">How to Exercise Your Rights</h3>
              <p className="mb-3">To exercise any of these rights, please contact our Data Protection Officer:</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <span className="text-royal-blue">✉</span>
                  <span>Email: <a href="mailto:dpo@yottanest.com" className="text-royal-blue hover:underline">dpo@yottanest.com</a></span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-royal-blue">📄</span>
                  <span>Include: Your name, contact details, and specific request</span>
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-royal-blue">⏱</span>
                  <span>We will respond within 30 days of receiving your request</span>
                </li>
              </ul>
            </div>

            {/* Data Security */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Data Security Measures
              </h2>
              <p className="leading-relaxed mb-4">
                We implement appropriate technical and organizational measures to ensure a level of security appropriate to the risk, including:
              </p>

              <div className="grid md:grid-cols-2 gap-4">
                <div className="bg-mist-gray p-5 rounded-xl">
                  <h4 className="font-semibold text-obsidian mb-2 flex items-center gap-2">
                    <span className="text-royal-blue">🔒</span>
                    Technical Measures
                  </h4>
                  <ul className="text-sm space-y-1 pl-6">
                    <li>End-to-end encryption</li>
                    <li>Secure data transmission (TLS/SSL)</li>
                    <li>Access control and authentication</li>
                    <li>Regular security audits</li>
                    <li>Intrusion detection systems</li>
                  </ul>
                </div>

                <div className="bg-mist-gray p-5 rounded-xl">
                  <h4 className="font-semibold text-obsidian mb-2 flex items-center gap-2">
                    <span className="text-royal-blue">👥</span>
                    Organizational Measures
                  </h4>
                  <ul className="text-sm space-y-1 pl-6">
                    <li>Staff training on data protection</li>
                    <li>Confidentiality agreements</li>
                    <li>Data protection impact assessments</li>
                    <li>Incident response procedures</li>
                    <li>Regular compliance reviews</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Data Retention
              </h2>
              <p className="leading-relaxed mb-4">
                We retain personal data only for as long as necessary to fulfill the purposes for which it was collected, including:
              </p>

              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Service Data:</strong> Duration of contract plus 6 years (for legal and accounting purposes)</li>
                <li><strong>Compliance Records:</strong> As required by financial regulations (typically 5-10 years)</li>
                <li><strong>Marketing Data:</strong> Until consent is withdrawn or 2 years of inactivity</li>
                <li><strong>Website Analytics:</strong> 26 months maximum</li>
              </ul>
            </div>

            {/* Data Sovereignty */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Data Sovereignty & International Transfers
              </h2>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">On-Premise Deployment</h3>
              <p className="leading-relaxed mb-4">
                YottaNest offers on-premise deployment options, ensuring that all data remains within your own infrastructure and jurisdiction. This provides complete data sovereignty and eliminates concerns about international data transfers.
              </p>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">Cloud Deployment</h3>
              <p className="leading-relaxed mb-4">
                For cloud deployments, all data is stored within the European Union. We do not transfer personal data outside the EEA unless:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>The transfer is to a country deemed adequate by the European Commission</li>
                <li>Appropriate safeguards are in place (Standard Contractual Clauses)</li>
                <li>You have provided explicit consent</li>
              </ul>
            </div>

            {/* Automated Decision Making */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Automated Decision-Making and AI
              </h2>
              <div className="bg-ice-blue border-l-4 border-royal-blue p-6 rounded-r-xl">
                <p className="leading-relaxed mb-3">
                  YottaNest uses artificial intelligence and automated processing to analyze data and generate compliance recommendations. However:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>We maintain a <strong>&quot;human-in-the-loop&quot;</strong> approach - all critical decisions require human review and approval</li>
                  <li>Our AI provides recommendations, not final determinations</li>
                  <li>You retain the right to obtain human intervention, express your point of view, and contest any automated decision</li>
                  <li>We provide transparency about the logic involved in our AI processing</li>
                </ul>
              </div>
            </div>

            {/* Data Breach Notification */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Data Breach Notification
              </h2>
              <p className="leading-relaxed mb-3">
                In the event of a personal data breach that poses a risk to the rights and freedoms of data subjects:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>We will notify the relevant supervisory authority within 72 hours of becoming aware</li>
                <li>Affected individuals will be notified without undue delay if the breach poses a high risk</li>
                <li>We maintain comprehensive data breach response procedures</li>
                <li>All incidents are documented and reviewed for prevention measures</li>
              </ul>
            </div>

            {/* Supervisory Authority */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Right to Lodge a Complaint
              </h2>
              <p className="leading-relaxed mb-3">
                If you believe we have not handled your personal data in accordance with GDPR, you have the right to lodge a complaint with a supervisory authority:
              </p>

              <div className="bg-mist-gray p-6 rounded-xl">
                <p className="font-semibold text-obsidian mb-2">Bulgarian Data Protection Authority</p>
                <p className="text-sm">Commission for Personal Data Protection (CPDP)</p>
                <p className="text-sm">Address: 2 Prof. Tsvetan Lazarov Blvd., Sofia 1592, Bulgaria</p>
                <p className="text-sm">Phone: +359 2 915 3 518</p>
                <p className="text-sm">Email: <a href="mailto:kzld@cpdp.bg" className="text-royal-blue hover:underline">kzld@cpdp.bg</a></p>
                <p className="text-sm">Website: <a href="https://www.cpdp.bg" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">www.cpdp.bg</a></p>
              </div>

              <p className="text-sm text-slate mt-4">
                You may also contact the data protection authority in your country of residence or where the alleged infringement occurred.
              </p>
            </div>

            {/* Sub-Processors */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Sub-Processors
              </h2>
              <p className="leading-relaxed mb-3">
                When acting as a Data Processor, we may engage sub-processors to assist in providing our services. We ensure all sub-processors:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Comply with GDPR requirements</li>
                <li>Have appropriate data processing agreements in place</li>
                <li>Implement adequate technical and organizational measures</li>
              </ul>

              <p className="text-sm text-slate">
                A current list of sub-processors is available upon request to <a href="mailto:dpo@yottanest.com" className="text-royal-blue hover:underline">dpo@yottanest.com</a>.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Updates to This Statement
              </h2>
              <p className="leading-relaxed">
                We may update this GDPR Compliance Statement from time to time. Material changes will be communicated to our clients and data subjects as appropriate. The &quot;Last Updated&quot; date at the top of this page indicates when the statement was last revised.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Contact Us
              </h2>
              <p className="leading-relaxed mb-4">
                For any questions about our GDPR compliance or to exercise your data protection rights:
              </p>

              <div className="bg-mist-gray p-6 rounded-xl">
                <p className="font-semibold text-obsidian mb-3">Data Protection Officer</p>
                <p>Email: <a href="mailto:dpo@yottanest.com" className="text-royal-blue hover:underline">dpo@yottanest.com</a></p>
                <p>Address: YottaNest, Sofia, Bulgaria</p>
                <p className="mt-3 text-sm text-slate">We aim to respond to all legitimate requests within 30 days.</p>
              </div>
            </div>

            {/* Final Statement */}
            <div className="bg-ice-blue border-l-4 border-royal-blue p-6 rounded-r-xl mt-8">
              <p className="text-graphite font-medium">
                YottaNest is committed to transparency, accountability, and continuous improvement in our data protection practices. We regularly review and update our processes to ensure ongoing compliance with GDPR and best practices in data protection.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
