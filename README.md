#ApiClima

¡Hola!

Este README te ayudará a comenzar con tu aplicación React.


Esta aplicación se ha creado con React y Vite. No se ha utilizado Node.js para la creación de la aplicación.


API

La aplicación utiliza la API de OpenWeatherMap: https://openweathermap.org/ para obtener datos meteorológicos.


Requisitos

    npm >= 7.24.0 o yarn >= 1.22.10

Instalación

    Clona este repositorio:

git clone https://github.com/tu-nombre-de-usuario/tu-nombre-de-app.git](https://github.com/francellaCC/apiClima.git

    Instala las dependencias:

npm install

    Crea una cuenta en OpenWeatherMap y obtén tu clave API.

    Agrega tu clave API al archivo .env

    Inicia el servidor de desarrollo:

npm run dev

    ¡Abre tu navegador en http://localhost:3000 y disfruta!

Estructura de la aplicación

├── context
│   └── ClimaProvider.jsx.js
├── app
│   ├── components
│   │   ├── AppClima.js
│   │   └── Formulario.jsx
│   │   └── Resultado.jsx
│   │   └── Loading.jsx
│   │ 
│   ├── hooks
│   │   ├── useClima.jsx
│   │ 
│   ├── services
│   │   ├── utilities.js
│   │ 
│   └── index.css
├── index.html
├── .env
├── package.json
└── README.md

