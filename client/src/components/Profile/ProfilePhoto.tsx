import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';

const ProfilePhoto = (): JSX.Element => {
  return (
    <Box
      p={1}
      style={{ height: '110vh', justifyContent: 'center' }}
      display="flex"
      justifyContent="flex-end"
      alignSelf="flex-end"
      marginRight={5}
    >
      <Typography>Profile Photo</Typography>
    </Box>
  );
};

export default ProfilePhoto;
