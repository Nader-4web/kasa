import '../style/Banner.css';

// function Banner() {
//   return <div className="banner">Chez vous, partout et ailleurs</div>;
// }

// export default Banner;

const Banner = ({ imageSource, altText, className }) => {
  const style = {
    backgroundImage: `url(${imageSource})`,
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    width: '88vw',
    // height: '223px',
    margin: 'auto',
    marginTop: '68px',
  };
  // const mediaQuery = `@media screen and (max-width: 655px) {
  //   .banner {
  //     height: 111px !important;
  //     border-radius: 10px !important;
  //   }
  //   .title-banner{
  //     font-size: 24px !important;

  //   }
  // }`;

  return (
    <div
      className={`banner ${className}`}
      style={style}
      aria-label={altText}
      role="img"
    >
      <div className="banner-overlay"></div>
      <div className="title-banner">Chez vous, partout et ailleurs</div>
      {/* <style>{mediaQuery}</style> */}
    </div>
  );
};

export default Banner;
