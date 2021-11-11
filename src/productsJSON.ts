const products = [
  {
    id: 1,
    name: "Leite Macuco",
    info: "1 Litro",
    price: [
      [4.69, "Atacadão", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Big Blue", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Bramil", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Casa Friburgo", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Cavalo Preto", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Gama", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Pepê & Gabriel", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "R&E Mercado", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [3.19, "Serra Azul", "01-15-2021", new Date().setHours(0,0,0,0) <= new Date("01-15-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Tio Dongo", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
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
      [4.69, "Atacadão", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Big Blue", "02-10-2021", new Date().setHours(0,0,0,0) <= new Date("02-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Bramil", "11-11-2021", new Date().setHours(0,0,0,0) <= new Date("11-11-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Casa Friburgo", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Cavalo Preto", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Gama", "11-12-2021", new Date().setHours(0,0,0,0) <= new Date("11-12-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Pepê & Gabriel", "02-10-2021", new Date().setHours(0,0,0,0) <= new Date("02-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "R&E Mercado", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [3.19, "Serra Azul", "01-15-2021", new Date().setHours(0,0,0,0) <= new Date("01-15-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Tio Dongo", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
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
      [4.69, "Atacadão", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Big Blue", "02-10-2021", new Date().setHours(0,0,0,0) <= new Date("02-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Bramil", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Casa Friburgo", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Cavalo Preto", "11-15-2021", new Date().setHours(0,0,0,0) <= new Date("11-15-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Gama", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Pepê & Gabriel", "02-10-2021", new Date().setHours(0,0,0,0) <= new Date("02-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "R&E Mercado", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [3.19, "Serra Azul", "01-15-2021", new Date().setHours(0,0,0,0) <= new Date("01-15-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Tio Dongo", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
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
      [4.69, "Atacadão", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Big Blue", "02-10-2021", new Date().setHours(0,0,0,0) <= new Date("02-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Bramil", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Casa Friburgo", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Cavalo Preto", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Gama", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [2.69, "Pepê & Gabriel", "02-10-2021", new Date().setHours(0,0,0,0) <= new Date("02-10-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "R&E Mercado", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
      [3.19, "Serra Azul", "01-15-2021", new Date().setHours(0,0,0,0) <= new Date("01-15-2021").getTime() ? "Válido" : "Expirado"],
      [4.69, "Tio Dongo", "01-10-2021", new Date().setHours(0,0,0,0) <= new Date("01-10-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: [
      "frango", "carne"
    ],
    image: "peito-frango.jpg",
  }
]

export default products;