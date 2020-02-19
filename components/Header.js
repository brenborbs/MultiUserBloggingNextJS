import { useState } from "react";
import Link from "next/link";
import Router from "next/router";
import NProgress from "nprogress";
import { APP_NAME } from "../config";
import { signout, isAuth } from "../actions/auth";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  // NavbarBrand,
  Nav,
  NavItem,
  NavLink
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem
} from "reactstrap";
import ".././node_modules/nprogress/nprogress.css";
import ActiveLink from "../helpers/activeLink";
// import Search from "./blog/Search";

// Check Router(Routing) Events from NextJS docs
Router.onRouteChangeStart = url => NProgress.start();
Router.onRouteChangeComplete = url => NProgress.done();
Router.onRouteChangeError = url => NProgress.done();

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <React.Fragment>
      <Navbar className="navbar fixed-top navbar-expand-md navbar-dark">
        <Link href="/">
          <NavLink className="font-weight-bold" style={{ color: "white" }}>
            <h3 className="brand-text">{APP_NAME}</h3>
          </NavLink>
        </Link>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="navbar-nav ml-auto" navbar>
            {/* {isAuth() && (
              <NavItem>
                <a href="/user/crud/blog" className="btn btn-info text-light">
                  Write a blog
                </a>
              </NavItem>
            )} */}
            <React.Fragment>
              {/* <NavItem>
                <Link href="/search">
                  <NavLink>Search</NavLink>
                </Link>
              </NavItem> */}
              <NavItem>
                <ActiveLink activeClassName="active" href="/blogs">
                  <a className="nav-link">Blogs</a>
                </ActiveLink>
              </NavItem>
              <NavItem>
                <ActiveLink activeClassName="active" href="/contact">
                  <a className="nav-link">Contact</a>
                </ActiveLink>
              </NavItem>
            </React.Fragment>

            {isAuth() && isAuth().role === 0 && (
              <NavItem>
                <Link href="/user">
                  <NavLink>{`${isAuth().name}'s Dashboard`}</NavLink>
                </Link>
              </NavItem>
            )}

            {isAuth() && isAuth().role === 1 && (
              <NavItem>
                <ActiveLink activeClassName="active" href="/admin">
                  <a className="nav-link">{`${isAuth().name}'s Dashboard`}</a>
                </ActiveLink>
              </NavItem>
            )}
          </Nav>
          <Nav className="navbar-nav ml-auto" navbar>
            {!isAuth() && (
              <React.Fragment>
                <NavItem>
                  <ActiveLink activeClassName="active" href="/signin">
                    <a className="nav-link">Sign in</a>
                  </ActiveLink>
                </NavItem>
                <NavItem>
                  <Link href="/signup">
                    <NavLink className="btn btn-head text-light">
                      Register
                    </NavLink>
                  </Link>
                </NavItem>
              </React.Fragment>
            )}
            {isAuth() && (
              <NavItem>
                <NavLink
                  style={{ cursor: "pointer" }}
                  onClick={() => signout(() => Router.replace(`/signin`))}
                >
                  <i className="fa fa-sign-out mr-2" aria-hidden="true"></i>
                  Signout
                </NavLink>
              </NavItem>
            )}
          </Nav>
        </Collapse>
      </Navbar>
      {/* <Search /> */}
      <style jsx>{``}</style>
    </React.Fragment>
  );
};

export default Header;
