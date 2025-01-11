import * as React from 'react'
import ReactDOM from 'react-dom'
import {StyledEngineProvider, createTheme, ThemeProvider} from '@mui/material/styles'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'


const theme = createTheme({
  
components: {
  MuiButton: {
  //   This is how we can override existing ootb styles
  // gbcolor is not working in this way.  need to check why.  commented out otherwise it will apply to all button tag.  since we are overriding MuiButton, root class which gets applied to all buttons.
    styleOverrides: {
      //root is the default class applied to button
      root: { //the root css class specified in button API page.  sytle in root will get applied to all buttons.
      color:"green",
      bgcolor:"pink",
      borderRadius:50,
      height:"15rem",
      width:"10rem"
      },
      //applies when button varient is outlined.  See how we can accept themes and ownerState (to access props)
      outlined: ({theme,ownerState}) => ({
          color:ownerState.size == "small" ? "red" : "#000",
          //see how custom property is accesed using ownerState.  See also the customColors defined below in palette section is also accessed.
          borderColor:ownerState.myCustomProp ? "red" : customColors.royleBlue
      })
    },
    //We can set default behaviour as below.  Here we disable ripple behavior of a button.  click on the button and you will not be able to see the ripple effect
    defaultProps: {
      disableRipple: true
    }
  }
},

  typography: {
    //This is how can can create a global style class, inder an ootb style class (typography in this example)
    // it is not taking BGColor from below css. need to check    
    blueTextClass: {
      color:"green",
      bgcolor:"pink",
      borderRadius:50,
      height:"15rem",
      width:"10rem"
    }
  },
  palette: {
    secondary: {
      main: "#FFA500"
    },
    customColors: {
      royleBlue: "#4169E1"
    }
  }

}) 

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <StyledEngineProvider>
<ThemeProvider theme={theme}> 
    <App />
</ThemeProvider>
</StyledEngineProvider>
  </StrictMode>,
)
