export const directPaymentsData = [
  {
    name: "Payment order, card data is collected on merchant's side (internal MPI)",
    description: `<p>
        To make a payment
        <span
          class="inline-block border border-[#C4C4C4] rounded bg-[#EFF1F3] mx-2 px-2 py-[1px] text-[10px] text-[#484848]"
          >paymentOrder.do</span
        >
        request is used.
      </p>
      <!-- Request Url -->
      <div class="mt-7">
        <p class="font-semibold text-base text-black">Request</p>
        <div class="mt-5">
          <span class="text-[#205FBE] text-[12px] font-medium"
            >POST</span
          ><span
            class="inline-block border-[0.5px] border-[#205FBE] rounded px-2 py-[1px] mx-2 text-[#205FBE] bg-[#E2EEFF] text-[10px] font-normal"
            >https://api.hydrogenpay.com/sandbox/api/v1/integration/create-payment</span
          >
        </div>
      </div>`,
    requestHeaders: [
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
      {
        name: 'Pay-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
    ],
    response: `
    $curl = curl_init();
    curl_setopt_array($curl, array(
      CURLOPT_URL => "https://api.hydrogenpay.com/v1/payments",
      CURLOPT_RETURNTRANSFER => true,
      CURLOPT_ENCODING => "",
      CURLOPT_MAXREDIRS => 10,
      CURLOPT_TIMEOUT => 30,
      CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
      CURLOPT_CUSTOMREQUEST => "GET",
      CURLOPT_HTTPHEADER => array(
        "Authorization: Bearer [API Key]",
        "Content-Type: application/json"
      ),
    ));

    $response = curl_exec($curl);
    $err = curl_error($curl);

    curl_close($curl);

    if ($err) {
      echo "cURL Error #:" . $err;
    } else {
      echo $response;
    }
    `,
  },
  {
    name: "Payment for order, card data is collected on merchant's side (external MPI)",
    description: `<p>
    Facing insecure integration you may be requested to implement an asymmetric request signature. Usually this requirement is applied only if you carry out P2P/AFT/OCT requests. To have a possibility to sign requests you need first to upload a certificate needed by contacting the technical support service.
    Having an appropriate signature key uploaded, you need to generate a hash and a signature using your secret key, in the process of sending a request used in the API interface.
    Thus, the correct hash (X-Hash) and the signature value (X-Signature) must be passed in the request header. The header is filled in using SHA256 and RSA algorithms. The request header will look like this
      </p>`,
    requestHeaders: [
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant's API account login.",
      },
      {
        name: 'Pay-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant's API account login.",
      },
    ],
    response: `
        [dependencies]
        hydrogen = { version = "%version%" }
    `,
  },
  {
    name: 'Instant Payment',
    description: `<p>
        Facing insecure integration you may be requested to implement an asymmetric request signature. Usually this requirement is applied only if you carry out P2P/AFT/OCT requests. To have a possibility to sign requests you need first to upload a certificate needed by contacting the technical support service.
        Having an appropriate signature key uploaded, you need to generate a hash and a signature using your secret key, in the process of sending a request used in the API interface.
        Thus, the correct hash (X-Hash) and the signature value (X-Signature) must be passed in the request header. The header is filled in using SHA256 and RSA algorithms. The request header will look like this
      </p>`,
    requestHeaders: [
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
      {
        name: 'Pay-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
    ],
    response: `
        [dependencies]
        hydrogen = { version = "%version%" }
    `,
  },
  {
    name: 'Moto Payment',
    description: `<p>
        Facing insecure integration you may be requested to implement an asymmetric request signature. Usually this requirement is applied only if you carry out P2P/AFT/OCT requests. To have a possibility to sign requests you need first to upload a certificate needed by contacting the technical support service.
        Having an appropriate signature key uploaded, you need to generate a hash and a signature using your secret key, in the process of sending a request used in the API interface.
        Thus, the correct hash (X-Hash) and the signature value (X-Signature) must be passed in the request header. The header is filled in using SHA256 and RSA algorithms. The request header will look like this
      </p>`,
    requestHeaders: [
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
      {
        name: 'Ocp-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
      {
        name: 'Pay-Apim-Subscription-Key',
        required: true,
        type: 'String',
        example: '',
        description: "Merchant 's API account login.",
      },
    ],
    response: `
        $curl = curl_init();
        curl_setopt_array($curl, array(
        CURLOPT_URL => "https://api.hydrogenpay.com/v1/payments",
        CURLOPT_RETURNTRANSFER => true,
        CURLOPT_ENCODING => "",
        CURLOPT_MAXREDIRS => 10,
        CURLOPT_TIMEOUT => 30,
        CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
        CURLOPT_CUSTOMREQUEST => "GET",
        CURLOPT_HTTPHEADER => array(
            "Authorization: Bearer [API Key]",
            "Content-Type: application/json"
        ),
        ));
        
        $response = curl_exec($curl);
        $err = curl_error($curl);
        
        curl_close($curl);
        
        if ($err) {
        echo "cURL Error #:" . $err;
        } else {
        echo $response;
        }
    `,
  },
];
