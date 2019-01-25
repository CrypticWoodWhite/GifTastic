var topics = [
    "auto belay",
    "figure eight knot",
    "prusik",
    "slab",
    "water knot",
    "harness",
    "jug",
    "crimp",
    "high ball",
    "carabiner",
    "quick draw",
    "multi pitch",
    "chalk bag",
    "cam",
    "nut",
    "crampon",
    "ice axe",
    "snow anchor"
]

var topicBtn;
var APIKey = "r2kqhlSIjqyRxoLRa3nNsR8rATxYv3Xm";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchTerm + "&api_key=" + APIKey;
var searchTerm;

// ajax call
$.ajax({
    url: queryURL,
    method: "GET"
})

// attach button to each string in array
function renderBtn() {
    for (i=0; i<topics.length; i++) {
        topicBtn = $("<button>");
        topicBtn.addClass("climb-topic btn btn-light mr-2 mb-2");
        topicBtn.attr("data-name", topics[i]);
        topicBtn.text(topics[i]);
        $("#everything").append(topicBtn);
        console.log(topics[i]);
        console.log(topicBtn);
    }
}

// click submit and add to array of buttons
$("#submit").on("click", function() {
    event.preventDefault();
    newTopic = $("#input").val().trim();
    topics.push(newTopic);
    renderBtn();
})

renderBtn();

/*// click gif start
$().on("click", function() {
    event.preventDefault();

})


// click gif end
$().on("click", function() {
    event.preventDefault();
    
})*/