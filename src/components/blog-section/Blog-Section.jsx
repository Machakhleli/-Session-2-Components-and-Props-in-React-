function BlogSection({ children }) {
  return (
    <section className="blog">
      <h2>Latest Articles</h2>
      {children}
    </section>
  );
}

export default BlogSection;
