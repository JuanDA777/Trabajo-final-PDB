db.materias.insertMany([
    {"_id": 1, "Materia": "Fundamento Matemático", "Codigo": 84001, "Descripcion": "Introducción a conceptos matemáticos", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.2, "Prerrequisitos": "Ninguno", "Profesor": "Leidy Marcela Gómez Melo", "Aula": "203 JN"},
    {"_id": 2, "Materia": "Lógica Matemática", "Codigo": 84002, "Descripcion": "Estudio de la lógica y sus aplicaciones", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 5, "Prerrequisitos": "Ninguno", "Profesor": "Alejandra Zuleta Medina", "Aula": "601 MI"},
    {"_id": 3, "Materia": "Algoritmos y Programación 1", "Codigo": 84003, "Descripcion": "Fundamentos de programación", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 4, "Promedio_calificaciones": 4.3, "Prerrequisitos": "Ninguno", "Profesor": "Alvaro Alexander Martinez Navarro", "Aula": "601 MI"},
    {"_id": 4, "Materia": "Introducción a la Ingeniería", "Codigo": 84004, "Descripcion": "Conceptos básicos de ingeniería", "Creditos": 1, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.7, "Prerrequisitos": "Ninguno", "Profesor": "Magda Mireya Salazar Suárez", "Aula": "603 MI"},
    {"_id": 5, "Materia": "Lectoescritura Investigativa", "Codigo": 84005, "Descripcion": "Técnicas de lectura y escritura académica", "Creditos": 1, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.4, "Prerrequisitos": "Ninguno", "Profesor": "Javier Orlando Poveda Argoti", "Aula": "501 SJ"},
    {"_id": 6, "Materia": "Pensamiento Filosófico", "Codigo": 84006, "Descripcion": "Introducción a la filosofía", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.5, "Prerrequisitos": "Ninguno", "Profesor": "Eyner Fabian Chamorro Guerrero", "Aula": "603 MI"},
    {"_id": 7, "Materia": "Contenidos Digitales", "Codigo": 84007, "Descripcion": "Creación y gestión de contenidos digitales", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.1, "Prerrequisitos": "Ninguno", "Profesor": "Javier Mauricio López Moreno", "Aula": "601 MI"},
    {"_id": 8, "Materia": "Electrónica Interactiva", "Codigo": 84008, "Descripcion": "Fundamentos de electrónica", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 5, "Prerrequisitos": "Ninguno", "Profesor": "Nancy Cristina Legarda Lopez", "Aula": "Lab"},
    {"_id": 9, "Materia": "Curso de Desarrollo Humano", "Codigo": 84009, "Descripcion": "Desarrollo personal y profesional", "Creditos": 1, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 5, "Prerrequisitos": "Ninguno", "Profesor": "John Edison Chaucanez Erazo", "Aula": "203 JN"},
    {"_id": 10, "Materia": "Álgebra Lineal", "Codigo": 84010, "Descripcion": "Estudio de vectores y matrices", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 3.7, "Prerrequisitos": "Ninguno", "Profesor": "Nancy Cristina Legarda Lopez", "Aula": "302 JN"},
    {"_id": 11, "Materia": "Cálculo Diferencial", "Codigo": 84011, "Descripcion": "Derivadas y aplicaciones", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.1, "Prerrequisitos": "Aprobar Fundamento Matemático", "Profesor": "Nancy Cristina Legarda Lopez", "Aula": "302 JN"},
    {"_id": 12, "Materia": "Algoritmos y Programación 2", "Codigo": 84012, "Descripcion": "Programación avanzada", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 4, "Promedio_calificaciones": 4.7, "Prerrequisitos": "Aprobar Algoritmos y Programación 1", "Profesor": "Javier Mauricio López Moreno", "Aula": "601 MI"},
    {"_id": 13, "Materia": "Mecánica", "Codigo": 84013, "Descripcion": "Principios de mecánica", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 3, "Promedio_calificaciones": 4.6, "Prerrequisitos": "Ninguno", "Profesor": "Favio Nicolas Rosero Rodríguez", "Aula": "Lab"},
    {"_id": 14, "Materia": "Epistemología Específica", "Codigo": 84014, "Descripcion": "Estudio del conocimiento", "Creditos": 1, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.4, "Prerrequisitos": "Ninguno", "Profesor": "Eyner Fabian Chamorro Guerrero", "Aula": "203 JN"},
    {"_id": 15, "Materia": "Humanismo Cristiano", "Codigo": 84015, "Descripcion": "Valores y ética cristiana", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.4, "Prerrequisitos": "Ninguno", "Profesor": "Eyner Fabian Chamorro Guerrero", "Aula": "203 JN"},
    {"_id": 16, "Materia": "Cloud Computing", "Codigo": 84016, "Descripcion": "Curso electivo", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.2, "Prerrequisitos": "Ninguno", "Profesor": "Maria Fernanda Granda Romero", "Aula": "604 MI"},
    {"_id": 17, "Materia": "Delitos Informáticos", "Codigo": 84017, "Descripcion": "Curso electivo", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.2, "Prerrequisitos": "Ninguno", "Profesor": "Madeline Daniela Narvaez Muñoz", "Aula": "602 MI"},
    {"_id": 18, "Materia": "Matemáticas Discretas", "Codigo": 84018, "Descripcion": "Teoría de conjuntos y lógica", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 3.8, "Prerrequisitos": "Ninguno", "Profesor": "Martha Nubia Carrillo Obando", "Aula": "302 JN"},
    {"_id": 19, "Materia": "Cálculo Integral", "Codigo": 84019, "Descripcion": "Integrales y aplicaciones", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.3, "Prerrequisitos": "Aprobar Cálculo Diferencial", "Profesor": "Martha Nubia Carrillo Obando", "Aula": "302 JN"},
    {"_id": 20, "Materia": "Métodos Numéricos", "Codigo": 84020, "Descripcion": "Solución numérica de ecuaciones", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.4, "Prerrequisitos": "Aprobar Algoritmos Y Programación 2", "Profesor": "Javier Mauricio López Moreno", "Aula": "303 JN"},
    {"_id": 21, "Materia": "Algoritmos Y Programación III", "Codigo": 84021, "Descripcion": "Programación avanzada", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 4, "Promedio_calificaciones": 4.7, "Prerrequisitos": "Ninguno", "Profesor": "Daniel Fernando Arteaga Fajardo", "Aula": "601 MI"},
    {"_id": 22, "Materia": "Electricidad Y Magnetismo", "Codigo": 84022, "Descripcion": "Fundamentos de electricidad y magnetismo", "Creditos": 2, "Horas_clase_teoricas": 0, "Hora_clase_practica": 3, "Promedio_calificaciones": 4.6, "Prerrequisitos": "Aprobar Mecanica", "Profesor": "Favio Nicolas Rosero Rodríguez", "Aula": "Lab"},
    {"_id": 23, "Materia": "Ética Profesional", "Codigo": 84023, "Descripcion": "Ética en el ámbito profesional", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.6, "Prerrequisitos": "Ninguno", "Profesor": "Juan Pablo Arcos Villota", "Aula": "104 MI"},
    {"_id": 24, "Materia": "Aplicaciones móviles", "Codigo": 84024, "Descripcion": "Curso electivo", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.9, "Prerrequisitos": "Ninguno", "Profesor": "Gustavo Willyn Sanchez Rodriguez", "Aula": "604 MI"},
    {"_id": 25, "Materia": "Diseño interfaz usuario", "Codigo": 84025, "Descripcion": "Curso electivo", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.3, "Prerrequisitos": "Ninguno", "Profesor": "Maria Fernanda Granda Romero", "Aula": "603 MI"},
    {"_id": 26, "Materia": "Ecuaciones Diferenciales", "Codigo": 84026, "Descripcion": "Solución de ecuaciones diferenciales", "Creditos": 2, "Horas_clase_teoricas": 3, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.6, "Prerrequisitos": "Aprobar Calculo Integral", "Profesor": "Leidy Marcela Gómez Melo", "Aula": "104 MI"},
    {"_id": 27, "Materia": "Máquinas Eléctricas", "Codigo": 84027, "Descripcion": "Estudio de máquinas eléctricas", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 3, "Promedio_calificaciones": 4.7, "Prerrequisitos": "Ninguno", "Profesor": "Favio Nicolas Rosero Rodríguez", "Aula": "Lab"},
    {"_id": 28, "Materia": "Estructura De Datos I", "Codigo": 84028, "Descripcion": "Fundamentos de estructuras de datos", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 4, "Promedio_calificaciones": 4.2, "Prerrequisitos": "Aprobar Algoritmos Y Programación 3", "Profesor": "Fabian Parra Pay", "Aula": "601 Mi"},
    {"_id": 29, "Materia": "Interacción Hombre Máquina", "Codigo": 84029, "Descripcion": "Diseño de interfaces", "Creditos": 3, "Horas_clase_teoricas": 3, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.7, "Prerrequisitos": "Ninguno", "Profesor": "Javier Mauricio López Moreno", "Aula": "603 MI"},
    {"_id": 30, "Materia": "Probabilidad Y Estadística Descriptiva", "Codigo": 84030, "Descripcion": "Fundamentos de probabilidad y estadística", "Creditos": 3, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.4, "Prerrequisitos": "Ninguno", "Profesor": "Leidy Marcela Gómez Melo", "Aula": "601 MI"},
    {"_id": 31, "Materia": "Constitución y Democracia", "Codigo": 84031, "Descripcion": "Democracia y constitución", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.5, "Prerrequisitos": "Ninguno", "Profesor": "José Javier Villalba Romero", "Aula": "603 MI"},
    {"_id": 32, "Materia": "Cloud Computing II", "Codigo": 84032, "Descripcion": "Computación en la nube nivel intermedio", "Creditos": 1, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 5, "Prerrequisitos": "Ninguno", "Profesor": "Gustavo Willyn Sanchez Rodriguez", "Aula": "603 MI"},
    {"_id": 33, "Materia": "Teoría De Bases De Datos", "Codigo": 84033, "Descripcion": "Fundamentos de bases de datos", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 3, "Promedio_calificaciones": 4.7, "Prerrequisitos": "Ninguno", "Profesor": "Danny Michael Cardenas Martínez", "Aula": "601 MI"},
    {"_id": 34, "Materia": "Estructura De Datos II", "Codigo": 84034, "Descripcion": "Estructuras de datos avanzadas", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 4, "Promedio_calificaciones": 4.4, "Prerrequisitos": "Aprobar Estructura De Datos I", "Profesor": "Fabian Parra Pay", "Aula": "601 MI"},
    {"_id": 35, "Materia": "Estadística Inferencial", "Codigo": 84035, "Descripcion": "Métodos de inferencia estadística", "Creditos": 3, "Horas_clase_teoricas": 0, "Hora_clase_practica": 3, "Promedio_calificaciones": 4.1, "Prerrequisitos": "Ninguno", "Profesor": "José Javier Villalba Romero", "Aula": "601 MI"},
    {"_id": 36, "Materia": "Electrónica Digital", "Codigo": 84036, "Descripcion": "Fundamentos de electrónica digital", "Creditos": 2, "Horas_clase_teoricas": 0, "Hora_clase_practica": 3, "Promedio_calificaciones": 4.9, "Prerrequisitos": "Ninguno", "Profesor": "José Javier Villalba Romero", "Aula": "Lab"},
    {"_id": 37, "Materia": "Procesos De Investigación I", "Codigo": 84037, "Descripcion": "Metodología de la investigación", "Creditos": 1, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 5, "Prerrequisitos": "Ninguno", "Profesor": "Alejandra Zuleta Medina", "Aula": "601 MI"},
    {"_id": 38, "Materia": "Formulación Y Gestión De Proyectos", "Codigo": 84038, "Descripcion": "Gestión de proyectos", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 4.5, "Prerrequisitos": "Ninguno", "Profesor": "Alejandra Zuleta Medina", "Aula": "601 MI"},
    {"_id": 39, "Materia": "Python Foundation", "Codigo": 84039, "Descripcion": "Python fundamentos", "Creditos": 2, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 5, "Prerrequisitos": "Ninguno", "Profesor": "Javier Mauricio López Moreno", "Aula": "603 MI"},
    {"_id": 40, "Materia": "Lectura y Escritura Aplicada a Ingeniería", "Codigo": 84040, "Descripcion": "Preparativos para Saber pro", "Creditos": 1, "Horas_clase_teoricas": 2, "Hora_clase_practica": 0, "Promedio_calificaciones": 5, "Prerrequisitos": "Ninguno", "Profesor": "Alejandra Zuleta Medina", "Aula": "601 MI"}
]);
//Estas materias son las primeras 40 cursadas por el actual sexto semestre, por esa razon se encuentran profesores que actualmene ya no hacen parte

db.materias.find({"Materia": {$eq: "Cloud Computing II"}})
db.materias.find({"Creditos": {$gt: 2}})
db.materias.find({"Horas_clase_teoricas": {$gte: 2}})
db.materias.find({"Hora_clase_practica": {$lt: 3}})
db.materias.find({"Codigo": {$lte: 84035}})
db.materias.find({"Profesor": {$ne: "Alejandra Zuleta Medina"}})
db.materias.find({"Aula": {$in: ["601 MI", "603 MI"]}})
db.materias.find({"Aula": {$nin: ["601 MI", "Lab"]}})
db.materias.find({"Creditos": {$gt: 2}})
db.materias.remove({"_id": 31})