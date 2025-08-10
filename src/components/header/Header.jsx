function Header() {
  return (
    <header className="flex justify-evenly items-center py-4">
      <div className="logo">
        <h1>DevConnect</h1>
      </div>
      <nav className="flex">
        <a href="/">Home</a>
        <a href="/features">Features</a>
        <a href="/blog">Blog</a>
        <a href="/about">About</a>
      </nav>
    </header>
  );
}
export default Header;
