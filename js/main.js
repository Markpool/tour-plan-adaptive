$(document).ready(function() {
  const hotelSlider = new Swiper(".hotel-slider", {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: ".hotel-slider__button--next",
      prevEl: ".hotel-slider__button--prev",
    },
    effect: "coverflow",
  });
  
  const reviewsSlider = new Swiper(".reviews-slider", {
    // Optional parameters
    loop: true,
  
    // Navigation arrows
    navigation: {
      nextEl: ".reviews-slider__button--next",
      prevEl: ".reviews-slider__button--prev",
    },
  });

const hotelMap = document.querySelector("#hotel-map")

  let isNeedToInitMap = true
  initMap = () => {
    if (isNeedToInitMap) {
      isNeedToInitMap = false
      hotelMap.insertAdjacentHTML(
        "beforeend",
        `
          <iframe
            class="map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2483.4177606190738!2d-0.15235848454746562!3d51.505551279634766!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876052f99d7b523%3A0x477b77a33607c0cd!2z0JvQvtC90LTQvtC9INCl0LjQu9GC0L7QvSDQn9Cw0YDQuiDQm9C10LnQvQ!5e0!3m2!1sru!2sru!4v1606226226504!5m2!1sru!2sru"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
          ></iframe>
        `,
      )
    }
  }

  hotelMap.addEventListener("click", initMap)
  hotelMap.addEventListener("mouseover", initMap)
  hotelMap.addEventListener("touchstart", initMap)
  hotelMap.addEventListener("touchmove", initMap)

  
  // Рекомендую всегда использовать let и conts. Хоть нам на курсе и говорят, что можно var. Используй let и const
  const menButton = document.querySelector(".menu-button")
  menButton.addEventListener("click", function () {
    document.querySelector(".navbar-bottom").classList.toggle("navbar-bottom--visible")
  });

  var modalButton = $("[data-toggle=modal]");
  var closeModalButton = $(".modal__close");
  modalButton.on("click", openModal);
  closeModalButton.on("click", closeModal);

  function openModal() {
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.addClass("modal__overlay--visible");
    modalDialog.addClass("modal__dialog--visible");
  }

  function closeModal(event) {
    event.preventDefault();
    var modalOverlay = $(".modal__overlay");
    var modalDialog = $(".modal__dialog");
    modalOverlay.removeClass("modal__overlay--visible");
    modalDialog.removeClass("modal__dialog--visible");
  }
  //Обработка форм 
  $(".form").each(function() {
    $(this).validate({
      errorClass: "invalid",
      messages: {
        name: {
          required: "Please specify your name",
          minlenght: "The name must be at least 2 letters long",
        },
        email: {
          required: "We need your email address to contact you",
          email: "The correct e-mail format name@domain.com",
        },
        phone: {
          required: "Phone number required",
          minlenght: "Your phone number must be in the format +7-999 999 99 99",
        },
      },
    });
  });
  // Маска для телефона
  $(document).ready(function() {
    $(".phoneinput").mask("+7(999) 999-99-99");
  });
  AOS.init();
});