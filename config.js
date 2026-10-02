// Supabase settings for Google sign-in.
// Find them in Supabase: Project Settings > API (Project URL and the "anon" / "publishable" key).
// These two values are safe to publish: your data is protected by the row-level security in supabase.sql.
// Leave them empty to run without accounts (everything is saved in the visitor's browser only).
window.SUPABASE_CONFIG = {
  url: "",      // e.g. "https://abcdefghijklmnop.supabase.co"
  anonKey: ""   // the long key that starts with "eyJ..." or "sb_publishable_..."
};
