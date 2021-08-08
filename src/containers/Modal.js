import axios from "axios";
import { useState } from "react";

const Modal = ({
  userId,
  setUserId,
  usernameHeader,
  setUsernameHeader,
  modalType,
  setModalType,
  modalVisibility,
  setModalVisibility,
  setUser,
}) => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [username, setUsername] = useState();

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
        setUserId(response.data._id);
        setUser(response.data.token);
        setUsernameHeader(response.data.username);

        setModalVisibility(false);
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
        setModalVisibility(false);
        setUserId(response.data._id);
        setUsernameHeader(response.data.username);
        // Cookie creation
        setUser(response.data.token);
      }
    } catch (error) {
      console.log({ message: error.message });
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
          <h3>Sign up</h3>
          <form action="" onSubmit={handleSubmitSignup}>
            {/* <label htmlFor="username">Username</label> */}
            <input
              placeholder="Username"
              className="input-main"
              name="username"
              id="username"
              type="text"
              onChange={(event) => {
                setUsername(event.target.value);
              }}
            />

            {/* <label htmlFor="email">E-mail</label> */}
            <input
              placeholder="Adresse e-mail"
              className="input-main"
              name="email"
              id="email"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            {/* <label htmlFor="password">Password</label> */}
            <input
              placeholder="Password"
              className="input-main"
              name="password"
              id="password"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <input className="main-button" type="submit" value="Sign up" />
            <p
              className="link"
              onClick={() => {
                setModalType("signin");
              }}
            >
              Already a member ? Sign in !
            </p>
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
            className="close-button "
            onClick={() => {
              setModalVisibility(false);
            }}
          >
            <div className="close-line"></div>
            <div className="close-line"></div>
          </div>
          <h3>Sign in</h3>
          <form action="" onSubmit={handleSubmitSignin}>
            {/* <label htmlFor="email">E-mail</label> */}
            <input
              placeholder="Adresse e-mail"
              className="input-main"
              name="email"
              id="email"
              type="email"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />

            {/* <label htmlFor="password">Password</label> */}
            <input
              placeholder="Password"
              className="input-main"
              name="password"
              id="password"
              type="password"
              onChange={(event) => {
                setPassword(event.target.value);
              }}
            />

            <input className="main-button" type="submit" value="Sign in" />
            <p
              className="link"
              onClick={() => {
                setModalType("signup");
              }}
            >
              Not a member yet ? Sign up !
            </p>
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
