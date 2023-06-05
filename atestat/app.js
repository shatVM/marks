console.clear()
// Отримуємо всі елементи <td> з класом "prname" (назви предметів)
var prnameElements = document.querySelectorAll('td.prname');

// Перебираємо кожен елемент <td> з класом "prname"
prnameElements.forEach(function(element) {
  var subject = element.innerText.trim(); // Отримуємо текст назви предмета
  var grade = getGradeForSubject(subject); // Отримуємо оцінку для даного предмета (ваша логіка)

  // Знаходимо відповідний елемент <td> з класом "toz" для даного предмета
  var tozElement = element.nextElementSibling;

if (tozElement) {
    
    simulateEnterKeyPress(tozElement);
  }

    function simulateEnterKeyPress(element) {
  // Клік на елементі
  element.click();
    element.innerText = grade.toString();   
    var event = new KeyboardEvent('keydown', {
        key: 'Enter',
        keyCode: 13
      });

      element.dispatchEvent(event);

  setTimeout(function() {
    // Затримка 1 секунда перед внесенням даних
  }, 1000); // Затримка 1 секунда
}

});



// Функція для отримання оцінки для кожного предмета
function getGradeForSubject(subject) {

  var grades =     {
        "Прізвище": "Бондар В.В.",
        "Номер свідоцтва": 53705532,
        "Українська мова": 10,
        "Українська література": 10,
        "Англійська мова": 8,
        "Зарубіжна література": 10,
        "Історія України": 9,
        "Всесвітня історія": 10,
        "Громадянська освіта": "",
        "Математика": 10,
        "Природничі науки": 10,
        "Захист України": "",
        "Фізична культура": 11,
        "Практичні заняття з інформатики": 11,
        "Хімія: лабораторні та практичні розв’язування задач": 10,
        "Біологія: розв’язування задач": 12,
        "Фізика:лабораторні та практичні розв’язування задач": 10,
        "Географія": 11,
        "Інформатика": "",
        "Технології": 11,
        "Країнознавство Великобританії та США": "",
        "Англійська ділова мова": ""
    };

    
  if (subject in grades) {
    var grade = grades[subject];
    if (grade !== "") {
      if (!isNaN(grade)) {
        return parseInt(grade);
      } else {
        return 0; // Встановлюємо оцінку 0, якщо значення не є числом
      }
    }
  }

  return ""; // Повертаємо порожнє значення, якщо оцінка для предмета не знайдена
}