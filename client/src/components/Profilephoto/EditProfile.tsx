import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const EditProfile = (): JSX.Element => {
  return (
    <Box
      p={1}
      style={{ height: '80vh', justifyContent: 'center' }}
      display="flex"
      justifyContent="flex-end"
      alignSelf="flex-end"
      marginRight={5}
    >
      <h1>Edit Profile</h1>
    </Box>
  );
};

export default EditProfile;
