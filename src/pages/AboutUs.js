import React, { useEffect } from "react"; // [1]
import { Link } from "react-router-dom"; // [2]
import AOS from "aos"; // [3]
import { useTranslation } from "react-i18next"; // [4]
import { Breadcrumb } from "react-bootstrap"; // [5]
import useLanguageDirection from "../components/useLanguageDirection";
import HeroImage from "../assets/images/about-hero.jpg"

function createMarkup(htmlString) { // convert text to html markup
  return { __html: htmlString };
}

const AboutUs = () => {
  const { t } = useTranslation();
  useLanguageDirection()
  useEffect(() => {
    AOS.init();
  }, []);
  return (

    <><section
      id="hero"
      className="hero"
      style={
        {
          backgroundImage: `url(${HeroImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }
      }
    >
      <div className="container">
        <div className="row gy-5">
          <div
            className="col-lg-6 order-2 order-lg-1 d-flex flex-column pb-lg-1 pb-5 justify-content-center text-center text-lg-start"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <h2>{t('HomePage.AboutUs.Heading')}</h2>
            <p>
              {t('HomePage.HeroSection.Text')}
            </p>
            <div className="d-flex justify-content-center justify-content-lg-start">
              <Link to="/blog-list" className="btn-get-started">
                {t('HomePage.HeroSection.Button')}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="breadcrumb">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <Breadcrumb>
                <Breadcrumb.Item><Link to="/">Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item>
                <Link to="/blog-list">About Us</Link>
                </Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
    
      <section id="single-blog-detail">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <h2>{t('AboutPage.Heading')}</h2>
              <div className="line"></div>
              <div className="single-property-detail-text" dangerouslySetInnerHTML={createMarkup(String(t('AboutPage.Content')))}></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUs;

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] React Training, "React Router Documentation," [Online]. Available: https://reactrouter.com/web/guides/quick-start. [Accessed: April 21, 2024].
// [3] Michał Sajnóg, "AOS - Animate On Scroll Library," [Online]. Available: https://michalsnik.github.io/aos/. [Accessed: April 21, 2024].
// [4] react-i18next. (n.d.). React i18next. Retrieved from https://react.i18next.com/
// [5] react-bootstrap. (n.d.). React Bootstrap. Retrieved from https://react-bootstrap.github.io/