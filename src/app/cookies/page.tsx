import { Navigation, Footer } from "@/components";
import CookiePolicy from "@/components/CookiePolicy";

export const metadata = {
  title: "Cookie Policy | YottaNest",
  description: "Learn about how YottaNest uses cookies and similar tracking technologies on our website.",
};

export default function CookiePolicyPage() {
  return (
    <main className="overflow-hidden">
      <Navigation />
      <CookiePolicy />
      <Footer />
    </main>
  );
}
