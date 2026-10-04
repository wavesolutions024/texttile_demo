import "./Prd_list.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";

const Prd_list = () => {
  return (
    <>
      <div class="prd_list_parent parent">
        <Swiper
          slidesPerView={4}
        //   spaceBetween={30}
          freeMode={true}
          loop={true}
         breakpoints={{
               300: {
                  slidesPerView: 1,
                  
                },
                400: {
                  slidesPerView: 2,
                  
                },
                768: {
                  slidesPerView: 3,
                  
                },
                1024: {
                  slidesPerView: 4,
                  
                },
              }}
          modules={[FreeMode]}
          className="mySwiper"
        >
          <SwiperSlide>
            <div class="image bg-img-cover">
                <div class="content">
                    <h2>
                        Apparel Fabrics
                    </h2>
                    <p>
                        Cotton • Linen • Blends • Twill
                    </p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image image2 bg-img-cover">
                 <div class="content">
                    <h2>
                        Fashion & Lifestyle
                    </h2>
                    <p>
                        Cotton • Linen • Blends • Twill
                    </p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image image3 bg-img-cover">
                 <div class="content">
                    <h2>
                        Garment Collections
                    </h2>
                    <p>
                        From everyday essentials to elevated fashion pieces.
                    </p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image image4 bg-img-cover">
                 <div class="content">
                    <h2>
                        Premium Textures
                    </h2>
                    <p>
                        Discover unique weaves, finishes, patterns and tactile surfaces.
                    </p>
                </div>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div class="image image5 bg-img-cover">
                 <div class="content">
                    <h2>
                        Apparel Fabrics
                    </h2>
                    <p>
                        Cotton • Linen • Blends • Twill
                    </p>
                </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};

export default Prd_list;
