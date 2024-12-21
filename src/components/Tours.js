import React from 'react'
import Title from './Title'
import { tours } from '../data'

function Tours() {
  return (
    <section className="section" id="tours">
      <Title title="featured" subtitle="tours" />

      <div className="section-center featured-center">
        {tours.map((el) => {
          return (
            <article className="tour-card" key={el.id}>
              <div className="tour-img-container">
                <img src={el.image} className="tour-img" alt="" />
                <p className="tour-date">{el.date}</p>
              </div>
              <div className="tour-info">
                <div className="tour-title">
                  <h4>{el.title}</h4>
                </div>
                <p>{el.text}</p>
                <div className="tour-footer">
                  <p>
                    <span>
                      <i className="fas fa-map"></i>
                    </span>
                    {el.location}
                  </p>
                  <p>{el.duration}days</p>
                  <p>from ${el.cost}</p>
                </div>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Tours
