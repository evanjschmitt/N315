export var userSignedIn = false;

var cartCount = 0;

var cartItems = [];

var books = [
  {
    id: 1,
    name: "Harry Potter",
    price: 2.99,
    featured: false,
  },
  {
    id: 2,
    name: "House of Leaves",
    price: 10.99,
    featured: true,
  },
  {
    id: 3,
    name: "Ready Player One",
    price: 8.99,
    featured: true,
  },
  {
    id: 4,
    name: "Ship of Theseus",
    price: 2.99,
    featured: false,
  },
  {
    id: 5,
    name: "IT",
    price: 10.99,
    featured: true,
  },
  {
    id: 6,
    name: "Ready Player Two",
    price: 8.99,
    featured: true,
  },
];

export function getBooks() {
    return books;
}



var item = {
  id: 1,
  name: "Apple",
  price: 0.99,
};

export function signIn() {
  userSignedIn = true;
  return userSignedIn;
}

export function signOut() {
  userSignedIn = false;
  return userSignedIn;
}

export function addToCart() {
  $(".signInOut .count").html(++cartCount);
}
