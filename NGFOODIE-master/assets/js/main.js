var foodieApp = angular.module('foodieApp',['ngRoute']);


// Adding route to our website
foodieApp.config(function ($routeProvider) {

	$routeProvider
	.when('/',{
		templateUrl: 'assets/pages/login.html',
		controller: 'loginController'
	})
	.when('/home',{
		templateUrl: 'assets/pages/main.html',
		controller: 'mainController'
	})
	.when('/restaurant/:id', {										//id is a route parameter
		templateUrl: 'assets/pages/restaurant.html',
		controller: 'restaurantController'
	})

})

// restaurants information controller
foodieApp.controller('restaurantController',function($scope,$routeParams) {

		$scope.restaurantId = $routeParams.id;

		var restaurants = [{
	    name: 'JAKOI',
	    address: 'Assam Bhavan,Sardar Patel Marg,Road 1,Chanakyapuri',
	    location: 'Chanakyapuri',
	    category: 'Casual Dining',
			id: 1,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Alkauser',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Chanakyapuri',
	    category: 'TAKEAWAY DELIVERY',
			id: 2,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Rajwada',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Connaught Place',
	    category: 'Casual Dining, Bar',
			id: 3,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Farzi3 Cafe',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Connaught Place',
	    category: 'Casual Dining, Bar',
			id: 4,
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  },
	  {
	    name: 'Farzi4 Cafe',
	    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
	    location: 'Connaught Place',
	    category: 'Casual Dining, Bar',
	    vote: '4.2',
	    cuisines: 'Modern Indian',
	    cost: '2200',
	    hours: '12 Noon to 1 AM (Mon-Sun)',
	    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
	  }];

		$scope.restaurant = restaurants[$routeParams.id - 1];

})


// login Controller
foodieApp.controller('loginController',function($scope,$location) {

	$scope.goToHome = function() {
		// console.log('Do Something')
		$location.url('home')
	}

})

foodieApp.controller('mainController',function($scope) {

  // first object
  $scope.restaurants = [{
    name: 'Farzi Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 1,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Alkauser',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Chanakyapuri',
    category: 'TAKEAWAY DELIVERY',
		id: 2,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Rajwada',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 3,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Farzi3 Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 4,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  },
  {
    name: 'Farzi4 Cafe',
    address: '38/39, Level 1, Block E , Inner Circle, Connaught Place',
    location: 'Connaught Place',
    category: 'Casual Dining, Bar',
		id: 5,
    vote: '4.2',
    cuisines: 'Modern Indian',
    cost: '2200',
    hours: '12 Noon to 1 AM (Mon-Sun)',
    image: 'https://b.zmtcdn.com/data/pictures/chains/2/308022/dabd30bd0b000ea859ada9a08a0132fc.jpg'
  }];


})
