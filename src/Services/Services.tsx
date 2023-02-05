import React from 'react';
import { services } from '../data/services';
import "./Services.scss";

const Services: React.FunctionComponent = () => {
  return (
    <section className="services">
        <h2 className="services__title">Why choose Easybank</h2>
        <p className="services__text">We leverage Open Banking to turn your bank into your financial hub. Control your finances like never before</p>
        <div className="services__card-group">
            {services.map((data) => (
                <div className="card" key={data.id}>
                    <img src={data.icon} alt={data.alt} className="card__icon" />
                    <h3 className="card__title">{data.title}</h3>
                    <p className="card__text">
                        {data.text}
                    </p>
                </div>
            ))}
        </div>
    </section>
  )
}

export default Services