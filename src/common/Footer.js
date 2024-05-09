import React from 'react'; // [1]
import { Link } from 'react-router-dom'; // [2]
import { FaTwitter, FaFacebook, FaInstagram ,FaLinkedin } from "react-icons/fa"; // [3]
import { useTranslation } from "react-i18next"; // [4]


const Footer = () => {
  const { t } = useTranslation();
  const useFullLinks = t("Footer.UsefulLinks", { returnObjects: true });
  const ourServices = t("Footer.OurServices", { returnObjects: true });
  return (
    <footer id="footer" className="footer">
      <div className="container">
        <div className="row gy-4">
          <div className="col-lg-5 col-md-12 footer-info">
            <a href="/" className="logo d-flex align-items-center">
              <span>{t('Footer.SiteName')}</span>
            </a>
            <p>{t('Footer.SiteDescription')}</p>
            <div className="social-links d-flex mt-4">
            <a href="#" className="twitter"><FaTwitter /></a>
           <a href="#" className="facebook"><FaFacebook /></a>
           <a href="#" className="instagram"><FaInstagram /></a>
            <a href="#" className="linkedin"><FaLinkedin /></a>
            </div>
          </div>
  
          <div className="col-lg-2 col-6 footer-links">
            <h4>{t('Footer.UsefulLinksHeading')}</h4>
            <ul>
              {useFullLinks?.map((item,index)=>(<li key={index}><Link to={item?.Route}>{item?.Label}</Link></li>))}
            </ul>
          </div>
  
          <div className="col-lg-2 col-6 footer-links">
            <h4>{t('Footer.OurServicesHeading')}</h4>
            <ul>
            {ourServices?.map((item,index)=>(<li key={index}><Link to="">{item}</Link></li>))}         
            </ul>
          </div>
  
          <div className="col-lg-3 col-md-12 footer-contact text-center text-md-start">
            <h4>{t('Footer.ContactUsHeading')}</h4>
            <p>
            <strong>{t('Footer.LocationHeading')}:</strong>   {t('Footer.Location')}
              <strong>{t('Footer.PhoneHeading')}:</strong> +971521661480<br />
              <strong>{t('Footer.EmailHeading')}:</strong>  info@smarttourismguide@gmail.com<br />
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

// [1] React, "React Documentation," [Online]. Available: https://reactjs.org/docs/getting-started.html. [Accessed: April 21, 2024].
// [2] React Training, "React Router Documentation," [Online]. Available: https://reactrouter.com/web/guides/quick-start. [Accessed: April 21, 2024].
// [3] react-icons, "React Icons Documentation," [Online]. Available: https://react-icons.github.io/react-icons/. [Accessed: April 21, 2024].
// [4] react-i18next. (n.d.). React i18next. Retrieved from https://react.i18next.com/