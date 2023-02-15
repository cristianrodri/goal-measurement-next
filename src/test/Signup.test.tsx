import { render, screen } from '@testing-library/react'
import Signup from './../pages/signup'

describe('Homepage', () => {
  beforeEach(() => {
    render(<Signup />)
    // screen.debug()
  })

  it('should render the Title', () => {
    expect(screen.getByRole('heading', { level: 1 })).toBeInTheDocument()
  })

  it('shoud render the "Sign up" text in the title and the button submit', () => {
    expect(screen.getAllByText(/sign up/i)).toHaveLength(2)
  })

  it('should render the username input', () => {
    expect(
      screen.getByRole('textbox', {
        name: /username/i
      })
    ).toBeInTheDocument()
  })

  it('should render the email input', () => {
    expect(
      screen.getByRole('textbox', {
        name: /email/i
      })
    ).toBeInTheDocument()
  })

  it('should render the password input', () => {
    // expect(screen.getByLabelText(/password/i)).toBeInTheDocument()
    expect(
      screen.getByLabelText(/^password/i, { exact: true })
    ).toBeInTheDocument()
  })

  it.todo('should render the confirm password input')
  it.todo('should render the button submit')
})
