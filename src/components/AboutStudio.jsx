import React, { useState, useEffect } from "react";
import "../aboutStudio.css";
import logo from "../images/studio-ghibli-logo.svg";

export default function AboutStudio({ aboutStudioRef }) {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isHiden, setIsHiden] = useState(true);

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > window.innerHeight - 10) setIsHiden(false);
  }, [scrollPosition]);

  const handleScroll = (e) => {
    setScrollPosition(window.scrollY);
  };
  return (
    <div className="aboutSudio" ref={aboutStudioRef}>
      <div className="logo">
        <img src={logo} />
      </div>

      <div className={`text `}>
        {/* <h1>О студии</h1> */}
        <p className={`${isHiden ? "animated d1" : ""}`}>
          Studio Ghibli — японская анимационная студия, основанная в 1985
          режиссёром и сценаристом Хаяо Миядзаки вместе со своим коллегой и
          другом Исао Такахатой
        </p>
        <p className={`${isHiden ? "animated d2" : ""}`}>
          «Студия Гибли» фактически появилась в 1983 году, при создании аниме
          «Навсикая из Долины Ветров», созданной по мотивам одноимённой манги.
          Студия была названа в честь итальянского разведывательного самолёта
          времён Второй мировой войны. Хаяо Миядзаки, любитель авиации и
          Средиземноморья, а также поклонник творчества французского писателя и
          пилота Антуана де Сент-Экзюпери
        </p>
        <p className={`${isHiden ? "animated d3" : ""}`}>
          В отличие от других аниме-студий, в основном занимающихся
          производством телевизионных сериалов и OVA, эта студия создавалась
          только для производства высококачественных полнометражных аниме, что в
          условиях острой конкуренции на рынке Японии рискованно. Фраза «Вдохнем
          свежее дыхание в мир японской анимации!» - девиз студии.
        </p>
        <p className={`${isHiden ? "animated d4" : ""}`}>
          Широкую известность студии принесло аниме «Наш сосед Тоторо» и «Могила
          светлячков» 1988 года. Благодаря популярности персонажа Тоторо и
          продаже товаров под этой маркой, студия смогла покрыть затраты на
          производство новых лент, а Тоторо был выбран в качестве логотипа
          компании.
        </p>
      </div>
    </div>
  );
}
