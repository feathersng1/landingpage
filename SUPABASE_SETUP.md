# Supabase Setup Guide

Your Feathers website now supports dynamic content through Supabase! Here's how to set it up:

## Quick Start (Currently Using Mock Data)

Your website is currently working with mock data and will automatically switch to live data once Supabase is configured.

## Setting Up Supabase (Optional)

### 1. Create Supabase Project
- Go to [supabase.com](https://supabase.com)
- Click "Start your project"
- Create a new project (free tier available)

### 2. Get Your Credentials
- In your Supabase dashboard, go to **Settings → API**
- Copy these values:
  - **Project URL** (e.g., `https://abcdef.supabase.co`)
  - **anon/public key** (starts with `eyJhbGciOiJIUzI1NI`)

### 3. Configure Environment
- Copy `.env.example` to `.env.local`
- Replace the placeholder values:
  ```
  NEXT_PUBLIC_SUPABASE_URL=https://your-project-id.supabase.co
  NEXT_PUBLIC_SUPABASE_ANON_KEY=your-actual-anon-key-here
  ```

### 4. Set Up Database
- In Supabase, go to **SQL Editor**
- Copy and paste the entire contents of `/database/schema.sql`
- Click "Run" to create all tables and sample data

### 5. Install Dependencies
```bash
npm install @supabase/supabase-js
```

## What You Get

### 📊 Dynamic Content Management
- **Portfolio items** with categories, tags, and featured status
- **Team members** with photos, roles, and bios
- **Blog posts** with full content management
- **Services** with descriptions and features
- **Client testimonials** with ratings

### 🔒 Secure & Scalable
- Row Level Security (RLS) enabled
- Public read access for published content
- Admin interface for content management
- Automatic image optimization through Supabase

### 🎯 Content Features
- **Featured content** - Mark items to appear on homepage
- **Categories and tags** - Organize your portfolio and blog
- **SEO-friendly URLs** - Automatic slug generation
- **Rich metadata** - Descriptions, categories, publish dates

## Using the Admin Interface

Access the admin interface by importing and using the `AdminPortfolio` component:

```tsx
import { AdminPortfolio } from './components/admin/AdminPortfolio'

// Use in your app for content management
<AdminPortfolio />
```

## Current Behavior

- **Without Supabase**: Uses beautiful mock data (portfolio, team, etc.)
- **With Supabase**: Automatically switches to live database content
- **Error handling**: Falls back to mock data if database is unavailable

Your website works perfectly right now with mock data, and will seamlessly upgrade to dynamic content when you're ready to set up Supabase!

## Need Help?

- Check the browser console for Supabase connection status
- Ensure your environment variables are correctly set
- Verify your database schema matches `/database/schema.sql`
- Test your connection in the Supabase dashboard