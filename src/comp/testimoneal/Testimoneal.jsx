import "./Testimoneal.scss";
import { GoThumbsup } from "react-icons/go";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation } from "swiper/modules";

const Testimoneal = () => {
  return (
    <>
      <div class="testimoneal_parent parent">
        <div class="testioneal_cont cont">
          <span>
            <GoThumbsup />
          </span>
          <h3>Testimonial</h3>
          <p className="para">
            Discover what our customers are saying about us. Real stories, real
            experiences – find out why they choose us.
          </p>

          <div class="testimoneal_list">
            <Swiper
             
              navigation={true}
              modules={[Pagination, Navigation]}
              className="mySwiper"
            >
              <SwiperSlide>
                <div class="content">
                  <p>
                    Furnixar exceeded my expectations with their exceptional
                    furniture pieces. The quality craftsmanship and attention to
                    detail truly shine through in every product. My home has
                    been transformed into a stylish sanctuary thanks to
                    Furnixar!
                  </p>
                  <div class="name">
                    <p>Jennifer Smith</p>
                    <p class="place">Berminghum,UK</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="content">
                  <p>
                    Furnixar exceeded my expectations with their exceptional
                    furniture pieces. The quality craftsmanship and attention to
                    detail truly shine through in every product. My home has
                    been transformed into a stylish sanctuary thanks to
                    Furnixar!
                  </p>
                  <div class="name">
                    <p>Jennifer Smith</p>
                    <p class="place">Berminghum,UK</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="content">
                  <p>
                    Furnixar exceeded my expectations with their exceptional
                    furniture pieces. The quality craftsmanship and attention to
                    detail truly shine through in every product. My home has
                    been transformed into a stylish sanctuary thanks to
                    Furnixar!
                  </p>
                  <div class="name">
                    <p>Jennifer Smith</p>
                    <p class="place">Berminghum,UK</p>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
                <div class="content">
                  <p>
                    Furnixar exceeded my expectations with their exceptional
                    furniture pieces. The quality craftsmanship and attention to
                    detail truly shine through in every product. My home has
                    been transformed into a stylish sanctuary thanks to
                    Furnixar!
                  </p>
                  <div class="name">
                    <p>Jennifer Smith</p>
                    <p class="place">Berminghum,UK</p>
                  </div>
                </div>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimoneal;
