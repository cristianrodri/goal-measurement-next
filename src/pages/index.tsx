import type { NextPage } from 'next'
import { Box, Button, Stack, Typography } from '@mui/material'
import { PageLayout } from '@components/PageLayout'

const Home: NextPage = () => {
  return (
    <PageLayout title="Home | Goal Measurement">
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        gap={theme => theme.spacing(2)}
        flexGrow={1}
      >
        {/* Title */}
        <Typography
          component="h1"
          variant="h3"
          fontWeight={theme => theme.typography.fontWeightBold}
          align="center"
        >
          Goal Measurement
        </Typography>
        {/* Subtitle */}
        <Typography component="h3" variant="h6" align="center">
          An app that you can measure your goals daily by checking all your
          activities.
        </Typography>
        {/* Actions */}
        <Stack
          direction="row"
          justifyContent="center"
          gap={theme => theme.spacing(2)}
          flexWrap="wrap"
        >
          <Button href="/login" variant="contained" sx={{ width: 300 }}>
            Get Started
          </Button>
          <Button href="/login" color="secondary" sx={{ width: 300 }}>
            Login
          </Button>
        </Stack>
      </Box>
    </PageLayout>
  )
}

export default Home
