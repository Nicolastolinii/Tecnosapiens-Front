import React, { useState } from 'react';

function CrearBlog() {
  const [blogData, setBlogData] = useState({
    titulo: '',
    contenido: '',
    autorId: 1, // Aquí debes establecer el ID del autor según tu lógica de autenticación/autorización
    categoria: '',
    imageBase64: ''
  });
  const token= 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJuaXh4IiwiaWF0IjoxNzA3NzAzMjc1LCJleHAiOjE3MDc3MDY4NzV9.U_KpLTE9mD1oea6wEeF29wjfStZ7PulW0ss57OTdWYNE9dov2vgVluRnXCfAhtf7iL_1ar54Qh10c_sTWibdOw'
  const handleSubmit = async (event) => {
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
      } else {
        console.error('Error al crear el blog1:', response.statusText);
      }
    } catch (error) {
      // Si hay un error en la solicitud, puedes mostrar un mensaje de error al usuario o manejarlo de alguna otra manera
      console.error('Error al crear el blog2:', error);
    }
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setBlogData({ ...blogData, [name]: value });
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
    <form onSubmit={handleSubmit}>
      <label>
        Título:
        <input type="text" name="titulo" value={blogData.titulo} onChange={handleChange} />
      </label>
      <label>
        Contenido:
        <textarea name="contenido" value={blogData.contenido} onChange={handleChange} />
      </label>
      <label>
        Categoría:
        <input type="text" name="categoria" value={blogData.categoria} onChange={handleChange} />
      </label>
      <label>
        Imagen:
        <input type="file" accept="image/*" onChange={handleImageChange} />
      </label>
      <button type="submit">Crear Blog</button>
    </form>
  );
}

export default CrearBlog;
