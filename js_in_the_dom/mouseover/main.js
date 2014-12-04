var body = document.getElementsByTagName('body')[0];

body.addEventListener("mouseover", function(event) {
    console.log('I mouseovered something!');
    event.target.style.borderStyle = "solid";
    event.target.style.borderColor = "purple";
  }
);

body.addEventListener("mouseout", function(event) {
    console.log('I mouseouted something!');
    event.target.style.borderStyle = "";
    event.target.style.borderColor = "";
  }
);

