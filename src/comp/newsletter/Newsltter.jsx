import "./Newsletter.scss";
import { BsEnvelopePaper } from "react-icons/bs";
const Newsltter = () => {
  return (
    <>
      <div class="newsletter_parent parent">
        <div class="newsletter_cont cont">
          <span>
            <BsEnvelopePaper />
          </span>
          <h1>Newsletter</h1>
          <p>
            Stay in the loop with exclusive offers and updates. Subscribe to our
            newsletter for the latest trends and promotions delivered straight
            to your inbox.
          </p>
          <div class="input_section">
           <input type="text" placeholder="Enter Your Email Addres"/>
           <div class="btn">
            Subscribe
           </div>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Newsltter;
