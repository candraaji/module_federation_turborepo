import { mount as productsMount } from "productsApp/ProductsIndex";
import { mount as cartsMount } from "cartsApp/CartShow";

console.log("Container!");

productsMount(document.querySelector("#my-products"));
cartsMount(document.querySelector("#my-cart"));
