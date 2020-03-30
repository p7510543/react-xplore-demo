import React from "react";

export default () => {
  return (
    <div id="header">
      <h1>
        <a href="#">
          <img
            src="https://cdn-dev.toogoof.net/xplora/assets/images/logo.svg"
            alt="Xplora"
          />
        </a>
      </h1>
      <button type="button" className="btn-gnb-toggle">
        Menu
      </button>
      <div className="gnb">
        <ul className="page-list">
          <li>
            <a href="#">Campaigns</a>
          </li>
          {/* Active class : on */}
          <li>
            <a href="#">Goplay store</a>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
        </ul>
        <div className="member">
          <a href="#" className="btn-sign btn-login">
            Log in
          </a>
        </div>
        <div className="language">
          <a href="#" className="select-language">
            <img
              src="https://cdn-dev.toogoof.net/xplora/assets/images/icon/graphic-national-flag-en.svg"
              alt="English"
            />
          </a>
          <div className="language-select">
            <ul>
              <li>
                <img
                  src="https://cdn-dev.toogoof.net/xplora/assets/images/icon/graphic-national-flag-en.svg"
                  alt="English"
                />
                <span>English</span>
              </li>
              <li>
                <img
                  src="https://cdn-dev.toogoof.net/xplora/assets/images/icon/graphic-national-flag-de.svg"
                  alt="German"
                />
                <span>German</span>
              </li>
              <li>
                <img
                  src="https://cdn-dev.toogoof.net/xplora/assets/images/icon/graphic-national-flag-es.svg"
                  alt="Spanish"
                />
                <span>Spanish</span>
              </li>
              <li>
                <img
                  src="https://cdn-dev.toogoof.net/xplora/assets/images/icon/graphic-national-flag-no.svg"
                  alt="Norway"
                />
                <span>Norway</span>
              </li>
              <li>
                <img
                  src="https://cdn-dev.toogoof.net/xplora/assets/images/icon/graphic-national-flag-se.svg"
                  alt="Sweden"
                />
                <span>Sweden</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
