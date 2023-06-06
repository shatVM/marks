//[START Видалення всіх оцінок http://atestat.pp.ua/]
var delBtn = document.querySelectorAll('.ozuserlist')

delBtn.forEach(element => {
    element.click()
    var delBtn = document.querySelectorAll('.deltr')

delBtn.forEach(element => {
    element.click()
});
});
//[END Видалення всіх оцінок http://atestat.pp.ua/]

var toz = document.querySelectorAll('.toz')

var allElements = document.getElementsByClassName('toz');
console.log(allElements)



// Отримуємо всі елементи <td> з класом "prname" (назви предметів)
var prnameElements = document.querySelectorAll('td.prname');

// Перебираємо кожен елемент <td> з класом "prname"
prnameElements.forEach(function(element) {
  var subject = element.innerText.trim(); // Отримуємо текст назви предмета
  var grade = getGradeForSubject(subject); // Отримуємо оцінку для даного предмета (ваша логіка)

  // Знаходимо відповідний елемент <td> з класом "toz" для даного предмета
  var tozElement = element.nextElementSibling;

  // Встановлюємо отриману оцінку у внутрішній текстовий елемент <td>
  tozElement.innerText = grade.toString();
});

// Функція для отримання оцінки для кожного предмета
function getGradeForSubject(subject) {
    // Отримання даних з буфера обміну
    //var clipboardData = navigator.clipboard.getData('Text');
    var clipboardData = marks;

  
    // Розбиття даних на рядки
    var rows = clipboardData.split('\n');
  
    // Пошук рядка з предметом
    var subjectRow = rows.find(function(row) {
      return row.includes(subject);
    });
  
    if (subjectRow) {
      // Розбиття рядка на колонки
      var columns = subjectRow.split('\t');
  
      // Отримання оцінки для предмета
      var grade = columns[1];
  
      if (grade && !isNaN(grade)) {
        return parseInt(grade);
      }
    }
  
    return 0; // Встановлюємо оцінку 0, якщо не вдалося отримати оцінку з буфера обміну
  }
  
  marks = 'Українська мова	Українська література	Англійська мова	Зарубіжна література	Історія України	Всесвітня історія	Громадянська освіта	Математика	Природничі науки	Захист України	Фізична культура	Практичні заняття з інформатики	Хімія: лабораторні та практичні розв’язування задач	Біологія: розв’язування задач	Фізика: лабораторні та практичні розв’язування задач	Географія 	Інформатика 	Технології	Країнознавство Великобританії та США	Англійська ділова мова   10	10	8	10	9	10		10	10		11	11	10	12	10	11		11		'