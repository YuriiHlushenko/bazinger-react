"use strict";

import { useEffect, useRef, useState } from "react";

type Props = {
  getRef: (el: HTMLHeadingElement) => void;
};

export const Slider: React.FC<Props> = ({ getRef }) => {
  const [current, setCurrent] = useState(0);
  const slider = useRef<HTMLDivElement>(null);
  const sliderLine = useRef<HTMLDivElement>(null);
  const prevButton = useRef<HTMLButtonElement>(null);
  const nextButton = useRef<HTMLButtonElement>(null);

  const transform = [0, 33.3, 66.6];

  function scroll(cur: number) {
    if (sliderLine.current) {
      sliderLine.current.style.transform = `translateX(-${transform[cur]}%)`;
      setCurrent(cur);
    }
  }

  const nextSlide = () => {
    if (current < 2) {
      scroll(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      scroll(current - 1);
    }
  };

  let xDown: number | null = null;
  let yDown: number | null = null;

  function getTouches(evt: TouchEvent) {
    return evt.touches;
  }

  function handleTouchStart(evt: TouchEvent) {
    const firstTouch = getTouches(evt)[0];

    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
  }

  function handleTouchMove(evt: TouchEvent) {
    if (!xDown || !yDown) {
      return;
    }

    const xUp = evt.touches[0].clientX;
    const yUp = evt.touches[0].clientY;

    const xDiff = xDown - xUp;
    const yDiff = yDown - yUp;

    if (Math.abs(xDiff) > Math.abs(yDiff)) {
      if (xDiff > 0) {
        nextSlide();
      } else {
        prevSlide();
      }
    }

    xDown = null;
    yDown = null;
  }

  useEffect(() => {
    if (slider.current) {
      slider.current.addEventListener('touchstart', handleTouchStart, { passive: true });
      slider.current.addEventListener('touchmove', handleTouchMove, { passive: true });
    }
  }, [current]);

  return (
    <section ref={slider} className="slider" id="home">
      <div className="slider__container">
        <div ref={sliderLine} className="slider__line">
          <div className="slider__slide">
            <div className="slide__container">
              <h2 ref={getRef} className="page__mainTitle slide__title">
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

      <button
        ref={prevButton}
        className={`button slider__arrow slider__arrow--prev ${current !== 0 && "slider__arrow--active"}`}
        onClick={prevSlide}
      >
        <svg className="button slider__arrow-icon" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" width="7px" height="12px">
          <path fillRule="evenodd"
            d="M-0.000,11.999 L1.400,11.999 L6.1000,5.999 L1.400,-0.001 L-0.000,-0.001 L5.600,5.999 L-0.000,11.999 Z" />
        </svg>
      </button>

      <button
        ref={nextButton}
        className={`button slider__arrow slider__arrow--next ${current !== 2 && "slider__arrow--active"}`}
        onClick={nextSlide}
      >
        <svg className="button slider__arrow-icon" xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink" width="7px" height="12px">
          <path fillRule="evenodd"
            d="M-0.000,11.999 L1.400,11.999 L6.1000,5.999 L1.400,-0.001 L-0.000,-0.001 L5.600,5.999 L-0.000,11.999 Z" />
        </svg>
      </button>

      <div className="slider__nav">
        {[0, 1, 2].map(n => (
          <button
            key={n}
            className={`button slider__nav-dot ${current === n && "slider__nav-dot--active"}`}
            onClick={() => scroll(n)}
          ></button>
        ))}
      </div>
    </section>
  );
};

