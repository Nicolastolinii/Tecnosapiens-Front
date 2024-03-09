const openGraph = ({ title, description, image, url }) => {
    return (
      <head>
        <title>{title}</title>
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:url" content={url} />
      </head>
    );
  };