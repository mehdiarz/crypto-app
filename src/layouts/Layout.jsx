import styles from "./Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>
          Mehdi Arezoomand | <a href="https://react.dev">React.dev</a>
        </p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed by Mehdi with Love</p>
      </footer>
    </>
  );
};

export default Layout;
