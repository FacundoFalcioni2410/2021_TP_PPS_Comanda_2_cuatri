# Churrasic Park

<img src="./fotosReadme/restaurant.png" alt="Icono de la aplicación" width="200">

## Integrantes
##### Facundo Falcioni
##### Agustin Gaitan
##### Bogdan Krylov

## 🖥 Primera semana
#### FECHA INICIO: 16/10/2021 - FECHA FIN: 21/10/2021
✔ Alta empleado - Agustin Gaitan  
✔ Alta supervisor - Facundo Falcioni  
✔ Alta cliente - Agustin Gaitan  
✔ Alta mesa - Agustin Gaitan  
✔ Alta producto - Facundo Falcioni  
✔ Login - Facundo Falcioni  
✔ Subida de fotos a Firestorage - Facundo Falcioni  
✔ Spinner - Agustin Gaitan  
✔ Icono y splash - Facundo Falcioni  
✔ Encuesta cliente - Facundo Falcioni  
✔ Encuesta supervisor - Agustin Gaitan  
✔ Juego ahorcado - Agustin Gaitan / Facundo Falcioni  

## 🖥 Segunda semana  
#### FECHA INICIO: 21/10/2021 - FECHA FIN: 30/10/2021  
✔ Asignación de mesa - Agustin Gaitan  
✔ Ingreso del local - Agustin Gaitan  
✔ Solicitar pedido - Facundo Falcioni  
✔ Carrito de productos solicitados - Facundo Falcioni  
✔ Sector bartender - Agustin Gaitan y Facundo Falcioni  
✔ Mostrar tiempo estimado del pedido - Facundo Falcioni  
✔ Preparar pedido y entregar pedido al mozo - Agustin Gaitan  
✔ QR ingreso al local - Agustin Gaitan  
✔ QR lista de espera - Agustin Gaitan  
✔ QR de la mesa - Facundo Falcioni  
✔ Dueño/supervisor habilita entrada de clientes - Facundo Falcioni  
✔ Metre habilita entrada de la lista de espera - Agustin Gaitan  

## 🖥 Tercera semana  
#### FECHA INICIO: 30/10/2021 - FECHA FIN: 6/11/2021  
✔ Envio de correo electrónico - Facundo Falcioni  
✔ 3 Push Notifications - Facundo Falcioni  
✔ 2 Push Notifications - Agustin Gaitan  
✔ Chat - Bogdan Krylov  
✔ Listado pedidos del mozo - Agustin Gaitan  
✔ Listado pedidos del cocinero - Bogdan Krylov  
✔ Cuenta del pedido - Bogdan Krylov  
✔ Sección post pedido - Agustin Gaitan  
✔ Sección estado del pedido - Facundo Falcioni  
✔ Estilos - Bogdan Krylov, Facundo Falcioni y Agustin Gaitan  
✔ Sonido entre paginas - Agustin Gaitan  
✔ Vibraciones en errores - Facundo Falcioni  

## 🖥 Cuarta semana  
#### FECHA INICIO: 6/11/2021 - FECHA FIN: 13/11/2021  
✔ Arreglo palabras en ingles - Bogdan Krylov  
✔ Arreglo espacios neutros en estado del pedido y importe más grande en cuenta del pedido - Agustin Gaitan  
✔ Productos más grandes en listado de pedidos y mejora de visibilidad en el carrito - Facundo Falcioni  


# Tour de la aplicación

## Interfaz del cliente 

### Ingreso del cliente

Al ingresar a la aplicación el cliente tiene la opcion de iniciar sesión si ya posee una cuenta, o de registrarse como cliente normal, o en su defecto, como cliente anonimo.

![Ingreso a la aplicación](./fotosReadme/login-registros.jpg?qraw=true)  

### Una vez dentro...

El cliente debe escanear un QR que lo ingresa a la lista de espera. De ser aceptado y de habérsele asignado una mesa, debe escanear el QR de la misma (no puede escanear otro).

![Cliente ingresa a la mesa](./fotosReadme/ingreso-cliente.jpg?qraw=true)  

### Realización de pedido

Una vez aquí, el cliente tiene la opción de consultar al mozo mediante un chat, o realizar el pedido correspondiente.

![Realizar pedido](./fotosReadme/ingreso-cliente.jpg?qraw=true)  


### Luego de realizar el pedido...

Aqui el cliente tiene la opción de confirmar la recepción de su pedido, además puede volver a escanear el código QR de la mesa para visualizar el estado del pedido, y una vez recibido puede pedir la cuenta o acceder a la encuesta.

![Cliente espera el pedido](./fotosReadme/esperando-pedido.jpg?qraw=true)  

### Cuenta del pedido

El cliente pide la cuenta y en la misma, se encuentra la opción de escanear un codigo QR para la propina. Una vez realizado el pago, debe esperar la confirmación del mozo.

![Cuenta del pedido](./fotosReadme/cuenta.jpg?qraw=true)  

### Visualización de los graficos de la encuesta

Al retirarse del local el cliente puede escanear nuevamente el QR de ingreso al local para visualizar los graficos de las encuestas.

![Graficos de las encuestas](./fotosReadme/cliente-final.jpg?qraw=true)  

## Interfaz de los empleados

### Dueño/supervisor y Metre

Aquí se encuentran las tareas que puede realizar cada uno, cuando alguien ingresa al local y cuando alguien ingresa a la lista de espera respectivamente.

![Tareas dueño y metre](./fotosReadme/supervisor-metre-habilitacion.jpg?qraw=true)  

### Bartender, Chef y Mozo

En esta sección tanto el bartender como el chef realizan los pedidos y se los devuelven al mozo. Los pedidos se separan por producto, asi que el tiempo de realización es el del producto que mayor elaboración conlleve. El mozo se encarga de enviar los pedidos a las secciones anteriormente mencionadas, entregarlo al cliente y por último confirmar el pago.

![Tareas dueño y metre](./fotosReadme/pedidos-empleados-todos.jpg?qraw=true)  

## Menú de cada usuario

![Menú de los usuarios](./fotosReadme/menus.jpg?qraw=true)  

## Push notification y correo electronico

Aquí se pueden ver los correos electronicos que le llegarian la cliente al momento de ingresar a la aplicación y cuando es habilitado. También se encuentra una de las distintas push notification que se mandan a lo largo de la aplicación

![Notificaciones](./fotosReadme/mails-push.jpg?qraw=true)  
