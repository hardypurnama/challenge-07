import { useState, useEffect } from "react";
import CarCard from "../../components/displayData";
import Hero from "../../components/key";
import Footer from "../../components/displayFooter";
import { useSelector, useDispatch } from "react-redux";
import { getCar, selectCar, filterCar, clearCar } from "./FilterSlice";

export default function Cari() {
  const [filter, setFilter] = useState({});
  const car = useSelector(selectCar);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCar());
  }, [dispatch]);

  useEffect(() => {
    dispatch(clearCar());
  }, []);

  const handleInputFilter = (type, e) => {
    const val = e.target.value;
    setFilter({ ...filter, [type]: val });
  };

  const handleFilter = () => {
    dispatch(filterCar(filter));
  };

  return (
    <div>
      <Hero />
      <div className="container" style={{ marginTop: "-130px" }}>
        <div className="row justify-content-md-center">
          <div className="col col-lg-10">
            <div className="card">
              <div className="card-body">
                <div className="row">
                  <div className="col col-lg-10">
                    <div className="row">
                      <div className="col col-lg-3">
                        <div className="form-group">
                          <label
                            htmlFor="exampleFormControlSelect1"
                            style={{ fontSize: "14px" }}
                          >
                            Tipe Driver
                          </label>
                          <select className="form-control form-control-sm">
                            <option>Dengan Sopir</option>
                            <option>Tanpa Sopir (Lepas Kunci)</option>
                          </select>
                        </div>
                      </div>
                      <div className="col col-lg-3">
                        <div className="form-group">
                          <label
                            htmlFor="exampleFormControlSelect1"
                            style={{ fontSize: "14px" }}
                          >
                            Tanggal
                          </label>
                          <input
                            type="date"
                            className="form-control form-control-sm"
                            onChange={(e) =>
                              handleInputFilter("availableAt", e)
                            }
                          />
                        </div>
                      </div>
                      <div className="col col-lg-3">
                        <div className="form-group">
                          <label
                            htmlFor="exampleFormControlSelect1"
                            style={{ fontSize: "14px" }}
                          >
                            Waktu Jemput/Ambil
                          </label>
                          <select className="form-control form-control-sm">
                            <option>08.00 WIB</option>
                            <option>09.00 WIB</option>
                            <option>10.00 WIB</option>
                            <option>11.00 WIB</option>
                            <option>12.00 WIB</option>
                          </select>
                        </div>
                      </div>
                      <div className="col col-lg-3">
                        <div className="form-group">
                          <label
                            htmlFor="exampleFormControlSelect1"
                            style={{ fontSize: "14px" }}
                          >
                            Jumlah Penumpang (optional)
                          </label>
                          <input
                            type="number"
                            className="form-control form-control-sm"
                            placeholder="Jumlah Penumpang"
                            onChange={(e) => handleInputFilter("capacity", e)}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col col-lg-2">
                    <div className="row">
                      <div className="col col-lg-12">
                        <button
                          type="button"
                          className="btn btn-success mt-3 btn-sm"
                          onClick={handleFilter}
                        >
                          Cari Mobil
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section>
        <div className="container">
          <div className="row row-cols-md-3">
            {car ? (
              car.map((item) => <CarCard car={item} key={item.id} />)
            ) : (
              <h1>Tidak ada data</h1>
            )}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
}
