export type Project = {
  name: string;
  image: ImageMetadata;
  tecnologies: string[];
  resume: string;
  highlights: string[];
  demoUrl: string;
  repoUrl: string;
};

import drinkyImage from '../assets/images/drinky-preview.png'

export const projects : Project[] = [
    {
        name : "Drinky",
        image: drinkyImage,
        tecnologies: ['React JS', 'Tailwind', 'Typescript'],
        resume: "Aplicacion que permite buscar recetas de bebidas basandose en ingredientes y puede generar recetas con IA",
        highlights: ['Estado Global con Zustand', 'Validacion con Valibot', 'OpenAI API'],
        demoUrl: 'https://drinkyapp.netlify.app/',
        repoUrl: 'https://github.com/gabrielciprianoo/drink-finder'
    },
    {
        name : "Drinky",
        image: drinkyImage,
        tecnologies: ['React JS', 'Tailwind', 'Typescript'],
        resume: "Aplicacion que permite buscar recetas de bebidas basandose en ingredientes y puede generar recetas con IA",
        highlights: ['Estado Global con Zustand', 'Validacion con Valibot', 'OpenAI API'],
        demoUrl: 'https://drinkyapp.netlify.app/',
        repoUrl: 'https://github.com/gabrielciprianoo/drink-finder'
    },
 
]