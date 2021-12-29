import * as React from "react";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CssBaseline from "@mui/material/CssBaseline";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import ButtonGroup from "@mui/material/ButtonGroup";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import AddNote from '../AddNote/AddNote';

const cards = [1, 2, "I have to make frontend by 27 Dec", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,21,22,23,24];

const theme = createTheme();

export default function Album() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <main className="bg">
        <AddNote />
        <Container sx={{ py: 8 }} maxWidth="md">
          {/* End hero unit */}
          <Grid container spacing={4}>
            {cards.map((val,index) => (
              <Grid item key={val} xs={12} sm={6} md={4}>
                <Card
                  sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <CardContent sx={{ flexGrow: 1 }}>
                    <Typography gutterBottom variant="h5" component="h2">
                      {index}
                    </Typography>
                    <Typography>
                      {val}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <ButtonGroup
                      variant="text"
                      aria-label="outlined button group"
                      fullWidth={true}
                    >
                      <Button >
                        <EditIcon />
                      </Button>
                      <Button>
                        <DeleteIcon />
                      </Button>
                    </ButtonGroup>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
       
      </main>
      {/* Footer */}
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
          Made with <FavoriteBorderIcon /> by Anupam Panwar
        </Typography>
      </Box>
      {/* End footer */}
    </ThemeProvider>
  );
}
