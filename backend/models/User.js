const { supabase } = require('../db');

class User {
  constructor(data = {}) {
    this.id = data.id || null;
    this._id = data.id || null; // For compatibility with frontend and legacy mongoose ID references
    this.firstName = data.first_name || data.firstName || '';
    this.lastName = data.last_name || data.lastName || '';
    this.email = data.email || '';
    this.password = data.password || '';
    this.savedProducts = Array.isArray(data.saved_products)
      ? data.saved_products
      : Array.isArray(data.savedProducts)
      ? data.savedProducts
      : [];
    this.orders = Array.isArray(data.orders) ? data.orders : [];
    this.createdAt = data.created_at || data.createdAt || new Date();
    this.updatedAt = data.updated_at || data.updatedAt || new Date();
  }

  // Find user by email
  static async findOne(conditions) {
    if (!conditions || !conditions.email || !supabase) return null;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .ilike('email', conditions.email.trim())
      .maybeSingle();

    if (error) {
      console.error('Supabase findOne error:', error.message);
      return null;
    }
    return data ? new User(data) : null;
  }

  // Find user by id, supporting optional .select('-password') chaining
  static async findById(id) {
    if (!id || !supabase) return null;
    const { data, error } = await supabase
      .from('users')
      .select('*')
      .eq('id', id)
      .maybeSingle();

    if (error) {
      console.error('Supabase findById error:', error.message);
      return null;
    }
    if (!data) return null;

    const user = new User(data);

    // Attach select method for chaining e.g. User.findById(id).select('-password')
    user.select = function (projection) {
      if (projection === '-password') {
        const { password, ...safeUser } = this;
        return safeUser;
      }
      return this;
    };

    return user;
  }

  // Save new or modified user to Supabase
  async save() {
    if (!supabase) {
      throw new Error('Supabase client not initialized. Please check your environment variables.');
    }

    if (this.id) {
      // Update existing user
      const { data, error } = await supabase
        .from('users')
        .update({
          first_name: this.firstName,
          last_name: this.lastName,
          password: this.password,
          saved_products: this.savedProducts || [],
          orders: this.orders || [],
          updated_at: new Date().toISOString(),
        })
        .eq('id', this.id)
        .select()
        .single();

      if (error) {
        throw new Error(`Supabase update error: ${error.message}`);
      }
      if (data) {
        Object.assign(this, new User(data));
      }
      return this;
    } else {
      // Insert new user
      const { data, error } = await supabase
        .from('users')
        .insert({
          first_name: this.firstName,
          last_name: this.lastName,
          email: this.email.trim().toLowerCase(),
          password: this.password,
          saved_products: this.savedProducts || [],
          orders: this.orders || [],
        })
        .select()
        .single();

      if (error) {
        throw new Error(`Supabase insert error: ${error.message}`);
      }
      if (data) {
        Object.assign(this, new User(data));
      }
      return this;
    }
  }
}

module.exports = User;
