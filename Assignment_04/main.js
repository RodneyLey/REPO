// Wait for the DOM to be fully loaded before executing the code
document.addEventListener('DOMContentLoaded', function () {
  // Get references to HTML elements
  const getDataButton = document.getElementById('getDataButton');
  const provinceInput = document.getElementById('provinceInput');
  const resultContainer = document.getElementById('resultContainer');
  const getAllProvincesLink = document.getElementById('getAllProvincesLink');

  // Event listener for the "Get Data" button
  getDataButton.addEventListener('click', function () {
      // Get the trimmed value of the province input
      const provinceName = provinceInput.value.trim();

      if (provinceName) {
          // Call the API to get information for a specific province
          fetch(`https://aqpotz9zm3.execute-api.ca-central-1.amazonaws.com/provinces/${provinceName}`)
              .then(response => response.json())
              .then(data => {
                  // Display the result in the result container
                  resultContainer.textContent = JSON.stringify(data, null, 2);
              })
              .catch(error => {
                  console.error('Error:', error);
                  resultContainer.textContent = 'An error occurred. Please try again.';
              });
      } else {
          // Show an alert if the province name is empty
          alert('Please enter a province name.');
      }
  });

  // Event listener for the "Get All Provinces" link
  getAllProvincesLink.addEventListener('click', function (event) {
      // Prevent the default link behavior
      event.preventDefault();

      // Call the API to get information for all provinces
      fetch('https://aqpotz9zm3.execute-api.ca-central-1.amazonaws.com/provinces')
          .then(response => response.json())
          .then(data => {
              // Display the result in the result container
              resultContainer.textContent = JSON.stringify(data, null, 2);
          })
          .catch(error => {
              console.error('Error:', error);
              resultContainer.textContent = 'An error occurred. Please try again.';
          });
  });
});
