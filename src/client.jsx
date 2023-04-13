import { createClient } from "@supabase/supabase-js";

const URL = "https://ugnskiekxctehhgffceq.supabase.co";

const API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVnbnNraWVreGN0ZWhoZ2ZmY2VxIiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODA2NTQyMzUsImV4cCI6MTk5NjIzMDIzNX0.NQ7wMeM6uAC5mHUJJLeP0yNN0Utp-GIMIuNzZieHm2Q";

export const supabase = createClient(URL, API_KEY);
