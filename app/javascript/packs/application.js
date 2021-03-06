// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

require("@rails/ujs").start()
require("turbolinks").start()
require("@rails/activestorage").start()
require("channels")



// Uncomment to copy all static images under ../images to the output folder and reference
// them with the image_pack_tag helper in views (e.g <%= image_pack_tag 'rails.png' %>)
// or the `imagePath` JavaScript helper below.
//
// const images = require.context('../images', true)
// const imagePath = (name) => images(name, true)


// ----------------------------------------------------
// Note(lewagon): ABOVE IS RAILS DEFAULT CONFIGURATION
// WRITE YOUR OWN JS STARTING FROM HERE 👇
// ----------------------------------------------------

// External imports
import "bootstrap";
import "../plugins/flatpickr";



// Internal imports, e.g:
import { fadeText } from '../components/fade_text';
// import { loadDynamicBannerText } from '../components/banner';
import { initMapbox } from '../plugins/init_mapbox';
import { initStarRating } from '../plugins/init_star_rating';
//flatpicker
import { dynamicPriceCalculator } from '../plugins/flatpickr';
import { dynamicModal } from '../plugins/flatpickr';
import { dynamicBooking } from '../plugins/flatpickr';
// import { initAutocomplete } from '../plugins/init_autocomplete'
import { initChatroomCable } from '../channels/chatroom_channel';

document.addEventListener('turbolinks:load', () => {
  // Call your functions here, e.g:

  // initSelect2()
  initMapbox();
  // initAutocomplete();
  initStarRating();
  fadeText();
  initChatroomCable();
  //flatpicker
  dynamicPriceCalculator();
  dynamicModal();
  dynamicBooking();
  // loadDynamicBannerText();

});
