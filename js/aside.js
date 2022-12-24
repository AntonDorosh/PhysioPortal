// // // Выпадающий список боковой навигации
// const dropdown = document.getElementsByClassName('dropdown__btn-sidebar');

// for (let i = 0; i < dropdown.length; i++) {
//   dropdown[i].addEventListener('click', function() {
//     this.classList.toggle('active');
//     const dropdownContent = this.nextElementSibling;
//     if (dropdownContent.style.display === 'block') {
//       dropdownContent.style.display = 'none';
//     } else {
//       dropdownContent.style.display = 'block';
//     }
//   })
// }

const acc = document.getElementsByClassName("dropdown__btn-sidebar");
let i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function() {
    this.classList.toggle("active");
    const panel = this.nextElementSibling;
    if (panel.style.maxHeight){
      panel.style.maxHeight = null;
    } else {
      panel.style.maxHeight = panel.scrollHeight + "px";
    }
  });
}




