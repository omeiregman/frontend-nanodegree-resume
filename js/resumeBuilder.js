var bio = {
    "name" : "Omeire Godsman",
    "role": "Web Developer",
    "contacts" : {
        "mobile": "08066044182",
        "email": "omeiregodsman@gmail.com",
        "github": "omeiregman",
        "twitter": "@gman",
        "location": "Lagos"
    },
    "welcomeMessage": "Hello there, You can check out my bio here.",
    "skills": ["HTML", "CSS", "javascript", "jQuery", "java", "Python"],
    "bioPic": "images/fry.jpg"
};

var education = {
    "schools": [
        {
            "name": "Fed Uni Technology",
            "city": "Owerri",
            "degree": "Btech",
            "major": "Computer Science"
        },
        {
            "name": "Fed University Technology",
            "city": "Lagos",
            "degree": "Masters",
            "major": "Info  Science"
        },
        {
            "name": "Fed Uni Technology",
            "city": "Lisbon",
            "degree": "PHD",
            "major": "Computer Information Science"
        }
    ]
    
};

var work = {
    "jobs": [
        {
            "employer": "Sweskills",
            "title": "Software Engineer",
            "dates": "May 2017 - Date",
            "description": "This role sits within the Technology Development team in Northern Ireland and reports to the Media Technologies Manager. creating applications and business portals for internal use by BBC staff - creating externally facing systems for use by the general public"
        },
        {
            "employer": "Codeplay",
            "title": "Game Developer",
            "dates": "May 2015 - Mar 2017",
            "description": "The Technology Development team is responsible for devising and supporting hardware and software solutions for programme makers"
        },
        {
            "employer": "X-matrix",
            "title": "Software Engineer",
            "dates": "Jan 2014 - Jan 2015",
            "description": "Creating applications and business portals for internal use by BBC staff - creating externally facing systems for use by the general public"
        }
    ]
    
};

var project = {
    "projects":[
        {
            "title": "Kuti.ml",
            "dates": "2017",
            
            "description": "adapts and works effectively with a variety of situations, individuals or groups. Able tounderstand and appreciate different and opposing perspectives on an issue, to adapt an approach as the requirements of a situation change, and to change or easily accept changes in one’s ownorganisation or job requirements.",
            "images": ["images/fry.jpg", "images/fry.jpg"]
            
        }
    ]
};

if (bio.skills.length > 0) {
    $("#header").append(HTMLskillsStart);
    var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
    $("#skills").append(formattedSkills);
     var formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
    $("#skills").append(formattedSkills);
     var formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
    $("#skills").append(formattedSkills);
     var formattedSkills = HTMLskills.replace("%data%", bio.skills[3]);
    $("#skills").append(formattedSkills);
}
function displayWork(){
    
    for(job in work.jobs) {
    $("#header").append(HTMLworkStart);
    var formattedWork = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
    var formattedRole = HTMLworkTitle.replace("%data%", work.jobs[job].title);
    $(".work-entry:last").append(formattedWork + formattedRole);
    
    var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
    var formattedDate = HTMLworkDates.replace("%data%", work.jobs[job].description);
    $(".work-entry:last").append(formattedDescription);
}
    }

displayWork();
