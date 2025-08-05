import HeroSection from "./hero-section/HeroSection";
import FeatureCard from "./features/Feature-Card";
import Features from "./features/Features-Section";
import BlogSection from "./blog-section/blog-Section";
import PostCard from "./blog-section/Post-Card";
import Testimonials from "./testimonials/Testimonials-Section";
import TestimonialCard from "./testimonials/Testimonial-card";
import Sidebar from "./aside/Sidebar";

import featuresData from "../data/FeaturesData";
import postData from "../data/PostData";
import testimonialsData from "../data/TestimonialsData";

function Main() {
  const renderFeatures = () =>
    featuresData.map(({ h3, p }, i) => <FeatureCard key={i} h3={h3} p={p} />);

  const renderPost = () =>
    postData.map(({ heading, content, author }, i) => (
      <PostCard key={i} heading={heading} content={content} author={author} />
    ));

  const renderTestimonials = () =>
    testimonialsData.map(({ imgSrc, altText, experience, userName }, i) => (
      <TestimonialCard
        key={i}
        imgSrc={imgSrc}
        altText={altText}
        experience={experience}
        userName={userName}
      />
    ));
  return (
    <div>
      <HeroSection />
      <Features>{renderFeatures()}</Features>
      <BlogSection>{renderPost()}</BlogSection>
      <Testimonials>{renderTestimonials()}</Testimonials>
      <Sidebar />
    </div>
  );
}
export default Main;
