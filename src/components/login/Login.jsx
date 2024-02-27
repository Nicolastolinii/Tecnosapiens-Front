// Login.js
import React, { useState } from 'react';
import { useAuth } from '../../utils/AuthProvider';
import { useNavigate } from "react-router-dom";


const Login = () => {
  const [formData, setFormData] = useState({ user: '', password: '' });
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://blog-api-production-2065.up.railway.app/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData), // Suponiendo que formData contiene email y password
      });
      if (!response.ok) {
        throw new Error('Error de red al iniciar sesión');
      }
      const token = await response.text();
      login(token); // Llama a la función login del contexto de autenticación para guardar el token
      navigate("/")
    } catch (error) {
      console.error('Error al iniciar sesión:', error);
    }
  };

  return (
    <div className="min-h-[60vh] pt-28  flex justify-center items-center">
      <div className="bg-gray-100 p-8 rounded shadow-xl w-full sm:w-96">
        <h2 className="text-2xl font-bold mb-6 text-center">Iniciar sesión</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="user" className="block text-gray-700">Username</label>
            <input
              type="user"
              id="user"
              name="user"
              value={formData.user}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-black"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-black"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-[#555] text-white py-2 px-4 rounded hover:bg-[#6b6b6b]"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
