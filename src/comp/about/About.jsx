import Button from "../button/Button";
import "./About.scss";
import { TbLeaf } from "react-icons/tb";
import { IoDiamondOutline } from "react-icons/io5";
import { MdOutlineGrid4X4 } from "react-icons/md";
import { IoIosPeople } from "react-icons/io";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const About = () => {
    useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      <div class="abt_parent bg-img-cover parent">
        <div class="abt_cont cont">
          <div class="left">
            <div class="section_indi">
              <span></span>
              <p>ABOUT US</p>
            </div>
            <h1
                data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
            >
              We Create Fabrics
              <br />
              for a Better Tomorrow
            </h1>
            <p
                data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
            >
              With a deep passion for textiles and a commitment to quality, we
              craft fabrics that blend tradition, innovation and sustainability.
              Our collection is designed to inspire creativity and bring
              timeless elegance to every application from fashion to interiors.
            </p>
            <Button text="Know More" />
            <div class="list">
              <div class="list_itm"
              data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
              >
                <span>
                  <TbLeaf />
                </span>
                <h3>Sustainable Practices</h3>
                <p>Responsible sourcing for a greener future.</p>
              </div>
              <div class="list_itm"
               data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
              >
                <span>
                  <IoDiamondOutline />
                </span>
                <h3>Premium Quality</h3>
                <p>Fabrics that meet the highest standards.</p>
              </div>
              <div class="list_itm"
                data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200"
              >
                <span>
                  <MdOutlineGrid4X4 />
                </span>
                <h3>Innovation</h3>
                <p>Blending tradition with modern technology</p>
              </div>
              <div class="list_itm"
                data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1400"
              >
                <span>
                  <IoIosPeople />
                </span>
                <h3>Global Reach</h3>
                <p>Supplying to brands and businesses worldwide.</p>
              </div>
            </div>
          </div>
          <div class="middle">
            <div class="main_image bg-img-cover"></div>
            <div class="smll_image bg-img-cover"></div>
            <div class="rt_image bg-img-cover"></div>
          </div>
          <div class="last">
            <div class="count"
             data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="800"
            >
              <h1>15+</h1>
              <p>
                YEARS OF <br/>
                EXPERIENCE
              </p>
            </div>
             <div class="count"
              data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1000"
             >
              <h1>100+</h1>
              <p>
                FABRIC VARIETIES
              </p>
            </div>
             <div class="count"
             
             data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1200">
              <h1>50+</h1>
              <p>
              GLOBAL CLIENTS
              </p>
            </div>
             <div class="count"
             data-aos="fade-up"
          data-aos-delay="100"
          data-aos-duration="1400"
             >
              <h1>100+</h1>
              <p>
               QUALITY ASSURED
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
