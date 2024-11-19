// components
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import OurApproach from "@/components/OurApproach";
import PracticeAreas from "@/components/PracticeAreas";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeBanner />
      <AboutUs />
      <OurApproach />
      <PracticeAreas />
    </main>
  );
}
