import {useState} from "react";
import 'react-quill/dist/quill.snow.css';
import './style.css';
import Editor from "./Editor";
import { useAuth } from "../../utils/AuthProvider";
export const CreatePost = () => {
    const [blogData, setBlogData] = useState({
        titulo: '',
        contenido: '',
        autorId: 1, // Aquí debes establecer el ID del autor según tu lógica de autenticación/autorización
        categoria: '',
        imageBase64: ''
      });
      const { token } = useAuth();
        const [redirect, setRedirect] = useState(false);
        async function createNewPost(event) {
            event.preventDefault();

            try {
              // Construir el objeto de opciones para la solicitud POST
              const requestOptions = {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                  Authorization: `Bearer ${token}`
                },
                body: JSON.stringify(blogData)
              };
        
              // Realizar la solicitud para crear un blog
              const response = await fetch('http://localhost:8080/blog/create', requestOptions);
        
              if (response.ok) {
                const data = await response.json();
                console.log('Blog creado:', data);
                setRedirect(true);
              } else {
                console.error('Error al crear el blog-1:', response.statusText);
              }
            } catch (error) {
              // Si hay un error en la solicitud, puedes mostrar un mensaje de error al usuario o manejarlo de alguna otra manera
              console.error('Error al crear el blog-2:', error);
            }
          };
      
        if (redirect) {
          //return <Navigate to={'/'} />
        }
        const handleChange = (eventOrContent) => {
            if (typeof eventOrContent === 'object') {
                // Manejar evento de cambio de elemento de formulario
                const { name, value } = eventOrContent.target;
                setBlogData({ ...blogData, [name]: value });
            } else {
                // Manejar contenido directo del editor
                setBlogData({ ...blogData, contenido: eventOrContent });
            }
        };
        
          const handleImageChange = (event) => {
            const file = event.target.files[0];
            if (file) {
              const reader = new FileReader();
              reader.onloadend = () => {
                setBlogData({ ...blogData, imageBase64: reader.result });
              };
              reader.readAsDataURL(file);
            }
          };
  return (
    <form className="flex flex-col container mt-10 gap-4 h-" onSubmit={createNewPost}>
      <input type="text"
            name="titulo"
            className="input-editor"
             placeholder={'Titulo'}
             value={blogData.titulo}
             onChange={handleChange} />
      <input type="text"
            className="input-editor"
            name="categoria"
             placeholder={'Categoria'}
             value={blogData.categoria}
             onChange={handleChange} />
      <input type="file"
            className="input-editor"
             onChange={handleImageChange} />
      <Editor value={blogData.contenido} onChange={handleChange} />
      <button  className="button-editor">Create post</button>
    </form>
  )
}
