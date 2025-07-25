export type Project = {
  name: string;
  image: string;
  tecnologies: string[];
  resume: string;
  highlights: string[];
  demoUrl: string;
  repoUrl: string;
};

export const projects : Project[] = [
    {
        name : "Drinky",
        image: "/images/drinky-preview.png",
        tecnologies: ['React JS', 'Tailwind', 'Typescript'],
        resume: "Aplicacion que permite buscar recetas de bebidas basandose en ingredientes y puede generar recetas con IA",
        highlights: ['Estado Global con Zustand', 'Validacion con Valibot', 'OpenAI API'],
        demoUrl: 'https://drinkyapp.netlify.app/',
        repoUrl: 'https://github.com/gabrielciprianoo/drink-finder'
    },
    {
        name : "Drinky",
        image: "/images/drinky-preview.png",
        tecnologies: ['React JS', 'Tailwind', 'Typescript'],
        resume: "Aplicacion que permite buscar recetas de bebidas basandose en ingredientes y puede generar recetas con IA",
        highlights: ['Estado Global con Zustand', 'Validacion con Valibot', 'OpenAI API'],
        demoUrl: 'https://drinkyapp.netlify.app/',
        repoUrl: 'https://github.com/gabrielciprianoo/drink-finder'
    },
 
]