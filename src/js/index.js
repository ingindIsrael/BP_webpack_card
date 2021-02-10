import "../style/index.scss";

/**
 *  EDIT ONLY INSIDE THIS RENDER FUNCTION
 *  This function is called every time the user changes types or changes any input
 * 
    {
        includeCover: true, // if includeCover is true the algorithm should
        background: "https://images.unsplash.com/photo-1511974035430-5de47d3b95da", // this is the url of the image that will used as background for the profile cover
        avatarURL: "https://randomuser.me/api/portraits/women/42.jpg", // this is the url for the profile avatar
        socialMediaPosition: "left", // social media bar position (left or right)
        
        twitter: null, // social media usernames
        github: "alesanchezr",
        linkedin: null,
        instagram: null,

        name: null,
        lastname: null,
        role: null,
        country: null,
        city: null
    }
 */
function render(variables = {}) {
  console.log("These are the current variables: ", variables); //print on the console
  // here we ask the logical questions to make decisions on how to build the html
  // if includeCover==false then we reset the cover code without the <img> tag to make the cover transparent.
  let cover = `<div class="cover"><img src="${variables.background}" /></div>`;
  if (variables.includeCover == false) cover = "<div class='cover'></div>";

  let photo = `<img src="${variables.avatarURL}" class="photo" />`;
  if (variables.avatarURL == false) photo = "<div class='photo'></div>";

  let Unames = `<h1>${variables.name} ${variables.lastname}</h1>`;
  if (variables.name == false && variables.lastname == false)
    Unames = "<div class='Unames'></div>";

  let role = `<h2>${variables.role}</h2>`;
  if (variables.role == false || variables.role == null)
    role = "<div class='role'></div>";

  let location = `<h3>${variables.city}, ${variables.country}</h3>`;

  if (
    variables.city == null ||
    variables.country == null ||
    variables.city == false ||
    variables.country == false
  )
    location = "<div class='location'></div>";

  let SMposition = `<ul class="${variables.socialMediaPosition}">
            <li><a href="https://twitter.com/starwars"><i class="fa fa-twitter"></i></a></li>
            <li><a href="https://github.com/starwars"><i class="fa fa-github"></i></a></li>
            <li><a href="https://linkedin.com/starwars"><i class="fa fa-linkedin"></i></a></li>
            <li><a href="https://instagram.com/starwars"><i class="fa fa-instagram"></i></a></li>
          </ul>
        </div>`;
  if (variables.socialMediaPosition == false)
    SMposition = "<div class='SMposition'></div>";

  // reset the website body with the new html output
  document.querySelector("#widget_content").innerHTML = `<div class="widget">
            ${cover}
            ${photo}
            ${Unames}
            ${role}
            ${location}
            ${SMposition}
          
    `;
}

/**
 * Don't change any of the lines below, here is where we do the logic for the dropdowns
 */
window.onload = function() {
  window.variables = {
    // if includeCover is true the algorithm should
    includeCover: true,
    // this is the url of the image that will used as background for the profile cover
    background:
      "https://facts.net/wp-content/uploads/2015/01/AdobeStock_146236133-1320x880.jpeg",
    // this is the url for the profile avatar
    avatarURL:
      "https://www.berlinale.de/media/filmstills/2020/forum-2020/202012175_1_ORG.jpg",
    // social media bar position (left or right)
    socialMediaPosition: "position-left",
    // social media usernames
    twitter: "user twitter account",
    github: "user github account",
    linkedin: "user linkedin account",
    instagram: "user instagram account",
    name: "User name",
    lastname: "User lastname",
    role: "User role",
    country: "User country",
    city: "User city"
  };
  render(window.variables); //render the card for the first time

  document.querySelectorAll(".picker").forEach(function(elm) {
    elm.addEventListener("change", function(e) {
      // <- add a listener to every input
      const attribute = e.target.getAttribute("for"); // when any input changes, collect the value
      let values = {};
      values[attribute] =
        this.value == "" || this.value == "null"
          ? null
          : this.value == "true"
          ? true
          : this.value == "false"
          ? false
          : this.value;
      render(Object.assign(window.variables, values)); // render again the card with new valus
    });
  });
};
