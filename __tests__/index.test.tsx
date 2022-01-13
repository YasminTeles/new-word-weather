import { render, screen } from '@testing-library/react'
import Home from '@/pages/index'

describe('Home', () => {
  it('renders a title', () => {
    render(<Home />)

    const title = screen.getByRole('heading', {
      name: /Welcome to World Weather!/i,
    })

    expect(title).toBeInTheDocument()
  })

  it.skip('renders a subtitle', () => {
    render(<Home />)

    const subtitle = screen.getByRole('phase', {
      name: /Get started by finding a city and then check the weather./i,
    })

    expect(subtitle).toBeInTheDocument()
  })

  it('renders a footer', () => {
    render(<Home />)

    const footer = screen.getByRole('heading', {
      name: /This side project is made/i,
    })

    expect(footer).toBeInTheDocument()
  })
})
