import { useEffect } from "react";
import Button from "../button/Button";
import "./Collection.scss";
import { FaEye } from "react-icons/fa";
import AOS from "aos";
import "aos/dist/aos.css";
const Collection = () => {
      useEffect(() => {
      AOS.init();
    }, []);
  return (
    <>
      <div class="collection_parent parent">
        <div class="collection_cont cont">
          <div class="left">
            <p className="sec_indi"
             data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800">
              FEATURED COLLECTION
            </p>
            <h1
             data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
            >Premium Fabrics <br/> for Modern Living</h1>
            <p
              data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
            >
              Explore our curated selection of high-quality fabrics, crafted for
              fashion, interiors and everyday elegance.
            </p>
            <Button />
          </div>
          <div class="right">
            <div class="card"
              data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
          >
             
              <div class="image bg-img-cover">
                 <div class="eye"><FaEye /></div>
              </div>
              <h4>Cotton Blend Linen</h4>
             <p>
              Breathable | 280GSM
             </p>
            </div>
             <div class="card"
               data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
             >
               
              <div class="image image2 bg-img-cover">
                 <div class="eye"><FaEye /></div>
              </div>
              <h4>Premium Cotton Twill</h4>
             <p>
              Soft Touch | 320GSM
             </p>
            </div>
             <div class="card"
             data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
             >
               
              <div class="image image3 bg-img-cover">
                 <div class="eye"><FaEye /></div>
              </div>
              <h4>Textured Linen Blend</h4>
             <p>
              Natural Feel | 260GSM
             </p>
            </div>
            
          </div>
        </div>
      </div>
    </>
  );
};

export default Collection;
