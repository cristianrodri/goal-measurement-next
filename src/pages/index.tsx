import type { NextPage } from 'next'
import { Container, Typography } from '@mui/material'

const Home: NextPage = () => {
  return (
    <Container>
      <Typography variant="h3" align="center">
        Hello Goal Measurement
      </Typography>
      <div>Hello Goal Measurement</div>
      <a href="/login">Login</a>
    </Container>
  )
}

export default Home
