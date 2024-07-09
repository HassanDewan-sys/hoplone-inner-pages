import React from 'react';

const Header = ({ toggleMenu, isMenuOpen }) => {
  return (
    <>
      <section id='header' className={isMenuOpen ? 'headerfixed' : ''}>
        <div className="container-fluid">
          <div className="col-lg-11 mx-auto">
            <div className="row">
              <div className="col-lg-3 col-6">
                <div className="logo hover-mask-hide cr-hover">
                  <a href='/'>
                    <img src="img/logo.png" alt="logo" />
                  </a>
                </div>
              </div>
              <div className="col-lg-7"></div>
              <div className="col-lg-2 col-6">
                <div className="menu hover-mask-hide cr-hover" id='mobilemenu-open' onClick={toggleMenu}>
                  <div className={`humberger ${isMenuOpen ? 'active' : ''}`}>
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Header;