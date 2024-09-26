import React from "react"
import { Typography, Button, Box, Paper } from "@mui/material"
import { Link } from "react-router-dom"

const Home: React.FC = () => {
  return (
    <Paper sx={{ padding: 4 }}>
      <Typography
        variant="h4"
        gutterBottom
      >
        Tere tulemast!
      </Typography>

      <Typography
        variant="body1"
        paragraph
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        molestie turpis libero, sit amet consectetur justo viverra dictum. Cras
        blandit ligula odio, a pellentesque libero bibendum ut. Mauris aliquam,
        mauris at lobortis lacinia, sem diam vehicula massa, vel egestas augue
        dui vitae nulla.
      </Typography>

      <Typography
        variant="body2"
        paragraph
      >
        Etiam facilisis odio cursus arcu laoreet, at mollis enim gravida.
        Phasellus ut nibh sed dui imperdiet faucibus.
      </Typography>

      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          component={Link}
          to="/login"
        >
          Alusta siit
        </Button>
      </Box>
    </Paper>
  )
}

export default Home
