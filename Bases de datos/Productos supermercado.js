db.productos.insertMany([
  { _id: 1, nombre: 'Nivea Sun', descripcion: 'Protector Solar Facial Anti Edad', precio: 32925, categoria: 'salud corporal', disponibilidad: 50, marca: 'Nivea', modelo: 'Nivea Sun Protector Solar Facial Anti Edad Q10 Fps50+ 50 Ml', peso: '50ml', unidades_vendidas: 100, valoracion_promedio: 5.0 },
  { _id: 2, nombre: 'LG OLED TV 55', descripcion: 'Televisor OLED con resolución 4K', precio: 3299000, categoria: 'Electrónica', disponibilidad: 25, marca: 'LG', modelo: 'OLED55C1PUB', peso: '18kg', unidades_vendidas: 152, valoracion_promedio: 4.8 },
  { _id: 3, nombre: 'Tune 720BT', descripcion: 'Audífonos JBL Tune 720 BT Color Negro', precio: 221900, categoria: 'Electrónica', disponibilidad: 62, marca: 'JBL', modelo: 'Tune 720BT Black', peso: '220g', unidades_vendidas: 1000, valoracion_promedio: 4.8 },
  { _id: 4, nombre: 'Gopro Hero 11', descripcion: 'Cámara Gopro Hero 11 Color Negro 5.3k 2704x1520 Cámara de Acción', precio: 1349900, categoria: 'Electrónica', disponibilidad: 5, marca: 'GoPro', modelo: 'Hero 11', peso: '431g', unidades_vendidas: 122, valoracion_promedio: 4.8 },
  { _id: 5, nombre: '40 TFSI MHEV Advanced', descripcion: 'Audi A4 40 TFSI MHEV Advanced', precio: 124000000, categoria: 'Automóviles', disponibilidad: 1, marca: 'Audi', modelo: '40 TFSI MHEV Advanced', peso: '1,565kg', unidades_vendidas: 2, valoracion_promedio: 3.8 },
  { _id: 6, nombre: 'iPhone 14 Pro Max', descripcion: 'Apple iPhone 14 Pro Max (512 GB) - Color oro', precio: 5031318, categoria: 'Celulares y Smartphones', disponibilidad: 4, marca: 'Apple', modelo: 'no especificado', peso: '240g', unidades_vendidas: 6, valoracion_promedio: 4.8 },
  { _id: 7, nombre: 'VivoBook Go 15', descripcion: 'Portátil Asus E1504GA-NJ103 Core i3 Ram 8GB SSD 512GB 15,6 Color Negro', precio: 1248900, categoria: 'Portátiles', disponibilidad: 10, marca: 'Asus', modelo: 'E1504GA', peso: '1.7kg', unidades_vendidas: 500, valoracion_promedio: 4.9 },
  { _id: 8, nombre: 'Nespresso Vertuo Next', descripcion: 'Cafetera de cápsulas con tecnología Centrifusion', precio: 699900, categoria: 'Cocina', disponibilidad: 70, marca: 'Nespresso', modelo: 'ENV120B', peso: '3.8kg', unidades_vendidas: 302, valoracion_promedio: 4.2 },
  { _id: 9, nombre: 'V-Series V14', descripcion: 'Portátil V-Series V14 14" color gris 24GB de Ram - 512GB SSD - Intel Core i5', precio: 1814800, categoria: 'Portátiles', disponibilidad: 5, marca: 'Lenovo', modelo: 'V14-G2-ALC', peso: '1.6kg', unidades_vendidas: 105, valoracion_promedio: 4.7 },
  { _id: 10, nombre: 'Asus ROG Strix G15', descripcion: 'Portátil gamer con procesador Ryzen 9 y RTX 3070', precio: 6299000, categoria: 'Computación', disponibilidad: 7, marca: 'Asus', modelo: 'G513QR-HF119T', peso: '2.1kg', unidades_vendidas: 92, valoracion_promedio: 4.7 },
  { _id: 11, nombre: 'Audi A4', descripcion: 'Audi A4 Advancemhev', precio: 139900000, categoria: 'Automóviles', disponibilidad: 1, marca: 'Audi', modelo: 'Audi A4 Advancemhev', peso: '1,500kg', unidades_vendidas: 3, valoracion_promedio: 4.3 },
  { _id: 12, nombre: 'Hidrolavadora Electrica TRENT', descripcion: 'Hidrolavadora Electrica TRENT HLT307 1400W Alta presion 1600 Psi 110 Bar', precio: 225463, categoria: 'Limpieza', disponibilidad: 55, marca: 'TRENT', modelo: 'HLT307', peso: '5.7kg', unidades_vendidas: 22, valoracion_promedio: 4.8 },
  { _id: 13, nombre: 'Reloj Invicta', descripcion: 'Reloj Invicta modelo Pro Diver', precio: 281203, categoria: 'Relojes y joyas', disponibilidad: 5, marca: 'Invicta', modelo: '30018', peso: '170g', unidades_vendidas: 1000, valoracion_promedio: 4.8 },
  { _id: 14, nombre: 'NutriBullet Pro 900', descripcion: 'Licuadora de alta velocidad para batidos y smoothies', precio: 449900, categoria: 'Cocina', disponibilidad: 80, marca: 'NutriBullet', modelo: 'NB9-0901', peso: '1.5kg', unidades_vendidas: 1200, valoracion_promedio: 4.6 },
  { _id: 15, nombre: 'HP DeskJet 4155e', descripcion: 'Impresora multifunción con conexión inalámbrica', precio: 299900, categoria: 'Electrónica', disponibilidad: 66, marca: 'HP', modelo: '26Q90A', peso: '4.82kg', unidades_vendidas: 59, valoracion_promedio: 4.6 },
  { _id: 16, nombre: 'Tarjeta de video Nvidia', descripcion: 'Tarjeta de video Nvidia MSI Ventus 2X GeForce RTX 40 Series RTX 4060 GeForce RTX 4060 VENTUS 2X BLACK 8G OC Black OC Edition 8GB', precio: 1417900, categoria: 'Electrónica', disponibilidad: 44, marca: 'MSI', modelo: 'GeForce RTX 4060 VENTUS 2X BLACK 8G OC', peso: '500g', unidades_vendidas: 120, valoracion_promedio: 5.0 },
  { _id: 17, nombre: 'Silla Gamer Ergonomus Bunny', descripcion: 'Silla Gamer Ergonomus Bunny Ergonómica Con Orejas Color Violeta', precio: 610900, categoria: 'Sillas gamer', disponibilidad: 3, marca: 'Ergonomus', modelo: '1004360000228', peso: '14.5kg', unidades_vendidas: 44, valoracion_promedio: 4.8 },
  { _id: 18, nombre: 'Nintendo Switch OLED', descripcion: 'Consola portátil con pantalla OLED de 7 pulgadas', precio: 2199000, categoria: 'Electrónica', disponibilidad: 40, marca: 'Nintendo', modelo: 'HEGSKAAAA', peso: '420g', unidades_vendidas: 254, valoracion_promedio: 4.9 },
  { _id: 19, nombre: 'Cámara Profesional Sony Fullframe A7 III', descripcion: 'Cámara Profesional Sony Fullframe A7 III + Lente- Ilce7m3k Color Negro', precio: 6749900, categoria: 'Electrónica', disponibilidad: 4, marca: 'Sony', modelo: 'ILCE-7M3K', peso: '650g', unidades_vendidas: 58, valoracion_promedio: 4.9 },
  { _id: 20, nombre: 'Silla Gamer Ergonómica', descripcion: 'Silla Gamer Ergonómica Marca Silleti Modelo Monaco Reclinable Mecanismo Syncro 2 Palancas Con Apoyapies Tapizado Cuero', precio: 649900, categoria: 'Sillas gamer', disponibilidad: 60, marca: 'Silleti', modelo: 'Monaco Con Apoya Pies Rojo', peso: '14.5kg', unidades_vendidas: 55, valoracion_promedio: 4.8 },
  { _id: 21, nombre: 'Tarjeta de video Nvidia Gigabyte Gaming GeForce RTX', descripcion: 'Tarjeta de video Nvidia Gigabyte Gaming GeForce RTX 30 Series RTX 3060 GV-N3060GAMING OC-12GD (rev. 2.0) OC Edition 12GB', precio: 1799990, categoria: 'Electrónica', disponibilidad: 1, marca: 'Gigabyte', modelo: 'GV-N3060GAMING OC-12GD (rev. 2.0)', peso: '400g', unidades_vendidas: 50, valoracion_promedio: 5.0 },
  { _id: 22, nombre: 'Bose SoundLink Revolve+', descripcion: 'Parlante Bluetooth portátil 360º con resistencia al agua', precio: 899000, categoria: 'Electrónica', disponibilidad: 50, marca: 'Bose', modelo: '858366-5110', peso: '900g', unidades_vendidas: 322, valoracion_promedio: 4.4 },
  { _id: 23, nombre: 'Sony ZV-1', descripcion: 'Cámara compacta para vlogging con grabación 4K', precio: 2899000, categoria: 'Fotografía', disponibilidad: 20, marca: 'Sony', modelo: 'DCZV1/B', peso: '294g', unidades_vendidas: 268, valoracion_promedio: 4.8 },
  { _id: 24, nombre: 'Plancha De Ropa Black & Decker', descripcion: 'Plancha De Ropa Black & Decker Vapor Irbd300 Trueglide Azul 120V', precio: 62900, categoria: 'Hogar', disponibilidad: 3, marca: 'Black+Decker', modelo: 'IRBD300', peso: '500g', unidades_vendidas: 67, valoracion_promedio: 4.8 },
  { _id: 25, nombre: 'Máquina Hervidor Cocedor Huevos', descripcion: 'Máquina Hervidor Cocedor Huevos Al Vapor Gallina Color Amarillo 220V', precio: 25582, categoria: 'Cocina', disponibilidad: 23, marca: 'my Dream', modelo: 'YS-205', peso: '500g', unidades_vendidas: 54, valoracion_promedio: 5.0 },
  { _id: 26, nombre: 'Smartwatch Hombre', descripcion: 'Smartwatch Hombre Airbag Bomba Aire Presión Arterial Glucosa', precio: 471531, categoria: 'Relojes y joyas', disponibilidad: 60, marca: 'Saocsding', modelo: 'FH-Hygieia-005r-A', peso: '130g', unidades_vendidas: 3, valoracion_promedio: 4.3 },
  { _id: 27, nombre: 'Apple AirPods Pro 2', descripcion: 'Audífonos inalámbricos con cancelación de ruido', precio: 1299000, categoria: 'Electrónica', disponibilidad: 80, marca: 'Apple', modelo: 'MLWK3AM/A', peso: '56g', unidades_vendidas: 302, valoracion_promedio: 4.2 },
  { _id: 28, nombre: 'Lonchera Eléctrica', descripcion: 'Lonchera Eléctrica 1.5l Porta Comidas Negro Amber Style 110V', precio: 36465, categoria: 'Cocina', disponibilidad: 20, marca: 'Amber Style', modelo: 'LOE150002', peso: '800g', unidades_vendidas: 470, valoracion_promedio: 4.6 },
  { _id: 29, nombre: 'Samsung Galaxy Tab S8', descripcion: 'Tablet de 11" con pantalla de 120Hz y procesador Snapdragon', precio: 3299000, categoria: 'Electrónica', disponibilidad: 45, marca: 'Samsung', modelo: 'SM-X700NZAAF', peso: '503g', unidades_vendidas: 200, valoracion_promedio: 4.7 },
  { _id: 30, nombre: 'Nintendo Switch Pro Controller', descripcion: 'Control inalámbrico para Nintendo Switch', precio: 299900, categoria: 'Electrónica', disponibilidad: 80, marca: 'Nintendo', modelo: 'HACAFSSKA', peso: '248g', unidades_vendidas: 67, valoracion_promedio: 4.4 },
  { _id: 31, nombre: 'Philips Airfryer XXL', descripcion: 'Freidora de aire con capacidad de 1.4kg', precio: 899900, categoria: 'Cocina', disponibilidad: 60, marca: 'Philips', modelo: 'HD9650/96', peso: '8.1kg', unidades_vendidas: 166, valoracion_promedio: 4.5 },
  { _id: 32, nombre: 'Cargador Original Xiaomi 67w', descripcion: 'Cargador Original Xiaomi 67w Para Mi 11 Pro/ultra + Cable C Color Blanco', precio: 16200, categoria: 'Electrónica', disponibilidad: 3, marca: 'Xiaomi', modelo: 'MDY-12-ES', peso: '70g', unidades_vendidas: 43, valoracion_promedio: 3.7 },
  { _id: 33, nombre: 'Ventilador Portátil Recargable Panel Solar', descripcion: 'Ventilador Portátil Recargable Panel Solar Incluye Ampolleta Cantidad de aspas 7 Color de la estructura Blanco Color de las aspas Gris Diámetro 17 cm', precio: 92900, categoria: 'Electrónica', disponibilidad: 50, marca: 'Ventilador', modelo: 'Ventilador Portátil Recargable Panel Solar Incluye Ampolleta', peso: '1kg', unidades_vendidas: 22, valoracion_promedio: 4.5 },
  { _id: 34, nombre: 'Weber Smokey Mountain Cooker', descripcion: 'Ahumador de carbón de 47cm con termómetro integrado', precio: 1899000, categoria: 'Hogar', disponibilidad: 20, marca: 'Weber', modelo: '731001', peso: '23kg', unidades_vendidas: 100, valoracion_promedio: 4.9 },
  { _id: 35, nombre: 'Microsoft Xbox Series X', descripcion: 'Consola de videojuegos con 1TB de almacenamiento', precio: 2999000, categoria: 'Electrónica', disponibilidad: 25, marca: 'Microsoft', modelo: 'RRT-00001', peso: '4.45kg', unidades_vendidas: 300, valoracion_promedio: 4.9 },
  { _id: 36, nombre: 'Black+Decker CM1160B', descripcion: 'Cafetera programable de 12 tazas con filtro permanente', precio: 199900, categoria: 'Cocina', disponibilidad: 70, marca: 'Black+Decker', modelo: 'CM1160B', peso: '1.36kg', unidades_vendidas: 900, valoracion_promedio: 4.6 },
  { _id: 37, nombre: 'Oculus Quest 2', descripcion: 'Casco de realidad virtual con 128GB de almacenamiento', precio: 1599000, categoria: 'Electrónica', disponibilidad: 25, marca: 'Meta', modelo: '301-00351-01', peso: '503g', unidades_vendidas: 125, valoracion_promedio: 4.9 },
  { _id: 38, nombre: 'Silla Gamer Escritorio', descripcion: 'Silla Gamer Escritorio Ergonomica Giratoria Ajustable 180° Pc Gaming Tapizado Cuero Magnux', precio: 449900, categoria: 'Sillas gamer', disponibilidad: 8, marca: 'Magnux', modelo: 'GAMERNEGRA', peso: '16.5kg', unidades_vendidas: 102, valoracion_promedio: 4.2 },
  { _id: 39, nombre: 'Placa De Video Geforce', descripcion: 'Placa De Video Geforce Msi Rtx 4060 Gaming X 8gb', precio: 1477900, categoria: 'Electrónica', disponibilidad: 8, marca: 'MSI', modelo: '912-V516-011', peso: '587g', unidades_vendidas: 133, valoracion_promedio: 5.0 },
  { _id: 40, nombre: 'Samsung Galaxy Watch5', descripcion: 'Reloj inteligente con sensores', precio: 1299000, categoria: 'Electrónica', disponibilidad: 85, marca: 'Samsung', modelo: 'SM-R915FZKJATL', peso: '33g', unidades_vendidas: 302, valoracion_promedio: 4.7 }
]);
//La mayoria de la informacion se sacó de mercado libre o supermercados exito

//Encuentra productos cuyo nombre sea exactamente "Nivea Sun".
db.productos.find({ nombre: { $eq: 'Nivea Sun' } });

//Encuentra productos cuyo precio sea mayor a 1,000,000.
db.productos.find({ precio: { $gt: 1000000 } });

//Encuentra productos cuya disponibilidad sea mayor o igual a 50 unidades.
db.productos.find({ disponibilidad: { $gte: 50 } });

//Encuentra productos con modelos numéricos menores que "V14-G2-ALC".
//(Asumimos que los modelos tienen nombres que se pueden ordenar alfabéticamente)
db.productos.find({ modelo: { $lt: 'V14-G2-ALC' } });

//Encuentra productos cuyo peso sea menor o igual a 1 kilogramo.
db.productos.find({ peso: { $lte: '1kg' } });

//Encuentra productos cuya cantidad de unidades vendidas no sea 1000.
db.productos.find({ unidades_vendidas: { $ne: 1000 } });

//Encuentra productos con una valoración promedio de 4.8 o 5.0.
db.productos.find({ valoracion_promedio: { $in: [4.8, 5.0] } });

//Encuentra productos cuyo precio no esté entre 300,000 y 500,000.
db.productos.find({ precio: { $nin: [300000, 500000] } });

//Encuentra todos los productos cuya categoría sea "Electrónica".
db.productos.find({ categoria: 'Electrónica' });

//Actualiza el precio del producto con _id: 1 a 35,000.
db.productos.updateOne({ _id: 1 }, { $set: { precio: 35000 } });