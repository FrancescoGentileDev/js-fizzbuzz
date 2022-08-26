const container = document.querySelector('.grid');

for (let i = 1; i <= 100; i++) {
  const div = document.createElement("div");
  let text = "";
  if (i % 3 == 0) {
    text += "Fizz";
    }
    if (i % 5 == 0) {
    text += "Buzz";
    }
  if(text.length == "")  {
      text += i;
    }
  else {
    div.classList.add(text);
    }

  console.log(text)
  div.append(text);
  
  container.append(div);
}
