// Your JS goes here

for (var i = 0; i < 63; i++) {
// var randomColor = Math.floor((Math.random() * 1000000) +1);
  if (i%2 === 0) {
    var el = document.createElement('div');
    document.body.appendChild(el);
    el.style.width = '11.1%';
    el.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    el.style.paddingBottom = '11.1%'
    el.style.float = 'left';
  } else {
    var el = document.createElement('div');
    document.body.appendChild(el);
    el.style.width = '11.1%';
    el.style.backgroundColor = '#'+(Math.random()*0xFFFFFF<<0).toString(16);
    el.style.paddingBottom = '11.1%';
    el.style.float = 'left';
  }
}
