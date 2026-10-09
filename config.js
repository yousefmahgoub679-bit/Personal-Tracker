// Supabase settings for Google sign-in.
// These two values are safe to publish: your data is protected by the row-level security in supabase.sql.
window.SUPABASE_CONFIG = {
  url: "https://bmvyhsvvhdyzekqcbugh.supabase.co",
  anonKey: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJtdnloc3Z2aGR5emVrcWNidWdoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTA5MzgxNjAsImV4cCI6MjEwNjUxNDE2MH0.A7WqH3cyocv5YJ_5_7gmZYCOMiTfNooP12ujJsUEdSE"
};

// Selling access: only Gmail addresses on the paid list can use the tracker.
// Everyone else sees an "Activate your account" screen with these payment details.
window.SALES = {
  on: true,
  price: "250 EGP",                            // one-time payment, lifetime access
  instapay: "youssefayman011@instapay",
  telda: "@yusuf1010 · 01092922409",
  whatsapp: "201092922409",                    // for buyers' questions
  maxDevices: 2                                // devices one account can be signed in on at the same time
};
