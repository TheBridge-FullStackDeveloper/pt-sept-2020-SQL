# Ejercicio: Endpoints | SQL | Postgres | Slonik 🐘

## Scripts 📝

```js
  npm run db:seeds
```
- Crea las tablas (si hiciera falta) de la base de datos y las rellena con información aleatoria
----------
```js
  npm run db:seeds randomness
```
- Crea las tablas (si hiciera falta) de la base de datos y las rellena siempre con la misma información si no existe
----------
```js
  npm run db:delete
```
- Borra las tablas de la base de datos (si hubiera algo que borrar)
----------
- El número de filas de cada tabla pueden generarse en base a un índice entero. Para ello cambiar en el fichero `.env` el valor de dichas variables: 
  1. CLIENTS_ROWS=500
  2. VEHICLES_ROWS=100
  3. RENTS_ROWS=30

- Los scripts de `Docker` son los mismos que el ejercicio anterior


## Información sobre la BBDD 💽

- La base de datos guarda información de una empresa de renting.

Habrá tres tablas:

- Tabla para guardar los clientes que alquilen los coches
- Tabla para guardar los modelos existentes
- Tabla de alquileres, que llevará el enlace entre el cliente y el vehículo alquilado

Tabla Clientes

- dni (uuid) (PK)
- first_name
- last_name
- full_name
- job_title
- job_area
- job_type
- phone_number
- credit_card_number
- iban
- last_rent
- zip_code
- country

Tabla Vehículos

- vehicle
- manufacturer
- model
- type
- fuel
- vin (PK)
- color
- license_plate
- stock (constraint CHECK >= 0)
- weekly_price

Tabla Rents

- client_dni (FK)
- vehicle_vin (FK)
- (client_dni, vehicle_vin) (PK)

## Endpoints 🔥

1. Devuelve toda la información del usuario (menos la id, tarjeta de crédito, iban y número de teléfono) en base a su id
2. Devuelve todas las fechas en las que haya alquilado un vehículo si existieran
3. Devuelve todos los usuarios (menos la id) en base a su país
4. Devuelve información sensible del usuario (tarjeta de crédito, iban, número de teléfono) y el nombre en base a su id. La información sensible debe ser devuelta con una máscara de asteriscos y solo deben ser visibles los 3 últimos dígitos de cada columna
5. Devuelve toda la información de todos los usuario (menos la información sensible dispuesta antes y el id) relativa al área de trabajo recibida
6. Devuelve el total de usuarios que pertenecen al mismo país dado
7. Devuelve el total de usuario que tienen el mismo código postal
8. Devuelve todos los usuarios que hayan alquilado algún coche según una fecha dada o comprendido entre dos fechas (toma de referencia el ejercicio de astronomía y las fechas)

9. Devuelve todos los coches que tengan en común el fabricante dado
10. Devuelve todos los coches que tengan en común el mismo tipo de combustible
11. Devuelve toda la información de un coche según el número de bastidor (`vin`) o la matrícula (`license_plate`) dadas
12. Devuelve fabricate, modelo, tipo y matrícula de aquellos coches con el precio dado o rango de precios dados (toma de referencia la query 8 o el ejercicio de astronomía y las fechas)
13. Devuelve todos aquellos coches que tengan un color dado

14. Devuelve toda la información de todos los coches que un usuario dado según su id tenga en alquiler
15. Devuelve la suma de todos los precios semanales de todos los coches alquilados (si da problemas al sumar porque lleva `$` en el precio, modifica dichos valores para hacer la suma)
16. Devuelve el top 10 de colores de coches más alquilados
17. Devuelve los 10 vehículos (campo `vehicle`) menos alquilados
18. Devuelve toda la información (menos la información sensible) de aquellos usuarios que tengan un coche o más en alquiler y no hubieran alquilado nunca antes
19. Devuelve la información del tercer usuario (menos la información sensible) que más gasta por semana de alquiler por todos los coches que tenga alquilados en ese momento
20. Devuelve todos aquellos vehículos que no tengan stock
21. Devuelve la suma de todos los stocks de todos los vehículos que no están en alquiler para saber el tamaño de tu flota

20. Permite registrar un nuevo usuario (ten en cuenta todas las restricciones de las tablas)
21. Permite registrar un nuevo coche
22. Permite que un usuario alquile un coche. El coche será alquilado en base al id del usuario y al número de bastidor (`vin`) del coche. IMPORTANTE: cuando un coche es alquilado, el valor correspondiente de la columna `stock` debería disminuir en 1!
23. Permite modificar al usuario todos los campos excepto: `id` y `last_rent`
24. Permite eliminar filas de la tabla de alquileres. IMPORTANTE: Una vez eliminada una fila de alquileres (`rents`) el `stock` del vehículo alquilado debe aumentar en 1 y la fecha de `last_rent` del usuario debe cambiar a la fecha a la que devolvió el vehículo

## EXTRA! 🚀 🌔

25. Crea una nueva tabla llamada `savings`. Va a ser el dinero que tenga cada usuario registrado en nuestra bbdd. Vamos a suponer que solo habrá una cuenta por usuario y que cada cuenta solo tendrá un propietario (1:1)
- Columnas:
  - iban: el número de cuenta (PK)
  - funds: el dinero ahorrado
  - entity: entidad bancaria que guarda el dinero

26. Modifica la tabla `clients` para que la columna `iban` sea la clave ajena (`FK`) de `savings`
27. Elimina todos aquellos alquileres de los usuarios que no tengan dinero para aguantar una semana de alquiler y devuelve las unidades de stock a sus vehículos
28. Permite la edición de los campos de `savings`
29. Devuelve todos aquellos usuarios (menos la información sensible) que puedan permitirse pagar el alquiler más de 2 meses según sus fondos de la lista de los 10 coches más caros
30. Modifica el endpoint de alquiler para que si un usuario que no tenga fondos intente alquilar un coche que no puede costear no permita ingresar dicho registro (si no puedes a través de sql, hazlo con js)