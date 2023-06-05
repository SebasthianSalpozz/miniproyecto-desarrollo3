import React from "react";
import {Box, Button, Container, Grid, Paper, Stack, TextField, Typography} from "@mui/material";



export const StartPage: React.FC<{}>= () =>{
  return(
    <body>
      <Container maxWidth={"sm"}>
        <Button variant={"contained"} type={"submit"} href={"/login"}>
          start
        </Button>
      </Container>

    </body>
  );
};