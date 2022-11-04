/* ESTO ERA LO NORMAL
exports.usersControllers = (req, res) => {
    res.json({
        usersList: ["user 1", "user 2", "user 3", "user 4", "user 5"]
    })
}
*/


const { GoogleSpreadsheet } = require("google-spreadsheet");
const creds = require('../client_secret.json');

async function accessSpreadsheet() {
  //de hoja de ana
   // const doc = new GoogleSpreadsheet('1g7xgzZYU1Hj17JOxhvv5LmKw2ZcaB5Hg4IFGjEoVP-M');
  
  //Sofen en copia
  //const doc = new GoogleSpreadsheet('1AeJ61TEBurxAGAJ3IeA_J-oKx-FInx_Qc_2HCIUY1co');

  //tavo
  //const doc = new GoogleSpreadsheet('1xkH__YodPUTMYD4VEQlaKxvKMsQzXR5iNPX4c7KLzaw');
  
  //SOLO USUARIOS
  const doc = new GoogleSpreadsheet('1on-MGeJ7_tF_F2_UkVxDB3XduKynRGJNyrm5iH-g8MY');
  
  await doc.useServiceAccountAuth(creds);
  await doc.loadInfo();
  const sheet = doc.sheetsByIndex[0];// or use doc.sheetsById[id] or doc.sheetsByTitle[title]
  console.log(`Title: ${sheet.title}, Rows: ${sheet.rowCount}`);
  await sheet.loadCells(); // no filter - will load ALL cells in the sheet
  //await sheet.loadCells('A1:G900'); // A1 range
  
  //const individual = sheet.getCell(2, 3);
  //console.log(individual.formattedValue)

    //const cellA1 = sheet.getCell(1, 0);
    //const cellC3 = sheet.getCellByA1('F3');

    //console.log("cellA1: ",cellA1.value)
    //console.log("cellC3: ",cellC3.formattedValue)
 
//Todos los clientes

datafinal = new Array;

for (let i=0; i < sheet.rowCount; i++)
    {
        for(let j=0; j<=6; j++)
        {
            let cellvalue = sheet.getCell(i, j);
            //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
            datafinal.push(cellvalue.formattedValue)
        }
    }
   




console.log(sheet.rowCount)
datanodecol1 = new Array; //columna 1
datanodecol2 = new Array; //columna 2
datanodecol3 = new Array; //columna 3
datanodecol4 = new Array; //columna 4
datanodecol5 = new Array; //columna 5
datanodecol6 = new Array; //columna 6

for (let i=0; i<sheet.rowCount; i++)
{
        const cellvalue = sheet.getCell(i, 0);
        //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
        datanodecol1.push(cellvalue.formattedValue)
}

for (let i=0; i<sheet.rowCount; i++)
{
        const cellvalue = sheet.getCell(i, 1);
        //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
        datanodecol2.push(cellvalue.formattedValue)
}

for (let i=0; i<sheet.rowCount; i++)
{
        const cellvalue = sheet.getCell(i, 2);
        //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
        datanodecol3.push(cellvalue.formattedValue)
}

for (let i=0; i<sheet.rowCount; i++)
{
        const cellvalue = sheet.getCell(i, 3);
        //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
        datanodecol4.push(cellvalue.formattedValue)
}

for (let i=0; i<sheet.rowCount; i++)
{
        const cellvalue = sheet.getCell(i, 4);
        //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
        datanodecol5.push(cellvalue.formattedValue)
}

for (let i=0; i<sheet.rowCount; i++)
{
        const cellvalue = sheet.getCell(i, 5);
        //console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
        datanodecol6.push(cellvalue.formattedValue)
}


//console.log(datanodecol1)
//console.log(datanodecol2)


datafromsheet = new Array; //Creamos un array para almacenar solo los Estados

for(var h=0; h < sheet.rowCount; h++)
 {
    datafromsheet[h] = new Array; //Crear 1 array por cada fila
 }


for(var k=0; k < sheet.rowCount; k++)
 {
    datafromsheet[k][0] = datanodecol1[k];
 }

 for(var k=0; k < sheet.rowCount; k++)
 {
    datafromsheet[k][1] = datanodecol2[k];
 }

 for(var k=0; k < sheet.rowCount; k++)
 {
    datafromsheet[k][2] = datanodecol3[k];
 }

 for(var k=0; k < sheet.rowCount; k++)
 {
    datafromsheet[k][3] = datanodecol4[k];
 }

 for(var k=0; k < sheet.rowCount; k++)
 {
    datafromsheet[k][4] = datanodecol5[k];
 }

 for(var k=0; k < sheet.rowCount; k++)
 {
    datafromsheet[k][5] = datanodecol6[k];
 }


console.log(datafromsheet)
//AHORAAAAAAAAAA SSIIIIIIIIIIIIIIIIIII

////////////////////////////////////////////////////////////////////////////////////////

/*
Workbook w = Workbook.getWorkbook(inputWorkbook);                      
       Sheet sheet = w.getSheet(0);
       nom = sheet.getRows();
       String[][] SheetArray = new String [2][nom];  
         // change the first number to the number of columns you want, 
         // or pick up the number same as you did with rows   
       Cell cell;           
        // GETS DATA FROM SHEET AND RUNS THROUGH WHOLE LOOP BELOW FOR EACH REFERENCE            
        for(int j =0;j<sheet.getRows();j++) // cycles through rows and loads into 2d array
         { // start 6
          cell = sheet.getCell(0, j); <- your column number here
          cellcont = cell.getContents();                        
          SheetArray[0][j] = cellcont;
           // repeat the above block for each column you want
           } // end 6

*/


///////////////////////////////////////////////////////////////////////////////////////////
    /*
    datanode = new Array;
    datatemp = new Array;

    for (let i=0; i<229; i++)
    {
        datatemp[i] = new Array;
        for(let j=0; j<=6; j++)
        {
            const cellvalue = sheet.getCell(i, j);
            console.log("VALOR: ","i: ",i,"j: ",j, " - ",cellvalue.formattedValue)
            datanode.push(cellvalue.formattedValue)
            datatemp[i] = new Array; //Creamos el array en cada vuelta para almacenar cada uno de los estados
                                                  //en un arrayas bidimensional
            datatemp[i][j] = datanode[i];
        }
    }
    console.log(datatemp)
    //console.log(datanode)
    console.log(datanode.length)
    //console.log(sheet.getCell(499, 0).formattedValue)
    */
    

    //Buscar un cliente
    /*
    var usuario = "ESECLEN";
    var nombre=" ";
    var contrato="";
    var inicio="";
    var termino="";
    var cuotadiaria="";

    for (let i=1; i<=229; i++ )
    {
        if(sheet.getCell(i, 5).formattedValue === usuario)
        {
            nombre = sheet.getCell(i, 0).formattedValue
            console.log("NOMBRE: ",nombre)
            
            contrato = sheet.getCell(i, 1).formattedValue
            console.log("CONTRATO: ",contrato)

            inicio = sheet.getCell(i, 2).formattedValue
            console.log("INICIO: ",inicio)

            termino = sheet.getCell(i, 3).formattedValue
            console.log("TERMINO: ",termino)

            cuotadiaria = sheet.getCell(i, 3).formattedValue
            console.log("CUOTA DIARIA: ",cuotadiaria)



        }
    }
    */
  
}
accessSpreadsheet() 


exports.usersControllers = (req, res) => {
    res.json({
        /*
        usersList: [
            "CLIENTES", 
            "FECHA DE CONTRATO", 
            "FECHA DE INICIO", 
            "FECHA DE TERMINO", 
            "CUOTA DIARA", 
            "USUARIO", 
            "CLAVE",
            "ALEX JUNIOR SOPLOPUCO ATO"
        ]*/
        //usersList: [datanode]
        //usersList: [datatemp]
        //usersList: [datafromsheet]
        usersList: [datafinal]

        
        
        
    })
}