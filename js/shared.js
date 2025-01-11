// Function to load HTML content from a file
async function loadComponent(url, containerId) {
  try {
    // Add timestamp to prevent caching
    const nocacheUrl = `${url}?v=${new Date().getTime()}`;
    const response = await fetch(nocacheUrl, {
      headers: {
        'Cache-Control': 'no-cache',
        'Pragma': 'no-cache'
      }
    });
    const html = await response.text();
    const container = document.getElementById(containerId);
    
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
  loadComponent('/components/header.html', 'header-container');
  loadComponent('/components/footer.html', 'footer-container');
}); 