import Header from "./Header";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "4em" }}>{children}</div>
      <Footer />
      <style global="true">
        {`
      
      
      
      `}
      </style>
    </React.Fragment>
  );
};

export default Layout;
