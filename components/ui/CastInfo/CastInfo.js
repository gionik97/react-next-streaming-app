const CastInfo = (props) => {
  return (
    <div className="cast-info">
      <div className="cast-info__group-title">Cast & Crew</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Greg</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Samantha</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Anna</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>James</li>
          <li>George Lucas</li>
        </ul>
        <ul className="cast-info__crew">
          <li>Brandon</li>
          <li>George Lucas</li>
        </ul>
      </div>
      <div className="cast-info__group-title">Director</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Jordan</li>
          <li>George Lucas</li>
        </ul>
      </div>
      <div className="cast-info__group-title">Camera Operator</div>
      <div className="cast-info__list">
        <ul className="cast-info__crew">
          <li>Scott</li>
          <li>George Lucas</li>
        </ul>
      </div>
    </div>
  );
};

export default CastInfo;
