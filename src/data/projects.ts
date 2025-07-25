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
        image: "https://imageurl.com",
        tecnologies: [],
        resume: "Aplicacion que permite buscar recetas de bebidas basandose en ingredientes y puede generar recetas con IA",
        highlights: [],
        demoUrl: 'https://drinkyapp.netlify.app/',
        repoUrl: 'https://github.com/gabrielciprianoo/drink-finder'
    }
]