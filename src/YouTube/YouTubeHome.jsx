//react has to be imported in all custom components.
import * as React from 'react'
import {Grid2} from '@mui/material'
import Header from './Header';
import VideoSummary from './VideoSummary';
import * as pi from '../../src/math'

const x = pi.default;
const y = pi.doublePi;

const preview = [...new Array(15)].map((_,index) => (
    <h5>Hello {index}</h5>
));

const urlVariable=import.meta.env.VITE_SERVER_URL;

export default function YouTubeHome() {
    return (
        <>
        <Grid2 container direction="row" color="blue" >
            <Grid2 size={12}>
                <Header></Header>
            </Grid2>          
        </Grid2> 
         <Grid2 container direction="row" sx={{bgcolor:"green"}}> 
            <Grid2 container width="216px" direction="column" sx={{bgcolor:"yellow",display:"inline-block"}}> 
                <Grid2 sx={{bgcolor:"blue"}}>Your Videos</Grid2>
                <Grid2 sx={{bgcolor:"green"}}>Your Movies & TV</Grid2>
                <Grid2 sx={{bgcolor:"orange"}}>{urlVariable}</Grid2>
            </Grid2>
            <Grid2 container direction="column" sx={{width:"Auto"}}>
                <Grid2 container direction="row" sx={{bgcolor:"pink"}}>
                    {preview.map((text,index) => (
                        <Grid2 sx={{bgcolor:"red"}} size={3}>
                            <VideoSummary key={index} Text={text} Even={index%2==0}></VideoSummary>
                        </Grid2>
                    ))}
                    
                </Grid2>
            </Grid2>
        </Grid2>
        </>
    );
}

