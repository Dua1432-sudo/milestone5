// GET REFERENCES TO THE FORM AND DISPLAY AREA
var form = document.getElementById('resume-form');
var resumeDisplayElement = document.getElementById('resume-display');
var sharaebleLinkContainer = document.getElementById('resume-link-container');
var sharaebleLinkElement = document.getElementById('sharaeble-link');
var downloadpdfButton = document.getElementById('download-pdf');
// handal form submission
form.addEventListener('submit', function (event) {
    event.preventDefault(); // prevent page reload
    // Collect input values
    var username = document.getElementById('username').value;
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var education = document.getElementById('education').value;
    var skills = document.getElementById('skills').value;
    var resumeData = {
        name: name,
        email: email,
        phone: phone,
        education: education,
        skills: skills
    };
    localStorage.setItem(username, JSON.stringify(resumeData));
    // Genrate the resume content dynamiclly
    var resumeHTML = "\n     <h2><b> Editable Resume</b></h2>\n     <h3>Personal Information</h3>\n     <p><b>Name:</b><span contenteditable=\"true\">".concat(name, "</span></p>\n     <p><b>Email:</b><span contenteditable=\"true\">").concat(email, "</span></p>\n     <p><b>Phone:</b><span contenteditable=\"true\">").concat(phone, "</span></p>\n\n     <h3>Education</h3>\n     <p contenteditable=\"true\">").concat(education, "</p>\n\n     <h3>Skills</h3>\n     <p contenteditable=\"true\">").concat(skills, "</p>\n     ");
    //Display the generated resume
    if (resumeDisplayElement) {
        resumeDisplayElement.innerHTML = resumeHTML;
    }
    else {
        console.error('The resume display element is missing.');
    }
});
