let data = [];

console.clear();
data.forEach((e) => clickAddButton(e));

function clickAddButton(lessonData) {
  // Отримуємо елемент посилання за допомогою тексту
  // Викликаємо метод click() для кліку на посилання
  document.querySelector('a[title="Додати стовпчик"]').click();

  //Через 2 секунди запускаємо функцію заповнення даних
  setTimeout(function () {
    addLessons(lessonData);
    //if (flag == 1) addClassroomButton();
  }, 2000);
}

function addLessons(lessonData) {
  //
  var lesson_type_id = document.getElementById(
    "osvitaschedulereal-lesson_type_id"
  );
  if (lessonData.type == "115") {
    lesson_type_id.value = lessonData.type;
  } else {
    lesson_type_id.value = "110";
  }

  //
  var lesson_date_alt = document.getElementById("lesson_date_alt");
  lesson_date_alt.value = lessonData.date;

  var lesson_date = document.getElementById("lesson_date");
  lesson_date.value = lessonData.date;

  var buzzer_id = document.getElementById("osvitaschedulereal-buzzer_id");
  buzzer_id.value = "868859" + lessonData.buzzer; //може змінюватись у різних користувачів, потрібно перевіряти

  var room_id = document.getElementById("osvitaschedulereal-room_id");
  room_id.value = lessonData.room;

  // Отримуємо елемент посилання за допомогою селектора
  // Викликаємо метод click() для кліку на посилання
  document.querySelector("a.ms-button.form-submit-btn").click();
}
