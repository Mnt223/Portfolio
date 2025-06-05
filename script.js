function showSection(id) {
  document.querySelectorAll('.popup').forEach(p => p.style.display = 'none');
  document.getElementById(id).style.display = 'block';
}

function closePopup(id) {
  document.getElementById(id).style.display = 'none';
}

particlesJS.load('particles-js', 'particles.json', function () {
  console.log('Particles loaded.');
});
