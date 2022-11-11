import type { NextPage } from 'next'
import { Typography } from '@mui/material'
import { PageLayout } from '@components/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout title="Home | Goal Measurement">
      <Typography variant="h3" align="center">
        Hello Goal Measurement
      </Typography>
      <div>Hello Goal Measurement</div>
      <a href="/login">Login</a>
    </PageLayout>
  )
}

export default Home
