import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";

const Footer = () => {
  return (
    <Box sx={{ bgcolor: "background.paper", p: 6 }} component="footer">
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
        by Anupam Panwar
      </Typography>
    </Box>
  );
};

export default Footer;
