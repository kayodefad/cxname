import { nav } from '../nav.js';

$(document).ready(function () {
  let output = '';

  const pathname = window.location.pathname.slice(1);

  $.each(nav, function (i, navItem) {
    const isCurrentPage = pathname === navItem.link;

    let subNavsHtml = '';

    if (navItem.subNavs) {
      subNavsHtml += `<ul class="pl-2 pr-8 ${
        isCurrentPage ? 'block' : 'hidden'
      }">`;

      $.each(navItem.subNavs, function (i, subNavItem) {
        subNavsHtml += `
            <li class="py-3">
            <a
              class="text-white"
              href="#"
              >${subNavItem.name}</a
            >
          </li>
            `;
      });

      subNavsHtml += '</ul>';
    }

    output += `<li
     class="pl-5 pr-7 py-3 hover:bg-black text-white hover:text-[#fce300] ${
       isCurrentPage ? 'active' : ''
     }">
     ${
       isCurrentPage
         ? `<div class="flex items-center justify-between">
         <span class="${isCurrentPage ? 'active' : ''}">${navItem.name}</span>
         <span class="dropdown-btn cursor-pointer">
         <img
             src="${
               isCurrentPage
                 ? 'assets/images/chevron-down-active.svg'
                 : 'assets/images/chevron-right.svg'
             }"
             alt="chevron-right"
         />
         </span>
      </div>`
         : `<a 
         class="flex items-center justify-between"
         href="${navItem.link}">
            <span>${navItem.name}</span>
            <span class="dropdown-btn">
            <img
                src="assets/images/chevron-right.svg"
                alt="chevron-right"
            />
            </span>
       </a>`
     }
     ${subNavsHtml}
   </li>
   `;
  });

  $('#sidebar').html(output);

  //   Handle dropdown icon click
  $('.dropdown-btn').each(function (i, dropdownBtn) {
    $(this).click(function (e) {
      $(this).parent().next().toggleClass('hidden');

      // Change icon when subNavs are toggled open/close
      const chevronIcon = $(this).find('img:first-child');
      chevronIcon.attr('src') === 'assets/images/chevron-right.svg'
        ? chevronIcon.attr('src', 'assets/images/chevron-down-active.svg')
        : chevronIcon.attr('src', 'assets/images/chevron-right.svg');
    });
  });
});
