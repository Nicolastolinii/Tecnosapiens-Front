import { useEffect } from "react";


export const Conditions = () => {
    useEffect(() => {
          window.scrollTo(0, 0);
      }, []);
    return (
        <section className="container mx-auto px-16 pt-6 pb-20 mt-[74px] font-poppins ">
            <h1 className="text-3xl font-bold">
                Términos y condiciones
            </h1>

            <h2 className="text-xl font-semibold mt-7">Introducción</h2>

            <p className="text-sm lg:text-base font-light mt-5"> Estos Términos y Condiciones (en adelante, los "Términos") rigen el
                uso del blog de tecnología (en adelante, el "Blog") creado por Nicolas Tolini (en adelante, el "Propietario").
                El Blog se encuentra disponible en la siguiente dirección web: <a
                    className="underline text-sky-600 hover:text-sky-800"
                    href="https://www.tecnosapiens.blog/">www.tecnosapiens.blog</a></p>

            <h2 className="text-xl font-semibold mt-7"> Aceptación de los Términos</h2>

            <p className="text-sm lg:text-base font-light mt-5"> Al acceder y utilizar el Blog, usted (en adelante, el "Usuario")
                acepta y se obliga a cumplir con los presentes Términos. Si no está de acuerdo con los Términos, no debe
                utilizar el Blog. </p>

            <h2 className="text-xl font-semibold mt-7"> Enlaces a otros sitios web</h2>

            <p className="text-sm lg:text-base font-light mt-5"> El Blog puede contener enlaces a otros sitios web. El Propietario
                no se hace responsable del contenido de los sitios web enlazados. </p>

            <h2 className="text-xl font-semibold mt-7"> Modificación de los Términos</h2>

            <p className="text-sm lg:text-base font-light mt-5">El Propietario se reserva el derecho de modificar los Términos en
                cualquier momento. Los cambios en los Términos entrarán en vigor en el momento de su publicación en el Blog.
            </p>


            <h2 className="text-xl font-semibold mt-7"> Ley aplicable y jurisdicción</h2>

            <p className="text-sm lg:text-base font-light mt-5"> Los presentes Términos se regirán e interpretarán de acuerdo con
                las leyes de la República Argentina. Cualquier controversia que surja en relación con los presentes Términos
                será sometida a la jurisdicción de los tribunales ordinarios de la Ciudad Autónoma de Buenos Aires. </p>

            <h2 className="text-xl font-semibold mt-7"> Contacto</h2>

            <p className="text-sm lg:text-base font-light mt-5"> Si tiene alguna pregunta sobre los presentes Términos, puede
                ponerse en contacto con el Propietario a través de la siguiente dirección de correo electrónico: <a className="underline text-sky-600 hover:text-sky-800" href="mailto:nicotolinikpo@gmail.com">tecnosapiens@hotmail.com</a> </p>

            <h2 className="text-xl font-semibold mt-7"> Fecha de vigencia</h2>

            <p className="text-sm lg:text-base font-light mt-5"> Los presentes Términos entran en vigor el 08/03/2024. </p>

            <h2 className="text-xl font-semibold mt-7"> Politica de privacidad</h2>

            <p className="text-sm lg:text-base font-light mt-5"> El Blog tiene una Política de Privacidad que describe cómo se
                recopila y utiliza la información personal de los Usuarios. El Usuario puede acceder a la Política de Privacidad
                en el siguiente enlace: <a target="_blank" className="underline text-sky-600 hover:text-sky-800"
                    href="https://policies.google.com/privacy?hl=es">https://policies.google.com/privacy?hl=es</a></p>

            <h2 className="text-xl font-semibold mt-7"> Exclusión de responsabilidad</h2>

            <p className="text-sm lg:text-base font-light mt-5"> El Propietario no se hace responsable de los daños y perjuicios que
                puedan derivarse del uso del Blog. El Usuario utiliza el Blog bajo su propia responsabilidad.</p>

            <h2 className="text-xl font-semibold mt-7"> Disposiciones generales</h2>

            <p className="text-sm lg:text-base font-light mt-5"> Los presentes Términos constituyen el acuerdo completo entre el
                Propietario y el Usuario en relación con el uso del Blog. Si cualquier disposición de los presentes Términos se
                considera inválida o inaplicable, dicha disposición se eliminará de los Términos y las demás disposiciones
                permanecerán en vigor.</p>
        </section>
    )
}
