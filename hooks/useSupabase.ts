import { useState, useEffect } from 'react'
import { supabase, PortfolioItem, BlogPost, TeamMember, Service, Testimonial } from '../lib/supabase'
import { 
  mockPortfolioItems, 
  mockTeamMembers, 
  mockBlogPosts, 
  mockServices, 
  mockTestimonials 
} from '../lib/mockData'

// Check if Supabase is properly configured
function isSupabaseConfigured() {
  try {
    // Simple check to see if we have a valid URL
    const url = supabase.supabaseUrl
    return url && url !== 'https://your-project.supabase.co' && !url.includes('your-project')
  } catch {
    return false
  }
}

// Portfolio Hook
export function usePortfolio() {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPortfolio() {
      try {
        if (!isSupabaseConfigured()) {
          console.warn('Supabase not configured, using mock data')
          setPortfolio(mockPortfolioItems)
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('portfolio_items')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) throw error
        setPortfolio(data || [])
      } catch (err) {
        console.warn('Failed to fetch from Supabase, using mock data:', err)
        setPortfolio(mockPortfolioItems)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchPortfolio()
  }, [])

  return { portfolio, loading, error }
}

// Featured Portfolio Hook
export function useFeaturedPortfolio(limit = 6) {
  const [portfolio, setPortfolio] = useState<PortfolioItem[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchFeaturedPortfolio() {
      try {
        if (!isSupabaseConfigured()) {
          console.warn('Supabase not configured, using mock data')
          setPortfolio(mockPortfolioItems.filter(item => item.featured).slice(0, limit))
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('portfolio_items')
          .select('*')
          .eq('featured', true)
          .order('created_at', { ascending: false })
          .limit(limit)

        if (error) throw error
        setPortfolio(data || [])
      } catch (err) {
        console.warn('Failed to fetch from Supabase, using mock data:', err)
        setPortfolio(mockPortfolioItems.filter(item => item.featured).slice(0, limit))
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchFeaturedPortfolio()
  }, [limit])

  return { portfolio, loading, error }
}

// Blog Hook
export function useBlog() {
  const [posts, setPosts] = useState<BlogPost[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchBlog() {
      try {
        if (!isSupabaseConfigured()) {
          console.warn('Supabase not configured, using mock data')
          setPosts(mockBlogPosts)
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('blog_posts')
          .select('*')
          .eq('published', true)
          .order('created_at', { ascending: false })

        if (error) throw error
        setPosts(data || [])
      } catch (err) {
        console.warn('Failed to fetch from Supabase, using mock data:', err)
        setPosts(mockBlogPosts)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchBlog()
  }, [])

  return { posts, loading, error }
}

// Team Hook
export function useTeam() {
  const [team, setTeam] = useState<TeamMember[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTeam() {
      try {
        if (!isSupabaseConfigured()) {
          console.warn('Supabase not configured, using mock data')
          setTeam(mockTeamMembers)
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('team_members')
          .select('*')
          .order('order_index', { ascending: true })

        if (error) throw error
        setTeam(data || [])
      } catch (err) {
        console.warn('Failed to fetch from Supabase, using mock data:', err)
        setTeam(mockTeamMembers)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchTeam()
  }, [])

  return { team, loading, error }
}

// Services Hook
export function useServices() {
  const [services, setServices] = useState<Service[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchServices() {
      try {
        if (!isSupabaseConfigured()) {
          console.warn('Supabase not configured, using mock data')
          setServices(mockServices)
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('services')
          .select('*')
          .order('order_index', { ascending: true })

        if (error) throw error
        setServices(data || [])
      } catch (err) {
        console.warn('Failed to fetch from Supabase, using mock data:', err)
        setServices(mockServices)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchServices()
  }, [])

  return { services, loading, error }
}

// Testimonials Hook
export function useTestimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchTestimonials() {
      try {
        if (!isSupabaseConfigured()) {
          console.warn('Supabase not configured, using mock data')
          setTestimonials(mockTestimonials)
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('testimonials')
          .select('*')
          .eq('featured', true)
          .order('created_at', { ascending: false })

        if (error) throw error
        setTestimonials(data || [])
      } catch (err) {
        console.warn('Failed to fetch from Supabase, using mock data:', err)
        setTestimonials(mockTestimonials)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    fetchTestimonials()
  }, [])

  return { testimonials, loading, error }
}

// Single Portfolio Item Hook
export function usePortfolioItem(slug: string) {
  const [item, setItem] = useState<PortfolioItem | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    async function fetchPortfolioItem() {
      try {
        if (!isSupabaseConfigured()) {
          console.warn('Supabase not configured, using mock data')
          const mockItem = mockPortfolioItems.find(item => item.slug === slug)
          setItem(mockItem || null)
          setLoading(false)
          return
        }

        const { data, error } = await supabase
          .from('portfolio_items')
          .select('*')
          .eq('slug', slug)
          .single()

        if (error) throw error
        setItem(data)
      } catch (err) {
        console.warn('Failed to fetch from Supabase, using mock data:', err)
        const mockItem = mockPortfolioItems.find(item => item.slug === slug)
        setItem(mockItem || null)
        setError(err instanceof Error ? err.message : 'An error occurred')
      } finally {
        setLoading(false)
      }
    }

    if (slug) {
      fetchPortfolioItem()
    }
  }, [slug])

  return { item, loading, error }
}