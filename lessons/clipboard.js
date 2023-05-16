// navigator.clipboard.readText()
//   .then(text => {
//     console.log(text); // Дані у форматі об'єкту JavaScript

//     const lines = text.split('\n');
//     const headers = lines[0].split('\t');
//     const data = [];
    
//     for (let i = 1; i < lines.length; i++) {
//       const row = lines[i].split('\t');
//       const rowData = {};
    
//       for (let j = 0; j < headers.length; j++) {
//         rowData[headers[j].trim()] = row[j].trim();
//       }
    
//       data.push(rowData);
//     }
    
//     const jsonData = JSON.stringify(data);
//     console.log(jsonData);
//     //const jsonData = JSON.parse(text);
//     //console.log(jsonData); // Дані у форматі об'єкту JavaScript
//     // const jsonContainer = document.getElementById('jsonContainer');
//     // const jsonString = JSON.stringify(data, null, 2);
//     // const jsonFormatted = syntaxHighlight(jsonString);
//     // jsonContainer.innerHTML = '<pre>' + jsonFormatted + '</pre>';

//     // // Функція для форматування відображення JSON з вирівнюванням та кольоровим підсвічуванням
//     // function syntaxHighlight(json) {
//     //   json = json.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');
//     //   return json.replace(/("(\\u[a-zA-Z0-9]{4}|\\[^u]|[^\\"])*"(\s*:)?|\b(true|false|null)\b|-?\d+(?:\.\d*)?(?:[eE][+-]?\d+)?)/g, function (match) {
//     //     let cls = 'number';
//     //     if (/^"/.test(match)) {
//     //       if (/:$/.test(match)) {
//     //         cls = 'key';
//     //       } else {
//     //         cls = 'string';
//     //       }
//     //     } else if (/true|false/.test(match)) {
//     //       cls = 'boolean';
//     //     } else if (/null/.test(match)) {
//     //       cls = 'null';
//     //     }
//     //     return '<span class="' + cls + '">' + match + '</span>';
//     //   });
//     // }
//   })
//   .catch(err => {
//     console.error('Помилка отримання даних з буфера обміну: ', err);
//   });
