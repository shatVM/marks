console.clear();
const lessons = document
  .getElementById("journalList")
  .querySelectorAll('a[title="Для редагування колонки натисніть на дату"]');

lessons[0].click();

setTimeout(function () {
  document.querySelector(".delete-lesson").click();
  setTimeout(function () {
   
    const buttons = document.querySelectorAll("button");
    buttons.forEach(function(button) {
      if (button.innerText === " Так") {    
        button.click()    
       }
    });   
  }, 500);
}, 500);
