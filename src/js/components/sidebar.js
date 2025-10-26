// Sidebar mobile menu
const sidebar = document.getElementById('sidebar');
const sidebarToggle = document.getElementById('sidebarToggle');
const sidebarClose = document.getElementById('sidebarClose');

sidebarToggle.addEventListener('click', () => {
    sidebar.classList.add('open');
});

sidebarClose.addEventListener('click', () => {
    sidebar.classList.remove('open');
});
