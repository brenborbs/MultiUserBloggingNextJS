import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <React.Fragment>
      <Header />
      <div style={{ marginTop: "3em" }}>{children}</div>
    </React.Fragment>
  );
};

export default Layout;
