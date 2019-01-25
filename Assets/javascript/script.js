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

// attach button to each string in array
function renderAllBtns() {
    for (i=0; i<topics.length; i++) {
        topicBtn = $("<button>");
        topicBtn.addClass("mountain btn btn-light mr-2 mb-2");
        topicBtn.attr("name", topics[i]);
        topicBtn.text(topics[i]);
        $("#buttons-go-here").append(topicBtn);
    }
    console.log(topics);
}

renderAllBtns();

// click submit and add to array of buttons
$("#submit").on("click", function(event) {
    event.preventDefault();
    newTopic = $("#input").val().trim();
    topics.push(newTopic);

    // render the last topic added to the array as a button
    topicBtn = $("<button>");
    topicBtn.addClass("mountain btn btn-light mr-2 mb-2");
    topicBtn.attr("name", topics[topics.length - 1]);
    topicBtn.text(topics[topics.length - 1]);
    $("#buttons-go-here").append(topicBtn);

    console.log(topics);
})

// ajax call when click a button
// problem 1: this doesn't work at all for new topics added to array
// problem 2: gif's are not showing on document
$(".mountain").on("click", function(event) {
    event.preventDefault();

    var searchGiphy = $(this).attr("name");
    console.log(searchGiphy);
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + searchGiphy + "&limit=10&api_key=r2kqhlSIjqyRxoLRa3nNsR8rATxYv3Xm";

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function(response) {
            console.log(queryURL);
            
            // for each search result, get rating and src
            if (response.data.length === 0) {
                $("#gifs-go-here").text("Sorry, no GIFs to report");
            }
            else {
                for (i=0; i<response.data.length; i++) {
                    var gifsGoHere = $("<div");
                    var rating = $("<p>").text("Rating: " + response.data[i].rating);
                    var mountainPic = $("<img>");
                    mountainPic.attr("src", response.data[i].images.fixed_width_still.url);
                    mountainPic.attr("image-state", "still");
                    gifsGoHere.append(rating);
                    gifsGoHere.append(mountainPic);
                    $("#gifs-go-here").append(gifsGoHere);
                }
            }
        });
})
    



