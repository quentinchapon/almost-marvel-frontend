import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import noImg from "../img/no-img.png";

const Characters = ({
  scrollToTop,
  userId,
  setPanelType,
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
  const [skip, setSkip] = useState(0);
  console.log("User ID ==>", userId);
  // Comics for one character
  //Characters datas import
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://almost-marvel.herokuapp.com/characters/?name=${search}&skip=${skip}`
        );

        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [search, skip]);

  return isLoading ? (
    <Loader />
  ) : (
    <div className="wrapper">
      <div className="titles">
        <span className="over-title">Browse</span>
        <h1>CHARACTERS</h1>
      </div>

      <div className="filters-bar">
        <form action="">
          <input
            className="input-main"
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
                setPanelType("item");
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
                    character.thumbnail.path !==
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                      ? character.thumbnail.path +
                        "." +
                        character.thumbnail.extension
                      : noImg
                  }
                  alt={character.name}
                ></img>
              </div>
              <h2>{character.name}</h2>
              <div
                className="add-collection"
                value="Add to collection"
                onClick={async () => {
                  try {
                    //Create object with collection datas
                    const collectionData = {
                      user_id: userId,
                      collection_img:
                        character.thumbnail.path +
                        "." +
                        character.thumbnail.extension,
                      collection_name: character.name,
                    };
                    //Send collection datas to BDD
                    const response = await axios.post(
                      `https://almost-marvel.herokuapp.com/collection`,
                      collectionData
                    );
                    console.log(response.data);
                  } catch (error) {}
                }}
              >
                Add to collection
              </div>
            </div>
          );
        })}
      </div>
      <div className="pagination">
        <button
          className={
            skip <= 0
              ? "pagination-button-inactive"
              : "pagination-button-active"
          }
          onClick={() => {
            if (skip !== 0) {
              setSkip(skip - 30);
              scrollToTop();
            }
          }}
        >
          &#60; Previous
        </button>
        <div className="vert-separator"></div>
        <button
          className="pagination-button-active"
          onClick={() => {
            setSkip(skip + 30);
            scrollToTop();
          }}
        >
          Next &#62;
        </button>
      </div>
    </div>
  );
};

export default Characters;
