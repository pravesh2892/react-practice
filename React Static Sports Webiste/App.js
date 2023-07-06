import React from 'react';
import '../styles/App.css';

const App = () => {
  return (
    <div>
      { <nav id="navbar">
        <ul className="navbar-list">
          <li><a href="https://shorturl.at/ltBRY">Football</a></li>
          <li><a href="https://shorturl.at/ejvNY">Basketball</a></li>
          <li><a href="https://shorturl.at/hLQRS">Tennis</a></li>
          <li><a href="/">Cricket</a></li>
        </ul>
      </nav>}

      { <main id="main-content">
        <section className="news-section">
          <h2>Latest Sports News</h2>
          <article>
            <img src="https://shorturl.at/ltBRY" alt="Football" />
            <h3>Football Match recap</h3>
            <p>Manchester United defeated Liverpool 2-0 in a thrilling match...</p>
          </article>
          <article>
            <img src="https://shorturl.at/ejvNY" alt="Basketball" />
            <h3>NBA FInals Update</h3>
            <p>the Phonix SUns a 2-1 series lead agains the Milwaukee Bucks..</p>
          </article>
          <article>
            <img src="https://shorturl.at/hLQRS" alt="Tennis" />
            <h3>Wimbledon Semifinals Set</h3>
            <p>The Semifinals of the Wimbledon Tennis tournament have been decided..</p>
          </article>
        </section>
      </main>}

      {/* Use Below Images for the making articles */}
      {/* Football - https://shorturl.at/ltBRY */}
      {/* Basketball - https://shorturl.at/ejvNY */}
      {/* Tennis - https://shorturl.at/hLQRS */}

      {<footer id="footer">
        <p className="footer-content">&copy; 2023 Sports Website. All rights reserved</p>
      </footer>}
    </div>
  );
};

export default App;
