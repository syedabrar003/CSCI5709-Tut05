# CSCI5709-GROUP13-TUT5

ReactJS application which creates 2 REST APIs in addition to get requests:

Task 1 - Create a REST Api to add new users (POST REQUEST)

Task 2 - Create a REST Api to modify existing user (PUT REQUEST)

* Date Created: 23 June 2020
* Last Modification Date: 23 June 2020

## Authors

* [Syed Abrar](https://github.com/syedabrar003) - (Developer)
* [Mayank Chaturvedi](https://github.com/mchaturv) - (Developer)
* [Anshdeep Singh](https://github.com/ansh94) - (Developer)
* [Vikram Singh](https://github.com/neatcoder) - (Developer)


## Getting Started

* Repository link: [click here](https://github.com/syedabrar003/CSCI5709-Tut05)
* Heroku deployment link: [click here](https://csci5709-group13-tut05.herokuapp.com/)

## API

#### List of All users

-   **GET** [https://csci5709-group13-tut05.herokuapp.com/user](https://csci5709-group13-tut05.herokuapp.com/user)] - It returns JSON array of all the users.

#### Get User by ID

-   **GET** [https://csci5709-group13-tut05.herokuapp.com/user/specific/{{uuid}}](https://csci5709-group13-tut05.herokuapp.com/user): Enter ID of the user in the place of  `:uuid`. It will return details of user if user exists, otherwise a message will be returned as '**user does not exists.**'.

### Add New User

-  **POST**  [https://csci5709-group13-tut05.herokuapp.com/user](https://csci5709-group13-tut05.herokuapp.com/user) : It takes JSON object of user in the body of the request and adds new user with id and returns newly created user. The structure of JSON object is as below:

**Request**
```
{
    "username": string,
    "email": string
}
```
**Response**
````
{
	"message": "user added successfully",
	"uuid": "37523070-b5b6-11ea-8384-c9d2b7ee8751",
	"username": "username3",
	"email": "user3@gmail.com"
}
````
### Update Existing User

-   **PUT** [https://csci5709-group13-tut05.herokuapp.com/user](https://csci5709-group13-tut05.herokuapp.com/user): This API  takes JSON object of user in the body of the request and updates the details of the user if the id in the request matches with any existing user. If user data is updated, API returns updated user information, otherwise a error message. The structure of JSON object is as below:

**Request**
````
{
    "uid": int,
    "username": string,
    "email": string
}
````


## Built With

-   [NodeJS](https://nodejs.org/dist/latest-v14.x/docs/api/)  - Server side JS runtime
-   [REST API](https://restfulapi.net/http-methods/) - REST API methods
-   [Express](https://expressjs.com/) - Express


## Sources Used

- [Node Js](https://nodejs.org/en/)
- [Express](https://expressjs.com/)
- [Joi](https://www.npmjs.com/package/@hapi/joi)
- [Heroku: Cloud Application Platform](https://www.heroku.com/)
