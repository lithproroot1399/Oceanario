// pages/index.js ou pages/about.js

import ImageCarousel from '../components/ImageCarousel';

const HomePage = () => {
  const imageList = [
    'picsum.photos',
    'picsum.photos',
    'picsum.photos',
    // Adicione mais URLs de imagem aqui
  ];

  return (
    <div>
      <h1>Bem-vindo ao Meu Site Next.js</h1>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <ImageCarousel images={imageList} />
      </div>
    </div>
  );
};

export default HomePage;
