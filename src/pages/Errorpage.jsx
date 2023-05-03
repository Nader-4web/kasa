import Navbar from '../components/Navbar.jsx';
import Notfound from '../components/Notfound.jsx';
import Footer from '../components/Footer.jsx';
import { useEffect } from 'react';

function Error() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <Navbar />
      <Notfound />
      <Footer />
    </div>
  );
}

export default Error;
