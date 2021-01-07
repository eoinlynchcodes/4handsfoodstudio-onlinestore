import React from "react";
import { useHistory } from "react-router-dom";
import "./Footer.css";

function Footer() {
  const history = useHistory();

  const gohome = (e) => {
    history.push("/");
  };

  return (
    <footer className="footer">
      <nav className="footerNavigation">
        <a href="/shop">
          <p>Shop</p>
        </a>
        <a href="/about">
          <p>About</p>
        </a>
        <a href="contact">
          <p>Contact</p>
        </a>
        <a href="/retailers">
          <p>Retailers</p>
        </a>
        <a href="/takeaway">
          <p>Takeaways</p>
        </a>
      </nav>

      <div className="footerHeading changeMouse">
        <h3 onClick={gohome}>4 Hands Food Studio</h3>
      </div>
      <div className="links">
        <form
          action="https://gmail.us19.list-manage.com/subscribe/post?u=5f345ee5b52850316f8e104b4&amp;id=e9b9605d2b"
          method="post"
          id="mc-embedded-subscribe-form"
          name="mc-embedded-subscribe-form"
          className="validate"
          target="_blank"
          noValidate
        >
          <div className="newsLetterSignupFlex">
            <section>
            <label>
              <u>
                <p id="centreTheNLText">Newsletter Signup:</p>
              </u>
            </label>
            <div>
              <br />
              <input type="text" placeholder="your@email.here" />
              <input
                type="submit"
                className="subscribeButton"
                value="Sign Up"
                name="subscribe"
              />
            </div>
            </section>
          </div>

        </form>
        <section className="linksToFlex">
          <div className="thisDivIsfifty">
            <p>
              <u>Follow us:</u>
            </p>
            <a href="https://www.instagram.com/4hands_food_studio/?hl=en">
              <p>Instagram</p>
            </a>
            <a href="https://medium.com/@4handsf">
              <p>Medium</p>
            </a>
          </div>

          <div className="thisDivIsfifty">
            <p>
              <u>Read:</u>
            </p>
            <a href="https://www.irishtimes.com/life-and-style/food-and-drink/restaurant-reviews/review-the-best-pop-up-restaurant-in-ireland-1.4194051">
              <p>Irish Times Article</p>
            </a>
            <a href="https://medium.com/@4handsf">
              <p>Our Blog</p>
            </a>
          </div>
        </section>
      </div>

      <div className="bottom">
          <a><p>&copy; 4 Hands Food Studio 2020</p></a>
          <a href="https://eoinlynch.com">
            <p className="blackenThisEoinLynch">A website by <u>Eoin Lynch</u></p>
          </a>
      </div>
    </footer>
  );
}

export default Footer;
