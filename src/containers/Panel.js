const Panel = ({
  panelVisibility,
  setPanelVisibility,
  comicDatas,
  characterDatas,
  setCharacterComicDatas,
  characterComicDatas,
  setCharacterDatas,
  setComicDatas,
}) => {
  console.log("Character comic datas ==>", characterComicDatas);
  console.log("Comics datas ==>", comicDatas);
  return panelVisibility ? (
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
  ) : null;
  //   } else {
  //     return null;
  //   }
};

export default Panel;
