import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
const Panel = ({
  userId,
  panelType,
  panelVisibility,
  setPanelVisibility,
  comicDatas,
  characterDatas,
  characterComicDatas,
  setCharacterDatas,
  setComicDatas,
}) => {
  const [collectionData, setCollectionData] = useState();

  //Import collection datas
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://almost-marvel.herokuapp.com/getcollection?token=${userId}`
        );

        setCollectionData(response.data);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [userId]);

  if (panelVisibility === true && panelType === "item") {
    return (
      <div className="panel-wrapper">
        <div
          className="panel-left"
          onClick={() => {
            setCharacterDatas(undefined);
            setComicDatas(undefined);
            setPanelVisibility(false);
          }}
        ></div>
        <div className="panel-right">
          <img
            className="character-image"
            src={
              characterDatas !== undefined
                ? characterDatas.image
                : comicDatas.image
            }
            alt=""
          />
          <h3>
            {characterDatas !== undefined
              ? characterDatas.title
              : comicDatas.title}
          </h3>
          <p className="character-description">
            {characterDatas !== undefined
              ? characterDatas.description
              : comicDatas.description}
          </p>
          <h4>{characterDatas !== undefined && "Comics apparition"}</h4>
          <div className="comics-list">
            {characterDatas !== undefined
              ? characterComicDatas.map((comic, index) => {
                  return (
                    <div className="comic" key={index}>
                      <img
                        src={
                          comic.thumbnail.path + "." + comic.thumbnail.extension
                        }
                        alt=""
                      />
                      <p>{comic.title}</p>
                    </div>
                  );
                })
              : null}
          </div>
        </div>
      </div>
    );
  } else if (panelVisibility === true && panelType === "collection") {
    return (
      <div className="panel-wrapper">
        <div
          className="panel-left"
          onClick={() => {
            setCharacterDatas(undefined);
            setComicDatas(undefined);
            setPanelVisibility(false);
          }}
        ></div>
        <div className="panel-right">
          <h3>My collection</h3>

          <div className="comic-list">
            {collectionData.map((collectionItem, index) => {
              return (
                <div className="comics-list">
                  <div className="comic" key={collectionItem.collection_name}>
                    <img
                      src={collectionItem.collection_img}
                      alt={collectionItem.collection_name}
                    />
                    <p>{collectionItem.collection_name}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  } else {
    return null;
  }
};

export default Panel;
