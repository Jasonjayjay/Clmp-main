import React, { useState, useEffect } from "react";
import "./Slider.css";
import data from "./data";
import Testi from "./testi.png";
import Testi2 from "./testi2.png";

const Slider = () => {
  const [people] = useState(data);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const lastIndex = people.length - 1;
    if (index < 0) {
      setIndex(lastIndex);
    }
    if (index > lastIndex) {
      setIndex(0);
    }
  }, [index, people]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex(index + 1);
    }, 5000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <div className="section5">
        <div className='Image1-container'>
            <img src={Testi} alt=" " className="testi" />
        </div>
        <section className="section">
            <div className="title">
                <h2>Let's see what other say</h2>
            </div>
            <div className="section-center">
                {people.map((item, indexPeople) => {
                const { id, name, title, quote } = item;
                let position = "nextSlide";
                if (indexPeople === index) {
                    position = "activeSlide";
                }
                if (
                    indexPeople === index - 1 ||
                    (index === 0 && indexPeople === people.length - 1)
                ) {
                    position = "lastSlide";
                }
                return (
                    <article className={position} key={id}>
                    <p className="text">{quote}</p>
                    <h4>{name}</h4>
                    <p className="title">{title}</p>
                    </article>
                );
                })}
                <button className="prev" onClick={() => setIndex(index - 1)}>
                <i className="fas fa-arrow-left" />
                </button>
                <button className="next" onClick={() => setIndex(index + 1)}>
                <i className="fas fa-arrow-right" />
                </button>
            </div>
        </section>
        <div className='Image2-container'>
            <img src={Testi2} alt=""  className="testi2"/>
        </div>
    </div>
  );
};

export default Slider;
