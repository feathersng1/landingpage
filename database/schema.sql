-- Enable RLS (Row Level Security)
-- Run this in your Supabase SQL Editor

-- Portfolio Items Table
CREATE TABLE portfolio_items (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  category TEXT NOT NULL,
  image_url TEXT NOT NULL,
  gallery_images TEXT[] DEFAULT '{}',
  client_name TEXT NOT NULL,
  project_year INTEGER NOT NULL,
  tags TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT false,
  slug TEXT UNIQUE NOT NULL,
  case_study_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Blog Posts Table
CREATE TABLE blog_posts (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT,
  author TEXT NOT NULL,
  author_image TEXT,
  featured_image TEXT NOT NULL,
  category TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  published BOOLEAN DEFAULT false,
  slug TEXT UNIQUE NOT NULL,
  reading_time INTEGER DEFAULT 5,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Team Members Table
CREATE TABLE team_members (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  role TEXT NOT NULL,
  bio TEXT,
  image_url TEXT NOT NULL,
  linkedin_url TEXT,
  twitter_url TEXT,
  email TEXT,
  featured BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Services Table
CREATE TABLE services (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  icon TEXT NOT NULL,
  features TEXT[] DEFAULT '{}',
  featured BOOLEAN DEFAULT true,
  order_index INTEGER DEFAULT 0,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Testimonials Table
CREATE TABLE testimonials (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  client_name TEXT NOT NULL,
  client_role TEXT NOT NULL,
  client_company TEXT NOT NULL,
  content TEXT NOT NULL,
  rating INTEGER DEFAULT 5 CHECK (rating >= 1 AND rating <= 5),
  project_id UUID REFERENCES portfolio_items(id),
  featured BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL
);

-- Enable Row Level Security
ALTER TABLE portfolio_items ENABLE ROW LEVEL SECURITY;
ALTER TABLE blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE team_members ENABLE ROW LEVEL SECURITY;
ALTER TABLE services ENABLE ROW LEVEL SECURITY;
ALTER TABLE testimonials ENABLE ROW LEVEL SECURITY;

-- Create policies for public read access
CREATE POLICY "Enable read access for all users" ON portfolio_items FOR SELECT USING (true);
CREATE POLICY "Enable read access for published posts" ON blog_posts FOR SELECT USING (published = true);
CREATE POLICY "Enable read access for all users" ON team_members FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON services FOR SELECT USING (true);
CREATE POLICY "Enable read access for all users" ON testimonials FOR SELECT USING (true);

-- Create updated_at trigger function
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create triggers for updated_at
CREATE TRIGGER update_portfolio_items_updated_at BEFORE UPDATE ON portfolio_items FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_blog_posts_updated_at BEFORE UPDATE ON blog_posts FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_team_members_updated_at BEFORE UPDATE ON team_members FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_services_updated_at BEFORE UPDATE ON services FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();
CREATE TRIGGER update_testimonials_updated_at BEFORE UPDATE ON testimonials FOR EACH ROW EXECUTE FUNCTION update_updated_at_column();

-- Insert sample data (you can modify these or add through your admin interface)

-- Sample Portfolio Items
INSERT INTO portfolio_items (title, description, category, image_url, client_name, project_year, tags, featured, slug) VALUES
('Brand Identity for TechCorp', 'Complete brand identity design including logo, color palette, and brand guidelines', 'Branding', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop', 'TechCorp Inc.', 2024, ARRAY['branding', 'identity', 'logo'], true, 'techcorp-brand-identity'),
('E-commerce Platform Design', 'Modern e-commerce platform with seamless user experience', 'Web Design', 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop', 'ShopEasy', 2024, ARRAY['web design', 'ecommerce', 'ux'], true, 'shopeasy-ecommerce-platform'),
('Mobile App Interface', 'Intuitive mobile app design for fitness tracking', 'App Design', 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop', 'FitTracker', 2023, ARRAY['mobile', 'app design', 'fitness'], true, 'fittracker-mobile-app');

-- Sample Team Members
INSERT INTO team_members (name, role, bio, image_url, featured, order_index) VALUES
('Sam Obadina', 'Founder & Creative Director', 'Leading creative vision and strategic direction for Feathers.', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face', true, 0),
('Sarah Johnson', 'Senior Designer', 'Specializing in brand identity and visual storytelling.', 'https://images.unsplash.com/photo-1494790108755-2616b332c786?w=400&h=400&fit=crop&crop=face', true, 1),
('Mike Chen', 'Lead Developer', 'Building exceptional digital experiences with cutting-edge technology.', 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face', true, 2),
('Emily Rodriguez', 'Strategy Director', 'Crafting data-driven strategies that deliver measurable results.', 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face', true, 3);

-- Sample Blog Posts
INSERT INTO blog_posts (title, content, excerpt, author, author_image, featured_image, category, tags, published, slug, reading_time) VALUES
('The Future of Brand Design', 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...', 'Exploring emerging trends in brand design and their impact on business success.', 'Sam Obadina', 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face', 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=400&fit=crop', 'Design', ARRAY['branding', 'design', 'trends'], true, 'future-of-brand-design', 8);

-- Sample Services
INSERT INTO services (title, description, icon, features, featured, order_index) VALUES
('Brand Identity', 'Complete brand identity design from concept to implementation', 'palette', ARRAY['Logo Design', 'Color Palette', 'Typography', 'Brand Guidelines'], true, 0),
('Web Design', 'Modern, responsive websites that convert visitors into customers', 'monitor', ARRAY['Responsive Design', 'User Experience', 'Performance Optimization', 'CMS Integration'], true, 1),
('Digital Strategy', 'Data-driven strategies that align with your business goals', 'target', ARRAY['Market Research', 'Competitor Analysis', 'Growth Strategy', 'Analytics Setup'], true, 2);

-- Sample Testimonials
INSERT INTO testimonials (client_name, client_role, client_company, content, rating, featured) VALUES
('John Smith', 'CEO', 'TechCorp Inc.', 'Feathers transformed our brand identity completely. The results exceeded our expectations and our customer engagement has increased by 300%.', 5, true),
('Maria Garcia', 'Marketing Director', 'ShopEasy', 'The team at Feathers delivered an exceptional e-commerce platform. Their attention to detail and user experience is unmatched.', 5, true);