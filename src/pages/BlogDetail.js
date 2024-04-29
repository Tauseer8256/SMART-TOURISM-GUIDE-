import React,{useEffect} from "react"; // [1]
import { Link, useParams } from "react-router-dom"; // [2]
import { Breadcrumb } from "react-bootstrap"; // [3]
import { useTranslation } from "react-i18next"; // [4]

function createMarkup(htmlString) { // convert text to html markup
  return { __html: htmlString };
}

function BlogDetail() {
  const { t } = useTranslation();
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const { id } = useParams();
  const places = t("BlogsPage.BlogList.places", { returnObjects: true });
  const place = places?.find((item) => item.id === parseInt(id));

  if (!place) {
    return <div>Place not found</div>;
  }

  
  return (
    <>
      <section
        id="blog-hero-sec"
        style={{
          backgroundImage: `url(${place?.single_blog_image})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
        className="blog-hero-sec"
      >
        <div className="container">
          <div className="row gy-5">
            <div
              className="col-lg-6 order-2 order-lg-1 d-flex flex-column pb-lg-1 pb-5 justify-content-center text-center text-lg-start"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <h2>{place?.name}</h2>
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
                <Link to="/blog-list">Blog List</Link>
                </Breadcrumb.Item>
                <Breadcrumb.Item active>{place?.name}</Breadcrumb.Item>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </section>
      <section id="single-blog-detail">
        <div className="container">
          <div className="row gy-5">
            <div className="col-lg-12" data-aos="fade-up" data-aos-delay="100">
              <h2>{`About ${place?.name}`}</h2>
              <div className="line"></div>
              {/* <div className="single-property-detail-text">
                {place?.single_blog_description}
              </div> */}
              <div className="single-property-detail-text" dangerouslySetInnerHTML={createMarkup(String(place?.single_blog_description))}></div>
            </div>
          </div>
        </div>
      </section>
      <section id="map-section">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-12 px-0">
              <iframe
                title={place?.name}
                src={place?.location}
                width="600"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default BlogDetail;

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] React Training, "React Router Documentation," [Online]. Available: https://reactrouter.com/web/guides/quick-start. [Accessed: April 21, 2024].
// [3] react-bootstrap. (n.d.). React Bootstrap. Retrieved from https://react-bootstrap.github.io/
// [4] react-i18next. (n.d.). React i18next. Retrieved from https://react.i18next.com/