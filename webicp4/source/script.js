function getGithubInfo(user) {
    //1. Create an instance of XMLHttpRequest class and send a GET request using it.
    // The function should finally return the object(it now contains the response!)
    let xhttp=new XMLHttpRequest();
    xhttp.open('get','https://api.github.com/users/'+user, true);
    xhttp.onload = function () {
        //if the response is successful show the user's details
        if (xhttp.status == 200) {
            console.log(xhttp);
            showUser(JSON.parse(xhttp.responseText));
            //else display error message
        } else if(xhttp.status==404) {
            noSuchUser(user);
        }
    };
    xhttp.send();
}

function showUser(user) {
    //2. set the contents of the h2 and the two div elements in the div '#profile' with the user content
    console.log(user);
    $('h2').html("Profile");
    $(".avatar").html("<img height='200' width='200' src='"+ user.avatar_url+"'/>");
    let link = "<a target='_blank' href='"+user.html_url+"'> Git Hub URL  </a>";
    $(".information").html("<label><u><strong>User Information</strong></u></label>" +
        "<br/><br/><label style='color: #000'>Login Name : </label>"+ user.login
        +"<br/><label style='color: #000'> Login ID : </label>"+ user.id
        +"<br/><label style='color: #000'> Node ID : </label>"+ user.node_id
        +"<br/> <label style='color:#000'>GitHub URL : </label>"+link
        +"<br/> <label style='color:#000'>mail : </label>"+user.email
        +"<br/> <label style='color:#000 '>Repositories Of User : </label>"+ user.public_repos);
    $("#profile").show();
}

function noSuchUser(username) {
    //3. set the elements such that a suitable message is displayed
    console.log("no such user");
    // setting the elements in html page to blank
    $(".avatar").text(" username " +username + " does not exists ");
    $(".information").html('');
    $("#profile").show();
}
$(document).ready(function () {
    $(document).on('keypress', '#username', function (e) {
        //check if the enter(i.e return) key is pressed
        $("#profile").hide();
        if (e.which == 13) {
            //get what the user enters
           let username = $(this).val();
            //reset the text typed in the input
            $(this).val("");
            //get the user's information and store the respsonse
          let response = getGithubInfo(username);
            //if the response is successful show the user's details
        }
    })
});
