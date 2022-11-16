import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Button, Typography } from '@mui/material'
import { PageLayout } from '@components/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout title="Login">
      <Typography variant="h3" align="center" color="primary">
        Hello Goal Measurement
      </Typography>
      <Button href="/login">Login</Button>
      <Button href="/login" color="secondary">
        Signup
      </Button>
      <Link href="/" passHref>
        <Button>
          <Image
            src="/logo.svg"
            width="0"
            height="0"
            style={{ width: '200px', height: 'auto' }}
            alt="logo"
          />
        </Button>
      </Link>
    </PageLayout>
  )
}

export default Home
