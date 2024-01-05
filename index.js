// Sample data array (replace it with actual data structure)
let data = [];

function submitData() {
  const employeeName = document.getElementById('employeeName').value;
  // Retrieve other form data in a similar way

  // Add data to the array
  data.push({
    employeeName,
    // Add other data properties here
  });

  // Clear the form
  document.getElementById('dataForm').reset();
}

function downloadCSV() {
  const csvContent = 'data:text/csv;charset=utf-8,';

  // Add CSV header
  const header = Object.keys(data[0]).join(',') + '\n';
  csvContent += header;

  // Add CSV rows
  data.forEach((row) => {
    const values = Object.values(row).join(',') + '\n';
    csvContent += values;
  });

  // Create a data URI and initiate download
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement('a');
  link.setAttribute('href', encodedUri);
  link.setAttribute('download', 'placement_data.csv');
  document.body.appendChild(link);
  link.click();
}
