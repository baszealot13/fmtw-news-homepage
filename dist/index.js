const sidebar = document.querySelector('#sidebar');

function toggleSidebar() {
  if (sidebar.classList.contains('hidden')) {
    sidebar.classList.remove('hidden')
  } else {
    sidebar.classList.add('hidden')
  }
};