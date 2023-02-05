import React from 'react';
import "./Home.scss";

const Home: React.FunctionComponent = () => {
  return (
    <main>
      <section className="home" id="home">
          <div className="home__img-container">
              <img src="https://res.cloudinary.com/damkols/image/upload/v1675509487/image-mockups_fwrlyy.png" alt="Easybank Banner Image" className="home__img" width="100%" />
          </div>
          <div className="homeContainer">
              <h1 className="homeContainer__title">Next generation digital banking</h1>
              <p className="homeContainer__text">
                  Take your financial life online. Your Easybank account will be a one-stop-shop for spending, saving, budgeting, investing, and much more.
              </p>
              <button className="btn-primary">Request Invite</button>
          </div>
      </section>
    </main>
  )
}

export default Home