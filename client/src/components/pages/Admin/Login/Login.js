import React from "react";

import { AiOutlineUser } from "react-icons/ai";
import { BiLockAlt} from "react-icons/bi";

function Login() {
  return (
    <>
      <body className="page">
        <h1 className="title">Login</h1>
        <hr className="title-rule" />

        <form>

        <div className="form__element">
          <div className="form__item">
            <AiOutlineUser />
            <input
              className="form__input --base"
              placeholder="Nom d'utilisateur·rice"
              type="text"
              name="username"
              // onChange={handleChange}
              // value={formData.firstname}
            />
          </div>
        </div>

        <div className="form__element">
          <div className="form__item">
            <BiLockAlt />
            <input
              className="form__input --base"
              placeholder="Mot de passe"
              type="password"
              name="password"
              // onChange={handleChange}
              // value={formData.lastname}
            />
          </div>
        </div>

        <button className="btn btn--full btn--large">
          Se connecter
        </button>

        </form>

      </body>
    </>
  );
}

export default Login;
