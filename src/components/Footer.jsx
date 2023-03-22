import { fb, insta, tw, yt } from "../assets";
import "../styles/footer.scss";

const Footer = () => {
  return (
    <footer>
      <div className="social">
        <img src={fb} alt="" />
        <img src={insta} alt="" />
        <img src={tw} alt="" />
        <img src={yt} alt="" />
      </div>
      <p>© 2023 CineMille by Simone Mazza</p>
    </footer>
  );
};

export default Footer;
