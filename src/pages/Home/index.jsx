import Navbar from '../../components/Navbar.jsx';
import Banner from '../../components/Banner.jsx';
import Main from '../../components/Main.jsx';
import Footer from '../../components/Footer.jsx';
import '../../style/Banner.css';
import BannerImg from '../../assets/banner.png';
import { useEffect } from 'react';

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Banner
        imageSource={BannerImg}
        altText="Image 1"
        className="home-banner"
      />
      <Main />
      <Footer />
    </div>
  );
}

export default Home;
