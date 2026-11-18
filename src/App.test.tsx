import { render, screen } from '@testing-library/react'
import { App } from './App'
import { profile } from './content/profile'

describe('App', () => {
  it('mostra o nome como título principal e os links de contato', () => {
    render(<App />)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute(
      'href',
      profile.links.github,
    )
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute(
      'href',
      profile.links.linkedin,
    )
  })
})
