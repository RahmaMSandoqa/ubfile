function appearNav(){
    this.style.backgroundColor = "black";
    var targetNode = document.getElementById('about-us-navigation');
    targetNode.style.visibility = 'visible';


    var headerClick = document.getElementsByTagName('header')[0];
    headerClick.onmouseover = function(){targetNode.style.visibility = 'hidden'};

    var siblingChild = document.getElementById('event-act');
    siblingChild.onmouseover = function(){targetNode.style.visibility = 'hidden'};


    var siblingChild = document.getElementsByTagName('article')[0];
    siblingChild.onmouseover = function(){targetNode.style.visibility = 'hidden'};
   
};

var aboutUs = document.getElementById('about-us');
aboutUs.addEventListener("click", appearNav);