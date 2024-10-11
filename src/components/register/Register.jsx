import { useState } from 'react';
import { useAuth } from '../../utils/AuthProvider';
import { useNavigate } from "react-router-dom";
import Eye from "../../assets/ver.png"
import EyeClosed from "../../assets/EyeClosed.png"




export const Register = () => {
    const [formData, setFormData] = useState({ user: '', userName: '', correo: '', password: '' });
    const [statusCode, setStatusCode] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const { API } = useAuth();
    const navigate = useNavigate();
    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };
    const isValidEmail = email => {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    function isValidPassword(password) {
        const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^\w\d\s:])([^\s]){8,}$/;
        return passwordRegex.test(password);
    }

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
        if (name === "correo") {
            if (!isValidEmail(value)) {
                console.error("Email no válido");
                setStatusCode(100)
            } else {
                setStatusCode()
            }
        }
        if (name === "password") {
            if (!isValidPassword(value)) {
                setStatusCode(101)
            } else {
                setStatusCode()
            }
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!isValidEmail(formData.correo) || !isValidPassword(formData.password)) {
            setStatusCode(102)
            return;
        }
        try {
            const response = await fetch(`${API}/v1/user/register`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            setStatusCode(response.status)
            if (!response.ok) {
                throw new Error('Error Registrarse');
            }
            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            console.error('Error al iniciar sesión:', error);
        }
    };
    return (
        <div className="min-h-[60vh] pt-20  flex justify-center flex-col items-center">
            <div className="bg-gray-100  transition-all px-8 pt-8 pb-10 rounded shadow-xl w-full sm:w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Registro</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="user" className="block text-gray-700">Username</label>
                        <input
                            type="text"
                            id="user"
                            name="user"
                            value={formData.user}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <div className='flex justify-between'>
                            <label htmlFor="password" className="block text-gray-700">Password</label>
                            {statusCode === 101 && (
                                <span className='text-red-700 font-medium  opacity-90 rounded-lg '>*Contraseña invalida</span>
                            )}

                        </div>
                        <input
                            type={showPassword ? 'text' : 'password'}
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            className={`${statusCode === 101 ? 'focus:border-red-500 border-red-500 border-2' : "border-gray-300 border"} w-full   rounded px-3 py-2 mt-1 focus:outline-none focus:border-black`}
                            required
                        />
                        <button
                            type="button"
                            className="absolute translate-y-3.5 -translate-x-8 "
                            onClick={togglePasswordVisibility}
                        >
                            <img
                                src={showPassword ? Eye : EyeClosed}
                                alt={showPassword ? 'Ocultar contraseña' : 'Mostrar contraseña'}
                            />
                        </button>
                        <ul className="list-disc pl-5 pt-2 opacity-60">
                            <li className={`${formData.password.length >= 8 ? 'line-through' : ''}`}>Mínimo 8 caracteres</li>
                            <li className={`${/\d/.test(formData.password) ? 'line-through' : ''}`}>Al menos un número</li>
                            <li className={`${/[A-Z]/.test(formData.password) ? 'line-through' : ''}`}>Al menos una letra mayúscula</li>
                            <li className={`${/[a-z]/.test(formData.password) ? 'line-through' : ''}`}>Al menos una letra minúscula</li>
                            <li className={`${/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(formData.password) ? 'line-through' : ''}`}>Al menos un símbolo especial</li>
                        </ul>
                    </div>
                    <div className="mb-6">
                        <div className='flex justify-between'>
                            <label htmlFor="email" className="block text-gray-700">Email</label>
                            {statusCode === 100 && (
                                <span className='text-red-700 font-medium  opacity-90 rounded-lg '>*Correo Invalido</span>
                            )}
                        </div>
                        <input
                            type="email"
                            id="correo"
                            name="correo"
                            value={formData.correo}
                            onChange={handleChange}
                            className={`${statusCode === 100 ? 'focus:border-red-500 border-red-500 border-2' : "border-gray-300 border"} w-full  rounded px-3 py-2 mt-1 focus:outline-none focus:border-black`}
                            required
                        />

                    </div>
                    <div className="mb-6">
                        <label htmlFor="userName" className="block text-gray-700">NickName</label>
                        <input
                            type="text"
                            id="userName"
                            name="userName"
                            value={formData.userName}
                            onChange={handleChange}
                            className="w-full border border-gray-300 rounded px-3 py-2 mt-1 focus:outline-none focus:border-black"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-[#555] text-white py-2 px-4 rounded hover:bg-[#6b6b6b]"
                    >
                        Registrarse
                    </button>
                </form>
                <div className=' duration-200'>
                    {statusCode && (
                        <div>
                            {statusCode === 201 && (
                                <div className='text-white mt-12 bg-green-600 py-4 px-10 opacity-90 rounded-lg text-center'>
                                    <p className=''>Usuario creado con éxito</p>
                                    <p className=''>Redirigiendo...</p>
                                </div>
                            )}
                            {statusCode === 400 && (
                                <p className='text-white mt-12 bg-red-600 py-4 px-10 opacity-90 rounded-lg text-center'>Error de solicitud</p>
                            )}
                            {statusCode === 409 && (
                                <p className='text-white mt-12 bg-red-500 py-4 px-10 opacity-90 rounded-lg text-center'>Verifique su direccion de Correo y/o Username.</p>
                            )}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
