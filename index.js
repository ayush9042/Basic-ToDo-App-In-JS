var headingTodo = document.createElement("h1");
console.log(headingTodo);

var hText = "ToDo App"

var headingText = document.createTextNode(hText);
console.log(headingText);

// Connecting/Appending text to h1

var appendHeading = headingTodo.appendChild(headingText);

var bodyObj = document.getElementsByTagName("body");

// bodyObj.appendChild(headingTodo);
console.log(bodyObj);

var appendBody = bodyObj[0].appendChild(headingTodo);

headingTodo.id = "main-heading";

var toDoInput = document.createElement("input");

bodyObj[0].appendChild(toDoInput);

toDoInput.placeholder = "Enter Task Name";
toDoInput.style.border = "3px solid #ccc";
toDoInput.style.boxShadow = "0 0 12px #ccc";
toDoInput.style.padding = "8px";
toDoInput.style.outline = "none";

toDoInput.addEventListener("keyup", function (e) {
  if (e.code === "Enter") {
    var cardDiv = document.createElement("div");
    bodyObj[0].appendChild(cardDiv);
    var show = cardDiv.innerHTML = toDoInput.value;
    cardDiv.style.textAlign = "center";
    cardDiv.style.marginTop = "30px";
    cardDiv.style.padding = "12px";
    cardDiv.style.fontSize = "20px";
    cardDiv.style.textTransform = "capitalize";
    cardDiv.style.border = "1px solid #ccc";
    cardDiv.style.width = "280px";
    cardDiv.style.margin = "30px auto";
    cardDiv.style.borderRadius = "8px";
    cardDiv.style.boxShadow = "0 0 12px #ccc";

    var delBtn = document.createElement("button");
    delBtn.innerHTML = "del";
    bodyObj[0].appendChild(delBtn);
    cardDiv.appendChild(delBtn);
    delBtn.style.marginLeft = "25px";
    delBtn.style.padding = "10px";
    delBtn.style.borderRadius = "50%";
    delBtn.style.color = "yellow";
    delBtn.style.backgroundColor = "red";
    delBtn.style.border = "2px solid red";

    delBtn.addEventListener("click", function () {
      cardDiv.remove();
    })

    toDoInput.value = "";
  }
})

toDoInput.id = "inputSearch";

bodyObj[0].style.textAlign = "center";

var inpDiv = document.createElement("div");

bodyObj[0].appendChild(inpDiv);

inpDiv.appendChild(toDoInput);

bodyObj[0].style.textAlign = "left";

inpDiv.style.textAlign = "center";
inpDiv.style.marginTop = "50px";
inpDiv.style.marginBottom = "25px";

var btn = document.createElement("button");

btn.innerHTML = "Create Dos..";

bodyObj[0].appendChild(btn);

var btnWrapper = document.createElement("div");

bodyObj[0].appendChild(btnWrapper);

btnWrapper.appendChild(btn);

btnWrapper.style.textAlign = "center";

btn.style.padding = "12px";
btn.style.fontSize = "14px";
btn.style.fontWeight = "bolder";
btn.style.backgroundColor = "burlywood";
btn.style.outline = "none";
btn.style.borderRadius = "8px";

btn.addEventListener("click", function (e) {
  var cardDiv = document.createElement("div");
  bodyObj[0].appendChild(cardDiv);
  var show = cardDiv.innerHTML = toDoInput.value;
  cardDiv.style.textAlign = "center";
  cardDiv.style.marginTop = "30px";
  cardDiv.style.padding = "18px";
  cardDiv.style.fontSize = "20px";
  cardDiv.style.textTransform = "capitalize";
  cardDiv.style.border = "1px solid #ccc";
  cardDiv.style.width = "280px";
  cardDiv.style.margin = "30px auto";
  cardDiv.style.borderRadius = "8px";
  cardDiv.style.boxShadow = "0 0 12px #ccc";

  var delBtn = document.createElement("button");
  delBtn.innerHTML = "del";
  bodyObj[0].appendChild(delBtn);
  cardDiv.appendChild(delBtn);
  delBtn.style.marginLeft = "25px";
  delBtn.style.padding = "10px";
  delBtn.style.borderRadius = "50%";
  delBtn.style.color = "yellow";
  delBtn.style.backgroundColor = "red";
  delBtn.style.border = "2px solid red";

  delBtn.addEventListener("click", function () {
    cardDiv.remove();
  })

  var today = new Date();
  var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
  var time = today.getHours() + ":" + today.getMinutes();
  var dateTime = date + ' ' + time;


  // bodyObj[0].appendChild(dateTime);

  // var a = cardDiv.appendChild(dateTime);
  // console.log(a);

  cardDiv.innerHTML = toDoInput.value + "&nbsp;&nbsp;&nbsp;&nbsp;" + dateTime;

  cardDiv.appendChild(delBtn);


  toDoInput.value = "";
})









