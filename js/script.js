(function () {
    if (document.querySelector(".feedback-link") === null) {
        return;
    }
    var feedbackLink = document.querySelector(".feedback-link");
    var feedbackModal = document.querySelector(".modal-feedback");
    var feedbackModalClose = feedbackModal.querySelector(".btn-close");
    var feedbackForm = feedbackModal.querySelector(".feedback-form");
    var feedbackName = feedbackModal.querySelector("[name=feedback-name]");
    var feedbackEmail = feedbackModal.querySelector("[name=feedback-email]");
    var feedbackLetter = feedbackModal.querySelector("[name=letter]"); 
    
    var isStorageSupport = true;
    var storageName = "";
    var storageEmail = "";
    
    try {
        storageName = localStorage.getItem("feedback_name");
        storageEmail = localStorage.getItem("feedback_email");
    } catch {
        isStorageSupport = false;
    }

    feedbackLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackModal.classList.add("modal_active");
        if (storageName) {
            if (storageEmail) {
                feedbackEmail.value = storageEmail;
                feedbackLetter.focus();
            } else {
                feedbackEmail.value = storageName;
                feedbackName.focus();
            }
        } else {
            feedbackName.focus();
        }
    });
    
    feedbackModalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        feedbackModal.classList.remove("modal_active");
        feedbackModal.classList.remove("modal_error");
    });
    
    feedbackForm.addEventListener("submit", function(evt) {
        if(!feedbackName.value || !feedbackEmail.value || !feedbackLetter.value) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal_error");
            feedbackModal.offsetWidth = feedbackModal.offsetWidth;
            feedbackModal.classList.add("modal_error");
        } else {
            if (isStorageSupport) {
                localStorage.setItem("feedback_name", feedbackName.value);
                localStorage.setItem("feedback_email", feedbackEmail.value);
            }
        }
    });
})();

(function () {
    if (document.querySelector(".map-link") === null) {
        return;
    }
    
    var mapLink = document.querySelector(".map-link");
    var mapModal = document.querySelector(".modal-map");
    var mapModalClose = mapModal.querySelector(".btn-close");

    mapLink.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapModal.classList.add("modal_active");
    });
    
    mapModalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        mapModal.classList.remove("modal_active");
    });
})();

(function () {
    if (document.querySelector(".btn-cart") === null) {
        return;
    }
    
    var cartLinks = document.querySelectorAll(".btn-cart");
    var cartModal = document.querySelector(".modal-cart");
    var cartModalClose = cartModal.querySelector(".btn-close");

    cartLinks.forEach(function(elem) {
        elem.addEventListener("click", function(evt) {
            evt.preventDefault();
            cartModal.classList.add("modal_active");
        });
    });
    
    cartModalClose.addEventListener("click", function (evt) {
        evt.preventDefault();
        cartModal.classList.remove("modal_active");
    });
})();

window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
        if (feedbackModal.classList.contains("modal_active")) {
            evt.preventDefault();
            feedbackModal.classList.remove("modal_active");
            feedbackModal.classList.remove("modal_error");
        } else if (mapModal.classList.contains("modal_active")) {
            evt.preventDefault();
            mapModal.classList.remove("modal_active");
        } else if (cartModal.classList.contains("modal_active")) {
            evt.preventDefault();
            cartModal.classList.remove("modal_active");
        }
    }
});

setTimeout(localStorage.clear(), 1);