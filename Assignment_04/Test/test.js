document.getElementById('getDataButton').addEventListener('click', async () => {
  try {
    const provinceName = document.getElementById('provinceInput').value.trim();
    if (!provinceName) {
      alert('Please enter a province name.');
      return;
    }

    const fetchUrl = `https://aqpotz9zm3.execute-api.ca-central-1.amazonaws.com/provinces/${encodeURIComponent(provinceName)}`;

    const response = await fetch(fetchUrl);
    const data = await response.json();

    // Display the data in the result container
    document.getElementById('resultContainer').innerHTML = JSON.stringify(data, null, 2);
  } catch (error) {
    console.error('Error:', error);
    // Display an error message with details
    document.getElementById('resultContainer').innerHTML = 'Error fetching data: ' + error.message;
  }
});