import HeroLuxury from "@/components/home/HeroLuxury";
import CategoryGrid from "@/components/home/CategoryGrid";
import FeaturedJewelry from "@/components/home/FeaturedJewelry";
import AtelierStory from "@/components/home/AtelierStory";
import EditorialCampaign from "@/components/home/EditorialCampaign";
import LuxuryReviews from "@/components/home/LuxuryReviews";
import BoutiqueServices from "@/components/home/BoutiqueServices";
import NewsletterVIP from "@/components/home/NewsletterVIP";

export default function Home() {
  return (
    <main className="flex flex-col flex-1 bg-[#FAF8F5] w-full overflow-x-hidden">
      <HeroLuxury />
      <CategoryGrid />
      <FeaturedJewelry />
      <AtelierStory />
      <EditorialCampaign />
      <LuxuryReviews />
      <BoutiqueServices />
      <NewsletterVIP />
    </main>
  );
}
