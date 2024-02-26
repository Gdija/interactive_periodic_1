//create function to fetch and display element properties
function showElementProperties(atomicNumber) {
//API
const apiUrl = 'https://pubchem.ncbi.nlm.nih.gov/rest/pug/periodictable/JSON';

fetch(apiUrl)
.then(response => {
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
  return response.json();
})
.then(data => {
    const elementProperty = document.getElementById('Properties');
    if (data.Table && data.Table.Row && Array.isArray(data.Table.Row) && data.Table.Row.length > 0) {
      const elementData = data.Table.Row.find(row => parseInt(row.Cell[0]) === atomicNumber);
      if (elementData) {

        //const cell = data.Table.Row[0].Cell;
        const cell = elementData.Cell;
        const content = `
        <h2>Element Properties</h2>
        <h3>${cell[2]}</h3>
        <ul>
        <li>Standard State: <span>${cell[11]}</span></li>
      <li>Electron Configuration: <span>${cell[5]}</span></li>
      <li>Electronegativity: <span>${cell[6]}<span></li>
      <li>Ionisation Energy: <span>${cell[8]} eV</span</li>
      <li>Electron Affinity: <span>${cell[9]} eV</span></li>
      <li>Oxidation States: <span>${cell[10]}</span></li>
      <li>Melting Point: <span>${cell[12]} K</span></li>
      <li>Boiling Point: <span>${cell[13]} K</span></li>
      <li>Density: <span>${cell[14]}g/cm³</span></li>
      <li>Atomic Radius: <span>${cell[7]} pm</span></li>
      <li>Year Discovered: <span>${cell[16]}</span></li>
        </ul>
      
      `;
      elementProperty.innerHTML = content;
    } else {
      elementProperty.innerHTML = '<p> No Data</p>';
    }
    } else {
      elementProperty.innerHTML = '<p>No details available for this element.</p>';

    }     
    })
    .catch(error => {
      console.error('Fetch error:', error);
    });
    
}
const  urlSearchProperty = new URLSearchParams(window.location.search);
const atomicNumberProperty = urlSearchProperty.get('atomicNumber');

if(atomicNumberProperty){
  const atomicNumber = parseInt(atomicNumberProperty);
  showElementProperties(atomicNumber);
} else {
  console.error('Atomic number not specified in the URL.');
}


