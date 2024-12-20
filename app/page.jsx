// components
import AboutUs from "@/components/AboutUs";
import Footer from "@/components/Footer";
import HomeBanner from "@/components/HomeBanner";
import OurApproach from "@/components/OurApproach";
import StatisticsSection from "@/components/StatisticsSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <HomeBanner />
      <AboutUs />
      <StatisticsSection />
      <OurApproach />
    </main>
  );
}
