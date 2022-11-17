const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require('../account_google.json');

async function accessSpreadsheet() {
  //Dentro de GoogleSpreadsheet(AQUI VA LA PARTE DE LA URL DE LA HOJA DE GOOGLE QUE QUEREMOS ACCEDER)
  //EJEMPLO:
  //HOJA = https://docs.google.com/spreadsheets/d/1on-MGeJ7_tF_F2_UkVxDB3XduKynRGJNyrm5iH-g8MY/edit#gid=0
  //SOLO TOMAMOS: 
  //QUEDARÍA ASÍ: GoogleSpreadsheet(1on-MGeJ7_tF_F2_UkVxDB3XduKynRGJNyrm5iH-g8MY)
  const doc = new GoogleSpreadsheet('1on-MGeJ7_tF_F2_UkVxDB3XduKynRGJNyrm5iH-g8MY');
  
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];// or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  //console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
  await sheet.loadCells(); // no filter - will load ALL cells in the sheet
  //await sheet.loadCells('A1:G900'); // A1 range
  
  //const individual = sheet.getCell(2, 3);
  //console.log(individual.formattedValue)

  //const cellA1 = sheet.getCell(1, 0);
  //const cellC3 = sheet.getCellByA1('F3');

  //console.log("cellA1: ",cellA1.value)
  //console.log("cellC3: ",cellC3.formattedValue)
 
//Alcenamos todos los datos de todos los clientes en el array datasheetgoogle
datasheetgoogle = new Array;
//sheet.rowCount = es el numero de filas aunque sea SIN datos de la hoja de google
//sheet.columnCount = es el numero de columnas aunque sea SIN datos de la hoja de google
//console.log("Número de columnas: ",sheet.columnCount)
//console.log("Número de filas: ",sheet.rowCount)
for (let i=0; i < sheet.rowCount; i++)
    {
        for(let j=0; j < sheet.columnCount; j++)
        {
            let cellvalue = sheet.getCell(i, j);
            //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
            datasheetgoogle.push(cellvalue.formattedValue)
        }
    }
    //console.log("Cantidad de elemenos del array datasheetgoogle: ",datasheetgoogle.length) 
    //console.log(datasheetgoogle[2289]) 
    //Cada elemento del array es representado por una celda
    //En este caso datasheetgoogle.length = 3500 porque 500 filas x 7 columnas = 3500 elementos
    //console.log(datasheetgoogle.length)
}

accessSpreadsheet()



exports.usersControllers = (req, res) => {
    res.json({
        usersList: [datasheetgoogle] //Enviamos a userList todo el array datasheetgoogle
        //el cual contiene toda la data de la hoja de cálculo de Google
    })
}