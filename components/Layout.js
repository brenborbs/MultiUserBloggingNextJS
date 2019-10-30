import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div>{children}</div>
      <Footer />
    </React.Fragment>
  );
};

export default Layout;
