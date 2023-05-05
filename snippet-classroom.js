//

let flag = 1; //Перемикач для додавання кнопок 0 або 1
let pauseTime = 10000;

console.clear();

//Додаємо кнопки в журнал оцінок в Classroom
setTimeout(function () {
  console.clear();
  if (flag == 1) addClassroomButton();
}, pauseTime);

function addClassroomButton() {
  // Знайти всі елементи з класом .RUkyfb
  var elements = document.querySelectorAll(".RUkyfb");

  // Пройтися по кожному елементу та додати кнопку
  elements.forEach(function (element) {
    // Створити кнопку
    var button = document.createElement("button");
    button.textContent = Array.from(elements).indexOf(element) + 1;

    // Додати обробник події для кнопки
    button.addEventListener("click", function () {
      // Обробник події
      //console.log("Button clicked!");

      console.clear();
      let oznum = parseInt(this.textContent),
        table = document.getElementsByTagName("table"),
        tbody = table[0];
      const rows = tbody.children[1].children;
      let sdata = {},
        ozinki = "",
        tds = rows;
      for (let t = 0; t < tds.length; t++) {
        if (void 0 !== rows[t]) {
          let o = rows[t].children,
            i = o[0].innerText;
          (ozinki = ozinki + i + ": "), (sdata[i] = []);
          for (let n = 1; n < o.length - 1; n++) {
            let t = o[n].innerText.split("\n");
            1 < t.length &&
              ((t = t[1].split("/")), oznum == n) &&
              (0 < parseInt(t[0])
                ? ((ozinki = ozinki + t[0] + ", "), sdata[i].push(t[0]))
                : ((ozinki = ozinki + 0 + ", "), sdata[i].push(0)));
          }
          sdata[i];
        }
        ozinki = "";
      }
      navigator.clipboard.writeText(JSON.stringify(sdata)).then(
        function () {
          console.log(
            "Успішно скопійовано у буфер обміну: " + JSON.stringify(sdata)
          );
        },
        function () {
          console.error("Не вдалося скопіювати текст у буфер обміну");
        }
      );
    });

    // Додати кнопку до елементу
    element.append(button);
  });
}
