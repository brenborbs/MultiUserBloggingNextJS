import { allUsers, useState } from "../actions/user";
import Layout from "../components/Layout";
import Link from "next/link";
import { API } from "../config";
// import { withRouter } from "next/router";
// import { useState } from "react";

const Users = ({ users }) => {
  // const [userList, setUserList] = useState([]);
  return (
    <Layout>
      <div className="container">
        <h1>Users</h1>
        {users.map(user => (
          <Usersex {...user} key={user.id} />
        ))}
      </div>
    </Layout>
  );
};

const Usersex = ({ name, about }) => (
  <div>
    <p>{name}</p>
    <p>{about}</p>
  </div>
);

// getInitialProps can only be used in pages not components! same as componentWillMount
Users.getInitialProps = () => {
  return allUsers().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return (
        {
          users: data.users
        },
        console.log(users) // users undefined
      );
    }
  });
};

export default Users;

// import React, { Component } from "react";

// export default class Users extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       users: []
//     };
//   }

//   static async getInitialProps() {
//     return allUsers().then(data => {
//       if (data.error) {
//         console.log(data.error);
//       } else {
//         return {
//           users: data.users
//         };
//       }
//     });
//   }

// photoURL = users.username
//   ? `${API}/user/photo/${users.username}`
//   : "/static/images/avatar.jpg";

// renderUsers = users => (
//   <div className="row">
//     {users.map((user, i) => (
//       <div className="card col-md-4" key={i}>
//         <img
//           style={{ height: "200px", width: "auto" }}
//           className="img-thumbnail"
//           src={this.photoURL}
//           onError={i => (i.target.src = "/static/images/avatar.jpg")}
//           alt={user.name}
//         />
//         <div className="card-body">
//           <h5 className="card-title">{user.name}</h5>
//           <p className="card-text">{user.email}</p>
//           <Link
//             to={`/user/${user._id}`}
//             className="btn btn-raised btn-primary btn-sm"
//           >
//             View Profile
//           </Link>
//         </div>
//       </div>
//     ))}
//   </div>
// );

//   render() {
//     const { users } = this.state;
//     console.log(users);
//     return (
//       <Layout>
//         <div className="container">
//           <h2 className="mt-5 mb-5">Users</h2>
//         </div>
//       </Layout>
//     );
//   }
// }
