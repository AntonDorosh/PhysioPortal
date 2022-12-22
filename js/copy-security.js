// добавляет источник при копировании информации
function PhysioPortalLink() {
  var istS = 'Источник:';
  var copyR = '© PhysioPortal - портал про фізичну реабілітацію після травм, операцій та захворювань';
  var body_element = document.getElementsByTagName('body')[0];
  var choose = window.getSelection();
  var myLink = document.location.href;
  var authorLink = "<br /><br />" + istS + ' ' + "<a href='"+myLink+"'>"+myLink+"</a><br />" + copyR;
  var copytext = choose + authorLink;
  var addDiv = document.createElement('div');
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