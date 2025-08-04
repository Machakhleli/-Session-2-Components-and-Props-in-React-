function TestimonialCard({ userImg, experience, userName }) {
  return (
    <div className="testimonial">
      {userImg}
      <blockquote>{experience}</blockquote>
      <p> - {userName}</p>
    </div>
  );
}
export default TestimonialCard;
