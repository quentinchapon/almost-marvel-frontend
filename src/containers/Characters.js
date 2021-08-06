import axios from "axios";
import { useState, useEffect } from "react";

const Characters = ({
  panelVisibility,
  setPanelVisibility,
  setComicDatas,
  comicDatas,
  setCharacterDatas,
  characterDatas,
  setCharacterComicDatas,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  // Comics for one character
  //Characters datas import
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://almost-marvel.herokuapp.com/characters/?name=${search}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search]);

  return isLoading ? (
    <div className="isLoading">
      <div className="logo">
        <span>
          ALM<span>O</span>ST
          <br />
          MARVEL
        </span>
      </div>
    </div>
  ) : (
    <div className="wrapper">
      <div className="titles">
        <span className="over-title">Browse</span>
        <h1>CHARACTERS</h1>
      </div>

      <div className="filters-bar">
        <form action="">
          <input
            className="search"
            type="text"
            placeholder="Search item"
            onChange={(event) => {
              setSearch(event.target.value);
            }}
          />
          {/* <select className="select" name="sort" id="sort">
            <option value="Order: A-Z">Order: A-Z</option>
            <option value="Order: Z-A">Order: Z-A</option>
          </select> */}
        </form>
      </div>

      <div className="items-list">
        {data.results.map((character, index) => {
          return (
            <div
              className="item"
              key={character._id}
              onClick={async () => {
                // Get comics for current character
                try {
                  const response = await axios.get(
                    `https://almost-marvel.herokuapp.com/comics/${character._id}`
                  );

                  setCharacterComicDatas(response.data.comics);
                  setCharacterDatas({
                    image:
                      character.thumbnail.path +
                      "." +
                      character.thumbnail.extension,
                    title: character.name,
                    description: character.description,
                  });

                  setPanelVisibility(true);
                } catch (error) {
                  console.log(error.message);
                }
              }}
            >
              <div className="image-container">
                <img
                  src={
                    character.thumbnail.path +
                    "." +
                    character.thumbnail.extension
                  }
                  alt={character.name}
                ></img>
              </div>
              <h2>{character.name}</h2>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characters;
