// Выпадающий список боковой навигации
const dropdown = document.getElementsByClassName('dropdown__btn-sidebar');

for (let i = 0; i < dropdown.length; i++) {
  dropdown[i].addEventListener('click', function() {
    this.classList.toggle('active');
    const dropdownContent = this.nextElementSibling;
    if (dropdownContent.style.display === 'block') {
      dropdownContent.style.display = 'none';
    } else {
      dropdownContent.style.display = 'block';
    }
  })
}