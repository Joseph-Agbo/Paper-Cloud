// // Select the elements
// const targetParagraph = document.getElementById('data');
// const sixDiv = document.querySelector('.six-div');

// // Function to check if the paragraph is in view
// function isInView(element) {
//   const rect = element.getBoundingClientRect();
//   return rect.top <= window.innerHeight && rect.bottom >= 0;
// }

// // Function to handle the scroll event
// function handleScroll() {
//   if (isInView(targetParagraph)) {
//     sixDiv.style.transform = 'translateY(-40px)'; // Move up
//   } else {
//     sixDiv.style.transform = 'none'; // Reset back down
//   }
// }

// // Add the scroll event listener
// window.addEventListener('scroll', handleScroll);