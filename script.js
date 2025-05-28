const toggleDarkMode = () => {
  document.body.classList.toggle("dark-mode");
  document.querySelectorAll('button').forEach(button => {
    button.classList.toggle("dark-mode");
  });
  document.querySelector('header').classList.toggle("dark-mode");
  document.querySelector('footer').classList.toggle("dark-mode");
  document.querySelectorAll('.card').forEach(button => {
    button.classList.toggle("dark-mode");
  });
};