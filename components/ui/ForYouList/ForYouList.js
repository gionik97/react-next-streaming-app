const ForYouList = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i <= digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };

  return (
    <div className="foryou-list">
      <h3 className="foryou-list__title">For you</h3>
      <div className="foryou-list__thumbnails">
        {loopComp(
          <div className="foryou-list__thumbnail">
            <img
              src="https://m.media-amazon.com/images/M/MV5BZjRjOTFkOTktZWUzMi00YzMyLThkMmYtMjEwNmQyNzliYTNmXkEyXkFqcGdeQXVyNzQ1ODk3MTQ@._V1_.jpg"
              alt=""
            />
            <div className="foryou-list__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default ForYouList;
