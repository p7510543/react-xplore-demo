import React from "react";

export default () => {
  return (
    <div id="footer">
      <div className="footer-search">
        <div className="inner type1">
          <div className="search-area">
            <label htmlFor="wholeSearch">Search for products</label>
            <input type="text" id="wholeSearch" />
            <button type="button" className="btn-search">Search</button>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="inner type1">
          <div className="menu-list">
            <ul className="f-gnb">
              <li><a href="#">About</a></li>
              <li><a href="#">Contact</a></li>
              <li><a href="#">Terms</a></li>
              <li><a href="#">PrivacyPolicy</a></li>
            </ul>
            <ul className="sns-link">
              <li><a href="#"><img src="https://cdn-dev.toogoof.net/xplora/assets/images/btn/btn-facebook.svg" alt="facebook" /></a></li>
              <li><a href="#"><img src="https://cdn-dev.toogoof.net/xplora/assets/images/btn/btn-insta.svg" alt="Instagram" /></a></li>
              <li><a href="#"><img src="https://cdn-dev.toogoof.net/xplora/assets/images/btn/btn-youtube.svg" alt="Youtube" /></a></li>
            </ul>
          </div>
          <div className="copyright">
            <h2><img src="https://cdn-dev.toogoof.net/xplora/assets/images/logo-f.svg" alt="Xplora" /></h2>
            <span>Tangerudvegen 13, 2008 Fjerdingby, Norway</span>
            <span>©2020 Xplora Technologies AS.</span>
            <span>All rights reserved.(v1.82)</span>
          </div>
        </div>
      </div>
    </div>

  );
};
