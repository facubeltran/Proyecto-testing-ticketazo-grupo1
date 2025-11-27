# Proyecto-testing-ticketazo-grupo1

## 1. Entregables del Challenge QA Automation
- Plan de pruebas
- Automatización con Cypress
- Tablero en Trello
- Reporte de bugs

## 2. Requeridos
- Node.js
- Cypress v15.7.0
- Git

## 3. Plan de pruebas
- https://docs.google.com/spreadsheets/d/1p_zusqXv3iD5mESoPfnsZ8b0kX09l8e-oNh7hkqqn-Q
- Dentro del plan de pruebas se destacan los casos críticos con un fondo verde y un recuadro negro.

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

### Estructura de Ako
- No utilicé fixtures porque no me parecieron necesarios.
- Utilicé commands para completar los registros de cliente y usuario. Dejé un command para datos fijos y un command para datos variables (este último compartido entre ambos registros).
- Utilicé un command para ordenar los assert de los campos vacíos.
- Utilicé un archivo de functions para generar emails randoms y para números aleatorios de 8 cifras (DNI).
- Utilicé un archivo de sharedTests para ordenar test cases que tenían varios it repetidos.
- A cada assert le agregué su versión correspondiente a los idiomas español e inglés en todas sus variantes (siendo más de dos assert en algunos casos).
- Agregué mi nombre a cada carpeta que automaticé porque sí >:3