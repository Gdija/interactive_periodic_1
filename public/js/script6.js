  
//function to display element page
function openElementProperties(atomicNumber, blockId) {
  window.open(`indexelement.html?atomicNumber=${atomicNumber}&blockId=${blockId}`, '_blank');
}


// Function to create table rows for specified atomic numbers
function createTableRows(elements, elementsList) {

  elements.forEach(row => {
    const cell = row.Cell;
    const roundedMass = parseFloat(cell[3]).toFixed(3);

    const table = document.createElement('table');
    const trAtomicNumber = document.createElement('tr');
    const trSymbol = document.createElement('tr');
    const trName = document.createElement('tr');
    const trMass = document.createElement('tr');

    const tdAtomicNumber = document.createElement('td');
    tdAtomicNumber.innerHTML = cell[0];
    tdAtomicNumber.style.textAlign = "start";
    tdAtomicNumber.style.fontWeight = "bold";
    // tdAtomicNumber.style.paddingRight= "80px";

    const tdSymbol = document.createElement('td');
    tdSymbol.innerHTML = cell[1];
    tdSymbol.style.fontFamily = "Protest Strike";
    tdSymbol.style.fontSize = "30px";
    // tdSymbol.style.justifyContent= "center";


    const tdName = document.createElement('td');
    tdName.style.fontFamily = "Roboto";
    tdName.style.fontSize = "13px";


    const tdMass = document.createElement('td');

    //tdSymbol.innerHTML = cell[1];
    tdName.innerHTML = cell[2];
    tdMass.innerHTML = roundedMass;

    trAtomicNumber.appendChild(tdAtomicNumber);
    trSymbol.appendChild(tdSymbol);
    trName.appendChild(tdName);
    trMass.appendChild(tdMass);

    table.appendChild(trAtomicNumber);
    table.appendChild(trSymbol);
    table.appendChild(trName);
    table.appendChild(trMass);

    const blockId = elementsList.id.replace('myTable', '');

    table.addEventListener('click', function () {
      openElementProperties(cell[0], blockId);
    });

    elementsList.appendChild(table);
  });
}

// API
const apiUrl = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON';

// Specify atomic numbers for each block
const specifiedAtomicNumbers1 = [1, 3, 11, 19, 37, 55, 87];
const specifiedAtomicNumbers2 = [4, 12, 20, 38, 56, 88];
const specifiedAtomicNumbers3 = [21, 39];
const specifiedAtomicNumbers4 = [22, 40, 72, 104];
const specifiedAtomicNumbers5 = [23, 41, 73, 105];
const specifiedAtomicNumbers6 = [24, 42, 74, 106];
const specifiedAtomicNumbers7 = [25, 43, 75, 107];
const specifiedAtomicNumbers8 = [26, 44, 76, 108];
const specifiedAtomicNumbers9 = [27, 45, 77, 109];
const specifiedAtomicNumbers10 = [28, 46, 78, 110];
const specifiedAtomicNumbers11 = [29, 47, 79, 111];
const specifiedAtomicNumbers12 = [30, 48, 80, 112];
const specifiedAtomicNumbers13 = [5, 13, 31, 49, 81, 113];
const specifiedAtomicNumbers14 = [6, 14, 32, 50, 82, 114];
const specifiedAtomicNumbers15 = [7, 15, 33, 51, 83, 115];
const specifiedAtomicNumbers16 = [8, 16, 34, 52, 84, 116];
const specifiedAtomicNumbers17 = [9, 17, 35, 53, 85, 117];
const specifiedAtomicNumbers18 = [2, 10, 18, 36, 54, 86, 118];
const specifiedAtomicNumbers19 = [57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71];
const specifiedAtomicNumbers20 = [89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103];



// Add more specifiedAtomicNumbers arrays for other blocks if needed

fetch(apiUrl)
  .then(response => {
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    return response.json();
  })
  .then(data => {
    // Container elements for each block
    const container1 = document.getElementById('myTable1');
    const container2 = document.getElementById('myTable2');
    const container3 = document.getElementById('myTable3');
    const container4 = document.getElementById('myTable4');
    const container5 = document.getElementById('myTable5');
    const container6 = document.getElementById('myTable6');
    const container7 = document.getElementById('myTable7');
    const container8 = document.getElementById('myTable8');
    const container9 = document.getElementById('myTable9');
    const container10 = document.getElementById('myTable10');
    const container11 = document.getElementById('myTable11');
    const container12 = document.getElementById('myTable12');
    const container13 = document.getElementById('myTable13');
    const container14 = document.getElementById('myTable14');
    const container15 = document.getElementById('myTable15');
    const container16 = document.getElementById('myTable16');
    const container17 = document.getElementById('myTable17');
    const container18 = document.getElementById('myTable18');
    const container19 = document.getElementById('myTable19');
    const container20 = document.getElementById('myTable20');


    // Add more container elements as needed

    // Check if data.Table.Row is defined and it is an array
    if (data.Table && data.Table.Row && Array.isArray(data.Table.Row)) {
      // First block of the periodic table (Hydrogen to Francium)
      const filteredElements1 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers1.includes(atomicNumber);
      });

      createTableRows(filteredElements1, container1);

      // Second block of the periodic table (Beryllium to Radium)
      const filteredElements2 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers2.includes(atomicNumber);
      });

      createTableRows(filteredElements2, container2);

      // third block
      const filteredElements3 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers3.includes(atomicNumber);
      });

      createTableRows(filteredElements3, container3);

      //fourth block
      const filteredElements4 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers4.includes(atomicNumber);
      });

      createTableRows(filteredElements4, container4);

      //fifth block
      const filteredElements5 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers5.includes(atomicNumber);
      });

      createTableRows(filteredElements5, container5);

      //sixth bolck

      const filteredElements6 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers6.includes(atomicNumber);
      });

      createTableRows(filteredElements6, container6);

      //seventh block

      const filteredElements7 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers7.includes(atomicNumber);
      });

      createTableRows(filteredElements7, container7)

      //eigth block
      const filteredElements8 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers8.includes(atomicNumber);
      });

      createTableRows(filteredElements8, container8);

      //ninth block
      const filteredElements9 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers9.includes(atomicNumber);
      });

      createTableRows(filteredElements9, container9);

      //tenth block
      const filteredElements10 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers10.includes(atomicNumber);
      });

      createTableRows(filteredElements10, container10);

      //eleventh block
      const filteredElements11 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers11.includes(atomicNumber);
      });

      createTableRows(filteredElements11, container11);

      //twelfth block
      const filteredElements12 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers12.includes(atomicNumber);
      });

      createTableRows(filteredElements12, container12);

      //thirteenth block
      const filteredElements13 = data.Table.Row.filter(row => {
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers13.includes(atomicNumber);
      });

      createTableRows(filteredElements13, container13);

       //fourteenth block
       const filteredElements14 = data.Table.Row.filter(row => {
         const atomicNumber = parseInt(row.Cell[0]);
         return specifiedAtomicNumbers14.includes(atomicNumber);
       });

       createTableRows(filteredElements14, container14);

       //fifteenth block
       const filteredElements15 = data.Table.Row.filter(row => {
         const atomicNumber = parseInt(row.Cell[0]);
         return specifiedAtomicNumbers15.includes(atomicNumber);
       });

       createTableRows(filteredElements15, container15);

       //sixteenth block
       const filteredElements16 = data.Table.Row.filter(row => {
         const atomicNumber = parseInt(row.Cell[0]);
         return specifiedAtomicNumbers16.includes(atomicNumber);
       });

       createTableRows(filteredElements16, container16);
      
       //seventeenth block
       const filteredElements17 = data.Table.Row.filter(row => {
         const atomicNumber = parseInt(row.Cell[0]);
         return specifiedAtomicNumbers17.includes(atomicNumber);
       });

       createTableRows(filteredElements17, container17);
      
       //eighteenth block
       const filteredElements18 = data.Table.Row.filter(row => {
         const atomicNumber = parseInt(row.Cell[0]);
         return specifiedAtomicNumbers18.includes(atomicNumber);
       });

       createTableRows(filteredElements18, container18);

       //
       const filteredElements19 = data.Table.Row.filter(row =>{
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers19.includes(atomicNumber);
       });

       createTableRows(filteredElements19, container19);

       //
       const filteredElements20 = data.Table.Row.filter(row =>{
        const atomicNumber = parseInt(row.Cell[0]);
        return specifiedAtomicNumbers20.includes(atomicNumber);
       });

       createTableRows(filteredElements20, container20);


       // Add more blocks as needed
   } else {
       alert('Invalid data structure from the API.');
     }
   })
   .catch(error => {
     console.error('Fetch error:', error);
   });
