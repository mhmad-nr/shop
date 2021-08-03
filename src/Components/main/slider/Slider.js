import React, { useEffect, useState } from 'react'
import { Data as slides } from "./Data.js"
const Slider = () => {
  const [current, setCurrent] = useState(0);

  const sliderBtn = e => setCurrent(parseInt(e.target.id));

  useEffect(() => {
    const play = () => {
      if (current === 4) {
        setCurrent(0)
      }
      else {
        setCurrent(current + 1)
      }
    }
    const interval = setInterval(play, 5000)
    return () => clearInterval(interval)
  }, [current])

  return (
    <header className="slider-header-container row">
      <div className="slider col-12 d-flex justify-content-center">
        <div className="content-container ">
          {slides.map((slide, index) => {
            return (
              <div key={index} className={index === current ? 'slider active' : 'slider'}>
                <img src={slide.img} alt="img" className='image' />
              </div>
            )
          })}
          <div className="butten-container">
            <span id={0} onClick={sliderBtn} className={0 === current ? "span-active" : ""}></span>
            <span id={1} onClick={sliderBtn} className={1 === current ? "span-active" : ""}></span>
            <span id={2} onClick={sliderBtn} className={2 === current ? "span-active" : ""}></span>
            <span id={3} onClick={sliderBtn} className={3 === current ? "span-active" : ""}></span>
            <span id={4} onClick={sliderBtn} className={4 === current ? "span-active" : ""}></span>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Slider;