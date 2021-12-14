const express = require("express");
const cors = require("cors");
const pool = require("./db");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// ROUTES //
// Create a product
app.post("/products", async (req, res) => {
  try {
    const { product_name, product_info, product_category, product_image } =
      req.body;
    const newProduct = await pool.query(
      `
      INSERT INTO 
          products (product_name, product_info, product_category, product_image)
      VALUES
          ($1, $2, $3, $4)
      RETURNING
          *
      `,
      [product_name, product_info, product_category, product_image]
    );

    res.json(newProduct.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all products
app.get("/products", async (req, res) => {
  try {
    const allProducts = await pool.query(`
      SELECT
          *
      FROM
          products
    `);
    res.json(allProducts.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a specific product
app.get("/products/:product_name", async (req, res) => {
  try {
    const { product_name } = req.params;
    const product = await pool.query(
      `
      SELECT
          *
      FROM
          products
      WHERE
          product_name = $1
    `,
      [product_name]
    );

    res.json(product.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a product
app.put("/products/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const { product_name, product_info, product_category, product_image } =
      req.body;

    const updateProduct = await pool.query(
      `
      UPDATE
          products
      SET
          product_name = $2,
          product_info = $3,
          product_category = $4,
          product_image = $5
      WHERE
          product_id = $1
    `,
      [product_id, product_name, product_info, product_category, product_image]
    );

    res.json("Produto atualizado!");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a product
app.delete("/products/:product_id", async (req, res) => {
  try {
    const { product_id } = req.params;
    const deleteProduct = await pool.query(
      `
      DELETE FROM
          products
      WHERE
          product_id = $1
    `,
      [product_id]
    );

    res.json("Produto deletado!");
  } catch (err) {
    console.error(err.message);
  }
});

// Create an item
app.post("/itemsnovafriburgo", async (req, res) => {
  try {
    const { market_name, product_name, item_price, item_start_date, item_expire_date } =
      req.body;
    const newItem = await pool.query(
      `
      INSERT INTO 
          items_nova_friburgo (market_name, product_name, item_price, item_start_date, item_expire_date)
      VALUES
          ($1, $2, $3, CAST($4 AS Date), CAST($5 AS Date))
      RETURNING
          *
      `,
      [market_name, product_name, item_price, item_start_date, item_expire_date]
    );

    res.json(newItem.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});

// Get all items
app.get("/itemsnovafriburgo", async (req, res) => {
  try {
    const allItems = await pool.query(`
      SELECT
          *
      FROM
          items_nova_friburgo
    `);
    res.json(allItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Get a specific item
app.get("/itemsnovafriburgo/:product_name", async (req, res) => {
  try {
    const { product_name } = req.params;
    const item = await pool.query(
      `
      SELECT
          *
      FROM
          items_nova_friburgo
      WHERE
          product_name = $1
    `,
      [product_name]
    );

    res.json(item.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Update a item
app.put("/itemsnovafriburgo/:item_id", async (req, res) => {
  try {
    const { item_id } = req.params;
    const { market_name, product_name, item_price, item_start_date, item_expire_date } =
      req.body;

    const updateItem = await pool.query(
      `
      UPDATE
          items_nova_friburgo
      SET
          market_name = $2,
          product_name = $3,
          item_price = $4,
          item_start_date = $5,
          item_expire_date = $6
      WHERE
          item_id = $1
    `,
      [item_id, market_name, product_name, item_price, item_start_date, item_expire_date]
    );

    res.json("Item atualizado!");
  } catch (err) {
    console.error(err.message);
  }
});

// Delete a item
app.delete("/itemsnovafriburgo/:item_id", async (req, res) => {
  try {
    const { item_id } = req.params;
    const deleteItem = await pool.query(
      `
      DELETE FROM
          items_nova_friburgo
      WHERE
          item_id = $1
    `,
      [item_id]
    );

    res.json("Item deletado!");
  } catch (err) {
    console.error(err.message);
  }
});

// Get active items
app.get("/activeitems", async (req, res) => {
  try {
    const activeItems = await pool.query(`
      SELECT
        *,
        left((cast(inf.item_price as varchar)), -3) as reais,
        right((cast(inf.item_price as varchar)), 2) as cents,
        TO_CHAR(inf.item_expire_date , 'DD/MM') as formated_expire_date,
        case extract(dow from inf.item_expire_date)
          when 0 then 'DOMINGO'
          when 1 then 'SEGUNDA'
          when 2 then 'TERÇA'
          when 3 then 'QUARTA'
          when 4 then 'QUINTA'
          when 5 then 'SEXTA'
          when 6 then 'SABADO'
        end day_name,
        case inf.market_name
          when 'Atacadão' then 'atacadao'
          when 'Big Blue' then 'bigblue'
          when 'Bramil' then 'bramil'
          when 'Casa Friburgo' then 'casafriburgo'
          when 'Cavalo Preto' then 'cavalopreto'
          when 'Gama' then 'gama'
          when 'Pepê & Gabriel' then 'pepe&gabriel'
          when 'R&E Mercado' then 'r&emercado'
          when 'Serra Azul' then 'serraazul'
          when 'Tio Dongo' then 'tiodongo'
        end market_logo
      FROM
        items_nova_friburgo inf
        JOIN products p ON
          inf.product_name = p.product_name
      WHERE
        item_expire_date >= CAST(now() AS Date)
        and item_start_date <= CAST(now() AS Date)
      order by
        inf.product_name,
        inf.item_price
    `);
    res.json(activeItems.rows);
  } catch (err) {
    console.error(err.message);
  }
});

// Create a feedback
app.post("/feedback", async (req, res) => {
  try {
    const { feedback_description } =
      req.body;
    const newFeedback = await pool.query(
      `
      INSERT INTO 
          feedback (created_at, feedback_description)
      VALUES
          (now(), $1)
      RETURNING
          *
      `,
      [feedback_description]
    );

    res.json(newFeedback.rows[0]);
  } catch (err) {
    console.error(err.message);
  }
});
//Estabilishing the port
const PORT = process.env.PORT || 5000;

// Create a server running on chosen PORT
app.listen(PORT, () => {
  console.log(`server has start on PORT ${PORT}`);
});
