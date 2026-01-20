/* 
DRY (Don't Repeat Yourself): Principio de desarrollo de software que enfatiza la reducción de la duplicación de código.

SRP (Single Responsibility Principle): Principio de diseño que establece que una clase o módulo debe tener una única responsabilidad o razón para cambiar.

EJEMPLO:

varios formularios con validacion de correo electronico, entonces
debe crearse una sola funcion para validar el correo electronico y reutilizarla en todos los formularios.


TOMAR EN CUENTA:
- Duplicacion accidental o falsa duplicacion: 
  A veces, el codigo puede parecer duplicado pero en realidad tiene diferencias sutiles que justifican su existencia separada.
- Sobredisenio: 
  Evitar crear soluciones excesivamente complejas en nombre de la reutilizacion o la adherencia a los principios DRY y SRP.
- Contexto del dominio: 
  Asegurarse de que las soluciones respeten el contexto y las necesidades especificas del dominio del problema.
- SHOTGUN SURGERY: 
  Evitar situaciones donde un cambio en una funcionalidad requiere modificaciones en muchos lugares diferentes del codigo.

CCP (Common clousure principle): Principio que sugiere que las funciones o metodos que comparten un contexto comun deben agruparse juntos para mejorar la legibilidad y el mantenimiento del codigo.

*/
