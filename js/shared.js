// Function to load HTML content from a file
async function loadComponent(url, containerId) {
  try {
    const response = await fetch(url);
    const html = await response.text();
    const container = document.getElementById(containerId);
    
    if (!container) {
      console.error(`Container ${containerId} not found`);
      return;
    }

    // Special handling for footer to prevent inheriting document behavior
    if (containerId === 'footer-container') {
      container.outerHTML = html;  // Replace the entire container
    } else {
      container.innerHTML = html;
    }

    // If this is the header, initialize the mobile menu functionality
    if (containerId === 'header-container') {
      initializeMobileMenu();
    }
  } catch (error) {
    console.error(`Error loading component from ${url}:`, error);
  }
}

// Initialize mobile menu functionality
function initializeMobileMenu() {
  const mobileMenuButton = document.querySelector('.mobile-menu-button');
  const mobileMenu = document.querySelector('.mobile-menu');

  if (mobileMenuButton && mobileMenu) {
    mobileMenuButton.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });
  }
}

// Load header and footer when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('/components/layout/Header/index.html', 'header-container');
  loadComponent('/components/layout/Footer/index.html', 'footer-container');
}); 