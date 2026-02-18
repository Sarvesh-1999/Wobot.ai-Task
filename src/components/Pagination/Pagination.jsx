import styles from "./Pagination.module.css";
const Pagination = ({ total, perPage, page, setPage }) => {

  const pages = Math.ceil(total / perPage);


  return (
    <div className={styles.pagination_container}>
      {Array.from({ length: pages }, (_, i) => (
        <button
          key={i}
          onClick={() => setPage(i + 1)}
          disabled={page === i + 1}
        >
          {i + 1}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
