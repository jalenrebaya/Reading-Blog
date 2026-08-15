import "./App.css";
import Article from "./pages/Article";

function App() {
  return (
    <div className="app">

      <header className="header">
        <h1>BOOKS & BEYOND</h1>

        <nav>
          <a href="#home">Home</a>
          <a href="#blog">Blog</a>
          <a href="#about">About</a>
        </nav>
      </header>

      <main>

        <section className="hero" id="home">
          <p className="label">MY FAVORITE HOBBY</p>

          <h2>
            READING,
            <br />
            STORIES &
            <br />
            DISCOVERY
          </h2>

          <p className="intro">
            Welcome to my reading blog. This is where I share
            my experiences, thoughts, and the things I discover
            through reading.
          </p>

          <a className="hero-link" href="#blog">
            READ MY STORY →
          </a>
        </section>


        <section className="blog" id="blog">

          <p className="label">MY READING BLOG</p>

          <h2>LATEST POST</h2>

          <div className="posts">

            <article className="post">

              <p className="date">AUGUST 15, 2026</p>

              <h3>My Reading Journey</h3>

              <p>
                A personal story about why reading became one
                of my favorite hobbies.
              </p>

              <a href="#article">
                READ ARTICLE →
              </a>

            </article>

          </div>

        </section>


        <section id="article">
          <Article />
        </section>


        <section className="about" id="about">

          <p className="label">ABOUT THIS BLOG</p>

          <h2>WHY READING?</h2>

          <p>
            This blog is about my experience with reading and
            why it became one of my favorite hobbies.
          </p>

          <p>
            I created this website using React and Vite as part
            of my web development project.
          </p>

        </section>

      </main>


      <footer>
        <p>© 2026 Books & Beyond | Created by Jallyn</p>
      </footer>

    </div>
  );
}

export default App;