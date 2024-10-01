        // Import the functions you need from the SDKs you need
        import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
        import { getDatabase, ref, get } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-database.js";

        // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyCEc0UNL5rNGGSC9gvFkp08tLauRZ1bB5A",
    authDomain: "kami-ec8a4.firebaseapp.com",
    projectId: "kami-ec8a4",
    storageBucket: "kami-ec8a4.appspot.com",
    messagingSenderId: "659804249589",
    appId: "1:659804249589:web:f7f5c0e14a10f2c93894bc"
  };

        // Initialize Firebase
        const app = initializeApp(firebaseConfig);
        const database = getDatabase(app);

// Create a table row with a checkbox and label
function createCheckboxTableRow(key, value) {
    const row = document.createElement('tr');
    
    const cell = document.createElement('td');
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.id = key;
    checkbox.name = key;
    
    const label = document.createElement('label');
    label.htmlFor = checkbox.id;
    label.textContent = `${key}: ${value}`;
    
    cell.appendChild(checkbox);
    cell.appendChild(label);
    row.appendChild(cell);
    
    return row;
}

// Recursive function to create a table for deeply nested data
function createCheckboxTable(data, table) {
    const tbody = document.createElement('tbody');

    Object.keys(data).forEach(key => {
        const value = data[key];
        const row = document.createElement('tr');

        if (typeof value === 'object' && !Array.isArray(value)) {
            // Create a row for the parent key
            const cell = document.createElement('td');
            cell.colSpan = 2;
            cell.textContent = key;
            row.appendChild(cell);
            tbody.appendChild(row);

            // Create a nested table for the child data
            const nestedTable = document.createElement('table');
            nestedTable.className = 'checkbox-table';
            const nestedTbody = document.createElement('tbody');
            nestedTable.appendChild(nestedTbody);
            tbody.appendChild(nestedTable);

            createCheckboxTable(value, nestedTable);
        } else {
            // Create a row for the actual checkbox and label
            tbody.appendChild(createCheckboxTableRow(key, value));
        }
    });

    table.appendChild(tbody);
}

// Function to display data as a hierarchical table
function displayAreaData(data) {
    const container = document.getElementById('checkbox-container');
    container.innerHTML = '';  // Clear the container before adding new data

    Object.keys(data).forEach(areaName => {
        const areaData = data[areaName];
        
        const areaContainer = document.createElement('div');
        areaContainer.className = 'area-container';

        const areaTitle = document.createElement('h2');
        areaTitle.textContent = areaName;
        areaContainer.appendChild(areaTitle);

        // Create a table for the area data
        const table = document.createElement('table');
        table.className = 'checkbox-table';

        const thead = document.createElement('thead');
        const headerRow = document.createElement('tr');
        const headerTitle = document.createElement('th');
        headerRow.appendChild(headerTitle);
        thead.appendChild(headerRow);
        table.appendChild(thead);

        createCheckboxTable(areaData, table);

        areaContainer.appendChild(table);
        container.appendChild(areaContainer);
    });
}

// Function to fetch data from Firebase
async function fetchDataFromFirebase() {
    try {
        const dbRef = ref(database, '/');
        const snapshot = await get(dbRef);
        if (snapshot.exists()) {
            return snapshot.val();
        } else {
            console.log("No data available");
            return null;
        }
    } catch (error) {
        console.error('Error loading data from Firebase:', error);
        return null;
    }
}

// Function to search for the area and display the results
async function searchAndDisplayArea() {
    const searchQuery = document.getElementById('search').value.trim().toLowerCase();
    if (!searchQuery) {
        alert('Please enter an area name to search.');
        return;
    }

    const data = await fetchDataFromFirebase();
    if (data) {
        // Check for an exact match of the area name
        const matchingAreas = Object.keys(data).filter(areaName => areaName.toLowerCase() === searchQuery);
        if (matchingAreas.length > 0) {
            const areaName = matchingAreas[0]; // Assuming you want the first match
            displayAreaData({ [areaName]: data[areaName] });
            alert(`Area found: ${areaName}`);
        } else {
            alert('No matching area found.');
            document.getElementById('fetch-button').style.display = '';  // Clear container if no match
        }
    }
}

// Add event listener to the button with id "fetch-button" to trigger search
document.getElementById('fetch-button').addEventListener('click', searchAndDisplayArea);

// Adjust the height of the textarea
function adjustHeight(textarea) {
    textarea.style.height = 'auto';
    textarea.style.height = (textarea.scrollHeight) + 'px';
}