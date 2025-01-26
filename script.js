document.addEventListener("DOMContentLoaded", function() {
  // Toggle Menu
  function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
  }

  document.querySelector('.burger').addEventListener('click', toggleMenu);

  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      const navLinksContainer = document.querySelector('.nav-links');
      navLinksContainer.classList.remove('active');
    });
  });
// Skill Percentage Animation
const skills = document.querySelectorAll(".prog");

skills.forEach(skill => {
  const targetPercentage = parseInt(skill.dataset.percentage, 10);
  let currentPercentage = 0;

  const interval = setInterval(() => {
    if (currentPercentage >= targetPercentage) {
      clearInterval(interval); 
    } else {
      currentPercentage++;
      skill.textContent = `${currentPercentage}%`;
    }
  }, 90); 
});

  // Counter Animation
  let counterElement = document.getElementById("counter");
  let count = 0;

  function incrementCounter() {
    if (count <= 50) {
      counterElement.innerText = count + "+";
      count++;
    } else {
      clearInterval(counterInterval); 
    }
  }

  let counterInterval = setInterval(incrementCounter, 100);
});