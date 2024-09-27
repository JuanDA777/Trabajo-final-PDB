db.coches.insertMany([
    { _id: 1, modelo: 'Corolla', marca: 'Toyota', año: 2019, consumo_en_kilometros: 30, color: 'Rojo', transmision: 'Automática', potencia_motor: '1.8L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 76000000, capacidad_pasajeros: 5},
    { _id: 2, modelo: 'Civic', marca: 'Honda', año: 1998, consumo_en_kilometros: 32, color: 'Negro', transmision: 'Manual', potencia_motor: '1.6L', sistemas_seguridad: [], precio: 15500000, capacidad_pasajeros: 5 },
    { _id: 3, modelo: 'Mustang GT', marca: 'Ford', año: 2024, consumo_en_kilometros: 28, color: 'Rojo', transmision: 'Automática', potencia_motor: '5.0L', sistemas_seguridad: ['ABS', 'Airbags', 'sensor Estacionamiento'], precio: 248999000, capacidad_pasajeros: 5 },
    { _id: 4, modelo: 'Altima', marca: 'Nissan', año: 2020, consumo_en_kilometros: 29, color: 'Gris', transmision: 'Automática', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags', 'Control de estabilidad'], precio: 90000000, capacidad_pasajeros: 5 },
    { _id: 5, modelo: 'Sentra', marca: 'Nissan', año: 2005, consumo_en_kilometros: 31, color: 'Azul', transmision: 'Manual', potencia_motor: '1.8L', sistemas_seguridad: ['Airbags'], precio: 19000000, capacidad_pasajeros: 5 },
    { _id: 6, modelo: 'Kona', marca: 'Hyundai', año: 2023, consumo_en_kilometros: 26, color: 'Blanco', transmision: 'Automática', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags', 'Asistente de frenado'], precio: 100000000, capacidad_pasajeros: 5 },
    { _id: 7, modelo: 'Camaro', marca: 'Chevrolet', año: 2016, consumo_en_kilometros: 28, color: 'Rojo', transmision: 'Automática', potencia_motor: '6.2L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 145000000, capacidad_pasajeros: 2 },
    { _id: 8, modelo: 'Mazda3', marca: 'Mazda', año: 2019, consumo_en_kilometros: 33, color: 'Rojo', transmision: 'Manual', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 68000000, capacidad_pasajeros: 5 },
    { _id: 9, modelo: 'Soul', marca: 'Kia', año: 2011, consumo_en_kilometros: 35, color: 'Verde', transmision: 'Automática', potencia_motor: '1.6L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 34900000, capacidad_pasajeros: 5},
    { _id: 10, modelo: 'Sportage', marca: 'Kia', año: 2016, consumo_en_kilometros: 28, color: 'Blanco', transmision: 'Automática', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 72000000, capacidad_pasajeros: 5 },
    { _id: 11, modelo: 'Jetta', marca: 'Volkswagen', año: 2024, consumo_en_kilometros: 30, color: 'Azul', transmision: 'Manual', potencia_motor: '1.4L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 95000000, capacidad_pasajeros: 5 },
    { _id: 12, modelo: 'mx-5', marca: 'Mazda', año: 2024, consumo_en_kilometros: 32, color: 'Rojo', transmision: 'Manual', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags', 'Control de tracción'], precio: 174000000, capacidad_pasajeros: 2 },
    { _id: 13, modelo: 'Cherokee', marca: 'Jeep', año: 2014, consumo_en_kilometros: 24, color: 'Gris', transmision: 'Automática', potencia_motor: '3.2L', sistemas_seguridad: ['ABS', 'Airbags', 'Control de estabilidad'], precio: 65000000, capacidad_pasajeros: 5 },
    { _id: 14, modelo: 'RAV4', marca: 'Toyota', año: 2011, consumo_en_kilometros: 29, color: 'Blanco', transmision: 'Automática', potencia_motor: '2.5L', sistemas_seguridad: ['ABS', 'Airbags', 'Asistente de frenado'], precio: 140900000, capacidad_pasajeros: 5 },
    { _id: 15, modelo: 'CR-V', marca: 'Honda', año: 2022, consumo_en_kilometros: 27, color: 'Negro', transmision: 'Automática', potencia_motor: '2.5L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 55000000, capacidad_pasajeros: 5 },
    { _id: 16, modelo: 'aveo', marca: 'Chevrolet', año: 2011, consumo_en_kilometros: 26, color: 'Rojo', transmision: 'Manual', potencia_motor: '1.5L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 22500000, capacidad_pasajeros: 5 },
    { _id: 17, modelo: 'Escape', marca: 'Ford', año: 2023, consumo_en_kilometros: 30, color: 'Gris', transmision: 'Automática', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags', 'Control de estabilidad'], precio: 130000000, capacidad_pasajeros: 5 },
    { _id: 18, modelo: 'i25', marca: 'Hyundai', año: 2016, consumo_en_kilometros: 25, color: 'Negro', transmision: 'Manual', potencia_motor: '1.6L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 43900000, capacidad_pasajeros: 5 },
    { _id: 19, modelo: 'Camry', marca: 'Toyota', año: 2021, consumo_en_kilometros: 31, color: 'Blanco', transmision: 'Automática', potencia_motor: '2.5L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 90000000, capacidad_pasajeros: 5 },
    { _id: 20, modelo: 'Altima', marca: 'Nissan', año: 2021, consumo_en_kilometros: 29, color: 'Rojo', transmision: 'Manual', potencia_motor: '2.5L', sistemas_seguridad: ['ABS', 'Airbags', 'Control de estabilidad'], precio: 85000000, capacidad_pasajeros: 5 },
    { _id: 21, modelo: 'tahoe', marca: 'Chevrolet', año: 2022, consumo_en_kilometros: 18, color: 'Negro', transmision: 'Automática', potencia_motor: '6.2L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 339100000, capacidad_pasajeros: 8 },
    { _id: 22, modelo: 'Jimny', marca: 'Suzuki', año: 2024, consumo_en_kilometros: 35, color: 'Verde', transmision: 'Manual', potencia_motor: '1.5L', sistemas_seguridad: ['Airbags', 'ABS'], precio: 130000000, capacidad_pasajeros: 4 },
    { _id: 23, modelo: 'Duster', marca: 'Renault', año: 2022, consumo_en_kilometros: 27, color: 'Negro', transmision: 'Automática', potencia_motor: '1.3L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 82000000, capacidad_pasajeros: 5 },
    { _id: 24, modelo: 'Kicks', marca: 'Nissan', año: 2023, consumo_en_kilometros: 29, color: 'Blanco', transmision: 'Automática', potencia_motor: '1.6L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 110000000, capacidad_pasajeros: 5 },
    { _id: 25, modelo: 'Polo', marca: 'Volkswagen', año: 2023, consumo_en_kilometros: 34, color: 'Azul', transmision: 'Manual', potencia_motor: '1.6L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 85000000, capacidad_pasajeros: 5 },
    { _id: 26, modelo: 'Picanto', marca: 'Kia', año: 2021, consumo_en_kilometros: 37, color: 'Rojo', transmision: 'Automática', potencia_motor: '1.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 50000000, capacidad_pasajeros: 5 },
    { _id: 27, modelo: 'Elantra', marca: 'Hyundai', año: 2023, consumo_en_kilometros: 30, color: 'Rojo', transmision: 'Automática', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags', 'Control de tracción'], precio: 80000000, capacidad_pasajeros: 5 },
    { _id: 28, modelo: 'F-Type', marca: 'Jaguar', año: 2022, consumo_en_kilometros: 40, color: 'Gris', transmision: 'Manual', potencia_motor: '3.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 75000000, capacidad_pasajeros: 2 },
    { _id: 29, modelo: 'A3', marca: 'Audi', año: 2023, consumo_en_kilometros: 28, color: 'Negro', transmision: 'Automática', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 150000000, capacidad_pasajeros: 5 },
    { _id: 30, modelo: 'Q5', marca: 'Audi', año: 2021, consumo_en_kilometros: 26, color: 'Gris', transmision: 'Automática', potencia_motor: '2.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 170000000, capacidad_pasajeros: 5 },
    { _id: 31, modelo: 'C-Class', marca: 'Mercedes-Benz', año: 1995, consumo_en_kilometros: 24, color: 'Blanco', transmision: 'Automática', potencia_motor: '2.2L', sistemas_seguridad: ['ABS', 'Airbags', 'Asistente de cambio de carril'], precio: 27000000, capacidad_pasajeros: 5 },
    { _id: 32, modelo: 'X3', marca: 'BMW', año: 2017, consumo_en_kilometros: 40, color: 'Negro', transmision: 'Automática', potencia_motor: '3.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 165900000, capacidad_pasajeros: 5 },
    { _id: 33, modelo: 'Forester', marca: 'Subaru', año: 2021, consumo_en_kilometros: 27, color: 'Verde', transmision: 'Automática', potencia_motor: '2.5L', sistemas_seguridad: ['ABS', 'Airbags', 'Control de estabilidad'], precio: 160000000, capacidad_pasajeros: 5 },
    { _id: 34, modelo: 'Outback', marca: 'Subaru', año: 2022, consumo_en_kilometros: 28, color: 'Rojo', transmision: 'Automática', potencia_motor: '2.5L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 170000000, capacidad_pasajeros: 5 },
    { _id: 35, modelo: 'Sienna', marca: 'Toyota', año: 2023, consumo_en_kilometros: 24, color: 'Gris', transmision: 'Automática', potencia_motor: '2.5L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 180000000, capacidad_pasajeros: 5 },
    { _id: 36, modelo: 'Neon', marca: 'Chrysler', año: 2002, consumo_en_kilometros: 25, color: 'Blanco', transmision: 'Automática', potencia_motor: '3.6L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 18000000, capacidad_pasajeros: 5 },
    { _id: 37, modelo: 'Odyssey', marca: 'Honda', año: 2022, consumo_en_kilometros: 26, color: 'Negro', transmision: 'Automática', potencia_motor: '3.5L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 200000000, capacidad_pasajeros: 5 },
    { _id: 38, modelo: 'pacifica', marca: 'Chrysler', año: 2007, consumo_en_kilometros: 27, color: 'Rojo', transmision: 'Automática', potencia_motor: '4.0L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 29000000, capacidad_pasajeros: 5 },
    { _id: 39, modelo: 'Promaster', marca: 'Ram', año: 2021, consumo_en_kilometros: 24, color: 'Gris', transmision: 'Automática', potencia_motor: '3.6L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 160000000, capacidad_pasajeros: 5 },
    { _id: 40, modelo: 'General Motors', marca: 'Cadillac Escalade', año: 2022, consumo_en_kilometros: 25, color: 'Negro', transmision: 'Automática', potencia_motor: '6.2L', sistemas_seguridad: ['ABS', 'Airbags'], precio: 1200000000, capacidad_pasajeros: 7 }
]);
//la mayoria de carros que no son modelo 2024 fueron consultados en mercado libre
//los Carros modelo 2024 en su mayoria fueron consultados en sus paginas respectivas

db.coches.find({ color: { $eq: "Negro" } });
db.coches.find({ año: { $gt: 2020 } });
db.coches.find({ precio: { $gte: 150000000 } });
db.coches.find({ capacidad_pasajeros: { $lt: 4 } });
db.coches.find({ potencia_motor: { $lte: "2.5L" } });
db.coches.find({ marca: { $ne: "Toyota" } });
db.coches.find({ marca: { $in: ["Toyota", "Audi", "Honda"] } });
db.coches.find({ marca: { $nin: ["Toyota", "Ford"] } });
db.coches.find({});
db.coches.deleteOne({ _id: 1 });
db.coches.find({});