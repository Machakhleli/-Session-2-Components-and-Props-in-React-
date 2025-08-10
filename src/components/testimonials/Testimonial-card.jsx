function TestimonialCard({ imgSrc, altText, experience, userName }) {
  return (
    <div className="bg-white p-[1.25rem] mx-0 my-[.9375rem] flex align-center border-l-solid border-l-[4px] border-l-[#ffc107] rounded-[4px]">    
    <img
        src={imgSrc}
        alt={altText || userName || "User avatar"}
        className="w-[3.75rem] rounded-[50%] mr-[1.25rem]"
        loading="lazy"
      />
      <blockquote className="italic m-0">{experience}</blockquote>
      <p> - {userName}</p>
    </div>
  );
}
export default TestimonialCard;
