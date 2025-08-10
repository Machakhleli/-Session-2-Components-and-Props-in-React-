
function BlogSection({ children }) {
  return (
    <section className="bg-white p-[1.25rem] mg-[1.25rem] border-l-solid border-l-[.25rem] 
    border-l-[#28a745] rounded-[.25rem]">
      <h2>Latest Articles</h2>
      {children}
    </section>
  );
}

export default BlogSection;
