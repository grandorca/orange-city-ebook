import user from "../../assets/images/user.png";

const Contact = () => {
  return (
    <div className="contact">
      <div className="contact-card">
        <img src={user} alt="user" className="contact-user"></img>

        <div className="contact-text-container">
          <p className="contact-p" id="contact-p-text">
            &nbsp;Designed and developed by a web developer, Moohyun Kang.
            <br />
            <br />
            &nbsp;This website demonstrates back-end development skills handling
            of data.asdfkjsd;ljfkjasd
          </p>
          <p className="contact-p" id="contact-p-anchor">
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-p-anchor-item"
            >
              GitHub
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
              className="contact-p-anchor-item"
            >
              CodePen
            </a>
            &nbsp;|&nbsp;
            <a
              href="https://www.google.com"
              target="_blank"
              rel="noreferrer"
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
