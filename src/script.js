//consts :
const showmore = document.getElementById('show-more');
const toggleBtn = document.getElementById('toggle-btn');
const hideThis = document.getElementById('hide-btn');
//show
toggleBtn.addEventListener('click', () => {
    showmore.classList.toggle('hidden');
    toggleBtn.classList.toggle('hidden');
    hideThis.classList.toggle('hidden');
});
//hide
hideThis.addEventListener('click', () => {
    showmore.classList.toggle('hidden');
    toggleBtn.classList.toggle('hidden');
    hideThis.classList.toggle('hidden');
});