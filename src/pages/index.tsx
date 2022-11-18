import type { NextPage } from 'next'
import { Box, Button } from '@mui/material'
import { PageLayout } from '@components/PageLayout'
import { Title } from '@components/pages/homepage/Title'

const Home: NextPage = () => {
  return (
    <PageLayout title="Login">
      <Box px={1}>
        {/* Title */}
        <Title />
        {/* Subtitle */}
        {/* Actions */}
        <Button href="/login">Login</Button>
        <Button href="/login" color="secondary">
          Signup
        </Button>
        {/* Image */}
      </Box>
    </PageLayout>
  )
}

export default Home
