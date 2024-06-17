"use strict";
import { useEffect, useRef, useState } from "react";

/* eslint-disable max-len */

type Props = {
  location?: string;
  hideMenu: () => void | undefined;
  observerRefs?: React.RefObject<Element[]>;
};

export const Menu: React.FC<Props> = ({ location, hideMenu, observerRefs }) => {
  const items = ["home", "features", "gallery", "video", "testimonials", "download", "contact"];


  const [visibleKey, setVisibleKey] = useState(0);
  const observers = useRef<IntersectionObserver[]>([]);

  const onClick = (key: number) => {
    setVisibleKey(key);
  };

  const observerCallback = async (e: IntersectionObserverEntry[], key: number) => {
    if (e.length && e[0].isIntersecting) {
      setVisibleKey(key);
    }
  };

  useEffect(() => {
    if (observerRefs) {
      if (observerRefs.current?.length && observers.current) {
        Array.from(Array(5).keys()).forEach((_u, key) => {
          observers.current[key] = new IntersectionObserver((e) =>
            observerCallback(e, key)
          );

          if (observerRefs.current) {
            observers.current[key].observe(observerRefs.current[key]);
          }
        });
      }
    }
    return () =>
      observers.current?.forEach((observer) => observer?.disconnect());
  }, [observerRefs, observers]);

  return (
    <ul className={`header__list ${location === "menu" && "menu__list"}`}>
      {items.map((item, key) => (
        <li className="header__item" key={item}>
          <a
            href={`#${item}`}
            className={
              `${location === "menu" ? "menu__link" : "header__link"}
                ${visibleKey !== 4
                ? key === visibleKey && "header__link--current"
                : key === 6 && "header__link--current"}`
            }
            onClick={() => {
              hideMenu();
              onClick(key);
            }
            }
          >
            {item}
          </a>
        </li>
      ))}
    </ul>
  );
};
