function getNames(str) {
  let result = [];
  var names = str.indexOf(",") != -1 ? str.split(",") : str.split("，");
  for (let i = 0; i < names.length; i++) {
    let jsonName = {
      name: names[i],
      isMe: names[i] == "J. Wu" || names[i] == " J. Wu" || names[i] == "武杰" || names[i] == " 武杰"
    }
    result.push(jsonName);
  }
  return result;
}
// Accordion 
function myAccFunc() {
  var x = document.getElementById("demoAcc");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else {
    x.className = x.className.replace(" w3-show", "");
  }
}

// Click on the "Jeans" link on page load to open the accordion for demo purposes
//document.getElementById("myBtn").click();


// Open and close sidebar
function w3_open() {
  document.getElementById("mySidebar").style.display = "block";
  document.getElementById("myOverlay").style.display = "block";
}

function w3_close() {
  document.getElementById("mySidebar").style.display = "none";
  document.getElementById("myOverlay").style.display = "none";
}

function appComma(ele) {
  var spanCom = document.createElement("span");
  spanCom.innerHTML = ", "
  ele.appendChild(spanCom);
}

//生成列表
function renderList(list, parentEle, isconf) {

  var parent = document.getElementById(parentEle);

  list.forEach(ele => {
    var li = document.createElement("li");
    ele.names = getNames(ele.names);
    ele.names.forEach(name => { //zuo zhe
      var spanName = document.createElement("span");
      spanName.innerHTML = name.name;
      if (name.isMe) {
        spanName.style.fontWeight = "Bold";
      }
      li.appendChild(spanName);
      appComma(li);
    });

    var spanTitle = document.createElement("span");
    spanTitle.innerHTML = ele.paper_title;
    li.appendChild(spanTitle);

    appComma(li);

    var emJournal = document.createElement("em");
    emJournal.innerHTML = ele.journel;
    emJournal.style.fontWeight = "Bold";
    li.appendChild(emJournal);

    appComma(li);

    var spanTime = document.createElement("span");
    spanTime.innerHTML = ele.time;
    li.appendChild(spanTime);

    
    var spantype = document.createElement("span");
    spantype.innerHTML = ele.type;
    spantype.style.fontWeight = "Bold";
    li.appendChild(spantype)    

    parent.appendChild(li);

  });
}


