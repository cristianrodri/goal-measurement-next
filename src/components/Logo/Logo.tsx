import Image from 'next/future/image'
import Link from 'next/link'
import { Box, Button } from '@mui/material'

export const Logo = () => {
  return (
    <Box sx={{ alignSelf: 'start' }}>
      <Link href="/" passHref>
        <Button LinkComponent="a">
          <Image
            src="/logo.svg"
            width="0"
            height="0"
            style={{ width: 250, height: 'auto' }}
            alt="logo"
          />
        </Button>
      </Link>
    </Box>
  )
}
