import "./scss/App.scss";
import "./scss/Modal.scss";
import { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Composants import
import Header from "./components/Header";
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

  //Set datas for comics for one character
  const [characterComicDatas, setCharacterComicDatas] = useState();

  // Set datas for comic or character on panel opening
  const [characterDatas, setCharacterDatas] = useState();
  const [comicDatas, setComicDatas] = useState();

  //Set token when user sign in
  const [userToken, setUserToken] = useState();

  return (
    <Router>
      <Modal
        modalType={modalType}
        setModalType={setModalType}
        modalVisibility={modalVisibility}
        setModalVisibility={setModalVisibility}
        setUserToken={setUserToken}
      />
      <Panel
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
            panelVisibility={panelVisibility}
            setPanelVisibility={setPanelVisibility}
            characterComicDatas={characterComicDatas}
            setCharacterComicDatas={setCharacterComicDatas}
            setComicDatas={setComicDatas}
            comicDatas={comicDatas}
          ></Comics>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
