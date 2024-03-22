document.addEventListener('DOMContentLoaded', function() {
    function addExpandButtons() {
      const pageContainer = document.querySelector("section.markdown-section");
      const sectionHeadings = document.querySelectorAll("h2");

      for (h of sectionHeadings) {
        const currentSection = document.createElement("div");
        currentSection.classList.add("section");
        const sectionItems = [];
        
        let currentSib = h;
        let hitNextSection = false;
        while (!hitNextSection) {
          currentSib = currentSib.nextElementSibling;
          if (currentSib === null || currentSib.tagName === "H2" || [...currentSib.classList].includes("section")) {
            hitNextSection = true;
          } else {
            sectionItems.push(currentSib);
          }
        }

        const belowHeader = document.createElement("div");
        belowHeader.classList.add("section-content");
        for (it of sectionItems) {
          belowHeader.appendChild(it);
        }

        currentSection.appendChild(h);
        currentSection.appendChild(belowHeader);

        pageContainer.appendChild(currentSection);

        const expandButton = document.createElement("span");
        expandButton.textContent = "▲";
        expandButton.classList.add("expand-button");
        
        const expand = function() {
          const contracting = this.parentElement.parentElement.classList.toggle("contracted");
          belowHeader.style.maxHeight = contracting ? "0px" : belowHeader.scrollHeight + "px";
        };

        h.onclick = expand.bind(expandButton);
        h.appendChild(expandButton);
      }
    }

    gitbook.events.bind("page.change", function () {
        addExpandButtons();

        setTimeout(() => {
          document.querySelectorAll(".section-content").forEach(d => d.style.maxHeight = d.scrollHeight + "px");
        }, 1000);
    });
});
