// for size ..........
function getFont_size(fsize) {
  document.getElementById("myname").style.fontSize = fsize.getAttribute("id");
}

// font-family .........

function getFont_family(fFamily) {
  document.getElementById("myname").style.fontFamily =
    fFamily.getAttribute("id");
}

function fontType1() {
  const allname = document.getElementsByClassName("container");
  allname[0].style.fontWeight = "Bold";
}
function fontType2() {
  const allname = document.getElementsByClassName("container");
  allname[0].style.fontStyle = "italic";
}

function fontType3() {
  const allname = document.getElementsByClassName("container");
  allname[0].style.textDecoration = "underline";
}

function clearInput() {
  window.location.reload();
}

// getting data using this keyword ................
function getColor(c) {
  document.getElementById("myname").style.color = c.getAttribute("id");
}
