import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { App } from './App'
import { navigation } from './content/navigation'
import { profile } from './content/profile'
import { cases } from './content/cases'
import { skills } from './content/skills'

describe('App', () => {
  beforeEach(() => {
    delete document.documentElement.dataset.theme
  })

  it('mostra o nome como único título principal', () => {
    render(<App />)
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1, name: profile.name })).toBeInTheDocument()
  })

  it('cada item do menu aponta para uma seção que existe', () => {
    const { container } = render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Seções' })
    for (const item of navigation) {
      expect(within(nav).getByRole('link', { name: item.label })).toHaveAttribute(
        'href',
        `#${item.id}`,
      )
      expect(container.querySelector(`section#${item.id}`)).not.toBeNull()
    }
  })

  it('mostra todos os grupos de tecnologias', () => {
    render(<App />)
    for (const group of skills) {
      expect(screen.getByRole('heading', { level: 3, name: group.group })).toBeInTheDocument()
    }
  })

  it('mostra todos os estudos de caso, com diagramas acessíveis', () => {
    render(<App />)
    for (const study of cases) {
      expect(screen.getByRole('heading', { level: 3, name: study.title })).toBeInTheDocument()
    }
    expect(
      screen.getByRole('img', { name: /Arquitetura do checkout multi-gateway/ }),
    ).toBeInTheDocument()
    expect(
      screen.getByRole('img', { name: /Arquitetura do controle de lockers/ }),
    ).toBeInTheDocument()
  })

  it('o botão principal leva aos estudos de caso', () => {
    render(<App />)
    expect(screen.getByRole('link', { name: 'Ver estudos de caso' })).toHaveAttribute(
      'href',
      '#casos',
    )
  })

  it('links externos abrem em nova aba com rel seguro', () => {
    render(<App />)
    const github = screen.getAllByRole('link', { name: /GitHub/ })[0]
    expect(github).toHaveAttribute('href', profile.links.github)
    expect(github).toHaveAttribute('target', '_blank')
    expect(github).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('o botão de tema alterna entre claro e escuro', async () => {
    const user = userEvent.setup()
    render(<App />)
    await user.click(screen.getByRole('button', { name: 'Ativar tema claro' }))
    expect(document.documentElement.dataset.theme).toBe('light')
    await user.click(screen.getByRole('button', { name: 'Ativar tema escuro' }))
    expect(document.documentElement.dataset.theme).toBe('dark')
  })
})
