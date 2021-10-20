// Start Dark Mode JS
document.getElementById("toggle").addEventListener("click", function() {
document.getElementsByTagName('body')[0].classList.toggle("dark-theme");
document.getElementsByClassName('markdown-previewer-theme')[0].classList.toggle("dark-theme");
document.getElementsByTagName('textarea')[0].classList.toggle("dark-theme");
});
// End Dark Mode JS