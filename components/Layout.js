import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "70px" }}>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
