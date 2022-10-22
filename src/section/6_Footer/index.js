import React from "react";
import { footer } from "./../../data";

function Footer() {
  return (
    <div id="connect">
      <div className="footer-main container">
        <div className="footer-title">
          <div className="footer-title-lets heading-first">Let's</div>
          <div className="footer-title-connect heading-second">Connect</div>
        </div>
        <div className="footer-connect">
          {footer.contact.map((item) => (
            <div className="footer-connect-email">
              <img src={item.img} />
              <div className="footer-connect-email-text">{item.value}</div>
            </div>
          ))}
        </div>
        <div className="footer-social-links">
          {footer.social.map((links) => (
            <div>
              <a href={links.link} target="_blank">
                <img src={links.img} alt={links.name} />
              </a>
            </div>
          ))}
        </div>
      </div>
      <div className="footer-quote container">
        <div className="footer-quote-text">{footer.quote.value}</div>
        <div className="footer-qoute-img">
          <img src={footer.quote.img} />
        </div>
        <div className="footer-quote-author">{footer.quote.author}</div>
      </div>
    </div>
  );
}

export default Footer;
