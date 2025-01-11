import {Button, Checkbox, Radio, RadioGroup, FormControlLabel, FormControl, FormLabel, Autocomplete, TextField, Paper, Chip, chipClasses } from '@mui/material'
import Box from '@mui/material/Box'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import { styled } from '@mui/material/styles'
import { useState } from 'react'


const MySpecialityBox = props => {
  return (
    <Box>
      label: {props.label}
      {props.children}    
    </Box>
  )
}

const MyStyledButton = styled(Button)({
  color: "red",
  backgroundColor: "blue",
  borderRadius: 10,
  padding:8
})

const MyNewStyledButton = styled(Button)(({theme}) => ({
  color: theme.palette.primary.main,
  backgroundColor: theme.palette.secondary.main,
  borderRadius: 10,
  padding:8
}))


// See how the background color is not getting applied from customColors using the sx syntax.  To make it work see how we have to use unstable_sx as in MyNew2StyledButton
const MyNew1StyledButton = styled(Button)({
  color: "red",
  backgroundColor: "customColors.royleBlue",
  borderRadius: 10,
  padding:8
})

const MyNew2StyledButton = styled(Button)(({theme}) => theme.unstable_sx({
  color: "red",
  backgroundColor: "customColors.royleBlue",
  borderRadius: 10,
  padding:8
}))

//Using ownerStte we can accepts the props passed from the usage of the tag.
const MyNew3StyledButton = styled(Button)(({theme, ...ownerState}) => theme.unstable_sx({
  color: ownerState.size == "small" ? "red" : "yellow",
  backgroundColor: "customColors.royleBlue",
  borderRadius: 10,
  padding:8
}))


const BlueClass = {color: "red",
  backgroundColor: "blue",
  borderRadius: 10,
  padding:8}

  const MyReusableComponent = props => {
    return (
      <Button sx={{color: props.color, bgcolor: props.color == "#FFF" ? "#000": "blue"}}>
        {props.children}
      </Button>
    )
  }

  const CustomPaper = (props) => {
    //in the props passes to CustomPaper, there could be an sx also, below code flattens sx prop and then then other props passed together into otherProps.
    const {sx, ...otherProps} = props
    return (
      <Paper {...otherProps} sx={{...sx, 
      bgcolor:"purple",
      "& .MuiAutocomplete-option": {
        color: "#FFF",
        fontFamily:"Verdana",
        fontSize:"2.5rem"
      }}}>
            {props.children}
      </Paper>
    )
  }

  const CustomChip = (props) => {
    const {sx, ...otherProps} = props
    return (
      <Chip {...otherProps} sx={{...sx,
        color:"blue",
        bgcolor:"green",
        //accessing lable on each of the lable using the .MuiChil-lable class which is found using inspector on the chilp lable element.
        "& .MuiChip-label":{
          color:"#FFF",
          fontFamily: "Verdana",
          fontSize:"1.5rem"
        }
      }}>
            {props.children}
      </Chip>
    )
  }

function StylingDemo() {
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const[value, setValue] = useState([]);
  // const [open, setOpen] = useState(false)

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const options=["Apple", "Banana", "Peer", "Orange"]
  

  return (
    <>
      <h1>Hello World</h1>
    {/*<Button onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button>*/}
    {/*<Button component="a" variant="contained">My Button</Button>*/}
    {/* console.log prints to browser console and not to vscode debug console */} 
    {/* <Button sx={{bgcolor: "green"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button>*/}

{/*Here BG color is the shorhand of css property background-color.  For other sx shorthands for css properties refer to https://mui.com/system/properties/ */}
    {/*<MySpecialityBox label="Speciality Box"><Button sx={{bgcolor: "green",color: "black"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button></MySpecialityBox>*/}

{/* Here secondary color from theme.palatte.secondary.main is applied.  This will work even when ThemeProvider tag is applied around <App /> in main.jsx 
m is the shortcut of margin css property and 50 will translate to 50 pixels*/}
    {/*<Button sx={{color: "secondary", bgcolor: "purple", m: 50}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button>*/}

{/* instead of seatting font weight, font size, font etc, we can specify a certain theme property.  And all the properties under a the specifi theme will be applied
like below, where we have specified that all the setting under theme.typography.h2 to be applied. */}
    {/* <Button sx={{bgcolor: "purple", typography: "h2"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button> */}

{/* properties from themes can also be applied diretly like below.  eg how theme.typography.h1.fontSize is applied .similar color can be given as warning.main to apply 
from theme.palette.warning.main ]]*/}
    {/* <Button sx={{bgcolor: "purple", fontSize: "h1.fontSize"}} onClick={() => console.log("Button Clicked")} variant="contained">My Button</Button> */}

{/* theme can also be accessed as a syntax as below using anonymos funtion. */}
    {/* <Button sx={{
      bgcolor: (theme) => theme.palette.secondary.main, 
      fontSize: "1rem"
      }} 
      onClick={() => console.log("Button Clicked")} 
      variant="contained">
      My Button
      </Button> */}

{/* value that we have given for borderRadius will be multipliled by the value in theme.shape.borderRadius which is 4 by default. so if we give 2 the final value will be 2x4=8 pixels 
if we want exact values we have to specify the property in pixels or rem or em*/}
{/* <Button sx={{
      bgcolor: (theme) => theme.palette.secondary.main, 
      fontSize: "1rem",
      borderRadius:2
      }} 
      onClick={() => console.log("Button Clicked")} 
      variant="contained">
      My Button
      </Button> */}

{/* theme property can be bought to outside and then access using the below syntax also.  the spread operator ... spreads the properties from the speified theme. */}
{/* <Button sx={(theme) => ({
  ...theme.typography.h1,
  ...theme.typography.mycustomproperties,
      bgcolor: theme.palette.secondary.main
      
    })} 
      onClick={() => console.log("Button Clicked")} 
      variant="contained">
      My Button
      </Button> */}

{/* properties can be conditionally applied as below */}
{/* <Button sx={(theme) => ({
  ...theme.typography.h1,
  ...theme.typography.mycustomproperties,
      bgcolor: theme.palette.secondary.main,
      color : open ? "red" : "green",
      maxWidth : open ? "xl" : "md"
      
    })} 
      onClick={() => setOpen(!open)}
      variant="contained">
      My Button
      </Button> */}

{/* below is another syntax for the above  */}
{/* <Button sx={[{
      bgcolor: "blue",
      width:1,
      color : "green",
      maxWidth : "md"
      
    },
    open && {
        color: "red",
        maxWidth: "xl"
    }
  
  ]} 
      onClick={() => setOpen(!open)}
      variant="contained">
      My Button
      </Button> */}

{/* & stands for the current element. in this case button. > denotes imidiate child having the specified selecter after > 
see how the bgcolor is applied based on screensize speficied in themes.  here is the scren size is less than or equal to xs specified in theme.breakpoint.value.xs
then color will be blue else purple.  reduce window size using mouse to observe this.*/}
{/* <Button sx={[{
      bgcolor: {xs: "blue", sm: "purple"},
      width:1,
      color : "green",
      maxWidth : "md",
"&:hover":{
  bgcolor: "orange"
},
"& > P, H1": {
  color: "black"
}

      
    },
    open && {
        color: "red",
        maxWidth: "xl"
    }
  
  ]} 
      onClick={() => setOpen(!open)}
      variant="contained">
      My Button
      <p>My Paragraph</p>
      <h1>H1 Text</h1>
      </Button>  */}

{/* To get the class on the current object we have to use &. as & denotes current object. */}
{/* <Button  disabled variant="contained" sx={{"&.Mui-disabled": {
  bgcolor:"red"
}}}>My Button</Button>  */}

{/* To target the menu items which is contained in Paper under Menu, we have to target & followed space, so that it targets elelment having .Muimenu-paper under current item denoted by & which is <Menu></Menu>
since space is used after & the child element need not be direct decent. If > was used after space the child element should be direct decent. */}
      {/* <Button
        id="basic-button"
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Dashboard
      </Button>
<Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        sx = {{
          "& .MuiMenu-paper" : {
            bgcolor: "red"
          }
        }}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu> */}

{/* <MyStyledButton>New Styled Button</MyStyledButton>
<MyNewStyledButton>New New Styled Button</MyNewStyledButton>
<MyReusableComponent color="#FFA">My Props Button</MyReusableComponent>
<Button sx={{...BlueClass, bgcolor: "orange"}}>BlueClass Button</Button>
*/}

{/* blueTextClass defined in main.jsx under typography. !!! bgcolor is not taking effect from there.  need to check */}
{/* <Button sx={{typography:"blueTextClass"}}>BlueClass Theme Button</Button> */}
{/* if we apply BGColor like this it is taking effect */}
{/* <Button sx={{typography:"blueTextClass", bgcolor: "pink"}}>BlueClass Theme Button</Button> */}

{/* <Button sx={{bgcolor:"secondary.main"}}>Default Button</Button>
<Button sx={{bgcolor:"customColors.royleBlue"}}>Default Button</Button>
<Checkbox color="secondary"></Checkbox>
<MyNew1StyledButton>New1 Button</MyNew1StyledButton>
<MyNew2StyledButton>New2 Button</MyNew2StyledButton> */}
{/* <MyNew3StyledButton size="big">Owner state button</MyNew3StyledButton> */}

{/* <Button variant="outlined" size="big" myCustomProp>New Button</Button> */}

{/* Example of how CSS class can be set at the child coltrols of a built in controls  SEE 5 STEP STYLING OVERVIEW CHAPTER 17*/}
    {/* <FormControl disabled>
      <FormLabel id="demo-radio-buttons-group-label">Gender</FormLabel>
      <RadioGroup 
        value={value}
        onChange={(event) => setValue(event.target.value)}
        sx={{"& .MuiFormControlLabel-label": {
          bgcolor: "green"
        },
      "& .MuiRadio-root": {
        //we have made mui-checked and mui-disabled class as sub of muiratio-root.  this is more convinent than writing styles for muiatio-root.mui-checked and mui-radiio-root.mui-disabled
        //here we are not addig a space after & as & deotes muiratio-root which is the radio button and the checked and disabled are properties directly on the radiobutton
        "&.Mui-checked": {
          color: "pink"
        },
        "&.Mui-disabled": {
          color: "black"
        } 
      }}}
      >
        <FormControlLabel value="first" labelPlacement="end" control={<Radio size="small" color="secondary"/>} label="My Value" />
        <FormControlLabel value="second" control={<Radio size="small" color="secondary"/>} label="My Value" />
        <FormControlLabel value="third" control={<Radio size="small" color="secondary"/>} label="My Value" />
      </RadioGroup>
    </FormControl> */}

{/* Example of how CSS class can be set at the child coltrols of a built in controls, usign build in properties on the parent to access child components  
SEE 5 STEP STYLING OVERVIEW CHAPTER 17*/}

{/* <Autocomplete
  multiple
  //settign the open property to true temporarily so that the drop down will not be closed when we click using inspector to identity the classes applied to it.
  open
  value={value}
  onChange={(event,newValue) => setValue(newValue)}
  options={options}
  //See how we are accessing the chip props specified in the AutoComplete API documentation.  ChipProps is depreciated as of now we have to replace it with right method  
  ChipProps={{
    sx:{
      color:"blue",
      bgcolor:"green",
      //accessing lable on each of the lable using the .MuiChil-lable class which is found using inspector on the chilp lable element.
      "& .MuiChip-label":{
        color:"#FFF",
        fontFamily: "Verdana",
        fontSize:"1.5rem"
      }
    }
  }  
  }
  //this is a component property as opposed to chipsprops which is a props property into which we will set props.  To component property we will instead set a component.
  PaperComponent={CustomPaper}
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Fruit" />}
/> */}

{/* Modifying the auto complete example above by replacing the depreciatd methods ChipProps and PaperComponent.  See how we are using slots.paper and slotProps.chip as mentioned
in the documentation */}
{/* <Autocomplete
  multiple
  //settign the open property to true temporarily so that the drop down will not be closed when we click using inspector to identity the classes applied to it.
  open
  value={value}
  onChange={(event,newValue) => setValue(newValue)}
  options={options}
  

  slots={{
    paper:CustomPaper
  }}

  slotProps={
    {
      chip:{
        sx:{
          color:"blue",
          bgcolor:"green",
          //accessing lable on each of the lable using the .MuiChil-lable class which is found using inspector on the chilp lable element.
          "& .MuiChip-label":{
            color:"#FFF",
            fontFamily: "Verdana",
            fontSize:"1.5rem"
          }
        }
      }
    }
  }

  
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Fruit" />}
/> */}
  
  {/* Modifying the above example with Component customization classes object.  So that the class reference llike .MuiChip-label can be replaced with the corresponding
  Customization classes (chipClasses in this example) for better readability.  Also see how the customization classes are imported above */}

<Autocomplete
  multiple
  //settign the open property to true temporarily so that the drop down will not be closed when we click using inspector to identity the classes applied to it.
  open
  value={value}
  onChange={(event,newValue) => setValue(newValue)}
  options={options}
  

  slots={{
    paper:CustomPaper
  }}

  slotProps={
    {
      chip:{
        sx:{
          color:"blue",
          bgcolor:"green",
          //accessing lable on each of the lable using the .MuiChil-lable class which is found using inspector on the chilp lable element.
          [`& .${chipClasses.label}`]:{
            color:"#FFF",
            fontFamily: "Verdana",
            fontSize:"1.5rem"
          }
        }
      }
    }
  }

  
  sx={{ width: 300 }}
  renderInput={(params) => <TextField {...params} label="Fruit" />}
/>

    </>
  )
}

export default StylingDemo
 