import Layout from "../components/Layout";
import Link from "next/link";
import ContactForm from "../components/form/ContactForm";

const Contact = () => {
  return (
    <Layout>
      <div className="container-fluid pt-4">
        <div className="wrapper">
          <h1>Contact Us</h1>
          <hr />
          <ContactForm />
        </div>
        <style jsx>
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
    </Layout>
  );
};

export default Contact;
