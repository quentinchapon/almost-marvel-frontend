import axios from "axios";
import { useState, useEffect } from "react";
import Loader from "../components/Loader";
import noImg from "../img/no-img.png";

const Comics = ({
  setPanelType,
  panelVisibility,
  setPanelVisibility,
  comicDatas,
  setComicDatas,
  characterDatas,
  scrollToTop,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");
  const [skip, setSkip] = useState(0);

  //Comics datas import
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://almost-marvel.herokuapp.com/comics?title=${search}&skip=${skip}`
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
        <h1>COMICS</h1>
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
        {data.results.map((comic, index) => {
          return (
            <div
              className="item"
              key={comic._id}
              onClick={() => {
                setPanelType("item");
                setPanelVisibility(true);
                setComicDatas({
                  image: comic.thumbnail.path + "." + comic.thumbnail.extension,
                  title: comic.title,
                  description: comic.description,
                });
              }}
            >
              <div className="image-container">
                <img
                  src={
                    comic.thumbnail.path !==
                    "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available"
                      ? comic.thumbnail.path + "." + comic.thumbnail.extension
                      : noImg
                  }
                  alt={comic.title}
                ></img>
              </div>
              <div className="comics-titles">
                <h2>{comic.title}</h2>
                <p>
                  {" "}
                  {comic.description
                    ? comic.description
                    : "No description available"}
                </p>
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

export default Comics;
