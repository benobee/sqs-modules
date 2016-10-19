//example using data-tags as the filtering method

(function(){
var Grid = {
  init: function(){
    this.render();
  },
  render: function(){
    var self = this;

    fetch('/projects-gallery?format=json').then(function(response) { 
        // Convert to JSON
        return response.json();
    }).then(function(data) {
      
        $.each(data.collection.tags, function(i, index) {
          	 var filterName = 'tag-' + self.slugify(index);
             var html = '<div data-filter=".' + filterName +'" class="item">'+ index +'</div>';  
             $("#categories").append(html);
        });
       Grid.bind();
       
       $('.app-module.collection').addClass("is-loaded");
    });
  },
  slugify: function(filterName){
  	 return filterName.toLowerCase().replace(/ /g, "-");
  },
  bind: function(){
    
      var $grid = $('.grid-items').isotope({
        itemSelector: '.grid-item',
        layoutMode: 'fitRows',
        transformsEnabled: false, 
        animationEngine: 'css',
        getSortData: {
          name: '[data-name]',
          tag: '[data-tag]'
        }
      });

    $('#categories .item').on("click", function(e){
      var filter = $(this).data("filter");
  
      if(filter == 'all'){
  		$grid.isotope({ sortBy: 'name', filter: filter });
      } else {
  		$grid.isotope({
            transformsEnabled: false, 
            animationEngine: 'css',
            sortBy: 'name',
            filter: filter
          });
      }	
    });
  }
};
  
Grid.init();
})();