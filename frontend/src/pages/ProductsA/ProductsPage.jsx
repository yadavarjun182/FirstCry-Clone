import React from "react";
import styles from "./ProductsPage.module.css";

const ProductsPage = () => {
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
                  <div>sla</div>
                  <div>sdlma</div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
                  <div></div>
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
