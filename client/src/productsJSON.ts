const products = [
  {
    id: 1,
    name: "Leite Macuco",
    info: "1 Litro",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [3.15, "Casa Friburgo", "2021/11/17"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [3.19, "Serra Azul", "2021/11/18"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "Bebida Laticíneo",
    image: "leitemacuco-integral",
  },
  {
    id: 2,
    name: "Coca-cola",
    info: "2 Litros",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/10/10"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "Bebida Refrigerante",
    image: "cocacola-2litros",
  },
  {
    id: 3,
    name: "Café 3 Corações",
    info: "Extra Forte 500g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "Bebida",
    image: "cafe3coracoes-extraforte-500g",
  },
  {
    id: 4,
    name: "Peito de Frango",
    info: "Com Osso 1kg",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [9.98, "R&E Mercado", "2021/11/18"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "carne",
    image: "peito-frango",
  },
  {
    id: 5,
    name: "Batata Palha",
    info: "Yoki 100g",
    price: [
      [3.79, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "batata-palha-yoki-100g",
  },
  {
    id: 6,
    name: "Mistura p/ Pão",
    info: "Veramix 25kg",
    price: [
      [74.90, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "massa francês",
    image: "mistura-pao-frances-veramix",
  },
  {
    id: 7,
    name: "Amaciante Ypê",
    info: "Pro Azul 7 Litros",
    price: [
      [21.90, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "roupas bombona limpeza",
    image: "amaciante-roupa-ype",
  },
  {
    id: 8,
    name: "Detergente Pó",
    info: "Urca Max 5kg",
    price: [
      [16.98, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "limpeza",
    image: "detergente-po-urca",
  },
  {
    id: 9,
    name: "Batata Palha",
    info: "Yoki 240g",
    price: [
      [8.50, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "batata-palha-yoki-240g",
  },
  {
    id: 10,
    name: "Molho Tomate",
    info: "Fugini 2kg",
    price: [
      [7.79, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "molho-tomate-fugini",
  },
  {
    id: 11,
    name: "Arroz",
    info: "Ouro Branco 5kg",
    price: [
      [16.99, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [17.99, "Casa Friburgo", "2021/11/17"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [16.98, "R&E Mercado", "2021/11/18"],
      [16.99, "Serra Azul", "2021/11/18"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "agulhinha",
    image: "arroz-ouro-branco-5kg",
  },
  {
    id: 12,
    name: "Arroz Meu Biju",
    info: "5kg",
    price: [
      [17.90, "Atacadão", "2021/11/21"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "agulhinha, branco",
    image: "arroz-meu-biju-5kg",
  },
  {
    id: 13,
    name: "Feijão Prato Bom",
    info: "1kg",
    price: [
      [5.89, "Atacadão", "2021/11/21"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "preto",
    image: "feijao-prato-bom-1kg",
  },
  {
    id: 14,
    name: "Ervilha Partida",
    info: "Kicaldo 500g",
    price: [
      [4.49, "Atacadão", "2021/11/21"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "ervilha-partida-kicaldo-500g",
  },
  {
    id: 15,
    name: "Milho Pipoca",
    info: "Yoki 500g",
    price: [
      [3.89, "Atacadão", "2021/11/21"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "milho-pipoca-yoki-500g",
  },
  {
    id: 16,
    name: "Farinha Granfino",
    info: "Mandioca 1kg",
    price: [
      [3.69, "Atacadão", "2021/11/21"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "torrada",
    image: "farinha-mandioca-granfino-1kg",
  },
  {
    id: 17,
    name: "Lasanha Pif Paf",
    info: "Sabores 600g",
    price: [
      [0.09, "Atacadão", "2021/11/14"],
      [0.09, "Big Blue", "2021/11/14"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [7.98, "R&E Mercado", "2021/11/18"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "lasanha-pifpaf-600g",
  },
  {
    id: 18,
    name: "Leite Ninho",
    info: "Forti+ 380g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [11.98, "R&E Mercado", "2021/11/18"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "composto lácteo",
    image: "leite-ninho-380g",
  },
  {
    id: 19,
    name: "Lagarto Plano",
    info: "kg",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [26.98, "R&E Mercado", "2021/11/18"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "carne bovino bovina",
    image: "lagarto-plano-kg",
  },
  {
    id: 20,
    name: "Feijão Anchieta",
    info: "1kg",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [5.99, "Serra Azul", "2021/11/18"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "preto",
    image: "feijao-anchieta-1kg",
  },
  {
    id: 21,
    name: "Leite Condensado",
    info: "Piracanjuba 395g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [3.99, "Serra Azul", "2021/11/18"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "leite-condensado-piracanjuba-395g",
  },
  {
    id: 22,
    name: "Feijão Pereira",
    info: "1kg",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [5.99, "Casa Friburgo", "2021/11/17"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "preto",
    image: "feijao-pereira-1kg",
  },
  {
    id: 23,
    name: "Farinha Trigo 1kg",
    info: "S/ Fermento D. Benta",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [4.59, "Casa Friburgo", "2021/11/17"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "sem fermento",
    image: "farinha-trigo-sem-fermento-dona-benta",
  },
  {
    id: 24,
    name: "Molho Tomate",
    info: "Pomarola 520g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [2.99, "Casa Friburgo", "2021/11/17"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "molho-tomate-pomarola-520g",
  },
  {
    id: 25,
    name: "Sardinha 125g",
    info: "Coqueiro",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [4.99, "Casa Friburgo", "2021/11/17"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "enlatada",
    image: "sardinha-coqueiro-125g",
  },
  {
    id: 26,
    name: "Milho Verde",
    info: "Quero 170g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [2.69, "Casa Friburgo", "2021/11/17"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "milho-verde-quero-170g",
  },
  {
    id: 27,
    name: "Nescauzinho",
    info: "Bebida Láctea 200ml",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [1.28, "R&E Mercado", "2021/11/18"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "achocolatado bebida",
    image: "nescauzinho-200ml",
  },
  {
    id: 28,
    name: "Biscoito 140g",
    info: "Passatempo Chocolate",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [1.59, "R&E Mercado", "2021/11/18"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "biscoito-passatempo-140g",
  },
  {
    id: 29,
    name: "Feijão Vermelho",
    info: "Pereira 1kg",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [7.99, "Serra Azul", "2021/11/18"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "feijao-vermelho-pereira-1kg",
  },
  {
    id: 30,
    name: "Alho Picado",
    info: "Garlic Foods 2kg",
    price: [
      [23.98, "Atacadão", "2021/11/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "alho-picado-garlic-foods-2kg",
  },
  {
    id: 31,
    name: "Pêssego em Calda",
    info: "Schramm 450g",
    price: [
      [8.49, "Atacadão", "2021/11/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [0.09, "Cavalo Preto", "2021/01/01"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "pessego-calda-schramm-450g",
  },
  {
    id: 32,
    name: "Pão de Forma",
    info: "Panco Premium 500g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [5.39, "Cavalo Preto", "2021/11/22"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "pao-forma-panco",
  },
  {
    id: 33,
    name: "Aveia em Flocos",
    info: "Finos Yoki 500g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [5.99, "Cavalo Preto", "2021/11/22"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "aveia-flocos-finos-yoki-500g",
  },
  {
    id: 34,
    name: "Filtro de Papel",
    info: "Brigitta 102",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [3.49, "Cavalo Preto", "2021/11/22"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "café",
    image: "filtro-papel-brigitta-102",
  },
  {
    id: 35,
    name: "Rosquinha Mabel",
    info: "Sabores 350g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [3.99, "Cavalo Preto", "2021/11/22"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "rosquinha-mabel-350g",
  },
  {
    id: 36,
    name: "Farofa Caseira",
    info: "Bom Gosto 400g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [5.99, "Cavalo Preto", "2021/11/22"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "",
    image: "farofa-caseira-bom-gosto-400g",
  },
  {
    id: 37,
    name: "Chocolate Arcor",
    info: "Sabores 80g",
    price: [
      [0.09, "Atacadão", "2021/12/21"],
      [0.09, "Big Blue", "2021/01/01"],
      [0.09, "Bramil", "2021/01/01"],
      [0.09, "Casa Friburgo", "2021/01/01"],
      [3.99, "Cavalo Preto", "2021/11/22"],
      [0.09, "Gama", "2021/01/01"],
      [0.09, "Pepê & Gabriel", "2021/01/01"],
      [0.09, "R&E Mercado", "2021/01/01"],
      [0.09, "Serra Azul", "2021/01/01"],
      [0.09, "Tio Dongo", "2021/01/01"],
    ],
    category: "barra",
    image: "chocolate-arcor-80g",
  },
]

export default products;