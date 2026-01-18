/* 
PRINCIPIOS SOLID:
Los principios SOLID son un conjunto de cinco principios de diseño de software orientado a objetos que ayudan a crear sistemas más comprensibles, flexibles y mantenibles. Estos principios fueron introducidos por Robert C. Martin (también conocido como Uncle Bob) y son ampliamente utilizados en el desarrollo de software.

DEBE TENER UNA SOLA RAZON PARA CAMBIAR (Single Responsibility Principle - SRP):

DETECTAR QUE NO SE CUMPLE:

- la funcion hace varias cosas
- para cambiar la logica de negoicio tengo que cambiar componentes diferentes
- la clase gestiona mas de una cosa (envia mails, valida forms, se conecta a dvb, etc)
-  Necesitas mas de un mock para testear una cosa

COMO CUMPLIRLO:
- Cada clase debe tener una única responsabilidad o razón para cambiar.
- Divide las responsabilidades en clases separadas.
- Asegúrate de que cada clase tenga una única función o propósito.

EJEMPLO:

class ReportGenerator {
    generateReport(data: any) {
        // Lógica para generar el reporte
    }

    saveToFile(filename: string) {
        // Lógica para guardar el reporte en un archivo
    }

    sendEmail(recipient: string) {
        // Lógica para enviar el reporte por correo electrónico
    }
}

// Violación del SRP: La clase ReportGenerator tiene múltiples responsabilidades.

class ReportGenerator {
    generateReport(data: any) {
        // Lógica para generar el reporte
    }
}

class ReportSaver {
    saveToFile(report: any, filename: string) {
        // Lógica para guardar el reporte en un archivo
    }
}

class EmailSender {
    sendEmail(report: any, recipient: string) {
        // Lógica para enviar el reporte por correo electrónico
    }
}

*/

/* 
S: SINGLE RESPONSIBILITY PRINCIPLE (SRP) --> UNA CLASE DEBE TENER UNA SOLA RAZON PARA CAMBIAR

O: OPEN/CLOSED PRINCIPLE (OCP) --> LAS ENTIDADES DE SOFTWARE DEBEN ESTAR ABIERTAS PARA LA EXTENSIÓN, PERO CERRADAS PARA LA MODIFICACIÓN
*/
