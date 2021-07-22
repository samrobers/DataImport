import { Link } from "react-router-dom";
import logo from "../assets/logo.png";

const Home = () => {
  return (
    <main className="container-fluid">
      <div className="d-flex" id="splashZone">
        <img src={logo} alt="Our logo" />
        <h1>MLB Park Tracker</h1>
        <img src={logo} alt="Our logo" />
      </div>
      <div id="landingText" className="d-flex flex-column">
        <h2>Welcome</h2>
        <p>
          To your one stop shop for all things MLB stadiums. Find out what
          people think of your home team's home and explore rival stadiums and
          decide which away games are worth going to. Check out highly
          recommended bars and restaurants for your pregame and the best
          in-stadium vendors.
        </p>
        <p>
          Create an account and leave reviews, interact with your peers, and
          keep track of all the stadiums you have been to!
        </p>
        <p>
          Hit the button below to create an account and get started on your MLB
          superfan journey!
        </p>
        <Link to="/createUser">
          <button className="btn btn-dark">Get Started</button>
        </Link>
      </div>
    </main>
  );
};

export default Home;
