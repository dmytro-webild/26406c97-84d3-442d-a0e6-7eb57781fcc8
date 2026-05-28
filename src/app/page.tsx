"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqBase from '@/components/sections/faq/FaqBase';
import FeatureCardTwentyThree from '@/components/sections/feature/FeatureCardTwentyThree';
import FooterMedia from '@/components/sections/footer/FooterMedia';
import HeroBillboardRotatedCarousel from '@/components/sections/hero/HeroBillboardRotatedCarousel';
import NavbarStyleApple from '@/components/navbar/NavbarStyleApple/NavbarStyleApple';
import PricingCardNine from '@/components/sections/pricing/PricingCardNine';
import ProductCardFour from '@/components/sections/product/ProductCardFour';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import TextSplitAbout from '@/components/sections/about/TextSplitAbout';

export default function LandingPage() {
  return (
    <ThemeProvider
        defaultButtonVariant="text-shift"
        defaultTextAnimation="background-highlight"
        borderRadius="soft"
        contentWidth="small"
        sizing="largeSmallSizeLargeTitles"
        background="none"
        cardStyle="glass-elevated"
        primaryButtonStyle="primary-glow"
        secondaryButtonStyle="radial-glow"
        headingFontWeight="light"
    >
      <ReactLenis root>
  <div id="nav" data-section="nav">
      <NavbarStyleApple
      navItems={[
        {
          name: "Home",          id: "hero"},
        {
          name: "About",          id: "about"},
        {
          name: "Solutions",          id: "features"},
        {
          name: "Packages",          id: "product"},
        {
          name: "Pricing",          id: "pricing"},
        {
          name: "Testimonials",          id: "testimonials"},
        {
          name: "Contact",          id: "contact"},
      ]}
      brandName="BrandLaunch Pro"
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroBillboardRotatedCarousel
      background={{
        variant: "radial-gradient"}}
      title="Your Brand Identity, Professionally Designed"
      description="Complete logo, posters, and social-ready content to launch your brand with confidence. Professional design made accessible."
      buttons={[
        {
          text: "Start Your Brand Today",          href: "#contact"},
      ]}
      carouselItems={[
        {
          id: "hero-carousel-1",          imageSrc: "http://img.b2bpic.net/free-photo/draft-design-line-outline-sketch-style-graphic-concept_53876-137601.jpg",          imageAlt: "Modern logo design and branding elements"},
        {
          id: "hero-carousel-2",          imageSrc: "http://img.b2bpic.net/free-photo/mexican-traditional-cards-game_23-2150558661.jpg",          imageAlt: "Promotional poster template design"},
        {
          id: "hero-carousel-3",          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/default/no-image.jpg?id=hfu2id",          imageAlt: "Social media content strategy graphics"},
        {
          id: "hero-carousel-4",          imageSrc: "http://img.b2bpic.net/free-photo/mock-up-business-template_93675-130663.jpg",          imageAlt: "Stationery and business card branding mockup"},
        {
          id: "hero-carousel-5",          imageSrc: "http://img.b2bpic.net/free-photo/web-template-layout-draft-sketch_53876-167110.jpg",          imageAlt: "Website design and user interface elements"},
        {
          id: "hero-carousel-6",          imageSrc: "http://img.b2bpic.net/free-photo/close-up-female-hands-putting-shipping-label-package-with-beauty-natural-products-arranging-online-customers-orders_662251-1858.jpg",          imageAlt: "Product packaging and retail branding"},
      ]}
      autoPlay={true}
    />
  </div>

  <div id="about" data-section="about">
      <TextSplitAbout
      useInvertedBackground={false}
      title="Crafting Your Unique Brand Story"
      description={[
        "At BrandLaunch Pro, we specialize in transforming your vision into a compelling brand identity. We understand the challenges small to medium businesses face when seeking professional design solutions.",        "Our approach is centered on affordability, quick turnaround, and versatility, ensuring you receive modern aesthetics and assets usable across all digital and print platforms.",        "We empower entrepreneurs, marketing managers, and social media professionals to launch campaigns with confidence, eliminating the need for extensive design expertise."]}
    />
  </div>

  <div id="features" data-section="features">
      <FeatureCardTwentyThree
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      features={[
        {
          id: "logo-design",          title: "Stunning Logo Design",          tags: [
            "Visual Identity",            "Creative"],
          imageSrc: "http://img.b2bpic.net/free-photo/creative-innovation-inspiration-light-bulb-graphic-word_53876-120149.jpg",          imageAlt: "Graphic designer working on a unique logo"},
        {
          id: "poster-templates",          title: "Print & Digital Poster Templates",          tags: [
            "Promotional",            "Print-Ready"],
          imageSrc: "http://img.b2bpic.net/free-vector/asdsadsa_23-2148053152.jpg",          imageAlt: "Collection of modern poster templates"},
        {
          id: "social-content",          title: "Engaging Social Content Strategy",          tags: [
            "Digital Marketing",            "Engagement"],
          imageSrc: "http://img.b2bpic.net/free-photo/vivid-types-applications-connecting-cellphone_23-2147841270.jpg",          imageAlt: "Social media content planning and graphics"},
      ]}
      title="Our Comprehensive Branding Solutions"
      description="We address common pain points with affordable, modern, and versatile assets."
    />
  </div>

  <div id="product" data-section="product">
      <ProductCardFour
      animationType="slide-up"
      textboxLayout="default"
      gridVariant="three-columns-all-equal-width"
      useInvertedBackground={false}
      products={[
        {
          id: "starter",          name: "Starter Brand Kit",          price: "From $499",          variant: "Essential Branding",          imageSrc: "http://img.b2bpic.net/free-photo/merchandise-business-goal-investment-plan-concept_53876-127510.jpg",          imageAlt: "Minimalist branding elements for a new business"},
        {
          id: "growth",          name: "Growth Accelerator",          price: "From $999",          variant: "Scaling Your Vision",          imageSrc: "http://img.b2bpic.net/free-photo/product-production-manufacturing-supply-distribution-concept_53876-138508.jpg",          imageAlt: "Creative marketing materials for business growth"},
        {
          id: "premium",          name: "Premium Identity",          price: "From $1999",          variant: "Full Brand System",          imageSrc: "http://img.b2bpic.net/free-photo/mystery-box-with-gifts-concept_23-2150063177.jpg",          imageAlt: "Comprehensive corporate branding assets"},
        {
          id: "campaign",          name: "Campaign Ready",          price: "From $749",          variant: "Promotional Assets",          imageSrc: "http://img.b2bpic.net/free-photo/phone-connected-headphones_1162-134.jpg",          imageAlt: "Marketing campaign design assets"},
        {
          id: "social",          name: "Social Boost",          price: "From $349",          variant: "Engaging Content",          imageSrc: "http://img.b2bpic.net/free-vector/flat-world-sexual-health-day-instagram-stories-collection_23-2149051923.jpg",          imageAlt: "Dynamic social media post designs"},
        {
          id: "visual",          name: "Visual Pro",          price: "From $1299",          variant: "Advanced Graphics",          imageSrc: "http://img.b2bpic.net/free-photo/people-working-together-animation-studio_23-2149207981.jpg",          imageAlt: "Advanced graphic design and visual solutions"},
      ]}
      title="Explore Our Service Packages"
      description="Tailored branding solutions for businesses of all sizes, designed to help you succeed."
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingCardNine
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      plans={[
        {
          id: "basic",          title: "Basic Identity",          price: "$499",          period: "one-time",          features: [
            "Custom Logo Design",            "2 Revisions",            "Basic Brand Guide",            "Digital File Delivery"],
          button: {
            text: "Choose Basic",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/account-assets-audit-bank-bookkeeping-finance-concept_53876-124927.jpg",          imageAlt: "Basic branding package"},
        {
          id: "standard",          title: "Standard Brand Pro",          price: "$999",          period: "one-time",          features: [
            "Advanced Logo Suite",            "5 Revisions",            "Comprehensive Brand Guide",            "Poster Template (1)",            "Social Media Kit (3 posts)"],
          button: {
            text: "Choose Standard",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/woman-makes-patriotic-gingerbread-support-ukraine_169016-20151.jpg",          imageAlt: "Standard branding package"},
        {
          id: "premium",          title: "Premium Enterprise",          price: "$1999",          period: "one-time",          features: [
            "Full Brand System",            "Unlimited Revisions",            "Detailed Brand Strategy",            "Poster Templates (3)",            "Social Media Campaign (5 posts)",            "Business Card Design"],
          button: {
            text: "Choose Premium",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/man-working-as-architect-holding-maquette-using-touch-screen-monitor-building-model-project-engineer-with-architectural-equipment-designing-construction-layout-digital-architecture_482257-38116.jpg",          imageAlt: "Premium branding package"},
      ]}
      title="Transparent Pricing, Exceptional Value"
      description="Professional design shouldn't break the bank. Choose a plan that fits your budget and brand ambitions."
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialCardTwo
      animationType="slide-up"
      textboxLayout="default"
      useInvertedBackground={false}
      testimonials={[
        {
          id: "1",          name: "Sarah Johnson",          role: "CEO, TechInnovate",          testimonial: "BrandLaunch Pro helped us articulate our vision into a stunning visual identity. Their quick turnaround and modern design approach were exactly what we needed to re-enter the market with confidence.",          imageSrc: "http://img.b2bpic.net/free-photo/colleagues-speaking-discussing-drawings-new-ideas-office_176420-1702.jpg",          imageAlt: "Sarah Johnson, CEO of TechInnovate"},
        {
          id: "2",          name: "Michael Chen",          role: "Marketing Director, GlobalReach",          testimonial: "The poster templates and social content strategy provided by BrandLaunch Pro were invaluable. Our campaigns saw increased engagement, and the assets were incredibly versatile across all platforms.",          imageSrc: "http://img.b2bpic.net/free-photo/people-working-together-animation-studio_23-2149207988.jpg",          imageAlt: "Michael Chen, Marketing Director of GlobalReach"},
        {
          id: "3",          name: "Emily Rodriguez",          role: "Founder, EcoBloom",          testimonial: "As an entrepreneur, budget and time were critical. BrandLaunch Pro delivered professional, high-quality branding that aligned perfectly with our eco-friendly mission, all within our constraints.",          imageSrc: "http://img.b2bpic.net/free-photo/communication-conference-sharing-conversation-meeting_53876-26263.jpg",          imageAlt: "Emily Rodriguez, Founder of EcoBloom"},
        {
          id: "4",          name: "David Kim",          role: "Brand Manager, UrbanEdge",          testimonial: "Their ability to understand our brand's unique needs and translate them into visual assets was impressive. The entire process was smooth, and the results speak for themselves.",          imageSrc: "http://img.b2bpic.net/free-photo/white-open-sign-bush_23-2149169002.jpg",          imageAlt: "David Kim, Brand Manager of UrbanEdge"},
        {
          id: "5",          name: "Jessica Lee",          role: "SMB Owner, LocalBites Cafe",          testimonial: "Getting a professional logo and marketing materials used to be a daunting task. BrandLaunch Pro made it accessible and enjoyable, giving my cafe a fresh, modern look without any hassle.",          imageSrc: "http://img.b2bpic.net/free-photo/business-executives-reading-sticky-notes_1170-1720.jpg",          imageAlt: "Jessica Lee, Owner of LocalBites Cafe"},
      ]}
      title="What Our Clients Say"
      description="Hear from business owners and marketing managers who've elevated their brands with our professional solutions."
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofOne
      textboxLayout="default"
      useInvertedBackground={false}
      names={[
        "GrowthHub",        "MarketFlow",        "VisionaryCorp",        "FutureCraft",        "BrandPulse",        "InnovateX",        "CreativeWave"]}
      title="Trusted by Leading Businesses"
      description="Our designs empower businesses across various industries to shine and connect with their audience."
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqBase
      textboxLayout="default"
      useInvertedBackground={false}
      faqs={[
        {
          id: "q1",          title: "How long does the branding process take?",          content: "Our process is designed for quick turnaround. Most basic brand identity projects are completed within 1-2 weeks, while more comprehensive packages might take 3-4 weeks, depending on client feedback and revision cycles."},
        {
          id: "q2",          title: "What if I don't have a clear visual vision?",          content: "No problem! We specialize in translating your business goals and values into a cohesive visual language. Our initial consultation involves understanding your brand essence, target audience, and preferences to guide the design process effectively."},
        {
          id: "q3",          title: "Are your branding solutions affordable for small businesses?",          content: "Absolutely. We offer tiered packages specifically designed to cater to various budgets, from startups needing essential branding to growing businesses requiring a comprehensive identity system. Our goal is professional design made accessible."},
      ]}
      title="Frequently Asked Questions"
      description="Quick answers to help you understand our process, services, and how we can bring your brand to life."
      faqsAnimation="slide-up"
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      useInvertedBackground={false}
      title="Ready to Launch Your Brand?"
      description="Get in touch today for a free consultation and let's bring your vision to life. Fill out the form and we'll connect shortly."
      inputs={[
        {
          name: "name",          type: "text",          placeholder: "Your Name",          required: true,
        },
        {
          name: "email",          type: "email",          placeholder: "Your Email",          required: true,
        },
        {
          name: "company",          type: "text",          placeholder: "Company Name",          required: false,
        },
      ]}
      textarea={{
        name: "message",        placeholder: "Tell us about your project...",        rows: 5,
        required: true,
      }}
      imageSrc="http://img.b2bpic.net/free-photo/interior-designer-working-out-office_23-2150379212.jpg"
      imageAlt="Creative workspace with branding elements"
      mediaAnimation="opacity"
      mediaPosition="left"
      buttonText="Request Free Consultation"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMedia
      imageSrc="http://img.b2bpic.net/free-photo/aesthetic-background-with-patterned-glass-texture_53876-132956.jpg"
      imageAlt="Abstract light background"
      logoText="BrandLaunch Pro"
      columns={[
        {
          title: "Solutions",          items: [
            {
              label: "Logo Design",              href: "#features"},
            {
              label: "Poster Templates",              href: "#features"},
            {
              label: "Social Content",              href: "#features"},
          ],
        },
        {
          title: "Company",          items: [
            {
              label: "About Us",              href: "#about"},
            {
              label: "Pricing",              href: "#pricing"},
            {
              label: "Testimonials",              href: "#testimonials"},
          ],
        },
        {
          title: "Support",          items: [
            {
              label: "FAQ",              href: "#faq"},
            {
              label: "Contact",              href: "#contact"},
            {
              label: "Privacy Policy",              href: "#"},
          ],
        },
      ]}
      copyrightText="© 2024 BrandLaunch Pro. All rights reserved."
    />
  </div>
      </ReactLenis>
    </ThemeProvider>
  );
}