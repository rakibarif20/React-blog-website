import React from "react";
import ContactFrom from "../../components/contactForm";
import ContactHeader from "../../components/contactHeader";
import ContactInfo from "../../components/contactInfo";
import PageHeaderContent from "../../components/pageHeaderContent";

const Contact = () => {
  return (
    <>
      <PageHeaderContent
        bgImg="https://images.pexels.com/photos/1038916/pexels-photo-1038916.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        title="contact us"
      />
      <ContactHeader />
      <ContactInfo />
      <ContactFrom />
    </>
  );
};

export default Contact;
