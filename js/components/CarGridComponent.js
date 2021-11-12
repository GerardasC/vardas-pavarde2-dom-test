class CarGridComponent {
  constructor() {
    this.state = {
      loading: false,
      cars: []
    }
    this.init();
  }

  fetchCars = () => API.fetchCars(this.saveCars, alert)

  saveCars = (cars) => {
    this.state.cars = cars;
    this.state.loading = false;
    console.log('1')
    this.render();
  }

  init = () => {
    this.state.loading = true;
    this.fetchCars();
    this.htmlElement = document.createElement('div');
    this.render();
    console.log('2')
  }

  render = () => {
    const { loading, cars } = this.state;

    if (loading) {
      this.htmlElement.innerHTML = 'siunciama...';
    } else {
      this.htmlElement.innerHTML = 'parsiusta'
    }
  }
}