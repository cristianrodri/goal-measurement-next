import { ReactNode } from 'react'
import Head from 'next/head'
import { Container } from '@mui/material'

type Props = {
  title: string
  children: ReactNode
}

export const PageLayout = ({ title, children }: Props) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      {children}
    </Container>
  )
}
