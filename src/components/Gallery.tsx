"use client"
import { useEffect, useState } from "react"
import PhotoAlbum from "react-photo-album"
import Image from "next/image"

// Importação do Lightbox e seus estilos
import Lightbox from "yet-another-react-lightbox"
import "yet-another-react-lightbox/styles.css"

export default function Gallery() {
  const [photos, setPhotos] = useState([])
  const [index, setIndex] = useState(-1) // -1 significa que o lightbox está fechado

  useEffect(() => {
    fetch("/api/photos")
      .then((res) => res.json())
      .then((data) => setPhotos(data))
  }, [])

  return (
    <div className="p-5">
      {/* Galeria Principal */}
      <PhotoAlbum
        layout="masonry"
        photos={photos}
        columns={(containerWidth) => {
          if (containerWidth < 500) return 1
          if (containerWidth < 800) return 2
          return 3
        }}
        onClick={({ index }) => setIndex(index)} // Abre o lightbox no índice clicado
        renderPhoto={({ photo, wrapperStyle }) => (
          <div
            style={wrapperStyle}
            className="relative overflow-hidden rounded-xl mb-4 group cursor-pointer"
          >
            <Image
              src={photo.src}
              alt="Foto da Galeria"
              width={photo.width}
              height={photo.height}
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              className="transition-transform duration-300 group-hover:scale-105"
            />
          </div>
        )}
      />

      {/* Componente do Lightbox */}
      <Lightbox
        index={index}
        open={index >= 0}
        close={() => setIndex(-1)}
        slides={photos} // Usa o mesmo array de fotos da galeria
      />
    </div>
  )
}
