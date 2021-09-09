import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import ScrollLock from "react-scrolllock";
import Cookies from "js-cookie";

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
          `https://almost-marvel.herokuapp.com/getcollection?user_id=${Cookies.get(
            "userID"
          )}`
        );

        setCollectionData(response.data);
        console.log("Collection Data ===>", collectionData);
        // setIsLoading(false);
      } catch (error) {
        console.log(error.message);
      }
    };
    fetchData();
  }, [panelVisibility]);

  if (panelVisibility === true && panelType === "item") {
    return (
      <ScrollLock>
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
            <div
              className="close-button"
              onClick={() => {
                setPanelVisibility(false);
              }}
            >
              <div className="close-line"></div>
              <div className="close-line"></div>
            </div>
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
                            comic.thumbnail.path +
                            "." +
                            comic.thumbnail.extension
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
      </ScrollLock>
    );
  } else if (panelVisibility === true && panelType === "collection") {
    return (
      <ScrollLock>
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

            {collectionData !== undefined ? (
              <div className="collection-list">
                {collectionData.map((collectionItem, index) => {
                  return (
                    <div>
                      <div
                        className="collection"
                        key={collectionItem.collection_name}
                      >
                        <img
                          src={collectionItem.collection_img}
                          alt={collectionItem.collection_name}
                        />
                        <p>{collectionItem.collection_name}</p>
                        <div
                          className="add-collection"
                          value="Add to collection"
                          onClick={async () => {
                            // Delete item
                            try {
                              await axios.delete(
                                `https://almost-marvel.herokuapp.com/collection/delete?collection_name=${collectionItem.collection_name}`
                              );
                            } catch (error) {
                              console.log(error.message);
                            }
                          }}
                        >
                          <div className="add-button">
                            <div className="plus"></div>
                            <div className="plus"></div>

                            <span>Remove from collection</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <p>Your collection is empty</p>
            )}
          </div>
        </div>
      </ScrollLock>
    );
  } else {
    return null;
  }
};

export default Panel;
