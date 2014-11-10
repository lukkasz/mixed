$('#select-dropdown').on('click', function(){
	$('.checklist').slideToggle(200);
});
  
$('.checklist-btn').on('click', function(e){
  	e.preventDefault();
  	$('.checklist').slideUp(200);
});