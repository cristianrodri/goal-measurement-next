import type { NextPage } from 'next'
import { Box, Typography } from '@mui/material'
import { PageLayout } from '@components/PageLayout'

const Login: NextPage = () => {
  return (
    <PageLayout title="Signup">
      <Box>
        <Typography>Signup</Typography>
      </Box>
    </PageLayout>
  )
}

export default Login
