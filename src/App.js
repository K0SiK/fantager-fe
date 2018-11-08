import React, {Component} from 'react';
import {Grid, Paper} from '@material-ui/core/'
import './App.css';
import Header from './components/Header';
import { createMuiTheme } from '@material-ui/core/styles';
import blue from '@material-ui/core/colors/blue';
import PrimarySearchAppBar from './components/menutest'

const style = {
  Paper : {padding : 20, marginTop: 20 ,marginBottom : 20, marginLeft: 10, marginRight: 10}
}

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

class App extends Component{
  render(){
    
    return(
      <div>
         

        <Grid container>
        <PrimarySearchAppBar/>
        <Grid item sm>
          <Paper style = {style.Paper}>
            Left
          </Paper>
        
        </Grid>

        <Grid item sm>
          <Paper style = {style.Paper}>
            Right
          </Paper>
        
        </Grid>
      
      
      </Grid>



      </div>
      



    
    
    )
  }
}

export default App;