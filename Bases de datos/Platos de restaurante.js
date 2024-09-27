db.menu.insertMany([
  { _id: 1, nombre: 'Tarta de Manzana', descripcion: 'Tarta de masa quebrada rellena de manzanas caramelizadas', precio: 12000, categoria: 'Postres', tiempo_preparacion: 15, calorias: 350, ingredientes_principales: 'Harina, manzana, azúcar', nivel_picante: 'suave', disponibilidad: 33, popularidad: 75 },
  { _id: 2, nombre: 'Crepes de Nutella', descripcion: 'Crepes rellenos de Nutella con fresas', precio: 15000, categoria: 'Postres', tiempo_preparacion: 10, calorias: 400, ingredientes_principales: 'Harina, Nutella, fresas', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 85 },
  { _id: 3, nombre: 'Fajitas de Pollo', descripcion: 'Tiras de pollo a la parrilla con pimientos y cebolla, servidas con tortillas', precio: 25000, categoria: 'Plato principal', tiempo_preparacion: 25, calorias: 700, ingredientes_principales: 'Pollo, pimientos, cebolla', nivel_picante: 'Suave', disponibilidad: 16, popularidad: 85 },
  { _id: 4, nombre: 'Hamburguesa Clásica', descripcion: 'Carne de res con queso cheddar, lechuga, tomate y cebolla', precio: 20000, categoria: 'Plato principal', tiempo_preparacion: 20, calorias: 850, ingredientes_principales: 'Carne de res, queso cheddar, pan', nivel_picante: 'Suave', disponibilidad: 15, popularidad: 95 },
  { _id: 5, nombre: 'Salmón a la Plancha', descripcion: 'Salmón fresco con un toque de limón y eneldo', precio: 35000, categoria: 'Plato principal', tiempo_preparacion: 25, calorias: 550, ingredientes_principales: 'Salmón, limón, eneldo', nivel_picante: 'Suave', disponibilidad: 12, popularidad: 90 },
  { _id: 6, nombre: 'Empanadas Argentinas', descripcion: 'Masa rellena de carne, cebolla y especias', precio: 6000, categoria: 'Entradas', tiempo_preparacion: 15, calorias: 300, ingredientes_principales: 'Masa, carne molida, cebolla', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 75 },
  { _id: 7, nombre: 'Tiramisú', descripcion: 'Postre italiano con capas de bizcocho y crema de mascarpone', precio: 18000, categoria: 'Postres', tiempo_preparacion: 15, calorias: 420, ingredientes_principales: 'Bizcocho, mascarpone, café, cacao', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 85 },
  { _id: 8, nombre: 'Flan de Vainilla', descripcion: 'Postre cremoso con caramelo', precio: 10000, categoria: 'Postres', tiempo_preparacion: 15, calorias: 200, ingredientes_principales: 'Huevos, leche, vainilla, caramelo', nivel_picante: 'Suave', disponibilidad: 25, popularidad: 80 },
  { _id: 9, nombre: 'Crema de Espárragos', descripcion: 'Sopa cremosa de espárragos con un toque de ajo', precio: 14000, categoria: 'Entradas', tiempo_preparacion: 20, calorias: 180, ingredientes_principales: 'Espárragos, crema, ajo', nivel_picante: 'Suave', disponibilidad: 14, popularidad: 65 },
  { _id: 10, nombre: 'Helado de Chocolate', descripcion: 'Helado cremoso de chocolate belga', precio: 8000, categoria: 'Postres', tiempo_preparacion: 5, calorias: 220, ingredientes_principales: 'Chocolate, leche, azúcar', nivel_picante: 'Suave', disponibilidad: 25, popularidad: 85 },
  { _id: 11, nombre: 'Ensalada César', descripcion: 'Ensalada con lechuga romana, crutones, queso parmesano y aderezo César', precio: 12000, categoria: 'Entradas', tiempo_preparacion: 10, calorias: 350, ingredientes_principales: 'Lechuga, crutones, parmesano, aderezo César', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 70 },
  { _id: 12, nombre: 'Fritanga', descripcion: 'Surtido de carnes fritas como chicharrón, morcilla y longaniza, con papa criolla', precio: 25000, categoria: 'Plato principal', tiempo_preparacion: 35, calorias: 900, ingredientes_principales: 'Cerdo, morcilla, longaniza, papa criolla', nivel_picante: 'Suave', disponibilidad: 10, popularidad: 85 },
  { _id: 13, nombre: 'Changua', descripcion: 'Sopa de leche con huevo y cilantro, servida con pan', precio: 8000, categoria: 'Entradas', tiempo_preparacion: 15, calorias: 250, ingredientes_principales: 'Leche, huevo, cilantro, cebolla', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 70 },
  { _id: 14, nombre: 'Sopa de Lentejas', descripcion: 'Sopa de lentejas con chorizo, papa y zanahoria', precio: 10000, categoria: 'Entradas', tiempo_preparacion: 30, calorias: 400, ingredientes_principales: 'Lentejas, chorizo, papa, zanahoria', nivel_picante: 'Suave', disponibilidad: 16, popularidad: 75 },
  { _id: 15, nombre: 'Canelazo', descripcion: 'Bebida caliente de aguardiente con canela y panela, típica de la región andina', precio: 6000, categoria: 'Postres', tiempo_preparacion: 10, calorias: 150, ingredientes_principales: 'Aguardiente, canela, panela', nivel_picante: 'Medio', disponibilidad: 20, popularidad: 80 },
  { _id: 16, nombre: 'Sobrebarriga a la Criolla', descripcion: 'Carne cocida en salsa criolla con papas y arroz', precio: 22000, categoria: 'Plato principal', tiempo_preparacion: 40, calorias: 750, ingredientes_principales: 'Carne de res, papa, tomate, cebolla', nivel_picante: 'Suave', disponibilidad: 14, popularidad: 90 },
  { _id: 17, nombre: 'Morcilla Rellena', descripcion: 'Morcilla hecha de sangre de cerdo, arroz y especias, servida con papa y yuca', precio: 12000, categoria: 'Plato principal', tiempo_preparacion: 20, calorias: 450, ingredientes_principales: 'Cerdo, arroz, especias', nivel_picante: 'Suave', disponibilidad: 18, popularidad: 70 },
  { _id: 18, nombre: 'Cabrito Asado', descripcion: 'Cabrito marinado y asado, típico de la región de Santander', precio: 30000, categoria: 'Plato principal', tiempo_preparacion: 50, calorias: 950, ingredientes_principales: 'Cabrito, ajo, cebolla, especias', nivel_picante: 'Suave', disponibilidad: 8, popularidad: 80 },
  { _id: 19, nombre: 'Lulada', descripcion: 'Bebida refrescante de lulo con hielo y azúcar', precio: 5000, categoria: 'Postres', tiempo_preparacion: 5, calorias: 120, ingredientes_principales: 'Lulo, azúcar, hielo', nivel_picante: 'Suave', disponibilidad: 22, popularidad: 85 },
  { _id: 20, nombre: 'Postre de Natas', descripcion: 'Postre cremoso a base de leche y azúcar caramelizado', precio: 7000, categoria: 'Postres', tiempo_preparacion: 20, calorias: 250, ingredientes_principales: 'Leche, azúcar, canela', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 75 },
  { _id: 21, nombre: 'Sudado de Pollo', descripcion: 'Pollo guisado con papas, yuca y arroz', precio: 18000, categoria: 'Plato principal', tiempo_preparacion: 35, calorias: 600, ingredientes_principales: 'Pollo, papa, yuca, tomate', nivel_picante: 'Suave', disponibilidad: 14, popularidad: 85 },
  { _id: 22, nombre: 'Cocadas', descripcion: 'Dulce típico hecho de coco rallado y azúcar', precio: 4000, categoria: 'Postres', tiempo_preparacion: 10, calorias: 180, ingredientes_principales: 'Coco, azúcar, leche condensada', nivel_picante: 'Suave', disponibilidad: 25, popularidad: 85 },
  { _id: 23, nombre: 'Chicharrón con Arepa', descripcion: 'Chicharrón crocante servido con arepa de maíz', precio: 10000, categoria: 'Plato principal', tiempo_preparacion: 20, calorias: 700, ingredientes_principales: 'Cerdo, maíz, sal', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 90 },
  { _id: 24, nombre: 'Pescado Frito con Patacones', descripcion: 'Pescado entero frito con patacones y ensalada', precio: 28000, categoria: 'Plato principal', tiempo_preparacion: 30, calorias: 650, ingredientes_principales: 'Pescado, plátano verde, lechuga', nivel_picante: 'Suave', disponibilidad: 15, popularidad: 95 },
  { _id: 25, nombre: 'Caldo de Costilla', descripcion: 'Sopa de costilla de res con papa y cebolla, típico desayuno', precio: 7000, categoria: 'Entradas', tiempo_preparacion: 20, calorias: 350, ingredientes_principales: 'Costilla de res, papa, cebolla', nivel_picante: 'Suave', disponibilidad: 18, popularidad: 80 },
  { _id: 26, nombre: 'Cuchuco de Trigo', descripcion: 'Sopa espesa de trigo con espinazo de cerdo y papas', precio: 9000, categoria: 'Plato principal', tiempo_preparacion: 45, calorias: 550, ingredientes_principales: 'Trigo, cerdo, papa, cilantro', nivel_picante: 'Suave', disponibilidad: 10, popularidad: 70 },
  { _id: 27, nombre: 'Arroz con Coco', descripcion: 'Arroz dulce cocido con leche de coco y uvas pasas', precio: 10000, categoria: 'Plato principal', tiempo_preparacion: 25, calorias: 350, ingredientes_principales: 'Arroz, coco, uvas pasas', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 85 },
  { _id: 28, nombre: 'Mazamorra con Panela', descripcion: 'Bebida tradicional de maíz con trozos de panela', precio: 5000, categoria: 'Postres', tiempo_preparacion: 15, calorias: 200, ingredientes_principales: 'Maíz, panela', nivel_picante: 'Suave', disponibilidad: 25, popularidad: 75 },
  { _id: 29, nombre: 'Empanadas Colombianas', descripcion: 'Masa frita rellena de carne, papa y especias', precio: 3000, categoria: 'Entradas', tiempo_preparacion: 15, calorias: 350, ingredientes_principales: 'Masa de maíz, carne, papa, comino', nivel_picante: 'Suave', disponibilidad: 25, popularidad: 90 },
  { _id: 30, nombre: 'Ajiaco Santafereño', descripcion: 'Sopa tradicional con pollo, papa criolla, mazorca y alcaparras', precio: 18000, categoria: 'Plato principal', tiempo_preparacion: 45, calorias: 500, ingredientes_principales: 'Pollo, papa criolla, maíz, alcaparras', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 95 },
  { _id: 31, nombre: 'Sancocho de Gallina', descripcion: 'Caldo de gallina con yuca, plátano y papa', precio: 20000, categoria: 'Plato principal', tiempo_preparacion: 50, calorias: 600, ingredientes_principales: 'Gallina, yuca, plátano, papa', nivel_picante: 'Suave', disponibilidad: 15, popularidad: 90 },
  { _id: 32, nombre: 'Arepas de Choclo', descripcion: 'Arepa dulce de maíz con queso derretido', precio: 6000, categoria: 'Entradas', tiempo_preparacion: 10, calorias: 300, ingredientes_principales: 'Maíz, queso, mantequilla', nivel_picante: 'Suave', disponibilidad: 25, popularidad: 85 },
  { _id: 33, nombre: 'Bandeja Paisa', descripcion: 'Plato completo con frijoles, arroz, chicharrón, carne molida, huevo y plátano', precio: 23000, categoria: 'Plato principal', tiempo_preparacion: 60, calorias: 1200, ingredientes_principales: 'Frijoles, arroz, chicharrón, carne molida', nivel_picante: 'Suave', disponibilidad: 12, popularidad: 100 },
  { _id: 34, nombre: 'Mojarra Frita', descripcion: 'Mojarra frita acompañada de arroz con coco y patacones', precio: 30000, categoria: 'Plato principal', tiempo_preparacion: 30, calorias: 650, ingredientes_principales: 'Mojarra, arroz, plátano verde', nivel_picante: 'Suave', disponibilidad: 15, popularidad: 95 },
  { _id: 35, nombre: 'Arroz con Pollo', descripcion: 'Plato de arroz cocido con pollo desmenuzado y verduras', precio: 15000, categoria: 'Plato principal', tiempo_preparacion: 25, calorias: 600, ingredientes_principales: 'Pollo, arroz, zanahoria, arvejas', nivel_picante: 'Suave', disponibilidad: 20, popularidad: 85 },
  { _id: 36, nombre: 'Tamales Tolimenses', descripcion: 'Masa de maíz rellena de cerdo, pollo, huevo y verduras, envuelto en hojas de plátano', precio: 12000, categoria: 'Plato principal', tiempo_preparacion: 60, calorias: 700, ingredientes_principales: 'Cerdo, pollo, maíz, huevo', nivel_picante: 'Suave', disponibilidad: 14, popularidad: 90 },
  { _id: 37, nombre: 'Picada Colombiana', descripcion: 'Variedad de carnes asadas con yuca, papa criolla y chorizo', precio: 28000, categoria: 'Plato principal', tiempo_preparacion: 40, calorias: 950, ingredientes_principales: 'Cerdo, chorizo, yuca, papa criolla', nivel_picante: 'Suave', disponibilidad: 12, popularidad: 95 },
  { _id: 38, nombre: 'Sopa de Mondongo', descripcion: 'Sopa espesa de callos con papa, yuca y cilantro', precio: 18000, categoria: 'Plato principal', tiempo_preparacion: 50, calorias: 650, ingredientes_principales: 'Callos, papa, yuca, cilantro', nivel_picante: 'Suave', disponibilidad: 10, popularidad: 80 },
  { _id: 39, nombre: 'Pandebono', descripcion: 'Panecillo de almidón de yuca y queso, típico de Valle del Cauca', precio: 3000, categoria: 'Postres', tiempo_preparacion: 10, calorias: 150, ingredientes_principales: 'Almidón de yuca, queso, huevo', nivel_picante: 'Suave', disponibilidad: 30, popularidad: 85 },
  { _id: 40, nombre: 'Arepa de Huevo', descripcion: 'Arepa frita rellena de huevo y carne molida', precio: 5000, categoria: 'Entradas', tiempo_preparacion: 20, calorias: 450, ingredientes_principales: 'Maíz, huevo, carne molida', nivel_picante: 'Suave', disponibilidad: 18, popularidad: 90 }
]);
//La verdad no se de donde extrajo esta informacion ya que en su gran mayoria lo hizo jorge, pero supongo que son sus platos fovoritos, porque la tarta de manzana es la que vamos a comprar ahi en las cuadras jaja

//Buscar un plato específico por su nombre:
db.menu.find({ nombre: { $eq: 'Tarta de Manzana' } });

//Buscar platos con una categoría mayor (alfabéticamente):
db.menu.find({ categoria: { $gt: 'Entradas' } });

//Buscar platos cuyo tiempo de preparación sea mayor o igual a 25 minutos:
db.menu.find({ tiempo_preparacion: { $gte: 25 } });

//Buscar platos cuya disponibilidad sea menor a 15 unidades:
db.menu.find({ disponibilidad: { $lt: 15 } });

//Buscar platos cuya popularidad sea menor o igual a 80:
db.menu.find({ popularidad: { $lte: 80 } });

//Buscar platos cuyo nivel de picante no sea "Suave":
db.menu.find({ nivel_picante: { $ne: 'Suave' } });

//Buscar platos que tengan entre 200 y 400 calorías:
db.menu.find({ calorias: { $in: [200, 300, 400] } });

//Buscar platos que no tengan entre 350 y 700 calorías:
db.menu.find({ calorias: { $nin: [350, 700] } });

//Buscar todos los platos cuyo precio sea mayor a 20,000 y que estén disponibles más de 10 unidades:
db.menu.find({ precio: { $gt: 20000 }, disponibilidad: { $gt: 10 } });

//Actualiza un plato del menu
db.menu.updateOne({ nombre: 'Hamburguesa Clásica' }, { $set: { precio: 22000 } });
