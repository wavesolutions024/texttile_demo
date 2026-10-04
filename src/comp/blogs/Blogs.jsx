import "./Blogs.scss";
import { GiNotebook } from "react-icons/gi";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";

// import required modules
import { FreeMode } from "swiper/modules";
const Blogs = () => {
  return (
    <>
      <div class="blogs_parent parent">
        <span>
          <GiNotebook />
        </span>
        <h1>Latest Blog</h1>
        <p>
          Stay informed and inspired with our latest blog posts. Explore
          insightful content that keeps you ahead of trends and informed on
          topics you love..
        </p>

        <div class="blogs_list">
          <Swiper
            slidesPerView={3}
            spaceBetween={30}
            freeMode={true}
            loop={true}
            breakpoints={{
              300: {
                slidesPerView: 1,
                spaceBetween: 30,
              },
              400: {
                slidesPerView: 2,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 3,
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4,
                spaceBetween: 30,
              },
            }}
            modules={[FreeMode]}
            className="mySwiper"
          >
            <SwiperSlide>
              <div class="image bg-img-cover">
                <div class="content">
                  <p>Fabirc</p>
                  <h1>Stay informed and inspired with our latest blog posts. Explore</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="image image2 bg-img-cover">
                <div class="content">
                   <p>Fabirc</p>
                  <h1>Stay informed and inspired with our latest blog posts. Explore</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="image image3 bg-img-cover">
                <div class="content">
                  <p>Fabirc</p>
                  <h1>Stay informed and inspired with our latest blog posts. Explore</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="image image4 bg-img-cover">
                <div class="content">
                  <p>Fabirc</p>
                  <h1>Stay informed and inspired with our latest blog posts. Explore</h1>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div class="image image5 bg-img-cover">
                <div class="content">
                  <p>Fabirc</p>
                  <h1>Stay informed and inspired with our latest blog posts. Explore</h1>
                </div>
              </div>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default Blogs;
