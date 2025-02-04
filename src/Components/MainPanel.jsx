import React, { useEffect, useState } from "react";
import Search from "../assets/Search.svg";
import useFetch from "../hooks/useFetch";
import Edit from "../assets/Edit.svg";
import Delete from "../assets/Delete.svg";
import styles from "../styles/MainPanel.module.css";

const MainPanel = () => {
  const [page, setPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const [itemsPerPage, setItemsPerPage] = useState(10);

  const { data } = useFetch(
    `https://mammoth-testing-api.webinone.com/items?page=${page}&limit=${itemsPerPage}`
  );

  const filteredData =
    data?.Items?.filter((item) =>
      item.Name.toLowerCase().includes(searchTerm.toLowerCase())
    ) || [];

  return (
    <section className={styles.mainPanel}>
      <h1 className={styles.title}>Product List</h1>
      <p className={styles.description}>
        Review and manage the products available on the marketplace.
      </p>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button className={styles.buttonActive}>
          <img src={Search} alt="search" />
        </button>
      </div>
      <table className={styles.table}>
        <thead className={styles.tableHead}>
          <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Category</th>
            <th>Price</th>
            <th>Country</th>
            <th>Marketplace Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody className={styles.tableBody}>
          {filteredData.slice(0, itemsPerPage).map((item) => (
            <tr key={item.Id}>
              <td className={styles.imageContainer}>
                {item.Image?.url ? (
                  <img src={item.Image?.url} alt={item.Name} />
                ) : (
                  <div className={styles.placeholderImage}></div>
                )}
              </td>
              <td>{item.Name}</td>
              <td>{item.Category}</td>
              <td>{`$${item.ProductPrice}`}</td>
              <td>{item.Country.replace(/[\[\]\n\"]/g, "").trim()}</td>
              <td>{item.Status}</td>
              <td className={styles.action}>
                <button>
                  <img src={Edit} alt="edit" />
                </button>
                <button>
                  <img src={Delete} alt="delete" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className={styles.pagination}>
        <div className={styles.itemsPerPage}>
          <p>Items per page:</p>
          <select
            value={itemsPerPage}
            onChange={(e) => {
              setItemsPerPage(Number(e.target.value));
              setPage(1);
            }}
          >
            {[...Array(10)].map((_, i) => (
              <option key={i + 1} value={i + 1}>
                {i + 1}
              </option>
            ))}
          </select>
        </div>
        <div className={styles.pageInfo}>
          <span>
            Showing {(page - 1) * itemsPerPage + 1}-
            {Math.min(
              page * itemsPerPage,
              data?.Pagination?.TotalItemsCount || 0
            )}
            of {data?.Pagination?.TotalItemsCount || 0} items
          </span>
        </div>
        <div className={styles.pageNavigation}>
          <button
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >{`<`}</button>
          <input type="text" value={page} readOnly />
          <button
            onClick={() => setPage(page + 1)}
            disabled={
              page * itemsPerPage >= (data?.Pagination?.TotalItemsCount || 0)
            }
          >
            {`>`}
          </button>
        </div>
      </div>
      <div>
        <button className={styles.buttonSubmit}>SUBMIT</button>
      </div>
    </section>
  );
};

export default MainPanel;
