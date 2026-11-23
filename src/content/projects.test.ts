import { publishedProjects } from './projects'
import type { FeaturedProject } from './types'

const base: FeaturedProject = {
  id: 'x',
  name: 'x',
  description: 'x',
  stack: [],
  repo: 'https://example.com',
  status: 'estável',
  published: false,
}

describe('publishedProjects', () => {
  it('só devolve projetos com published: true', () => {
    const list = [
      { ...base, id: 'a', published: true },
      { ...base, id: 'b', published: false },
    ]
    expect(publishedProjects(list).map((p) => p.id)).toEqual(['a'])
  })
})
