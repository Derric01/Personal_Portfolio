// GitHub API utilities for fetching repositories
export interface GitHubRepo {
  id: number
  name: string
  full_name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  stargazers_count: number
  forks_count: number
  pushed_at: string
  created_at: string
  updated_at: string
  topics: string[]
  archived: boolean
  fork: boolean
}

export interface GitHubApiResponse {
  repos: GitHubRepo[]
  hasMore: boolean
  error?: string
}

const GITHUB_API_BASE = 'https://api.github.com'
const USERNAME = import.meta.env.VITE_GITHUB_USERNAME || 'Derric01'
const MAX_PAGES = Number(import.meta.env.VITE_MAX_REPOS_PAGES || 3) // Fetch up to 3 pages (300 repos max)

/**
 * Fetch public repositories for a GitHub user
 * @param page - Page number (1-based)
 * @param perPage - Number of repos per page (max 100)
 */
async function fetchReposPage(page: number = 1, perPage: number = 100): Promise<GitHubRepo[]> {
  const url = `${GITHUB_API_BASE}/users/${USERNAME}/repos?page=${page}&per_page=${perPage}&sort=pushed&direction=desc`

  try {
    const response = await fetch(url, {
      headers: {
        Accept: 'application/vnd.github.v3+json',
        'User-Agent': 'Portfolio-Website',
      },
    })

    if (!response.ok) {
      if (response.status === 403) {
        throw new Error('GitHub API rate limit exceeded. Please try again later.')
      }
      throw new Error(`GitHub API error: ${response.status} ${response.statusText}`)
    }

    const repos: GitHubRepo[] = await response.json()
    return repos.filter((repo) => !repo.fork) // Filter out forked repositories
  } catch (error) {
    console.error('Error fetching repos:', error)
    throw error
  }
}

/**
 * Fetch all public repositories for the user
 * Handles pagination automatically
 */
export async function fetchAllRepos(): Promise<GitHubApiResponse> {
  try {
    let allRepos: GitHubRepo[] = []
    let currentPage = 1
    let hasMore = true

    while (hasMore && currentPage <= MAX_PAGES) {
      const repos = await fetchReposPage(currentPage, 100)

      if (repos.length === 0) {
        hasMore = false
      } else {
        allRepos = [...allRepos, ...repos]
        currentPage++

        // If we got less than 100 repos, we've reached the end
        if (repos.length < 100) {
          hasMore = false
        }
      }
    }

    return {
      repos: allRepos,
      hasMore: currentPage > MAX_PAGES && hasMore,
    }
  } catch (error) {
    return {
      repos: [],
      hasMore: false,
      error: error instanceof Error ? error.message : 'Unknown error occurred',
    }
  }
}

/**
 * Filter repositories by language
 */
export function filterReposByLanguage(repos: GitHubRepo[], language: string): GitHubRepo[] {
  if (language === 'all') return repos
  return repos.filter((repo) => repo.language?.toLowerCase() === language.toLowerCase())
}

/**
 * Sort repositories by criteria
 */
export function sortRepos(repos: GitHubRepo[], sortBy: 'stars' | 'updated' | 'name'): GitHubRepo[] {
  return [...repos].sort((a, b) => {
    switch (sortBy) {
      case 'stars':
        return b.stargazers_count - a.stargazers_count
      case 'updated':
        return new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
      case 'name':
        return a.name.localeCompare(b.name)
      default:
        return 0
    }
  })
}

/**
 * Get unique languages from repositories
 */
export function getUniqueLanguages(repos: GitHubRepo[]): string[] {
  const languages = repos
    .map((repo) => repo.language)
    .filter((lang): lang is string => lang !== null)
    .filter((lang, index, array) => array.indexOf(lang) === index)
    .sort()

  return ['all', ...languages]
}

/**
 * Format date for display
 */
export function formatDate(dateString: string): string {
  const date = new Date(dateString)
  return date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  })
}

/**
 * Get repository image URL (GitHub's Open Graph image or placeholder)
 */
export function getRepoImageUrl(repo: GitHubRepo): string {
  // Use GitHub's Open Graph image
  return `https://opengraph.githubassets.com/1/${repo.full_name}`
}

/**
 * Get color for programming language
 * @param language - Programming language name
 * @returns - Color hex code
 */
export function getLanguageColor(language: string): string {
  const colors: Record<string, string> = {
    JavaScript: '#F7DF1E',
    TypeScript: '#3178C6',
    Vue: '#41B883',
    React: '#61DAFB',
    HTML: '#E34F26',
    CSS: '#1572B6',
    SCSS: '#CC6699',
    PHP: '#777BB4',
    Python: '#3776AB',
    Java: '#007396',
    'C#': '#239120',
    Ruby: '#CC342D',
    Swift: '#F05138',
    Kotlin: '#7F52FF',
    Go: '#00ADD8',
    Rust: '#DEA584',
    Dart: '#0175C2',
    Flutter: '#02569B',
    Shell: '#89E051',
  }

  return colors[language] || '#6c757d' // Default color for unknown languages
}
