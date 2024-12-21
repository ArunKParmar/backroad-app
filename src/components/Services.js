import React from 'react'
import Title from './Title'
import { services } from '../data'

function Services() {
  return (
    <section className="section services" id="services">
      <Title title="our" subtitle="services" />
      <div className="section-center services-center">
        {services.map((el) => {
          return (
            <article className="service" key={el.id}>
              <span className="service-icon">
                <i className={el.icon}></i>
              </span>
              <div className="service-info">
                <h4 className="service-title">{el.title}</h4>
                <p className="service-text">{el.text}</p>
              </div>
            </article>
          )
        })}
      </div>
    </section>
  )
}

export default Services
