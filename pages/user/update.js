import Layout from "../../components/Layout";
import Private from "../../components/auth/Private";
import ProfileUpdate from "../../components/auth/ProfileUpdate";
import Link from "next/link";

const UserProfileUpdate = () => {
  return (
    <Layout>
      <Private>
        <div className="forms-margin">
          <div className="wrapper">
            <ProfileUpdate />
          </div>
          <style>
            {`
          .wrapper {
            border-radius: 5px;
    background-color: #fff;
    width: 100%;
    max-width: 620px;
    padding: 15px;
    margin: 0 auto;
          }
          `}
          </style>
        </div>
      </Private>
    </Layout>
  );
};

export default UserProfileUpdate;
