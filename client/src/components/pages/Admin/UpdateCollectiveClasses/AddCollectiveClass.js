import React, { useState, useEffect } from "react";
import axios from "axios";

import { BsLaptop } from "react-icons/bs";
import { FiMapPin } from "react-icons/fi";
import { MdAddCircle, MdAddCircleOutline } from "react-icons/md";

import "./AddCollectiveClass.scss";

function AddCollectiveClass({ weekday }) {
  //STATE
  const [collectiveClassesData, setCollectiveClassesData] = useState({
    startTime: "",
    endTime: "",
    class: "",
    studioName: "",
    studioWebsite: "",
  });

  const [isSubmit, setIsSubmit] = useState(false);

  // FILLING IN THE FORM OBJECT "LIVE"
  const handleChange = (event) => {
    const value = event.target.value;

    setCollectiveClassesData({
      ...collectiveClassesData,
      [event.target.name]: value,
    });
  };

  // HANDLING THE FORM SUBMIT
  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmit(true);

    setCollectiveClassesData((prevState) => {
      return {
        ...prevState,
        weekday: weekday,
      };
    });
  };

  
  // API SETTINGS
  // api params
  /* https://apsara-yoga.herokuapp.com/ */
  const postData = async (URL) => {
    try {
      console.log("Front - ici l'agrégateur de données pour l'envoi au back")
      await axios.post(`http://localhost:5000/${URL}`, {
        collectiveClassesData,
      });
    } catch (error) {
      console.log(error);
    }
  };


  // routes
  useEffect(() => {
    console.log("Front - J'envoie la data au routeur back")
    if (isSubmit) {
      postData("api/v1/apsara-yoga/post-collective-class");
    }
  }, [isSubmit]);

  return (
    <>
      <form className="edit-schedule" onSubmit={handleSubmit}>
        <div className="edit-schedule__container">
          <div className="edit-schedule__item row">
            <input
              className="edit-schedule__item-input --time"
              placeholder="Début"
              type="text"
              name="startTime"
              onChange={handleChange}
              value={collectiveClassesData.startTime}
            />
            <p>-</p>
            <input
              className="edit-schedule__item-input --time"
              placeholder="Fin"
              type="text"
              name="endTime"
              onChange={handleChange}
              value={collectiveClassesData.endTime}
            />
          </div>

          <div className="edit-schedule__item">
            <input
              className="edit-schedule__item edit-schedule__item-input --class"
              placeholder="Cours"
              type="text"
              name="class"
              onChange={handleChange}
              value={collectiveClassesData.class}
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
                onChange={handleChange}
                value={collectiveClassesData.studioName}
              />
            </div>

            <div className="row">
              <BsLaptop />
              <input
                className="edit-schedule__item-input --studio"
                placeholder="Site web du studio"
                type="text"
                name="studioWebsite"
                onChange={handleChange}
                value={collectiveClassesData.studioWebsite}
              />
            </div>
          </div>
        </div>

        <button className="edit-schedule__btn" type="submit">
          <MdAddCircleOutline />
        </button>
      </form>
    </>
  );
}

export default AddCollectiveClass;
