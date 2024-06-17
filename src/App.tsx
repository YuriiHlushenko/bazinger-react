/* eslint-disable react/no-unescaped-entities */
/* eslint-disable max-len */
import './App.scss';
import { useEffect, useRef } from 'react';
import { Menu } from './components/menu';
import { Slider } from './components/slider';

export const App = () => {
  const menu = useRef<HTMLDivElement>(null);
  // const body = useRef<HTMLDivElement>(null);

  const showMenu = () => {
    if (menu.current) {
      menu.current.style.transform = 'translateX(0)';
      document.body.classList.add('page__body--with-menu');
    }
  };

  const hideMenu = () => {
    if (menu.current && window.innerWidth < 640) {
      menu.current.style.transform = 'translateX(-100%)';
      document.body.classList.remove('page__body--with-menu');
    }
  };

  const getRef = (el: HTMLHeadingElement) => (observerRefs.current[0] = el);
  const observerRefs = useRef<Element[]>([]);


  const modal = useRef<HTMLDivElement>(null);
  const modalBtn = useRef<HTMLButtonElement>(null);

  const showVideo = () => {
    if (modal.current) {
      modal.current.innerHTML = `
      <div class ="video__modal-content">
      <button class="button video__close">close</button>
      <iframe
        width="1106"
        height="632"
        src="https://www.youtube.com/embed/G1QYS12bB58?list=PLy_eQOYJ5fx6USHVDEaAe173v1SkiwZtp"
        title="Incredible iPhone X Mockups &amp; promo Video"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
      </div>
      `;
      modal.current.style.display = "flex";
    }

    setTimeout(() => {
      if (modal.current) {
        modal.current.style.opacity = "1";
      }
    }, 50);
  };

  useEffect(() => {
    if (modalBtn.current) {
      modalBtn.current.addEventListener("click", showVideo);
    }

    if (modal.current) {
      modal.current.addEventListener('click', () => {
        if (modal.current) {
          modal.current.innerHTML = '';
          modal.current.style.opacity = "0";
        }

        setTimeout(() => {
          if (modal.current) {
            modal.current.style.display = "none";
          }
        }, 450);
      });
    }
  }, []);

  return (
    <>
      <aside ref={menu} className="page__menu menu" id="menu">
        <div className="page__container">
          <div className="header__top">
            <a className="header__logo" href="#">
              ba<span className="header__logo-colored">zinger</span>
              <img src="images/signal.png" alt="signal" className="header__logo-img" />
            </a>

            <a href="#" className="header__menu" onClick={hideMenu}>
              <svg className="header__menu-img" width="18" height="18" viewBox="0 0 14 14" fill="white">
                <path
                  d="M7.00023 5.58599L11.9502 0.635986L13.3642 2.04999L8.41423 6.99999L13.3642 11.95L11.9502 13.364L7.00023 8.41399L2.05023 13.364L0.63623 11.95L5.58623 6.99999L0.63623 2.04999L2.05023 0.635986L7.00023 5.58599Z" />
              </svg>
            </a>
          </div>

          <Menu location="menu" hideMenu={hideMenu} />
        </div>
      </aside>

      <div className="header">
        <div className="page__container">
          <div className="header__top">
            <a className="header__logo" href="#">
              ba<span className="header__logo-colored">zinger</span>
              <img src="images/signal.png" alt="signal" className="header__logo-img" />
            </a>

            <Menu location="header" hideMenu={hideMenu} observerRefs={observerRefs} />

            <button className="header__menu button" onClick={showMenu}>
              <img className="header__menu-img" src="images/icons/menu-burger.svg" alt="menu" />
            </button>
          </div>
        </div>
      </div>

      {/* <section className="slider" id="home">
        <div className="slider__container">
          <div className="slider__line">
            <div className="slider__slide">
              <div className="slide__container">
                <h2 className="page__mainTitle slide__title">
                  Simple, Beautiful <span className="bold slide__title-bold">and Amazing</span>
                </h2>

                <p className="page__text slide__text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper.
                  Nam porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam
                  pulvinar sollicitudin velit id laoreet. Quisque non rhoncus sem.
                </p>

                <div className="slide__buttons">
                  <button className="button slide__buttons-button slide__buttons-donwload">DOWNLOAD</button>
                  <button className="button slide__buttons-button slide__buttons-more">LEARN MORE</button>
                </div>

                <div className="slide__app">
                  <p className="slide__app-p">Aavailable on :</p>
                  <a href="https://www.apple.com/app-store/" className="slide__app-link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="21px"
                      height="26px">
                      <path fillRule="evenodd" fill="rgb(75, 202, 255)"
                        d="M16.771,13.814 C16.740,10.691 19.318,9.193 19.433,9.120 C17.984,6.1000 15.728,6.709 14.925,6.676 C13.004,6.481 11.177,7.806 10.204,7.806 C9.232,7.806 7.727,6.704 6.135,6.734 C4.043,6.764 2.113,7.951 1.034,9.825 C-1.139,13.598 0.478,19.188 2.597,22.248 C3.633,23.745 4.868,25.428 6.490,25.368 C8.050,25.307 8.641,24.358 10.529,24.358 C12.416,24.358 12.947,25.368 14.599,25.337 C16.279,25.307 17.344,23.811 18.372,22.308 C19.561,20.570 20.050,18.888 20.080,18.801 C20.043,18.785 16.804,17.543 16.771,13.814 ZM13.667,4.650 C14.527,3.606 15.108,2.158 14.949,0.713 C13.710,0.763 12.207,1.538 11.318,2.580 C10.520,3.504 9.822,4.979 10.009,6.396 C11.393,6.503 12.805,5.691 13.667,4.650 Z" />
                    </svg>
                  </a>
                  <a href="https://www.apple.com/app-store/" className="slide__app-link">
                    <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="23px"
                      height="25px">
                      <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                        d="M20.634,7.959 C19.786,7.959 19.093,8.653 19.093,9.500 L19.093,15.664 C19.093,16.512 19.786,17.205 20.634,17.205 C21.482,17.205 22.175,16.512 22.175,15.664 L22.175,9.500 C22.175,8.653 21.482,7.959 20.634,7.959 ZM2.141,7.959 C1.294,7.959 0.600,8.653 0.600,9.500 L0.600,15.664 C0.600,16.512 1.294,17.205 2.141,17.205 C2.990,17.205 3.683,16.512 3.683,15.664 L3.683,9.500 C3.683,8.653 2.990,7.959 2.141,7.959 ZM4.453,17.976 C4.453,19.252 5.488,20.287 6.765,20.287 L7.535,20.287 L7.535,23.370 C7.535,24.217 8.228,24.910 9.076,24.910 C9.924,24.910 10.617,24.217 10.617,23.370 L10.617,20.287 L12.158,20.287 L12.158,23.370 C12.158,24.217 12.851,24.910 13.699,24.910 C14.547,24.910 15.240,24.217 15.240,23.370 L15.240,20.287 L16.011,20.287 C17.288,20.287 18.322,19.252 18.322,17.976 L18.322,9.500 L4.453,9.500 L4.453,17.976 ZM14.243,2.409 L15.218,0.536 C15.268,0.442 15.230,0.325 15.137,0.276 C15.042,0.227 14.926,0.264 14.877,0.358 L13.887,2.260 C13.111,1.960 12.269,1.795 11.388,1.795 C10.506,1.795 9.664,1.960 8.889,2.260 L7.899,0.358 C7.850,0.264 7.733,0.227 7.638,0.276 C7.545,0.325 7.507,0.442 7.557,0.536 L8.532,2.409 C6.350,3.396 4.770,5.481 4.496,7.959 L18.279,7.959 C18.005,5.481 16.425,3.396 14.243,2.409 ZM8.306,6.765 C7.689,6.765 7.188,6.264 7.188,5.648 C7.188,5.031 7.689,4.530 8.306,4.530 C8.923,4.530 9.423,5.031 9.423,5.648 C9.423,6.264 8.923,6.765 8.306,6.765 ZM14.470,6.765 C13.853,6.765 13.352,6.264 13.352,5.648 C13.352,5.031 13.853,4.530 14.470,4.530 C15.087,4.530 15.587,5.031 15.587,5.648 C15.587,6.264 15.087,6.765 14.470,6.765 Z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            <div className="slider__slide"></div>
            <div className="slider__slide"></div>
          </div>
        </div>

        <button className="button slider__arrow slider__arrow--prev">
          <svg className="button slider__arrow-icon" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" width="7px" height="12px">
            <path fillRule="evenodd"
              d="M-0.000,11.999 L1.400,11.999 L6.1000,5.999 L1.400,-0.001 L-0.000,-0.001 L5.600,5.999 L-0.000,11.999 Z" />
          </svg>
        </button>

        <button className="button slider__arrow slider__arrow--next slider__arrow--active">
          <svg className="button slider__arrow-icon" xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink" width="7px" height="12px">
            <path fillRule="evenodd"
              d="M-0.000,11.999 L1.400,11.999 L6.1000,5.999 L1.400,-0.001 L-0.000,-0.001 L5.600,5.999 L-0.000,11.999 Z" />
          </svg>
        </button>

        <div className="slider__nav">
          <button className="button slider__nav-dot slider__nav-dot--active"></button>
          <button className="button slider__nav-dot"></button>
          <button className="button slider__nav-dot"></button>
        </div>
      </section> */}

      <Slider getRef={getRef} />

      <section className="features page__section" id="features">
        <div className="page__container">
          <h2 className="page__title" ref={(el: HTMLHeadingElement) => (observerRefs.current[1] = el)}>summarise the features</h2>
          <p className="page__subtitle">summarise what your product is all about</p>
          <div className="features__flex page__flex">
            <div className="features__container page__section-container">
              <div className="features__img">
                <div className="features__img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="70px"
                    height="70px">
                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                      d="M0.011,34.999 L13.405,30.626 L34.1000,41.424 L57.688,30.353 L69.989,34.999 L34.1000,52.494 L0.011,34.999 ZM0.011,17.505 L34.1000,0.011 L69.989,17.505 L34.1000,34.999 L0.011,17.505 ZM34.1000,58.918 L57.688,47.847 L69.989,52.494 L34.1000,69.989 L0.011,52.494 L13.405,48.120 L34.1000,58.918 Z" />
                  </svg>
                </div>
              </div>

              <h3 className="features__title page__headline">Attractive Layout</h3>

              <p className="features__p page__p">Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
                idporta
                nequetiam elerisque mi id faucibus iaculis vitae pulvinar.
              </p>
            </div>

            <div className="features__container page__section-container">
              <div className="features__img">
                <div className="features__img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="47px"
                    height="69px">
                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                      d="M40.599,68.989 L6.401,68.989 C2.870,68.989 -0.011,66.088 -0.011,62.522 L-0.011,6.477 C-0.011,2.912 2.870,0.010 6.401,0.010 L40.599,0.010 C44.139,0.010 47.011,2.912 47.011,6.477 L47.011,62.522 C47.011,66.088 44.139,68.989 40.599,68.989 ZM42.736,6.477 C42.736,5.290 41.776,4.322 40.599,4.322 L6.401,4.322 C5.224,4.322 4.264,5.290 4.264,6.477 L4.264,62.522 C4.264,63.710 5.224,64.678 6.401,64.678 L40.599,64.678 C41.776,64.678 42.736,63.710 42.736,62.522 L42.736,6.477 ZM8.539,8.633 L38.461,8.633 L38.461,56.055 L8.539,56.055 L8.539,8.633 ZM23.500,58.211 C24.677,58.211 25.637,59.179 25.637,60.366 C25.637,61.554 24.677,62.522 23.500,62.522 C22.323,62.522 21.363,61.554 21.363,60.366 C21.363,59.179 22.323,58.211 23.500,58.211 Z" />
                  </svg>
                </div>
              </div>

              <h3 className="features__title page__headline">Fresh Design</h3>

              <p className="features__p page__p">
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id
                faucibus iaculis vitae pulvinar.
              </p>
            </div>

            <div className="features__container page__section-container">
              <div className="features__img">
                <div className="features__img-container features__img-container--colored">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="70px"
                    height="70px">
                    <path fillRule="evenodd" fill="rgb(249, 249, 249)"
                      d="M61.242,56.868 L61.242,69.989 L48.121,56.868 L26.253,56.868 C21.879,56.868 17.505,52.494 17.505,48.120 L17.505,45.557 L23.690,39.373 L43.747,39.373 C50.496,39.373 56.868,32.997 56.868,26.252 L56.868,21.879 L61.242,21.879 C65.615,21.879 69.989,26.252 69.989,30.626 L69.989,48.120 C69.989,52.494 65.615,56.868 61.242,56.868 ZM43.747,34.999 L21.879,34.999 L8.758,48.120 L8.758,34.999 C4.384,34.999 0.011,30.626 0.011,26.252 L0.011,8.758 C0.011,4.384 4.384,0.010 8.758,0.010 L43.747,0.010 C48.121,0.010 52.494,4.384 52.494,8.758 L52.494,26.252 C52.494,30.626 48.121,34.999 43.747,34.999 Z" />
                  </svg>
                </div>
              </div>

              <h3 className="features__title page__headline page__headline--colored">multipurpose</h3>

              <p className="features__p page__p">
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id
                faucibus iaculis vitae pulvinar.
              </p>
            </div>

            <div className="features__container page__section-container">
              <div className="features__img ">
                <div className="features__img-container">
                  <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="70px"
                    height="66px">
                    <path fillRule="evenodd" fill="rgb(255, 255, 255)"
                      d="M65.615,-0.001 L4.385,-0.001 C1.980,-0.001 0.011,1.980 0.011,4.400 L0.011,48.400 C0.011,50.819 1.980,52.800 4.385,52.800 L17.505,52.800 L17.505,65.1000 L35.542,52.800 L65.615,52.800 C68.020,52.800 69.989,50.819 69.989,48.400 L69.989,4.400 C69.989,1.980 68.020,-0.001 65.615,-0.001 ZM61.242,43.1000 L8.758,43.1000 L8.758,8.800 L61.242,8.800 L61.242,43.1000 Z" />
                  </svg>
                </div>
              </div>

              <h3 className="features__title page__headline">Easy to customize</h3>

              <p className="features__p page__p">
                Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa idporta nequetiam elerisque mi id
                faucibus iaculis vitae pulvinar.
              </p>
            </div>

          </div>
        </div>
      </section>

      <section className="gallery page__section" id="gallery">
        <div className="page__container">
          <h2 className="page__title" ref={(el: HTMLHeadingElement) => (observerRefs.current[2] = el)}>show the gallery</h2>
          <p className="page__subtitle">summarise what your product is all about </p>
          <div className="gallery__flex page__flex">

            {[1, 2, 3, 4].map(n => (
              <div className="gallery__container page__section-container" key={n}>
                <div className={`gallery__img ${n === 1 && "gallery__img--active"}`}>
                  <div className="gallery__img-overlay"></div>
                  <img src="images/plus.png" alt="plus" className="gallery__img-plus" />
                  <img src="images/screenShot.png" alt="screen shot" className="gallery__img-img" />
                  <h3 className="gallery__headline page__headline">{`SCREEN SHOT #${n}`}</h3>
                </div>

                <p className="features__p page__p">
                  Nunc cursus libero purus ac congue arcu cursus ut sed vitae pulvinar massa
                  idporta nequetiam elerisque mi id faucibus iaculis vitae pulvinar.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="video page__container" id="video" ref={(el: HTMLDivElement) => (observerRefs.current[3] = el)}>
        <button className="button video__play" ref={modalBtn}>
          <svg className="video__play-svg" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink"
            width="126px" height="85px">
            <path fillRule="evenodd" strokeWidth="2px" fillOpacity="0"
              d="M13.972,5.145 L112.871,5.145 C117.290,5.145 120.871,8.727 120.871,13.145 L120.871,71.620 C120.871,76.038 117.290,79.621 112.871,79.621 L13.972,79.621 C9.554,79.621 5.972,76.038 5.972,71.620 L5.972,13.145 C5.972,8.727 9.554,5.145 13.972,5.145 Z" />
            <path fillRule="evenodd"
              d="M76.551,39.919 L67.871,34.790 C65.935,33.645 62.766,31.775 60.822,30.630 L51.823,25.501 C49.888,24.356 47.985,25.275 47.985,27.549 L47.985,56.450 C47.985,58.716 49.888,59.644 51.823,58.498 L60.663,53.370 C62.606,52.224 65.856,50.354 67.791,49.209 L76.511,44.080 C78.446,42.935 78.486,41.064 76.551,39.919 Z" />
          </svg>
        </button>

        <h2 className="page__mainTitle video__title">
          Watch the best Technology in <span className="bold">Action</span>
        </h2>

        <p className="page__text video__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc eget nunc vitae tellus luctus ullamcorper. Nam
          porttitor ullamcorper felis at convallis. Aenean ornare vestibulum nisi fringilla lacinia. Nullam pulvinar
          sollicitudin velit id laoreet. Quisque non rhoncus sem.
        </p>
        <div className="video__modal" ref={modal}></div>
      </section>

      <section className="contact" id="contact">
        <form action="" className="form" id="form" ref={(el: HTMLFormElement) => (observerRefs.current[4] = el)}>
          <h3 className="form__title">Contact</h3>

          <input className="form__input" type="text" placeholder="Your name" required />
          <input className="form__input" type="email" placeholder="Your email" required />
          <input className="form__input" type="text" placeholder="Subject" required />
          <textarea className="form__input form__input--message" placeholder="Message" required></textarea>

          <button className="button form__button" type="submit">Send</button>
        </form>
      </section>

      <footer className="footer">
        <div className="page__container footer__container">
          <p className="footer__copyright">
            Copyright © 2024 | bazinger | All Rights Reserved
          </p>

          <p className="footer__copyright">
            Terms of Service | Privacy Policy
          </p>
        </div>
      </footer>
    </>
  );
};
