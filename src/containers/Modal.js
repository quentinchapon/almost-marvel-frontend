import axios from "axios";
import { useState } from "react";

const Modal = ({
  modalType,
  modalVisibility,
  setModalVisibility,
  setUserToken,
}) => {
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmitSignup = async (event) => {
    event.preventDefault();
    const newUser = {
      username: username,
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        `https://almost-marvel.herokuapp.com/signup`,
        newUser
      );

      // Si réponse avec token on envoi token dans la fonction setUser (dans App.js) qui va créer le cookie
      if (response.data.token) {
        setUserToken(response.data.token);
      }
    } catch (error) {
      console.log({ message: error.message });
    }
  };

  const handleSubmitSignin = async (event) => {
    try {
      event.preventDefault();
      const user = {
        email: email,
        password: password,
      };

      const response = await axios.post(
        `https://almost-marvel.herokuapp.com/signin`,
        user
      );
      if (response.data.token) {
        console.log("logué");
        setUsername(response.data.username);
        // Création du cookie avec le token
        setUserToken(response.data.token);
        setModalVisibility(false);
      }
    } catch {
      console.log("Pas loggué");
    }
  };

  // Sign UP
  if (modalVisibility === true && modalType === "signup") {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div
            className="close-button"
            onClick={() => {
              setModalVisibility(false);
            }}
          >
            <div className="close-line"></div>
            <div className="close-line"></div>
          </div>
          <span>Sign up</span>
          <form action="" onSubmit={handleSubmitSignup}>
            <label htmlFor="username">Username</label>
            <input
              name="username"
              id="username"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    );
    /////////////////////////////////
    // Sign IN
  } else if (modalVisibility === true && modalType === "signin") {
    return (
      <div className="modal-wrapper">
        <div className="modal">
          <div
            className="close-button"
            onClick={() => {
              setModalVisibility(false);
            }}
          >
            <div className="close-line"></div>
            <div className="close-line"></div>
          </div>
          <span>Sign in</span>
          <form action="" onSubmit={handleSubmitSignin}>
            <label htmlFor="email">E-mail</label>
            <input
              name="email"
              id="email"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            <label htmlFor="password">Password</label>
            <input
              name="password"
              id="password"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <input type="submit" value="Sign up" />
          </form>
        </div>
      </div>
    );

    ////////////////////////
  } else {
    return null;
  }
};

export default Modal;
