import React from "react";
import styles from "./ProductsPage.module.css";
import data from "../../";

const ProductsPage = () => {
  const prodsArr = [
    {
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12111917a.webp",
      title:
        "Ed-a-Mamma Sustainable Cotton Knit Full Sleeves Tie Dye Embossed Sweatshirt - Green",
      mrp: "1149",
      price: "907",
      color: "9adac9",
      totimg: "3",
      brand: "Angel & Rocket",
      gender: "Boy",
      category: "T-shirts",
      id: 1,
    },
    {
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11862373a.webp",
      title: "Ed a Mamma Full Sleeves Color Blocked Sweatshirts - Off White",
      mrp: "1099",
      price: "879",
      color: "edece8",
      totimg: "3",
      brand: "Anthrilo",
      gender: "Boy",
      category: "T-shirts",
      id: 2,
    },
    {
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11802780a.webp",
      title: "Babyhug Cotton Knit Full Length Text Printed Lounge Pant - Blue",
      mrp: "499",
      price: "394",
      color: "132f58",
      totimg: "4",
      brand: "Honeyhap",
      gender: "Boy",
      category: "Pajamas",
      id: 3,
    },
    {
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11496528a.webp",
      title: "Pine Kids Acrylic Full Sleeves Solid Sweater - Red",
      mrp: "1299",
      price: "1026",
      color: "c63a3b",
      totimg: "6",
      brand: "Pine Kids",
      gender: "Boy",
      category: "T-shirts",
      id: 4,
    },
    {
      image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/11626864a.webp",
      title:
        "Pine Kids Biowashed Full Sleeves Sweat Shirt Backpack Print - Green",
      mrp: "899",
      price: "710",
      color: "707146",
      totimg: "5",
      brand: "Pine Kids",
      gender: "Boy",
      category: "T-shirts",
      id: 5,
    },
  ];

  return (
    <>
      <h1>ProductsPage</h1>
      <div className={styles.container}>
        <div className={styles.top}></div>
        <div className={styles.main}>
          <div className={styles.main_inner}>
            <div className={styles.left_sec}></div>

            <div className={styles.right_sec}>
              <div className={styles.right_heading2}>
                <div className={styles.right_heading}>
                  <div className={styles.head}>heading</div>
                  <div className={styles.sortby_dropdown}>
                    <div>sort by</div>
                  </div>
                </div>
                <div>
                  Shop from 66309 Sets & Suits online at FirstCry.com with
                  prices starting at Rs. 113.
                </div>
              </div>

              <div className={styles.sorthead2}>
                <div className={styles.sorthead}>Gender: Boy</div>
                <div className={styles.clear_all}>Clear All</div>
              </div>

              <div className={styles.products_sec}>
                <div className={styles.prods_sec}>
                  {/* image:
        "https://cdn.fcglcdn.com/brainbees/images/products/438x531/12111917a.webp",
      title:
        "Ed-a-Mamma Sustainable Cotton Knit Full Sleeves Tie Dye Embossed Sweatshirt - Green",
      mrp: "1149",
      price: "907",
      color: "9adac9",
      totimg: "3",
      brand: "Angel & Rocket",
      gender: "Boy",
      category: "T-shirts",
      id: 1, */}
                  <div>
                    <div className={styles.imgdim}>
                      <img
                        src="https://cdn.fcglcdn.com/brainbees/images/products/438x531/12111917a.webp"
                        alt=""
                        width="100%"
                      />
                    </div>
                    <div className={styles.prodtitle}>
                      <h3>
                        Ed-a-Mamma Sustainable Cotton Knit Full Sleeves Tie Dye
                        Embossed Sweatshirt - Green
                      </h3>
                    </div>

                    <div className={styles.bothprices}>
                      <div className={styles.prodprice}>
                        <p>₹ 907</p>
                      </div>

                      <div className={styles.prodprice2}>
                        <strike>
                          <p>₹ 1030</p>
                        </strike>
                      </div>
                    </div>

                    <div>
                      <h3>Get it by Tomorrow 8pm</h3>
                    </div>
                    <div className={styles.addbtn}>
                      <button>
                        <h3>ADD TO CART</h3>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductsPage;
