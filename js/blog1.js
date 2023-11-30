// blog.js

document.addEventListener('DOMContentLoaded', function () {
  // Function to handle the intersection observer callback
  function handleIntersection(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add a class to the element when it becomes visible
        entry.target.classList.add('visible');
      } else {
        // Remove the class when the element is not visible
        entry.target.classList.remove('visible');
      }
    });
  }

  // Set up the Intersection Observer
  const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5, // Adjust the threshold as needed
  });

  // Target elements you want to make interactive on scroll
  const animatedElements = document.querySelectorAll('.animate-on-scroll');

  animatedElements.forEach(element => {
    // Start observing each element
    observer.observe(element);
  });
});
