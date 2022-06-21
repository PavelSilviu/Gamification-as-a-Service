const btn = document.getElementById('btn1');
const form1 = document.getElementById('form1');
const form2 = document.getElementById('form2');
form1.style.display='none';
form2.style.display='none';
btn.addEventListener('click', () => {
  if (form1.style.display === 'none') {
    // 👇️ this SHOWS the form
    if (form2.style.display === 'block')
    {
      form2.style.display='none';
      form2.reset();
    }
    form1.style.display = 'block';
  } else {
    // 👇️ this HIDES the form
    form1.style.display = 'none';
  }
});


const btn2 = document.getElementById('btn2');
btn2.addEventListener('click', () => {
  if (form2.style.display === 'none') {
    // 👇️ this SHOWS the form
    if (form1.style.display === 'block')
    {
      form1.style.display='none';
      form1.reset(); 
    }
    form2.style.display='block';
  } else {
    // 👇️ this HIDES the form
    form2.style.display = 'none';
  }
});

const addbtn1=document.getElementById('addbtn1');
var count1=1;
addbtn1.addEventListener('click', () => {
  var clone=document.getElementById('camp').cloneNode(true);
  clone.id='camp'+count1;
  count1++;
  form1.insertBefore(clone,document.getElementById('buttons'));
});

const removebtn=document.getElementById('removebtn1');
removebtn.addEventListener('click', () => {
var child =document.getElementById('camp'+(count1-1));
if(count1>1)
{
document.getElementById('form1').removeChild(child);
count1--;
}
});

const addbtn2=document.getElementById('addbtn2');
var count2=1;
addbtn2.addEventListener('click', () => {
  var clone=document.getElementById('campp').cloneNode(true);
  clone.id='campp'+count2;
  count2++;
  form2.insertBefore(clone,document.getElementById('buttons1'));
  var str='Level'+(count2);
  document.getElementById('campp'+(count2-1)).children[0].innerHTML=str;
});



const removebtn1=document.getElementById('removebtn2');
removebtn1.addEventListener('click', () => {
var child =document.getElementById('campp'+(count2-1));
if(count2>1)
{
form2.removeChild(child);
count2--;
}
});