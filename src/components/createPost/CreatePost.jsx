import { useState } from "react";
import 'react-quill/dist/quill.snow.css';
import './style.css'; // Assuming the existence of this file for styling
import Editor from "./Editor"; // Assuming the existence of this component
import { useAuth } from "../../utils/AuthProvider"; // Assuming the existence of this utility
import { Navigate } from "react-router-dom";

export const CreatePost = () => {
  const [blogData, setBlogData] = useState({
    titulo: '',
    contenido: '',
    autorId: 1, // Replace with appropriate logic to set author ID
    categoria: '',
    image: null,
  });
  const { token, API } = useAuth();
  const [redirect, setRedirect] = useState(false);

  async function createNewPost(event) {
    event.preventDefault();

    const formData = new FormData();
    formData.append('file', blogData.image);
    formData.append('titulo', blogData.titulo);
    formData.append('contenido', blogData.contenido);
    formData.append('autorId', blogData.autorId);
    formData.append('categoria', blogData.categoria);
    console.log("FormData:", formData);
    try {
      const response = await fetch(`${API}/blog/create`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
        body: formData,
      });
      if (response.ok) {
        const data = await response.json();
        console.log('Blog created:', data);
        //setRedirect(true); // Assuming you want to redirect on success
      } else {
        console.error('Error creating blog:', response.statusText);
      }
    } catch (error) {
      console.error('Error creating blog:', error);
    }
  }

  //if (redirect) {
    //return <Navigate to={'/'} />; // Assuming you want to redirect to '/' on success
  //}

  // Handle form input changes
  const handleChange = (eventOrContent) => {
    if (typeof eventOrContent === 'object') {
      const { name, value } = eventOrContent.target;
      setBlogData({ ...blogData, [name]: value });
    } else {
      setBlogData({ ...blogData, contenido: eventOrContent }); // Update editor content
    }
  };


  const handleImageChange = (event) => {
    setBlogData({ ...blogData, image: event.target.files[0] });
  };

  return (
    <form className="flex flex-col container mt-10 gap-4 h-" onSubmit={createNewPost}>
      <input
        type="text"
        name="titulo"
        className="input-editor"
        placeholder="Titulo"
        value={blogData.titulo}
        onChange={handleChange}
      />
      <input
        type="text"
        className="input-editor"
        name="categoria"
        placeholder="Categoria"
        value={blogData.categoria.toLowerCase()}
        onChange={handleChange}
      />
      <input type="file" className="input-editor" onChange={handleImageChange} />
      <Editor value={blogData.contenido} onChange={handleChange} />
      <button className="button-editor">Create post</button>
    </form>
  );
};
