var openedTimes = 0;
// window.re = /x/;
// re.toString = function() {
//   ++i;
//   console.clear();
//   return '\u6765\u627e\u5230\u6211';
// };
// console.log(re);

// if (!i) {
//   document.write('');
// }

function consoleTool(name, callback) {
  var tool = window[name] = /x/;
  tool.toString = callback;
  console.log(tool);
}

consoleTool('clear',function(){
  console.clear();
  return 'Console was cleared';
});