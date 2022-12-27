# Prueba técnica para Frontend

## Descripción general de la prueba a realizar

Aconsejamos no dedicar más de 5 horas para esta prueba, aunque dispondrás de
una semana para realizarla y enviarla cuando desees. Puedes enviárnosla vía
email (soporte@whitebearsolutions.com) o publicarla en un repositorio público
a tu elección.

El objetivo principal de la prueba consiste en:

1. Frontend usando Angular v15. Se tendrá en cuenta el aspecto visual, claridad
   del código, y [TDD](https://en.wikipedia.org/wiki/Test-driven_development).
2. Realizar petición HTTP GET a un backend (mock-up).
3. Renderizar un formulario dinámico interpretando el JSON recibido.
4. Realizar petición POST con los datos del formulario al backend (mock-up).
5. Recibir respuesta del backend del punto anterior y volver a renderizar

Durante el desarrollo de la prueba no se tendrá acceso al backend, por lo que
se requiere implementar algún sistema de mock-up, simulando dicho
comportamiento.

A continuación, explicamos paso a paso el workflow de la aplicación:

## Workflow de la prueba

### 1. Frontend usando Angular v15

Puede utilizar plantillas existentes y diseños de interfaz de usuario propios.
Se tendrá en cuenta el uso de TDD a la hora de desarrollar.

### 2. Realizar petición HTTP GET a backend (mock-up)

En el primer paso consiste en realizar petición HTTP GET a un backend. Para
este objetivo no dispondrás del acceso al backend; por lo que tendrás que
simular dicha llamada y devolver un mock-up.

Ejemplo de JSON recibido por backend:

[samples/1-get-form.response.json](./samples/1-get-form.response.json)

### 3. Renderizar formulario dinámico

Interpretando el JSON recibido del paso anterior, se deberá renderizar un
formulario mostrando los campos de entrada. Se debe incluir las validaciones,
errores, valores por defecto, y valor recibido desde el JSON.
Añadimos ejemplos posibles con otros tipos de datos aparte de cadenas de
textos, revisar carpeta `complementario`.

```
WELCOME TO OUR WEBSITE!

Please, fill this form in order to register in our website.

              .-----------.
     * Email: |           |
              '-----------'
              .-----------.
   Firt Name: | John      |
              '-----------'
              .-----------.
   Last Name: | Doe       |
              '-----------'
              .-----------.
 * Telephone: |           |
              '-----------'
About yourself:
.-------------------------.
|                         |
|                         |
'-------------------------'

* Required

                 .--------.
                 | SUBMIT |
                 '--------'
```

### 4. Enviar datos del formulario al backend

Una vez validado los campos (expresiones regurales, valores por defectos y
requeridos, etc), se enviará el mismo JSON anterior con los valores
actualizados al backend.

[samples/1-post-form.request.json](./samples/1-post-form.request.json)

### 5. Recibir respuesta del backend del punto anterior y volver a renderizar

La respuesta del servidor de backend puede ser el mismo JSON anterior con los
campos `error` rellandos:

[samples/1-post-form.response-400.json](./samples/1-post-form.response-400.json)

o bien otro JSON con nuevos campos a renderizar:

[samples/1-post-form.response-200.json](./samples/1-post-form.response-200.json)

## Detalles técnicos

### Backend API

El backend ofrece sólo un endpoint con dos verbos:

- `GET http://localhost/backend/form/<form-id>`
- `POST http://localhost/backend/form/<form-id>`

donde el `<form-id>` es un entero que identifica la prueba a usar. Hay un
listado de pruebas en la carpeta `samples` que incluye varios formularios que
deberían funcionar en tu desarrollo.

El método GET se utiliza para obtener el formulario por primera vez. Los campos
`value` y `error` vienen vacíos.

El método POST también devuelve un formulario. Si hay errores, devuelve el
mismo formulario con errores de validación en los campos `error`. En caso de
éxito, devuelve otro formulario como el
[1-post-form.response-200.json](./samples/1-post-form.response-200.json)).

Recuerda que este backend no existe realmente, por lo que tendrás que
_mock-earlo_.

### Formularios API

Los formularios tienen un esquema bastante intuitivo. El objeto tiene las
siguientes propiedades:

- `title`: el título de la página y del formulario
- `description`: a mostrar sobre el formulario
- `required`: listado de campos obligatorios
- `properties`: listado de campos a renderizar.

Cada campo tiene las siguientes propiedades:

- `type`: indica el formato del campo `value`
- `format`: información relevante sobre cómo renderizar el campo (e.g.
  `textarea`) y/o de cómo enviar la información (e.g. `datetime`). En el caso
  del `date` o `datetime` el frontend debería ofrecer un selector de fecha y
  debe enviar el dato con formato estándar ISO al backend.
- `title`: el label del campo
- `default`: el valor por defecto
- `pattern`: el patrón regex para los campos tipo _string_
- `value`: a rellenar por el frontend con el valor introducido por el usuario
- `error`: rellenado por el backend si hubo errores al procesar un POST

¡Mucha suerte y gracias por querer unirte a nuestro equipo!
