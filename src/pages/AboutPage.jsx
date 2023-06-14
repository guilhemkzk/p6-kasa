import Banner from "../components/Banner";
import DropDown from "../components/DropDown";
import image from "../assets/images/image2.webp";
import apropos from "../data/apropos.json";

function AboutPage() {
  return (
    <div className="about page">
      <div className="image-banner">
        <Banner image={image} />
      </div>
      <div className="about-container">
        {apropos.map((info) => (
          <div className="dropdown" key={info.id}>
            <DropDown title={info.title} content={info.content} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default AboutPage;
