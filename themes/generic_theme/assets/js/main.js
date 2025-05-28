window.addEventListener("load", () => {
    handlePageLoad();
    handlePointer();
});

function isMobile() {
    const regex =
        /mobi|android|webos|iphone|ipod|blackberry|iemobile|opera mini|ipad|tablet/i;
    return regex.test(navigator.userAgent.toLowerCase());
}

function handlePageLoad() {
    // save current position before leaving page
    window.onbeforeunload = () => {
        const pointer = document.getElementsByClassName("pointer")[0];
        const lastPosition = JSON.stringify({
            x: pointer.style.left,
            y: pointer.style.top,
        });

        localStorage.setItem("lastCursorPosition", lastPosition);
    };

    // restore cursor position on page load (if previously set)
    const pointer = document.getElementsByClassName("pointer")[0];
    const savedPosition = localStorage.getItem("lastCursorPosition");

    if (savedPosition) {
        const { x, y } = JSON.parse(savedPosition);
        pointer.style.left = x;
        pointer.style.top = y;
    }

    // make pointer visible not that it's set
    // (starts hidden to prevent "blip" on load and location setting)
    pointer.style.display = "block";
}

// cursor (pointer)
function handlePointer() {
    const isIpad =
        navigator.userAgent.match(/Mac/) &&
        navigator.maxTouchPoints &&
        navigator.maxTouchPoints > 2;

    if (isMobile() || isIpad) {
        const pointer = document.getElementsByClassName("pointer")[0];
        if (pointer) {
            pointer.style.visibility = "hidden";
            pointer.style.hidden = "true";
        }
    } else {
        document.addEventListener("mousemove", (event) => {
            const el = document.getElementsByClassName("pointer")[0];
            el.style.top = event.clientY + "px";
            el.style.left = event.clientX + "px";
        });

        document.querySelector("body").addEventListener("mouseenter", () => {
            const pointer = document.getElementsByClassName("pointer")[0];
            if (pointer) {
                pointer.style.visibility = "visible";
                pointer.style.hidden = "false";
            }
        });

        document.querySelector("body").addEventListener("mouseleave", () => {
            const pointer = document.getElementsByClassName("pointer")[0];
            if (pointer) {
                pointer.style.visibility = "hidden";
                pointer.style.hidden = "true";
            }
        });

        document.querySelectorAll(".image").forEach((el) => {
            el.addEventListener("mouseenter", () => {
                const pointer = document.getElementsByClassName("pointer")[0];
                if (pointer) {
                    pointer.style.visibility = "hidden";
                    pointer.style.hidden = "true";
                }
            });

            el.addEventListener("mouseleave", () => {
                const pointer = document.getElementsByClassName("pointer")[0];
                if (pointer) {
                    pointer.style.visibility = "visible";
                    pointer.style.hidden = "false";
                }
            });
        });

        document.querySelectorAll("iframe").forEach((el) => {
            el.addEventListener("mouseenter", () => {
                const pointer = document.getElementsByClassName("pointer")[0];
                if (pointer) pointer.style.visibility = "hidden";
                if (pointer) pointer.style.hidden = "true";
            });

            el.addEventListener("mouseleave", () => {
                const pointer = document.getElementsByClassName("pointer")[0];
                if (pointer) {
                    pointer.style.visibility = "visible";
                    pointer.style.hidden = "false";
                }
            });
        });
    }
}
