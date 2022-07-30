const array = ['Phượng', 'Nguyên', 'Phương', 'Sang'];

function randomAndDraw(){
  const number=Math.floor(Math.random()*array.length);
  document.getElementById('answer').textContent=array[number];
}