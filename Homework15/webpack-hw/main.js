(()=>{var e,r;console.log(`Функція №7: ${r="250UaH",(r=r.toString().toUpperCase()).includes("$")?(r=25*r.replace("$",""))+"UAH":r.includes("UAH")?(r=r.replace("UAH","")/25)+"$":Error("Введіть число із символом $, або UAH")}.\nФункція №9: ${function(e=8){let r="",n=0;for(let t=0;t<e;t++)n=Math.round(9*Math.random()+0),r+=n;return r}(4)}.\nФункція №10: ${"a","blablabla","blablabla".split("a").join("")}.\nФункція №11: ${function(e){const r=(e=e.replace(/ /g,"").toLowerCase()).replace(/ /g,"").split("").reverse().join("");return e===r}("Я несу гусеня")}.\nФункція №:6 ${function(e,r){let n=0;r=r.toLowerCase();for(let e=0;e<r.length;e++)"а"===r[e]&&n++;return n}(0,"Асталавіста")}.\nФункція №:1 ${e=14239,e=e.toString().split(""),Number(Math.max(...e))}.`)})();