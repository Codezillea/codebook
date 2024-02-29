import { Hero } from "./components/Hero";
import { FeaturedProducts } from "./components/FeaturedProducts";
import { Testimonials } from "./components/Testimonials";
import { Faq } from "./components/Faq"
import { useTitle } from "../../Hooks/useTitle";
export const HomePage = () => {
  useTitle(" Access Latest Computer Science E-Books ");
    return (
      <main>
        <Hero />
        <FeaturedProducts />
        <Testimonials/>
        <Faq />
        
      </main>
    )
  }