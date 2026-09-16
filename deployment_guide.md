# Deployment Guide for Render.com & Supabase

Follow these steps to deploy your PureProtocol backend to Render and connect it to Supabase.

## 1. Prepare your Repository
- Ensure the updated code in `backend` is committed and pushed to your GitHub repository (`NoungaJoseph/Joe-Tippens-Protocol-Store`).

## 2. Render Web Service Settings
1. Log in to [Render.com](https://render.com).
2. Open your backend Web Service (e.g. `backend-1v3w`).
3. Under **Settings**, verify:
   - **Root Directory**: `backend`
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

## 3. Configure Environment Variables on Render
In the Render dashboard under **Environment**, add the following variables:
- `DATABASE_URL`: `postgresql://postgres:[YOUR-PASSWORD]@db.lfnevomqmjihrdshtwgd.supabase.co:5432/postgres` (replace `[YOUR-PASSWORD]` with your actual Supabase DB password)
- `JWT_SECRET`: A long random secret key for authentication (e.g. `pureprotocol_super_secure_jwt_secret_2026`)
- `CORS_ORIGIN`: Your frontend URL (e.g., `https://pureprotocols.com` or `https://your-store.vercel.app`)
- `PORT`: (Render sets this automatically, default is 10000)
- `STRIPE_SECRET_KEY`: Your live or test Stripe secret key (`sk_...`)
- `EMAIL_SERVICE`: (Optional) `gmail`
- `EMAIL_USER`: (Optional) Your email address
- `EMAIL_PASS`: (Optional) App password for sending order emails

## 4. Update Frontend (Vercel or local .env)
Set the backend URL on your frontend:
- `VITE_API_URL`: `https://backend-1v3w.onrender.com`
- `VITE_STRIPE_PUBLISHABLE_KEY`: Your Stripe publishable key (`pk_...`)

## 5. Verify
Once redeployed on Render:
1. Check the Render logs — you should see:
   `Supabase PostgreSQL connected and tables verified.`
   `Node server listening on port 10000!`
2. Try registering a user or logging in on the frontend to verify end-to-end database connectivity.
