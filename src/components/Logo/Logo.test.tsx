import { render, screen } from '@testing-library/react'
import { Logo } from './Logo'

it('it should render the logo image into the component', () => {
  render(<Logo />)

  expect(
    screen.getByRole('img', {
      name: /logo/i
    })
  ).toBeInTheDocument()
})
