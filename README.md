# Proyecto-testing-ticketazo-grupo1

## 1. Entregables del Challenge QA Automation
- Plan de pruebas
- Automatización con Cypress
- Tablero en Trello

## 2. Requeridos
- Node.js
- Cypress v15.7.0
- Git

## 3. Plan de pruebas
- https://docs.google.com/spreadsheets/d/1p_zusqXv3iD5mESoPfnsZ8b0kX09l8e-oNh7hkqqn-Q

## 4. Trello
- https://trello.com/b/HgFQD6Ny/challenge-qa

## 5. Colaboradores
- Facundo Beltran
- Franco Romero
- Eliana Ricci
- Tomás Altamirano
- Maximiliano Morales
- Ale Prieto

## 6. Instalación Cypress
npm install cypress@15.7.0 --save-dev

## 7. Ejecución Cypress
npx cypress open

## 8. Herramientas
- Cypress v15.7.0
- Node.js
- GitHub
- Trello
- Google Sheets

## Estructura de automatización (Ako)
- Utilicé commands para completar los registros de cliente y usuario. Dejé un command para datos fijos y un command para datos variables (este último compartido entre ambos registros).
- Utilicé un command para ordenar los assert de los campos vacíos.
- Utilicé un archivo de functions para generar emails randoms y para números aleatorios de 8 cifras (DNI).
- Utilicé un archivo de sharedTests para ordenar test cases que tenían varios it repetidos.
- A cada assert le agregué su versión correspondiente a los idiomas español e inglés en todas sus variantes (siendo más de dos assert en algunos casos).
- En cada carpeta se agregaron los nombres del colaborador correspondiente a cada test case.

## Estructura del tablero de Trello
- Se ingresan los bugs dentro de la columna "Backlog de bugs". Se tildan las tarjetas de cada bug una vez que el mismo se encuentre cargado en el plan de pruebas.
- Posterior a la revisión de estos por parte de un desarrollador, se devuelven los mismos a la columna "Listo para revisar".
- Desde la columna "Listo para revisar" se testean nuevamente los bugs y en caso de corresponder, se genera una automatización del mismo para posteriormente enviarlo a la columna "Cerrado".

## Estructura del plan de pruebas
- Dentro del plan de pruebas se destacan los casos críticos con un fondo verde y un recuadro negro.
- Los bugs detallados en este plan tienen el número de tkt correspondiente al tablero de Trello.
- Se asigna severidad en base al formato del siguiente link: "https://boryak.notion.site/Severidad-de-Bugs-ChatBot-25bcb216fadf801aa71ede7421167733"