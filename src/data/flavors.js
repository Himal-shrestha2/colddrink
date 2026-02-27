// this is a simple JS module exporting an array of flavor objects
// each object represents one cold drink flavor (id, name, price, color, image)
const flavors = [
  {
    id: 1,
    name: "Green Apple",
    price: 120,
    color: "bg-green-300",
    image: "/images/green-apple.jpg",
    description: "Fresh and tangy green apple flavor."
  },
  {
    id: 2,
    name: "Strawberry",
    price: 130,
    color: "bg-pink-300",
    image: "/images/strawberry.jpg",
    description: "Sweet & juicy strawberry splash."
  },
  {
    id: 3,
    name: "Lemon",
    price: 110,
    color: "bg-yellow-300",
    image: "/images/lemon.jpg",
    description: "Crisp lemony refreshment."
  },
  {
    id: 4,
    name: "Grapes",
    price: 125,
    color: "bg-purple-300",
    image: "/images/grapes.jpg",
    description: "Soft and fruity grape taste."
  },
];

export default flavors;