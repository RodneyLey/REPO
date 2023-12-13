document.addEventListener('DOMContentLoaded', function () {
    const getDataButton = document.getElementById('getDataButton');
    const provinceInput = document.getElementById('provinceInput');
    const resultContainer = document.getElementById('resultContainer');
    const getAllProvincesLink = document.getElementById('getAllProvincesLink');
  
    getDataButton.addEventListener('click', function () {
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
        alert('Please enter a province name.');
      }
    });
  
    getAllProvincesLink.addEventListener('click', function (event) {
      // Prevent the default link behavior
      event.preventDefault();
  
      // Call the API to get information for all provinces
      fetch('/provinces')
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
  