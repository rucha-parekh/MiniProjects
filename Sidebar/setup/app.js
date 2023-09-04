const toggleBtn = document.getElementById('toggleBtn');
const closeBtn = document.getElementById('closeBtn');
const sidebar = document.getElementById('sidebar');

toggleBtn.addEventListener('click', function() {
    // if (sidebar.classList.contains('show-sidebar')) {
    //     sidebar.classList.remove('show-sidebar');
    // }
    // else {
    //     sidebar.classList.add('show-sidebar');
    // }

    sidebar.classList.toggle('show-sidebar')
});


closeBtn.addEventListener('click', function(){
    sidebar.classList.remove('show-sidebar')
})