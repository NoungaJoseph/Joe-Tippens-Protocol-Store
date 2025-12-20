# Deployment Guide for Render.com

Follow these steps to deploy your PureProtocol backend to Render.

## 1. Prepare your Repository
- Ensure your `backend` folder is at the root of your repository or you know the subfolder path.
- Ensure `package.json` in the `backend` folder has:
  ```json
  "scripts": {
    "start": "node server.js"
  }
  ```

## 2. Create a Web Service on Render
1. Log in to [Render.com](https://render.com).
2. Click **New +** and select **Web Service**.
3. Connect your GitHub/GitLab repository.
4. Set the following configurations:
   - **Name**: `pureprotocol-backend`
   - **Root Directory**: `backend` (if your repo has the backend in a subfolder)
   - **Environment**: `Node`
   - **Build Command**: `npm install`
   - **Start Command**: `npm start`

## 3. Configure Environment Variables
In the Render dashboard for your service, go to **Environment** and add:
- `STRIPE_SECRET_KEY`: Your LIVE secret key from Stripe (`sk_live_...`)
- `CORS_ORIGIN`: Your frontend URL (e.g., `https://your-store.vercel.app`)
- `PORT`: `4242`

## 4. Update Frontend
Once your backend is deployed, you will get a URL like `https://pureprotocol-backend.onrender.com`. 
Update your frontend `.env` or Vercel environment variables:
- `VITE_API_URL`: `https://pureprotocol-backend.onrender.com`
- `VITE_STRIPE_PUBLISHABLE_KEY`: Your LIVE publishable key from Stripe (`pk_live_...`)

## 5. Verify
Test a small transaction (or use test mode) to ensure the connection works.
