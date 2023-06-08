import Gallery from "../components/gallery/Gallery";
import Banner from "../components/Banner";
import image from "../assets/images/image1.webp";

function Home() {
  return (
    <div className="home page">
      <div className="home-banner">
        <Banner image={image} />
        <div className="slogan-banner">Chez vous, partout et ailleurs</div>
      </div>

      <Gallery />
    </div>
  );
}

export default Home;
