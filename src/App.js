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

  //Toggle side panel visibility
  const [ModalVisibility, setModalVisibility] = useState(false);

  //Set datas from character or comic on click on it
  const [characterComicDatas, setCharacterComicDatas] = useState();

  const [characterDatas, setCharacterDatas] = useState();
  const [comicDatas, setComicDatas] = useState();

  return (
    <Router>
      <Modal />
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
      <Header />
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
