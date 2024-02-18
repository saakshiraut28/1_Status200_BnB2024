import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { login, error, isLoading } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login(email, password);
  };

  return (
    <form
      className="login-container" // Apply CSS class here
      onSubmit={handleSubmit}
      style={{
        backgroundImage: 'url("https://img.freepik.com/free-vector/pharmaceutical-biotech-science-background-with-heartbeat-line-graph_1017-44803.jpg?w=1060&t=st=1708244069~exp=1708244669~hmac=109e8a4ad79098b54070c3b1616f32e0c3ec21d992c9207b157138d27a39f2c3")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '90vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div className="login absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white md:px-20 px-6 py-10" style={{ borderRadius: '20px' }}>
        <h3 className="title text-2xl font-bold py-5">
        <span className="text-[#7be0c9]">L</span>og <span className="text-[#7be0c9]">I</span>n</h3>
        <div className="md:space-x-2 py-2">
          <label className="title text-md font-medium">Email address:</label>
          <input
            className="border-b-2 outline-none hover:border-black"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="md:space-x-2 py-2">
          <label className="title text-md font-medium">Password:</label>
          <input
            className="border-b-2 outline-none hover:border-black"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>

        <button
          className="button my-4 py-2 px-6 rounded-sm font-bold text-md bg-[#88f7dd] hover:bg-[#6df897]"
          disabled={isLoading}
        >
          Log in
        </button>
        {error && <div className="error">{error}</div>}
      </div>
    </form>
  );
};

export default Login;
