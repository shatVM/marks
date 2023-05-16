function transformDate() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A2:A"); // Змініть цей діапазон відповідно до потреб вашої таблиці

  var values = range.getValues();
  //Logger.log(values);
  
  var outputValues = [];

  var lesson = sheet.getRange("D2:D"); // Змініть цей діапазон відповідно до потреб вашої таблиці
  var lessonValues = lesson.getValues();
  var outputLessons = [];

  var type = sheet.getRange("E2:E"); // Змініть цей діапазон відповідно до потреб вашої таблиці
  var lessonType = type.getValues();
  var outputType = [];


  for (var i = 0; i < values.length; i++) {
    
      var inputDate = values[i][0];
      var inputLesson = lessonValues[i][0];
     var inputType = lessonType[i][0];
    
    
    if (typeof inputDate === 'object' && inputDate instanceof Date) {
      var formattedDate = Utilities.formatDate(inputDate, Session.getScriptTimeZone(), "yyyy-MM-dd");
      outputValues.push([formattedDate]);
      outputLessons.push([inputLesson]);
      if (inputType == 'Тем') {
        outputType.push(['115'])
        } else {
          outputType.push(['']);
          }
    } else {
      outputValues.push(['']);
      outputLessons.push(['']);
      outputType.push(['']);
    }

     
          

  

  }

  range.offset(0, 5).setValues(outputValues); // Збереження даних у комірку F (offset(0, 4))

  range.offset(0, 6).setValues(outputLessons); // Збереження даних у комірку G (offset(0, 6))
  range.offset(0, 7).setValues(outputType); // Збереження даних у комірку H (offset(0, 7))



}


function generateJsonFile() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var dataRange = sheet.getRange("F:H");
  var dataValues = dataRange.getValues();

  var jsonData = [];

  for (var i = 1; i < dataValues.length; i++) {

    var date = dataValues[i][0];
    var buzzer = dataValues[i][1];
    var type = dataValues[i][2];

    if (date && buzzer) {
      var room = "21086418";


      var jsonObject = {
        type: "",
        date: date.toString(),
        buzzer: buzzer.toString(),
        room: room
      };

      jsonData.push(jsonObject);

      //Додаємо тематичну тією ж датою і 8-м уроком
      if (type) {
        var jsonObject = {
          type: type.toString(),
          date: date.toString(),
          buzzer: "8",
          room: room
        };
        jsonData.push(jsonObject);
      }
    }
  }

  var jsonString = JSON.stringify(jsonData, null, 2);
  var fileName = "data.json";

  // Збереження JSON-файлу на Google Диск
  var folder = DriveApp.getRootFolder(); // Змініть належним чином, якщо потрібно зберегти у конкретну папку
  var file = folder.createFile(fileName, jsonString);

  Logger.log("JSON файл створено успішно!");
}
