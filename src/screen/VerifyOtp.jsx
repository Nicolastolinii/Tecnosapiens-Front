
import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../utils/AuthProvider";
import { NavBar } from "../components/main/navbar/NavBar";
import { useEffect, useState } from "react";
import { HashLoader } from "react-spinners";
import EmailError from "../assets/MailError.png"
import EmailSuccess from "../assets/EmailSuccess.png"



export const VerifyOtp = () => {
    const { API } = useAuth();
    const { search } = useLocation();
    const params = new URLSearchParams(search);
    const email = params.get("email");
    const otp = params.get("otp")
    const [loading, setLoading] = useState(true);
    const [status, setStatus] = useState(null);
    console.log(email)
    useEffect(() => {
        const verifyAccount = async () => {
            try {
                const response = await fetch(`${API}/validate/verify-account?email=${email}&otp=${otp}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status == 200) {
                    setStatus(response.status)
                    setLoading(false)
                    setTimeout(() => {
                        Navigate("/");
                    }, 2000);
                }
                if (!response.ok) {
                    setStatus(response.status)
                    setLoading(false)
                    throw new Error('Failed to verify account');
                }
            } catch (error) {
                console.log(error.message);
                setLoading(false);
            }
        };
        if (email != null && otp != null) {
            verifyAccount();
        }
    }, [API, email, otp]);


    return (
        <>
            <NavBar  />
            <section className="h-screen flex-col flex items-center bg-[#F2F2F2] justify-center">
                {
                    loading ? (
                        <div className="flex flex-col justify-center items-center">
                            <HashLoader
                                color="#333333"
                                size={100}
                                speedMultiplier={1.3}
                            />
                            <div className="pt-8 font-bold text-center text-2xl font-poppins">
                                <p className="text-[#5c5c5c]">Verificando...</p>
                            </div>
                        </div>
                    )
                        : <div className=" w-2/4 h-1/2 items-center flex justify-center shadow-xl rounded-xl bg-[#3E5063]">
                            {
                                status == 200 ? (
                                    <div className=" w-2/3  flex items-center justify-center">
                                        <img src={EmailSuccess} alt="email success" />
                                        <p className="text-[#b4c7dd] text-2xl pl-2 max-w-[24rem] font-semibold">¡Éxito! La cuenta ha sido verificada correctamente.</p>
                                    </div>
                                ) : (
                                    <div className="w-2/3 flex items-center justify-center">
                                        <img src={EmailError} alt="email error" />
                                        <p className="text-[#926b6a] text-2xl pl-2 font-semibold">Ocurrio un error. Por favor, inténtalo de nuevo más tarde.</p>
                                    </div>
                                )
                            }
                        </div>
                }
            </section>

        </>
    )
}
