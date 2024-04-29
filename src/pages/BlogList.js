import React, { useEffect } from "react"; // [1]
import { Link } from "react-router-dom"; // [2]
// import tourismData from '../data/tourismPlaces.json';
import { FaArrowRightLong } from "react-icons/fa6"; // [3]
import { useTranslation } from "react-i18next"; // [4]
import AOS from "aos"; // [5]

// Create a mapping object
function BlogList() {
  const { t } = useTranslation();
  const tourismplaces = t("BlogsPage.BlogList.places", { returnObjects: true });
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <>
      {" "}
      <section id="blog-hero-sec" className="blog-hero-sec">
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-lg-7 order-2 order-lg-1 d-flex flex-column pb-lg-1 pb-5 justify-content-center text-center text-lg-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>
              {t('BlogsPage.HeroSection.Heading')}
              </h2>
            </div>
            {/* <div className="col-lg-6 order-1 order-lg-2">
            </div> */}
          </div>
        </div>
      </section>
      <section id="blog-listing" className="blog-listing sections-bg">
        <div className="container" data-aos="fade-up">
          <div className="section-header">
            <h2>{t('BlogsPage.BlogList.HeadingText')}</h2>
            <p></p>
          </div>

          <div
            className="blog-listing-isotope"
            data-blog-listing-filter="*"
            data-blog-listing-layout="masonry"
            data-blog-listing-sort="original-order"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="row gy-4 blog-listing-container">
              {tourismplaces?.length > 0 &&
                tourismplaces?.map((item, index) => (
                  <div
                    key={index}
                    className="col-xl-4 col-md-6 blog-listing-item filter-app"
                  >
                    <div className="blog-listing-wrap">
                      <Link
                        to={`/blog/${item.id}`}
                        data-gallery="blog-listing-gallery-app"
                        className="glightbox"
                      >
                        <img
                          alt="blog"
                          src={item?.image}
                          className="img-fluid"
                        />
                      </Link>
                      <div className="blog-listing-info">
                        <h4>
                          <Link to={`/blog/${item.id}`} title="More Details">
                            {item?.name}
                          </Link>
                        </h4>
                        <p>{item?.description}</p>
                        <Link to={`/blog/${item.id}`} className="readmore">
                          {" "}
                          {t('BlogsPage.ReadMoreBtn')} <FaArrowRightLong />
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogList;

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] React Training, "React Router Documentation," [Online]. Available: https://reactrouter.com/web/guides/quick-start. [Accessed: April 21, 2024].
// [3] react-icons, "React Icons Documentation," [Online]. Available: https://react-icons.github.io/react-icons/. [Accessed: April 21, 2024].
// [4] react-i18next. (n.d.). React i18next. Retrieved from https://react.i18next.com/
// [5] Michał Sajnóg, "AOS - Animate On Scroll Library," [Online]. Available: https://michalsnik.github.io/aos/. [Accessed: April 21, 2024].