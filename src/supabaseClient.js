import { createClient } from "@supabase/supabase-js";

const SUPABASE_URL = "https://gzgtgpoafaqknkieoebi.supabase.co";
const SUPABASE_API_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd6Z3RncG9hZmFxa25raWVvZWJpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjE3ODM2ODMsImV4cCI6MjA3NzM1OTY4M30.EQ21L4P1xN5OYhDMY7qFmGjYMApVkSo17R5ZIIUgbso";

export const supabase = createClient(SUPABASE_URL, SUPABASE_API_KEY);
