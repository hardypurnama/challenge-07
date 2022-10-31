import React from "react";
import { Link, useLocation } from "react-router-dom";
export default function Hero() {
  const location = useLocation();
  const path = location.pathname;
  return (
    <section id="key" className="pt-8">
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6 align-self-center">
            <h1>Sewa & Rental Mobil Terbaik di kawasan (Lokasimu)</h1>
            <p>
              Selamat datang di Binar Car Rental. Kami menyediakan mobil
              kualitas terbaik dengan harga terjangkau. Selalu siap melayani
              kebutuhanmu untuk sewa mobil selama 24 jam.
            </p>

            {path === "/" && (
              <Link to="/cari-mobil" className="btn btn-success">
                Mulai Sewa Mobil
              </Link>
            )}
          </div>
          <div className="col-12 col-md-6">
            <img className="img-fluid" src="assets/gambar/car.png" alt="" />
          </div>
        </div>
      </div>
    </section>
  );
}
