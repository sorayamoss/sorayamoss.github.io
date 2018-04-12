var form = document.getElementById("recommendations");
form.addEventListener("submit", sendRecommendation);


var apiKey = "50428c54421fe08c54f43308215547ebfbfd1be6a9b1f3dc7b26b4f15948e194";
var url = "https://cse104.kraigh.com/recommendations";

function sendRecommendation(event){
  event.preventDefault();
  var name = form.elements.namedItem("name").value;
  var text = form.elements.namedItem("text").value;



  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      console.log(this.readyState);
      console.log(this.status);
      console.log(this.responseTest);
      var recommendation = document.createElement("blockquote");
      recommendation.setAttribute("class", "recommendation");
      recommendation.innerHTML = "<h3>"+name+"</h3>"+"<p>"+text+"</p>";
      document.getElementById("all-recommendations").appendChild(recommendation);
    }
    else if(this.readyState ==  4){
      alert(this.responseText);
    }
  }
  xhttp.open("POST", url , true);
  xhttp.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp.send("api_key="+apiKey+"&name="+name+"&text="+text);

  var getAJAX = new XMLHttpRequest();
  getAJAX.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
          var recommendations = JSON.parse(this.responseText);
          console.log(recommendations);
          for(i=0; i<recommendations.length; i++){
            console.log(recommendations[i]);
            var item = recommendations[i];
            var recommendation = document.createElement("blockquote");
            recommendation.setAttribute("class", "recommendation");
            recommendation.innerHTML = "<h3>"+item.name+"</h3>"+"<p>"+item.text+"</p>";
            document.getElementById("all-recommendations").appendChild(recommendation);
          }
      }
  };
  getAJAX.open("GET", "https://cse104.kraigh.com/recommendations?api_key="+apiKey, true);
  getAJAX.send();

}
