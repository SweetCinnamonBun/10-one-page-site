import "./App.css";

function App() {
  return (
    <>
      <div className="container">
        <nav className="navbar">
          <ul className="ul1">
            <li className="port">
              <a href="#">Portfolio</a>
            </li>
          </ul>
          <ul className="ul2">
            <li><a href="#Menneisyys">Menneisyys</a></li>
            <li><a href="#Nykyisyys">Nykyisyys</a></li>
            <li><a href="#Tulevaisuus">Tulevaisuus</a></li>
            <li><a href="#Yhteistiedot">Yhteistiedot</a></li>
          </ul>
        </nav>
        <div className="second-container">
          <header className="header">
            <section className="presentation">
              <h1>Portfolio - Roman Klemiato</h1>
              <h2>Haluan esitellä osaamistani seuraavien itse tekemieni palvelujen avulla</h2>
              <ol>
                <li><a href="#"><strong>1.</strong> Eka esimerkki</a></li>
                <li><a href="#"><strong>2.</strong> Toka esimerkki</a></li>
                <li><a href="#"><strong>3.</strong> Kolmas esimerkki</a></li>
                <li><a href="#"><strong>4.</strong> Neljäs esimerkki</a></li>
                <li><a href="#"><strong>5.</strong> Viides esimerkki</a></li>
                <li><a href="#"><strong>6.</strong> Kuudes esimerkki</a></li>
              </ol>
            </section>
          </header>
          <section className="past">
            <h1 id="Menneisyys">Menneisyys</h1>
            <section className="card-section">
              {["nature", "technology", "city"].map((category, index) => (
                <div className="card" key={index}>
                  <figure>
                    <img src={`https://source.unsplash.com/1200x675/?${category}`} alt="card image" />
                  </figure>
                  <h1>Card Title {index + 1}</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quas.</p>
                  <button>See more</button>
                </div>
              ))}
            </section>
          </section>
          <section className="present">
            <h1 id="Nykyisyys">Nykyisyys</h1>
            <div className="present-div">
              <figure>
                <img src="https://source.unsplash.com/800x450/?business,work" alt="present section image" />
              </figure>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quas.</p>
            </div>
          </section>
          <section className="future">
            <h1 id="Tulevaisuus">Tulevaisuus</h1>
            <figure>
              <img src="https://source.unsplash.com/800x450/?future,technology" alt="future section image" />
            </figure>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, quas.</p>
          </section>
          <section className="contact">
            <h1 id="Yhteistiedot">Contact me</h1>
            <form>
              <div className="form-member">
                <label htmlFor="fname">Nimi:</label>
                <input type="text" id="fname" name="fname" />
              </div>
              <div className="form-member">
                <label htmlFor="email">Sähköposti:</label>
                <input type="text" name="email" id="email" />
              </div>
              <div className="form-member">
                <label htmlFor="feedback">Palautetta:</label>
                <input type="text" name="feedback" id="feedback" />
              </div>
              <div className="button-div">
                <button className="contact-btn">Lähetä</button>
              </div>
            </form>
          </section>
          <footer>
            <h1>2023</h1>
            <p>&copy;</p>
            <h1>Roman Klemiato</h1>
          </footer>
        </div>
      </div>
    </>
  );
}

export default App;