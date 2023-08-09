<div align="center">
  <img src="https://www.tupaca.com/img/logo/logo-tupaca.svg" alt="Logo" width="200" height="200">
</div>

#

# Desafío Técnico: Tablero de Tareas

¡Bienvenido a mi Desafío Técnico del Tablero de Tareas! En este proyecto, tengo la oportunidad de desarrollar una aplicación de tablero de tareas completa utilizando tecnologías modernas. Mi objetivo es crear una interfaz de usuario interactiva donde pueda administrar tareas de manera eficiente.

## Descripción del Proyecto

En este desafío, se me pide que desarrolle una aplicación de tablero de tareas utilizando React.js con TypeScript para el Frontend, y Node.js con Express.js y TypeScript para el Backend. Tengo la libertad de elegir bibliotecas de componentes para diseñar mi interfaz de usuario.

## Funcionalidades Resueltas

A continuación, las funcionalidades que he implementado hasta ahora:

- **Creación de Tareas**: Ahora puedo crear nuevas tareas asignándoles un nombre y una descripción.
- **Edición de Tareas**: Si necesito hacer cambios, puedo editar el nombre, la descripción y el estado de mis tareas existentes.
- **Lista de Tareas**: Puedo ver una lista completa de todas mis tareas existentes en el tablero.
- **Gestión de Estados**: ❌ _(no estoy conforme con el resultado)_ Mis tareas se pueden mover entre tres estados predefinidos: "Por hacer", "En progreso" y "Hecho".
- **Eliminación de Tareas**: Si una tarea ya no es relevante, tengo la opción de eliminarla.
- **Filtrado de Tareas**: Puedo filtrar mis tareas por nombre y/o estado para encontrar lo que necesito rápidamente.
- **Ordenamiento de Tareas**: Tengo la posibilidad de ordenar mis tareas por nombre y/o fecha de creación para una mejor organización.

## Requerimientos Técnicos Abordados

He logrado avanzar en los siguientes requerimientos técnicos:

- **Frontend**: Desarrollé una interfaz de usuario utilizando React.js y TypeScript. La interfaz consume los endpoints del servidor para todas las operaciones requeridas.
- **Calidad del Código**: Me he esforzado por escribir un código limpio, eficiente y bien estructurado para garantizar la mejor calidad posible.
- **Mantenibilidad**: Código fácil de entender y modificar, lo que facilitará futuras actualizaciones y mejoras.
- **Uso de TypeScript**: Aproveché TypeScript para mejorar la seguridad de tipos en mi código, reduciendo posibles errores.
- **Diseño Creativo**: He intentado presentar los componentes de una manera visualmente armoniosa, añadiendo un toque creativo a la interfaz.

## Levantar el proyecto en local

- Clonar el repositorio

```bash
  git clone https://link-to-project
```

- Reemplazar el archivo `.env.template` por `.env` y llenarlo con `http://localhost:8080/api`

```bash
  REACT_APP_BACKEND_URL=http://localhost:8080/api
```

- Ir a la carpeta del Frontend

```bash
  cd tupaca_challenge_front
```

- Instalar las dependencias

```bash
  pnpm install
```

- Arrancar el proyecto

```bash
  pnpm run dev
```

## Environment Variables

- Las variables de entorno de este proyecto son:

`REACT_APP_BACKEND_URL`

## Observaciones

- Con respecto al filtrado por estado de las tareas, asumí que por defecto tenían que estar filtradas para poder colocarlas en sus respectivas columnas.

- Di por sabido que era necesario una implementación de registro e inicio de sesión.

- No estoy conforme con el funcionamiento del drag and drop, tiene comportamientos no esperados. De todas formas es algo en lo que voy a seguir trabajando ya que me resulta un feature super interesante con el que nunca había trabajado.

## Apartados que voy a implementar independientemente del resultado de este proceso.

- La correcta implementación del drag and drop.

- Paginación, me resulta importante considerar algún tipo de paginado, ya que si en algún momento la cantidad de tareas.

- Modificación de información del usuario.

- También me hubiese gustado implementar `husky` para la creación de `pre-commit-hooks` y `pre-commit-linter`.
