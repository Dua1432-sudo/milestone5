// GET REFERENCES TO THE FORM AND DISPLAY AREA
const form = document.getElementById('resume-form') as HTMLFormElement;
const resumeDisplayElement = document.getElementById('resume-display') as HTMLDivElement;
const sharaebleLinkContainer = document.getElementById('resume-link-container') as HTMLDivElement;
const sharaebleLinkElement = document.getElementById('sharaeble-link') as HTMLAnchorElement;
const downloadpdfButton = document.getElementById('download-pdf') as HTMLButtonElement;

// handal form submission
form.addEventListener('submit' , (event:Event) =>{
     event.preventDefault(); // prevent page reload

     // Collect input values
     const username = (document.getElementById('username') as HTMLInputElement).value;
     const name = (document.getElementById('name') as HTMLInputElement).value
     const email = (document.getElementById('email') as HTMLInputElement).value
     const phone = (document.getElementById('phone') as HTMLInputElement).value
     const education = (document.getElementById('education') as HTMLInputElement).value
     const skills = (document.getElementById('skills') as HTMLInputElement).value 

     const resumeData = {
        name,
        email,
        phone,
        education,
        skills
     };
     localStorage.setItem(username, JSON.stringify(resumeData));

     

     // Genrate the resume content dynamiclly
     const resumeHTML =`
     <h2><b> Editable Resume</b></h2>
     <h3>Personal Information</h3>
     <p><b>Name:</b><span contenteditable="true">${name}</span></p>
     <p><b>Email:</b><span contenteditable="true">${email}</span></p>
     <p><b>Phone:</b><span contenteditable="true">${phone}</span></p>

     <h3>Education</h3>
     <p contenteditable="true">${education}</p>

     <h3>Skills</h3>
     <p contenteditable="true">${skills}</p>
     `;

     //Display the generated resume
     if(resumeDisplayElement){
          resumeDisplayElement.innerHTML = resumeHTML;
     }else{
          console.error('The resume display element is missing.');
     }
});
