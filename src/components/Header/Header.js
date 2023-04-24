import classNames from "classnames/bind";
import styles from "./Header.css";
import appgalary from "../../assets/img/appgalary.png";
import appstore from "../../assets/img/appstore.png";
import ggplay from "../../assets/img/appgalary.png";
import qr from "../../assets/img/qr-code.png";
const cx = classNames.bind(styles);

function Header() {
  return (
    <div className="thechua">
      <header className="header">
        <div className="grid">
          <nav className="header__navbar">
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item-qr header__navbar-item-phancach">
                Vào cửa hàng trên ứng dụng
                <div className="header__qrcode">
                  <img src={qr} alt="Mã Qr" className="header__qrcode-img" />
                  <div className="header__qrcode-app">
                    <div href="" className="header__qrcode-app-link">
                      <img
                        src={appstore}
                        alt="appstore"
                        className="header__qrcode-download"
                      />
                    </div>
                    <a href="" className="header__qrcode-app-link">
                      <img
                        src={ggplay}
                        alt="ggplay"
                        className="header__qrcode-download"
                      />
                    </a>
                  </div>
                  <a href="" className="header__qrcode-app-link ">
                    <img
                      src={appgalary}
                      alt="appgalary"
                      className="header__qrcode-download-2"
                    />
                  </a>
                </div>
              </li>
              <li className="header__navbar-item">
                <span className="header__navbar-item-aaaa">Kết nối</span>

                <a
                  href="https://www.facebook.com/jhung.20.06.02"
                  className="header__navbar-icon-link">
                  <i className="header__navbar-icon fa-brands fa-facebook"></i>
                  <a
                    href="https://www.instagram.com/duyhungg_/"
                    className="header__navbar-icon-link">
                    <i className="header__navbar-icon fa-brands fa-instagram"></i>
                  </a>
                </a>
              </li>
            </ul>
            <ul className="header__navbar-list">
              <li className="header__navbar-item header__navbar-item-hover">
                <a href="" className="header__navbar-icon-link">
                  <i className="header__navbar-icon fa-solid fa-bell"></i>
                  Thông báo
                </a>
                <div className="header__notify">
                  <div className="div header__notify-header">
                    <h3>Thông báo mới nhận</h3>
                    <ul className="header__notify-list">
                      <li className="header__notify-item header__notify-item--viewed">
                        <a href="" className="header__notify-link">
                          <img
                            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/287867554_1131997677358436_3664601432965996170_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQQD6e2qY0cAX-2NbtV&tn=z7mXJs3vb3QWGbv_&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-50VO_qpCZTo2ybLqIngeqMblDkKSqkfM7oNZuVRB9yA&oe=62D05211"
                            alt=""
                            className="header__notify-img"
                          />
                          <div className="header__notify-info">
                            <span className="header__notify-name">
                              Mỹ phẩm chính hãng
                            </span>
                            <span className="header__notify-decrip">
                              Mô tả mỹ phẩm chính hãng
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item header__notify-item--viewed">
                        <a href="" className="header__notify-link">
                          <img
                            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/287867554_1131997677358436_3664601432965996170_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQQD6e2qY0cAX-2NbtV&tn=z7mXJs3vb3QWGbv_&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-50VO_qpCZTo2ybLqIngeqMblDkKSqkfM7oNZuVRB9yA&oe=62D05211"
                            alt=""
                            className="header__notify-img"
                          />
                          <div className="header__notify-info">
                            <span className="header__notify-name">
                              Mỹ phẩm chính hãng
                            </span>
                            <span className="header__notify-decrip">
                              Mô tả mỹ phẩm chính hãng
                            </span>
                          </div>
                        </a>
                      </li>
                      <li className="header__notify-item header__notify-item--viewed">
                        <a href="" className="header__notify-link">
                          <img
                            src="https://scontent.fsgn13-2.fna.fbcdn.net/v/t39.30808-6/287867554_1131997677358436_3664601432965996170_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=cQQD6e2qY0cAX-2NbtV&tn=z7mXJs3vb3QWGbv_&_nc_ht=scontent.fsgn13-2.fna&oh=00_AT-50VO_qpCZTo2ybLqIngeqMblDkKSqkfM7oNZuVRB9yA&oe=62D05211"
                            alt=""
                            className="header__notify-img"
                          />
                          <div className="header__notify-info">
                            <span className="header__notify-name">
                              Mỹ phẩm chính hãng
                            </span>
                            <span className="header__notify-decrip">
                              Mô tả mỹ phẩm chính hãng
                            </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    <footer className="header__notify-footer">
                      <a href="" className="header__notify-footer-btn">
                        Xem tất cả
                      </a>
                    </footer>
                  </div>
                </div>
              </li>
              <li className="header__navbar-item">
                <a href="" className="header__navbar-icon-link ">
                  <i className="header__navbar-icon fa-solid fa-circle-question"></i>
                  Trợ giúp
                </a>
              </li>
              <li className="header__navbar-item header__navbar-item-bold header__navbar-item-phancach ">
                Đăng kí
              </li>
              <li className="header__navbar-item header__navbar-item-bold ">
                Đăng nhập
              </li>
            </ul>
          </nav>

          <div className="header-with-search">
            <div className="header__logo">Logo</div>
            <div className="header__search">
              <input
                type="text"
                className="header__search-input"
                placeholder="Nhập sản phẩm cần tìm"
              />
              <div className="header__search-select">
                <span className="header__search-select-label">Trong shop</span>
                <i className="fa-solid fa-angle-down header__search-select-icon"></i>
                <ul className="header__search-option">
                  <li className="header__search-option-item header__search-option-item-active">
                    <span className="header__search-option-item-span ">
                      Trong shop
                    </span>
                    <i className="fa-solid fa-check header__search-option-item-i"></i>
                  </li>
                  <li className="header__search-option-item">
                    <span className="header__search-option-item-span">
                      Ngoài shop
                    </span>
                    <i className="fa-solid fa-check header__search-option-item-i"></i>
                  </li>
                </ul>
              </div>
              <button className="header__search-btn">
                <i className="fa-solid fa-magnifying-glass header-search-image header__search-btn-icon"></i>
              </button>
            </div>
            <div className="header__cart">
              <i className="fa-solid fa-cart-shopping header__cart-icon"></i>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
