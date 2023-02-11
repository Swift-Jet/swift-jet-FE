import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import "./stepper.css"

const steps = [
  'Search for Flight',
  'Get Estimates',
  'Review Flight',
  'Book Flight',
];



export default function HorizontalLabelPositionBelowStepper() {
  return (
<div className="">
   <Box sx={{ width: '50%' }}>
      <Stepper  activeStep={1} alternativeLabel>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>
    </Box>
</div>
  );
}