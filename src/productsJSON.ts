const products = [
  {
    id: 1,
    name: "Leite Macuco",
    info: "1 Litro",
    price: [
      [0.09, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "Bebida Laticíneo",
    image: "leitemacuco-integral.png",
  },
  {
    id: 2,
    name: "Coca-cola",
    info: "2 Litros",
    price: [
      [0.09, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "Bebida Refrigerante",
    image: "cocacola-2litros.png",
  },
  {
    id: 3,
    name: "Café 3 Corações",
    info: "Extra Forte 500g",
    price: [
      [0.09, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "Bebida",
    image: "cafe3coracoes-extraforte-500g.png",
  },
  {
    id: 4,
    name: "Peito de Frango",
    info: "1kg",
    price: [
      [0.09, "Atacadão", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "frango carne",
    image: "peito-frango.jpg",
  },
  {
    id: 5,
    name: "Batata Palha",
    info: "Yoki 100g",
    price: [
      [3.79, "Atacadão", "11-14-2021", new Date().setHours(0,0,0,0) <= new Date("11-14-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "",
    image: "batata-palha-yoki-100g.png",
  },
  {
    id: 6,
    name: "Mistura p/ Pão",
    info: "Veramix 25kg",
    price: [
      [74.90, "Atacadão", "11-14-2021", new Date().setHours(0,0,0,0) <= new Date("11-14-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "massa francês",
    image: "mistura-pao-frances-veramix.png",
  },
  {
    id: 7,
    name: "Amaciante Ypê",
    info: "Pro Azul 7 Litros",
    price: [
      [21.90, "Atacadão", "11-14-2021", new Date().setHours(0,0,0,0) <= new Date("11-14-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "roupas bombona limpeza",
    image: "amaciante-roupa-ype.png",
  },
  {
    id: 8,
    name: "Detergente Pó",
    info: "Urca Max 5kg",
    price: [
      [16.98, "Atacadão", "11-14-2021", new Date().setHours(0,0,0,0) <= new Date("11-14-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "limpeza",
    image: "detergente-po-urca.png",
  },
  {
    id: 9,
    name: "Batata Palha",
    info: "Yoki 240g",
    price: [
      [8.50, "Atacadão", "11-14-2021", new Date().setHours(0,0,0,0) <= new Date("11-14-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "",
    image: "batata-palha-yoki-240g.png",
  },
  {
    id: 10,
    name: "Molho Tomate",
    info: "Fugini 2kg",
    price: [
      [7.79, "Atacadão", "11-14-2021", new Date().setHours(0,0,0,0) <= new Date("11-14-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Big Blue", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Bramil", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Casa Friburgo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Cavalo Preto", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Gama", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Pepê & Gabriel", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "R&E Mercado", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Serra Azul", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
      [0.09, "Tio Dongo", "01-01-2021", new Date().setHours(0,0,0,0) <= new Date("01-01-2021").getTime() ? "Válido" : "Expirado"],
    ],
    category: "",
    image: "molho-tomate-fugini.png",
  }
]

export default products;