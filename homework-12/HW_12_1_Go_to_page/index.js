// На сторінці є дві кнопки. 
// При натисканні на першу кнопку користувач повинен ввести в prompt посилання, 
// при натисканні на другу – переадресовується на інший сайт (за раніше введеним посиланням).



document.getElementById("enterLink").addEventListener("click", () => {
    const link = prompt("Enter link", "https://google.com");
    if (link) {
      localStorage.setItem("redirectLink", link);
    }
  });

  document.getElementById("followTheLink").addEventListener("click", () => {
    const storedLink = localStorage.getItem("redirectLink");
    if (storedLink) {
      window.location.href = storedLink;
    } else {
      alert("No link has been entered yet. Please enter a link first.");
    }
  });