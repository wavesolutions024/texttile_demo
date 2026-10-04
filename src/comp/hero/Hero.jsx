import Button from "../button/Button";
import "./Hero.scss";

const Hero = () => {
  return (
    <>
      <div class="hero_parent parent bg-img-cover">
        <div class="hero_cont cont">
          <div class="sb_heading">
            <span></span>

            <p>PRIMIUM TEXTILE COLLECTION</p>
          </div>
         <div class="heading">
             <h1>Beyond Fabric.</h1>
          <h1 className="highlight">Into Form.</h1>
         </div>
          <p className="hero_para">
            Premium textiles engineered for contemporary fashion, apparel and
            creative applications. Explore textures, colours and finishes that
            bring every idea to life.
          </p>
          <Button/>
        </div>
      </div>
    </>
  );
};

export default Hero;
