import BlogSection from "@/components/Blogs";
import CTA from "@/components/CTA";
import Hero from "@/components/Hero";
import Tools from "@/components/Tools";
import Work from "@/components/Work";

export default function Home() {
  return (
    <section className="min_width mx-auto">
      <Hero/>
      <Work/>
      <Tools/>
      <BlogSection/>
      <CTA/>
    </section>
  )
}
