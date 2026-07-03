
# ¿Qué es un almacén?

    Un almacén es el punto de recepción, organización, preparación y distribución de mercancias es el sitio principal donde ocurre la mayor parte del proceso logistico.
    En el almacén vemos todo el trayecto que recorre un producto para llegar a manos del cliente. Inicia con la descarga y recepción de un operario que se encarga de revisar que el producto este en condiciones para ser recepcionado, al recepcionarse se ingresa al inventario que es administrado por nuestro software, allí se elije la ubicación adecuada para este producto dependiendo primero su urgencia de salida (si debe ser enviado inmediatamente al cliente) su volumen y peso, en este paso se le asigna una etiqueta con codigo, nombre y descripcion del producto, codigo del proveedor, cantidad, unidad de medida (unidades, envase, metro, etc), lote, fecha de caducidad (si aplica) codigo de barras de producto, ubicacion y el logo de la empresa.
    posteriormente se lleva a la ubicacion, en algunos casos cuando el material es pequeño se agrupa en cubetas que tienen codigo de barras, y permite agrupar varios productos a la vez para su posterior ubicación, al llegar a la ubicacion se lee el codigo de barras del material y de la ubicación y el software se encarga de confirmar que se esta colocando en el sitio correcto.
    cuando llega el momento de preparar el pedido el sistema genera nuevas etiquetas de pedido y uno o varios operarios buscan los diferentes productos distribuidos correctamente por el almacén para prepararlos leyendo el codigo de barras de la ubicación para confirmar que se ha cogido del lugar correcto, y llevado a la zona de agrupación donde el producto se encontrará con los demás materiales del pedido, una vez en agrupación el sistema se encarga de seleccionar cada material con su pedido correspondiente, para posteriormente se enviado a la zona de preparación y embalaje, alli otro operario se encarga de corroborar que el pedido esta completo y con ayuda del software le asigna una caja y se genera una etiqueta de transporte y un albarán, luego es embalada cerrada y llevada a la zona de expedición donde con ayuda del software se leera la etiqueta de transporte para confirmar que se le va a entregar a la agencia que se encarga de llevarla al cliente

## ¿Qué problemas resuelve un WMS?

    el Warehouse Managment System es un software que esta hecho principalmente con la intención de mantener un orden y control del inventario de mercancía, optimizando su almacenamiento y aprovechando al máximo el espacio del almacén evitando que se cometan errores como: mala distribución de productos, mala colocación, preparación de un producto distinto, recepción o distribución de productos caducados, recepción de material erróneo, envío a un cliente que no corresponde, incidencias y reclamaciones, también nos permite adelantarnos a posibles errores no propios como perdida de un paquete con lo que se guarda registro de peso y medidas de cada paquete, sección de materiales defectuosos por si llega un pedido en mal estado, panel de reclamaciones para hacer seguimiento a posibles reclamaciones de los clientes

## ¿Qué roles interactúan con el sistema?

    los roles son:
        - Administrador
        - Operario  
        - Supervisor
        - Jefe de almacén
        - Comprador
        - Comercial
        - Inspector de calidad

## ¿Cuáles son los 10 conceptos más importantes del negocio?

    los dividiré en 2 grupos:
  
    1. Entidades
        - Producto
        - Ubicación
        - Inventario
        - Proveedor
        - Cliente
        - Usuario
        - Pedido
        - Movimiento
        - Lote
        - Incidencia

    2. Procesos
       - Recepción
       - Ubicación
       - Picking
       - Agrupación
       - Packing
       - Expedición
       - Inventario
       - Devoluciones
       - Control de calidad
