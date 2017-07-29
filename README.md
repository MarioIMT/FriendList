## Angular Programming Task

In order to be considered for the Fullstack Engineer position, you must complete the following steps. 

*Note: This task should take no longer than 8 hours.*

### Prerequisites

- Please note that this will require Javascript and [Angular](https://angularjs.org) knowledge. 

- HTML5 boiler plate with Bootstrap has been installed. Don't worry about styling for this test. We are only concerned with your Angular.js knowledge and implementation. 

## Task

1. Fork this repository (if you don't know how to do that, Google is your friend)
2. Use the [wireframes](example.png) as the basis for your layout and [API docs](http://friendapi.azurewebsites.net/swagger/) for your API calls.
3. Please create an Angular app that accomplishes the following:
	- Connect to the [Mock REST API](http://friendapi.azurewebsites.net/api/)
		- GET http://friendapi.azurewebsites.net/api/friend
		- GET http://friendapi.azurewebsites.net/api/friend/{id}
		- DELETE http://friendapi.azurewebsites.net/api/friend
		- POST http://friendapi.azurewebsites.net/api/friend
		Use the swagger endpoint which demostrate how to utilize the endpoint.
	- Create the Friends List as shown in the wireframe. Use services, directives, filters where appropriate
	- When a user clicks on a Friend bring them to the Friend Profile page. *Note: There is only one Friend profile object that is available through the API. Use this for all detail pages.* Use routing and transitions where appropriate.
	- A user should be able to delete a friend.
4. Commit and Push your code to the same repository
5. Send us a pull request, we will review your code and get back to you.