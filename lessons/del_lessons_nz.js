console.clear();
const lessons = document
  .getElementById("journalList")
  .querySelectorAll('a[title="Для редагування колонки натисніть на дату"]');

lessons[0].click();

setTimeout(function () {
  document.querySelector(".delete-lesson").click();
  setTimeout(function () {
    // Найти все элементы <button> на странице

    const buttons = document.querySelectorAll("button");

    buttons[5].click();
  }, 500);
}, 500);





