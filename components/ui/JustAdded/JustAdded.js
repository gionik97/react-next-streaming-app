const JustAdded = (props) => {
  const loopComp = (comp, digit) => {
    let thumbnails = [];
    for (let i = 1; i <= digit; i++) {
      thumbnails.push(comp);
    }
    return thumbnails;
  };

  return (
    <div className="just-added">
      <h3 className="just-added__title">Just Added</h3>
      <div className="just-added__thumbnails">
        {loopComp(
          <div className="just-added__thumbnail">
            <img
              src="https://i.ebayimg.com/images/g/tTEAAOSwzRlZgWnw/s-l1600.jpg"
              alt=""
            />
            <div className="just-added__top-layer">
              <i className="fas fa-play" />
            </div>
          </div>,
          10
        )}
      </div>
    </div>
  );
};

export default JustAdded;
