import styles from "./Footer.module.css";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const footerStyles = "card text-white mb-3";

const ColoredLine = ({ color }) => (
    <hr
        style={{
            color: 'white',
            backgroundColor: 'white',
            height: 0.25
        }}
    />
);

const Footer = () => {
  return (
    <div className={`${footerStyles} ${styles.bgDark}`}>
      <div className="card-body">
        <div className="mt-5 mx-5 px-4">
          <h2 className={styles.robotoFont}>Brand Name</h2>
        </div>
        <div className="row mt-0">
          <div className="col-lg-1"></div>
          <div className="col-lg-3">
            <h4 className="my-3">INFORMATION</h4>
            <p className={styles.lineheight}>ABOUT US</p>
            <p className={styles.lineheight}>FAQS</p>
            <p className={styles.lineheight}>REFUND POLICY</p>
            <p className={styles.lineheight}>TERMS & CONDITIONS</p>
          </div>
          <div className="col-lg-3">
            <h4 className="my-3" >SUPPORT</h4>
            <a className="text-light" href="/">hello@sample.com</a>
          </div>
          <div className="col-lg-3">
            <h4 className="my-3">NEWSLETTER</h4>
            <p>Subscribe to recieive updates, access deals and more</p>
            <input className="rounded w-100 p-1" placeholder="Enter email address" />
            <button className="btn bg-success my-3">SUBSCRIBE</button>
          </div>
          <div className="col-lg-2"></div>
        </div>
        <div className="mx-5 px-4">
          <FacebookIcon 
              className="m-3"
          />
          <TwitterIcon className="m-3"/>
          <InstagramIcon className="m-3"/>
        </div>
        <div className=' mx-5'><ColoredLine /></div>
        <div className="row">
        <div className="col-lg-1"></div>
        <div className="col-lg-8"><p >Copyright 2022</p></div>
        <div className="col-lg-2"><p className="ml-auto">PRIVACY POLICY</p></div>
        <div className="col-lg-1"></div>
        
        
            
        </div>
        
      </div>
    </div>
  );
};

export default Footer;
