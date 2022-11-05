import React, { useState } from "react";
import s from "./Header.module.css";
import Logo from "../../../Assets/header-logo.png";
import Dot from "../../../Assets/header-dot.png";
import Telegram from "../../../Assets/telegram.png";
import WhatsApp from "../../../Assets/whatsApp.png";
import { Link } from "react-scroll";
import Sidebar from "../../UI/Sidebar/Sidebar";
import { GiHamburgerMenu } from "react-icons/gi";
import { BiMenuAltRight } from "react-icons/bi";

const Header = () => {
  const [showNav, setShowNav] = useState(false);

  return (
    <>
      <header id={s.header}>
        <div className={s.header__logo}>
          <img src={Logo} alt="logo" />
        </div>
        <nav className={s.header__nav}>
          <div className={s.telephone}>
            <a href="tel: 8-800-700-60-50">8-800-700-60-50 </a>
            <span>
              <img src={Dot} alt="" /> Пн-Вс: 9:00 - 21:00
            </span>
          </div>
          <div className={s.social}>
            <h3>
              Быстрая связь с нами <br /> в мессенджерах:
              <div>
                <a href="https://telegram.com" target="_blank">
                  <img src={Telegram} alt="" />
                </a>
                <a href="https://whatsapp.com" target="_blank">
                  <img src={WhatsApp} alt="" />
                </a>
              </div>
            </h3>
          </div>

          <Link
            className={s.link__btn}
            to=""
            spy={true}
            smooth={true}
            duration={500}
          >
            Заказать консультацию
          </Link>
        </nav>
        <div className={s.burger} onClick={() => setShowNav(!showNav)}>
          <BiMenuAltRight size={40} />
        </div>
      </header>
      {showNav && <Sidebar show={showNav} />}
    </>
  );
};

export default Header;
