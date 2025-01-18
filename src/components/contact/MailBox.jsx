import  { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

const MailBox = () => {
  const form = useRef();
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [message, setMessage] = useState("");

  const Service_ID = import.meta.env.VITE_SERVICE_ID;
  const Template_ID = import.meta.env.VITE_TEMPLATE_ID;
  const Public_Key = import.meta.env.VITE_PUBLIC_KEY;
 
  const handleSubmit = (e) => {
    e.preventDefault();
   
  
    const templateParams = {
      from_name: name,
      from_email: mail,
      message: message,
      to_name: "Shashi",
    };

    emailjs.send(Service_ID, Template_ID, templateParams, Public_Key).then(
      () => {
        setName("");
        setMail("");
        setMessage("");
        console.log("SUCCESS!");
      },
      (error) => {
        console.log("FAILED...", error.text);
      }
    );
  };

  return (
    <div className="sm:w-1/3">
      <form ref={form} onSubmit={handleSubmit} className="form-box">
        <h1 className="text-lg font-bold">Drop me a mail.</h1>
        <input
          type="text"
          name="name"
          value={name}
          placeholder="name*"
          onChange={(e) => setName(e.target.value)}
          className="input-field"
          required
        />

        <input
          type="email"
          name="email"
          placeholder="email*"
          value={mail}
          onChange={(e) => setMail(e.target.value)}
          className="input-field"
          required
        />

        <textarea
          name="message"
          value={message}
          placeholder="Enter your message*"
          onChange={(e) => setMessage(e.target.value)}
          className="input-field"
          required
        />
        <button type="submit" className="sub-btn text-white">
          Send
        </button>
      </form>
    </div>
  );
};

export default MailBox;
