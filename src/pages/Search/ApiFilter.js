export async function fetchCar() {
  const cars = await fetch(
    "https://raw.githubusercontent.com/fnurhidayat/probable-garbanzo/main/data/cars.min.json"
  );
  const data = await cars.json();

  return data;
}
