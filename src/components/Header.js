import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'   
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';


const theme = createMuiTheme({
    palette: {
      primary: { main: blue[500] }, // Purple and green play nicely together.
      secondary: { main: blue[500] }, // This is just green.A700 as hex.
    },
  });

const Header =  () =>{
    return (

        <MuiThemeProvider theme = {theme}>

           
            <AppBar position='static'>

                <ToolBar>

                    <Typography variant= 'title' color ='inherit'>
                        React
                    </Typography>

                </ToolBar>

            </AppBar>


        </MuiThemeProvider>

    )
}

export default Header;