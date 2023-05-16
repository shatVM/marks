//https://nz.ua/journal/add-edit-lesson?journal=2683125
let data = [
  {
    "type": "",
    "date": "2023-01-09",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-01-09",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-01-16",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-01-16",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-01-23",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-01-23",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "115",
    "date": "2023-01-23",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-01-30",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-01-30",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-06",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-06",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-13",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-13",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-20",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-20",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-27",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-02-27",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-03-06",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-03-06",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "115",
    "date": "2023-03-06",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-03-13",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-03-13",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-03-20",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-03-20",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-03",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-03",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-10",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-10",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-17",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-17",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-24",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-04-24",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-01",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-01",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "115",
    "date": "2023-05-01",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-08",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-08",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-15",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-15",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-22",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-22",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-29",
    "buzzer": "7",
    "room": "21086418"
  },
  {
    "type": "",
    "date": "2023-05-29",
    "buzzer": "8",
    "room": "21086418"
  },
  {
    "type": "115",
    "date": "2023-05-29",
    "buzzer": "8",
    "room": "21086418"
  }
];

console.clear();
data.forEach((e) => clickAddButton(e));

function clickAddButton(data) {
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
    addLessons(data);
    //if (flag == 1) addClassroomButton();
  }, 2000);
}

function addLessons(data) {
  //
  var lesson_type_id = document.getElementById(
    "osvitaschedulereal-lesson_type_id"
  );
  if (data.type == "115") {
    lesson_type_id.value = data.type;
  } else {
    lesson_type_id.value = "110";
  }

  //
  var lesson_date_alt = document.getElementById("lesson_date_alt");
  lesson_date_alt.value = data.date;

  var lesson_date = document.getElementById("lesson_date");
  lesson_date.value = data.date;

  var buzzer_id = document.getElementById("osvitaschedulereal-buzzer_id");
  buzzer_id.value = "868859" + data.buzzer;

  var room_id = document.getElementById("osvitaschedulereal-room_id");
  room_id.value = data.room;

  // Отримуємо елемент посилання за допомогою селектора
  const link = document.querySelector("a.ms-button.form-submit-btn");

  // Викликаємо метод click() для кліку на посилання
  link.click();
}
