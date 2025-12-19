import { homeContent } from "@/content/homeContent";

export interface HeroSlide {
  id: number;
  image: string;
  title: string;
  subtitle: string;
}

export const heroSlides: HeroSlide[] = homeContent.hero.slides; 
