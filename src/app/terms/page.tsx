import { Navigation, Footer } from "@/components";
import TermsAndConditions from "@/components/TermsAndConditions";

export const metadata = {
  title: "Terms and Conditions | YottaNest",
  description: "Terms and Conditions for using YottaNest's AI-powered compliance automation services.",
};

export default function TermsPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <TermsAndConditions />
      <Footer />
    </main>
  );
}
