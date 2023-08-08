var myapp = angular.module("myapp", []);

myapp.controller("myCtrl", function ($scope ) {
    //Custom product information
    $scope.data = [
    {"name": "Oppo A15   ",
     "price": 7990, 
     "Quantity": 0,
      prod_image: "oppoa15.jpg"   },
    {"name": "Realme C15",
     "price": 4990,
      "Quantity": 0,
      prod_image: "realmeC15.png"
      },
    {"name": "Lenovo-k12", 
    "price": 6990,
     "Quantity": 0,
     prod_image: "Lenovo-K12-Pro.jpg"
    },
    {"name": "Infinix note 7",
     "price": 7999,
      "Quantity": 0, 
       prod_image: "infinix-note-7.jpg", 
             },
 {"name": "Xiaomi Mi 11",
     "price": 14999,
      "Quantity": 0, 
       prod_image: "Xiaomi-Mi-11-Lite.jpg", 
             },
    {"name": "Realme 6 Pro",
     "price": 14999,
      "Quantity": 0, 
       prod_image: "realme6pro.jpg", 
             }


             ];

    //Add sign
    $scope.add = function (index) {
        $scope.data[index].Quantity++;
        $scope.sum();
    };
    //Minus Sign
    $scope.minus = function (index) {
        
         if ($scope.data[index].Quantity > 0) {
            $scope.data[index].Quantity--;
            $scope.sum();
        }
    };

    //function for total money and total products
    $scope.sum = function () {
        $scope.allMoney = 0;

        for (var i = 0; i < $scope.data.length; i++) {
            $scope.allMoney = $scope.allMoney + $scope.data[i].price * $scope.data[i].Quantity;
        }
        $scope.allprod = 0;
        for (var i = 0; i < $scope.data.length; i++) {
            $scope.allprod = $scope.allprod +  $scope.data[i].Quantity;
        }
    
    };

   


    $scope.sum();


    $scope.boxclick = function () {
        $scope.sum();

    };
    $scope.shopping = false;

    
    $scope.check = false;
    $scope.show = true;
   
    $scope.hoverIn = function(){
        this.hoverEdit = true;
    };

    $scope.hoverOut = function(){
        this.hoverEdit = false;
    };
    
$scope.category = [
        {name: 'Total',
       fa: 'city',
       link: 'https://www.inkthemes.com/market/' },
        {name: 'Technology',
       fa: 'code',
   link: 'https://www.inkthemes.com/market/'},
        {name: 'Entertainment',
       fa: 'dice',
   link: 'https://www.inkthemes.com/market/'},
        {name: 'Sports',
       fa: 'dumbbell',
    link: 'https://www.inkthemes.com/market/'},
        {name: 'Science',
       fa: 'radiation',
   link: 'https://www.inkthemes.com/market/'}
        ];

    
    $scope.setActive = function(selected) {
          $scope.selected = selected; 
    }

    $scope.isSelected = function(selected) {
        return $scope.selected === selected;
    }
 
$(function() {
  
  var ntfDisplay = function(content) {
    
    var builder = $('<div/>', { class: 'ntf-container' });
    builder.text(content)
           .appendTo('body');
    
    var height = builder.outerHeight();
    var total = $('div.ntf-container').length;
    var targetTop = (total - 1) * height + total * 10;
    
    builder.css({ top: targetTop + 'px' })
           .animate({ left: 10 + 'px' }, 260, function() {
              $(this).animate({ left: 40 + 'px' }, 3600, 'linear', function() {
                $(this).animate({ left: 360 + 'px', opacity: 0 }, 450, function() {
                  $(this).remove();
                  $('div.ntf-container').css({ top: '-=' + (height + 10) + 'px' });
                });
              });
           });
    
  };
  
  $('.ntf-btn').on('click', function() {
    ntfDisplay('Add Sucessfully!!!');
  });
  
});





  





});




  




