import { NextResponse } from "next/server"
import fs from "fs"
import path from "path"

export async function GET() {
  // Caminho da pasta dentro de public/
  const galleryDir = path.join(process.cwd(), "public/galeria")

  try {
    const filenames = fs.readdirSync(galleryDir)

    // Filtra apenas arquivos de imagem e cria o objeto para a galeria
    const photos = filenames
      .filter((file) => /\.(jpg|jpeg|png|webp|avif)$/i.test(file))
      .map((name) => ({
        src: `/galeria/${name}`,
        width: 1080, // Largura base (o layout Masonry ajusta automaticamente)
        height: 1620, // Altura base (proporção retrato estilo Pinterest)
      }))

    return NextResponse.json(photos)
  } catch (error) {
    return NextResponse.json({ error: "Erro ao ler a pasta" }, { status: 500 })
  }
}
