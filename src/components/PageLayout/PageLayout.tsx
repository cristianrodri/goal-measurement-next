import { ReactNode } from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'
import { Logo } from '@components/Logo'

type Props = {
  title: string
  children: ReactNode
}

export const PageLayout = ({ title, children }: Props) => {
  return (
    <Container maxWidth="lg">
      <Head>
        <title>{title}</title>
      </Head>
      <Logo />
      {children}
    </Container>
  )
}
