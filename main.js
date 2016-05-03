$(document).ready(function() {
$("#geraldDiv").hide();
$("#adminDiv").hide();

});


$('#loginForm').click(function(){
var user = $('#userName').val();
var pword = $('#password').val();

// return false;

    if (user == 'gerald' && pword =='1234'){	
    	// return false;
        $("#loginDiv").hide(750);
    	$("#geraldDiv").show(500);
    }	
    else
    	alert('Try again');
    	// return false;
    });


