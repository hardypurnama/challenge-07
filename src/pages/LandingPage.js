import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Accordion,
  AccordionBody,
  AccordionHeader,
  AccordionItem,
} from "reactstrap";
import Footer from "../components/displayFooter";
import Hero from "../components/key";

export default function Home() {
  const [open, setOpen] = useState("1");
  const toggle = (id) => {
    if (open === id) {
      setOpen();
    } else {
      setOpen(id);
    }
  };
  return (
    <>
      <Hero />
      <section id="ourservice">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <img
                className="img-fluid"
                src="assets/gambar/service.png"
                alt=""
              />
            </div>
            <div className="col-12 col-md-6 align-self-center">
              <h2>Best Car Rental for any kind of trip in (Lokasimu)!</h2>
              <p>
                Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga
                lebih murah dibandingkan yang lain, kondisi mobil baru, serta
                kualitas pelayanan terbaik untuk perjalanan wisata, bisnis,
                wedding, meeting, dll.
              </p>
              <ul className="list-check">
                <li>Sewa Mobil Dengan Supir di Bali 12 Jam</li>
                <li>Sewa Mobil Lepas Kunci di Bali 24 Jam</li>
                <li>Sewa Mobil Jangka Panjang Bulanan</li>
                <li>Gratis Antar - Jemput Mobil di Bandara</li>
                <li>Layanan Airport Transfer / Drop In Out</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section id="whyus">
        <div className="container overflow-hidden" id="">
          <div className="container-fluid">
            <h1>Why Us?</h1>
            <p>Mengapa harus pilih Binar Car Rental?</p>
          </div>
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-4 px-2">
            <div className="col">
              <div className="card h-80">
                <div className="card-body">
                  <img
                    src="assets/gambar/icon_complete.svg"
                    className="img mb-3"
                    alt=""
                  />
                  <h6>Mobil Lengkap</h6>
                  <p>
                    Tersedia banyak pilihan mobil, kondisi masih baru, bersih
                    dan terawat
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-80">
                <div className="card-body">
                  <img
                    src="assets/gambar/icon_price.svg"
                    className="img mb-3"
                    alt=""
                  />
                  <h6>Harga Murah</h6>
                  <p>
                    Harga murah dan bersaing, bisa bandingkan harga kami dengan
                    rental mobil lain
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-80">
                <div className="card-body">
                  <img
                    src="assets/gambar/icon_24hrs.svg"
                    className="img mb-3"
                    alt=""
                  />
                  <h6>Layanan 24 Jam</h6>
                  <p>
                    Siap melayani kebutuhan Anda selama 24 jam nonstop. Kami
                    juga tersedia di akhir minggu
                  </p>
                </div>
              </div>
            </div>
            <div className="col">
              <div className="card h-80">
                <div className="card-body">
                  <img
                    src="assets/gambar/icon_professional.svg"
                    className="img mb-3"
                    alt=""
                  />
                  <h6>Sopir Profesional</h6>
                  <p>
                    Sopir yang profesional, berpengalaman, jujur, ramah dan
                    selalu tepat waktu
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section id="testimonial">
        <div className="container" id="">
          <div className="justify-content-center">
            <div className="text-center">
              <h1>Testimonial</h1>
              <p>Berbagai review positif dari para pelanggan kami</p>
            </div>
            <div>
              <div
                id="ukuran1"
                className="carousel slide"
                data-bs-ride="carousel"
              >
                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="row">
                      <div className="col col-sm-1 mt-4">
                        <img
                          src="assets/gambar/img_photo.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col col-md-5">
                        <img
                          src="assets/gambar/Rate.png"
                          className="img-fluid"
                          alt=""
                        />
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col col-sm-1 mt-5">
                        <img
                          src="assets/gambar/img_photo_1.png"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col col-md-5">
                        <img
                          src="assets/gambar/Rate.png"
                          className="img-fluid"
                          alt=""
                        />
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="row">
                      <div className="col col-sm-1 mt-5">
                        <img
                          src="assets/gambar/img_photo_2.jpg"
                          className="img-fluid"
                          alt=""
                        />
                      </div>
                      <div className="col col-md-5">
                        <img
                          src="assets/gambar/Rate.png"
                          className="img-fluid"
                          alt=""
                        />
                        <p>
                          “Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit, sed do eiusmod lorem ipsum dolor sit amet,
                          consectetur adipiscing elit, sed do eiusmod lorem
                          ipsum dolor sit amet, consectetur adipiscing elit, sed
                          do eiusmod”
                        </p>
                        <h6>John Dee 32, Bromo</h6>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="d-flex" id="ukuran2">
            <button
              className="btn btn-success rounded-circle pr-2"
              type="button"
              data-bs-target="#ukuran1"
              data-bs-slide="prev"
            >
              &lt;
            </button>
            <button
              className="btn btn-success rounded-circle"
              type="button"
              data-bs-target="#ukuran1"
              data-bs-slide="next"
            >
              &gt;
            </button>
          </div>
        </div>
      </section>
      <section id="banner">
        <div className="container text-center rounded">
          <h2 className="mb-5">Sewa Mobil di (Lokasimu) Sekarang</h2>
          <p className="mb-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
          </p>
          <Link to="/cari-mobil" className="btn btn-success">
            Mulai Sewa Mobil
          </Link>
        </div>
      </section>
      <section id="faq">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6">
              <h2>Frequently Asked Question</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
            </div>
            <div className="col-12 col-md-6">
              <Accordion open={open} toggle={toggle}>
                <AccordionItem>
                  <AccordionHeader targetId="first">
                    Apa saja syarat yang dibutuhkan?
                  </AccordionHeader>
                  <AccordionBody accordionId="first">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="second">
                    Berapa hari minimal sewa mobil lepas kunci?
                  </AccordionHeader>
                  <AccordionBody accordionId="second">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="third">
                    Berapa hari sebelumnya sabaiknya booking sewa mobil?
                  </AccordionHeader>
                  <AccordionBody accordionId="third">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="fourth">
                    Apakah Ada biaya antar-jemput?
                  </AccordionHeader>
                  <AccordionBody accordionId="fourth">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionBody>
                </AccordionItem>
                <AccordionItem>
                  <AccordionHeader targetId="fifth">
                    Bagaimana jika terjadi kecelakaan?
                  </AccordionHeader>
                  <AccordionBody accordionId="fifth">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </AccordionBody>
                </AccordionItem>
              </Accordion>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}
