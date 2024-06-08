import { useState } from "react";
import OutlineHeader from "../common/OutlineHeader";
import TextInput from "../common/inputs/TextInput";
import TextArea from "../common/inputs/TextArea";
import Button from "../common/Button";

const Contact = () => {
  const [showFeedback, setshowFeedback] = useState(false);

  const onSendClick = () => {
    setshowFeedback(true);
    setTimeout(() => {
      setshowFeedback(false);
    }, 2000);
  };

  return (
    <div className="contact">
      <div
        className={
          showFeedback
            ? "contacted-fallback feedback-visible"
            : "contacted-fallback feedback-hidden"
        }
      >
        <p>Will get back very soon</p>
      </div>
      <OutlineHeader
        text="<Contact&nbsp;/>"
        style={{ width: "100%", textAlign: "center" }}
        id="contact-header"
      />
      <div className="contact-details-wrapper">
        <div className="contact-form">
          <TextInput label="Name" />
          <TextInput label="Email" />
          <TextInput label="Mobile" />
          <TextArea label="Message" />
          <Button text="Send" fullwidth onClick={onSendClick} />
        </div>
        <div className="my-contact-details">
          <div className="my-email">anilbg189@gmail.com</div>
          <div className="my-phone">8618131924</div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
