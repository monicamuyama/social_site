//var user = {name: "monica", photo:"" , education: ""};
const profliePicture = document.querySelector("#profilePicture");
var uploadedImage = "";
profliePicture.addEventListener("change", function () {
  const reader = new FileReader();
  reader.addEventListener("load", () => {
    uploadedImage = reader.result;
    document.querySelector(
      "#image"
    ).style.backgroundImage = `url(${uploadedImage})`;

    // image.style.display = "block";
  });
  reader.readAsDataURL(this.files[0]);
});
var reviewButton = document.getElementById("Review");

    reviewButton.addEventListener("click", reviewChanges);

function reviewChanges(event){
    var reviewButton = event.target;
    var biodata = document.getElementById("bio_data").value;
    var personal_statement = document.getElementById("personal_statement").value;
    var university = document.getElementById("university").value;
    var secodary = document.getElementById("secodary").value;
    var primary = document.getElementById("primary").value;
    var hobby_name = document.getElementsByClassName("hobby_name").value;
    saveChanges(biodata, personal_statement, university, secodary, primary, hobby_name);
}
function saveChanges(biodata, personal_statement, university, secodary, primary, hobby_name){
    var detailBox = document.createElement("div");
    detailBox.classList.add("Cart_box");
    var review = document.querySelector("#review");
    var reviewContent=`
<div class="outer">
<h1 style="color: rgb(85, 64, 64); text-align: center">Review</h1>
        <div id="top" class="css-input">
          <h1>The social site</h1>
        </div>
        <div id="image" class="css-input" alt="profile image"></div>
        <div class="personal_statement">
          <div id="personal_data" class="css-input">
            <h3>Biodata</h3>
            <p id="personal_data_disp">
              ${personal_statement};
            </p>
          </div>
          <div id="education" class="css-input">
            <h2>Education</h2>
            <div id="edu_university" class="css-input">
              <h3>University</h3>
              <p id="university_disp">
                ${university}
              </p>
            </div>
            <div id="edu_secondary" class="css-input">
              <h3>Secondary Education</h3>
              <p id="secondary_disp">
                ${secodary};
              </p>
            </div>
            <div id="edu_primary" class="css-input">
              <h3>Primary Education</h3>
              <p id="primary_disp">
                ${primary}
              </p>
            </div>
          </div>
          <div id="biodata" class="css-input">
            <h2>Personal Statement</h2>
            <p id="bio_data_disp">
              ${biodata}
            </p>
          </div>
          <div id="hobbies" class="css-input">
            <h2>Hobbies</h2>
            <div id="hobby1">
              <h3 class="hobby_name_disp">Hobby One</h3>
              <p class="hobby_description_disp">
                ${hobby_name}
              </p>
            </div>
            <div id="hobby2">
              <h3 class="hobby_name_disp">Hobby Two</h3>
              <p class="hobby_description_disp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam aliquam inventore eum quod odit eos nemo est.
                Exercitationem, facere quam!
              </p>
            </div>
            <div id="hobby3">
              <h3 class="hobby_name_disp">Hobby Three</h3>
              <p class="hobby_description_disp">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Laboriosam aliquam inventore eum quod odit eos nemo est.
                Exercitationem, facere quam!
              </p>
            </div>
          </div>
        </div>
      </div>`

detailBox.innerHTML = reviewContent;
review.appendChild(detailBox);
}
//cartItems.appendChild(cartShopBox);
/*const personalStatement = document.querySelector("#personal_statement");
var mo = personalStatement.innerText;
personalStatement.addEventListener("change", function () {
  document.querySelector("#personal_statement_disp").innerText = `${mo}`;
});

function saveChanges() {
  var paragraph = document.createElement("p");
  var biodata = document.getElementById("bio_data").value;
  var bio_text = document.createTextNode(biodata);
  paragraph.appendChild(bio_text);
  var biodata_disp = document.getElementById("bio_data_disp");
  biodata_disp.appendChild(paragraph);

  var paragraph = document.createElement("p");

  var personal_statement = document.getElementById("personal_statement").value;
  var personal_text = document.createTextNode(personal_statement);
  paragraph.appendChild([personal_text]);
  var personal_statement_disp = document.getElementById(
    "personal_statement_disp"
  );
  personal_statement_disp.appendChild(paragraph);

  var paragraph = document.createElement("p");

  var university = document.getElementById("university").value;
  var uni_text = document.createTextNode(university);
  var university_disp = document.getElementById("university_disp");
  paragraph.appendChild(uni_text);
  university_disp.appendChild(paragraph);

  var paragraph = document.createElement("p");

  var secodary = document.getElementById("secodary").value;
  var sec_text = document.createTextNode(secodary);
  var secodary_disp = document.getElementById("secodary_disp");
  paragraph.appendChild(sec_text);
  secodary_disp.appendChild(paragraph);

  var paragraph = document.createElement("p");

  var primary = document.getElementById("primary").value;
  var pri_text = document.createTextNode(primary);
  var primary_disp = document.getElementById("primary_disp");
  paragraph.appendChild(pri_text);
  primary_disp.appendChild(paragraph);

  var paragraph = document.createElement("p");

  var hobby_name = document.getElementsByClassName("hobby_name").value;
  var hobby_text = document.createTextNode(hobby_name);
  var hobby_name_disp = document.getElementsByClassName("hobby_name_disp");
  paragraph.appendChild(hobby_text);
  hobby_name_disp.appendChild(paragraph);

  var paragraph = document.createElement("p");

  var hobby_description =
    document.getElementsByClassName("hobby_description").value;
  var desc_text = document.createTextNode(hobby_description);
  paragraph.appendChild(desc_text);

  var hobby_description_disp = document.getElementsByClassName(
    "hobby_description_disp"
  );

  hobby_description_disp.appendChild(paragraph);
}*/
