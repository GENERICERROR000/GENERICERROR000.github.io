(() => {
  // <stdin>
  window.addEventListener("load", () => {
    handlePageLoad();
    handlePointer();
  });
  function isMobile() {
    const regex = /mobi|android|webos|iphone|ipod|blackberry|iemobile|opera mini|ipad|tablet/i;
    return regex.test(navigator.userAgent.toLowerCase());
  }
  function handlePageLoad() {
    window.onbeforeunload = () => {
      const pointer2 = document.getElementsByClassName("pointer")[0];
      const lastPosition = JSON.stringify({
        x: pointer2.style.left,
        y: pointer2.style.top
      });
      localStorage.setItem("lastCursorPosition", lastPosition);
    };
    const pointer = document.getElementsByClassName("pointer")[0];
    const savedPosition = localStorage.getItem("lastCursorPosition");
    if (savedPosition) {
      const { x, y } = JSON.parse(savedPosition);
      pointer.style.left = x;
      pointer.style.top = y;
    }
    pointer.style.display = "block";
  }
  function handlePointer() {
    const isIpad = navigator.userAgent.match(/Mac/) && navigator.maxTouchPoints && navigator.maxTouchPoints > 2;
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
})();
