const products = [
  {
    id: 1,
    name: "Leite Macuco",
    info: "1 Litro",
    price: [
      [3.19, "Big Blue", "11-10-2021"],
      [4.69, "Atacadão", "12-30-2021"],
    ],
    category: [
      "Bebida", "Laticíneo"
    ],
    image: "leitemacuco-integral.png",
  },
  {
    id: 2,
    name: "Coca-cola",
    info: "2 Litros",
    price: [
      [9.19, "Serra Azul", "11-13-2021"],
      [7.19, "Atacadão", "03-26-2021"],
      [10.19, "Big Blue", "12-31-2021"],
    ],
    category: [
      "Bebida", "Refrigerante"
    ],
    image: "cocacola-2litros.png",
  },
  {
    id: 3,
    name: "Café 3 Corações",
    info: "Extra Forte 500g",
    price: [
      [2.19, "Big Blue", "11-13-2021"],
      [1.19, "Atacadão", "12-31-2021"],
    ],
    category: [
      "Bebida", ""
    ],
    image: "cafe3coracoes-extraforte-500g.png",
  },
  {
    id: 4,
    name: "Peito de Frango",
    info: "1kg",
    price: [
      [2.19, "Big Blue", "11-13-2021"],
      [1.19, "Atacadão", "12-31-2021"],
    ],
    category: [
      "frango", "carne"
    ],
    image: "peito-frango.jpg",
  }
]

export default products;