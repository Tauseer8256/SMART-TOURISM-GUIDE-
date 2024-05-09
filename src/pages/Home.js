import React, { useEffect } from "react"; // [1]
import { Link } from "react-router-dom"; // [2]
import { BsFillCheckCircleFill } from "react-icons/bs"; // [3]
import { Swiper, SwiperSlide } from "swiper/react"; // [4]
import { Navigation, Pagination } from "swiper/modules"; // [5]
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import AOS from "aos"; // [6]
import { useTranslation } from "react-i18next";
import useLanguageDirection from "../components/useLanguageDirection";
import AboutImageOne from "../../src/assets/images/about-1.webp"; // [7]
import AboutImageTwo from "../../src/assets/images/about_2.webp"; // [8]
import SliderImageOne from "../../src/assets/images/london-1.webp"; // will change image
import SliderImageTwo from "../../src/assets/images/london-2.jpeg"; // will change image
import SliderImageThree from "../../src/assets/images/london-3.jpeg"; // will change image
import SliderImageFour from "../../src/assets/images/london-4.jpeg"; // will change image
import SliderImageFive from "../../src/assets/images/london-5.jpeg"; // will change image

const Home = () => {
  const { t } = useTranslation();
  useLanguageDirection()
  const aboutUsBulletsPoints = t("HomePage.AboutUs.BulletPoint", { returnObjects: true });
  useEffect(() => {
    // const lang = localStorage.getItem('i18nextLng');
    // if (lang === 'PK') {
    //   document.body.dir = 'rtl';
    // } else {
    //   document.body.dir = 'ltr';
    // }

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
              {t('HomePage.HeroSection.Heading')}
              </h2>
              <p>
              {t('HomePage.HeroSection.Text')}
              </p>
              <div className="d-flex justify-content-center justify-content-lg-start">
                <Link to="/blog-list" className="btn-get-started">
                {t('HomePage.HeroSection.Button')}
                </Link>
              </div>
            </div>
            {/* <div className="col-lg-6 order-1 order-lg-2"> */}
              {/* <Image src={HeroImage} className="img-fluid" alt=""  data-aos="fade-up" data-aos-delay="100"/> */}
            {/* </div> */}
          </div>
        </div>
      </section>

      <section id="why-choose">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="small-heading">
              {t('HomePage.AboutUs.badgeText')}
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h1>{t('HomePage.AboutUs.Heading')}</h1>
              <div className="line"></div>
              <p>
              {t('HomePage.AboutUs.Description')}
              </p>
              <ul>
                {aboutUsBulletsPoints && aboutUsBulletsPoints?.map((item,index)=>(
                <li key={index}>
                  <BsFillCheckCircleFill />
                  {item}
                </li>
                ))}
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
              <div className="small-heading">{t('HomePage.DestinationSlides.badgeText')}</div>
            </div>
          </div>
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-delay="100">
              <h1>{t('HomePage.DestinationSlides.Heading')}</h1>
              <div className="line"></div>
              <p>
              {t('HomePage.DestinationSlides.Description')}
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
                loop={true}
                autoplay={{
                    delay: 100,
                    disableOnInteraction: false
                }}
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
                  <img src={SliderImageFour} className="border p-1" alt="" />
                </SwiperSlide>
                <SwiperSlide className="swiperSlide">
                  <img src={SliderImageFive} className="border p-1" alt="" />
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

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] React Training, "React Router Documentation," [Online]. Available: https://reactrouter.com/web/guides/quick-start. [Accessed: April 21, 2024].
// [3] React Icons, "React Icons Documentation," [Online]. Available: https://react-icons.github.io/react-icons/icons?name=bs. [Accessed: April 21, 2024].
// [4] Swiper, "Swiper React Documentation," [Online]. Available: https://swiperjs.com/react. [Accessed: April 21, 2024].
// [5] Swiper, "Swiper Modules Documentation," [Online]. Available: https://swiperjs.com/react/modules. [Accessed: April 21, 2024].
// [6] Michał Sajnóg, "AOS - Animate On Scroll Library," [Online]. Available: https://michalsnik.github.io/aos/. [Accessed: April 21, 2024].
// [7] Colorlib, "About Image," Colorlib, [Online]. Available: https://preview.colorlib.com/theme/passport/images/about_1.jpg.webp. [Accessed: April 21, 2024].
// [8] Colorlib, "About Image 2," Colorlib, [Online]. Available: https://preview.colorlib.com/theme/passport/images/about_2.jpg.webp. [Accessed: April 21, 2024].