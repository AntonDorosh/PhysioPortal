// добавляет источник при копировании текста
function PhysioPortalLink() {
  const istS = 'Источник:';
  const copyR = '© PhysioPortal - портал про фізичну реабілітацію після травм, операцій та захворювань';
  const body_element = document.getElementsByTagName('body')[0];
  const choose = window.getSelection();
  const myLink = document.location.href;
  const authorLink = "<br /><br />" + istS + ' ' + "<a href='"+myLink+"'>"+myLink+"</a><br />" + copyR;
  const copytext = choose + authorLink;
  const addDiv = document.createElement('div');
  addDiv.style.position='absolute';
  addDiv.style.left='-99999px';
  body_element.appendChild(addDiv);
  addDiv.innerHTML = copytext;
  choose.selectAllChildren(addDiv);
  window.setTimeout(function() {
      body_element.removeChild(addDiv);
  },0);
}
document.oncopy = PhysioPortalLink;