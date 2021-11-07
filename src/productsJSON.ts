const products = [
  {
    id: 1,
    name: "Leite Macuco",
    info: "1 Litro",
    price: [
      [3.19, "Pepê & Gabriel", "09-10-2021", new Date().getTime() < new Date("09-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Atacadão", "11-30-2021", new Date().getTime() < new Date("11-30-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Pepê & Gabriel", "12-30-2021", new Date().getTime() < new Date("11-30-2021").getTime() ? "Válido" : "Expirado"],
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
      [9.19, "Serra Azul", "11-13-2021", new Date().getTime() < new Date("09-10-2021").getTime() ? "Válido" : "Expirado"],
      [7.19, "Atacadão", "03-26-2021", new Date().getTime() < new Date("09-10-2021").getTime() ? "Válido" : "Expirado"],
      [10.19, "Big Blue", "08-31-2021", new Date().getTime() < new Date("09-10-2021").getTime() ? "Válido" : "Expirado"],
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
      [2.19, "Big Blue", "11-13-2021", new Date().getTime() < new Date("11-10-2021").getTime() ? "Válido" : "Expirado"],
      [1.19, "Atacadão", "12-31-2021", new Date().getTime() < new Date("09-10-2021").getTime() ? "Válido" : "Expirado"],
      [5.19, "Pepê & Gabriel", "11-12-2021", new Date().getTime() < new Date("12-10-2021").getTime() ? "Válido" : "Expirado"],
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
      [2.19, "Big Blue", "11-13-2021", new Date().getTime() < new Date("09-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.19, "Atacadão", "11-13-2021", new Date().getTime() < new Date("12-10-2021").getTime() ? "Válido" : "Expirado"],
      [1.19, "Serra Azul", "11-13-2021", new Date().getTime() < new Date("04-10-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: [
      "frango", "carne"
    ],
    image: "peito-frango.jpg",
  }
]

export default products;