# COMANDOS ÚTILES PARA DOCKER-COMPOSE 🐳

## Antes de nada 📚

- Asegúrate de que estás en el mismo directorio que el fichero `docker-compose.yml`!

## Al lío! 🚀

```js
docker-compose up
```
- Descarga las imágenes incluídas en el fichero `docker-compose.yml`
- Levanta los `contenedores` a partir de las `imágenes` descargadas
- Comunica los contenedores entre sí

- Ejecutar este comando hará que la ventana de la terminal esté ocupada con los `logs` de los contenedores. Si quieres tener la ventana de la terminal disponible para seguir escribiendo otros comandos deberás ejecutar el comando `start`
--------------
```js
docker-compose start
```
- Levanta los contenedores (ojo, para poder hacer esto de ha tenido que hacer en algún momento `docker-compose up` con anterioridad)
- Se ejecutan como servicio y liberan la pantalla de la terminal
--------------
```js
docker-compose stop
```
- Apaga los contenedores
- La información almacenada con anterioridad (por ejemplo si usamos hemos tenido un contenedor con Postgres) seguirá almacenada cuando volvamos a hacer `docker-compose up` o `docker-compose start`
--------------
```js
docker-compose down
```
- Apaga los contenedores
- Elimina la comunicación entre ellos
- Elimina los contenedores
- La información almacenada se elimina
- Hará falta hacer `docker-compose up` para volver a levantarlos. No nos servirá hacer `docker-compose start`
--------------
```js
docker-compose images
```
- Lista las imágenes que tenemos descargadas y que forman parte de la composición
--------------
```js
docker-compose ps
```
- Lista los contenedores que tenemos en la composición y su status actual
