const baseURL = 'http://localhost:3000';

class API {
  static fetchCars = (success, failure) => {
    setTimeout(() => {
      fetch(`${baseURL}/cars`)
      .then(res => res.json())
      .then(success)
      .catch(failure)
    }, 3000)
  };

  static deleteCar = (id, success, failure) => {
    fetch(`${baseURL}/cars/${id}`, { method: 'DELETE' })
      .then(res => res.ok ? success() : failure(res.error))
      .catch(failure)
  };
}

// API.fetchCars(
//   console.log,
//   console.error
// )

// API.deleteCar(
//   2,
//   () => console.log('parsiusta'),
//   console.error
// )