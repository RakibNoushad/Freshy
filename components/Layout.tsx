import Nav from "./Nav";
import Meta from "./Meta";
import Footer from "./Footer";
import Notify from "../components/Notify";
import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <Nav />
      <Notify />
      <div className={styles.container}>
        <main className={styles.main}>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
