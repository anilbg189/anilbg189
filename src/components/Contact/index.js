import React from "react";
import OutlineHeader from "../common/OutlineHeader";
import TextInput from "../common/inputs/TextInput";
import TextArea from "../common/inputs/TextArea";
import Button from "../common/Button";

const Contact = () => {
  return (
    <div className="contact">
      <OutlineHeader
        text="<Contact&nbsp;/>"
        style={{ width: "100%", textAlign: "center" }}
      />
      <div className="contact-form">
        <TextInput label="Name" />
        <TextInput label="Email" />
        <TextInput label="Mobile" />
        <TextArea label="Message" />
        <Button text="Send" fullwidth />
      </div>
    </div>
  );
};

export default Contact;
