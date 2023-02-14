import * as React from 'react';
import Cardslider from "../cardslider/Cardslider"
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
    return (
        <div className="mt-10 rounded-3xl ">
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={8}>
                        <Item>
                        <div class="m-auto max-w-6xl ">
                        <div class="flex flex-col md:flex-row">
                            <div class="md:w-3/5 max-w-3/5 flex flex-col justify-center">
                                <div class=""><Cardslider /></div>  
                            </div>
                            <div class="flex md:justify-start w-full md:w-1/2 -mt-9">
                                <div class="flex ">
                                    <div class=" max-w-sm mt-9 ">
                                    <h1 class="md:text-xl text-xl uppercase font-black mt-11">Beachcraft</h1>
                                    <h1 class="text-md mt-1 flex md:justify-start">Turboprop</h1>
                                    <div className="justify-start flex">
                                        <h1 className="md:text-3xl text-xl text-rose-900 mt-2 font-black">N150,000</h1>
                                        
                                    </div>
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </div>
                        </div>
                        </Item>
                    </Grid>
                    <Grid item xs={4}>
                        <Item>xs=4</Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}