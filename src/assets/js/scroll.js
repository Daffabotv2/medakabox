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
        const percentOfScreenHeightScrolled = window.pageYOffset / htmlElement.clientHeight;
        const au = percentOfScreenHeightScrolled * 100;
        let toper = window.pageYOffset;
        let clint = htmlElement.clientHeight;
        console.log(toper);
        console.log(clint);
        console.log((htmlElement.scrollTop / htmlElement.clientHeight) * 100);
        htmlElement.style.setProperty(
          "--scroll",
          au
        );
      }

      setScrollVar()
    }
