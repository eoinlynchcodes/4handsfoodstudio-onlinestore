import React from "react";
import rose from "../imagesByEoin/rose.jpeg";
import margaux from "../imagesByEoin/margaux.jpeg";
import roseintro from '../imagesByEoin/roseintro.jpeg';

function About() {
  return (
    <section className="aboutContainer">
      <div className="vl"></div>
      <div>
        <div className="coloredBox">
          <h2>About</h2>
        </div>
        <br/>
        <div className="abouttopImage">
          <img src={roseintro} />
        </div>

        <div className="aboutMainText">
          <p>
            4 Hands Food Studio are producers of naturally fermented foods and
            drinks. Sourcing the best produce, to make the highest quality
            product! 4 Hands keeps to its sustainable thinking by the{" "}
            <a className="blacken" href="#principles">
              <u>principles</u>
            </a>{" "}
            they set in place for their regenerative business model.
            <br />
            <br />4 Hands Food Studio's pop-up dinners have been hailed as{" "}
            <a
              className="blacken"
              href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051"
            >

                <u>"the best pop-up restaurant in Ireland"</u>
            </a>{" "}
            by the Irish Times.
            <br />
            <br />4 Hands was founded by Rose Greene and Margaux Dejardin in
            2018, in Rathaspick, Ireland.
          </p>
        </div>
        <div id="straightenOutRose" className="flexRoseAndMargaux">
          <div className="blackBackgroundAbout">
            <img src={rose} />
            <p>
              <u>Rose Greene</u>
            </p>
          </div>
      
          <div className="aboutText">
            <h4>
              <u>Rose</u>
            </h4>
            <p>
              Rose’s life has always orientated around food, studies in Culinary
              Arts led to cooking in a number of world renowned restaurants
              internationally. She has always focused her career on produce,
              going to the source and supporting farmers while instilling the
              importance of providence to young budding cooks she mentored
              throughout her 15 year career as a chef.
              <br />
              <br />
              Always a curious mind, fermentation became a core of her work.
              Gaining an in-depth understanding of the health benefits of
              fermentation through collaboration with the microbiology
              department of Antwerp university, using her knowledge in natural
              fermentation to assist professors and PHD students in their
              studies.
            </p>
          </div>
        </div>

        <br/>
        <br/>

        <div id="straightenOutMargaux" className="flexRoseAndMargaux">
          <div className="aboutText">
            <h4>
              <u>Margaux</u>
            </h4>
            <p>
              Margaux’s French roots seen her raised with an appreciation of
              food culture, which followed her throughout her life as a simple
              pleasure. It was only later in life she decided to forge a career
              in her true passion, food. Having a great sensitivity to nature,
              and all living things, the core of her interest in food was
              leading the way in sustainable thinking and the betterment of our
              natural surroundings.
              <br />
              <br />
              Within Europe she gained an extensive knowledge in organic farming
              practices, working along side some amazing farming minds to
              develop her own growing style which she uses today. Wellbeing is
              also key to life, as she continually strives to increase her
              knowledge in medicinal plants and their uses. Together Rose and
              Margaux call upon their experience daily to help them achieve
              their goals as a leading sustainable food business.
            </p>
          </div>

          <div className="blackBackgroundAbout">
            <img src={margaux} />
            <p>
              <u>Margaux Dejardin</u>
            </p>
          </div>
        </div>
        <br />
        <hr/>
        <section className="principlesbox">
            <div className="coloredBox extraMargin lime">
              <h2>Vision</h2>
            </div>
            <div className="visionText">
              <p>
                <i>
                  "To live in a world where nature comes first, where we as
                  humans see ourselves of part of nature, not above it.<br/> To see
                  all people open to receive the goodness that our natural
                  surroundings have to offer, showing respect and gratitude for
                  how lucky we are to live in a world which knows better how to
                  care for itself than we ever could."
                </i>
                <br /> <br /><p className="centreThisHereText">- Rose Greene &amp; Margaux Dejardin,<br/> 4 Hands Food
                Studio Founders</p>
              </p>
            </div>
          </section>
          <hr/>
        <section className="principlesbox">
            <div className="coloredBox extraMargin orange">
              <h3>Principles</h3>
            </div>
            <div id="principles" className="white">
              <hr />
              <p>1. Make the best product possible</p>
              <hr />
              <p>
                2. Always strive to improve and innovate on every level.
              </p>
              <hr />
              <p>3. Nutrition is key.</p>
              <hr />
              <p>
                4. Connect with suppliers, continually control and monitor
                supply chain.
              </p>
              <hr />
              <p>5. Minimize the creation of waste.</p>
              <hr />
              <p>
                6. Assess the environmental outcome of any business decision
                before making
              </p>
              <hr />
              <p>7. Support and promote farmers that fit principles.</p>
              <hr />
              <p>8. Engage with and teach food citizens (customers).</p>
              <hr />
              <p>
                9. Continually push for the collective good, to give better
                access to sustainable food to a maximum of people, while
                supporting biodiversity and regenerative agriculture.
              </p>
              <hr />
              <p>10. Lead by example.</p>
              <hr/>
            </div>
          </section>
      </div>
      <div className="vl"></div>
    </section>
  );
}

export default About;
