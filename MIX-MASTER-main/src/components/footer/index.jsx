import { Box, Link, Typography } from "@mui/material";
import nftsimg from "../../assets/images/nfts.png";
import "../footer/footerstyle.css";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box className="container">
      <Box>
        <img style={{ marginBottom: "20px" }} src={nftsimg} alt="logo" />
        <Typography className="typoone">
          Welcome to xNFTs: Where AI Art Meets Exclusivity. Explore a curated
          collection of cutting-edge digital masterpieces, redefining the
          horizon for art enthusiasts. Elevate your experience with the pinnacle
          of quality and uniqueness in the world of NFTs.
        </Typography>
        <Typography className="lasttypo">2024 All Right Reserved</Typography>
      </Box>
      <Box className="secoundconatiner">
        <Box>
          <Typography className="legaltypo">Legal</Typography>
          <Link className="links" to="../404/index.js">
            <Typography className="faqtypo">FAQ</Typography>
          </Link>
          <Link className="links" to="../404/index.js">
            <Typography className="typotwo">About Us</Typography>
          </Link>
        </Box>
        <Box>
          <Typography className="legaltypo">Help</Typography>
          <Link className="links" to="../404/index.js">
            <Typography className="faqtypo">Terms of Service</Typography>
          </Link>
          <Link className="links" to="../404/index.js">
            <Typography className="typotwo">Legal Disclaimer</Typography>
          </Link>
        </Box>
        <Box className="lastbox">
          <Typography className="legaltypolast">Contact</Typography>
          <InstagramIcon className="iconstyle" />
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
