
import FavoriteBorderRoundedIcon from "@mui/icons-material/FavoriteBorderRounded";
import "./Contact.css";
import SocialMedia from "./SocialMedia";
import MailBox from "./MailBox";
const Contact_Me = () => {
  

  return (
    <div className="contact-section" id="contact">
      <div className="side-circles -left-20"></div>
      <div className="side-circles -right-12 "></div>

      <h1 className="heading">Get in touch</h1>
      <div className="outer-div">
        <SocialMedia/>
        <MailBox/>
        
      </div>
      <hr></hr>
      <p className="my-2">
        Thankyou for visiting <FavoriteBorderRoundedIcon />
      </p>
    </div>
  );
};

export default Contact_Me;
