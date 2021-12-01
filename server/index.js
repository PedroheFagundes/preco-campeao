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

//Estabilishing the port
const PORT = process.env.PORT || 5000;

// Create a server running on chosen PORT
app.listen(PORT, () => {
  console.log(`server has start on PORT ${PORT}`);
});
