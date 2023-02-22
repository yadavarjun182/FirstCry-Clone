import React from "react";

const ProductsPage = () => {
  return (
    <div>
      <h1>ProductsPage</h1>
      <div
        style={{
          display: "flex",
          width: "80%",
          margin: "auto",
          gap: "20px",
        }}
      >
        <div>
          <img
            src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/12770969a.webp"
            alt="sam"
          />
        </div>

        <div>
          <h2>
            Dapper Dudes Full Sleeves Window Pane Checked 6 Piece Party Suit -
            Lemon Yellow
          </h2>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
