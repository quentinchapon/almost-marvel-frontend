import "./scss/App.scss";
import "./scss/Modal.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AnimatedCursor from "react-animated-cursor";
import Cookies from "js-cookie";

// Composants import
import Header from "./components/Header";
import Footer from "./components/Footer";
import Panel from "./containers/Panel";

//Containers import
import Home from "./containers/Home";
import Characters from "./containers/Characters";
import Comics from "./containers/Comics";
import Modal from "./containers/Modal";

function App() {
  // States declaration

  //Toggle side panel visibility
  const [panelVisibility, setPanelVisibility] = useState(false);

  //Toggle modal visibility
  const [modalVisibility, setModalVisibility] = useState(false);

  //Set modal type : sign in or sign up
  const [modalType, setModalType] = useState("");

  //Set panel type : item or collection
  const [panelType, setPanelType] = useState("");

  //Set datas for comics for one character
  const [characterComicDatas, setCharacterComicDatas] = useState();

  // Set datas for comic or character on panel opening
  const [characterDatas, setCharacterDatas] = useState();
  const [comicDatas, setComicDatas] = useState();

  //Set cookie when user sign in
  const [cookie, setCookie] = useState();

  //Set token
  const [token, setToken] = useState(false);

  // Set userId for collection fetching
  const [userId, setUserId] = useState();

  // Set username for header username
  const [username, setUsername] = useState();

  //Scroll to top
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Cookie creation
  const setCookies = (arg) => {
    if (arg) {
      Cookies.set("token", arg[0], {
        expires: 7,
      });
      Cookies.set("userID", arg[1], {
        expires: 7,
      });
      Cookies.set("username", arg[2], {
        expires: 7,
      });
      // createCookie(cookie);
    } else {
      Cookies.remove("Cookie");
      setCookie(null);
    }
  };

  return (
    <Router>
      <AnimatedCursor
        innerSize={10}
        outerSize={8}
        color="236, 22, 32"
        outerAlpha={0.2}
        innerScale={1}
        outerScale={5}
        trailingSpeed={6}
      />

      <Modal
        setCookies={setCookies}
        token={token}
        setToken={setToken}
        setUsername={setUsername}
        setUserId={setUserId}
        userId={userId}
        username={username}
        // createCookie={createCookie}
        modalType={modalType}
        setModalType={setModalType}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />

      <Panel
        setPanelType={setPanelType}
        panelType={panelType}
        panelVisibility={panelVisibility}
        setPanelVisibility={setPanelVisibility}
        characterComicDatas={characterComicDatas}
        setCharacterComicDatas={setCharacterComicDatas}
        setComicDatas={setComicDatas}
        comicDatas={comicDatas}
        setCharacterDatas={setCharacterDatas}
        characterDatas={characterDatas}
      />

      <Header
        token={token}
        setToken={setToken}
        setCookie={setCookie}
        setPanelVisibility={setPanelVisibility}
        setPanelType={setPanelType}
        modalType={modalType}
        setModalType={setModalType}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
      />

      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="/characters">
          <Characters
            scrollToTop={scrollToTop}
            setPanelType={setPanelType}
            comicDatas={comicDatas}
            setComicDatas={setComicDatas}
            panelVisibility={panelVisibility}
            setPanelVisibility={setPanelVisibility}
            setCharacterDatas={setCharacterDatas}
            characterDatas={characterDatas}
            characterComicDatas={characterComicDatas}
            setCharacterComicDatas={setCharacterComicDatas}
          ></Characters>
        </Route>

        <Route path="/comics">
          <Comics
            scrollToTop={scrollToTop}
            setPanelType={setPanelType}
            panelVisibility={panelVisibility}
            setPanelVisibility={setPanelVisibility}
            characterComicDatas={characterComicDatas}
            setCharacterComicDatas={setCharacterComicDatas}
            setComicDatas={setComicDatas}
            comicDatas={comicDatas}
          ></Comics>
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
