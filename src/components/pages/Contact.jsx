import user from "../../assets/images/user.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-card">
        <img src={user} alt="user" className="contact-user"></img>

        <div className="contact-text-container">
          <p className="contact-p" id="contact-p-text">
            This website allows users to search books from Google book database.
            Books are searched with book's title, author, publisher, etc. and
            displayed in relevant order.
            <br />
            The informations of searched books are fetched through Netlify
            Functions.
            <br />
            <br />
            Designed and developed by a web developer, Moohyun Kang.
          </p>

          <p className="contact-p" id="contact-p-anchor">
            <a
              href="https://github.com/moohka"
              target="_blank"
              rel="noreferrer"
              className="contact-p-anchor-item"
            >
              GitHub
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://codepen.io/moohka"
              target="_blank"
              rel="noreferrer"
              className="contact-p-anchor-item"
            >
              CodePen
            </a>
            &nbsp;|&nbsp;
            <a
              href="mailto:moohka@hotmail.com"
              className="contact-p-anchor-item"
            >
              Email
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
