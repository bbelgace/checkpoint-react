import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light navbar-dark bg-dark">
        <div className="container-fluid ">
          <img
            src="https://cdn3.vectorstock.com/i/1000x1000/71/82/premium-quality-product-gold-label-vector-1487182.jpg"
            alt="hhh"
            width="70"
            height="54"
          />
          <h2 className="navbar-brand">Entreprise</h2>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Nos produits
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Nos services
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">
                  Contacter nous
                </a>
              </li>
            </ul>
            <button type="button" className="btn btn-light">
              <a href="#aaa">Inscription</a>
            </button>
          </div>
        </div>
      </nav>
      <section>
        <img
          src="https://cdn3.vectorstock.com/i/1000x1000/71/82/premium-quality-product-gold-label-vector-1487182.jpg"
          className="rounded mx-auto d-block"
          id="bbb"
          alt="logo de l'enterprise."
          width="700"
          height="700"
        />

        <h1>
          <a href="#">
            Premium quality product golden label design Free Vector
          </a>
        </h1>
      </section>
      <div className="container">
        <form className="row g-3" id="aaa">
          <div className="col-md-6">
            <label htmlfor="inputEmail4" className="form-label">
              Email
            </label>
            <input type="email" className="form-control" id="inputEmail4" />
          </div>
          <div className="col-md-6">
            <label htmlfor="inputPassword4" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="inputPassword4"
            />
          </div>
          <div className="col-12">
            <label htmlfor="inputAddress" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress"
              placeholder="1234 Main St"
            />
          </div>
          <div className="col-12">
            <label htmlfor="inputAddress2" className="form-label">
              Address 2
            </label>
            <input
              type="text"
              className="form-control"
              id="inputAddress2"
              placeholder="Apartment, studio, or floor"
            />
          </div>
          <div className="col-md-6">
            <label htmlfor="inputCity" className="form-label">
              City
            </label>
            <input type="text" className="form-control" id="inputCity" />
          </div>
          <div className="col-md-4">
            <label htmlfor="inputState" className="form-label">
              State
            </label>
            <select id="inputState" className="form-select">
              <option selected>Choose...</option>
              <option>...</option>
            </select>
          </div>
          <div className="col-md-2">
            <label htmlfor="inputZip" className="form-label">
              Zip
            </label>
            <input type="text" className="form-control" id="inputZip" />
          </div>
          <div className="col-12">
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                id="gridCheck"
              />
              <label className="form-check-label" for="gridCheck">
                Check me out
              </label>
            </div>
          </div>
          <div className="col-12">
            <button type="submit" className="btn btn-primary">
              Sign in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
