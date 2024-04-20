import React from 'react';

const Footer = () => {
  return (
    <div>
      <footer className="footer" role="contentinfo">
        <div className="container">
          <div className="row">
            <div className="col-sm-6">
              <p className="mb-1">&copy; Copyright MyPortfolio. All Rights Reserved</p>
              <div className="credits">
                {/*
                All the links in the footer should remain intact.
                You can delete the links only if you purchased the pro version.
                Licensing information: https://bootstrapmade.com/license/
                Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=MyPortfolio
              -->*/}
                Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
              </div>
            </div>
            <div className="col-sm-6 social text-md-end">
              <a href="#"><span className="bi bi-twitter"></span></a>
              <a href="#"><span className="bi bi-facebook"></span></a>
              <a href="#"><span className="bi bi-instagram"></span></a>
              <a href="#"><span className="bi bi-linkedin"></span></a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;