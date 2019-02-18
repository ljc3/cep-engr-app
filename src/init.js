// create a JavaScript object here with the following fields: firstName, lastName, jobTitle, homeOffice
var cep = {
	firstName: 'Lance', 
	lastName: 'Casey',
	jobTitle: 'Fraud Analyst',
	homeOffice: 'Austin - RPP',
	tellMeMore: 'I love the problem solving aspect of my current job, but through this program I hope to be able to build solutions. Also, I like to garden.'
};

// using jQuery and the object above, display the information as the appropriate button is clicked
$(".accordion").on("click", ".accordion-header", function() {
	$(this).toggleClass("active").next().slideToggle();
		$("#first_name").text(cep.firstName);
		$("#last_name").text(cep.lastName);
		$("#job_title").text(cep.jobTitle);
		$("#home_office").text(cep.homeOffice);
		$("#tell_me_more").text(cep.tellMeMore);
});