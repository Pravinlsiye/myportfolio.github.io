import { useState, useEffect } from 'react'
import GitHubIcon from '@mui/icons-material/GitHub'
import LaunchIcon from '@mui/icons-material/Launch'
import StarIcon from '@mui/icons-material/Star'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import './GitHubProjects.css'

const GITHUB_USERNAME = 'Pravinlsiye'
const REPOS_PER_PAGE = 6

const GitHubProjects = () => {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [currentPage, setCurrentPage] = useState(1)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const response = await fetch(
          `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=100`
        )
        if (!response.ok) throw new Error('Failed to fetch repos')
        const data = await response.json()
        
        // Filter out forked repos and sort by stars
        const filteredRepos = data
          .filter(repo => !repo.fork)
          .sort((a, b) => b.stargazers_count - a.stargazers_count)
        
        setRepos(filteredRepos)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchRepos()
  }, [])

  const totalPages = Math.ceil(repos.length / REPOS_PER_PAGE)
  const startIndex = (currentPage - 1) * REPOS_PER_PAGE
  const currentRepos = repos.slice(startIndex, startIndex + REPOS_PER_PAGE)

  const goToPage = (page) => {
    setCurrentPage(page)
    document.getElementById('github-projects')?.scrollIntoView({ behavior: 'smooth' })
  }

  if (loading) {
    return (
      <section id='github-projects' className='section github-projects'>
        <h2 className='section__title'>Projects</h2>
        <p className='github-projects__loading'>Loading repositories...</p>
      </section>
    )
  }

  if (error) {
    return (
      <section id='github-projects' className='section github-projects'>
        <h2 className='section__title'>Projects</h2>
        <p className='github-projects__error'>Failed to load repositories</p>
      </section>
    )
  }

  if (!repos.length) return null

  return (
    <section id='github-projects' className='section github-projects'>
      <h2 className='section__title'>Projects</h2>
      
      <div className='github-projects__grid'>
        {currentRepos.map((repo) => (
          <div key={repo.id} className='github-project'>
            <h3 className='github-project__name'>{repo.name}</h3>
            <p className='github-project__description'>
              {repo.description || 'No description'}
            </p>
            
            <div className='github-project__meta'>
              {repo.language && (
                <span className='github-project__language'>{repo.language}</span>
              )}
              {repo.stargazers_count > 0 && (
                <span className='github-project__stars'>
                  <StarIcon fontSize='small' /> {repo.stargazers_count}
                </span>
              )}
            </div>

            <div className='github-project__links'>
              <a
                href={repo.html_url}
                aria-label='source code'
                className='link link--icon'
                target='_blank'
                rel='noopener noreferrer'
              >
                <GitHubIcon />
              </a>
              {repo.homepage && (
                <a
                  href={repo.homepage}
                  aria-label='live preview'
                  className='link link--icon'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <LaunchIcon />
                </a>
              )}
            </div>
          </div>
        ))}
      </div>

      {totalPages > 1 && (
        <div className='github-projects__pagination'>
          <button
            onClick={() => goToPage(currentPage - 1)}
            disabled={currentPage === 1}
            className='btn btn--icon pagination__btn'
            aria-label='Previous page'
          >
            <ChevronLeftIcon />
          </button>
          
          <div className='pagination__pages'>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => goToPage(page)}
                className={`pagination__page ${currentPage === page ? 'pagination__page--active' : ''}`}
              >
                {page}
              </button>
            ))}
          </div>

          <button
            onClick={() => goToPage(currentPage + 1)}
            disabled={currentPage === totalPages}
            className='btn btn--icon pagination__btn'
            aria-label='Next page'
          >
            <ChevronRightIcon />
          </button>
        </div>
      )}
    </section>
  )
}

export default GitHubProjects
