# Ejercicios Express-Slonik-Postgres 🐘

## Antes de empezar 📚

### Conoce el programa y sus scripts ☕️

```js
  npm run docker:up
```
- Lee el fichero `docker-compose.yml`, descarga las imágenes (si no las tuviera ya descargadas) y levanta los contenedores corriendo `Postgres` y `Adminer`
----------

```js
  npm run db:up
```
- Ejecuta los scripts de creación e inserción de bbdd que hay en `scripts/`. Para lanzar este comando habría que lanzar antes el de `docker:up`. Este comando es la suma de hacer `db:create` y `db:insert`
----------

```js
  npm run dev
```
- Ejecuta `src/index.js` a través de `nodemon`
----------

```js
  npm run start
```
- Ejecuta `src/index.js` a través de `node`
----------

```js
  npm run db:drop
```
- Elimina las tablas y la información creada en base de datos
----------

```js
  npm run docker:down
```
- Tira los contenedores eliminando la información guardada en ellos (pero las imágenes no las borra!)
----------

```js
  npm run docker:purge
```
- Tira los contenedores eliminando la información guardada en ellos y elimina todas las imágenes que haya (cuidado!)
----------

## Queries! 🔥

### Directors

1. Devuelve el `name` de todos los directores cuyo campo `name` no esté vacío
2. Devuelve `query_name` y sus correspondientes `nicknames`
3. Devuelve `pic` y `nickname` de todos aquellos directores que tengan `nickname`
4. Devuelve `query_name` y nacionalidad de todos aquellos directores que sean de origen canadiense.
5. Devuelve `query_name` y nacionalidad de todos aquellos directores que sean de origen británico-estadounidense (vigila cómo están guardados esos datos. Tienen que ser las dos cosas juntas)
6. Devuelve `query_name`, nacionalidad y roles de aquellos directores que sean ajedrecistas
7. Devuelve `query_name`, `name` y nacionalidad de aquellos directores que tengan, al menos, dos nacionalidades
8. Devuelve `query_name` y roles de aquellos directores que tengan más de 3 roles

### Movies

9. Devuelve el título de todas las películas cuyo contenido no sea null
10. Devuelve el título y el `mpaa_rating` de todas las películas cuya valoración `mpaa` no sea null
11. Devuelve el título, `production_budget` y distribuidora de todas aquellas películas cuyos costes (`production_budget`) hayan sido inferiores a `500000$`
12. Devuelve el título, `major_genre` y `production_budget` de las 10 películas más costosas
13. Devuelve el título y el orígen (`source`) de todas las películas cuyo `source` sea `remake`
14. Devuelve el título, la distribuidora y el rating imdb de todas las películas cuyo `imdb_rating` no sea null
15. Devuelve el título y `rotten_tomatoes_rating` de las 100 películas menor valoradas según este campo.
16. Devuelve el título, `major_genre`, imdb_rating e imdb_votes de las 20 películas mejor valoradas y a la vez con más votos de todas
17. Devuelve la suma del campo `production_budget` cuyo `mpaa_rating` sea `Not Rated` y el campo título no sea null
18. Devuelve el título y la fecha de todas aquellas películas que serán lanzadas en el futuro
19. Devuelve el título, `us_gross` y fecha de todas aquellas películas lanzadas entre 1950 y 1980
20. Devuelve el título, `us_gross` y `worldwide_gross` de todas aquellas películas donde `us_gross` o `worldwide_gross` sea 0
21. Devuelve el título y el `us_gross` de las 50 películas con la recaudación en Estados Unidos (`us_gross`) más pobre
22. Devuelve el título y `source` de aquellas películas cuyo título empiece por `F`
23. Devuelve distribuidor, `production_budget`, `creative_type`, `major_genre` de aquellas películas cuyo `production_budget` es superior a `10000000` y el distribuidor es `Sony Pictures`

### Joins ✨

24. Devuelve `query_name`, `production_budget` y distribuidora de los que trabajen juntos y cuya distribuidora no sea null
25. Devuelve `query_name` y el total de películas que cada director ha dirigido
26. Devuelve `query_name`, título e `imdb_votes` de las 50 películas menos votadas según `imdb_votes`
27. Devuelve `query_name` y distribuidora donde el director sea `Christopher Nolan`
28. Devuelve el nombre y la recaudación en Estados Unidos del director que más ha recaudado en Estados Unidos
29. Devuelve el nombre y fecha del director que más películas haya lanzado desde el año 2000 hasta la actualidad
30. Devuelve el nombre, `major_genre` y `rotten_tomatoes_rating` de todos los directores que hayan hecho películas de drama y cuya puntuación en `rotten_tomatoes_rating` sea mayor de 70
31. Devuelve el nombre de los directores australianos que hayan dirigido alguna película antes de 1995
32. Devuelve el nombre de los directores, título, fecha y `mpaa_rating` de las películas cuyo `mpaa_rating` sea `PG-13`
33. Devuelve el quinto mejor director canadiense que haya obtenido la mejor media de `imdb_rating`
34. Devuelve la media de las 20 mejores películas de ficción contemporánea entre 1990 y el 2000 según `rotten_tomatoes_rating` e `imdb_rating`
35. Devuelve los nombre de los directores y las fechas solo en años basadas en juegos que hayan recaudado menos de `500000$`
