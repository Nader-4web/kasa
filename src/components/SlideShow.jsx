import '../style/SlideShow.css';
import leftArrow from '../assets/arrow-left.png';
import rightArrow from '../assets/arrow-right.png';
import leftArrowSmall from '../assets/arrow-left-s.png';
import rightArrowSmall from '../assets/arrow-right-s.png';
import { useState } from 'react';

function SlideShow(props) {
  const [count, setCount] = useState(0);
  const arrayPictures = props.pictures.length;

  const nextPic = () => {
    count < arrayPictures - 1 ? setCount(count + 1) : setCount(0);
  };

  const previoustPic = () => {
    count > 0 ? setCount(count - 1) : setCount(arrayPictures - 1);
  };

  return (
    <div>
      <div className="slider">
        <img className="picture" src={props.pictures[count]} alt="pic" />

        <picture>
          <source media="(max-width: 655px)" srcSet={leftArrowSmall} />

          {arrayPictures > 1 ? (
            <img
              className="arrow-left visible-arrows"
              src={leftArrow}
              alt="previous"
              onClick={() => previoustPic()}
            />
          ) : (
            <img
              className="arrow-left hide-arrows"
              src={leftArrow}
              alt="previous"
              onClick={() => previoustPic()}
            />
          )}
        </picture>
        <span className="page-number">
          {count + 1}/{arrayPictures}
        </span>
        <picture>
          <source media="(max-width: 655px)" srcSet={rightArrowSmall} />

          {arrayPictures > 1 ? (
            <img
              className="arrow-right visible-arrows"
              src={rightArrow}
              alt="next"
              onClick={() => nextPic()}
            />
          ) : (
            <img
              className="arrow-right hide-arrows"
              src={rightArrow}
              alt="next"
              onClick={() => nextPic()}
            />
          )}
        </picture>
      </div>
    </div>
  );
}

export default SlideShow;
