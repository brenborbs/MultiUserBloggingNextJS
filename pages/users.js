import { allUsers } from "../actions/user";
import Link from "next/link";
// import { withRouter } from "next/router";
import { useState } from "react";

const Users = () => {
  const users = useState([]);

  return <div></div>;
};

// getInitialProps can only be used in pages not components! same as componentWillMount
Users.getInitialProps = () => {
  return allUsers().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return {
        users: data.users
      };
    }
  });
};

export default Users;
