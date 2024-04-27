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
        const percentOfScreenHeightScrolled = window.pageYOffset / (htmlElement.clientHeight - window.innerHeight);
        const au = percentOfScreenHeightScrolled * 100;
        let toper = htmlElement.clientHeight - window.innerHeight;
        let clint = htmlElement.clientHeight;
        let off = htmlElement.offsetHeight;
        let woff = window.innerHeight;
        console.log(toper);
        console.log(clint);
        console.log(off);
        console.log(woff);
        console.log((htmlElement.scrollTop / htmlElement.clientHeight) * 100);
        htmlElement.style.setProperty(
          "--scroll",
          au
        );
      }

      setScrollVar()
    }
