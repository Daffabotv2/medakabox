window.onload = () => {
      const animatedElement = document.getElementById("animated");
      const anima = document.getElementById("anime");

      animatedElement.addEventListener("animationend", () => {
        animatedElement.removeAttribute("id");
        anima.removeAttribute("id");
      });

      window.addEventListener("scroll", setScrollVar);
      window.addEventListener("resize", setScrollVar);

      function setScrollVar() {
        const htmlElement = document.getElementById("top");
        const percentOfScreenHeightScrolled = htmlElement.scrollTop / htmlElement.clientHeight;
        const au = percentOfScreenHeightScrolled * 100;
        console.log("hasil: " + au);
        // console.log(1 - (1 / 100) * Number(Math.min(au, 30)) * 100 / 30);
        // console.log("jika berada di bawah: " + (1 / 100) * (Math.max(au, 25) - 25) * 100 / 75);
        htmlElement.style.setProperty(
          "--scroll",
          au
        );
      }

      setScrollVar()
    }
