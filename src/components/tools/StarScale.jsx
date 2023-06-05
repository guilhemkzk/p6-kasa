import redStar from "../../assets/images/redstar.png";
import greyStar from "../../assets/images/greystar.png";

function StarScale(props) {
  const range = [1, 2, 3, 4, 5];
  const scaleValue = props.scaleValue;
  const inverseSclaValue = range.length - scaleValue;

  return (
    <div>
      {range.map((rangeElem) =>
        scaleValue >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            className="ratting-star"
            src={redStar}
            alt="Etoile Notation"
          />
        ) : null
      )}
      {range.map((rangeElem) =>
        inverseSclaValue >= rangeElem ? (
          <img
            key={rangeElem.toString()}
            className="ratting-star"
            src={greyStar}
            alt="Etoile Notation"
          />
        ) : null
      )}
    </div>
  );
}

export default StarScale;
