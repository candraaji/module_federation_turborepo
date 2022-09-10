import faker from "faker";

const mount = (el) => {
  const cartText = `<div>You have ${faker.random.number()} items in your cart</div>`;
  el.innerHTML = cartText;
};

// Context/Situation #1
// We are running this file in development in isolation
// We are using our local index.html file
// wich definitely has an elemen dev id dev-product
// we want to immidiatly render our app into that element
if (process.env.NODE_ENV === "development") {
  const el = document.querySelector("#dev-cart");

  //ASsuming our cointainer doesn't have an element
  // with id 'dev-products'
  if (el) {
    mount(el);
  }
}

//context situation #2
//We are running this file in development or production through the container app
//No guarantee that an element have id of 'dev-products'
export { mount };
