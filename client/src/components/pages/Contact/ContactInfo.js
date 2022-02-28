import React from "react";

import "./Contact.scss";

function ContactInfo({ handleChange, formData }) {
  return (
    <>
      <div className="contact-form__information">
        <div className="contact-form__element">
          <textarea
            className="contact-form__input --text"
            placeholder="Saisissez l'objet de votre demande ici... "
            type="text"
            name="information_request"
            onChange={handleChange}
            value={formData.information_request}
          />
        </div>

        <button className="btn btn--full btn--large">
          Envoyer ma demande
        </button>
      </div>
    </>
  );
}

export default ContactInfo;
