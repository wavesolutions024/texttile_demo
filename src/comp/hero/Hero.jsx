import { useEffect } from "react";
import Button from "../button/Button";
import "./Hero.scss";
import AOS from "aos";
import "aos/dist/aos.css";
const Hero = () => {
    useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <div class="hero_parent parent bg-img-cover">
        <div class="hero_cont cont">
          <div class="sb_heading"
              data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          >
            <span></span>

            <p>PRIMIUM TEXTILE COLLECTION</p>
          </div>
         <div class="heading">
             <h1
              data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
             >Beyond Fabric.</h1>
          <h1 className="highlight"
           data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
          >Into Form.</h1>
         </div>
          <p className="hero_para"
           data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1400"
          >
            Premium textiles engineered for contemporary fashion, apparel and
            creative applications. Explore textures, colours and finishes that
            bring every idea to life.
          </p>
          <Button
          data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1600"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
