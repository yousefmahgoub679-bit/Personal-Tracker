# Personal Tracker

Habit + task tracker with Google sign-in. A static site: no build step.

## 1. Create the Firebase project (free, about 5 minutes)

1. Go to https://console.firebase.google.com and click **Create a project**. Any name works. Google Analytics is not needed.
2. **Turn on Google sign-in:** left menu **Build > Authentication > Get started > Sign-in method > Google**. Switch it on, choose a support email, click **Save**.
3. **Create the database:** **Build > Firestore Database > Create database**. Pick a location close to you (for Egypt, `europe-west1` or `me-central1`), start in **production mode**.
4. **Set the security rules:** in Firestore open the **Rules** tab, replace everything with the contents of `firestore.rules`, click **Publish**.
5. **Get your web config:** click the gear icon > **Project settings** > scroll to **Your apps** > click the **</>** (Web) icon > give it a nickname > **Register app**. Copy the values from the `firebaseConfig` it shows into `config.js`.

## 2. Deploy to Vercel

**Easiest (no installs):**
1. Create a new repository on github.com, click **uploading an existing file**, drag in all the files from this folder, and click **Commit changes**.
2. Go to https://vercel.com/new, sign in with GitHub, pick the repository, and click **Deploy**. (Framework preset: Other. No build command.)

**Or from the command line (needs Node.js):** run `npx vercel` in this folder, then `npx vercel --prod`.

## 3. Allow your Vercel address to use sign-in

Firebase console > **Authentication > Settings > Authorized domains > Add domain**, and add your site's address, for example `personal-tracker.vercel.app` (no `https://`). Sign-in will fail with an "unauthorized domain" error until you do this.

## Notes
- Each person's data is stored at `users/<their id>/tracker/...` and the rules let only them read or write it.
- People can also choose **Use without an account**. Their data then stays in that browser, and moves into their account if they sign in later.
- Signing out removes the local copy from that browser.
