"use client";

export default function PrivacyPolicy() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        <h1 className="text-4xl lg:text-5xl font-bold text-obsidian mb-4">
          Privacy Policy
        </h1>
        <p className="text-slate mb-8">
          <strong>Effective Date:</strong> January 12, 2026
          <br />
          <strong>Last Updated:</strong> January 12, 2026
        </p>

        <div className="prose prose-lg max-w-none">
          {/* Introduction */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              1. Introduction
            </h2>
            <p className="text-slate mb-4">
              YottaNest ("we," "our," or "us") is committed to protecting your
              privacy and ensuring the security of your personal data. This
              Privacy Policy explains how we collect, use, disclose, and
              safeguard your information when you use our AI-powered compliance
              automation platform for European banking institutions.
            </p>
            <p className="text-slate mb-4">
              As a compliance technology provider serving the financial sector,
              we adhere to the highest standards of data protection, including
              full compliance with the General Data Protection Regulation (GDPR)
              and other applicable data protection laws.
            </p>
          </section>

          {/* Data Controller */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              2. Data Controller
            </h2>
            <p className="text-slate mb-4">
              YottaNest acts as the data controller for personal data processed
              through our services. You can contact us at:
            </p>
            <div className="bg-mist-gray/30 p-6 rounded-lg mb-4">
              <p className="text-slate mb-2">
                <strong>Email:</strong> privacy@yottanest.com
              </p>
              <p className="text-slate mb-2">
                <strong>Address:</strong> Sofia, Bulgaria
              </p>
              <p className="text-slate">
                <strong>Data Protection Officer:</strong> dpo@yottanest.com
              </p>
            </div>
          </section>

          {/* Information We Collect */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              3. Information We Collect
            </h2>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              3.1 Information You Provide to Us
            </h3>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>
                <strong>Account Information:</strong> Name, email address,
                company name, job title, phone number
              </li>
              <li>
                <strong>Business Information:</strong> Organization details,
                banking license information, regulatory identifiers
              </li>
              <li>
                <strong>Payment Information:</strong> Billing address and
                payment details (processed securely through third-party payment
                processors)
              </li>
              <li>
                <strong>Communications:</strong> Content of messages, support
                tickets, and feedback you send to us
              </li>
            </ul>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              3.2 Customer Data Processed Through Our Services
            </h3>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>
                <strong>KYC/AML Data:</strong> Customer information processed
                for compliance purposes (names, addresses, identification
                documents, beneficial ownership structures)
              </li>
              <li>
                <strong>Compliance Documents:</strong> Reports, risk
                assessments, and regulatory documentation
              </li>
              <li>
                <strong>Public Registry Data:</strong> Information collected
                from EU business registries, sanction lists, and PEP databases
              </li>
            </ul>
            <p className="text-slate mb-4">
              <em>
                Note: For customer data processed on behalf of our clients, we
                act as a data processor. Our clients remain the data controllers
                responsible for the lawfulness of processing.
              </em>
            </p>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              3.3 Automatically Collected Information
            </h3>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>
                <strong>Usage Data:</strong> Pages viewed, features used, time
                spent, click patterns
              </li>
              <li>
                <strong>Device Information:</strong> IP address, browser type,
                operating system, device identifiers
              </li>
              <li>
                <strong>Log Data:</strong> Server logs, error reports, system
                activity
              </li>
              <li>
                <strong>Cookies and Tracking:</strong> See our{" "}
                <a href="/cookies" className="text-royal-blue hover:underline">
                  Cookie Policy
                </a>{" "}
                for details
              </li>
            </ul>
          </section>

          {/* How We Use Your Information */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              4. How We Use Your Information
            </h2>
            <p className="text-slate mb-4">
              We process your personal data for the following purposes:
            </p>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              4.1 Service Delivery
            </h3>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>Providing access to our compliance automation platform</li>
              <li>Processing KYC/AML compliance workflows</li>
              <li>Generating compliance reports and risk assessments</li>
              <li>Maintaining and improving service functionality</li>
            </ul>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              4.2 Business Operations
            </h3>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>Account management and billing</li>
              <li>Customer support and technical assistance</li>
              <li>Communicating about service updates and new features</li>
              <li>Conducting analytics to improve our services</li>
            </ul>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              4.3 Legal and Regulatory Compliance
            </h3>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>Complying with legal obligations and regulatory requirements</li>
              <li>Responding to lawful requests from authorities</li>
              <li>Protecting against fraud and security threats</li>
              <li>Enforcing our terms and conditions</li>
            </ul>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              4.4 AI and Machine Learning
            </h3>
            <p className="text-slate mb-4">
              We use AI/ML models to automate compliance processes. Our AI systems:
            </p>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>Extract and analyze data from public registries</li>
              <li>Identify potential compliance risks and red flags</li>
              <li>Generate recommendations for human review (human-in-the-loop approach)</li>
              <li>Improve accuracy through supervised learning on anonymized data</li>
            </ul>
            <p className="text-slate mb-4">
              <strong>Important:</strong> Final compliance decisions are always
              made by qualified human professionals, not AI systems alone.
            </p>
          </section>

          {/* Legal Basis for Processing */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              5. Legal Basis for Processing (GDPR)
            </h2>
            <p className="text-slate mb-4">
              Under GDPR, we process personal data based on:
            </p>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>
                <strong>Contractual Necessity:</strong> Processing required to
                deliver our services under our agreement with you
              </li>
              <li>
                <strong>Legal Obligation:</strong> Compliance with financial
                regulations, AML/KYC laws, and data protection requirements
              </li>
              <li>
                <strong>Legitimate Interests:</strong> Improving our services,
                preventing fraud, and ensuring security (balanced against your
                rights)
              </li>
              <li>
                <strong>Consent:</strong> Where you have provided explicit
                consent (e.g., marketing communications)
              </li>
            </ul>
          </section>

          {/* Data Sharing and Disclosure */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              6. Data Sharing and Disclosure
            </h2>
            <p className="text-slate mb-4">
              We do not sell your personal data. We may share information with:
            </p>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              6.1 Service Providers
            </h3>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>Cloud infrastructure providers (EU-based)</li>
              <li>Payment processors</li>
              <li>Customer support tools</li>
              <li>Analytics and monitoring services</li>
            </ul>
            <p className="text-slate mb-4">
              All third-party processors are bound by data processing agreements
              and GDPR compliance requirements.
            </p>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              6.2 Legal Requirements
            </h3>
            <p className="text-slate mb-4">
              We may disclose information when required by law, regulation, or
              legal process, including:
            </p>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>Responding to court orders or subpoenas</li>
              <li>Complying with regulatory investigations</li>
              <li>Reporting suspicious activities to financial authorities</li>
              <li>Protecting our legal rights and safety</li>
            </ul>

            <h3 className="text-xl font-semibold text-obsidian mb-3 mt-6">
              6.3 Business Transfers
            </h3>
            <p className="text-slate mb-4">
              In the event of a merger, acquisition, or sale of assets, your
              information may be transferred to the acquiring entity, subject to
              the same privacy protections.
            </p>
          </section>

          {/* Data Security */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              7. Data Security
            </h2>
            <p className="text-slate mb-4">
              We implement industry-leading security measures to protect your data:
            </p>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>
                <strong>Encryption:</strong> AES-256 encryption at rest, TLS 1.3
                in transit
              </li>
              <li>
                <strong>Access Controls:</strong> Role-based access, multi-factor
                authentication, audit logging
              </li>
              <li>
                <strong>Infrastructure Security:</strong> SOC 2 Type II certified
                data centers, DDoS protection, intrusion detection
              </li>
              <li>
                <strong>Regular Audits:</strong> Third-party security assessments
                and penetration testing
              </li>
              <li>
                <strong>Incident Response:</strong> 24/7 monitoring and breach
                notification procedures
              </li>
            </ul>
            <p className="text-slate mb-4">
              For clients requiring on-premise deployment, all data remains within
              your infrastructure with zero external transmission.
            </p>
          </section>

          {/* Data Retention */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              8. Data Retention
            </h2>
            <p className="text-slate mb-4">
              We retain personal data only as long as necessary for the purposes
              outlined in this policy:
            </p>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>
                <strong>Account Data:</strong> Duration of your subscription plus
                90 days for account closure processes
              </li>
              <li>
                <strong>Compliance Records:</strong> Minimum 5 years as required
                by EU AML/KYC regulations (or longer if mandated by local law)
              </li>
              <li>
                <strong>Audit Logs:</strong> 7 years for regulatory compliance
              </li>
              <li>
                <strong>Marketing Data:</strong> Until you withdraw consent or
                request deletion
              </li>
            </ul>
            <p className="text-slate mb-4">
              After retention periods expire, data is securely deleted or anonymized.
            </p>
          </section>

          {/* Your Privacy Rights */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              9. Your Privacy Rights
            </h2>
            <p className="text-slate mb-4">
              Under GDPR and other privacy laws, you have the following rights:
            </p>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  1. Right to Access
                </h4>
                <p className="text-sm text-slate">
                  Request a copy of your personal data we hold
                </p>
              </div>
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  2. Right to Rectification
                </h4>
                <p className="text-sm text-slate">
                  Correct inaccurate or incomplete data
                </p>
              </div>
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  3. Right to Erasure
                </h4>
                <p className="text-sm text-slate">
                  Request deletion of your data ("right to be forgotten")
                </p>
              </div>
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  4. Right to Restriction
                </h4>
                <p className="text-sm text-slate">
                  Limit how we use your data
                </p>
              </div>
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  5. Right to Data Portability
                </h4>
                <p className="text-sm text-slate">
                  Receive your data in a machine-readable format
                </p>
              </div>
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  6. Right to Object
                </h4>
                <p className="text-sm text-slate">
                  Object to processing based on legitimate interests
                </p>
              </div>
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  7. Right to Withdraw Consent
                </h4>
                <p className="text-sm text-slate">
                  Withdraw consent for processing at any time
                </p>
              </div>
              <div className="bg-mist-gray/30 p-4 rounded-lg">
                <h4 className="font-semibold text-obsidian mb-2">
                  8. Right to Lodge a Complaint
                </h4>
                <p className="text-sm text-slate">
                  File a complaint with your local data protection authority
                </p>
              </div>
            </div>
            <p className="text-slate mb-4">
              To exercise these rights, contact us at{" "}
              <a
                href="mailto:privacy@yottanest.com"
                className="text-royal-blue hover:underline"
              >
                privacy@yottanest.com
              </a>
              . We will respond within 30 days as required by GDPR.
            </p>
            <p className="text-slate mb-4">
              <strong>Note:</strong> Some rights may be limited by legal
              obligations to retain certain data for regulatory compliance (e.g.,
              AML record-keeping requirements).
            </p>
          </section>

          {/* International Data Transfers */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              10. International Data Transfers
            </h2>
            <p className="text-slate mb-4">
              YottaNest is committed to EU data sovereignty:
            </p>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>
                <strong>EU Cloud Option:</strong> All data stored and processed
                exclusively within EU data centers (Frankfurt, Amsterdam)
              </li>
              <li>
                <strong>On-Premise Option:</strong> Zero data transfer outside
                your infrastructure
              </li>
              <li>
                <strong>Limited Third-Country Transfers:</strong> If any data is
                transferred outside the EU/EEA, we use Standard Contractual
                Clauses (SCCs) approved by the European Commission
              </li>
            </ul>
            <p className="text-slate mb-4">
              We do not transfer personal data to countries without adequate data
              protection levels unless properly safeguarded.
            </p>
          </section>

          {/* Children's Privacy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              11. Children's Privacy
            </h2>
            <p className="text-slate mb-4">
              Our services are intended for business use by financial
              institutions. We do not knowingly collect personal data from
              individuals under 16 years of age. If you believe we have
              inadvertently collected such data, please contact us immediately.
            </p>
          </section>

          {/* Changes to This Policy */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              12. Changes to This Privacy Policy
            </h2>
            <p className="text-slate mb-4">
              We may update this Privacy Policy to reflect changes in our
              practices or legal requirements. We will notify you of material
              changes by:
            </p>
            <ul className="list-disc pl-6 text-slate space-y-2 mb-4">
              <li>Email notification to registered users</li>
              <li>Prominent notice on our website</li>
              <li>In-app notification upon login</li>
            </ul>
            <p className="text-slate mb-4">
              Continued use of our services after notification constitutes
              acceptance of the updated policy.
            </p>
          </section>

          {/* Contact Us */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              13. Contact Us
            </h2>
            <p className="text-slate mb-4">
              For questions about this Privacy Policy or our data practices,
              please contact:
            </p>
            <div className="bg-gradient-to-br from-obsidian to-deep-navy text-white p-6 rounded-lg">
              <p className="mb-2">
                <strong>Privacy Team:</strong> privacy@yottanest.com
              </p>
              <p className="mb-2">
                <strong>Data Protection Officer:</strong> dpo@yottanest.com
              </p>
              <p className="mb-2">
                <strong>General Inquiries:</strong> contact@yottanest.com
              </p>
              <p className="mb-4">
                <strong>Address:</strong> YottaNest, Sofia, Bulgaria
              </p>
              <p className="text-sm opacity-80">
                For complaints or concerns about our data processing, you may
                also contact the Bulgarian Commission for Personal Data
                Protection (CPDP).
              </p>
            </div>
          </section>

          {/* Supervisory Authority */}
          <section className="mb-10">
            <h2 className="text-2xl font-bold text-obsidian mb-4">
              14. Supervisory Authority
            </h2>
            <p className="text-slate mb-4">
              If you are unsatisfied with our response to your privacy concerns,
              you have the right to lodge a complaint with your local data
              protection authority. In Bulgaria, this is:
            </p>
            <div className="bg-mist-gray/30 p-6 rounded-lg">
              <p className="text-slate mb-2">
                <strong>Commission for Personal Data Protection (CPDP)</strong>
              </p>
              <p className="text-slate mb-2">
                Address: 2 Prof. Tsvetan Lazarov Blvd., Sofia 1592, Bulgaria
              </p>
              <p className="text-slate mb-2">
                Phone: +359 2 915 3 518
              </p>
              <p className="text-slate mb-2">
                Email: kzld@cpdp.bg
              </p>
              <p className="text-slate">
                Website:{" "}
                <a
                  href="https://www.cpdp.bg"
                  className="text-royal-blue hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  www.cpdp.bg
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
