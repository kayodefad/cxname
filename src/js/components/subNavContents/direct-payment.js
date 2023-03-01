import { directPaymentsData } from '../../data/direct-payments.js';

$(document).ready(function () {
  let output = '';

  $.each(directPaymentsData, function (i, item) {
    let tableContent = '<tbody class="divide-y divide-[#EFF1F3] bg-white">';

    $.each(item.requestHeaders, function (i, item) {
      tableContent += `
         <tr>
         <td
           class="whitespace-nowrap py-4 pl-4 pr-3 text-sm font-medium text-black sm:pl-6">
           ${item.name}
         </td>
         <td
           class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
           <span
             class="inline-block border-[0.5px] border-[#205FBE] rounded px-2 text-[#205FBE] bg-[#E2EEFF] text-[10px] font-normal"
             >${item.required}</span
           >
         </td>
         <td
           class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
           ${item.type}
         </td>
         <td
           class="whitespace-nowrap px-3 py-4 text-sm text-gray-500"></td>
         <td
           class="whitespace-nowrap px-3 py-4 text-sm text-gray-500">
           ${item.description}
         </td>
       </tr>
         `;
    });

    tableContent += '</tbody>';

    console.log(tableContent)

    const content = `
    <div>
    <!-- Title -->
    <div class="grid grid-cols-6 items-start">
      <h2 class="font-semibold text-2xl tracking-wide col-span-4">
        ${item.name}
      </h2>
      <div class="col-span-2 flex gap-4 justify-end">
        <button
          class="px-4 py-[6px] border border-[black] hover:bg-[#EFF1F3] rounded uppercase text-[12px] font-bold h-fit cursor-pointer">
          Try it
        </button>
        <button
          class="px-4 py-[6px] border border-[black] hover:bg-[#EFF1F3] rounded uppercase text-[12px] font-bold h-fit cursor-pointer">
          Subscribe
        </button>
      </div>
    </div>
    <!-- About -->
    <div class="text-[12px] text-[#484848] mt-7">
      ${item.description}
    </div>
    <!-- Request Headers -->
    <div class="mt-7">
      <p class="font-semibold text-base text-black">
        Request Headers
      </p>
      <!-- Table -->
      <div class="mt-4 flow-root">
        <div class="-my-2 -mx-4 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div
            class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8">
            <div
              class="overflow-hidden shadow ring-1 ring-black ring-opacity-5 sm:rounded-lg">
              <table class="min-w-full divide-y divide-gray-300">
                <thead class="bg-[#EFF1F3]">
                  <tr>
                    <th
                      scope="col"
                      class="py-3.5 pl-4 pr-3 text-left text-sm font-semibold text-black sm:pl-6">
                      Name
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-black">
                      Required
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-black">
                      Type
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-black">
                      Example
                    </th>
                    <th
                      scope="col"
                      class="px-3 py-3.5 text-left text-sm font-semibold text-black">
                      Description
                    </th>
                  </tr>
                </thead>
                ${tableContent}
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- Response -->
    <div class="mt-7">
      <div class="code-wrapper relative text-sm -z-10">
        <pre>
          <code class="javascript">
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
          </code>
        </pre>
        <button class="absolute top-8 right-4 copy-button">
          <img
            src="./assets/images/copy-icon.svg"
            alt="copy-icon" />
        </button>
        <span
          class="absolute top-[66px] right-[14px] text-gray-500 hidden"
          >Copied</span
        >
      </div>
    </div>
    </div>
    `;

    // outerDiv.append(content);

    // console.log(outerDiv)

    output += content;
  });

  $('#content').html(output);
});
