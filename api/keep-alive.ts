import { createClient } from '@supabase/supabase-js';

// Vercel Serverless Functions in Vite projects use standard Node.js/Edge runtime
// We use process.env for server-side environment variables
const supabaseUrl = process.env.VITE_SUPABASE_URL || process.env.SUPABASE_URL;
const supabaseAnonKey = process.env.VITE_SUPABASE_ANON_KEY || process.env.SUPABASE_ANON_KEY;

export default async function handler(req: any, res: any) {
  // Optional: Verify the request is from Vercel Cron
  // const authHeader = req.headers['authorization'];
  // if (authHeader !== `Bearer ${process.env.CRON_SECRET}`) {
  //   return res.status(401).json({ error: 'Unauthorized' });
  // }

  if (!supabaseUrl || !supabaseAnonKey) {
    return res.status(500).json({ 
      success: false, 
      error: 'Supabase environment variables are missing' 
    });
  }

  try {
    const supabase = createClient(supabaseUrl, supabaseAnonKey);
    
    const startTime = Date.now();
    
    // Simple query to keep the database active
    // Using 'portfolio_items' as confirmed from previous steps
    const { error } = await supabase
      .from('portfolio_items')
      .select('id')
      .limit(1);

    if (error) {
      console.error('Keep-alive failed:', error.message);
      return res.status(500).json({ 
        success: false, 
        error: error.message 
      });
    }

    const duration = Date.now() - startTime;
    const timestamp = new Date().toISOString();

    console.log(`[${timestamp}] Keep-alive successful (${duration}ms)`);

    return res.status(200).json({
      success: true,
      timestamp,
      duration,
      message: 'Supabase database is active'
    });
  } catch (err) {
    console.error('Keep-alive error:', err);
    return res.status(500).json({ 
      success: false, 
      error: err instanceof Error ? err.message : String(err) 
    });
  }
}
