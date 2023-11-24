# TP Desarrolo De Software 2023

**![](https://lh4.googleusercontent.com/ptjW-3iL9bTm5-C0QnpPKPrbyWRCVwPkUOvZBuJr4xk9ARJoB-mCguPI2OWRdajDE_Clo8_EcuzgCgXgnpppYL8HTSKqTSLk_Xk02xyIznusYUBmW0DocNbAnecqq-M3hW8DsDbdrfFq3C99JKxl_Qs)**

## GYM

 Integrantes:
 

 - LA BARBA HIPÓLITO 47313
   
  * EGUIAZÚ ROBMAN SOFIA 48141
   
  *  SPINI SANTIAGO 49799
  

# Tema

Descripción: (2 a 6 líneas describiendo el negocio)

*Sistema de gestión de gimnasio*

El objetivo de esta aplicación es proporcionar a los dueños de un gimnasio una plataforma compacta, sencilla de utilizar y visualmente óptima  para realizar los procesos de gestión , que sea integral para todos las acciones de los distintos participantes. La aplicación contará con tres roles de usuario: usuario, profesor y administrador, donde cada uno encontrará un panel de control donde se encontrarán las acciones típicas de un gimnasio pero digitalizadas, para mayorversatilisas. Hallarás acciones complementarias con el objetivo de ayudar al progreso del usuario..

Los trabajadores ingresan los productos vendidos en el local.

Los trabajadores y el administrador pueden escribir posts

Los trabajadores asignan una rutina predeterminada al usuario.

Los trabajadores pueden marcar como abonado un mes de usuario

Los usuarios pueden abonar la cuota, ver su rutina, consultar su IMC recibiendo recomendaciones con respecto a su resultado.

El administrador tiene permitido realizar todas las funciones, dar de baja/alta los demás roles y ver estadísticas de ventas.

| Requerimiento  | Detalle                                                                 |
| -------------- | ----------------------------------------------------------------------- |
| Crud Simple        | - CRUD Actividad<br>-CRUD Rol<br>- CRUD Tipo Rutina<br>- CRUD Tipo Post                |
| Crud Dependiente        | -  CRUD Rutina { depende de } CRUD Tipo Rutina, CRUD Actividad, CRUD Persona<br>- CRUD Post { depende de } CRUD Tipo Post, CRUD Persona<br>-CRUD Post { depende de } CRUD Tipo Post, CRUD Persona                  |
|Listado + detalle        | - Rutinas y detalle de Tipo Rutina: listado de rutinas filtrado por tipo de rutina, muestra id, descripción de la rutina y del tipo y ejercicios ==> detalle CRUD Rutina<br>-Posts y detalle de Tipo Post: listado de posts filtrado por tipo de post, muestra id, autor, titulo, cuerpo y tipo y descripción de post ==> detalle CRUD Post<br>                     |
|CUU/Epic      | -Crear una rutina para una persona<br>- Realizar la inscripción a una actividad<br>                    |






# Propuesta para App Web de Gimnasio

## Nombre de la App

**GYM Genérico**

## Objetivo

El objetivo de esta aplicación es proporcionar a los usuarios de un gimnasio una plataforma para realizar sus actividades de forma cómod. La aplicación contará con tres roles de usuario: usuario, profesor y administrador, donde cada uno encontrara un panel de control para gestionar

## Roles de usuario

* **Usuario:**
    * Podrá consultar la información del gimnasio, como horarios, clases, precios, etc.
    * Podrá reservar clases y servicios.
    * Podrá acceder a su historial de reservas y pagos.
* **Profesor:**
    * Podrá gestionar sus clases, como horarios, cupo, registrar ventas,banear o permitir usuarios .
    * Podrá ver el historial de reservas de sus clases.
* **Administrador:**
    * Podrá gestionar todos los aspectos del gimnasio, como usuarios,profesores,clases, etc.

## Vistas generales

* **Home:**
    * Presentación del gimnasio.
    * Información de contacto.
    * Botones de acceso a las demás vistas.
* **Nosotros:**
    * Información sobre el gimnasio, como historia, filosofía, etc.
* **Ubicación:**
    * Mapa con la ubicación del gimnasio.
* **Blog:**
    * Publicaciones sobre temas relacionados con el gimnasio, como salud, fitness, etc.

## Funcionalidades adicionales

* **IMC:**
    * Podra acceder a una calculadora  tu relacion peso talla.
* **Registrar venta:**
    * Los usuarios podra acerse a alguien autorizado para comprar algo que ofresca el gimnacio .
* **Ver pagos y precio:**
    * Los usuarios podrán acceder a una pantalla para uns seguimineto de pago y ver el monto que le corresponde .

## Tecnologías

La aplicación se desarrollará utilizando las siguientes tecnologías:

* **Frontend:** Angular v16
* **Backend:** Node.js
* **Base de datos:** MySQL

## Instalacion

1. Instalar la herramienta de git:  https://git-scm.com 
2. instalar un gestor de bases de datos : https://www.mysql.com/downloads/
3. cargar el archivo “ GYMdbSchema.sql” , proporcionado en la carpeta “ Archivos Relacionados”   
4. presionar donde desee el proyecto “ shift + click derecho” y presionar “abrir ventana de powershell”
5. en la terminal ejecutar “git clone https://github.com/hipolito12/GYM.git”
6. luego instalar las dependencias  del package.json  ejecutando en la terminal “ npm install”
7. ejecutar comando “ npm run dev ” seguido de “ng serve -o ”para poder ver el proyecto
8. para mas información de proyecto ejecutar comando ”compodoc  -p tsconfig.doc.json -s”


## Dependencias

*  **SweetAlert2**
*  **cookies Services**
*  **ngx pagination**
*  **ng2-chkeditor**
*  **Angular Material**
*  **Boostrap**
*  **Swagger**
*  **Compodoc**
  
