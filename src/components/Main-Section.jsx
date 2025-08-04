import HeroSection from "./hero-section/HeroSection";
import FeatureCard from "./features/Feature-Card";
import Features from "./features/Features-Section";
import BlogSection from "./blog-section/blog-Section";
import PostCard from "./blog-section/Post-Card";
import Testimonials from "./testimonials/Testimonials-Section";
import TestimonialCard from "./testimonials/Testimonial-card";

function Main() {
  return (
    <div>
      <HeroSection />
      <Features>
        <FeatureCard
          h3={"Community Driven"}
          p={
            "Get support, share tips, and build together with thousands of developers."
          }
        />
        <FeatureCard
          h3={"Learning Resources"}
          p={
            " Access curated tutorials, challenges, and projects to boost your skills."
          }
        />
        <FeatureCard
          h3={"Job Board"}
          p={
            "Explore developer jobs and freelance gigs tailored to your stack."
          }
        />
      </Features>
      <BlogSection>
        <PostCard
          heading={"Mastering React Components"}
          content={
            "Components are the heart of React apps. Learn how to structure, style, and optimize them."
          }
          author={"Sarah Dev"}
        />

        <PostCard
          heading={"Using Props Like a Pro"}
          content={
            "Make your React components reusable and dynamic with props and destructuring."
          }
          author={"John Code"}
        />

        <PostCard
          heading={"Understanding State and Effects"}
          content={
            "Learn the fundamentals of useState and useEffect with real-life examples."
          }
          author={"Lina Hooks"}
        />
      </BlogSection>
      <Testimonials>
        <TestimonialCard
          userImg={
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="User 1"
            />
          }
          experience={"DevConnect helped me land my first remote React job!"}
          userName={"Alex Frontend"}
        />
        <TestimonialCard
          userImg={
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="User 2"
            />
          }
          experience={
            "The tutorials and challenges here are better than most courses I've paid for."
          }
          userName={" Maria JS"}
        />
      </Testimonials>
    </div>
  );
}
export default Main;
