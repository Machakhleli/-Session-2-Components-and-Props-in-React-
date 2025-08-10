function Sidebar() {
  return (
    <aside className="bg-white p-[1.25rem] mb-[2.5rem] border-solid
     border-[#ddd] border-[.0625rem] rounded-[.25rem]">
      <h2>About DevConnect</h2>
      <img
        src="https://avatars.githubusercontent.com/u/98865593?s=280&v=4"
        alt="DevConnect Logo"
        className="max-w-full rounded-[.25rem] mb-[.625rem]"
      />
      <p>We are a global platform built for developers, by developers.</p>
      <p>
        Join our mission to make tech education and networking accessible to
        everyone.
      </p>
    </aside>
  );
}

export default Sidebar;
