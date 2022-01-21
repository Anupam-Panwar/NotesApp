import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box sx={{ p: 6 }} component="footer">
      <Typography variant="h6" align="center" gutterBottom>
        Notes App
      </Typography>
      <Typography
        variant="subtitle1"
        align="center"
        color="text.secondary"
        component="p"
      >
        Made with{" "}
        <img
          src="https://s.w.org/images/core/emoji/13.1.0/svg/2764.svg"
          alt="heart"
          style={{ height: "20px" }}
        />{" "}
        by <a href="https://www.linkedin.com/in/anupam-panwar/" style={{textDecoration: 'none', color:"#5b586f"}}>Anupam Panwar</a>
      </Typography>
    </Box>
  );
};

export default Footer;
