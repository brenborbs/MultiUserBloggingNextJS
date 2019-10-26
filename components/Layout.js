import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "70px" }}>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
