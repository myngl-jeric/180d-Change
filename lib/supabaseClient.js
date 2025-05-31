import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://fwcwrcahbdgihcpgpwrh.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ3Y3dyY2FoYmRnaWhjcGdwd3JoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDg2MDU0OTAsImV4cCI6MjA2NDE4MTQ5MH0.PjA8HXaiLGYqAhFToe-Scje1pBAAoxAnDTRFhIAWVtk';

export const supabase = createClient(supabaseUrl, supabaseKey);
