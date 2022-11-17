import type { NextPage } from 'next'
import { Button } from '@mui/material'
import { PageLayout } from '@components/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout title="Login">
      <Button href="/login">Login</Button>
      <Button href="/login" color="secondary">
        Signup
      </Button>
    </PageLayout>
  )
}

export default Home
