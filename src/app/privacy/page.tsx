import { Navigation, Footer } from "@/components";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export const metadata = {
  title: "Privacy Policy | YottaNest",
  description: "Learn how YottaNest collects, uses, and protects your personal data in compliance with GDPR and EU data protection laws.",
};

export default function PrivacyPolicyPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <PrivacyPolicy />
      <Footer />
    </main>
  );
}
