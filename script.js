document.getElementById('portfolio').hidden = true;
document.getElementById('resume').hidden = true;
document.getElementById('home').hidden = false;
document.getElementById('home-content').hidden = false;


function homePage() {
  document.getElementById('portfolio').hidden = true;
  document.getElementById('resume').hidden = true;
  document.getElementById('home').hidden = false;
  document.getElementById('home-content').hidden = false;
}

function portfolioPage() {
  document.getElementById('portfolio').hidden = false;
  document.getElementById('resume').hidden = true;
  document.getElementById('home').hidden = true;
  document.getElementById('home-content').hidden = true;
}

function resumePage() {
  document.getElementById('portfolio').hidden = true;
  document.getElementById('resume').hidden = false;
  document.getElementById('home').hidden = true;
  document.getElementById('home-content').hidden = true;
}

document.addEventListener("DOMContentLoaded", homePage()); 

//
// document.getElementById("homeLink").addEventListener("click", homePage() );
// document.getElementById("portLink").addEventListener("click", portfolioPage() );
// document.getElementById("resLink").addEventListener("click", resumePage() );
