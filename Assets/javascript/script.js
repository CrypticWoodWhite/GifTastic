var topics = [
    "annapurna",
    "everest",
    "mount vinson",
    "rainier",
    "denali",
    "mont blanc",
    "fuji",
    "matterhorn",
    "kilimanjaro",
    "fitz roy",
    "aconcagua",
    "lhotse",
    "eiger",
    "half dome",
    "kosciusko",
    "mount elbrus",
    "k2",
    "puncak jaya"
]

var APIKey = "r2kqhlSIjqyRxoLRa3nNsR8rATxYv3Xm";
var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + newTopic + "&api_key=" + APIKey;
var newTopic;

// ajax call
$("#mountain").on("click", function() {
    $.ajax({
        url: queryURL,
        method: "GET"
    }
        // retrieve the gifs and the data
        // append the gifs and data to the div
        // show gifs as stopped

        /*// click gif start
        $().on("click", function() {
            event.preventDefault();

        })


        // click gif end
        $().on("click", function() {
            event.preventDefault();
            
        })*/
    ) 
})


// attach button to each string in array
function renderAllBtns() {
    for (i=0; i<topics.length; i++) {
        topicBtn = $("<button>");
        topicBtn.addClass("mountain btn btn-light mr-2 mb-2");
        topicBtn.attr("name", topics[i]);
        topicBtn.text(topics[i]);
        $("#everything").append(topicBtn);
        console.log(topics[i]);
        console.log(topicBtn);
    }
}

renderAllBtns();

// click submit and add to array of buttons
$("#submit").on("click", function() {
    event.preventDefault();
    newTopic = $("#input").val().trim();
    topics.push(newTopic);

    // append the last topic/button added to the array
    topicBtn = $("<button>");
    topicBtn.addClass("mountain btn btn-light mr-2 mb-2");
    topicBtn.attr("name", topics[topics.length - 1]);
    topicBtn.text(topics[topics.length - 1]);
    $("#everything").append(topicBtn);
})