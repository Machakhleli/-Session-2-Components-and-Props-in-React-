import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";

function App() {
  return (
   <div className="App">
    <Header/>
    <Main/>

    </div>
      

      <main>
       
        {/* Features Section */}
        

        {/* Blog Posts */}
        <section className="blog">
          <h2>Latest Articles</h2>

          <article className="post">
            <h3>Mastering React Components</h3>
            <p>
              Components are the heart of React apps. Learn how to structure,
              style, and optimize them.
            </p>
            <p>
              <strong>Author:</strong> Sarah Dev
            </p>
          </article>

          <article className="post">
            <h3>Using Props Like a Pro</h3>
            <p>
              Make your React components reusable and dynamic with props and
              destructuring.
            </p>
            <p>
              <strong>Author:</strong> John Code
            </p>
          </article>

          <article className="post">
            <h3>Understanding State and Effects</h3>
            <p>
              Learn the fundamentals of useState and useEffect with real-life
              examples.
            </p>
            <p>
              <strong>Author:</strong> Lina Hooks
            </p>
          </article>
        </section>

        {/* Testimonials */}
        <section className="testimonials">
          <h2>What Developers Say</h2>

          <div className="testimonial">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="User 1"
            />
            <blockquote>
              "DevConnect helped me land my first remote React job!"
            </blockquote>
            <p>- Alex Frontend</p>
          </div>

          <div className="testimonial">
            <img
              src="https://cdn-icons-png.flaticon.com/512/3541/3541871.png"
              alt="User 2"
            />
            <blockquote>
              "The tutorials and challenges here are better than most courses
              I've paid for."
            </blockquote>
            <p>- Maria JS</p>
          </div>
        </section>

        {/* Sidebar/About */}
        <aside className="sidebar">
          <h2>About DevConnect</h2>
          <img
            src="https://avatars.githubusercontent.com/u/98865593?s=280&v=4"
            alt="DevConnect Logo"
          />
          <p>We are a global platform built for developers, by developers.</p>
          <p>
            Join our mission to make tech education and networking accessible to
            everyone.
          </p>
        </aside>
      </main>

      <footer>
        <p>&copy; 2025 DevConnect. All rights reserved.</p>
        <nav>
          <a href="/privacy">Privacy Policy</a>
          <a href="/terms">Terms of Service</a>
        </nav>
      </footer>
    </div>
  );
}

export default App;
