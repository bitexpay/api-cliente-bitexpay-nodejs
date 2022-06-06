#Create order
Endpoint: api/v1/receiver/order/create
Method: Post
Params:
Parameter           Type     Required     Default           Description
- accesskey         -> string   true         N/A            Access key
- nonce             -> number   true         N/A            13-bit miliseconds
- coin              -> string   true         N/A            Ingresar el tipo de coin para la orden btc o trx
- usd               -> string   true         N/A            Ingresar la cantidad de pago en la orden en usd
- tipo              -> string   true         N/A            La orden puede ser 'public' pública o 'private' privada
- monetizar         -> string   true         N              Para convertir en usdt automáticament el pago  
- enviarCorreo      -> string   true         N/A            Para enviar al correo, acepta 'N' o 'S'  

- tipo_fee_monetizar-> string   false        ''             Tipo de fee para monetizar, si paga el cliente el propietario de la orden -> 'owner' o 'client'
- correo            -> string   false        ''             El correo a dónde se enviarán los datos de las órdenes
- descripcion       -> string   false        ''             Alguna descripción para la orden
- signature         -> string   true        N/A             Firma de los parámetros en la solicitud

#Cancel order
Endpoint: api/v1/receiver/order/cancel
Method: Post
Params:
Parameter           Type     Required      Default          Description
- accesskey         -> string   true         N/A            Access key
- nonce             -> number   true         N/A            13-bit miliseconds
- id                -> string   true         N/A            Id de la orden


#Get orders by status
Endpoint: api/v1/receiver/order/status
Method: GET
Params:
Parameter           Type     Required      Default          Description
- accesskey         -> string   true         N/A            Access key
- nonce             -> number   true         N/A            13-bit miliseconds
- status            -> string   true         N/A            Estado de la orden, puede ser (0, 1, 2)
- page              -> string   false        '1'            El número de pagina que se encuentra
- pageSize          -> string   false        '10'           El tamaño de paginación para los resultados
- signature         -> string   true        N/A             Firma de los parámetros en la solicitud

#Get a order by id 
Endpoint: api/v1/receiver/order/get
Method: Get
Params:
Parameter           Type     Required      Default          Description
- accesskey         -> string   true         N/A            Access key
- nonce             -> number   true         N/A            13-bit miliseconds
- id                -> string   true         N/A            Id de la orden
- signature         -> string   true        N/A             Firma de los parámetros en la solicitud

#Pay an order
Endpoint: /api/v1/receiver/order/pay
Método: Post
Params
Parameter           Type     Required      Default          Description
- accesskey         -> string   true         N/A            Access key
- nonce             -> number   true         N/A            13-bit miliseconds
- signature         -> string   true         N/A            Firma de los parámetros en la solicitud
- coin              -> string   true         N/A            Coin o moneda a pagar en la orden
- amount            -> string   true         N/A            Monto a pagar en la orden
- codeBitexpay      -> string   true         N/A            Código bitexpay generado en la orden

#Get balance of user
Endpoint /api/v1/receiver/my/balance
Método: Get
Params
Parameter           Type     Required      Default          Description
- accesskey         -> string   true         N/A            Access key
- nonce             -> number   true         N/A            13-bit miliseconds
- signature         -> string   true         N/A            Firma de los parámetros en la solicitud
