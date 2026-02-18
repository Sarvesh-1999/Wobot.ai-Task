import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.title_container}>
      <h4>Cameras</h4>
      <p>Manage your cameras here.</p>
    </div>
  );
};

export default Header;
