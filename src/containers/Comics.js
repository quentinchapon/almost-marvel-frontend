import axios from "axios";
import { useState, useEffect } from "react";

const Comics = ({
  panelVisibility,
  setPanelVisibility,
  comicDatas,
  setComicDatas,
  characterDatas,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState();
  const [search, setSearch] = useState("");

  //Comics datas import
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://almost-marvel.herokuapp.com/comics?title=${search}`
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
        <h1>COMICS</h1>
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
        {data.results.map((comic, index) => {
          return (
            <div
              className="item"
              key={comic._id}
              onClick={() => {
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
                  src={comic.thumbnail.path + "." + comic.thumbnail.extension}
                  alt={comic.title}
                ></img>
              </div>
              <h2>{comic.title}</h2>
              <p>
                Dignissim enim sit amet venenatis urna cursus eget nunc
                scelerisque. Velit laoreet id donec ultrices tincidunt arcu. Sit
                amet nisl purus in.
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Comics;
