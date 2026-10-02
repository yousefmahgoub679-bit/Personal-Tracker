# Personal Tracker

Habit + task tracker with Google sign-in, using Supabase for accounts and storage. A static site with no build step.

Files:
- `index.html`: the app
- `config.js`: your Supabase URL and key go here
- `supabase.sql`: creates the table and the privacy rules (run once)

Do the steps in this order. Each one needs something from the one before.

## 1. Put the site on Vercel (to get your address)
1. Create a repository on github.com, click **uploading an existing file**, drag in these files, and click **Commit changes**.
2. Go to vercel.com/new, sign in with GitHub, **Import** the repository, and click **Deploy** (Framework: Other).
3. Note your address, e.g. `https://personal-tracker.vercel.app`. The site already works in guest mode.

## 2. Create the Supabase project
1. Go to supabase.com, sign in, and click **New project**. Pick a name and a database password, and choose a region near you (for Egypt, **Frankfurt (eu-central-1)**). Wait about a minute while it's created.
2. Left menu **SQL Editor > New query**: paste all of `supabase.sql` and click **Run**. It should say "Success. No rows returned".
3. **Project Settings > API** (sometimes shown as **Data API / API Keys**): copy the **Project URL** and the **anon public** key (or **publishable** key) into `config.js`. On GitHub, open `config.js`, click the pencil, paste them, and click **Commit changes**. Vercel updates the site by itself.

## 3. Make a Google sign-in key (Google Cloud, free)
1. Go to console.cloud.google.com, sign in, and create a project (top bar > project picker > **New project**).
2. Search for **Google Auth Platform** (or **APIs & Services > OAuth consent screen**) and click **Get started**. Enter the app name ("Personal Tracker") and your email, choose **External**, and finish.
3. In **Audience**, click **Publish app** so anyone can sign in. While it's in "Testing", only the emails you add under Test users can sign in.
4. Go to **Clients** (or **Credentials > Create credentials > OAuth client ID**) and choose **Web application**.
   - **Authorized JavaScript origins:** your Vercel address, e.g. `https://personal-tracker.vercel.app`
   - **Authorized redirect URIs:** the **Callback URL** shown in Supabase under **Authentication > Sign In / Providers > Google**. It looks like `https://<your-project>.supabase.co/auth/v1/callback`.
   - Click **Create** and copy the **Client ID** and **Client secret**.

## 4. Switch on Google in Supabase
1. Supabase **Authentication > Sign In / Providers > Google**: turn it on, paste the Client ID and Client secret, and click **Save**.
2. Supabase **Authentication > URL Configuration**:
   - **Site URL:** your Vercel address, e.g. `https://personal-tracker.vercel.app`
   - **Redirect URLs > Add URL:** `https://personal-tracker.vercel.app/**`
   - Click **Save**.

Open your site and click **Continue with Google**. Done.

## If something goes wrong
- **"redirect_uri_mismatch" from Google:** the redirect URI in step 3.4 must exactly match Supabase's Callback URL.
- **You're sent back to the site but you're not signed in:** add your Vercel address in step 4.2 (Site URL and Redirect URLs).
- **"Access blocked: app is in testing":** publish the app (step 3.3) or add your email as a test user.
- **Saving shows an error after signing in:** run `supabase.sql` again (step 2.2).

## Notes
- People can choose **Use without an account**. Their data stays in that browser and moves into their account if they sign in later.
- Signing out removes the local copy from that browser.
- Changes made on another device show up when you come back to the tab.
