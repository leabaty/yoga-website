import React from "react";

import { BsLaptop } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdAddCircle, MdAddCircleOutline } from "react-icons/md";

import "./AddCollectiveClass.scss";

function AddCollectiveClass() {

  return (
    <>
      <form className="edit-schedule">
        <div className="edit-schedule__container">
          <div className="edit-schedule__item row">
            <input
              className="edit-schedule__item-input --time"
              placeholder="Début"
              type="text"
              name="startTime"
              // onChange={handleChange}
              // value={formData.firstname}
            />
            <p>-</p>
            <input
              className="edit-schedule__item-input --time"
              placeholder="Fin"
              type="text"
              name="endTime"
              // onChange={handleChange}
              // value={formData.firstname}
            />
          </div>

          <div className="edit-schedule__item">
            <input
              className="edit-schedule__item edit-schedule__item-input --class"
              placeholder="Cours"
              type="text"
              name="class"
              // onChange={handleChange}
              // value={formData.firstname}
            />
          </div>

          <div className="edit-schedule__item col">
            <div className="row">
              <FiMapPin />
              <input
                className="edit-schedule__item-input --studio"
                placeholder="Studio"
                type="text"
                name="studioName"
                // onChange={handleChange}
                // value={formData.firstname}
              />
            </div>

            <div className="row">
              <BsLaptop />
              <input
                className="edit-schedule__item-input --studio"
                placeholder="Site web du studio"
                type="text"
                name="studioWebsite"
                // onChange={handleChange}
                // value={formData.firstname}
              />
            </div>
          </div>
        </div>

        <button className="collective__schedule__item-delete">
          <MdAddCircleOutline />
        </button>
      </form>
    </>
  );
}

export default AddCollectiveClass;
