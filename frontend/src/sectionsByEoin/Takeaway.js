import React from "react";
import TakeawayContainer from "./TakeawayContainer";
import takeawaypicture from "../imagesByEoin/takeawaypicture.png";
import { Link } from 'react-router-dom';

function Takeaway() {

  
  return (
    <section className="aboutContainer">
      <div className="vl"></div>
      <div>
        <div className="coloredBox green">
          <h2>Takeaway</h2>
        </div>
        <br />

        <div className="homeImages">
          <div className="homepageContainer">
            <img src={takeawaypicture} />
          </div>
        <div className="aboutMainText">
          <p>
            Nourishing, sustainable, tasty ready-to-go meal to enjoy with your
            loved ones in the comfort of your own home.
            <br />
            <br />
            Our takeaway is by pre-order only, join our mailing list to receive
            the weekly menu, or check out the website each Monday for the
            update.
            <br />
            <br />
            Food is served in glass jars, we greatly appreciate the return of
            clean jars helping eliminate waste.
          </p>
          <TakeawayContainer />
          <br/>
          <Link to="/shop"><div className="ProductsFromMenu">
            Order other products for collection with takeaway
          </div></Link>
        </div>
        </div>
      </div>
      <div className="vl"></div>
    </section>
  );
}

export default Takeaway;
