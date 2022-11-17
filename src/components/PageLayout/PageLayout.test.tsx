import { render, screen } from '@testing-library/react'
import { PageLayout } from './PageLayout'
import { Typography } from '@mui/material'

describe('PageLayout', () => {
  beforeEach(() => {
    render(
      <PageLayout title="Homepage">
        <Typography>Goal Measurement</Typography>
      </PageLayout>
    )
  })

  it('should render the logo', () => {
    expect(
      screen.getByRole('img', {
        name: /logo/i
      })
    ).toBeInTheDocument()
  })
})
