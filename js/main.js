"use strict";
/*jslint devel: true, browser: true, white: true */
/*global $, jQuery, alert*/
jQuery(function ($) {
   jQuery(document).ready(function ($) {
      // header dropdown list
      const itemArrows = document.querySelectorAll("[data-item-arrow]");
      itemArrows.forEach(function (itemArrow) {
         itemArrow.addEventListener("click", function () {
            itemArrow.parentNode.parentNode.classList.toggle("active");
         });
      });

      // Popup Call Ring
      const ringBtns = document.querySelectorAll("[data-ring-btn]");
      const popupRing = document.querySelector("[data-popup-ring]");
      const popupSucces = document.querySelector("[data-popup-succes]");
      const btnCLoseSucces = document.querySelectorAll("[data-btn-close-succes]");
      const overlayDark = document.querySelector(".overlay--dark");
      const body = document.body;

      ringBtns.forEach(function (ringBtn) {
         ringBtn.addEventListener("click", function () {
            popupRing.classList.add("active");
            overlayDark.classList.add("active");

            overlayDark.addEventListener("click", function () {
               overlayDark.classList.remove("active");
               popupRing.classList.remove("active");
            });
         });
      });

      const formRing = document.querySelector("#formRing");
      const btnFormRing = document.querySelector("#btn-form-ring");
      const popupMenu = document.querySelector("[data-popup-menu]");

      $("#ring-tel").mask("+7 999 999-99-99");

      formRing.addEventListener("submit", function (e) {
         e.preventDefault();

         const inputs = formRing.querySelectorAll("input");
         const checkArr = [];
         inputs.forEach(function (input) {
            if (input.name === "name") {
               if (input.value === "") {
                  input.parentNode.querySelector(".validate-error").classList.add("active");
               } else {
                  checkArr.push(true);
                  if (
                     input.parentNode.querySelector(".validate-error").classList.contains("active")
                  ) {
                     input.parentNode.querySelector(".validate-error").classList.remove("active");
                  }
               }
            } else if (input.name === "tel") {
               if (input.value === "") {
                  input.parentNode.querySelector(".validate-error").classList.add("active");
               } else {
                  checkArr.push(true);
                  if (
                     input.parentNode.querySelector(".validate-error").classList.contains("active")
                  ) {
                     input.parentNode.querySelector(".validate-error").classList.remove("active");
                  }
               }
            } else if (input.name === "checkbox") {
               if (!input.checked) {
                  input.parentNode.parentNode
                     .querySelector(".validate-error")
                     .classList.add("active");
               } else {
                  checkArr.push(true);
                  if (
                     input.parentNode.parentNode
                        .querySelector(".validate-error")
                        .classList.contains("active")
                  ) {
                     input.parentNode.parentNode
                        .querySelector(".validate-error")
                        .classList.remove("active");
                  }
               }
            }
         });
         if (checkArr.length === 3) {
            popupRing.classList.remove("active");
            if (popupMenu.classList.contains("active")) {
               popupMenu.classList.remove("active");
               overlay.classList.remove("active");
               body.classList.remove("overflow");
            }
            popupSucces.classList.add("active");
            overlayDark.classList.add("active");
         } else {
            e.preventDefault();
         }
      });

      btnCLoseSucces.forEach(function (btnCLoseSucces) {
         btnCLoseSucces.addEventListener("click", function () {
            popupSucces.classList.remove("active");
            overlayDark.classList.remove("active");
         });
      });

      // Popup 2
      const btnPopup2s = document.querySelectorAll("[data-popup2-cross]");
      btnPopup2s.forEach(function (btnPopup) {
         btnPopup.addEventListener("click", function () {
            btnPopup.parentNode.parentNode.classList.remove("active");
            overlayDark.classList.remove("active");
         });
      });

      // Nav dropdown menu
      const itemDropDown = document.querySelector(".nav__item--dropdown");
      const btnDropDown = document.querySelector("[data-btn-dropdown]");
      const dropMenu = document.querySelector("[data-drop-menu]");
      const dropMenu2 = document.querySelectorAll("[data-drop-menu2]");
      const dropItems = document.querySelectorAll("[data-nav]");
      const dropArrows = document.querySelectorAll("[data-drop-arrow]");
      const overlay = document.querySelector(".overlay--light");

      itemDropDown.addEventListener("mouseover", function () {
         dropMenu.classList.add("display");
         overlay.classList.add("active");
      });
      itemDropDown.addEventListener("mouseout", function () {
         dropMenu.classList.remove("display");
         overlay.classList.remove("active");
      });

      btnDropDown.addEventListener("click", function () {
         dropMenu.classList.toggle("display");
         overlay.classList.toggle("active");
      });

      dropItems.forEach(function (item) {
         item.addEventListener("mouseover", function () {
            dropItems.forEach(function (item) {
               item.classList.remove("active");
            });
            item.classList.add("active");

            dropMenu.classList.add("active");

            const dropMenu2 = document.querySelector("#" + this.dataset.nav);
            dropMenu2.classList.add("active");

            dropMenu2.addEventListener("mouseover", function () {
               dropMenu.classList.add("active");

               item.classList.add("active");
               dropMenu2.classList.add("active");
            });

            dropMenu2.addEventListener("mouseout", function () {
               dropMenu.classList.remove("active");
               dropMenu2.classList.remove("active");
            });
         });

         item.addEventListener("mouseout", function () {
            dropMenu.classList.remove("active");

            const dropMenu2 = document.querySelector("#" + this.dataset.nav);
            item.classList.remove("active");
            dropMenu2.classList.remove("active");
         });

         // item.addEventListener("mouseover", function () {
         //    dropMenu.classList.add("active");

         //    dropItems.forEach(function (dropItem) {
         //       dropItem.classList.remove("active");
         //    });
         //    item.classList.add("active");

         //    const currentDropMenu2 = document.querySelector("#" + item.dataset.nav);

         //    dropMenu2.forEach(function (menu2) {
         //       menu2.classList.remove("active");
         //    });

         //    currentDropMenu2.classList.add("active");

         //    currentDropMenu2.addEventListener("mouseout", function () {
         //       item.classList.add("active");
         //    });

         //    //    dropMenu2.classList.add("active");
         // });

         // item.addEventListener("mouseout", function () {
         //    dropMenu.classList.remove("active");
         //    // item.classList.remove("active");
         // });
      });

      dropArrows.forEach(function (arrowBtn) {
         arrowBtn.addEventListener("click", function () {
            dropMenu.classList.add("active");
            const parentDropItem = this.parentNode.parentNode;

            dropItems.forEach(function (dropItem) {
               dropItem.classList.remove("active");
            });
            parentDropItem.classList.add("active");

            dropMenu2.forEach(function (menu2) {
               menu2.classList.remove("active");
            });

            const dropMenuSecond = document.querySelector("#" + parentDropItem.dataset.nav);
            dropMenuSecond.classList.add("active");
         });
      });

      // Search input results
      const searchInput = document.querySelector("[data-search-input]");
      const searchResults = document.querySelector("[data-search-results]");
      searchInput.addEventListener("input", function () {
         if (searchInput.value === "Розы") {
            searchResults.classList.add("active");
            overlay.classList.add("active");
         } else {
            searchResults.classList.remove("active");
            overlay.classList.remove("active");
         }
      });
      overlay.addEventListener("click", function () {
         if (searchInput.value === "Розы") {
            searchResults.classList.remove("active");
            overlay.classList.remove("active");
         } else {
            searchResults.classList.remove("active");
            overlay.classList.remove("active");
         }
      });

      // address delivery popup
      const btnAdresses = document.querySelectorAll("[data-btn-geo]");
      const popupAdress = document.querySelector("[data-popup-adress]");
      btnAdresses.forEach(function (btnAdress) {
         btnAdress.addEventListener("click", function () {
            popupAdress.classList.add("active");
            overlayDark.classList.add("active");

            overlayDark.addEventListener("click", function () {
               popupAdress.classList.remove("active");
               overlayDark.classList.remove("active");
            });
         });
      });

      // Add "active" for btn-order
      const btnOrders = document.querySelectorAll(".btn-order");
      btnOrders.forEach(function (btn) {
         btn.addEventListener("click", function () {
            const btnContentDo = btn.querySelector(".btn-order__do");
            const btnContentDone = btn.querySelector(".btn-order__done");
            btnContentDo.classList.toggle("active");
            btnContentDone.classList.toggle("active");
            btn.classList.toggle("active");
         });
      });

      // Function for add "active"
      function addActiveMultiple() {
         this.classList.toggle("active");
      }
      // ********

      // Popup
      const popups = document.querySelectorAll("[data-popup]");
      const btnClosePopups = document.querySelectorAll("[data-popup-close-btn]");

      btnClosePopups.forEach(function (btnClosePopup) {
         btnClosePopup.addEventListener("click", function () {
            btnClosePopup.parentNode.parentNode.classList.remove("active");
            body.classList.remove("overflow");
            overlay.classList.remove("active");
         });
      });

      // Mob menu popup
      const mobNavBurger = document.querySelector("[data-mob-nav]");
      const popupMenuItems = document.querySelectorAll("[data-popup-menu-item]");

      mobNavBurger.addEventListener("click", function () {
         popupMenu.classList.add("active");
         body.classList.add("overflow");
         overlay.classList.add("active");
      });

      popupMenuItems.forEach(function (popupMenuItem) {
         popupMenuItem.addEventListener("click", function () {
            popupMenu.classList.remove("active");
            body.classList.remove("overflow");
            overlay.classList.remove("active");
         });
      });

      // Mob adress popup
      const mobBtnAdress = document.querySelector("[data-mob-btn-adress]");
      const mobPopupAdress = document.querySelector("[data-mob-popup-adress]");
      mobBtnAdress.addEventListener("click", function () {
         mobPopupAdress.classList.add("active");
      });

      // Search Popup

      const btnSearchPopups = document.querySelectorAll("[data-btn-search-popup]");
      const popupSearch = document.querySelector("[data-popup-search]");
      const popupSearchInput = document.querySelector("[data-mob-search-input]");
      const popupSearchResults = document.querySelector("[data-popup-search-results]");

      btnSearchPopups.forEach(function (btnSearchPopup) {
         btnSearchPopup.addEventListener("click", function () {
            popupSearch.classList.add("active");
            body.classList.add("overflow");
            overlay.classList.add("active");
         });
      });

      popupSearchInput.addEventListener("input", function () {
         if (popupSearchInput.value === "Розы") {
            popupSearchResults.classList.add("active");
         } else {
            popupSearchResults.classList.remove("active");
         }
      });

      const searchResultItemMobs = document.querySelectorAll("[data-search-result-item-mob]");

      searchResultItemMobs.forEach(function (searchResultItemMob) {
         searchResultItemMob.addEventListener("click", function () {
            popupSearch.classList.remove("active");
            body.classList.remove("overflow");
            overlay.classList.remove("active");
         });
      });

      const searchResultItemDescrs = document.querySelectorAll("[data-search-result-item-descr]");
      searchResultItemDescrs.forEach(function (searchResultItemDescr) {
         searchResultItemDescr.addEventListener("click", function () {
            searchResults.classList.remove("active");
            overlay.classList.remove("active");
         });
      });

      // catalog popup

      const catalogMenuItems = document.querySelectorAll("[data-catalog-popup-btn]");
      const popupCatalog = document.querySelector("[data-popup-catalog]");
      const catalogItems = document.querySelectorAll("[data-catalog-item]");
      const catalogSubItems = document.querySelectorAll("[data-subitem-catalog]");

      catalogMenuItems.forEach(function (catalogMenuItem) {
         catalogMenuItem.addEventListener("click", function () {
            popupCatalog.classList.add("active");
            body.classList.add("overflow");
            overlay.classList.add("active");
         });
      });

      catalogItems.forEach(function (catalogItem) {
         catalogItem.addEventListener("click", function () {
            catalogItem.parentNode.classList.toggle("active");
         });
      });

      catalogSubItems.forEach(function (catalogSubItem) {
         catalogSubItem.addEventListener("click", function () {
            catalogSubItem.parentNode.classList.toggle("active");
         });
      });

      // profile btn
      const btnProfilePopup = document.querySelector(".nav__round--profile");
      const popupLogin = document.querySelector("[data-popup-login]");
      btnProfilePopup.addEventListener("click", function () {
         popupLogin.classList.add("active");
         overlayDark.classList.add("active");
      });
      overlayDark.addEventListener("click", function () {
         popupLogin.classList.remove("active");
         overlayDark.classList.remove("active");
      });

      // jQuery Validate form
      $("#form-login").validate({
         rules: {
            email: {
               required: true,
            },
            // password: {
            //    required: true,
            // },
         },
         messages: {
            email: {
               required: "*",
               email: "*",
            },
            // password: {
            //    required: "*",
            // },
         },
         // submitHandler: function (form) {
         //    ajaxFormSubmit();
         // },
      });

      const formLogin = document.querySelector("#form-login");
      const popupReg = document.querySelector("[data-popup-reg]");

      // btn Reset pass
      const btnResetPass = formLogin.querySelector("[data-btn-pass-reset]");
      const popupReset = document.querySelector("[data-popup-reset]");
      const formReset = document.querySelector("#form-reset");
      const popupSuccessMessage = document.querySelector("[data-popup-successmess]");
      btnResetPass.addEventListener("click", function () {
         popupLogin.classList.remove("active");
         popupReset.classList.add("active");
      });

      overlayDark.addEventListener("click", function () {
         popupSuccessMessage.classList.remove("active");
         popupReg.classList.remove("active");
         popupReset.classList.remove("active");
      });

      // jQuery Validate form
      $("#form-reset").validate({
         rules: {
            email: {
               required: true,
            },
         },
         messages: {
            email: {
               required: "*",
               email: "*",
            },
         },
         // submitHandler: function (form) {
         //    ajaxFormSubmit();
         // },
      });

      formReset.addEventListener("submit", function (e) {
         e.preventDefault();
      });

      const inputReset = formReset.querySelector("input");
      const sendBtn = formReset.querySelector("[data-send-btn]");

      sendBtn.addEventListener("click", function () {
         if (inputReset.value != "") {
            popupReset.classList.remove("active");
            popupSuccessMessage.classList.add("active");
         }
      });

      const succMessBtnBack = popupSuccessMessage.querySelector(".popup-2-succesmessage__btn");
      succMessBtnBack.addEventListener("click", function () {
         popupSuccessMessage.classList.remove("active");
         overlayDark.classList.remove("active");
         window.location.href = "../index.html";
      });

      formLogin.addEventListener("submit", function (e) {
         e.preventDefault();
      });

      const inputEmail = formLogin.querySelector(".form-group__input--email");
      const inputPass = formLogin.querySelector(".form-group__input--pass");
      const logBtn = formLogin.querySelector("[data-log-btn]");

      logBtn.addEventListener("click", function () {
         if (inputEmail.value != "" && inputPass.value != "") {
            window.location.href = "../profile.html";
         } else if (inputEmail.value == "" && inputPass.value == "") {
         }
      });

      const regBtn = formLogin.querySelector("[data-reg-btn]");

      regBtn.addEventListener("click", function (e) {
         popupLogin.classList.remove("active");
         popupReg.classList.add("active");
      });

      // jQuery Validate form
      $("#form-reg").validate({
         rules: {
            name: {
               required: true,
            },
            email: {
               required: true,
            },
            // password: {
            //    required: true,
            // },
         },
         messages: {
            name: {
               required: "*",
            },
            email: {
               required: "*",
               email: "*",
            },
            // password: {
            //    required: "*",
            // },
         },
         // submitHandler: function (form) {
         //    ajaxFormSubmit();
         // },
      });

      const formReg = document.querySelector("#form-reg");
      formReg.addEventListener("submit", function (e) {
         e.preventDefault();
      });

      const inputNameReg = formReg.querySelector(".form-group__input--name");
      const inputEmailReg = formReg.querySelector(".form-group__input--email");
      const inputPassReg = formReg.querySelector(".form-group__input--pass");
      const regBtnReg = formReg.querySelector("[data-reg-btn]");
      const logBtnReg = formReg.querySelector("[data-log-btn]");

      regBtnReg.addEventListener("click", function (e) {
         if (inputEmailReg.value != "" && inputPassReg.value != "" && inputNameReg.value != "") {
            // Popup Registration
            popupReg.classList.remove("active");
            overlayDark.classList.remove("active");
            window.location.href = "../profile.html";
         } else if (inputEmail.value == "" && inputPass.value == "") {
         }
      });

      logBtnReg.addEventListener("click", function () {
         if (inputEmailReg.value != "" && inputPassReg.value != "") {
            window.location.href = "../profile.html";
         } else if (inputEmail.value == "" && inputPass.value == "") {
         }
      });

      // Mob Login Popup / Registration
      const btnLogPopupMob = document.querySelector("[data-btn-login-mob]");
      const popupAccountLogin = document.querySelector("[data-popup-account-login]");
      const popupAccArrows = document.querySelectorAll(".popup-account__arrow");
      const popupAccForm = document.querySelector("#popupAccountForm");
      const popupRegMob = document.querySelector("[data-popup-account-reg]");
      const accountRegForm = document.querySelector("#popupAccountRegForm");
      const btnAccountReset = document.querySelector(".popup-account__reset");
      const popupAccountReset = document.querySelector("[data-popup-account-reset]");
      const popupAccountResetForm = document.querySelector("#popupAccountReset");
      const popupAccountSuccess = document.querySelector("[data-popup-account-success]");

      btnLogPopupMob.addEventListener("click", function () {
         popupAccountLogin.classList.add("active");
      });

      popupAccArrows.forEach(function (popupAccArrow) {
         popupAccArrow.addEventListener("click", function () {
            popupAccArrow.parentNode.parentNode.parentNode.classList.remove("active");
         });
      });

      // jQuery Validate form
      $("#popupAccountForm").validate({
         rules: {
            email: {
               required: true,
            },
            // password: {
            //    required: true,
            // },
         },
         messages: {
            email: {
               required: "*",
               email: "*",
            },
            // password: {
            //    required: "*",
            // },
         },
         // submitHandler: function (form) {
         //    ajaxFormSubmit();
         // },
      });

      popupAccForm.addEventListener("submit", function (e) {
         e.preventDefault();
      });
      const btnLoginAcc = popupAccForm.querySelector(".popup-account__btn--login");
      const accountInputEmail = popupAccForm.querySelector(".popup-account__input--email");
      const accountInputPass = popupAccForm.querySelector(".popup-account__input--pass");

      btnLoginAcc.addEventListener("click", function () {
         if (accountInputEmail.value != "" && accountInputPass.value != "") {
            window.location.href = "../profile.html";
         }
      });
      const btnRegAcc = popupAccForm.querySelector(".popup-account__btn--reg");

      btnRegAcc.addEventListener("click", function () {
         popupRegMob.classList.add("active");
      });

      // Mob Registration Popup

      // jQuery Validate form
      $("#popupAccountRegForm").validate({
         rules: {
            name: {
               required: true,
            },
            email: {
               required: true,
            },
            // password: {
            //    required: true,
            // },
         },
         messages: {
            name: {
               required: "*",
            },
            email: {
               required: "*",
               email: "*",
            },
            // password: {
            //    required: "*",
            // },
         },
         // submitHandler: function (form) {
         //    ajaxFormSubmit();
         // },
      });

      accountRegForm.addEventListener("submit", function (e) {
         e.preventDefault();
      });

      const btnLoginAccReg = accountRegForm.querySelector(".popup-account__btn--log");
      const btnRegAccReg = accountRegForm.querySelector(".popup-account__btn--reg");
      const accountInputNameReg = accountRegForm.querySelector(".popup-account__input--name");
      const accountInputEmailReg = accountRegForm.querySelector(".popup-account__input--email");
      const accountInputPassReg = accountRegForm.querySelector(".popup-account__input--pass");

      btnLoginAccReg.addEventListener("click", function () {
         if (
            accountInputEmailReg.value != "" &&
            accountInputPassReg.value != "" &&
            accountInputNameReg.value != ""
         ) {
            window.location.href = "../profile.html";
         }
      });
      btnRegAccReg.addEventListener("click", function () {
         if (
            accountInputEmailReg.value != "" &&
            accountInputPassReg.value != "" &&
            accountInputNameReg.value != ""
         ) {
            window.location.href = "../profile.html";
         }
      });

      // Reset Account Password Mob
      const btnAccResetPass = popupAccountLogin.querySelector(".popup-account__reset");
      btnAccResetPass.addEventListener("click", function () {
         popupAccountReset.classList.add("active");
      });

      // jQuery Validate form
      $("#popupAccountReset").validate({
         rules: {
            email: {
               required: true,
            },
         },
         messages: {
            email: {
               required: "*",
               email: "*",
            },
         },
         // submitHandler: function (form) {
         //    ajaxFormSubmit();
         // },
      });
      popupAccountResetForm.addEventListener("submit", function (e) {
         e.preventDefault();

         const btnAccSend = popupAccountResetForm.querySelector(".popup-account__btn--send");
         const accInputEmail = popupAccountResetForm.querySelector(".popup-account__input--email");

         btnAccSend.addEventListener("click", function () {
            if (accInputEmail.value != "") {
               popupAccountSuccess.classList.add("active");
            }
         });
      });

      const popupAccInputs = document.querySelectorAll(".popup-account__input");
      popupAccInputs.forEach(function (popupAccInput) {
         popupAccInput.addEventListener("input", function () {
            if (popupAccInput.value != "") {
               popupAccInput.classList.add("active");
            } else if (popupAccInput.value == "") {
               popupAccInput.classList.remove("active");
            }
         });
      });

      // hide / open password
      const formGroupIcons = document.querySelectorAll(".form-group__icon");
      formGroupIcons.forEach(function (formGroupIcon) {
         formGroupIcon.addEventListener("click", function () {
            const inputPassword = formGroupIcon.previousElementSibling;
            const iconEye = formGroupIcon.querySelector(".form-group__icon-eye");
            const iconCloseEye = formGroupIcon.querySelector(".form-group__icon-close-eye");
            if (inputPassword.type == "password") {
               inputPassword.type = "text";
               iconEye.classList.add("active");
               iconCloseEye.classList.remove("active");
            } else if (inputPassword.type == "text") {
               inputPassword.type = "password";
               iconEye.classList.remove("active");
               iconCloseEye.classList.add("active");
            }
         });
      });

      // Rummaging through several elements, adding a wire and adding an "active" class to the parent element
      function toggleAllActive(elem) {
         elem.forEach(function (item) {
            item.addEventListener("click", function () {
               item.parentNode.classList.toggle("active");
            });
         });
      }
      // ********

      // Footer mobile accordeon
      const footerAccordeon = document.querySelectorAll("[data-footer-accordeon]");
      toggleAllActive(footerAccordeon);

      if (window.location.toString().indexOf("catalog.html") > 0) {
         const searchResItems = document.querySelectorAll("[data-search-result-item]");
         const catalogHeadings = document.querySelectorAll("[data-catalog-heading]");
         searchResItems.forEach(function (searchResItem) {
            searchResItem.addEventListener("click", function () {
               const resItemSpan = searchResItem.innerText;
               catalogHeadings.forEach(function (catalogHeading) {
                  const catalogTitle = catalogHeading.querySelector("h2");
                  const catalogQual = catalogHeading.querySelector("span");
                  catalogTitle.innerText = `Товары по запросу “${resItemSpan}”`;
                  catalogQual.classList.add("active");
               });
            });
         });

         // dropdown list
         const dropdownLists = document.querySelectorAll("[data-dropdown-list]");
         dropdownLists.forEach(function (dropdownList) {
            const btnFilterSort = dropdownList.querySelector("[data-btn-filter-sort]");
            const filterSort = dropdownList.querySelector("[data-filter-sort]");
            const filterSortItems = dropdownList.querySelectorAll("[data-filter-sort-item] span");

            btnFilterSort.addEventListener("click", function () {
               filterSort.classList.toggle("active");

               filterSortItems.forEach(function (filterSortItem) {
                  filterSortItem.addEventListener("click", function () {
                     btnFilterSort.innerText = filterSortItem.innerText;
                     filterSort.classList.remove("active");
                  });
               });
            });

            document.addEventListener("click", function (e) {
               if (e.target !== btnFilterSort) {
                  btnFilterSort.classList.remove("active");
                  filterSort.classList.remove("active");
               }
            });

            document.addEventListener("keydown", function (e) {
               if (e.key === "Tab" || e.key === "Escape") {
                  btnFilterSort.classList.remove("active");
                  filterSort.classList.remove("active");
               }
            });
         });

         // receipt item close
         const closeReceiptItem = document.querySelectorAll("[data-close-item]");
         closeReceiptItem.forEach(function (closeReceiptItem) {
            closeReceiptItem.addEventListener("click", function () {
               if ($(window).width() < 900) {
                  closeReceiptItem.parentNode.parentNode.remove();
               } else if ($(window).width() > 899) {
                  closeReceiptItem.parentNode.remove();
               }
            });
         });

         // Add "active" for btn like
         const btnLikesCatalog = document.querySelectorAll(".favorite");
         btnLikesCatalog.forEach(function (btnLike) {
            btnLike.addEventListener("click", function () {
               btnLike.classList.toggle("active");
            });
         });

         const filter = document.querySelectorAll(".filter");
         filter.forEach(function (filter) {
            // Filter Items Accordeon
            const filterItems = filter.querySelectorAll("[data-filter-item-box]");
            toggleAllActive(filterItems);

            const resetBtns = filter.querySelectorAll("[data-btn-reset]");
            resetBtns.forEach(function (resetBtn) {
               resetBtn.addEventListener("click", function (e) {
                  e.stopPropagation();
               });
            });

            // Filter Range
            const rangeInput = filter.querySelectorAll(".range-input input"),
               priceInput = filter.querySelectorAll(".price-input input"),
               range = filter.querySelector(".slider .progress");
            let priceGap = 100;

            const rangeMinn = filter.querySelector(".range-min");
            const rangeMaxx = filter.querySelector(".range-max");
            if ($(window).width() < 599) {
               rangeMinn.value = 1700;
               rangeMaxx.value = 16000;
            }

            priceInput.forEach((input) => {
               input.addEventListener("input", (e) => {
                  let minPrice = parseInt(priceInput[0].value),
                     maxPrice = parseInt(priceInput[1].value);

                  if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                     if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                     } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                     }
                  }
               });
            });

            rangeInput.forEach((input) => {
               input.addEventListener("input", (e) => {
                  let minVal = parseInt(rangeInput[0].value),
                     maxVal = parseInt(rangeInput[1].value);

                  if (maxVal - minVal < priceGap) {
                     if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap;
                     } else {
                        rangeInput[1].value = minVal + priceGap;
                     }
                  } else {
                     priceInput[0].value = minVal;
                     priceInput[1].value = maxVal;
                     range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                     range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                  }
               });
            });

            function resetAll() {
               // filter reset
               const inputMin = filter.querySelector(".input-min");
               const inputMax = filter.querySelector(".input-max");
               const rangeMin = filter.querySelector(".range-min");
               const rangeMax = filter.querySelector(".range-max");
               const progressInput = filter.querySelector(".progress");

               inputMin.value = 1000;
               inputMax.value = 20000;

               if ($(window).width() < 599) {
                  rangeMin.value = 1700;
                  rangeMax.value = 16000;
               } else if ($(window).width() > 599) {
                  rangeMin.value = 1000;
                  rangeMax.value = 20000;
               }

               if ($(window).width() < 599) {
                  progressInput.style.cssText = `
                  left: 35%;
                  right: 35%;
               `;
               } else if ($(window).width() < 900) {
                  progressInput.style.cssText = `
                  left: 20%;
                  right: 20%;
               `;
               } else if ($(window).width() > 899) {
                  progressInput.style.cssText = `
                  left: 25%;
                  right: 25%;
               `;
               }

               const sublistFlower = filter.querySelector("[data-filter-sublist-flower]");

               const sublistStyle = filter.querySelector("[data-filter-sublist-style]");

               const sublistWho = filter.querySelector("[data-filter-sublist-who]");

               const sublistReason = filter.querySelector("[data-filter-sublist-reason]");

               const sublistFlowerInputs = sublistFlower.querySelectorAll("input");
               sublistFlowerInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
               const sublistStyleInputs = sublistStyle.querySelectorAll("input");
               sublistStyleInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
               const sublistWhoInputs = sublistWho.querySelectorAll("input");
               sublistWhoInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });

               const sublistReasonInputs = sublistReason.querySelectorAll("input");
               sublistReasonInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            }

            const btnResetAll = filter.querySelector("[data-btn-reset-all]");
            btnResetAll.addEventListener("click", function () {
               resetAll();
            });

            // filter reset
            const btnResetRange = filter.querySelector("[data-btn-reset-range]");
            const inputMin = filter.querySelector(".input-min");
            const inputMax = filter.querySelector(".input-max");
            const rangeMin = filter.querySelector(".range-min");
            const rangeMax = filter.querySelector(".range-max");
            const progressInput = filter.querySelector(".progress");

            btnResetRange.addEventListener("click", function () {
               if ($(window).width() < 599) {
                  rangeMin.value = 1700;
                  rangeMax.value = 16000;
                  inputMin.value = 1000;
                  inputMax.value = 20000;
               } else if ($(window).width() > 599) {
                  inputMin.value = 1000;
                  inputMax.value = 20000;

                  rangeMin.value = 1000;
                  rangeMax.value = 20000;
               }

               if ($(window).width() < 599) {
                  progressInput.style.cssText = `
                  left: 35%;
                  right: 35%;
               `;
               } else if ($(window).width() < 900) {
                  progressInput.style.cssText = `
                  left: 20%;
                  right: 20%;
               `;
               } else if ($(window).width() > 899) {
                  progressInput.style.cssText = `
                  left: 25%;
                  right: 25%;
               `;
               }
            });

            const btnResetFlower = filter.querySelector("[data-btn-reset-flower]");
            const sublistFlower = filter.querySelector("[data-filter-sublist-flower]");

            const btnResetStyle = filter.querySelector("[data-btn-reset-style]");
            const sublistStyle = filter.querySelector("[data-filter-sublist-style]");

            const btnResetWho = filter.querySelector("[data-btn-reset-who]");
            const sublistWho = filter.querySelector("[data-filter-sublist-who]");

            const btnResetReason = filter.querySelector("[data-btn-reset-reason]");
            const sublistReason = filter.querySelector("[data-filter-sublist-reason]");

            const btnResetQual = filter.querySelector("[data-btn-reset-qual]");

            btnResetFlower.addEventListener("click", function () {
               const sublistFlowerInputs = sublistFlower.querySelectorAll("input");
               sublistFlowerInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });
            btnResetStyle.addEventListener("click", function () {
               const sublistStyleInputs = sublistStyle.querySelectorAll("input");
               sublistStyleInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });
            btnResetWho.addEventListener("click", function () {
               const sublistWhoInputs = sublistWho.querySelectorAll("input");
               sublistWhoInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });

            btnResetReason.addEventListener("click", function () {
               const sublistReasonInputs = sublistReason.querySelectorAll("input");
               sublistReasonInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });
         });

         // Download Btn
         const downloadBtns = document.querySelectorAll("[data-download-btn]");
         let resultsCards = `
         <div class="filter-results__row">
            <div class="card-standart filter-results__card">
               <a href="#!" class="card-standart__img">
                  <img src="./img/standart-card/01.png" alt="01">
               </a>
               <div class="card-standart__descr">
                  <a href="#!" class="card-standart__text">
                     Букет из 101 красной розы
                  </a>
                  <button class="card-standart__like favorite">
                     <svg>
                        <path
                           d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>

               </div>
               <h3 class="h3 card-standart__pricing">
                  <span class="card-standart__price">1 800 ₽</span>
                  <s class="card-standart__oldprice">2 230₽</s>
               </h3>
               <button class="btn-order">
                  <span class="btn-order__do active">
                     <svg>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                     </svg>
                     <span>Заказать</span>
                  </span>
                  <span class="btn-order__done">
                     <svg>
                        <path
                           d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                     </svg>
                     <span>В корзине</span>
                  </span>
               </button>
            </div>
            <div class="card-standart filter-results__card">
               <a href="#!" class="card-standart__img">
                  <img src="./img/standart-card/01.png" alt="01">
               </a>
               <div class="card-standart__descr">
                  <a href="#!" class="card-standart__text">
                     Букет из 101 красной розы
                  </a>
                  <button class="card-standart__like favorite">
                     <svg>
                        <path
                           d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>

               </div>
               <h3 class="h3 card-standart__pricing">
                  <span class="card-standart__price">1 800 ₽</span>
                  <s class="card-standart__oldprice">2 230₽</s>
               </h3>
               <button class="btn-order">
                  <span class="btn-order__do active">
                     <svg>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                     </svg>
                     <span>Заказать</span>
                  </span>
                  <span class="btn-order__done">
                     <svg>
                        <path
                           d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                     </svg>
                     <span>В корзине</span>
                  </span>
               </button>
            </div>
            <div class="card-standart filter-results__card">
               <a href="#!" class="card-standart__img">
                  <img src="./img/standart-card/01.png" alt="01">
               </a>
               <div class="card-standart__descr">
                  <a href="#!" class="card-standart__text">
                     Букет из 101 красной розы
                  </a>
                  <button class="card-standart__like favorite">
                     <svg>
                        <path
                           d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>

               </div>
               <h3 class="h3 card-standart__pricing">
                  <span class="card-standart__price">1 800 ₽</span>
                  <s class="card-standart__oldprice">2 230₽</s>
               </h3>
               <button class="btn-order">
                  <span class="btn-order__do active">
                     <svg>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                     </svg>
                     <span>Заказать</span>
                  </span>
                  <span class="btn-order__done">
                     <svg>
                        <path
                           d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                     </svg>
                     <span>В корзине</span>
                  </span>
               </button>
            </div>
            <div class="card-standart filter-results__card">
               <a href="#!" class="card-standart__img">
                  <img src="./img/standart-card/01.png" alt="01">
               </a>
               <div class="card-standart__descr">
                  <a href="#!" class="card-standart__text">
                     Букет из 101 красной розы
                  </a>
                  <button class="card-standart__like favorite">
                     <svg>
                        <path
                           d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>

               </div>
               <h3 class="h3 card-standart__pricing">
                  <span class="card-standart__price">1 800 ₽</span>
                  <s class="card-standart__oldprice">2 230₽</s>
               </h3>
               <button class="btn-order">
                  <span class="btn-order__do active">
                     <svg>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                     </svg>
                     <span>Заказать</span>
                  </span>
                  <span class="btn-order__done">
                     <svg>
                        <path
                           d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                     </svg>
                     <span>В корзине</span>
                  </span>
               </button>
            </div>
            <div class="card-standart filter-results__card">
               <a href="#!" class="card-standart__img">
                  <img src="./img/standart-card/01.png" alt="01">
               </a>
               <div class="card-standart__descr">
                  <a href="#!" class="card-standart__text">
                     Букет из 101 красной розы
                  </a>
                  <button class="card-standart__like favorite">
                     <svg>
                        <path
                           d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>

               </div>
               <h3 class="h3 card-standart__pricing">
                  <span class="card-standart__price">1 800 ₽</span>
                  <s class="card-standart__oldprice">2 230₽</s>
               </h3>
               <button class="btn-order">
                  <span class="btn-order__do active">
                     <svg>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                     </svg>
                     <span>Заказать</span>
                  </span>
                  <span class="btn-order__done">
                     <svg>
                        <path
                           d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                     </svg>
                     <span>В корзине</span>
                  </span>
               </button>
            </div>
            <div class="card-standart filter-results__card">
               <a href="#!" class="card-standart__img">
                  <img src="./img/standart-card/01.png" alt="01">
               </a>
               <div class="card-standart__descr">
                  <a href="#!" class="card-standart__text">
                     Букет из 101 красной розы
                  </a>
                  <button class="card-standart__like favorite">
                     <svg>
                        <path
                           d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                           stroke-linecap="round" stroke-linejoin="round" />
                     </svg>
                  </button>

               </div>
               <h3 class="h3 card-standart__pricing">
                  <span class="card-standart__price">1 800 ₽</span>
                  <s class="card-standart__oldprice">2 230₽</s>
               </h3>
               <button class="btn-order">
                  <span class="btn-order__do active">
                     <svg>
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd"
                           d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                     </svg>
                     <span>Заказать</span>
                  </span>
                  <span class="btn-order__done">
                     <svg>
                        <path
                           d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                     </svg>
                     <span>В корзине</span>
                  </span>
               </button>
            </div>
         </div>
         `;
         downloadBtns.forEach(function (downloadBtn) {
            downloadBtn.addEventListener("click", function () {
               downloadBtn.insertAdjacentHTML("beforebegin", resultsCards);
               const btnLikesCatalog2 = document.querySelectorAll(".favorite");
               // btnLikesCatalog2.forEach(function (btnLike) {
               //    btnLike.addEventListener("click", function () {
               //       btnLike.classList.toggle("active");
               //    });
               // });
            });
         });

         // Swiper for popular category section
         const swiperCatalogSlider = new Swiper("#catalog-swiper-slider", {
            spaceBetween: 8,
            slidesPerView: "auto",

            loop: false,
         });

         const popupFilter = document.querySelector("[data-popup-filter]");
         const btnFilterPopup = document.querySelector("[data-btn-filter-popup]");

         btnFilterPopup.addEventListener("click", function () {
            popupFilter.classList.add("active");
            body.classList.add("overflow");
         });
      } else if (window.location.toString().indexOf("catalog-category.html") > 0) {
         // dropdown list
         const dropdownLists = document.querySelectorAll("[data-dropdown-list]");
         dropdownLists.forEach(function (dropdownList) {
            const btnFilterSort = dropdownList.querySelector("[data-btn-filter-sort]");
            const filterSort = dropdownList.querySelector("[data-filter-sort]");
            const filterSortItems = dropdownList.querySelectorAll("[data-filter-sort-item] span");

            btnFilterSort.addEventListener("click", function () {
               filterSort.classList.toggle("active");

               filterSortItems.forEach(function (filterSortItem) {
                  filterSortItem.addEventListener("click", function () {
                     btnFilterSort.innerText = filterSortItem.innerText;
                     filterSort.classList.remove("active");
                  });
               });
            });

            document.addEventListener("click", function (e) {
               if (e.target !== btnFilterSort) {
                  btnFilterSort.classList.remove("active");
                  filterSort.classList.remove("active");
               }
            });

            document.addEventListener("keydown", function (e) {
               if (e.key === "Tab" || e.key === "Escape") {
                  btnFilterSort.classList.remove("active");
                  filterSort.classList.remove("active");
               }
            });
         });

         // receipt item close
         const closeReceiptItem = document.querySelectorAll("[data-close-item]");
         closeReceiptItem.forEach(function (closeReceiptItem) {
            closeReceiptItem.addEventListener("click", function () {
               if ($(window).width() < 900) {
                  closeReceiptItem.parentNode.parentNode.remove();
               } else if ($(window).width() > 899) {
                  closeReceiptItem.parentNode.remove();
               }
            });
         });

         // Add "active" for btn like
         const btnLikesCatalog = document.querySelectorAll(".favorite");
         btnLikesCatalog.forEach(function (btnLike) {
            btnLike.addEventListener("click", function () {
               btnLike.classList.toggle("active");
            });
         });

         const filter = document.querySelectorAll(".filter");
         filter.forEach(function (filter) {
            // Filter Items Accordeon
            const filterItems = filter.querySelectorAll("[data-filter-item-box]");
            toggleAllActive(filterItems);

            const resetBtns = filter.querySelectorAll("[data-btn-reset]");
            resetBtns.forEach(function (resetBtn) {
               resetBtn.addEventListener("click", function (e) {
                  e.stopPropagation();
               });
            });

            // Filter Range
            const rangeInput = filter.querySelectorAll(".range-input input"),
               priceInput = filter.querySelectorAll(".price-input input"),
               range = filter.querySelector(".slider .progress");
            let priceGap = 100;

            const rangeMinn = filter.querySelector(".range-min");
            const rangeMaxx = filter.querySelector(".range-max");
            if ($(window).width() < 599) {
               rangeMinn.value = 1700;
               rangeMaxx.value = 16000;
            }

            priceInput.forEach((input) => {
               input.addEventListener("input", (e) => {
                  let minPrice = parseInt(priceInput[0].value),
                     maxPrice = parseInt(priceInput[1].value);

                  if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
                     if (e.target.className === "input-min") {
                        rangeInput[0].value = minPrice;
                        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
                     } else {
                        rangeInput[1].value = maxPrice;
                        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
                     }
                  }
               });
            });

            rangeInput.forEach((input) => {
               input.addEventListener("input", (e) => {
                  let minVal = parseInt(rangeInput[0].value),
                     maxVal = parseInt(rangeInput[1].value);

                  if (maxVal - minVal < priceGap) {
                     if (e.target.className === "range-min") {
                        rangeInput[0].value = maxVal - priceGap;
                     } else {
                        rangeInput[1].value = minVal + priceGap;
                     }
                  } else {
                     priceInput[0].value = minVal;
                     priceInput[1].value = maxVal;
                     range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
                     range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
                  }
               });
            });

            function resetAll() {
               // filter reset
               const inputMin = filter.querySelector(".input-min");
               const inputMax = filter.querySelector(".input-max");
               const rangeMin = filter.querySelector(".range-min");
               const rangeMax = filter.querySelector(".range-max");
               const progressInput = filter.querySelector(".progress");

               inputMin.value = 1000;
               inputMax.value = 20000;

               if ($(window).width() < 599) {
                  rangeMin.value = 1700;
                  rangeMax.value = 16000;
               } else if ($(window).width() > 599) {
                  rangeMin.value = 1000;
                  rangeMax.value = 20000;
               }

               if ($(window).width() < 599) {
                  progressInput.style.cssText = `
                      left: 35%;
                      right: 35%;
                   `;
               } else if ($(window).width() < 900) {
                  progressInput.style.cssText = `
                      left: 20%;
                      right: 20%;
                   `;
               } else if ($(window).width() > 899) {
                  progressInput.style.cssText = `
                      left: 25%;
                      right: 25%;
                   `;
               }

               const sublistFlower = filter.querySelector("[data-filter-sublist-flower]");

               const sublistStyle = filter.querySelector("[data-filter-sublist-style]");

               const sublistWho = filter.querySelector("[data-filter-sublist-who]");

               const sublistReason = filter.querySelector("[data-filter-sublist-reason]");

               const sublistQual = filter.querySelector("[data-filter-sublist-qual]");

               const sublistFlowerInputs = sublistFlower.querySelectorAll("input");
               sublistFlowerInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
               const sublistStyleInputs = sublistStyle.querySelectorAll("input");
               sublistStyleInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
               const sublistWhoInputs = sublistWho.querySelectorAll("input");
               sublistWhoInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });

               const sublistReasonInputs = sublistReason.querySelectorAll("input");
               sublistReasonInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
               const sublistQualInputs = sublistQual.querySelectorAll("input");
               sublistQualInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            }

            const btnResetAll = filter.querySelector("[data-btn-reset-all]");
            btnResetAll.addEventListener("click", function () {
               resetAll();
            });

            // filter reset
            const btnResetRange = filter.querySelector("[data-btn-reset-range]");
            const inputMin = filter.querySelector(".input-min");
            const inputMax = filter.querySelector(".input-max");
            const rangeMin = filter.querySelector(".range-min");
            const rangeMax = filter.querySelector(".range-max");
            const progressInput = filter.querySelector(".progress");

            btnResetRange.addEventListener("click", function () {
               if ($(window).width() < 599) {
                  rangeMin.value = 1700;
                  rangeMax.value = 16000;
                  inputMin.value = 1000;
                  inputMax.value = 20000;
               } else if ($(window).width() > 599) {
                  inputMin.value = 1000;
                  inputMax.value = 20000;

                  rangeMin.value = 1000;
                  rangeMax.value = 20000;
               }

               if ($(window).width() < 599) {
                  progressInput.style.cssText = `
                      left: 35%;
                      right: 35%;
                   `;
               } else if ($(window).width() < 900) {
                  progressInput.style.cssText = `
                      left: 20%;
                      right: 20%;
                   `;
               } else if ($(window).width() > 899) {
                  progressInput.style.cssText = `
                      left: 25%;
                      right: 25%;
                   `;
               }
            });

            const btnResetFlower = filter.querySelector("[data-btn-reset-flower]");
            const sublistFlower = filter.querySelector("[data-filter-sublist-flower]");

            const btnResetStyle = filter.querySelector("[data-btn-reset-style]");
            const sublistStyle = filter.querySelector("[data-filter-sublist-style]");

            const btnResetWho = filter.querySelector("[data-btn-reset-who]");
            const sublistWho = filter.querySelector("[data-filter-sublist-who]");

            const btnResetReason = filter.querySelector("[data-btn-reset-reason]");
            const sublistReason = filter.querySelector("[data-filter-sublist-reason]");

            const btnResetQual = filter.querySelector("[data-btn-reset-qual]");
            const sublistQual = filter.querySelector("[data-filter-sublist-qual]");

            btnResetFlower.addEventListener("click", function () {
               const sublistFlowerInputs = sublistFlower.querySelectorAll("input");
               sublistFlowerInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });
            btnResetStyle.addEventListener("click", function () {
               const sublistStyleInputs = sublistStyle.querySelectorAll("input");
               sublistStyleInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });
            btnResetWho.addEventListener("click", function () {
               const sublistWhoInputs = sublistWho.querySelectorAll("input");
               sublistWhoInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });

            btnResetReason.addEventListener("click", function () {
               const sublistReasonInputs = sublistReason.querySelectorAll("input");
               sublistReasonInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });

            btnResetQual.addEventListener("click", function () {
               const sublistQualInputs = sublistQual.querySelectorAll("input");
               sublistQualInputs.forEach(function (input) {
                  if ((input.checked = true)) {
                     input.checked = false;
                  }
               });
            });
         });

         // Download Btn
         const downloadBtns = document.querySelectorAll("[data-download-btn]");
         let resultsCards = `
             <div class="filter-results__row">
                <div class="card-standart filter-results__card">
                   <a href="#!" class="card-standart__img">
                      <img src="./img/standart-card/01.png" alt="01">
                   </a>
                   <div class="card-standart__descr">
                      <a href="#!" class="card-standart__text">
                         Букет из 101 красной розы
                      </a>
                      <button class="card-standart__like favorite">
                         <svg>
                            <path
                               d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                               stroke-linecap="round" stroke-linejoin="round" />
                         </svg>
                      </button>
    
                   </div>
                   <h3 class="h3 card-standart__pricing">
                      <span class="card-standart__price">1 800 ₽</span>
                      <s class="card-standart__oldprice">2 230₽</s>
                   </h3>
                   <button class="btn-order">
                      <span class="btn-order__do active">
                         <svg>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                         </svg>
                         <span>Заказать</span>
                      </span>
                      <span class="btn-order__done">
                         <svg>
                            <path
                               d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                         </svg>
                         <span>В корзине</span>
                      </span>
                   </button>
                </div>
                <div class="card-standart filter-results__card">
                   <a href="#!" class="card-standart__img">
                      <img src="./img/standart-card/01.png" alt="01">
                   </a>
                   <div class="card-standart__descr">
                      <a href="#!" class="card-standart__text">
                         Букет из 101 красной розы
                      </a>
                      <button class="card-standart__like favorite">
                         <svg>
                            <path
                               d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                               stroke-linecap="round" stroke-linejoin="round" />
                         </svg>
                      </button>
    
                   </div>
                   <h3 class="h3 card-standart__pricing">
                      <span class="card-standart__price">1 800 ₽</span>
                      <s class="card-standart__oldprice">2 230₽</s>
                   </h3>
                   <button class="btn-order">
                      <span class="btn-order__do active">
                         <svg>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                         </svg>
                         <span>Заказать</span>
                      </span>
                      <span class="btn-order__done">
                         <svg>
                            <path
                               d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                         </svg>
                         <span>В корзине</span>
                      </span>
                   </button>
                </div>
                <div class="card-standart filter-results__card">
                   <a href="#!" class="card-standart__img">
                      <img src="./img/standart-card/01.png" alt="01">
                   </a>
                   <div class="card-standart__descr">
                      <a href="#!" class="card-standart__text">
                         Букет из 101 красной розы
                      </a>
                      <button class="card-standart__like favorite">
                         <svg>
                            <path
                               d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                               stroke-linecap="round" stroke-linejoin="round" />
                         </svg>
                      </button>
    
                   </div>
                   <h3 class="h3 card-standart__pricing">
                      <span class="card-standart__price">1 800 ₽</span>
                      <s class="card-standart__oldprice">2 230₽</s>
                   </h3>
                   <button class="btn-order">
                      <span class="btn-order__do active">
                         <svg>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                         </svg>
                         <span>Заказать</span>
                      </span>
                      <span class="btn-order__done">
                         <svg>
                            <path
                               d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                         </svg>
                         <span>В корзине</span>
                      </span>
                   </button>
                </div>
                <div class="card-standart filter-results__card">
                   <a href="#!" class="card-standart__img">
                      <img src="./img/standart-card/01.png" alt="01">
                   </a>
                   <div class="card-standart__descr">
                      <a href="#!" class="card-standart__text">
                         Букет из 101 красной розы
                      </a>
                      <button class="card-standart__like favorite">
                         <svg>
                            <path
                               d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                               stroke-linecap="round" stroke-linejoin="round" />
                         </svg>
                      </button>
    
                   </div>
                   <h3 class="h3 card-standart__pricing">
                      <span class="card-standart__price">1 800 ₽</span>
                      <s class="card-standart__oldprice">2 230₽</s>
                   </h3>
                   <button class="btn-order">
                      <span class="btn-order__do active">
                         <svg>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                         </svg>
                         <span>Заказать</span>
                      </span>
                      <span class="btn-order__done">
                         <svg>
                            <path
                               d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                         </svg>
                         <span>В корзине</span>
                      </span>
                   </button>
                </div>
                <div class="card-standart filter-results__card">
                   <a href="#!" class="card-standart__img">
                      <img src="./img/standart-card/01.png" alt="01">
                   </a>
                   <div class="card-standart__descr">
                      <a href="#!" class="card-standart__text">
                         Букет из 101 красной розы
                      </a>
                      <button class="card-standart__like favorite">
                         <svg>
                            <path
                               d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                               stroke-linecap="round" stroke-linejoin="round" />
                         </svg>
                      </button>
    
                   </div>
                   <h3 class="h3 card-standart__pricing">
                      <span class="card-standart__price">1 800 ₽</span>
                      <s class="card-standart__oldprice">2 230₽</s>
                   </h3>
                   <button class="btn-order">
                      <span class="btn-order__do active">
                         <svg>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                         </svg>
                         <span>Заказать</span>
                      </span>
                      <span class="btn-order__done">
                         <svg>
                            <path
                               d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                         </svg>
                         <span>В корзине</span>
                      </span>
                   </button>
                </div>
                <div class="card-standart filter-results__card">
                   <a href="#!" class="card-standart__img">
                      <img src="./img/standart-card/01.png" alt="01">
                   </a>
                   <div class="card-standart__descr">
                      <a href="#!" class="card-standart__text">
                         Букет из 101 красной розы
                      </a>
                      <button class="card-standart__like favorite">
                         <svg>
                            <path
                               d="M7.5 2.75C3.77208 2.75 0.75 5.7721 0.75 9.5C0.75 12.7302 2.63881 15.6556 4.79928 17.8374C6.97201 20.0316 9.63484 21.6943 11.6058 22.3493C11.8617 22.4344 12.1383 22.4344 12.3942 22.3493C14.3652 21.6943 17.028 20.0316 19.2007 17.8374C21.3612 15.6556 23.25 12.7302 23.25 9.5C23.25 5.77209 20.2279 2.75 16.5 2.75C14.7709 2.75 13.1933 3.40109 12 4.46887C10.8067 3.40109 9.22909 2.75 7.5 2.75Z"
                               stroke-linecap="round" stroke-linejoin="round" />
                         </svg>
                      </button>
    
                   </div>
                   <h3 class="h3 card-standart__pricing">
                      <span class="card-standart__price">1 800 ₽</span>
                      <s class="card-standart__oldprice">2 230₽</s>
                   </h3>
                   <button class="btn-order">
                      <span class="btn-order__do active">
                         <svg>
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M2.10762 6.67832C2.22637 6.53885 2.40033 6.4585 2.5835 6.4585H18.4168C18.6 6.4585 18.774 6.53885 18.8927 6.67832C19.0115 6.81779 19.063 7.00233 19.0338 7.18317L17.2838 18.0165C17.2349 18.3193 16.9735 18.5418 16.6668 18.5418H4.3335C4.0268 18.5418 3.76541 18.3193 3.7165 18.0165L1.9665 7.18317C1.93729 7.00233 1.98888 6.81779 2.10762 6.67832ZM3.31756 7.7085L4.86564 17.2918H16.1347L17.6828 7.7085H3.31756Z" />
                            <path fill-rule="evenodd" clip-rule="evenodd"
                               d="M5.2915 7.0835C5.2915 4.0292 7.57329 1.4585 10.4998 1.4585C13.4264 1.4585 15.7082 4.0292 15.7082 7.0835C15.7082 7.42867 15.4283 7.7085 15.0832 7.7085C14.738 7.7085 14.4582 7.42867 14.4582 7.0835C14.4582 4.61495 12.6359 2.7085 10.4998 2.7085C8.3638 2.7085 6.5415 4.61495 6.5415 7.0835C6.5415 7.42867 6.26168 7.7085 5.9165 7.7085C5.57133 7.7085 5.2915 7.42867 5.2915 7.0835Z" />
                         </svg>
                         <span>Заказать</span>
                      </span>
                      <span class="btn-order__done">
                         <svg>
                            <path
                               d="M8.125 14.9998L3.375 10.2498L4.5625 9.06234L8.125 12.6248L15.7708 4.979L16.9583 6.1665L8.125 14.9998Z" />
                         </svg>
                         <span>В корзине</span>
                      </span>
                   </button>
                </div>
             </div>
             `;
         downloadBtns.forEach(function (downloadBtn) {
            downloadBtn.addEventListener("click", function () {
               downloadBtn.insertAdjacentHTML("beforebegin", resultsCards);
               const btnLikesCatalog2 = document.querySelectorAll(".favorite");
               // btnLikesCatalog2.forEach(function (btnLike) {
               //    btnLike.addEventListener("click", function () {
               //       btnLike.classList.toggle("active");
               //    });
               // });
            });
         });

         // Swiper for popular category section
         const swiperCatalogSlider = new Swiper("#catalog-swiper-slider", {
            spaceBetween: 8,
            slidesPerView: "auto",

            loop: false,
         });

         const popupFilter = document.querySelector("[data-popup-filter]");
         const btnFilterPopup = document.querySelector("[data-btn-filter-popup]");

         btnFilterPopup.addEventListener("click", function () {
            popupFilter.classList.add("active");
            body.classList.add("overflow");
         });
      } else if (window.location.toString().indexOf("product-buket.html") > 0) {
         const cardFormProducts = document.querySelectorAll("[data-card-form]");
         cardFormProducts.forEach(function (cardFormProduct) {
            const topsizesBtns = cardFormProduct.querySelectorAll(".top-sizes__btn");
            cardFormProduct.addEventListener("submit", function (e) {
               e.preventDefault();
            });
         });
         // Swiper for product category section
         const swiperProductCard = new Swiper("#product-slider-swiper", {
            loop: false,
            slidesPerView: 1,
         });
         // const maxItems = 4;
         const sliderNavItems = document.querySelectorAll(".product-slider__nav-item");
         // const sliderNav = document.querySelector(".product-card__nav");
         sliderNavItems.forEach((el, index) => {
            el.setAttribute("data-index", index);

            el.addEventListener("click", (e) => {
               const index = parseInt(e.currentTarget.dataset.index);
               swiperProductCard.slideTo(index);
            });
         });

         // card btn sizes
         const btnCardSizes = document.querySelectorAll(".product-card__size");
         btnCardSizes.forEach(function (btnCardSize) {
            btnCardSize.addEventListener("click", function () {
               btnCardSizes.forEach(function (btnCardSize2) {
                  btnCardSize2.classList.remove("active");
               });
               btnCardSize.classList.add("active");
            });
         });

         // Accordeon card
         const productItemHeadings = document.querySelectorAll("[data-product-heading]");

         productItemHeadings.forEach(function (productItemHeading) {
            productItemHeading.addEventListener("click", function () {
               const productCardArrow = productItemHeading.querySelector(".product-card__arrow");
               productCardArrow.classList.toggle("active");

               const productSublist = productItemHeading.nextElementSibling;
               productSublist.classList.toggle("active");

               // if ($(window).width() >= 599) {
               //    if (productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.classList.add("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.classList.add("display");
               //       });

               //    } else if (!productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.classList.remove("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.classList.remove("display");
               //       });
               //       const productSublist = productItemHeading.nextElementSibling;
               //       productSublist.classList.toggle("active");
               //    }
               // } else if ($(window).width() < 599) {
               //    if (productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.parentNode.classList.add("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.parentNode.classList.remove("none");
               //       });

               //       const productSublist = productItemHeading.nextElementSibling;
               //       productSublist.classList.toggle("active");
               //    } else if (!productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.parentNode.classList.remove("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.parentNode.classList.add("none");
               //       });
               //       const productSublist = productItemHeading.nextElementSibling;
               //       productSublist.classList.toggle("active");
               //    }
               // }
            });
         });

         // Add "active" for btn like
         const btnLikesCatalog = document.querySelectorAll(".favorite");
         btnLikesCatalog.forEach(function (btnLike) {
            btnLike.addEventListener("click", function () {
               btnLike.classList.toggle("active");
            });
         });

         // Btn 1 click
         const btn1Clicks = document.querySelectorAll("[data-btn-1-click]");
         const popupForder = document.querySelector("[data-popup-forder]");
         btn1Clicks.forEach(function (btn1Click) {
            btn1Click.addEventListener("click", function () {
               popupForder.classList.add("active");
               overlayDark.classList.add("active");
            });
         });
         $("#forder-tel").mask("+7 999 999-99-99");

         const forderForm = document.querySelector(".popup-forder__form");
         const popupSucces2 = document.querySelector("[data-popup-succes]");
         forderForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const forderBtn = forderForm.querySelector("[data-forder-btn]");
            const forderTel = forderForm.querySelector("#forder-tel");
            const validateError = forderForm.querySelector(".validate-error");
            forderBtn.addEventListener("click", function () {
               if (forderTel.value == "") {
                  e.preventDefault();
                  validateError.classList.add("active");
               } else if (!forderTel.value == "") {
                  validateError.classList.remove("active");
                  popupForder.classList.remove("active");
                  popupSucces2.classList.add("active");
               }
            });
         });

         overlayDark.addEventListener("click", function () {
            overlayDark.classList.remove("active");
            popupForder.classList.remove("active");
            popupSucces2.classList.remove("active");
         });

         // Swiper for Product card
         const swiperProductCardMob = new Swiper("#product-slider-swiper-mob", {
            loop: false,
            slidesPerView: 1,
         });

         const btnArrowBack = document.querySelector("[data-product-arrow-back]");
         btnArrowBack.addEventListener("click", function () {
            window.location.href = "../index.html";
         });

         // Swiper for Product card sizes
         const productSizesSlider = new Swiper("#productSizesSlider", {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 16,
         });

         // Swiper for additional cards
         const additionalSwiper = new Swiper("#additionalSwiper", {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 8,
         });

         new AirDatepicker("#airDatePickerBuketDesc", {
            navTitles: {
               days: "<i>MMMM</i> <strong>yyyy</strong>",
            },
            dateFormat: "dd/MM/yyyy",
         });
         new AirDatepicker("#airDatePickerBuketMob", {
            navTitles: {
               days: "<i>MMMM</i> <strong>yyyy</strong>",
            },

            isMobile: true,
            autoClose: true,
            dateFormat: "dd/MM/yyyy",
         });

         // const labelDatePickers = document.querySelectorAll(".input-date-item");
         // labelDatePickers.forEach(function (labelDatePicker) {
         //    labelDatePicker.addEventListener("click", function () {
         //       console.log("hello");
         //    });
         // });
         //
      } else if (window.location.toString().indexOf("product-single.html") > 0) {
         const cardFormProducts = document.querySelectorAll("[data-card-form]");
         cardFormProducts.forEach(function (cardFormProduct) {
            const topsizesBtns = cardFormProduct.querySelectorAll(".top-sizes__btn");
            cardFormProduct.addEventListener("submit", function (e) {
               e.preventDefault();
            });
            topsizesBtns.forEach(function (topsizesBtn) {
               const dataBtnTopSizes = cardFormProduct.querySelectorAll("[data-btn-top-size]");
               dataBtnTopSizes.forEach(function (dataBtnTopSize) {
                  dataBtnTopSize.addEventListener("click", function () {
                     dataBtnTopSizes.forEach(function (dataBtnTopSize2) {
                        dataBtnTopSize2.classList.remove("active");
                     });
                     dataBtnTopSize.classList.add("active");
                  });
               });
               const dataBtnTopNums = cardFormProduct.querySelectorAll("[data-btn-top-num]");
               dataBtnTopNums.forEach(function (dataBtnTopNum) {
                  dataBtnTopNum.addEventListener("click", function () {
                     dataBtnTopNums.forEach(function (dataBtnTopNum2) {
                        dataBtnTopNum2.classList.remove("active");
                     });
                     dataBtnTopNum.classList.add("active");
                  });
               });
            });
         });

         // Swiper for top sizes Size btn
         const topSizesSizeSlider = new Swiper("#topSizesSizeSlider", {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 16,
         });
         // Swiper for top sizes num btn
         const topSizesNumSlider = new Swiper("#topSizesNumSlider", {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 16,
         });

         // counter
         const counters = document.querySelectorAll(".counter");
         counters.forEach(function (counter) {
            const counterMinus = counter.querySelector(".counter__minus");
            const counterPlus = counter.querySelector(".counter__plus");
            const counterNum = counter.querySelector(".counter__input");

            counterNum.addEventListener("input", function () {
               if (counterNum.value > 101) {
                  counterNum.value = 101;
               } else if (counterNum.value < 1) {
                  counterNum.value = 1;
               }
            });

            counterMinus.addEventListener("click", function () {
               if (counterNum.value > 1) {
                  counterNum.value = +counterNum.value - 1;
               }
            });
            counterPlus.addEventListener("click", function () {
               if (counterNum.value < 101) {
                  counterNum.value = +counterNum.value + 1;
               }
            });
         });

         // Btn 1 click
         const btn1Clicks = document.querySelectorAll("[data-btn-1-click]");
         const popupForder = document.querySelector("[data-popup-forder]");
         btn1Clicks.forEach(function (btn1Click) {
            btn1Click.addEventListener("click", function () {
               popupForder.classList.add("active");
               overlayDark.classList.add("active");
            });
         });
         $("#forder-tel").mask("+7 999 999-99-99");

         const forderForm = document.querySelector(".popup-forder__form");
         const popupSucces2 = document.querySelector("[data-popup-succes]");
         forderForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const forderBtn = forderForm.querySelector("[data-forder-btn]");
            const forderTel = forderForm.querySelector("#forder-tel");
            const validateError = forderForm.querySelector(".validate-error");
            forderBtn.addEventListener("click", function () {
               if (forderTel.value == "") {
                  e.preventDefault();
                  validateError.classList.add("active");
               } else if (!forderTel.value == "") {
                  validateError.classList.remove("active");
                  popupForder.classList.remove("active");
                  popupSucces2.classList.add("active");
               }
            });
         });

         overlayDark.addEventListener("click", function () {
            overlayDark.classList.remove("active");
            popupForder.classList.remove("active");
            popupSucces2.classList.remove("active");
         });

         // Swiper for product category section
         const swiperProductCard = new Swiper("#product-slider-swiper", {
            loop: false,
            slidesPerView: 1,
         });
         // const maxItems = 4;
         const sliderNavItems = document.querySelectorAll(".product-slider__nav-item");
         // const sliderNav = document.querySelector(".product-card__nav");
         sliderNavItems.forEach((el, index) => {
            el.setAttribute("data-index", index);

            el.addEventListener("click", (e) => {
               const index = parseInt(e.currentTarget.dataset.index);
               swiperProductCard.slideTo(index);
            });
         });

         // Accordeon card
         const productItemHeadings = document.querySelectorAll("[data-product-heading]");

         productItemHeadings.forEach(function (productItemHeading) {
            productItemHeading.addEventListener("click", function () {
               const productCardArrow = productItemHeading.querySelector(".product-card__arrow");
               productCardArrow.classList.toggle("active");

               const productSublist = productItemHeading.nextElementSibling;
               productSublist.classList.toggle("active");

               // if ($(window).width() >= 599) {
               //    if (productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.classList.add("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.classList.add("display");
               //       });

               //    } else if (!productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.classList.remove("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.classList.remove("display");
               //       });
               //       const productSublist = productItemHeading.nextElementSibling;
               //       productSublist.classList.toggle("active");
               //    }
               // } else if ($(window).width() < 599) {
               //    if (productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.parentNode.classList.add("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.parentNode.classList.remove("none");
               //       });

               //       const productSublist = productItemHeading.nextElementSibling;
               //       productSublist.classList.toggle("active");
               //    } else if (!productItemHeading.hasAttribute("data-product-flowers")) {
               //       const btnSizes = document.querySelectorAll(".btn--size");
               //       const btnFlowers = document.querySelectorAll(".btn--flowers");
               //       btnSizes.forEach(function (btnSize) {
               //          btnSize.parentNode.classList.remove("none");
               //       });
               //       btnFlowers.forEach(function (btnFlower) {
               //          btnFlower.parentNode.classList.add("none");
               //       });
               //       const productSublist = productItemHeading.nextElementSibling;
               //       productSublist.classList.toggle("active");
               //    }
               // }
            });
         });

         // Add "active" for btn like
         const btnLikesCatalog = document.querySelectorAll(".favorite");
         btnLikesCatalog.forEach(function (btnLike) {
            btnLike.addEventListener("click", function () {
               btnLike.classList.toggle("active");
            });
         });

         // Swiper for Product card
         const swiperProductCardMob = new Swiper("#product-slider-swiper-mob", {
            loop: false,
            slidesPerView: 1,
         });

         const btnArrowBack = document.querySelector("[data-product-arrow-back]");
         btnArrowBack.addEventListener("click", function () {
            window.location.href = "../index.html";
         });

         // Swiper for additional cards
         const additionalSwiper = new Swiper("#additionalSwiper", {
            loop: false,
            slidesPerView: "auto",
            spaceBetween: 8,
         });

         new AirDatepicker("#airDatePickerBuketDesc", {
            navTitles: {
               days: "<i>MMMM</i> <strong>yyyy</strong>",
            },
            dateFormat: "dd/MM/yyyy",
         });
         new AirDatepicker("#airDatePickerBuketMob", {
            navTitles: {
               days: "<i>MMMM</i> <strong>yyyy</strong>",
            },

            isMobile: true,
            autoClose: true,
            dateFormat: "dd/MM/yyyy",
         });
      } else if (window.location.toString().indexOf("profile.html") > 0) {
         $("#userTel").mask("+7 999 999-99-99");
         $("#userTel2").mask("+7 999 999-99-99");
         const userTelInputs = document.querySelectorAll("[data-tel-input]");
         userTelInputs.forEach(function (userTelInput) {
            userTelInput.addEventListener("click", function () {
               userTelInput.classList.add("active");
            });
         });
         // // Input active
         const groupInputsPr = document.querySelectorAll(".form-group__input");
         groupInputsPr.forEach(function (groupInput) {
            groupInput.addEventListener("input", function () {
               if (groupInput.value != "") {
                  groupInput.classList.add("active");
                  // change password
                  const btnPopupPasswords = document.querySelectorAll("[data-btn-change]");
                  const popupPassword = document.querySelector("[data-popup-password]");
                  btnPopupPasswords.forEach(function (btnPopupPassword) {
                     btnPopupPassword.addEventListener("click", function () {
                        popupPassword.classList.add("active");
                        overlayDark.classList.add("active");
                     });
                  });

                  overlayDark.addEventListener("click", function () {
                     popupPassword.classList.remove("active");
                     overlayDark.classList.remove("active");
                  });

                  popupPassword.addEventListener("submit", function (e) {
                     e.preventDefault();
                  });
               } else if (groupInput.value == "") {
                  groupInput.classList.remove("active");
               }
            });
         });

         // jQuery Validate form
         $("#userPersonalFormDesck").validate({
            rules: {
               name: {
                  required: true,
               },
               secname: {
                  required: true,
               },
               adress: {
                  required: true,
               },
               tel: {
                  required: true,
               },
               email: {
                  required: true,
               },
            },
            messages: {
               name: {
                  required: "*",
               },
               secname: {
                  required: "*",
               },
               adress: {
                  required: "*",
               },
               tel: {
                  required: "*",
               },
               email: {
                  required: "*",
                  // email: "*",
               },
            },
            // submitHandler: function (form) {
            //    ajaxFormSubmit();
            // },
         });

         // jQuery Validate form
         $("#userPersonalFormMob").validate({
            rules: {
               name: {
                  required: true,
               },
               secname: {
                  required: true,
               },
               adress: {
                  required: true,
               },
               tel: {
                  required: true,
               },
               email: {
                  required: true,
               },
            },
            messages: {
               name: {
                  required: "*",
               },
               secname: {
                  required: "*",
               },
               adress: {
                  required: "*",
               },
               tel: {
                  required: "*",
               },
               email: {
                  required: "*",
                  // email: "*",
               },
            },
            // submitHandler: function (form) {
            //    ajaxFormSubmit();
            // },
         });

         const userPersonalForms = document.querySelectorAll("[data-user-personal-form]");
         userPersonalForms.forEach(function (userPersonalForm) {
            userPersonalForm.addEventListener("submit", function (e) {
               e.preventDefault();
            });

            // Input File Avatr Image view
            const avatarImg = userPersonalForm.querySelector("[data-avatar-img]");
            const inputFile = userPersonalForm.querySelector(".user-personal__input");

            inputFile.addEventListener("change", function () {
               avatarImg.src = URL.createObjectURL(inputFile.files[0]);
            });
         });

         // Profile catlog
         const dataProfileItems = document.querySelectorAll("[data-profile-item]");
         const dataProfileContents = document.querySelectorAll("[data-profile-content]");
         dataProfileItems.forEach(function (dataProfileItem) {
            dataProfileItem.addEventListener("click", function () {
               dataProfileItems.forEach(function (dataProfileItem) {
                  dataProfileItem.classList.remove("active");
               });
               dataProfileItem.classList.add("active");
               const contentId = document.querySelector("#" + dataProfileItem.dataset.profileItem);
               dataProfileContents.forEach(function (dataProfileContent) {
                  dataProfileContent.classList.add("none");
               });
               contentId.classList.remove("none");

               if (contentId.id == "profile-personal") {
                  const pageNavLists = document.querySelectorAll(".page-nav__list");
                  pageNavLists.forEach(function (pageNavList) {
                     const navItemMain = pageNavList.querySelector(".page-nav__item-profile");
                     const navItemMain2 = pageNavList.querySelector(".page-nav__item-profile-2");
                     const navItemOrder = pageNavList.querySelector(".page-nav__item-order");
                     const navItemPromo = pageNavList.querySelector(".page-nav__item-promo");

                     navItemMain.classList.remove("none");
                     navItemMain2.classList.add("none");
                     navItemOrder.classList.add("none");
                     navItemPromo.classList.add("none");
                  });
               } else if (contentId.id == "profile-orders") {
                  const pageNavLists = document.querySelectorAll(".page-nav__list");
                  pageNavLists.forEach(function (pageNavList) {
                     const navItemMain = pageNavList.querySelector(".page-nav__item-profile");
                     const navItemMain2 = pageNavList.querySelector(".page-nav__item-profile-2");
                     const navItemOrder = pageNavList.querySelector(".page-nav__item-order");
                     const navItemPromo = pageNavList.querySelector(".page-nav__item-promo");

                     navItemMain.classList.add("none");
                     navItemMain2.classList.remove("none");
                     navItemOrder.classList.remove("none");
                     navItemPromo.classList.add("none");
                  });
               } else if (contentId.id == "profile-disounts") {
                  const pageNavLists = document.querySelectorAll(".page-nav__list");
                  pageNavLists.forEach(function (pageNavList) {
                     const navItemMain = pageNavList.querySelector(".page-nav__item-profile");
                     const navItemMain2 = pageNavList.querySelector(".page-nav__item-profile-2");
                     const navItemOrder = pageNavList.querySelector(".page-nav__item-order");
                     const navItemPromo = pageNavList.querySelector(".page-nav__item-promo");
                     navItemMain.classList.add("none");
                     navItemMain2.classList.remove("none");
                     navItemOrder.classList.add("none");
                     navItemPromo.classList.remove("none");
                  });
               }
            });
         });

         // Order current/end
         const orderItems = document.querySelectorAll("[data-order-condition]");
         const orderContents = document.querySelectorAll("[data-order-content]");
         orderItems.forEach(function (orderItem) {
            orderItem.addEventListener("click", function () {
               orderItems.forEach(function (orderItem2) {
                  orderItem2.classList.remove("active");
               });
               orderItem.classList.add("active");

               const orderId = document.querySelector("#" + orderItem.dataset.orderCondition);
               orderContents.forEach(function (orderContent) {
                  orderContent.classList.add("none");
               });
               orderId.classList.remove("none");
            });
         });

         // Delete accaunt
         const btnDeletes = document.querySelectorAll("[data-del-btn]");
         const popupDelete = document.querySelector("[data-popup-delete]");
         const btnCancel = document.querySelector("[data-btn-cancel]");
         const btnTotalDel = document.querySelector("[data-btn-total-del]");
         const overlayDarkMob = document.querySelector(".overlay-dark-mob");
         btnDeletes.forEach(function (btnDelete) {
            btnDelete.addEventListener("click", function () {
               popupDelete.classList.add("active");
               overlayDarkMob.classList.add("active");

               overlayDark.addEventListener("click", function () {
                  popupDelete.classList.remove("active");
                  overlayDarkMob.classList.remove("active");
               });

               btnTotalDel.addEventListener("click", function () {
                  popupDelete.classList.remove("active");
                  overlayDarkMob.classList.remove("active");
               });
               btnCancel.addEventListener("click", function () {
                  popupDelete.classList.remove("active");
                  overlayDarkMob.classList.remove("active");
               });
            });
         });

         const closePopupDel = popupDelete.querySelector("[data-popup2-cross]");
         closePopupDel.addEventListener("click", function () {
            popupDelete.classList.remove("active");
            overlayDarkMob.classList.remove("active");
         });

         overlayDarkMob.addEventListener("click", function () {
            popupDelete.classList.remove("active");
            overlayDarkMob.classList.remove("active");
         });

         // button Edit
         const btnEdit = document.querySelector("[data-btn-edit]");
         const popupPersonal = document.querySelector("[data-popup-personal]");
         btnEdit.addEventListener("click", function () {
            popupPersonal.classList.add("active");
            body.classList.add("overflow");
         });

         // close inner popup
         const innerPopups = document.querySelectorAll(".inner-popup");
         innerPopups.forEach(function (innerPopup) {
            const arrowClose = innerPopup.querySelector("[data-arrow-close]");
            arrowClose.addEventListener("click", function () {
               innerPopup.classList.remove("active");
               body.classList.remove("overflow");
            });
         });

         // order popup inner
         const btnMyOrder = document.querySelector("[data-btn-myorder]");
         const popupMyorder = document.querySelector("[data-popup-myorder]");
         btnMyOrder.addEventListener("click", function () {
            popupMyorder.classList.add("active");
            body.classList.add("overflow");
         });

         // popup promo inner
         const btnPromo = document.querySelector("[data-btn-promo]");
         const popupPromo = document.querySelector("[data-popup-promo]");
         btnPromo.addEventListener("click", function () {
            popupPromo.classList.add("active");
            body.classList.add("overflow");
         });

         // Input active
         const groupInputs = document.querySelectorAll(".form-group__input");
         groupInputs.forEach(function (groupInput) {
            groupInput.addEventListener("input", function () {
               if (groupInput.value != "") {
                  groupInput.classList.add("active");
               } else if (groupInput.value == "") {
                  if (groupInput.classList.contains("active")) {
                     groupInput.classList.remove("active");
                  }
               }
            });
         });
      } else if (window.location.toString().indexOf("basket.html") > 0) {
         const basketForm = document.querySelector("[data-basket-form]");
         basketForm.addEventListener("submit", function (e) {
            e.preventDefault();

            // Minimal price 1999 active / hide
            const totalItemPrice = basketForm.querySelector(".basket-total__item-price");
            const basketTotalDanger = basketForm.querySelector(".basket-total__danger");
            const basketTotalHintBottom = basketForm.querySelector(".basket-total__hint-bottom");

            const basketRowDesc = basketForm.querySelector(".basket__row--descr");
            const basketRowMob = basketForm.querySelector(".basket__row--mob");

            const basketCardDesc = basketRowDesc.querySelector(".basket-card");
            const basketCardMob = basketRowMob.querySelector(".basket-card");

            const basketBtn = basketForm.querySelector(".basket__btn");

            const basketCardPriceDesc =
               basketCardDesc.querySelector(".basket-card__price").innerText;
            const basketCardPriceMob = basketCardMob.querySelector(".basket-card__price").innerText;

            if ($(window).width() >= 899) {
               let basketNumPrice = +basketCardPriceDesc.replace("₽", "").replaceAll(" ", "");
               if (basketNumPrice < 2000) {
                  totalItemPrice.classList.add("none");
                  basketTotalDanger.classList.remove("none");
                  basketTotalHintBottom.classList.remove("none");
                  basketBtn.classList.add("basket__btn--error");
               } else {
                  totalItemPrice.classList.remove("none");
                  basketTotalDanger.classList.add("none");
                  basketTotalHintBottom.classList.add("none");

                  if (basketBtn.classList.contains("basket__btn--error")) {
                     basketBtn.classList.remove("basket__btn--error");
                  } else if (!basketBtn.classList.contains("basket__btn--error")) {
                  }

                  window.location.href = "../ordering.html";
               }
            } else if ($(window).width() < 899) {
               let basketNumPrice = +basketCardPriceMob.replace("₽", "").replaceAll(" ", "");
               if (basketNumPrice < 2000) {
                  totalItemPrice.classList.add("none");
                  basketTotalDanger.classList.remove("none");
                  basketTotalHintBottom.classList.remove("none");
                  basketBtn.classList.add("basket__btn--error");
               } else {
                  totalItemPrice.classList.remove("none");
                  basketTotalDanger.classList.add("none");
                  basketTotalHintBottom.classList.add("none");
                  if (basketBtn.classList.contains("basket__btn--error")) {
                     basketBtn.classList.remove("basket__btn--error");
                  } else if (!basketBtn.classList.contains("basket__btn--error")) {
                  }
                  window.location.href = "../ordering.html";
               }
            }
         });

         // counter
         const counters = document.querySelectorAll(".counter");
         counters.forEach(function (counter) {
            const counterMinus = counter.querySelector(".counter__minus");
            const counterPlus = counter.querySelector(".counter__plus");
            const counterNum = counter.querySelector(".counter__input");

            counterNum.addEventListener("input", function () {
               if (counterNum.value > 101) {
                  counterNum.value = 101;
               } else if (counterNum.value < 1) {
                  counterNum.value = 1;
               }
            });

            counterMinus.addEventListener("click", function () {
               if (counterNum.value > 1) {
                  counterNum.value = +counterNum.value - 1;
               }
            });
            counterPlus.addEventListener("click", function () {
               if (counterNum.value < 101) {
                  counterNum.value = +counterNum.value + 1;
               }
            });
         });

         const btnRemoveCards = basketForm.querySelectorAll("[data-remove-btn]");
         btnRemoveCards.forEach(function (btnRemoveCard) {
            btnRemoveCard.addEventListener("click", function () {
               btnRemoveCard.parentNode.parentNode.remove();
            });
         });

         const btnRemoveCardMobs = basketForm.querySelectorAll("[data-remove-btn-mob]");
         btnRemoveCardMobs.forEach(function (btnRemoveCardMob) {
            btnRemoveCardMob.addEventListener("click", function () {
               btnRemoveCardMob.parentNode.remove();
            });
         });

         // Input active
         const groupInputs = document.querySelectorAll(".form-group__input");
         groupInputs.forEach(function (groupInput) {
            groupInput.addEventListener("input", function () {
               if (groupInput.value != "") {
                  groupInput.classList.add("active");
               } else if (groupInput.value == "") {
                  if (groupInput.classList.contains("active")) {
                     groupInput.classList.remove("active");
                  }
               }
            });
         });

         const basketInputs = document.querySelectorAll(".basket-promocode__input");

         basketInputs.forEach(function (groupInput) {
            groupInput.addEventListener("input", function () {
               if (groupInput.value != "") {
                  groupInput.classList.add("active");
               } else if (groupInput.value == "") {
                  if (groupInput.classList.contains("active")) {
                     groupInput.classList.remove("active");
                  }
               }
            });
         });
      } else if (window.location.toString().indexOf("ordering.html") > 0) {
         //FORM VALIDATE
         $("#order-form").validate({
            rules: {
               sendName: {
                  required: true,
               },
               sendEmail: {
                  required: true,
               },
               sendTel: {
                  required: true,
               },
               getName: {
                  required: true,
               },
               getTel: {
                  required: true,
               },
               addres: {
                  required: true,
               },
               date: {
                  required: true,
               },
               beginTime: {
                  required: true,
               },
               endTime: {
                  required: true,
               },
            },
            messages: {
               sendName: {
                  required: "*",
               },
               sendEmail: {
                  required: "*",
                  // email: "*",
               },
               sendTel: {
                  required: "*",
               },
               getName: {
                  required: "*",
               },
               getTel: {
                  required: "*",
               },
               addres: {
                  required: "*",
               },
               date: {
                  required: "*",
               },
               beginTime: {
                  required: "*",
               },
               endTime: {
                  required: "*",
               },
            },
            // submitHandler: function (form) {
            //    ajaxFormSubmit();
            // },
         });

         $("#sendTel").mask("+7 999 999-99-99");
         $("#getTel").mask("+7 999 999-99-99");

         if ($(window).width() >= 599) {
            new AirDatepicker("#airDatePickerOrder", {
               navTitles: {
                  days: "<i>MMMM</i> <strong>yyyy</strong>",
               },
               dateFormat: "dd/MM/yyyy",
            });
         } else if ($(window).width() < 599) {
            new AirDatepicker("#airDatePickerOrder", {
               navTitles: {
                  days: "<i>MMMM</i> <strong>yyyy</strong>",
               },
               dateFormat: "dd/MM/yyyy",
               isMobile: true,
               autoClose: true,
            });
         }
      } else if (window.location.toString().indexOf("favorites.html") > 0) {
         // Add "active" for btn like
         const btnLikesCatalog = document.querySelectorAll(".favorite");
         const productRow = document.querySelector("[data-product-row]");
         const productMiss = document.querySelector("[data-product-miss]");
         btnLikesCatalog.forEach(function (btnLike) {
            btnLike.addEventListener("click", function () {
               btnLike.classList.remove("active");

               if ($(window).width() >= 599) {
                  if (!btnLike.classList.contains("active")) {
                     btnLike.parentNode.parentNode.remove();
                     if (productRow.childElementCount == 0) {
                        productRow.classList.add("none");
                        productMiss.classList.remove("none");
                     }
                  }
               } else if ($(window).width() < 599) {
                  if (!btnLike.classList.contains("active")) {
                     btnLike.parentNode.parentNode.remove();
                     if (productRow.childElementCount <= 2) {
                        productRow.classList.add("none");
                        productMiss.classList.remove("none");
                     }
                  }
               }
            });
         });
      } else if (window.location.toString().indexOf("help.html") > 0) {
         const helpBoxTops = document.querySelectorAll(".help-box__top");
         helpBoxTops.forEach(function (helpBoxTop) {
            helpBoxTop.addEventListener("click", function () {
               helpBoxTop.parentNode.classList.toggle("active");
            });
         });
      }
   });
});
