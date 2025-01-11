import {Grid2} from '@mui/material'
import TopBar from './TobBar';
import VideoSummary from './VideoSummary';

const preview = [...new Array(15)].map((_,index) => (
    <h1>Hello {i}</h1>
));

export default function YouTubeHome() {
    return (
        <>
        <Grid2 container direction="row" color="blue" >
            <TopBar></TopBar>
        </Grid2> 
        <Grid2 Item container width="216px" direction="column" sx={{bgcolor:"green"}}> 
            <Grid2 Item sx={{bgcolor:"red"}}>Your Videos</Grid2>
            <Grid2 Item sx={{bgcolor:"green"}}>Your Movies & TV</Grid2>
        </Grid2>
        <Grid2 Item container direction="row" sx={{bgcolor:"pink"}}>
            
            <Grid2 Item sx={{bgcolor:"red"}}>
                <VideoSummary></VideoSummary>
            </Grid2>
        </Grid2>
    
        </>
    );
}

