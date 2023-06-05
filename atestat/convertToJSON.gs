function convertRangeToJson() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var range = sheet.getRange("A2:AD31"); // Встановлюємо діапазон, який містить дані
  var values = range.getValues();
  
  var jsonData = [];
  
  for (var i = 0; i < values.length; i++) {
    var row = values[i];
    var rowData = {};
    
    rowData["Прізвище"] = row[1];
    rowData["Номер свідоцтва"] = row[2];
    rowData["Українська мова"] = row[3];
    rowData["Українська література"] = row[4];
    rowData["Англійська мова"] = row[5];
    rowData["Зарубіжна література"] = row[6];
    rowData["Історія України"] = row[7];
    rowData["Всесвітня історія"] = row[8];
    rowData["Громадянська освіта"] = row[9];
    rowData["Математика"] = row[10];
    rowData["Природничі науки"] = row[11];
    rowData["Захист України"] = row[12];
    rowData["Фізична культура"] = row[13];
    rowData["Практичні заняття з інформатики"] = row[14];
    rowData["Хімія: лабораторні та практичні розв’язування задач"] = row[15];
    rowData["Біологія: розв’язування задач"] = row[16];
    rowData["Фізика: лабораторні та практичні розв’язування задач"] = row[17];
    rowData["Географія"] = row[18];
    rowData["Інформатика"] = row[19];
    rowData["Технології"] = row[20];
    rowData["Країнознавство Великобританії та США"] = row[21];
    rowData["Англійська ділова мова"] = row[22];
    
    jsonData.push(rowData);
  }
  
  var jsonString = JSON.stringify(jsonData);
  
  //Logger.log(jsonString); // Виводимо результат у журнал (лог)
  saveJsonToDrive(jsonString) 

}

function saveJsonToDrive(jsonString) {
  var jsonData = jsonString; // Рядок з JSON-даними
  
  var folderId = '1Xmclj9PS7WEJ4IuNdYetuCWS2TcvcDx_'; // Ідентифікатор папки на Google Drive
  
  var folder = DriveApp.getFolderById(folderId);
  var fileName = 'data.json'; // Назва файлу
  
  var file = folder.createFile(fileName, jsonData);
  
  Logger.log('Файл збережено: ' + file.getUrl());
}

N