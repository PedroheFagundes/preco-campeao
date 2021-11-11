const products = [
  {
    id: 1,
    name: "Leite Macuco",
    info: "1 Litro",
    price: [
      [0.00, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "Bebida Laticíneo",
    image: "leitemacuco-integral.png",
  },
  {
    id: 2,
    name: "Coca-cola",
    info: "2 Litros",
    price: [
      [0.00, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "Bebida Refrigerante",
    image: "cocacola-2litros.png",
  },
  {
    id: 3,
    name: "Café 3 Corações",
    info: "Extra Forte 500g",
    price: [
      [0.00, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "Bebida",
    image: "cafe3coracoes-extraforte-500g.png",
  },
  {
    id: 4,
    name: "Peito de Frango",
    info: "1kg",
    price: [
      [0.00, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "frango carne",
    image: "peito-frango.jpg",
  },
  {
    id: 5,
    name: "Mistura Pão Francês",
    info: "Veramix 25kg",
    price: [
      [74.90, "Atacadão", "11-14-2021", new Date().setHours(0,0,0,0) <= new Date("11-14-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.00, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "massa",
    image: "mistura-pao-frances-veramix.png",
  }
]

export default products;