
'use strict';

document.addEventListener(`DOMContentLoaded`, () => {});

// Mobile menu toggle
(function toggleMobileMenu() {
  const menuBtn = document.querySelector('#m-menu-toggle');
  const menuElement = document.querySelector(menuBtn.dataset.target);
  const blocker = document.querySelector('#blocker');
  const mobileHeader = document.querySelector('#mobile-header');

  menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('navbar-toggler-close');
    menuElement.classList.toggle('m-menu-opened');
    blocker.classList.toggle('blocker-opened');
    mobileHeader.classList.toggle('aside-primary-light');
  });
})();

// Function for scores to connect svg to percentage
(function calculateScoreRound() {
  const scoreCountElements = document.querySelectorAll('.progress-res');

  scoreCountElements.forEach((el) => {
    const svgBoxElement = el.nextElementSibling;
    const circleElement = svgBoxElement.querySelector('.progress-circle');

    const scoreInPercent = parseInt(el.innerHTML);

    circleElement.style.strokeDasharray = `${scoreInPercent}, 100`;
  });
})();

function setFstDropdown(){var e=document.querySelectorAll(".fstdropdown-select:not(.fstcreated)");for(var t in e)e.hasOwnProperty(t)&&l(e[t]);function l(e){var t=e.dataset.searchdisable,l=e.dataset.placeholder,a=e.dataset.opened,r=d("div","fstdiv",e.parentNode,null),i=d("div","fstdropdown"+(null!=a&&"true"==a?" open":""),r,null==a||"true"!=a?{click:s,blur:s}:null);if(i.select=e,i.setAttribute("tabindex","0"),null!=a&&"true"==a||d("div","fstselected",i,null),null==t||"true"!=t){var u=d("div","fstsearch",i,null),p={keyup:o,paste:o};null!=a&&"true"==a||(p.blur=s),d("input","fstsearchinput",u,p).placeholder=null!=l?l:""}if(e.multiple){var f=d("button","fstAll",i,{click:c});f.textContent="Select All",f.type="button",f.selected=!1}d("div","fstlist",i,null),e.fstdropdown={dd:i,rebind:function(){n(e)},setValue:function(e){!function(e,t){if(Array.isArray(t)){for(var l in t)if(t.hasOwnProperty(l)){var s=e.querySelector(".fstlist div[data-value='"+t[l]+"']");null!=s&&s.dispatchEvent(new Event("click",{bubbles:!0}))}}else{var s=e.querySelector(".fstlist div[data-value='"+t+"']");null!=s&&s.dispatchEvent(new Event("click",{bubbles:!0}))}}(i,e)}},n(e),e.classList.add("fstcreated")}function s(e,t,l){var s=e.target.classList.contains("fstdropdown")?e.target.select:e.target.closest(".fstdropdown").select;t=null==t?"blur"!=e.type:t;var a=s.fstdropdown.dd;if(!function(e,t){return null!=e.relatedTarget&&("INPUT"==e.relatedTarget.tagName||"BUTTON"==e.relatedTarget.tagName&&null==t)||"INPUT"==e.target.tagName&&"blur"!=e.type||"INPUT"==e.target.tagName&&null!=e.relatedTarget&&"fstdropdown open"==e.relatedTarget.className||e.target.classList.contains("fstselected")&&"blur"==e.type&&document.activeElement.classList.contains("fstsearchinput")||"blur"==e.type&&("fstlist"==document.activeElement.className||"fstAll"==document.activeElement.className)||"BUTTON"==e.target.tagName&&null==t}(e,l)){if(!t||a.classList.contains("open"))return a.classList.remove("open"),void a.parentNode.classList.remove("open");a.classList.add("open"),a.parentNode.classList.add("open"),null==s.dataset.searchdisable&&"true"!=s.dataset.searchdisable&&a.querySelector(".fstsearchinput").focus()}}function a(e){var t=e.target.closest(".fstdropdown").select,l=t.fstdropdown.dd,a=l.querySelector(".fstAll"),n=null==t.dataset.opened||"true"!=t.dataset.opened;t.value==e.target.dataset.value||t.multiple||(t.value=e.target.dataset.value,null!=l.querySelector(".fstlist>.selected")&&l.querySelector(".fstlist>.selected").classList.remove("selected"),e.target.classList.add("selected"),n&&(l.querySelector(".fstselected").textContent=e.target.textContent),r("change",t)),t.multiple&&function(e,t,l,s,a){e.querySelector("[value='"+t.target.dataset.value+"']").selected=!t.target.classList.contains("selected"),t.target.classList.contains("selected")?t.target.classList.remove("selected"):t.target.classList.add("selected");r("change",e);var n=l.querySelectorAll(".fstlist>.selected").length;s.selected=n>0,a&&(l.querySelector(".fstselected").textContent=1==n?t.target.textContent:n+" options selected");s.textContent=s.selected?"Deselect All":"Select All"}(t,e,l,a,n),n&&s(e,!1)}function n(e){for(var t=e.querySelectorAll("option"),l=e.fstdropdown.dd.querySelector(".fstlist");l.lastChild;)l.removeChild(l.lastChild);for(var s in t)if(t.hasOwnProperty(s)){var n=document.createElement("div");n.textContent=t[s].textContent,n.dataset.value=t[s].value,t[s].selected&&n.classList.add("selected"),n.addEventListener("click",a),l.appendChild(n)}i(e,null)}function r(e,t){var l;"function"==typeof Event?l=new Event(e,{bubbles:!0}):(l=document.createEvent("Event")).initEvent(e,!0,!0),t.dispatchEvent(l)}function o(e){var t="paste"!=e.type?"":void 0===e.clipboardData?window.clipboardData.getData("Text"):e.clipboardData.getData("text/plain"),l="paste"!=e.type?e.target.value:t,s=e.target.closest(".fstdropdown").querySelectorAll(".fstlist>div");for(var a in s)s.hasOwnProperty(a)&&(-1!=s[a].textContent.trim().toLowerCase().indexOf(l.trim().toLowerCase())?s[a].classList.remove("hideFst"):s[a].classList.add("hideFst"))}function d(e,t,l,s){var a=document.createElement(e);if(null!=t)for(var n in t.split(" "))isNaN(n)||a.classList.add(t.split(" ")[n]);if(null!=s)for(var r in s)s.hasOwnProperty(r)&&a.addEventListener(r,s[r],!0);return l.appendChild(a),a}function c(e){var t=e.target.closest(".fstdropdown").select,l=t.fstdropdown.dd,s=!e.target.selected;e.target.selected=s;var a=s?l.querySelectorAll(".fstlist>div:not(.hideFst)"):l.querySelectorAll(".selected");for(var n in a)a.hasOwnProperty(n)&&(t.querySelector("[value='"+a[n].dataset.value+"']").selected=s,s?a[n].classList.add("selected"):a[n].classList.remove("selected"));r("change",t),e.target.textContent=s?"Deselect All":"Select All",i(t,e)}function i(e,t){if(null==e.dataset.opened||"true"!=e.dataset.opened){var l="",a=e.options[e.selectedIndex];if(e.multiple){var n=0;for(var r in e.options)e.options.hasOwnProperty(r)&&1==e.options[r].selected&&n++;l=1==n?a.textContent:n+" options selected"}e.fstdropdown.dd.querySelector(".fstselected").textContent=e.multiple?l:null!=a?a.textContent:"",null!=t&&s(t,!1,!0)}}}!function(e){e.matches=e.matches||e.mozMatchesSelector||e.msMatchesSelector||e.oMatchesSelector||e.webkitMatchesSelector,e.closest=e.closest||function(e){return this&&(this.parentElement||this.matches(e))?this.matches(e)?this:this.parentElement.closest(e):null}}(Element.prototype),document.addEventListener("DOMContentLoaded",setFstDropdown);
