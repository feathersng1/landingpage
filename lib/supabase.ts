import { createClient } from '@supabase/supabase-js'

// Fallback to placeholder values if environment variables are not set
// In a real deployment, these should be set in your environment
const supabaseUrl = typeof window !== 'undefined' 
  ? (window as any).ENV?.NEXT_PUBLIC_SUPABASE_URL || 'https://your-project.supabase.co'
  : 'https://your-project.supabase.co'

const supabaseAnonKey = typeof window !== 'undefined'
  ? (window as any).ENV?.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'your-anon-key-here'
  : 'your-anon-key-here'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Database Types
export interface PortfolioItem {
  id: string
  title: string
  description: string
  category: string
  image_url: string
  gallery_images: string[]
  client_name: string
  project_year: number
  tags: string[]
  featured: boolean
  slug: string
  case_study_url?: string
  created_at: string
  updated_at: string
}

export interface BlogPost {
  id: string
  title: string
  content: string
  excerpt: string
  author: string
  author_image: string
  featured_image: string
  category: string
  tags: string[]
  published: boolean
  slug: string
  reading_time: number
  created_at: string
  updated_at: string
}

export interface TeamMember {
  id: string
  name: string
  role: string
  bio: string
  image_url: string
  linkedin_url?: string
  twitter_url?: string
  email?: string
  featured: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  features: string[]
  featured: boolean
  order_index: number
  created_at: string
  updated_at: string
}

export interface Testimonial {
  id: string
  client_name: string
  client_role: string
  client_company: string
  content: string
  rating: number
  project_id?: string
  featured: boolean
  created_at: string
  updated_at: string
}