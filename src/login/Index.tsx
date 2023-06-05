import React from "react";
import {Button, Container, Grid, Paper, Stack} from "@mui/material"
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import { TextField } from "@mui/material";

type LoginType ={
    username: string;
    email: string;
    password: string;
}
export const LoginPage: React.FC<{}>= () =>{
    const[loginData, setLoginData]= React.useState<LoginType>({
        username:"",
        email: "",
        password:""
    });

    const dataLogin =(e: React.ChangeEvent<HTMLInputElement>)=>{
        setLoginData({...loginData, [e.target.name]:e.target.value})
    }

    const handleSubmit =(e: React.FormEvent<HTMLInputElement>)=>{
        e.preventDefault();
        console.log(loginData)
        window.location.href = "/scaper"
    }
    return(
        <Container maxWidth = "sm">
            <Grid
                container
                direction="column"
                alignItems = "center"
                justifyContent="center"
                sx={{minHeight: "100vh"}}>
                <Grid item>
                    <Paper sx={{padding:"1.2em", borderRadius:"0.5em"}}>
                        <Typography variant ="h4" sx ={{mt: 2, mb: 2}}>
                            Log In
                        </Typography>
                        <Box component = "form" onSubmit={handleSubmit}>
                            <Stack spacing={2}>
                                <TextField                                      
                                    fullWidth
                                    name="username"
                                    margin = "normal"
                                    type = "text" 
                                    label = "User Name" 
                                    required
                                    onChange={dataLogin}/>
                                <TextField                                      
                                    fullWidth
                                    name="email"
                                    margin = "normal"
                                    type = "text" 
                                    label = "Email" 
                                    onChange={dataLogin}
                                    required
                                />
                                <TextField                                
                                    fullWidth
                                    name="password"
                                    margin = "normal"
                                    type="password" 
                                    label = "Password" 
                                    required
                                    onChange={dataLogin}/>
                                <Button fullWidth type="submit" variant= "contained" sx = {{mt:2, mb:2}} >
                                    Iniciar Sesion
                                </Button>
                            </Stack>

                        </Box>
                    </Paper>
                </Grid>
            </Grid>

        </Container>
    );
};
