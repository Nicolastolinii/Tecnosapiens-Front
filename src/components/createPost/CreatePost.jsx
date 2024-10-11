import { useState } from "react";
import Check from "../../assets/cheque.png"
import 'react-quill/dist/quill.snow.css';
import './style.css';
import Editor from "./Editor";
import { useAuth } from "../../utils/AuthProvider";
import Modal from "../../utils/Modal";
import ImageCompressor from "../../utils/ImageCompressor";

export const CreatePost = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blogData, setBlogData] = useState({
    titulo: '',
    contenido: '',
    categoria: '',
    image: null,
  });
  const { token, API, UserId } = useAuth();
  const userId = UserId();

  async function createNewPost(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', blogData.image);
    formData.append('titulo', blogData.titulo);
    formData.append('contenido', blogData.contenido);
    formData.append('autorId', userId);
    formData.append('categoria', blogData.categoria);
    console.log("FormData:", formData);
    try {
      for (let [key, value] of formData.entries()) {
        console.log(`${key}: ${value}`);
      }
      const response = await fetch(`${API}/blog/create`, {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${token}`
        },
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Blog created:', data);
        setIsModalOpen(true)
      } else {
        setIsModalOpen(false)
        console.error('Error creating blog:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  }

  const handleChange = (eventOrContent) => {
    if (typeof eventOrContent === 'object') {
      const { name, value } = eventOrContent.target;
      setBlogData({ ...blogData, [name]: value });
    } else {
      setBlogData({ ...blogData, contenido: eventOrContent });
    }
  };


  const handleImageChange = (event) => {
    ImageCompressor(event.target.files[0], (compressedImage) => {
      setBlogData({ ...blogData, image: compressedImage });

    })
  };


  return (
    <form className="flex flex-col container my-12 gap-4 h-" onSubmit={createNewPost}>
      <input
        type="text"
        name="titulo"
        className="input-editor"
        placeholder="Titulo"
        value={blogData.titulo}
        onChange={handleChange}
      />
      <select
        className="input-editor"
        name="categoria"
        value={blogData.categoria.toLowerCase()}
        onChange={handleChange}
      >
        <option value="">Selecciona una categoría</option>
        <option value="IT">IT</option>
        <option value="Ciberseguridad">Ciberseguridad</option>
        <option value="IA">IA</option>
        <option value="Redes y comunicaciones">Redes y comunicaciones</option>
        <option value="Programación">Programación</option>
        <option value="Cloud computing">Cloud computing</option>
        <option value="Ciencia de datos">Ciencia de datos</option>

      </select>
      <input type="file" className="input-editor" onChange={handleImageChange} />
      <Editor value={blogData.contenido} onChange={handleChange} />
      {
        blogData.contenido.length > 65535 && (
          <p className="text-red-500 font-semibold bg-slate-200 font-poppins">
            El contenido supera la cantidad máxima de caracteres.
          </p>
        )
      }
      <Modal isModalOpen={isModalOpen} buttonText={"Redirigir"} nav="/" >
        <h2 className="font-poppins font-semibold text-xl ">Post Creado Exitosamente...</h2>
        <img className="py-2" src={Check} alt="check exitoso" />
      </Modal>
      <button className="button-editor">Create post</button>
    </form>
  );
};
