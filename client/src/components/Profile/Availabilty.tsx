import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

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
      <Typography style={{ fontSize: '30px', fontWeight: '100' }}>Availabilty</Typography>
    </Box>
  );
};

export default Availabilty;
