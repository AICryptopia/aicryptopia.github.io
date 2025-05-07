// Import Button component
import '/components/common/Button/button.js';

// Register Service Worker
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/js/service-worker.js')
      .then(registration => {
        console.log('ServiceWorker registration successful');
      })
      .catch(err => {
        console.error('ServiceWorker registration failed:', err);
      });
  });
}

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

    // Initialize mobile menu after header is loaded
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

  if (!mobileMenuButton || !mobileMenu) {
    console.error('Mobile menu elements not found');
    return;
  }

  // Remove any existing event listeners
  mobileMenuButton.replaceWith(mobileMenuButton.cloneNode(true));
  const newMobileMenuButton = document.querySelector('.mobile-menu-button');

  // Add click event listener
  newMobileMenuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
  });

  // Close menu when clicking outside
  document.addEventListener('click', (event) => {
    if (!mobileMenu.contains(event.target) && !newMobileMenuButton.contains(event.target) && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });

  // Close menu when window is resized to desktop view
  window.addEventListener('resize', () => {
    if (window.innerWidth >= 768 && !mobileMenu.classList.contains('hidden')) {
      mobileMenu.classList.add('hidden');
    }
  });
}

// Load header and footer when the page loads
document.addEventListener('DOMContentLoaded', () => {
  loadComponent('/components/layout/Header/index.html', 'header-container');
  loadComponent('/components/layout/Footer/index.html', 'footer-container');
}); 