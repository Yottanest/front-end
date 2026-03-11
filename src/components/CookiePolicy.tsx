"use client";

export default function CookiePolicy() {
  return (
    <section className="py-20 lg:py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1
            className="text-4xl lg:text-5xl font-bold text-obsidian mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Cookie Policy
          </h1>
          <p className="text-slate">Last Updated: January 2026</p>
        </div>

        {/* Content */}
        <div className="prose prose-slate max-w-none">
          <div className="space-y-8 text-graphite">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Introduction
              </h2>
              <p className="leading-relaxed">
                This Cookie Policy explains how YottaNest (&quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) uses cookies and similar tracking technologies when you visit our website at yottanest.com (the &quot;Website&quot;). This policy explains what these technologies are, why we use them, and your rights to control our use of them.
              </p>
            </div>

            {/* What Are Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                What Are Cookies?
              </h2>
              <p className="leading-relaxed mb-3">
                Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work more efficiently, provide information to website owners, and improve user experience.
              </p>
              <p className="leading-relaxed">
                Cookies set by the website owner (in this case, YottaNest) are called &quot;first-party cookies&quot;. Cookies set by parties other than the website owner are called &quot;third-party cookies&quot;. Third-party cookies enable third-party features or functionality to be provided on or through the website (e.g., analytics, interactive content, and advertising).
              </p>
            </div>

            {/* Types of Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Types of Cookies We Use
              </h2>

              <div className="space-y-6">
                {/* Strictly Necessary */}
                <div className="bg-mist-gray p-6 rounded-xl border-l-4 border-obsidian">
                  <h3 className="text-xl font-semibold text-obsidian mb-2">1. Strictly Necessary Cookies</h3>
                  <p className="text-sm text-slate mb-2">Required for the website to function</p>
                  <p className="leading-relaxed mb-3">
                    These cookies are essential to provide you with services available through our website and to use some of its features, such as access to secure areas. Because these cookies are strictly necessary, you cannot refuse them without impacting how our website functions.
                  </p>
                  <p className="font-medium text-graphite">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Session management</li>
                    <li>Security features</li>
                    <li>Load balancing</li>
                    <li>Authentication tokens</li>
                  </ul>
                  <p className="text-sm text-slate mt-3">Duration: Session or up to 1 year</p>
                </div>

                {/* Performance Cookies */}
                <div className="bg-mist-gray p-6 rounded-xl border-l-4 border-royal-blue">
                  <h3 className="text-xl font-semibold text-obsidian mb-2">2. Performance and Analytics Cookies</h3>
                  <p className="text-sm text-slate mb-2">Help us understand how visitors use our website</p>
                  <p className="leading-relaxed mb-3">
                    These cookies collect information about how visitors use our website, such as which pages are visited most often, and if they receive error messages from web pages. All information collected by these cookies is aggregated and anonymous.
                  </p>
                  <p className="font-medium text-graphite">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Google Analytics</li>
                    <li>Page view statistics</li>
                    <li>Session duration tracking</li>
                    <li>Bounce rate analysis</li>
                  </ul>
                  <p className="text-sm text-slate mt-3">Duration: Up to 2 years</p>
                </div>

                {/* Functional Cookies */}
                <div className="bg-mist-gray p-6 rounded-xl border-l-4 border-sky">
                  <h3 className="text-xl font-semibold text-obsidian mb-2">3. Functional Cookies</h3>
                  <p className="text-sm text-slate mb-2">Enhance functionality and personalization</p>
                  <p className="leading-relaxed mb-3">
                    These cookies allow our website to remember choices you make (such as your language preference or region) and provide enhanced, more personalized features.
                  </p>
                  <p className="font-medium text-graphite">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>Language preferences</li>
                    <li>Theme settings</li>
                    <li>Form auto-fill data</li>
                    <li>Cookie consent preferences</li>
                  </ul>
                  <p className="text-sm text-slate mt-3">Duration: Up to 1 year</p>
                </div>

                {/* Marketing Cookies */}
                <div className="bg-mist-gray p-6 rounded-xl border-l-4 border-slate">
                  <h3 className="text-xl font-semibold text-obsidian mb-2">4. Marketing and Targeting Cookies</h3>
                  <p className="text-sm text-slate mb-2">Track visitors across websites to display relevant ads</p>
                  <p className="leading-relaxed mb-3">
                    These cookies are used to make advertising messages more relevant to you. They perform functions like preventing the same ad from continuously reappearing, ensuring that ads are properly displayed, and in some cases selecting advertisements that are based on your interests.
                  </p>
                  <p className="font-medium text-graphite">Examples:</p>
                  <ul className="list-disc pl-6 space-y-1 mt-2">
                    <li>LinkedIn Insight Tag</li>
                    <li>Google Ads conversion tracking</li>
                    <li>Retargeting pixels</li>
                    <li>Social media advertising cookies</li>
                  </ul>
                  <p className="text-sm text-slate mt-3">Duration: Up to 2 years</p>
                </div>
              </div>
            </div>

            {/* Third-Party Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Third-Party Cookies
              </h2>
              <p className="leading-relaxed mb-3">
                In addition to our own cookies, we may also use various third-party cookies to report usage statistics of the Website and deliver advertisements on and through the Website.
              </p>

              <div className="bg-ice-blue p-6 rounded-xl mt-4">
                <h3 className="text-lg font-semibold text-obsidian mb-3">Third-Party Services We Use:</h3>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <span className="text-royal-blue font-bold">•</span>
                    <div>
                      <p className="font-semibold text-graphite">Google Analytics</p>
                      <p className="text-sm text-slate">Website traffic analysis and user behavior tracking</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-royal-blue font-bold">•</span>
                    <div>
                      <p className="font-semibold text-graphite">LinkedIn Insights</p>
                      <p className="text-sm text-slate">Professional audience analytics and advertising</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-royal-blue font-bold">•</span>
                    <div>
                      <p className="font-semibold text-graphite">Cloudflare</p>
                      <p className="text-sm text-slate">Security, performance, and content delivery</p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* Managing Cookies */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                How to Control Cookies
              </h2>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">Cookie Consent Manager</h3>
              <p className="leading-relaxed mb-4">
                When you first visit our website, you will be presented with a cookie consent banner allowing you to accept or reject non-essential cookies. You can change your preferences at any time by clicking the cookie settings link in our website footer.
              </p>

              <h3 className="text-xl font-semibold text-obsidian mb-2 mt-4">Browser Settings</h3>
              <p className="leading-relaxed mb-3">
                Most web browsers allow you to control cookies through their settings. You can set your browser to refuse cookies or delete certain cookies. Generally, you should also be able to manage similar technologies in the same way that you manage cookies.
              </p>

              <div className="bg-mist-gray p-6 rounded-xl">
                <p className="font-semibold text-graphite mb-3">Browser-specific cookie management guides:</p>
                <ul className="space-y-2">
                  <li className="flex items-center gap-2">
                    <span className="text-royal-blue">→</span>
                    <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">
                      Google Chrome
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal-blue">→</span>
                    <a href="https://support.mozilla.org/en-US/kb/enhanced-tracking-protection-firefox-desktop" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">
                      Mozilla Firefox
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal-blue">→</span>
                    <a href="https://support.apple.com/guide/safari/manage-cookies-sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">
                      Safari (macOS)
                    </a>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-royal-blue">→</span>
                    <a href="https://support.microsoft.com/en-us/microsoft-edge/delete-cookies-in-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">
                      Microsoft Edge
                    </a>
                  </li>
                </ul>
              </div>

              <div className="bg-ice-blue border-l-4 border-royal-blue p-5 rounded-r-xl mt-4">
                <p className="text-sm text-graphite">
                  <strong>Please note:</strong> If you disable or refuse cookies, some parts of our website may become inaccessible or not function properly.
                </p>
              </div>
            </div>

            {/* Opt-Out Options */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Opt-Out of Interest-Based Advertising
              </h2>
              <p className="leading-relaxed mb-3">
                You can opt out of interest-based advertising from participating companies through these industry opt-out platforms:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://www.youronlinechoices.eu/" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">
                    European Interactive Digital Advertising Alliance (EDAA)
                  </a>
                </li>
                <li>
                  <a href="https://optout.aboutads.info/" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">
                    Digital Advertising Alliance (DAA)
                  </a>
                </li>
                <li>
                  <a href="https://www.networkadvertising.org/choices/" target="_blank" rel="noopener noreferrer" className="text-royal-blue hover:underline">
                    Network Advertising Initiative (NAI)
                  </a>
                </li>
              </ul>
            </div>

            {/* GDPR Compliance */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                GDPR and Your Rights
              </h2>
              <p className="leading-relaxed mb-3">
                Under the General Data Protection Regulation (GDPR) and other privacy laws, you have certain rights regarding the personal data collected through cookies:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Right to Access:</strong> Request information about the data we collect through cookies</li>
                <li><strong>Right to Rectification:</strong> Correct inaccurate data</li>
                <li><strong>Right to Erasure:</strong> Request deletion of your data</li>
                <li><strong>Right to Restrict Processing:</strong> Limit how we use your data</li>
                <li><strong>Right to Data Portability:</strong> Receive your data in a structured format</li>
                <li><strong>Right to Object:</strong> Object to processing of your personal data</li>
                <li><strong>Right to Withdraw Consent:</strong> Withdraw consent at any time</li>
              </ul>
              <p className="leading-relaxed mt-3">
                To exercise any of these rights, please contact us at <a href="mailto:privacy@yottanest.com" className="text-royal-blue hover:underline">privacy@yottanest.com</a>.
              </p>
            </div>

            {/* Do Not Track */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Do Not Track Signals
              </h2>
              <p className="leading-relaxed">
                Some browsers have a &quot;Do Not Track&quot; feature that lets you tell websites that you do not want to have your online activities tracked. We currently do not respond to Do Not Track signals, but you can manage your cookie preferences through our cookie consent manager or browser settings.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Changes to This Cookie Policy
              </h2>
              <p className="leading-relaxed">
                We may update this Cookie Policy from time to time to reflect changes to our practices or for other operational, legal, or regulatory reasons. We will notify you of any material changes by posting the new Cookie Policy on this page and updating the &quot;Last Updated&quot; date.
              </p>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-2xl font-bold text-obsidian mb-3" style={{ fontFamily: "var(--font-display)" }}>
                Contact Us
              </h2>
              <p className="leading-relaxed mb-3">
                If you have any questions about our use of cookies or this Cookie Policy, please contact us:
              </p>
              <div className="bg-mist-gray p-6 rounded-xl">
                <p className="font-semibold text-obsidian mb-2">YottaNest</p>
                <p>Sofia, Bulgaria</p>
                <p>Email: <a href="mailto:privacy@yottanest.com" className="text-royal-blue hover:underline">privacy@yottanest.com</a></p>
                <p>Website: <a href="https://yottanest.com" className="text-royal-blue hover:underline">yottanest.com</a></p>
              </div>
            </div>

            {/* Final Notice */}
            <div className="bg-ice-blue border-l-4 border-royal-blue p-6 rounded-r-xl mt-8">
              <p className="text-graphite font-medium">
                By continuing to use our website, you acknowledge that you have read and understood this Cookie Policy and consent to our use of cookies as described herein, subject to your cookie preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
