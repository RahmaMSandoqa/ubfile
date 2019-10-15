// CirclesCreator Project "main.js file" 


function appearCorporationNav(){

    // First action
    var corporationSubMenu = document.getElementById('corporation-sub-menu');
    corporationSubMenu.style.visibility = 'visible';

    // Removal function
    function removeCorporationMenu(){corporationSubMenu.style.visibility = 'hidden'};

    // First condition
    var headerNode = document.querySelector('header');
    headerNode.onmouseover = removeCorporationMenu; 
    // Second condition
    var sectorsNode = document.querySelector('#sectors-and-fields');
    sectorsNode.onmouseover = removeCorporationMenu;
    // Third Condition
    var sectorsZoneNode = document.querySelector('#create-your-own');
    sectorsZoneNode.onmouseover = removeCorporationMenu;
   
};
// Declaration of wanted node
var corporation = document.querySelector('#corporation');
corporation.addEventListener("click", appearCorporationNav);




function appearSectorsNav(){

    // First action
    var sectorsSubMenu = document.getElementById('sectors-sub-menu');
    sectorsSubMenu.style.visibility = 'visible';

    // Removal fnction 
    function removeSectorsMenu(){sectorsSubMenu.style.visibility = 'hidden'};

    // First condition
    var headerNodeSectors = document.querySelector('header');
    headerNodeSectors.onmouseover = removeSectorsMenu; 
    // Second Condition
    var sectorsZoneNodeSectors = document.querySelector('#create-your-own');
    sectorsZoneNodeSectors.onmouseover = removeSectorsMenu;
    // Third Condition
    var corporationNode = document.querySelector('#corporation');
    corporationNode.onmouseover = removeSectorsMenu;
    // Third Condition
    var clientsnNode = document.querySelector('#clients-and-partners');
    clientsnNode.onmouseover = removeSectorsMenu;

};

// Declaration of wanted node
var sectorsAndFields = document.querySelector('#sectors-and-fields');
sectorsAndFields.addEventListener("click", appearSectorsNav);


function sectorsCreator(){

    var namesOfSectors = ['Software Development', 'Data Science & Analytics','Engineering & Architecture','Design & Creative','Writing','Admin Support','Customer Service','Sales & Marketing'];
    var cssClasses = ['first-sector','second-sector','third-sector','fourth-sector','fifth-sector','sexth-sector','seventh-sector','eighth-sector'];

    for (var i = 0 ; i < namesOfSectors.length && i < cssClasses.length ; ++i){
        var newDiv = document.createElement('div');
        newDiv.setAttribute("class", cssClasses[i]);
        newDiv.innerText = namesOfSectors[i];
        var sectorsParentNode = document.querySelector('#sectors-container');
        var x = sectorsParentNode.appendChild(newDiv);
    };
};


var sectorsViewer = document.querySelector('.start-now');
sectorsViewer.onclick = sectorsCreator;