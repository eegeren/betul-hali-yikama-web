import { CTASection } from "@/components/site/cta-section";
import { ContactSection } from "@/components/site/contact-section";
import { ExampleGallery } from "@/components/site/example-gallery";
import { FloatingWhatsAppButton } from "@/components/site/floating-whatsapp-button";
import { Footer } from "@/components/site/footer";
import { Hero } from "@/components/site/hero";
import { MobileStickyCTA } from "@/components/site/mobile-sticky-cta";
import { ProcessSteps } from "@/components/site/process-steps";
import { PriceCalculator } from "@/components/site/price-calculator";
import { ReviewsSection } from "@/components/site/reviews-section";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { ServicesSection } from "@/components/site/services-section";
import { SiteHeader } from "@/components/site/site-header";
import { WhyChooseUs } from "@/components/site/why-choose-us";
import { businessInfo, contactLinks, siteMetadata, workingHours } from "@/lib/site";

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: businessInfo.businessName,
    description: siteMetadata.description,
    areaServed: businessInfo.serviceArea,
    telephone: `+${businessInfo.phoneRaw}`,
    address: {
      "@type": "PostalAddress",
      addressLocality: businessInfo.serviceArea,
      addressRegion: "Balıkesir",
      addressCountry: "TR",
      streetAddress: businessInfo.address,
    },
    openingHoursSpecification: workingHours
      .filter((item) => item.hours !== "Kapalı")
      .map((item) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: item.day,
        opens: "08:00",
        closes: "17:00",
      })),
    url: siteMetadata.siteUrl,
    image: `${siteMetadata.siteUrl}/opengraph-image`,
    sameAs: [contactLinks.whatsapp],
    priceRange: "$$",
  };

  return (
    <>
      <ScrollProgress />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <SiteHeader />
      <main className="snap-y snap-proximity">
        <Hero />
        <ServicesSection />
        <WhyChooseUs />
        <ProcessSteps />
        <PriceCalculator />
        <ExampleGallery />
        <ReviewsSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
      <MobileStickyCTA />
      <FloatingWhatsAppButton />
    </>
  );
}
