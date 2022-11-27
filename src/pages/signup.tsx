import type { NextPage } from 'next'
import {
  Avatar,
  Box,
  Button,
  Container,
  TextField,
  Typography
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { PageLayout } from '@components/PageLayout'

const Signup: NextPage = () => {
  return (
    <PageLayout title="Signup">
      <Box display="flex" justifyContent="center" flexGrow={1}>
        <Container maxWidth="xs">
          <Box display="flex" flexDirection="column" alignItems="center">
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              sx={{
                mt: 3,
                width: '100%',
                display: 'flex',
                flexDirection: 'column',
                gap: theme => theme.spacing(2)
              }}
            >
              <TextField
                required
                fullWidth
                id="username"
                label="Username"
                name="username"
              />
              <TextField
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
              />
              <TextField
                required
                fullWidth
                id="password"
                label="Password"
                name="password"
              />
              <TextField
                required
                fullWidth
                id="confirmPassword"
                label="Confirm Password"
                name="confirmPassword"
              />
              <Button type="submit" variant="contained">
                Sign up
              </Button>
            </Box>
          </Box>
        </Container>
      </Box>
    </PageLayout>
  )
}

export default Signup
