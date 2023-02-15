function changeImg(){
  let v = parseInt(document.getElementById("btn").value);
  v = v + 1;
  if(v>8){
    v = v%8;
  }
  document.getElementById("btn").value = v;
  let f1 = "images/sil";
  let f2 = '' + v;
  let f3 = ".jpg";
  let newSrc = f1.concat(f2.concat(f3));
  document.getElementById("img").src = newSrc;
}
