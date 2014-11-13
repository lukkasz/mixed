(function(){
  $(function() {

    /*****************************************************
      MULTIPLE DROPDOWN WITH CHECKBOXES
    ******************************************************/
    var checkedItems = [],
        $selectDropdown = $('#select-dropdown'),
        $checkList = $('.checklist'),
        defaultText = $selectDropdown.text();

   	$selectDropdown.on('click', function(){
  		$checkList.slideToggle(200);
  	});


    $checkList.on('click', 'input[type="checkbox"]',function() {
      var $this = $(this);
      
      if ($this.is(':checked')) {
        checkedItems.push($this.val());
      } else {
        checkedItems.splice(checkedItems.indexOf($this.val()),1);
      }

    });
    

   	$checkList.on('click','.btn', function(e){
      e.preventDefault();
      if (!checkedItems.length) {
        $selectDropdown.text(defaultText);
      } else {
        $selectDropdown.text(checkedItems.sort());
      }
       
      $checkList.slideUp(200);
      
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

})();


