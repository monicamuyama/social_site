const profliePicture = document.querySelector("#profilePicture");
var uploadedImage = "";
profliePicture.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
    document.querySelector(
      "#image"
    ).style.backgroundImage = `url(${uploadedImage})`;
    document.querySelector(
      "#Image"
    ).style.backgroundImage = `url(${uploadedImage})`;

  
  });
  reader.readAsDataURL(this.files[0]);
});


var biodata = document.getElementById("bio_data").value;
var personal_statement = document.getElementById("personal_statement").value;
var university = document.getElementById("university").value;
var secondary = document.getElementById("secondary").value;
var primary = document.getElementById("primary").value;
var hobbyOne = document.getElementById("hobbi1").value;
var hobbyTwo = document.getElementById("hobbi2").value;
var hobbyThree = document.getElementById("hobbi3").value;
var reviewChanges = function(){
   document.getElementById("bio_data_disp").innerText=biodata;
   document.getElementById("personal_data_disp").innerText=personal_statement;
   document.getElementById("university_disp").innerText=university;
   document.getElementById("secondary_disp").innerText=secondary;
   document.getElementById("primary_disp").innerText=primary;
   document.getElementById("hobb1").innerText=hobbyOne;
   document.getElementById("hobb2").innerText=hobbyTwo;
   document.getElementById("hobb3").innerText=hobbyThree;
};
document.getElementById("Review").onclick = reviewChanges;


var saveChanges = function(){
  document.querySelector(
    "#image"
  ).style.backgroundImage = `url(${uploadedImage})`;
 document.getElementById("bd_disp").innerText=biodata;
 document.getElementById("pd_disp").innerText=personal_statement;
 document.getElementById("univ_disp").innerText=university;
 document.getElementById("sec_disp").innerText=secondary;
 document.getElementById("pri_disp").innerText=primary;
 document.getElementById("hob1").innerText=hobbyOne;
 document.getElementById("hob2").innerText=hobbyTwo;
 document.getElementById("hob3").innerText=hobbyThree;
};
document.getElementById("Save").onclick = saveChanges;
