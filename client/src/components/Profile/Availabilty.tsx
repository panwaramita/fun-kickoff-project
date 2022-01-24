import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const Availabilty = (): JSX.Element => {
  return (
    <Box
      p={1}
      style={{ height: '80vh', justifyContent: 'center' }}
      display="flex"
      justifyContent="flex-end"
      alignSelf="flex-end"
      marginRight={5}
    >
      <Typography>Availabilty</Typography>
    </Box>
  );
};

export default Availabilty;
