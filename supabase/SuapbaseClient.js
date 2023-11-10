import { createClient } from '@supabase/supabase-js';
const supabaseUrl = "https://cmvnkqjwdajodusgonbl.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImNtdm5rcWp3ZGFqb2R1c2dvbmJsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTY5OTUzMTU5MSwiZXhwIjoyMDE1MTA3NTkxfQ.3xEbjVjOesaI-hzXNYDvfY7SoNj1-eU6ajK2I6VLm2I"
const supabase = createClient(supabaseUrl, supabaseKey);
export default supabase;