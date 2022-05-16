


document.querySelector('#mobile-nav-button').addEventListener('click', () => {
  const sidebar = document.querySelector('.side-bar');


  if (sidebar.style.display === 'none') {
    sidebar.style.display = 'block';
  }
  else {
    sidebar.style.display = 'none';
  }

})