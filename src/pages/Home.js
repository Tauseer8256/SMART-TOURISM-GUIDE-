import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { BsFillCheckCircleFill } from "react-icons/bs";
import AboutImageOne from "../../src/assets/images/about-1.webp";
import AboutImageTwo from "../../src/assets/images/about_2.webp";
import SliderImageOne from "../../src/assets/images/london-1.jpg";
import SliderImageTwo from "../../src/assets/images/london-2.jpg";
import SliderImageThree from "../../src/assets/images/london-3.jpg";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos";

const Home = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <>
      <section
        id="hero"
        style={
          {
            // backgroundImage: `url(${HeroImage})`,
            // backgroundPosition: "center",
            // backgroundSize: "cover",
            // backgroundRepeat: "no-repeat",
          }
        }
        className="hero"
      >
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column pb-lg-1 pb-5 justify-content-center text-center text-lg-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>
                It is Better to <span>Travel Well Than to Arrive</span>
              </h2>
              <p>
                we're dedicated to providing you with the ultimate travel
                experience, tailored to your interests and preferences.
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link href="/buy" className="btn-get-started">
                  Get Started
                </Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2">
              {/* <Image src={HeroImage} className="img-fluid" alt=""  data-aos="fade-up" data-aos-delay="100"/> */}
            </div>
          </div>
        </div>
      </section>

      <section id="why-choose">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="small-heading">ABOUT US</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h1>Explore All Corners of The World With Us</h1>
              <div className="line"></div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean. A small river named Duden flows by their
                place and supplies it with the necessary regelialia. It is a
                paradisematic country, in which roasted parts of sentences fly
                into your mouth
              </p>
              <ul>
                <li>
                  <BsFillCheckCircleFill />
                  Insider Tips and Recommendations:
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  Personalized Itineraries
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  Cultural Immersion Experiences
                </li>
                <li>
                  <BsFillCheckCircleFill />
                  24/7 Customer Support
                </li>
              </ul>
            </div>
            <div className="col-lg-6">
              <div className="row">
                <div
                  className="col-lg-6 mt-5"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img src={AboutImageOne} className="img-fluid" alt="" />
                </div>
                <div
                  className="col-lg-6"
                  data-aos="fade-up"
                  data-aos-delay="100"
                >
                  <img src={AboutImageTwo} className="img-fluid" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="what-we-serve">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="small-heading">WHAT WE SERVE</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h1>We Provide Top Destinations</h1>
              <div className="line"></div>
              <p>
                Far far away, behind the word mountains, far from the countries
                Vokalia and Consonantia, there live the blind texts. Separated
                they live in Bookmarksgrove right at the coast of the Semantics,
                a large language ocean
              </p>
            </div>
            <div className="col-lg-6"></div>
          </div>
          <div className="row">
            <div className="col-md-12">
              <Swiper
                navigation={true}
                pagination={true}
                slidesPerView={3}
                spaceBetween={30}
                modules={[Navigation, Pagination]}
                className="mySwiper"
              >
                <SwiperSlide className="swiperSlide">
                  <img src={SliderImageOne} className="border p-1" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                  <img src={SliderImageTwo} className="border p-1" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                  <img src={SliderImageThree} className="border p-1" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                  <img src={AboutImageTwo} className="border p-1" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                  <img src={AboutImageOne} className="border p-1" alt="" />
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="container"></div>
      </section>
    </>
  );
};

export default Home;
