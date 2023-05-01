import React from 'react'
import {Box, Stack, Typography} from '@mui/material';
import HorizontalScrollBar from './HorizontalScrollbar';
import Loader from './Loader';

const SimilarExercises = ({targetMuscleExercises, equipmentExercises}) => {
  if (!targetMuscleExercises.length) return <Loader />;
  if (!equipmentExercises.length) return <Loader />;
  return (
    <Box sx={{mt: {lg: '100px', xs: '0'}}}>
      <Typography variant='h3' mb={5}>
          Exercises that target the same muscle group
      </Typography>

      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
          {targetMuscleExercises.length && <HorizontalScrollBar data={targetMuscleExercises}/>}
      </Stack>

      <Typography variant='h3' mb={5}>
          Exercises that uses the Same Equipment
      </Typography>

      <Stack direction="row" sx={{p: '2', position: 'relative'}}>
          {equipmentExercises.length && <HorizontalScrollBar data={targetMuscleExercises}/>}
      </Stack>
    </Box>
  )
}

export default SimilarExercises
