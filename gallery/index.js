const onItemHovered = (event) => {
    const link = event.currentTarget.querySelector(".link");
    if (link) {
      link.style.display = "block";
    }
  };
  
  const onItemUnhovered = (event) => {
    const link = event.currentTarget.querySelector(".link");
    if (link) {
      link.style.display = "none";
    }
  };
  
  window.onload = function () {
    const eachItems = document.querySelectorAll('.item');
    eachItems.forEach(item => {
      item.addEventListener("mouseover", onItemHovered);
      item.addEventListener("mouseout", onItemUnhovered);
    });
  };
  