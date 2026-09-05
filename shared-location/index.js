// Constants
const API_BASE_URL = 'https://api.us1.kt1.io/fleet/staging/v2/entities/assets/shared/location';
const UPDATE_INTERVAL = 30000; // 30 seconds

// Map variables
let map;
let marker;
let assetInfo = {};
let currentToken = null;
let updateIntervalId = null;

// Get token from URL
function getTokenFromUrl() {
  // First try to get token from hash (for the original format: #/shared/location/TOKEN)
  const hash = window.location.hash;
  if (hash && hash.startsWith('#/shared/location/')) {
    return hash.replace('#/shared/location/', '');
  }
  
  // If not in hash, try to get from URL path (for direct access: /shared-location/index.html?token=TOKEN)
  const urlParams = new URLSearchParams(window.location.search);
  const token = urlParams.get('token');
  if (token) {
    return token;
  }
  
  // If token not in hash or query params, try to extract from pathname
  // For format like: /shared-location/TOKEN/index.html
  const pathParts = window.location.pathname.split('/');
  const sharedLocationIndex = pathParts.findIndex(part => part === 'shared-location');
  
  if (sharedLocationIndex >= 0 && sharedLocationIndex < pathParts.length - 1) {
    const nextPart = pathParts[sharedLocationIndex + 1];
    if (nextPart && nextPart !== 'index.html') {
      return nextPart;
    }
  }
  
  return null;
}

// Show token entry form
function showTokenForm() {
  document.getElementById('result').innerHTML = '<p class="error">No location token provided</p>';
  document.getElementById('token-form-container').style.display = 'block';
  
  // Add event listener to the submit button
  document.getElementById('submit-token').addEventListener('click', handleManualTokenSubmit);
}

// Handle manual token submission
function handleManualTokenSubmit() {
  const tokenInput = document.getElementById('token-input');
  const token = tokenInput.value.trim();
  
  if (!token) {
    alert('Please enter a valid token');
    return;
  }
  
  // Update the current token and start tracking
  currentToken = token;
  
  // Update URL with the token (for sharing/bookmarking)
  window.history.pushState(
    {}, 
    'Shared Location', 
    `${window.location.pathname}#/shared/location/${token}`
  );
  
  // Hide the form and start tracking
  document.getElementById('token-form-container').style.display = 'none';
  document.getElementById('result').innerHTML = 'Loading asset location...';
  
  // Fetch location data with the new token
  updateLocation(token);
}

// Fetch asset location data
async function fetchAssetLocation(token) {
  try {
    const response = await fetch(`${API_BASE_URL}/${token}`, {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'x-access-token': `shared-${token}`
      }
    });
    
    if (!response.ok) {
      throw new Error(`Failed to fetch location data: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error fetching asset location:', error);
    document.getElementById('result').innerHTML = `<p class="error">Error: ${error.message}</p>`;
    return null;
  }
}

// Initialize the map
function initMap(lat, lon) {
  // Create map centered on the asset location
  map = L.map('map', {
    zoomControl: false // Disable default zoom control
  }).setView([lat, lon], 15);
  
  // Add OpenStreetMap tile layer
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }).addTo(map);
  
  // Add marker for the asset
  marker = L.marker([lat, lon]).addTo(map);
  
  // Add zoom control to the right
  L.control.zoom({
    position: 'topright'
  }).addTo(map);
  
  // Make sure the map takes up the entire container
  setTimeout(() => {
    map.invalidateSize();
  }, 100);
}

// Update asset information on the page
function updateAssetInfo(data) {
  const { name, date, speed, address } = data;
  
  const formattedDate = new Date(date).toLocaleString();
  const formattedSpeed = `${speed} km/h`;
  
  // Clear previous content
  const assetDetailsEl = document.getElementById('asset-details');
  assetDetailsEl.innerHTML = '';
  
  // Create elements safely using DOM methods
  const assetInfoDiv = document.createElement('div');
  assetInfoDiv.className = 'asset-info';
  
  // Asset name
  const nameHeading = document.createElement('h2');
  nameHeading.textContent = name;
  assetInfoDiv.appendChild(nameHeading);
  
  // Last updated info
  const dateRow = document.createElement('div');
  dateRow.className = 'info-row';
  const dateLabel = document.createElement('span');
  dateLabel.textContent = 'Last updated:';
  dateRow.appendChild(dateLabel);
  dateRow.appendChild(document.createTextNode(' ' + formattedDate));
  assetInfoDiv.appendChild(dateRow);
  
  // Speed info
  const speedRow = document.createElement('div');
  speedRow.className = 'info-row';
  const speedLabel = document.createElement('span');
  speedLabel.textContent = 'Speed:';
  speedRow.appendChild(speedLabel);
  speedRow.appendChild(document.createTextNode(' ' + formattedSpeed));
  assetInfoDiv.appendChild(speedRow);
  
  // Location info
  const addressRow = document.createElement('div');
  addressRow.className = 'info-row';
  const addressLabel = document.createElement('span');
  addressLabel.textContent = 'Location:';
  addressRow.appendChild(addressLabel);
  addressRow.appendChild(document.createTextNode(' ' + address));
  assetInfoDiv.appendChild(addressRow);
  
  // Add to the DOM
  assetDetailsEl.appendChild(assetInfoDiv);
}

// Update the map with new location data
function updateMap(lat, lon) {
  if (!map) {
    initMap(lat, lon);
  } else {
    marker.setLatLng([lat, lon]);
    map.setView([lat, lon], map.getZoom());
  }
}

// Main function to update location
async function updateLocation(tokenOverride = null) {
  // Use provided token override or get from URL
  const token = tokenOverride || currentToken || getTokenFromUrl();
  
  if (!token) {
    showTokenForm();
    return;
  }
  
  // Store current token for future updates
  currentToken = token;
  
  const data = await fetchAssetLocation(token);
  
  if (data) {
    const { lat, lon, name, date, speed, address } = data;
    assetInfo = data;
    
    // Update the UI
    updateMap(lat, lon);
    updateAssetInfo(data);
    
    // Display the map container and asset details
    document.getElementById('result').style.display = 'none';
    document.getElementById('token-form-container').style.display = 'none';
    document.getElementById('map-container').style.display = 'block';
  }
}

// Initialize the application
function init() {
  // Create UI containers
  const resultDiv = document.getElementById('result');
  resultDiv.innerHTML = 'Loading asset location...';
  
  // Create map container and asset details container
  const mapContainer = document.createElement('div');
  mapContainer.id = 'map-container';
  mapContainer.style.display = 'none';
  
  const mapDiv = document.createElement('div');
  mapDiv.id = 'map';
  
  const assetDetails = document.createElement('div');
  assetDetails.id = 'asset-details';
  
  mapContainer.appendChild(mapDiv);
  document.body.appendChild(mapContainer);
  document.body.appendChild(assetDetails);
  
  // Start updating location
  updateLocation();
  
  // Set up periodic updates
  if (updateIntervalId) {
    clearInterval(updateIntervalId);
  }
  updateIntervalId = setInterval(() => updateLocation(), UPDATE_INTERVAL);
  
  // Handle window resize to make sure map uses all available space
  window.addEventListener('resize', () => {
    if (map) {
      map.invalidateSize();
    }
  });
  
  // Clear interval when page is unloaded to prevent memory leaks
  window.addEventListener('beforeunload', () => {
    if (updateIntervalId) {
      clearInterval(updateIntervalId);
      updateIntervalId = null;
    }
  });
}

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', init); 