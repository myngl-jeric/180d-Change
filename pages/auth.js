import { supabase } from '../lib/supabaseClient';

export default function Auth() {
  const handleLogin = async () => {
    const { error } = await supabase.auth.signInWithPassword({
      email: 'user@example.com',
      password: 'password',
    });
    if (error) console.error("Login error:", error);
  };

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Sign In</button>
    </div>
  );
}
