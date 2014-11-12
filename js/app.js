$(document).ready(function() {

  /*****************************************************
    MULTIPLE DROPDOWN WITH CHECKBOXES
  ******************************************************/

 	$('#select-dropdown').on('click', function(){
		$('.checklist').slideToggle(200);
	});
  
 	$('.checklist').on('click','.btn', function(e){
 		e.preventDefault();
 		$('.checklist').slideUp(200);
	});


  /*****************************************************
    ACCORDION
  ******************************************************/

  $('.accordion').on('click', '.title', function(e) {
    
    var $this = $(this),
        $accordion = $this.parent();
    e.preventDefault();
    $this.find('i').toggleClass('fa-minus-square');
    $this.next().slideToggle();
    $accordion.siblings()
      .find('.content').slideUp().end()
      .find('i').removeClass('fa-minus-square');
  });
  

  /*****************************************************
    OWLCAROUSEL PLUGIN
  ******************************************************/

  var owl = $("#owl-example");
     
  owl.owlCarousel({
          
      itemsDesktop: [1170],
      singleItem:true,
      slideSpeed: 300,
      pagination: false
  });
    
  $(".next").click(function(){
    owl.trigger('owl.next');
  });
      
  $(".prev").click(function(){
    owl.trigger('owl.prev');
  });

});


