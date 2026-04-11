import { PortfolioItem, TeamMember, BlogPost, Service, Testimonial } from './supabase'

// Mock data for development and fallback
export const mockPortfolioItems: PortfolioItem[] = [
  {
    id: '1',
    title: 'Your home inspection, done right',
    description: 'A comprehensive digital experience and branding for a leading home inspection service.',
    category: 'Branding & Digital',
    image_url: '/aio/aio-hero.svg',
    gallery_images: [],
    client_name: 'ALL-IN-ONE',
    project_year: 2024,
    tags: ['branding', 'digital', 'service'],
    featured: true,
    slug: 'all-in-one-inspection',
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Refreshing legacy, reigniting culture',
    description: 'Modern rebrand that honors heritage while appealing to new generations.',
    category: 'Brand Strategy',
    image_url: 'https://images.unsplash.com/photo-1594736797933-d0c71e0249cc?w=800&h=600&fit=crop',
    gallery_images: [],
    client_name: 'PEPSI',
    project_year: 2024,
    tags: ['rebranding', 'culture', 'legacy'],
    featured: true,
    slug: 'pepsi-legacy-culture',
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    title: 'Luxury reimagined for motion',
    description: 'Bringing automotive luxury into the digital age with sophisticated design.',
    category: 'Digital Experience',
    image_url: 'https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=800&h=600&fit=crop',
    gallery_images: [],
    client_name: 'MERCEDES BENZ',
    project_year: 2023,
    tags: ['luxury', 'automotive', 'digital'],
    featured: true,
    slug: 'mercedes-luxury-motion',
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    title: 'Outfitting the explorers of tomorrow',
    description: 'Adventure-ready brand positioning for the next generation of outdoor enthusiasts.',
    category: 'Brand Positioning',
    image_url: 'https://images.unsplash.com/photo-1551632811-561732d1e306?w=800&h=600&fit=crop',
    gallery_images: [],
    client_name: 'THE NORTH FACE',
    project_year: 2023,
    tags: ['outdoor', 'adventure', 'sustainability'],
    featured: true,
    slug: 'north-face-explorers-tomorrow',
    created_at: '2024-01-04T00:00:00Z',
    updated_at: '2024-01-04T00:00:00Z'
  },
  {
    id: '5',
    title: 'Rebranding flavor, one sandwich at a time',
    description: 'Fresh approach to fast-casual dining with emphasis on quality and customization.',
    category: 'Food & Beverage',
    image_url: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=800&h=600&fit=crop',
    gallery_images: [],
    client_name: 'SUBWAY',
    project_year: 2023,
    tags: ['food', 'rebranding', 'fresh'],
    featured: true,
    slug: 'subway-rebranding-flavor',
    created_at: '2024-01-05T00:00:00Z',
    updated_at: '2024-01-05T00:00:00Z'
  }
]

export const mockTeamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Sam Obadina',
    role: 'FOUNDER',
    bio: 'Leading creative vision and strategic direction for Feathers.',
    image_url: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face',
    featured: true,
    order_index: 0,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'CREATIVE DIRECTOR',
    bio: 'Specializing in brand identity and visual storytelling.',
    image_url: 'https://images.unsplash.com/photo-1494790108755-2616b332c786?w=400&h=400&fit=crop&crop=face',
    featured: true,
    order_index: 1,
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    name: 'Mike Chen',
    role: 'LEAD DEVELOPER',
    bio: 'Building exceptional digital experiences with cutting-edge technology.',
    image_url: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face',
    featured: true,
    order_index: 2,
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z'
  },
  {
    id: '4',
    name: 'Emily Rodriguez',
    role: 'STRATEGY DIRECTOR',
    bio: 'Crafting data-driven strategies that deliver measurable results.',
    image_url: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face',
    featured: true,
    order_index: 3,
    created_at: '2024-01-04T00:00:00Z',
    updated_at: '2024-01-04T00:00:00Z'
  }
]

export const mockBlogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'The Future of Brand Design',
    content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    excerpt: 'Exploring emerging trends in brand design and their impact on business success.',
    author: 'Sam Obadina',
    author_image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
    featured_image: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop',
    category: 'Design',
    tags: ['branding', 'design', 'trends'],
    published: true,
    slug: 'future-of-brand-design',
    reading_time: 8,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  }
]

export const mockServices: Service[] = [
  {
    id: '1',
    title: 'Brand Identity',
    description: 'Complete brand identity design from concept to implementation',
    icon: 'palette',
    features: ['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'],
    featured: true,
    order_index: 0,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    title: 'Web Design',
    description: 'Modern, responsive websites that convert visitors into customers',
    icon: 'monitor',
    features: ['Responsive Design', 'User Experience', 'Performance Optimization', 'CMS Integration'],
    featured: true,
    order_index: 1,
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z'
  },
  {
    id: '3',
    title: 'Digital Strategy',
    description: 'Data-driven strategies that align with your business goals',
    icon: 'target',
    features: ['Market Research', 'Competitor Analysis', 'Growth Strategy', 'Analytics Setup'],
    featured: true,
    order_index: 2,
    created_at: '2024-01-03T00:00:00Z',
    updated_at: '2024-01-03T00:00:00Z'
  }
]

export const mockTestimonials: Testimonial[] = [
  {
    id: '1',
    client_name: 'John Smith',
    client_role: 'CEO',
    client_company: 'TechCorp Inc.',
    content: 'Feathers transformed our brand identity completely. The results exceeded our expectations and our customer engagement has increased by 300%.',
    rating: 5,
    featured: true,
    created_at: '2024-01-01T00:00:00Z',
    updated_at: '2024-01-01T00:00:00Z'
  },
  {
    id: '2',
    client_name: 'Maria Garcia',
    client_role: 'Marketing Director',
    client_company: 'ShopEasy',
    content: 'The team at Feathers delivered an exceptional e-commerce platform. Their attention to detail and user experience is unmatched.',
    rating: 5,
    featured: true,
    created_at: '2024-01-02T00:00:00Z',
    updated_at: '2024-01-02T00:00:00Z'
  }
]