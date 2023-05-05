let flag = 1; //Перемикач для додавання кнопок 0 або 1

//Додаємо кнопки для вставки оцінок в НЗ

console.clear();

if (flag == 1) addButtons();

function addButtons(){
 
  const elementsNZ = document
    .getElementById("journalList")
    .querySelectorAll('[id*="cell-0-"]');
  
  elementsNZ.forEach((e) => {
    var button = document.createElement("button");
    button.textContent = Array.from(elementsNZ).indexOf(e) + 1;
    e.appendChild(document.createElement("span"));
    // Додати кнопку до елементу
    e.appendChild(button);
    
    // Додати обробник події для кнопки
    button.addEventListener("click", function () {
      console.log("Номер стовпця: " + this.textContent);
      try {
        navigator.clipboard
          .readText()
          .then((text) => {
            // jsonString = JSON.parse(text),
            let ozinki = JSON.parse(text);
            setoz(parseInt(this.textContent) + 1, JSON.parse(text));
          })
          .catch((err) => console.error("Помилка даних: ", err));
      } catch (e) {
        console.log("Invalid JSON string");
      }
    });
    
  
  });

}

//Вставлення даних в НЗ
const cells = document.querySelectorAll("td");
function setoz(n, r) {
  //console.clear(),
  document
    .querySelector("#journalList")
    .querySelectorAll("tr")
    .forEach((c, e) => {
      setTimeout(() => {
        var e,
          l,
          t,
          o = c.cells[1].textContent.trim();
        for (e in r)
          e.split(" ").sort().join(" ") === o.split(" ").sort().join(" ") &&
            0 < (l = r[e][0]) &&
            (((t = c.cells[n].querySelector("input")).value = l),
            $(t).trigger("change")
            );
      }, 300 * e);
    });
}