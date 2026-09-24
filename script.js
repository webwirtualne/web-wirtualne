document.addEventListener("DOMContentLoaded", () => {

    /* =========================================
       USTAWIENIA FORMULARZA
    ========================================= */

    /*
       FORMULARZ JEST OBSŁUGIWANY PRZEZ FORMSUBMIT
       BEZPOŚREDNIO W HTML.
    */



    /* =========================================
       JĘZYK
    ========================================= */

    const lang = document.documentElement.lang || "pl";

    const translations = {

        pl: {
            months: [
                "Styczeń", "Luty", "Marzec", "Kwiecień",
                "Maj", "Czerwiec", "Lipiec", "Sierpień",
                "Wrzesień", "Październik", "Listopad", "Grudzień"
            ],
            weekdays: ["Pn", "Wt", "Śr", "Cz", "Pt", "So", "Nd"],

            chooseDate: "Wybierz datę",
            chooseTime: "Wybierz godzinę",
            availability: "Godziny dostępności",

            booking:
                "Dziękuję! Rezerwacja jest obecnie wersją demonstracyjną.",

            form:
                "Dziękuję za wiadomość! Wiadomość została wysłana.",

            formSending:
                "Wysyłanie...",

            formError:
                "Nie udało się wysłać wiadomości. Spróbuj ponownie później.",

            cookieNecessary: "Tylko niezbędne",
            cookieAccept: "Akceptuję",
            privacy: "Polityka prywatności",

            portfolio: "PROJEKT",
            viewProject: "Zobacz projekt ↗"
        },


        en: {
            months: [
                "January", "February", "March", "April",
                "May", "June", "July", "August",
                "September", "October", "November", "December"
            ],
            weekdays: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],

            chooseDate: "Choose a date",
            chooseTime: "Choose a time",
            availability: "Available hours",

            booking:
                "Thank you! Booking is currently a demo version.",

            form:
                "Thank you for your message! Your message has been sent.",

            formSending:
                "Sending...",

            formError:
                "The message could not be sent. Please try again later.",

            cookieNecessary: "Necessary only",
            cookieAccept: "Accept",
            privacy: "Privacy policy",

            portfolio: "PROJECT",
            viewProject: "View project ↗"
        },


        de: {
            months: [
                "Januar", "Februar", "März", "April",
                "Mai", "Juni", "Juli", "August",
                "September", "Oktober", "November", "Dezember"
            ],
            weekdays: ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"],

            chooseDate: "Datum auswählen",
            chooseTime: "Uhrzeit auswählen",
            availability: "Verfügbare Uhrzeiten",

            booking:
                "Vielen Dank! Die Buchung ist derzeit eine Demo-Version.",

            form:
                "Vielen Dank für Ihre Nachricht! Ihre Nachricht wurde gesendet.",

            formSending:
                "Wird gesendet...",

            formError:
                "Die Nachricht konnte nicht gesendet werden. Bitte versuchen Sie es später erneut.",

            cookieNecessary: "Nur notwendige",
            cookieAccept: "Akzeptieren",
            privacy: "Datenschutz",

            portfolio: "PROJEKT",
            viewProject: "Projekt ansehen ↗"
        },


        nl: {
            months: [
                "januari", "februari", "maart", "april",
                "mei", "juni", "juli", "augustus",
                "september", "oktober", "november", "december"
            ],
            weekdays: ["Ma", "Di", "Wo", "Do", "Vr", "Za", "Zo"],

            chooseDate: "Kies een datum",
            chooseTime: "Kies een tijd",
            availability: "Beschikbare tijden",

            booking:
                "Bedankt! De boeking is momenteel een demoversie.",

            form:
                "Bedankt voor uw bericht! Uw bericht is verzonden.",

            formSending:
                "Verzenden...",

            formError:
                "Het bericht kon niet worden verzonden. Probeer het later opnieuw.",

            cookieNecessary: "Alleen noodzakelijk",
            cookieAccept: "Accepteren",
            privacy: "Privacybeleid",

            portfolio: "PROJECT",
            viewProject: "Project bekijken ↗"
        },


        fr: {
            months: [
                "janvier", "février", "mars", "avril",
                "mai", "juin", "juillet", "août",
                "septembre", "octobre", "novembre", "décembre"
            ],
            weekdays: ["Lu", "Ma", "Me", "Je", "Ve", "Sa", "Di"],

            chooseDate: "Choisissez une date",
            chooseTime: "Choisissez une heure",
            availability: "Horaires disponibles",

            booking:
                "Merci ! La réservation est actuellement une version de démonstration.",

            form:
                "Merci pour votre message ! Votre message a été envoyé.",

            formSending:
                "Envoi...",

            formError:
                "Le message n'a pas pu être envoyé. Veuillez réessayer plus tard.",

            cookieNecessary: "Uniquement nécessaires",
            cookieAccept: "Accepter",
            privacy: "Politique de confidentialité",

            portfolio: "PROJET",
            viewProject: "Voir le projet ↗"
        }

    };


    const t = translations[lang] || translations.pl;



    /* =========================================
       MENU
    ========================================= */

    const menuToggle =
        document.querySelector(".menu-toggle");

    const mainNav =
        document.querySelector(".main-nav");


    if (menuToggle && mainNav) {

        menuToggle.addEventListener("click", () => {

            const open =
                mainNav.classList.toggle("active");


            menuToggle.classList.toggle(
                "active",
                open
            );


            menuToggle.setAttribute(
                "aria-expanded",
                open ? "true" : "false"
            );

        });


        mainNav
            .querySelectorAll("a")
            .forEach(link => {

                link.addEventListener("click", () => {

                    mainNav.classList.remove(
                        "active"
                    );


                    menuToggle.classList.remove(
                        "active"
                    );


                    menuToggle.setAttribute(
                        "aria-expanded",
                        "false"
                    );

                });

            });

    }



    /* =========================================
       PORTFOLIO MODAL
    ========================================= */

    const modal =
        document.querySelector(".project-modal");


    const overlay =
        modal
            ? modal.querySelector(".modal-overlay")
            : null;


    const closeButton =
        modal
            ? modal.querySelector(".modal-close")
            : null;


    const modalKicker =
        modal
            ? modal.querySelector(".modal-kicker")
            : null;


    const modalTitle =
        modal
            ? modal.querySelector(".modal-title")
            : null;


    const modalDescription =
        modal
            ? modal.querySelector(".modal-description")
            : null;


    const modalLink =
        modal
            ? modal.querySelector(".modal-link")
            : null;


    const portfolioCards =
        document.querySelectorAll(
            ".portfolio-card"
        );



    /* =========================================
       ZAMKNIĘCIE MODALA
    ========================================= */

    function closeModal(event) {

        if (event) {

            event.preventDefault();
            event.stopPropagation();

        }


        if (!modal) return;


        modal.classList.remove(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );


        document.body.classList.remove(
            "modal-open"
        );

    }



    /* =========================================
       OTWIERANIE PROJEKTU
    ========================================= */

    function openProject(card) {

        if (!modal || !card) return;


        const title =
            card.getAttribute(
                "data-title"
            ) || "";


        const description =
            card.getAttribute(
                "data-description"
            ) || "";


        const link =
            card.getAttribute(
                "data-link"
            ) || "#";


        if (modalKicker) {

            modalKicker.textContent =
                t.portfolio;

        }


        if (modalTitle) {

            modalTitle.textContent =
                title;

        }


        if (modalDescription) {

            modalDescription.textContent =
                description;

        }


        if (modalLink) {

            modalLink.href =
                link;

            modalLink.textContent =
                t.viewProject;

        }


        modal.classList.add(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "false"
        );


        document.body.classList.add(
            "modal-open"
        );

    }



    /* =========================================
       KARTY PORTFOLIO
    ========================================= */

    portfolioCards.forEach(card => {

        card.addEventListener(
            "click",
            () => {

                openProject(card);

            }
        );

    });



    /* =========================================
       X — ZAMKNIJ
    ========================================= */

    if (closeButton) {

        closeButton.addEventListener(
            "click",
            closeModal
        );

    }



    /* =========================================
       TŁO — ZAMKNIJ
    ========================================= */

    if (overlay) {

        overlay.addEventListener(
            "click",
            closeModal
        );

    }



    /* =========================================
       ESC — ZAMKNIJ
    ========================================= */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal &&
                modal.classList.contains("active")
            ) {

                closeModal();

            }

        }
    );



    /* =========================================
       MODAL ZAMKNIĘTY NA START
    ========================================= */

    if (modal) {

        modal.classList.remove(
            "active"
        );


        modal.setAttribute(
            "aria-hidden",
            "true"
        );

    }



    /* =========================================
       KALENDARZ
    ========================================= */

    const calendar =
        document.querySelector(
            ".calendar"
        );


    if (calendar) {

        const monthElement =
            calendar.querySelector(
                ".calendar-month"
            );


        const weekdays =
            calendar.querySelectorAll(
                ".calendar-weekdays span"
            );


        const daysElement =
            calendar.querySelector(
                ".calendar-days"
            );


        const previousButton =
            calendar.querySelector(
                ".calendar-prev"
            );


        const nextButton =
            calendar.querySelector(
                ".calendar-next"
            );


        const hoursBox =
            calendar.querySelector(
                ".calendar-hours"
            );


        const hoursTitle =
            calendar.querySelector(
                ".hours-title span"
            );


        const hoursSmall =
            calendar.querySelector(
                ".hours-title small"
            );


        const hoursList =
            calendar.querySelector(
                ".hours-list"
            );


        const selectedDateElement =
            calendar.querySelector(
                ".selected-date"
            );


        const selectedTimeElement =
            calendar.querySelector(
                ".selected-time"
            );


        const bookingButton =
            calendar.querySelector(
                ".booking-button"
            );


        let displayedMonth =
            new Date();


        let selectedDate =
            null;


        let selectedTime =
            null;


        displayedMonth.setDate(
            1
        );


        /* WEEKDAYS */

        weekdays.forEach(
            (item, index) => {

                if (t.weekdays[index]) {

                    item.textContent =
                        t.weekdays[index];

                }

            }
        );


        /* HOURS TITLE */

        if (hoursTitle) {

            hoursTitle.textContent =
                t.chooseTime;

        }


        if (hoursSmall) {

            hoursSmall.textContent =
                t.availability;

        }



        /* =========================================
           FORMAT DATE
        ========================================= */

        function formatDate(date) {

            const localeMap = {

                pl: "pl-PL",
                en: "en-GB",
                de: "de-DE",
                nl: "nl-NL",
                fr: "fr-CH"

            };


            return date.toLocaleDateString(
                localeMap[lang] || "pl-PL",
                {
                    day: "numeric",
                    month: "long",
                    year: "numeric"
                }
            );

        }



        /* =========================================
           RENDER CALENDAR
        ========================================= */

        function renderCalendar() {

            if (!daysElement) return;


            daysElement.innerHTML =
                "";


            const year =
                displayedMonth.getFullYear();


            const month =
                displayedMonth.getMonth();


            if (monthElement) {

                monthElement.textContent =
                    `${t.months[month]} ${year}`;

            }


            let firstDay =
                new Date(
                    year,
                    month,
                    1
                ).getDay();


            firstDay =
                firstDay === 0
                    ? 6
                    : firstDay - 1;


            const daysInMonth =
                new Date(
                    year,
                    month + 1,
                    0
                ).getDate();


            const today =
                new Date();


            today.setHours(
                0,
                0,
                0,
                0
            );


            /* PUSTE DNI */

            for (
                let i = 0;
                i < firstDay;
                i++
            ) {

                const empty =
                    document.createElement(
                        "div"
                    );


                empty.className =
                    "calendar-day empty";


                daysElement.appendChild(
                    empty
                );

            }



            /* DNI */

            for (
                let day = 1;
                day <= daysInMonth;
                day++
            ) {

                const date =
                    new Date(
                        year,
                        month,
                        day
                    );


                date.setHours(
                    0,
                    0,
                    0,
                    0
                );


                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "calendar-day";


                button.textContent =
                    day;



                /* DNI PRZESZŁE */

                if (date < today) {

                    button.disabled =
                        true;


                    button.classList.add(
                        "disabled"
                    );

                } else {

                    button.addEventListener(
                        "click",
                        () => {

                            selectedDate =
                                new Date(
                                    date
                                );


                            selectedTime =
                                null;


                            daysElement
                                .querySelectorAll(
                                    ".calendar-day"
                                )
                                .forEach(
                                    dayButton => {

                                        dayButton.classList.remove(
                                            "selected"
                                        );

                                    }
                                );


                            button.classList.add(
                                "selected"
                            );


                            if (
                                selectedDateElement
                            ) {

                                selectedDateElement.textContent =
                                    formatDate(
                                        selectedDate
                                    );

                            }


                            if (
                                selectedTimeElement
                            ) {

                                selectedTimeElement.textContent =
                                    t.chooseTime;

                            }


                            if (
                                bookingButton
                            ) {

                                bookingButton.disabled =
                                    true;

                            }


                            renderHours();

                        }
                    );

                }



                /* DZISIAJ */

                if (
                    date.getTime() ===
                    today.getTime()
                ) {

                    button.classList.add(
                        "today"
                    );

                }


                daysElement.appendChild(
                    button
                );

            }

        }



        /* =========================================
           GODZINY
        ========================================= */

        function renderHours() {

            if (!hoursList) return;


            hoursList.innerHTML =
                "";


            if (!selectedDate) {

                if (hoursBox) {

                    hoursBox.classList.remove(
                        "active"
                    );

                }

                return;

            }


            if (hoursBox) {

                hoursBox.classList.add(
                    "active"
                );

            }


            const day =
                selectedDate.getDay();


            const weekend =
                day === 0 ||
                day === 6;


            const startHour =
                weekend
                    ? 10
                    : 16;


            const endHour =
                21;


            for (
                let hour = startHour;
                hour <= endHour;
                hour++
            ) {

                const button =
                    document.createElement(
                        "button"
                    );


                button.type =
                    "button";


                button.className =
                    "hour-button";


                const time =
                    `${String(hour).padStart(2, "0")}:00`;


                button.textContent =
                    time;


                button.addEventListener(
                    "click",
                    () => {

                        selectedTime =
                            time;


                        hoursList
                            .querySelectorAll(
                                ".hour-button"
                            )
                            .forEach(
                                item => {

                                    item.classList.remove(
                                        "selected"
                                    );

                                }
                            );


                        button.classList.add(
                            "selected"
                        );


                        if (
                            selectedTimeElement
                        ) {

                            selectedTimeElement.textContent =
                                time;

                        }


                        if (
                            bookingButton
                        ) {

                            bookingButton.disabled =
                                false;

                        }

                    }
                );


                hoursList.appendChild(
                    button
                );

            }

        }



        /* =========================================
           POPRZEDNI MIESIĄC
        ========================================= */

        if (previousButton) {

            previousButton.addEventListener(
                "click",
                () => {

                    displayedMonth.setMonth(
                        displayedMonth.getMonth() - 1
                    );


                    renderCalendar();

                    renderHours();

                }
            );

        }



        /* =========================================
           NASTĘPNY MIESIĄC
        ========================================= */

        if (nextButton) {

            nextButton.addEventListener(
                "click",
                () => {

                    displayedMonth.setMonth(
                        displayedMonth.getMonth() + 1
                    );


                    renderCalendar();

                    renderHours();

                }
            );

        }



        /* =========================================
           REZERWACJA
        ========================================= */

        if (bookingButton) {

            bookingButton.disabled =
                true;


            bookingButton.addEventListener(
                "click",
                () => {

                    if (!selectedDate) {

                        alert(
                            t.chooseDate
                        );

                        return;

                    }


                    if (!selectedTime) {

                        alert(
                            t.chooseTime
                        );

                        return;

                    }


                    alert(
                        `${formatDate(selectedDate)}\n` +
                        `${selectedTime}\n\n` +
                        `${t.booking}`
                    );

                }
            );

        }



        /* =========================================
           WARTOŚCI STARTOWE
        ========================================= */

        if (selectedDateElement) {

            selectedDateElement.textContent =
                t.chooseDate;

        }


        if (selectedTimeElement) {

            selectedTimeElement.textContent =
                t.chooseTime;

        }


        renderCalendar();

        renderHours();

    }



    /* =========================================
       FORMULARZ KONTAKTOWY
       FORMSUBMIT — OBSŁUGA PRZEZ HTML
    ========================================= */

    const contactForm =
        document.querySelector(
            ".contact-form"
        );


    if (contactForm) {

        const submitButton =
            contactForm.querySelector(
                'button[type="submit"]'
            );


        if (submitButton) {

            contactForm.addEventListener(
                "submit",
                () => {

                    submitButton.disabled =
                        true;


                    submitButton.innerHTML =
                        t.formSending;

                }
            );

        }

    }



    /* =========================================
       ROK
    ========================================= */

    const currentYear =
        document.getElementById(
            "current-year"
        );


    if (currentYear) {

        currentYear.textContent =
            new Date().getFullYear();

    }



    /* =========================================
       COOKIES
    ========================================= */

    const cookieBar =
        document.getElementById(
            "cookieBar"
        );


    const cookieNecessary =
        document.getElementById(
            "cookieNecessary"
        );


    const cookieAccept =
        document.getElementById(
            "cookieAccept"
        );


    const cookiePolicy =
        document.querySelector(
            ".cookie-policy"
        );


    if (cookieNecessary) {

        cookieNecessary.textContent =
            t.cookieNecessary;

    }


    if (cookieAccept) {

        cookieAccept.textContent =
            t.cookieAccept;

    }


    if (cookiePolicy) {

        cookiePolicy.textContent =
            t.privacy;

    }


    function hideCookieBar() {

        if (cookieBar) {

            cookieBar.classList.add(
                "hidden"
            );

        }

    }


    function saveCookieChoice(choice) {

        localStorage.setItem(
            "webWirtualneCookieChoice",
            choice
        );


        hideCookieBar();

    }


    if (cookieNecessary) {

        cookieNecessary.addEventListener(
            "click",
            () => {

                saveCookieChoice(
                    "necessary"
                );

            }
        );

    }


    if (cookieAccept) {

        cookieAccept.addEventListener(
            "click",
            () => {

                saveCookieChoice(
                    "accepted"
                );

            }
        );

    }


    if (
        localStorage.getItem(
            "webWirtualneCookieChoice"
        )
    ) {

        hideCookieBar();

    }

});