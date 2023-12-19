

export const handler = async () => {
    try {
        const jsonContent =  [
      {
        "name": "Alberta",
        "abbreviation": "AB",
        "capital": "Edmonton",
        "population": 4421876,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/Alberta.jpg?raw=true",
        "randomFact": "Alberta is home to the famous Banff National Park, one of the oldest national parks in the world."
      },
      {
        "name": "British Columbia",
        "abbreviation": "BC",
        "capital": "Victoria",
        "population": 5110917,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/British%20Colombia.jpg",
        "randomFact": "British Columbia has the mildest climate in Canada and is known for its stunning coastline and mountains."
      },
      {
        "name": "Manitoba",
        "abbreviation": "MB",
        "capital": "Winnipeg",
        "population": 1377517,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/Manitoba.jpg",
        "randomFact": "Manitoba is home to over 100,000 lakes, including the famous Lake Winnipeg, one of the largest freshwater lakes in the world."
      },
      {
        "name": "New Brunswick",
        "abbreviation": "NB",
        "capital": "Fredericton",
        "population": 781476,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/New%20Brunswick.jpg",
        "randomFact": "New Brunswick is known for the highest tides in the world at the Bay of Fundy."
      },
      {
        "name": "Newfoundland and Labrador",
        "abbreviation": "NL",
        "capital": "St. John's",
        "population": 521365,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/NewFoundland.jfif",
        "randomFact": "Newfoundland and Labrador is the only province in Canada with its own time zone."
      },
      {
        "name": "Nova Scotia",
        "abbreviation": "NS",
        "capital": "Halifax",
        "population": 979351,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/novascotia.jpg",
        "randomFact": "Nova Scotia is home to the world's highest tides in the Bay of Fundy."
      },
      {
        "name": "Ontario",
        "abbreviation": "ON",
        "capital": "Toronto",
        "population": 14711827,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/Ontario.jpg",
        "randomFact": "Ontario is home to Niagara Falls, one of the most famous natural wonders in the world."
      },
      {
        "name": "Prince Edward Island",
        "abbreviation": "PE",
        "capital": "Charlottetown",
        "population": 159625,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/Prince_Edward_Island.jpg",
        "randomFact": "Prince Edward Island is known for its red sandy beaches and the fictional setting of Anne of Green Gables."
      },
      {
        "name": "Quebec",
        "abbreviation": "QC",
        "capital": "Quebec City",
        "population": 8574492,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/qubec.jfif",
        "randomFact": "Quebec City is the only walled city in North America north of Mexico, and it's a UNESCO World Heritage Site."
      },
      {
        "name": "Saskatchewan",
        "abbreviation": "SK",
        "capital": "Regina",
        "population": 1181666,
        "image": "https://github.com/RodneyLey/REPO/blob/main/Assignment_04/Saskatchewan.jpg",
        "randomFact": "Saskatchewan is known as the 'Land of Living Skies' due to its vast prairies and stunning sunsets."
      }
    ]


        return {
            statusCode: 200,
            body: JSON.stringify(jsonContent),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };
    } catch (error) {
        console.error('Error:', error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Internal Server Error' }),
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
            },
        };
    }
};
