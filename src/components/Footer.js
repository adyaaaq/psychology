import React from "react";
import { IonIcon } from "@ionic/react";
import "./FOOT.css";
import {
  close,
  search,
  cart,
  arrowForward,
  menu,
  checkmarkDone,
  logoYoutube,
  logoInstagram,
  logoLinkedin,
  logoFacebook,
  logoTwitter,
} from "ionicons/icons";
import shutsan from "./logoshutsan.png";
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-top section">
          <div className="container grid-list">
            <div className="footer-brand">
              <a href="/" className="logo">
                <img src={shutsan} width="162" height="50" alt="SHUTSAN LOGO" />
              </a>

              <p className="footer-brand-text">
                ШУТСангийн санхүүжилттэй "Хүний хөгжлийн сэтгэл зүйн судалгаа"
                төслийн хүрээнд уг цахим хуудсыг хийв
              </p>
            </div>

            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Холбоос</p>
              </li>

              <li>
                <a href="/" className="footer-a">
                  Нүүр хуудас
                </a>
              </li>
              <li>
                <a href="/news" className="footer-a">
                  Насны онцлог
                </a>
              </li>
              <li>
                <a href="/quiz" className="footer-a">
                  Тест
                </a>
              </li>
            </ul>
            <ul className="footer-list">
              <li>
                <p className="footer-list-title">Сургалт</p>
              </li>
              <li>
                <a href="/books" className="footer-a">
                  Шинэ номнууд
                </a>
              </li>
              <li>
                <a href="/theories" className="footer-a">
                  Сэтгэл судлалын онолууд
                </a>
              </li>
            </ul>

            <div className="footer-list">
              <p className="footer-list-title">Бидэнтэй холбогдох:</p>

              <div className="wrapper">
                <span className="span">Хаяг: </span>
                <a
                  href="https://maps.app.goo.gl/KUJBxS8HkW5xC3ZV7"
                  className="footer-a"
                >
                  Монгол улс, Улаанбаатар хот, Сүхбаатар дүүрэг, 8 дугаар хороо,
                  Мэдээлэл технологийн үндэсний парк 3 давхар 317 тоот
                </a>
              </div>

              <div className="wrapper">
                <span className="span">Утас: </span>
                <a href="" className="footer-a">
                  +976 11-327634; 11-31574
                </a>
              </div>
              <div className="wrapper">
                <span className="span">Email: </span>
                <a className="footer-a">info@stf.gov.mn</a>
              </div>
              {/* <form action="" className="newsletter-form">
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  required
                  className="input-field"
                />

                <button type="submit" className="btn has-before">
                  <span className="span">Subscribe</span>
                  <IonIcon icon={arrowForward} />
                </button>
              </form> */}

              {/* <ul className="social-list">
                <li>
                  <a
                    href="https://www.facebook.com/erdene.msut.edu"
                    className="social-a"
                  >
                    <IonIcon icon={logoFacebook} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-a">
                    <IonIcon icon={logoInstagram} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-a">
                    <IonIcon icon={logoTwitter} />
                  </a>
                </li>

                <li>
                  <a href="#" className="social-a">
                    <IonIcon icon={logoYoutube} />
                  </a>
                </li>
              </ul> */}
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="container">
            <p className="copyright">
              Copyright 2024 All Rights Reserved by{" "}
              <a href="#" className="copyright-a">
                AideaVision LLC
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
