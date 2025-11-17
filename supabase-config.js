// supabase-config.js
// This file connects your frontend (Vercel site) to your Supabase project.

import { createClient } from 'https://esm.sh/@supabase/supabase-js@2';

// 1) Go to Supabase -> Settings -> API
// 2) Copy your Project URL into the line below (inside the quotes)
// 3) Copy your "anon public" key into the line below (inside the quotes)

const SUPABASE_URL = 'https://pswcyvsgzmzfrsahwcwb.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBzd2N5dnNnem16ZnJzYWh3Y3diIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjMzODI5NTAsImV4cCI6MjA3ODk1ODk1MH0.pgASp-GV40gdOgP0RS7mxOTUK_uSEWvszGV0x2BDMws';

// Create the Supabase client we will use in other files
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
