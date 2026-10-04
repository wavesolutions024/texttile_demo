import "./Footer.scss";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from "react-icons/fa";


const Footer = () => {
  return (
    <>
    <footer className="footer_parent parent">
      <div className="footer_cont cont">
        <div className="footer_brand">
          <a className="footer_logo" href="#" aria-label="Furnixar home">
           
            <span>Textile</span>
          </a>
          <p>
            Textile is a modern fabric template for an eCommerce website
            designed to help you create an impressive online store for your
            fabrics.
          </p>
          <div className="footer_socials" aria-label="Social media">
            <a href="#" aria-label="Facebook">
              <FaFacebookF aria-hidden="true" />
            </a>
            <a href="#" aria-label="Twitter">
              <FaTwitter aria-hidden="true" />
            </a>
            <a href="#" aria-label="Instagram">
              <FaInstagram aria-hidden="true" />
            </a>
            <a href="#" aria-label="LinkedIn">
              <FaLinkedinIn aria-hidden="true" />
            </a>
          </div>
        </div>

        <FooterLinks
          title="Sitemap"
          links={["About", "Team", "Portfolio", "Clients", "Error"]}
        />
        <FooterLinks
          title="Others"
          links={[
            "Shipping Method",
            "Payment Method",
            "My Account",
            "Coming Soon",
          ]}
        />
        <FooterLinks
          title="Shop"
          links={["Shop", "Product Single", "Cart", "Checkout", "Wishlist"]}
        />
        <FooterLinks
          title="Customer Service"
          links={["FAQs", "Terms & Condition", "Return Policy", "Contact"]}
        />
      </div>
    </footer>
    <div class="after_footer">
        <p>
            © 2026 Texttile demo. developed by <a href="https://wavesolutions.in/"target="_blank">wave solutions</a>
        </p>
      </div>
      </>
  );
};

const FooterLinks = ({ title, links }) => (
  <nav className="footer_links" aria-label={title}>
    <h2>{title}</h2>
    <ul>
      {links.map((link) => (
        <li key={link}>
          <a href="#">{link}</a>
        </li>
      ))}
    </ul>
  </nav>
);

export default Footer;