import { Navigation, Footer } from "@/components";
import GDPRCompliance from "@/components/GDPRCompliance";

export const metadata = {
  title: "GDPR Compliance | YottaNest",
  description: "Learn about YottaNest's commitment to GDPR compliance and data protection for financial institutions.",
};

export default function GDPRPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <GDPRCompliance />
      <Footer />
    </main>
  );
}
