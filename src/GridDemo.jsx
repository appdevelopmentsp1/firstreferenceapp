import {Grid2, TableRow} from '@mui/material'


// direction = row
// Main axis = horizontal
// Cross axis = vertical

// direction=column
// Main axis = vertical 
// Cross axis = horizontal

// justifyContent = main axis
// alignitems = cross axis




export default function GridDemo() {
    return (
        <>
<h1>Hello CodeSandbox</h1>        
<h2>Start editing to see some magic happen</h2>

{/* direction = row (default), column, row-reverse, column-reverse */}
{/* <Grid2 container direction="column" alignItems={'start'}>
    <Grid2 Item sx={{bgcolor:"red"}}>Item1</Grid2>
    <Grid2 Item sx={{bgcolor:"green"}}>Item2</Grid2>
</Grid2>     */}

    <Grid2 container direction="row" justifyContent={'space-between'} alignItems={'center'}>
        <Grid2 Item container>
            <Grid2 Item sx={{bgcolor:"red"}}>Item1</Grid2>
            <Grid2 Item sx={{bgcolor:"green"}}>Item2</Grid2>
        </Grid2>
        <Grid2 Item container>
            <Grid2 Item sx={{bgcolor:"red"}}>Item3</Grid2>
            <Grid2 Item sx={{bgcolor:"green"}}>Item4</Grid2>
            <Grid2 Item container direction={'column'}>
                <Grid2 Item sx={{bgcolor:"red"}}>Item5</Grid2>
                <Grid2 Item sx={{bgcolor:"red"}}>Item6</Grid2>
            </Grid2>
        </Grid2>
    </Grid2> 

        </>
    );
}