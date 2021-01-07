import React from "react";

function Newsletter() {
  return (
    <div className="aboutContainer">
      <div className="vl"></div>
      <div>
      <div className="coloredBox yellow">
          <h2>Newsletter Signup</h2>
        </div>
      <section className="homepagebox centreThis">
        
        <div className="vl"></div>

        <div className="newsletterComponent">
          <p>Join our mailing list to receive our weekly takeaway offering and latest news!</p>
          <form
            action="https://gmail.us19.list-manage.com/subscribe/post?u=5f345ee5b52850316f8e104b4&amp;id=e9b9605d2b"
            method="post"
            id="mc-embedded-subscribe-form"
            name="mc-embedded-subscribe-form"
            class="validate"
            target="_blank"
            novalidate
          >
            <div className="formAndMoreNewsletter">
              <label>Subscribe to our News Letter</label>
              <div className="newsletterForm">
                <input placeholder="your@email.here" />
                <input className="subscribeButton" type="submit" value="Subscribe" name="subscribe" />
              </div>
            </div>
          </form>
        </div>
        <div className="vl"></div>

        <hr className="bottomHR" />
      </section>
      </div>
      <div className="vl"></div>

    </div>
  );
}

export default Newsletter;
