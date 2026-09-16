const path = require('path');
require('dotenv').config({ path: path.join(__dirname, '.env') });
require('dotenv').config();
const { createClient } = require('@supabase/supabase-js');

const supabaseUrl = process.env.SUPABASE_URL || 'https://lfnevomqmjihrdshtwgd.supabase.co';
const supabaseKey =
  process.env.SUPABASE_SECRET_KEY ||
  process.env.SUPABASE_SERVICE_ROLE_KEY ||
  process.env.SUPABASE_KEY;

let supabase = null;

if (supabaseUrl && supabaseKey) {
  supabase = createClient(supabaseUrl, supabaseKey, {
    auth: {
      persistSession: false,
      autoRefreshToken: false,
    },
  });
}

// Automatically verify Supabase connection and schema health on startup
async function initDb() {
  if (!supabase) {
    console.warn('⚠️ SUPABASE_URL or SUPABASE_SECRET_KEY not found. Running server without active database connection.');
    return;
  }

  try {
    const { error } = await supabase.from('users').select('id').limit(1);
    if (error) {
      if (error.code === 'PGRST205') {
        console.warn('⚠️ Table "public.users" does not exist yet in Supabase schema cache. Please run the SQL schema in your Supabase SQL Editor.');
      } else {
        console.warn('⚠️ Supabase connection warning:', error.message);
      }
    } else {
      console.log('✅ Supabase connected and "users" table verified.');
    }
  } catch (err) {
    console.error('❌ Supabase connection error:', err.message);
  }
}

module.exports = {
  supabase,
  initDb,
};
