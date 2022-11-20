import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Homepage', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('should render the Title', () => {
    expect(screen.getByText(/goal measurement/i)).toBeInTheDocument()
  })

  it('should render the Subtitle', () => {
    expect(
      screen.getByRole('heading', {
        level: 3
      })
    ).toBeInTheDocument()
  })

  it('should render the "Get Started" button', () => {
    expect(
      screen.getByRole('link', { name: /get started/i })
    ).toBeInTheDocument()
  })

  it('should render the "Login" button', () => {
    expect(
      screen.getByRole('link', {
        name: /login/i
      })
    ).toBeInTheDocument()
  })
})
