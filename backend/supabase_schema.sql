-- PureProtocol Store: Supabase Database Schema
-- Run this script in your Supabase Dashboard: SQL Editor -> New Query -> Run

CREATE TABLE IF NOT EXISTS public.users (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  first_name TEXT NOT NULL,
  last_name TEXT NOT NULL,
  email TEXT UNIQUE NOT NULL,
  password TEXT NOT NULL,
  saved_products JSONB DEFAULT '[]'::jsonb,
  orders JSONB DEFAULT '[]'::jsonb,
  created_at TIMESTAMPTZ DEFAULT NOW(),
  updated_at TIMESTAMPTZ DEFAULT NOW()
);

-- Enable Row Level Security (RLS)
ALTER TABLE public.users ENABLE ROW LEVEL SECURITY;

-- Allow backend service role key full access
DROP POLICY IF EXISTS "Service role full access" ON public.users;
CREATE POLICY "Service role full access" 
ON public.users 
TO service_role 
USING (true) 
WITH CHECK (true);
