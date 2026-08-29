/* =========================================
   ELEMENTS
========================================= */

const pastePage =
    document.getElementById("pastePage");

const resultPage =
    document.getElementById("resultPage");

const driveLink =
    document.getElementById("driveLink");

const resultLink =
    document.getElementById("resultLink");

const copyBtn =
    document.getElementById("copyBtn");

const openBtn =
    document.getElementById("openBtn");

const againBtn =
    document.getElementById("againBtn");

const errorMessage =
    document.getElementById("errorMessage");

const brandLink =
    document.getElementById("brandLink");


/* =========================================
   STATE
========================================= */

let generatedUrl = "";


/* =========================================
   GET FILE ID
========================================= */

function getFileId(url) {

    if (!url) {
        return null;
    }

    const match =
        url.match(
            /(?:\/d\/|id=)([a-zA-Z0-9_-]+)/
        );

    return match
        ? match[1]
        : null;
}


/* =========================================
   CREATE DOWNLOAD URL
========================================= */

function createDirectUrl(url) {

    const fileId =
        getFileId(url);

    if (!fileId) {
        return null;
    }

    return (
        "https://drive.google.com/uc" +
        "?export=download" +
        "&confirm=t" +
        "&id=" +
        fileId
    );
}


/* =========================================
   SHOW RESULT
========================================= */

function showResult(url) {

    generatedUrl =
        url;

    resultLink.value =
        generatedUrl;

    openBtn.href =
        generatedUrl;


    pastePage.classList.add(
        "d-none"
    );

    resultPage.classList.remove(
        "d-none"
    );

    resultPage.classList.add(
        "active"
    );


    history.replaceState(
        null,
        "",
        "#direct-download"
    );


    sessionStorage.setItem(
        "driveDirectUrl",
        generatedUrl
    );
}


/* =========================================
   PROCESS URL
========================================= */

function processUrl() {

    const value =
        driveLink.value.trim();


    errorMessage.classList.add(
        "d-none"
    );


    if (!value) {
        return;
    }


    const directUrl =
        createDirectUrl(value);


    if (!directUrl) {

        errorMessage.classList.remove(
            "d-none"
        );

        return;
    }


    showResult(
        directUrl
    );
}


/* =========================================
   INPUT
========================================= */

driveLink.addEventListener(
    "input",
    function () {

        const value =
            this.value.trim();


        errorMessage.classList.add(
            "d-none"
        );


        if (!value) {
            return;
        }


        if (
            getFileId(value)
        ) {

            processUrl();

        }

    }
);


/* =========================================
   PASTE
========================================= */

driveLink.addEventListener(
    "paste",
    function () {

        setTimeout(
            () => {

                processUrl();

            },
            50
        );

    }
);


/* =========================================
   ENTER
========================================= */

driveLink.addEventListener(
    "keydown",
    function (event) {

        if (
            event.key === "Enter"
        ) {

            event.preventDefault();

            processUrl();

        }

    }
);


/* =========================================
   COPY
========================================= */

copyBtn.addEventListener(
    "click",
    async function () {

        if (!generatedUrl) {
            return;
        }


        const originalText =
            copyBtn.textContent;


        try {

            await navigator.clipboard.writeText(
                generatedUrl
            );

        } catch (error) {

            const textarea =
                document.createElement(
                    "textarea"
                );

            textarea.value =
                generatedUrl;

            textarea.style.position =
                "fixed";

            textarea.style.left =
                "-9999px";

            document.body.appendChild(
                textarea
            );

            textarea.focus();

            textarea.select();


            try {

                document.execCommand(
                    "copy"
                );

            } catch (e) {

                // Copy restricted

            }


            textarea.remove();

        }


        copyBtn.textContent =
            "Copied";


        setTimeout(
            () => {

                copyBtn.textContent =
                    originalText;

            },
            1800
        );

    }
);


/* =========================================
   ADD ANOTHER
========================================= */

againBtn.addEventListener(
    "click",
    function () {

        generatedUrl =
            "";


        resultLink.value =
            "";

        openBtn.href =
            "#";

        driveLink.value =
            "";


        resultPage.classList.add(
            "d-none"
        );

        pastePage.classList.remove(
            "d-none"
        );

        pastePage.classList.add(
            "active"
        );


        errorMessage.classList.add(
            "d-none"
        );


        sessionStorage.removeItem(
            "driveDirectUrl"
        );


        history.replaceState(
            null,
            "",
            window.location.pathname
        );


        setTimeout(
            () => {

                driveLink.focus();

            },
            100
        );

    }
);


/* =========================================
   BRAND
========================================= */

brandLink.addEventListener(
    "click",
    function (event) {

        event.preventDefault();

        againBtn.click();

    }
);


/* =========================================
   RESTORE RESULT
========================================= */

function restoreState() {

    const savedUrl =
        sessionStorage.getItem(
            "driveDirectUrl"
        );


    if (
        window.location.hash ===
        "#direct-download"
        &&
        savedUrl
    ) {

        generatedUrl =
            savedUrl;


        resultLink.value =
            generatedUrl;

        openBtn.href =
            generatedUrl;


        pastePage.classList.add(
            "d-none"
        );

        resultPage.classList.remove(
            "d-none"
        );

        resultPage.classList.add(
            "active"
        );

        return;
    }


    pastePage.classList.remove(
        "d-none"
    );

    resultPage.classList.add(
        "d-none"
    );
}


/* =========================================
   INIT
========================================= */

restoreState();