// Function to display a promo code
function discount() {
    var promo = document.getElementById("special");
    promo.firstChild.nodeValue = "Offer Price: $89.99";
    promo.style.color = "#ff0000";
    promo.style.fontSize = "2em";
  }

  // Button element
const backToTopBtn = document.getElementById('backToTopBtn');

// Function to show or hide the button based on scroll position
function handleScroll() {
    if (window.pageYOffset > 300) { 
        backToTopBtn.style.display = 'block';
    } else {
        backToTopBtn.style.display = 'none';
    }
}

// Function to scroll to the top smoothly
function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

// Event listener for scroll
window.addEventListener('scroll', handleScroll);

// Event listener for button click
backToTopBtn.addEventListener('click', scrollToTop);
