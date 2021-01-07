import React from "react";

export default class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.submitForm = this.submitForm.bind(this);
    this.state = {
      status: "",
    };
  }

  render() {
    const { status } = this.state;

    return (
      <div>
          <div className="paraforalignment">
              <p>Feel free to contact us to about commercial orders, ask us questions or anything else.</p>
          </div>
        <form
          className="contacform"
          onSubmit={this.submitForm}
          action="https://formspree.io/f/mdopppvr"
          method="POST"
        >
          <label>Name:</label>
          <input type="text" name="name" />
          <br />
          <label>Phone Number:</label>
          <input type="text" name="phone" />
          <br />
          <label>Email:</label>
          <input type="email" name="email" />
          <br />
          <label>Message:</label>
          <textarea type="text" rows="8" name="message" />
          <br />
          {status === "SUCCESS" ? <p>Thanks!</p> : <button>Submit</button>}
          {status === "ERROR" && <p>Ooops! There was an error.</p>}
        </form>
      </div>
    );
  }

  submitForm(ev) {
    ev.preventDefault();
    const form = ev.target;
    const data = new FormData(form);
    const xhr = new XMLHttpRequest();
    xhr.open(form.method, form.action);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = () => {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        form.reset();
        this.setState({ status: "SUCCESS" });
      } else {
        this.setState({ status: "ERROR" });
      }
    };
    xhr.send(data);
  }
}
