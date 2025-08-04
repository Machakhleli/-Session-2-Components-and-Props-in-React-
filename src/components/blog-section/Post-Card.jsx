function PostCard({ heading, content, author }) {
  return (
    <article className="post">
      <h3>{heading}</h3>
      <p>{content}</p>
      <p>
        <strong>Author:</strong> {author}
      </p>
    </article>
  );
}
export default PostCard;
