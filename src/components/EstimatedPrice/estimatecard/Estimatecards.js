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
                            <div class="grid grid-cols-2 space-x-40  ">
                                <div class="h-auto w-full rounded-lg">
                                   <Cardslider />
                                </div>
                                <div class=" h-auto w-1/2 rounded-lg">
                                wivbwivbiwbvibvwij
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