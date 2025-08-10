function PostCard({ heading, content, author }) {
  return (
    <article className="mb-[2.5rem]">
      <h3>{heading}</h3>
      <p>{content}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </article>
  );
}
export default PostCard;
