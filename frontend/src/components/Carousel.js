import React from 'react';

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade custom-carousel"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner" id="carousel">
          <div className="carousel-caption d-flex justify-content-center align-items-center flex-column">
            <form className="d-flex search-bar">
              <input
                className="form-control me-2 search-input"
                type="search"
                placeholder="Search for delicious food..."
                aria-label="Search"
              />
              <button
                className="btn btn-outline-success text-white bg-success search-button"
                type="submit"
              >
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              src="https://images.pexels.com/photos/5560763/pexels-photo-5560763.jpeg?cs=srgb&dl=pexels-saveurssecretes-5560763.jpg&fm=jpg"
              className="d-block w-100 carousel-image"
              alt="Delicious Food 1"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/06/16/85/60/360_F_616856040_zCvPMQkPFOWsVb3Hxo7mQUYzlzciFCZs.jpg"
              className="d-block w-100 carousel-image"
              alt="Delicious Food 2"
            />
          </div>
          <div className="carousel-item">
            <img
              src="https://t3.ftcdn.net/jpg/05/60/70/82/240_F_560708240_pMZPOuSfvblWGRoaiZFLT4wiFTzQPwQe.jpg"
              className="d-block w-100 carousel-image"
              alt="Delicious Food 3"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev custom-carousel-control"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next custom-carousel-control"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

// Embedded CSS

const carouselStyles = `
.custom-carousel {
  max-height: 600px;
  overflow: hidden;
}

.carousel-image {
  object-fit: cover;
  max-height: 600px;
  filter: brightness(50%);
}

.carousel-caption {
  z-index: 10;
  bottom: 20%;
  text-align: center;
}

.search-bar {
  max-width: 600px;
  width: 100%;
}

.search-input {
  flex: 1;
  padding: 0.8rem 1rem;
  border-radius: 50px;
  border: none;
  outline: none;
  font-size: 1.1rem;
}

.search-button {
  padding: 0.6rem 1.2rem;
  border-radius: 50px;
  font-size: 1.1rem;
  border: none;
}

.custom-carousel-control {
  width: 5%;
}

.custom-carousel-control .carousel-control-prev-icon,
.custom-carousel-control .carousel-control-next-icon {
  filter: invert(100%);
  opacity: 0.8;
}

.custom-carousel-control:hover .carousel-control-prev-icon,
.custom-carousel-control:hover .carousel-control-next-icon {
  opacity: 1;
}
`;

document.head.insertAdjacentHTML('beforeend', `<style>${carouselStyles}</style>`);
