//https://nz.ua/journal/add-edit-lesson?journal=2683125
let group = "2683125"

let data =[ {
  date: "2023-05-31",
  buzzer: "1",
  room: "21086418",
},
{
  date: "2023-05-31",
  buzzer: "2",
  room: "21086418",
}
,
{
  date: "2023-05-31",
  buzzer: "3",
  room: "21086418",
}
,
{
  date: "2023-05-31",
  buzzer: "4",
  room: "21086418",
}

]

console.clear()
data.forEach((e) =>clickAddButton(group,e))


function clickAddButton(group,data) {
  // Отримуємо елемент посилання за допомогою селектора або інших методів
  //const link = document.querySelector(
  //  'a[href="/journal/add-edit-lesson?journal='+ group +'"]'
  //);

  //другий варіант - універсальний
  const link = document.querySelector('a[title="Додати стовпчик"]');

  // Викликаємо метод click() для кліку на посилання
  link.click();

//Через 2 секунди запускаємо функцію заповнення даних
  setTimeout(function () {
    
    addLessons(data.date, data.buzzer, data.room);
    //if (flag == 1) addClassroomButton();
  }, 2000);
}


function addLessons(date, buzzer, room) {
  //
  var lesson_date_alt = document.getElementById("lesson_date_alt");
  lesson_date_alt.value = date;

  var lesson_date = document.getElementById("lesson_date");
  lesson_date.value = date;

  var buzzer_id = document.getElementById("osvitaschedulereal-buzzer_id");
  buzzer_id.value ="868859" + buzzer;

  var room_id = document.getElementById("osvitaschedulereal-room_id");
  room_id.value = room;

  // Отримуємо елемент посилання за допомогою селектора
  const link = document.querySelector("a.ms-button.form-submit-btn");

  // Викликаємо метод click() для кліку на посилання
  link.click();
}
