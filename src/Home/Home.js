import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="home">
      <div className="home__mainBox">
        <h2>Right Sidebar Book a Court</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged.
        </p>
      </div>
      <div className="home__rightBox">
        {/* Should I make this it's own separate component? */}
        <Link className="home__link" to="/tennis-book">
          <h2>
            Book
            <br />
            A
            <br />
            Court
          </h2>
        </Link>
      </div>
    </div>
  );
}

export default Home;
