import { Curso } from "../../models/curso-to";

export const cursos:Curso[] =[
    {
        materia: 'JavaScript',
        dificultad: 8,
        requiere: 'HTML y CSS'
    },
    {
        materia: 'TypeScript',
        dificultad: 7,
        requiere: 'JavaScript'
    },
    {
        materia: 'Angular',
        dificultad: 9,
        requiere: 'HTML y CSS, JS y TS'
    },
    {
        materia: 'Kotlin',
        dificultad: 8,
        requiere: 'Java y C# '
    },
]