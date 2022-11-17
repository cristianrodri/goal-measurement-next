import Image from 'next/image'
import Link from 'next/link'
import { Button } from '@mui/material'

export const Logo = () => {
  return (
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
  )
}
