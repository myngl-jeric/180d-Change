import { supabase } from '../lib/supabaseClient';

export default function Home() {
  const testConnection = async () => {
    const { data, error } = await supabase.auth.getUser();
    console.log("Supabase user:", data.user || error);
  };

  return (
    <div>
      <h1>Welcome to 180d Change!</h1>
      <button onClick={testConnection}>Test Supabase Connection</button>
    </div>
  );
}
