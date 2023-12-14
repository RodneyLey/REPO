document.addEventListener('DOMContentLoaded', function () {
  const getDataButton = document.getElementById('getDataButton');
  const provinceInput = document.getElementById('provinceInput');
  const resultContainer = document.getElementById('resultContainer');
  const getAllProvincesLink = document.getElementById('getAllProvincesLink');

  getDataButton.addEventListener('click', function () {
      const provinceName = provinceInput.value.trim();

      if (provinceName) {
          // Call the API to get information for a specific province
          fetch(`https://aqpotz9zm3.execute-api.ca-central-1.amazonaws.com/provinces/${encodeURIComponent(provinceName)}`)
              .then(response => response.json())
              .then(data => {
                  // Display the result in the result container
                  resultContainer.innerHTML = `
                      <h3>${data.name}</h3>
                      <p>Capital: ${data.capital}</p>
                      <p>Population: ${data.population}</p>
                      <p>Random Fact: ${data.randomFact}</p>
                      <img src="${data.image}" alt="${data.name}">
                  `;
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
      event.preventDefault();

      fetch('https://aqpotz9zm3.execute-api.ca-central-1.amazonaws.com/provinces')
          .then(response => response.json())
          .then(data => {
              resultContainer.innerHTML = `
                  <h2>All Provinces</h2>
                  <ul>
                      ${data.provinces.map(province => `<li>${province.name}</li>`).join('')}
                  </ul>
              `;
          })
          .catch(error => {
              console.error('Error:', error);
              resultContainer.textContent = 'An error occurred. Please try again.';
          });
          .catch(error => {
            console.error('Fetch Error:', error);
            resultContainer.textContent = `An error occurred: ${error.message}`;
        });
  });
});
