import { render, screen } from '@testing-library/react'
import Home from '../pages/index'

describe('Homepage', () => {
  beforeEach(() => {
    render(<Home />)
  })

  it('should render the Title', () => {
    expect(screen.getByText(/goal measurement/i)).toBeInTheDocument()
  })

  it.todo('should render the Subtitle')
})
