$(document).ready(function(){
	$('#homeslide').live('click',function () {
		$("#homepage").delay(500).slideDown(500);
		$("#showcasepage").slideUp(500);
		$("#aboutuspage").slideUp(500);
		$("#contactuspage").slideUp(500);
	});
	$('.showcaseslide').live('click',function () {
		$("#homepage").slideUp(500);
		$("#showcasepage").delay(500).slideDown(500);
		$("#aboutuspage").slideUp(500);
		$("#contactuspage").slideUp(500);
	});
	$('#aboutslide').live('click',function () {
		$("#homepage").slideUp(500);
		$("#showcasepage").slideUp(500);
		$("#aboutuspage").delay(500).slideDown(500);
		$("#contactuspage").slideUp(500);
	});
	$('#contactslide').live('click',function () {
		$("#homepage").slideUp(500);
		$("#showcasepage").slideUp(500);
		$("#aboutuspage").slideUp(500);
		$("#contactuspage").delay(500).slideDown(500);
	});

	
/*
 * AJAX Section
 * This function will handle the contact process through AJAX
 */
	 $('#slickform').submit(
		function slickcontactparse() {
			
			// EMAIL VALIDATION FUNCTION
			var emailReg = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
			
			// EDIT THIS SECTION IF DIFFERENT FORM ELEMENTS
			// Values
			var successmessage = "Thank you for email, we will be in contact soon!";
			var failedmessage = "There was a problem, please try again!";
			var usersname = $('#name');
			var usersemail = $('#email');
			var userscomment = $('#comment');
			var isvalid = 1;
			var url = "contact.php";
			
			//Checking information is correct before sending data
			
			
			//CHECKING EMAIL IS PRESENT AND IS VALID
			if (usersemail.val() == "") {
				$(".errorcontainer").html('Please Insert Your Email!');
				$(".errorcontainer").delay(500).fadeIn(1000).delay(2500).fadeOut(1000);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			
			var valid = emailReg.test(usersemail.val());
			
			if(!valid) {
				$(".errorcontainer").html('Please Enter A Valid Email!');
				$(".errorcontainer").delay(500).fadeIn(1000).delay(2500).fadeOut(1000);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			//CHECKING EMAIL IS PRESENT AND IS VALID
			
			
			//CHECKING USERS NAME IS PRESENT
			if (usersname.val() == "") {
				$(".errorcontainer").html('Please Insert Your Name!');
				$(".errorcontainer").delay(500).fadeIn(1000).delay(2500).fadeOut(1000);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			//CHECKING USERS NAME IS PRESENT
			
			//CHECKING THE COMMENT IS PRESENT
			if (userscomment.val() == "") {
				$(".errorcontainer").html('You Forgot To Leave A Message!');
				$(".errorcontainer").delay(500).fadeIn(1000).delay(2500).fadeOut(1000);
				$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				return false;
			}
			//CHECKING THE USER IS HUMAN
			
			/* 
			 *
			 * POSTING DATA USING AJAX AND
			 * THEN RETREIVING DATA FROM PHP SCRIPT
			 *
			*/
			
			$.post(url,{ usersname: usersname.val(), usersemail: usersemail.val(), userscomment: userscomment.val(), isvalid: isvalid } , function(data) {
				
				if(data == 'success'){
					$(".successcontainer").html(successmessage);
					$(".successcontainer").delay(500).fadeIn(1000).delay(2500).fadeOut(1000);
					$("#name").val('');
					$("#email").val('');
					$("#comment").val('');
					$('input[type=submit]', $("#slickform")).removeAttr('disabled');
				
				} else {
					
					$(".errorcontainer").html(failedmessage);
					$(".errorcontainer").delay(500).fadeIn(1000).delay(2500).fadeOut(1000);
					$('input[type=submit]', $("#slickform")).removeAttr('disabled');
					return false;
					
				}
				
			});			
		}
	);
});