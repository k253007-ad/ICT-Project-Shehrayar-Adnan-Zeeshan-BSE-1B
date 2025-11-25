// Function to display a specific page section by its ID
function showPage(id) {
    // Select all section elements on the page
    document.querySelectorAll('section').forEach(sec => {
    // Remove the 'active' class from each section to hide them
    sec.classList.remove('active');
    });
    // Find the section with the specified ID and add the 'active' class to show it
    document.getElementById(id).classList.add('active');
}

// Bus stops data
let stops = [
  "Ala Din Park",
  "Askari – II & III",
  "Askari – IV",
  "Aziz Bhatti Park",
  "Bahadurabad",
  "Bait-Ul-Mukarram",
  "CMH",
  "Cant Station",
  "Cantt. Bazaar",
  "Colony Gate",
  "Dalmia",
  "Dhoraji",
  "Drig Road",
  "Esa Nagri",
  "FTC",
  "Falcon",
  "Forum Shopping Mall",
  "Gizri",
  "Guro Mandir",
  "Hassan Square",
  "Hilltop",
  "Hyper Star",
  "Iqra University",
  "Islamiaya College",
  "Jail Road",
  "Jamshed Road",
  "Johar More",
  "KPT Bridge",
  "Karsaz Pankha Stop",
  "Kashmir Road",
  "Kh. Bukhari",
  "Kh. Ittehad",
  "Kh. Mujahid",
  "Khalid Bin WaleedRoad",
  "Khudadad Colony",
  "Korangi Crossing",
  "Korangi No. 2",
  "Korangi No. 5",
  "Lal Flat",
  "Landhi 89",
  "Landhi No. 4",
  "Liaquat 10. No.",
  "M. Ali Society",
  "Malir 15",
  "Malir Cantt Askari-V",
  "Malir Cantt Phase-I",
  "Malir Halt",
  "Manzoor Colony",
  "Mashriq Centre",
  "Matka Stop",
  "Millennium",
  "Mumtaz Manzil",
  "NMC",
  "Nasir Jump",
  "PAF Chapter",
  "Perfume Chowk Johar",
  "Phase – IV",
  "Race Course",
  "Saba Avenue",
  "Sector - G",
  "Sector - J",
  "Sharfabad",
  "Sir Syed Road",
  "Soldier Bazar",
  "Stadium",
  "Stadium Road",
  "Star Gate",
  "Tariq Road",
  "Teen Talwar",
  "Tipu Sultan Road",
  "Urdu Science College",
  "Usman Memmoiral",
  "ZamZama",
  "Zubaida Hospital"
];

// Buses data with enhanced information
const buses = [
    {
        id: 1,
        name: "1",
        stops: ["Malir Cantt Phase-I", "Malir Cantt Askari-V"],
        filledSeats: 30,
        totalSeats: 50
    },
    {
        id: 2,
        name: "1-B",
        stops: ["Malir Cantt Phase-I", "Sector - G", "Sector - J", "Falcon", "CMH", "Cantt. Bazaar"],
        filledSeats: 35,
        totalSeats: 50
    },
    
    {
        id: 3,
        name: "11",
        stops: ["Soldier Bazar", "Guro Mandir", "Islamiaya College", "Stadium Road"],
        filledSeats: 42,
        totalSeats: 50
    },
    {
        id: 4,
        name: "12",
        stops: ["Jail Road", "Jamshed Road", "Khudadad Colony", "Kashmir Road", "Sir Syed Road", "Khalid Bin WaleedRoad", "Tariq Road", "Tipu Sultan Road"],
        filledSeats: 39,
        totalSeats: 50
    },
    {
        id: 5,
        name: "13",
        stops: ["Esa Nagri", "Mashriq Centre", "Stadium", "Dalmia", "Millennium", "Malir Halt", "Malir 15"],
        filledSeats: 44,
        totalSeats: 50
    },
    {
        id: 6,
        name: "14",
        stops: ["Sharfabad", "Bahadurabad", "Dhoraji", "M. Ali Society", "Karsaz Pankha Stop"],
        filledSeats: 28,
        totalSeats: 45
    },
    
    {
        id: 7,
        name: "15",
        stops: ["Forum Shopping Mall", "ZamZama", "Gizri", "Phase – IV"],
        filledSeats: 45,
        totalSeats: 50
    },
    {
        id: 8,
        name: "16",
        stops: ["Hyper Star", "Kh. Mujahid", "Saba Avenue", "Kh. Bukhari", "Kh. Ittehad"],
        filledSeats: 40,
        totalSeats: 50
    },
    {
        id: 9,
        name: "19",
        stops: ["Hassan Square", "Mumtaz Manzil", "Bait-Ul-Mukarram", "Urdu Science College", "Aziz Bhatti Park"],
        filledSeats: 42,
        totalSeats: 50
    },
    {
        id: 10,
        name: "31",
        stops: ["KPT Bridge", "Iqra University", "Manzoor Colony", "PAF Chapter"],
        filledSeats: 44,
        totalSeats: 50
    },
    {
        id: 11,
        name: "33",
        stops: ["Liaquat 10. No.", "Usman Memmoiral", "Dhoraji", "Zubaida Hospital", "M. Ali Society"],
        filledSeats: 45,
        totalSeats: 50
        
    },
    {
        id: 12,
        name: "34",
        stops: ["Korangi Crossing", "Nasir Jump", "Korangi No. 2", "Korangi No. 5", "Landhi No. 4", "Landhi 89"],
        filledSeats: 39,
        totalSeats: 50
    },
    {
        id: 13,
        name: "35",
        stops: ["Teen Talwar", "Race Course", "Cant Station", "Askari – II & III", "NMC", "FTC"],
        filledSeats: 37,
        totalSeats: 50
    },
    {
        id: 14,
        name: "39",
        stops: ["Perfume Chowk Johar", "Hilltop", "Johar More", "Drig Road", "Colony Gate", "Star Gate"],
        filledSeats: 35,
        totalSeats: 50
    },
    {
        id: 15,
        name: "40",
        stops: ["Matka Stop", "Ala Din Park", "Lal Flat", "Askari – IV"],
        filledSeats: 32,
        totalSeats: 50 
    },
];

// Helper function to determine which HTML page is currently loaded
function getCurrentPage() {
    // Get the full pathname from the browser's URL
    const path = window.location.pathname;
    // Extract just the filename by getting everything after the last forward slash
    const page = path.substring(path.lastIndexOf('/') + 1);
    // Return the page name, or default to 'search.html' if empty (root path)
    return page || 'search.html';
}

// ========== SEARCH BAR PAGE FUNCTIONALITY ==========
// Check if the current page is the search page or the root page
if (getCurrentPage() === 'search.html' || getCurrentPage() === '') {
    // Get reference to the HTML element that will display the list of stops
    const stopsList = document.getElementById("stopsList");
    // Only proceed if the element exists on the page
    if (stopsList) {
        // Convert the stops array into HTML list items and insert into the DOM
        stopsList.innerHTML = stops.map(stop => `<li>${stop}</li>`).join('');

        // Select all list item elements that were just created
        const allLi = document.querySelectorAll("#stopsList li");
        // Loop through each list item
        allLi.forEach(element => {
            // Add a click event handler to each list item
            element.onclick = () => {
                // Get the text content of the clicked stop and remove extra whitespace
                const stopName = element.textContent.trim();
                // Store the selected stop name in session storage for use on next page
                sessionStorage.setItem('selectedStop', stopName);
                // Get the base path of the current URL (everything before the filename)
                const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
                // Navigate to the stops detail page with the stop name as a URL parameter
                window.location.href = basePath + `stops.html?stop=${encodeURIComponent(stopName)}`;
            };
        });
    }

    // Function to filter the displayed list of stops based on search input
    window.filterList = function() {
        // Get reference to the search input field
        const input = document.getElementById('searchInput');
        // Get the search text and convert to lowercase for case-insensitive matching
        const filter = input.value.toLowerCase();
        // Get all list items in the stops list
        const li = document.querySelectorAll("#stopsList li");
        // Get the element that displays the count of visible stops
        const stopsCount = document.getElementById('stopsCount');
        
        // Initialize counter for visible stops
        let visibleCount = 0;
        
        // Loop through each list item
        li.forEach(item => {
            // Get the text content of the list item
            const textValue = item.textContent || item.innerText;
            // Check if the text contains the search filter
            const isVisible = textValue.toLowerCase().includes(filter);
            // Show or hide the item based on whether it matches the filter
            item.style.display = isVisible ? '' : 'none';
            // Increment counter if item is visible
            if (isVisible) visibleCount++;
        });

        // Update the count display if the element exists
        if (stopsCount) {
            // Show count with proper grammar (singular vs plural) and context (found vs available)
            stopsCount.textContent = `${visibleCount} stop${visibleCount !== 1 ? 's' : ''} ${filter ? 'found' : 'available'}`;
        }
    };
}

// ========== STOPS PAGE FUNCTIONALITY ==========
// Check if the current page is the stops detail page
if (getCurrentPage() === 'stops.html') {
    // Get reference to the element that displays the stop name
    const stopNameElement = document.getElementById('stopName');
    // Create URLSearchParams object to parse query string parameters
    const urlParams = new URLSearchParams(window.location.search);
    // Get the stop name from the URL parameter
    const stopFromUrl = urlParams.get('stop');
    // Get the stop name from session storage (backup method)
    const stopFromStorage = sessionStorage.getItem('selectedStop');
    // Use URL parameter if available, otherwise fall back to session storage
    const selectedStop = stopFromUrl || stopFromStorage;

    // Display the selected stop name on the page
    if (selectedStop && stopNameElement) {
        // Set the text content to the stop name
        stopNameElement.textContent = selectedStop;
        // Update the browser tab title to include the stop name
        document.title = selectedStop + ' - Stop Details';
    } else if (stopNameElement) {
        // If no stop was selected, show a message
        stopNameElement.textContent = 'No stop selected';
        // Make the text gray to indicate it's a placeholder message
        stopNameElement.style.color = '#999';
    }

    // Display all buses that service this stop
    const busesList = document.getElementById('busesList');
    // Only proceed if both the element exists and a stop was selected
    if (busesList && selectedStop) {
        // Filter the buses array to only include buses that stop at the selected stop
        const filteredBuses = buses.filter(bus => bus.stops.includes(selectedStop));
        
        // Check if any buses were found for this stop
        if (filteredBuses.length > 0) {
            // Generate HTML for each bus and insert into the page
            busesList.innerHTML = filteredBuses.map(bus => {

                // Initialize CSS class for the list item
                let itemClass = 'busInfo';
                

                // Return HTML template for this bus
                return `
                    <li class="${itemClass}" onclick="viewBusDetails(${bus.id})">
                        <div class="bus-name">Bus ${bus.name}</div>
                        <div class="bus-seats"> 
                            ${bus.filledSeats}/${bus.totalSeats} seats filled 
                        </div>
                    </li>
                `;
            }).join('');

            // Get reference to the total buses counter element
            const totalBusesEl = document.getElementById('totalBuses');
            
            // Update the total buses count if the element exists
            if (totalBusesEl) {
                // Set the count to the number of filtered buses
                totalBusesEl.textContent = filteredBuses.length;
            }
            
        } else {
            // If no buses found, display a message
            busesList.innerHTML = '<li style="text-align: center; color: #999;">No buses available for this stop</li>';
        }
    }

    // Function to navigate to the bus details page
    window.viewBusDetails = function(busId) {
        // Store the selected bus ID in session storage
        sessionStorage.setItem('selectedBusId', busId);
        // Store the current stop name for context on the next page
        sessionStorage.setItem('fromStop', selectedStop);
        // Get the base path of the current URL
        const basePath = window.location.pathname.substring(0, window.location.pathname.lastIndexOf('/') + 1);
        // Navigate to the bus details page with bus ID as parameter
        window.location.href = basePath + `busDetails.html?bus=${busId}`;
    };
}

// ========== BUS DETAILS PAGE FUNCTIONALITY ==========
// Check if the current page is the bus details page
if (getCurrentPage() === 'busDetails.html') {
    // Create URLSearchParams object to parse query parameters
    const urlParams = new URLSearchParams(window.location.search);
    // Get the bus ID from the URL parameter
    const busIdFromUrl = urlParams.get('bus');
    // Get the bus ID from session storage as backup
    const busIdFromStorage = sessionStorage.getItem('selectedBusId');
    // Convert the ID to an integer, using URL parameter or falling back to storage
    const busId = parseInt(busIdFromUrl || busIdFromStorage);
    // Get the originating stop name from session storage
    const fromStop = sessionStorage.getItem('fromStop');

    // Find the bus object in the buses array that matches the selected ID
    const selectedBus = buses.find(bus => bus.id === busId);

    // Only proceed if a bus was found
    if (selectedBus) {
        // Get reference to the bus name display element
        const busNameEl = document.getElementById('busName');
        // Update the bus name if the element exists
        if (busNameEl) {
            // Set the text to show the bus route number
            busNameEl.textContent = `Bus ${selectedBus.name}`;
            // Update the browser tab title
            document.title = `Bus ${selectedBus.name} - Route Details`;
        }

        // Get references to the statistics display elements
        const totalStopsEl = document.getElementById('totalStops');
        const filledSeatsEl = document.getElementById('filledSeats');
        const availableSeatsEl = document.getElementById('availableSeats');

        // Update total stops count if element exists
        if (totalStopsEl) totalStopsEl.textContent = selectedBus.stops.length;
        // Update filled seats count if element exists
        if (filledSeatsEl) filledSeatsEl.textContent = selectedBus.filledSeats;
        // Calculate and update available seats (total minus filled) if element exists
        if (availableSeatsEl) availableSeatsEl.textContent = selectedBus.totalSeats - selectedBus.filledSeats;
        
        // Create and display the route map showing all stops
        const routeMapEl = document.getElementById('routeMap');
        // Only proceed if the route map element exists
        if (routeMapEl) {
            // Generate HTML for each stop in the route
            const routeHTML = selectedBus.stops.map((stop, index) => {

                // Return HTML template for each stop showing its number and name
                return `
                    <div class="route-stop">
                        <div class="stop-details">
                            <span class="stop-number">Stop ${index + 1}</span>
                            <div class="stop-name-text">
                                ${stop}
                            </div>
                        </div>
                    </div>
                `;
            }).join('');

            // Insert the generated HTML into the route map container
            routeMapEl.innerHTML = routeHTML;
        }
    } else {
        // If bus was not found in the data
        const busNameEl = document.getElementById('busName');
        // Update bus name to show error if element exists
        if (busNameEl) {
            busNameEl.textContent = 'Bus not found';
        }
        
        // Get reference to the route map element
        const routeMapEl = document.getElementById('routeMap');
        // Display error message if element exists
        if (routeMapEl) {
            routeMapEl.innerHTML = '<p style="text-align: center; color: #999;">Bus information not available. Please select a bus from the stops page.</p>';
        }
    }
}

// Wait for the entire DOM to be fully loaded before running form validation code
document.addEventListener("DOMContentLoaded", function () {
  // Get reference to the form element
  const form = document.querySelector("form");
  // Add an event listener for form submission
  form.addEventListener("submit", function (e) {
    // Prevent the default form submission behavior (page refresh)
    e.preventDefault();
    // Get the value from the first name input field and remove whitespace
    const Fname = document.getElementById("Fname").value.trim();
    // Get the value from the NU ID input field and remove whitespace
    const NUID = document.getElementById("NU ID").value.trim();
    // Get the value from the email input field and remove whitespace
    const email = document.getElementById("email").value.trim();
    // Get the value from the contact number input field and remove whitespace
    const contact = document.getElementById("contact").value.trim();
    // Get the date of birth value
    const dob = document.getElementById("dob").value;
    // Get the password value
    const password = document.getElementById("password").value;
    // Get the confirm password value
    const confirmPassword = document.getElementById("confirmPassword").value;
    // Check if any required fields are empty
    if (!Fname || !NUID || !email || !contact || !dob) {
      // Show alert if required fields are missing
      alert("Please fill out all required fields.");
      // Exit the function without submitting
      return;
    }
    // Check if password and confirm password fields match
    if (password !== confirmPassword) {
      // Show alert if passwords don't match
      alert("Passwords do not match.");
      // Exit the function without submitting
      return;
    }
    // Show success message if all validations pass
    alert("Form submitted successfully!");
    // Submit the form
    form.submit();
  });
  // Get reference to the reset button
  const resetBtn = document.querySelector("button[type='reset']");
  // Add an event listener for the reset button click
  resetBtn.addEventListener("click", function (e) {
    // Show confirmation dialog asking if user wants to reset the form
    const confirmReset = confirm("Are you sure you want to reset the form?");
    // If user clicks "Cancel" in the confirmation dialog
    if (!confirmReset) {
      // Prevent the reset action from occurring
      e.preventDefault();
    }
  });
});