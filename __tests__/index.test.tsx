import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a heading', () => {
    render(<Home />)

    const heading = screen.getByRole('heading', {
      name: /welcome to next\.js!/i,
    })

    expect(heading).toBeInTheDocument()
  })

  it('renders a footer', () => {
    render(<Home />)

    const footer = screen.getByRole('heading', {
      name: /This side project is made/i,
    })

    expect(footer).toBeInTheDocument()
  })
})
