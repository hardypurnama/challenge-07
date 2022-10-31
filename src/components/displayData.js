import React from "react";
export default function CarCard({ car }) {
  const carImage =
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/public/" +
    car.image.substring(1);
  return (
    <div className="col">
      <div className="card">
        <img src={carImage} className="card-img-top" alt={car.manufacture} />
        <div className="card-body">
          <small>
            {car.manufacture} {car.model} / {car.type}
          </small>

          <h5 className="card-title">Rp {car.rentPerDay} / hari</h5>
          <p className="card-text">{car.description}</p>
          <div className="row">
            <div className="col-xl-1">
              <i className="bi bi-people"></i>
            </div>

            <div className="col-xl-8">{car.capacity} Orang</div>
          </div>
          <div className="row ">
            <div className="col-xl-1">
              <i className="bi bi-gear"></i>
            </div>

            <div className="col-xl-8">{car.transmission}</div>
          </div>
          <div className="row ">
            <div className="col-xl-1">
              <i className="bi bi-calendar4"></i>
            </div>

            <div className="col-xl-8">Tahun {car.year}</div>
          </div>
        </div>
        <div className="card-footer">
          <div className="d-grid">
            <button className="btn btn-success" type="button">
              Pilih Mobil
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
