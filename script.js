
function setSection(id) {
  document.querySelectorAll('.section').forEach(section => {
    section.classList.remove('active');
  });
  const target = document.getElementById(id);
  if (target) target.classList.add('active');

  document.querySelectorAll('.sidebar-nav-item').forEach(item => {
    item.classList.remove('active');
  });
  const navItems = Array.from(document.querySelectorAll('.sidebar-nav-item'));
  const match = navItems.find(item => item.getAttribute('onclick') === `setSection('${id}')`);
  if (match) match.classList.add('active');
}
