console.log("hello");

let text = document.getElementById('mytext');
let sliderAnger = document.getElementById('Anger')
let sliderSadness = document.getElementById('Sadness')
let sliderJoy = document.getElementById('Joy')
let sliderFear = document.getElementById('Fear')
let input = document.getElementById('addText')
let button = document.getElementById('button')
console.log(sliderFear)

let response;

// const data = "text=After%20living%20abroad%20for%20such%20a%20long%20time%2C%20seeing%20my%20family%20was%20the%20best%20present%20I%20could%20have%20ever%20wished%20for.";
const data = "text=After living abroad for such a long time seeing my family was the best present I could have ever wished for.";
const xhr = new XMLHttpRequest();
xhr.withCredentials = true;

xhr.addEventListener("readystatechange", function () {
	if (this.readyState === this.DONE) {
        response = JSON.parse(this.responseText);
		console.log(response.emotion_scores);
        sliderAnger.value=response.emotion_scores["anger"]*9000
        sliderSadness.value=response.emotion_scores["sadness"]*9000
        sliderJoy.value=response.emotion_scores["joy"]*9000
        sliderFear.value=response.emotion_scores["fear"]*9000
        text.style["font-variation-settings"] = '"wght"0, "wdth"'+sliderFear.value+', "opsz"'+sliderJoy.value+',"ital"'+sliderSadness.value+',"rxad" ' + sliderAnger.value;
	}
});

xhr.open("POST", "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("x-rapidapi-key", "03828c5ae1msh2c9d6bda505ca08p1f3320jsnee5ff14e2ecb");
xhr.setRequestHeader("x-rapidapi-host", "twinword-emotion-analysis-v1.p.rapidapi.com");

xhr.send("input");

//add a call back button? 



function apiAsk(){
  let newData = document.getElementById("addText").value;
  console.log(newData);
    
  text.innerText = newData.toUpperCase();

  newData = "text=" + newData;
  console.log(newData);
  
  


    xhr.open("POST", "https://twinword-emotion-analysis-v1.p.rapidapi.com/analyze/");
xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
xhr.setRequestHeader("x-rapidapi-key", "03828c5ae1msh2c9d6bda505ca08p1f3320jsnee5ff14e2ecb");
xhr.setRequestHeader("x-rapidapi-host", "twinword-emotion-analysis-v1.p.rapidapi.com");
 
  xhr.send(newData);

}





// Update the current slider value (each time you drag the slider handle)
sliderAnger.oninput = function() {
    text.style["font-variation-settings"] = '"wght"0, "wdth"'+sliderFear.value+', "opsz"'+sliderJoy.value+',"ital"'+sliderSadness.value+',"rxad" ' + sliderAnger.value;
  }
  sliderSadness.oninput = function() {
    text.style["font-variation-settings"] = '"wght"0, "wdth"'+sliderFear.value+', "opsz"'+sliderJoy.value+',"ital"'+sliderSadness.value+',"rxad" ' + sliderAnger.value; 
  }
  sliderJoy.oninput = function() {
    text.style["font-variation-settings"] = '"wght"0, "wdth"'+sliderFear.value+', "opsz"'+sliderJoy.value+',"ital"'+sliderSadness.value+',"rxad" ' + sliderAnger.value;
  }
  sliderFear.oninput = function() {
    text.style["font-variation-settings"] = '"wght"0, "wdth"'+sliderFear.value+', "opsz"'+sliderJoy.value+',"ital"'+sliderSadness.value+',"rxad" ' + sliderAnger.value;
  }
 

