import { Section } from '../components/Section'
import { publishedProjects, studyProjects, studyProjectsIntro } from '../content/projects'
import styles from './Projects.module.css'

function Stack({ items }: { items: string[] }) {
  return (
    <ul className={styles.stack} aria-label="Tecnologias">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export function Projects() {
  const featured = publishedProjects()

  return (
    <Section id="projetos" title="Projetos">
      {featured.length > 0 && (
        <div className={styles.block}>
          <h3 className={styles.subheading}>Projetos em destaque</h3>
          <ul className={styles.featured}>
            {featured.map((project) => (
              <li key={project.id} className={styles.card}>
                <div className={styles.cardHeader}>
                  <h4 className={styles.name}>{project.name}</h4>
                  <span className={styles.status}>{project.status}</span>
                </div>
                <p className={styles.description}>{project.description}</p>
                <Stack items={project.stack} />
                <p className={styles.links}>
                  <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    Repositório
                    <span className="visually-hidden"> de {project.name} (abre em nova aba)</span>
                  </a>
                  {project.demo && (
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Demo
                      <span className="visually-hidden"> de {project.name} (abre em nova aba)</span>
                    </a>
                  )}
                </p>
              </li>
            ))}
          </ul>
        </div>
      )}

      <div className={styles.block}>
        <h3 className={styles.subheading}>Projetos de estudo</h3>
        <p className={styles.intro}>{studyProjectsIntro}</p>
        <ul className={styles.study}>
          {studyProjects.map((project) => (
            <li key={project.name} className={styles.compact}>
              <h4 className={styles.name}>
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                  {project.name}
                  <span className="visually-hidden"> no GitHub (abre em nova aba)</span>
                </a>
              </h4>
              <p className={styles.description}>{project.description}</p>
              <Stack items={project.stack} />
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
