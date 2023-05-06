# Savory Eats

You will create a fullstack application that implements several features for an on-line cooking guide. Your app will eventually display three views:

1. a **Home Page**
2. a **All recepies** for the list of recepies
2. an individual **recepie** with more details to display
3. an **Add** view for the website manager to add a new recepie to their collection.

### Your Tech Stack 

- Client: [React](https://facebook.github.io/react)
- Server: [NodeJS](https://nodejs.org), with the [Express](https://express.js.com) framework.
- Database: [MYSQL](https://dev.mysql.com/doc/)
- Additional libraries and tools:
  - Client-side AJAX libraries .
  - [jQuery](https://jquery.com/), for _client-side AJAX requests only_.
  - [Axios](https://github.com/axios/axios), as an optional, promise-based alternative to jQuery's `$.ajax`
  - [cloudinary](https://cloudinary.com) or [firebase](https://firebase.google.com) for uploading images

 ### HOW TO START THIS APP  
**note**: initially you will find yourself in the assessment folder so make sure you redirect yourself to the Savory-Eat directory
also keep in mind that your front-end and back-end are runnig on seperate ports.

### for your client side

- cd /Savory-Eat
- npm i
- npm run react-dev

### for your server side

- cd /server
- npm i
- npm run server-dev

By design, this assessment contains more work than you will be able to complete in a day, so don't be concerned about not completing all of the steps below. Rather, please work on the following steps **in order**, moving on to the next step only after the one you are working on is complete. **Commit frequently** with informative messages. While there are instructions to commit at the end of each step, these should not be your only commits.

---
### Before You Begin

**Complete these setup tasks**

- [ ] Run `npm install` twice inside both the `technical-assesment/Savory-Eat` and `technical-assesment/server` directory to install dependencies.
- [ ] In your server directory create the database by running `mysql -u <username> -p <schema.sql`
- [ ] Start your application with two commands, `npm run react-dev` in your client directory and `npm run server-dev` in your server directory, in two separate terminal tabs.
- [ ] Study the given codebase before beginning the steps below. Consider what's been provided to you, what you'll need to refactor, and what you'll need to create as you work through the steps below.

**WHEN THESE TASKS ARE COMPLETE:** proceed to Step One.

---

### **Step One: The Menu List View :**

**Implement the following user story:**

> As a user, when I load the app, I expect to see a list of all the menu items available.

**Implement this user story by doing the following:**

 - [ ] Refactor the **Home** component to dynamically render the sample data in `Savory-Eat/src/data/data.json`. Each object in the menuItems array represents one menu item's details.
    - You may create additional components and/or refactor existing components as necessary.
    **WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step one"

---

### **Step Two: Fetching Data from the Server :**

**Implement the following user story:**

> As a user, I want the app to fetch the menu items from the server, so that I can view the most up-to-date menu items.

**Implement this user story by doing the following:**

 - [ ] In the Express server server/index.js, complete the request handler that will respond to GET requests to /api/menuItems with JSON of the menu items stored in the database.
 - [ ] In the client-side code, add an AJAX / Or axios request to fetch the menu items from the server when the App (or Home) component gets loaded.
 - [ ]Replace the sample data in your client with data obtained from your server.

    **WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step two"

Note: You can replace menuItems with the name of your own menu items data.
PS: Take into consideration that the ingredient are a string with many ingredient seprated by commas (.split(","))

---
**the default user to add and use in the next two steps is** 

```{user_Id:1,username:'testuser',email:'test@test.com',password:'password'}```

---
### **Step Three: Posting a recepie to the Server :**

**Implement the following user story:**

> As a user, I want to be able to post a recepie to the server, so that I can share my recepie with other users.

**Implement this user story by doing the following:**

 - [ ] In the client-side code, add a form for users to input the details of their recepie.
 - [ ] Add an AJAX / Or axios request to post the recepie details to the server when the user submits the form.
 - [ ] In the Express server server/index.js, complete the request handler that will respond to POST requests to /api/recepies and store the recepie details in the database.

    **WHEN THIS STEP IS COMPLETE:**  please make a commit with the message "complete step three"

Note: You can replace recepies with the name of your own recepie data. 

---

### **Step Four: Deleting a recepie**

**Implement the following user story:**

> As a user, I want to be able to delete a recepie that I have posted, so that I can remove it from the app.


**Implement this user story by doing the following:**

  - [ ] In the client-side code, add a button or link to delete a recepie that was posted by the current user.
  - [ ] Add an AJAX / Or axios request to delete the recepie from the server when the user clicks the delete button or link.
  - [ ] In the Express server server/index.js, complete the request handler that will respond to DELETE requests to /api/recepies/:id and delete the recepie with the matching id from the database.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step four"

Note: You will need to ensure that only the recepies posted by the current user can be deleted. 

---
### **Step Five: Updating a recepie :**

**Implement the following user story:**

> As a user, I want to be able to update a recepie that I have posted.

**Implement this user story by doing the following:**

  - [ ] In the client-side code, add a form to update the details of a recepie that was posted by the current user.
  - [ ] Add an AJAX / Or axios request to update the recepie details on the server when the user submits the update form.
  - [ ] In the Express server server/index.js, complete the request handler that will respond to PUT requests to /api/recepies/:id and update the recepie with the matching id in the database.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step five"

Note: You will need to ensure that only the recepies posted by the current user can be updated. 

---

### **Step Six: Adding a Search Bar:**

**Implement the following user story:**

> As a user, I want to be able to search for specific recepies by name, so that I can easily find the recepie I'm looking for.

**Implement this user story by doing the following:**

 - [ ] In the client-side code, add a search bar that allows users to input a recepie name to search for and select the filtering criteria (ingredients and/or cook time).
 - [ ] Add an AJAX / Or axios request to search for recepies on the server based on the name entered by the user in the search bar and the selected filtering criteria.
 - [ ] In the Express server server/index.js, complete the request handler that will respond to POST requests to /api/recepies/search/ with JSON of the recepies that match the search query and the selected filtering criteria.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step six"

Note: You may need to update your database schema to allow for efficient searching by name. 

---

### **Step Seven: Creating a Favorites Join Table :**
**Implement the following user story:**

> As a user, I want to be able to add my favorite recepies to a separate list and easily remove them if I change my mind.

**Implement this user story by doing the following:**

  - [ ]  Create a new join table in your database called favorites with columns user_id and recepie_id.
  - [ ] Create an API endpoint on the server that allows a user to add a recepie to their favorites list by making a POST request to /api/favorites with the user_id and recepie_id.
  - [ ] Create an API endpoint on the server that allows a user to delete a recepie from their favorites list by making a DELETE request to /api/favorites with the user_id and recepie_id.

Hint:don't forget to add component favorites

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step seven"

Note: You may also want to update your client-side code to allow users to add and remove recepies from their favorites list.

---

### **Step Eight: Adding the Ability to Like or Dislike recepies**

**Implement the following user story:**

> As a user, I want to be able to indicate whether I like or dislike a recepie, but I should only be able to do it once.

**Implement this user story by doing the following:**

 - [ ] Modify your database schema to add a likes column to the recepies table.
 - [ ] Create an API endpoint on the server that allows a user to indicate whether they like or dislike a recepie by making a PATCH request to /api/recepies/:id/like with the user_id and like (either true or false) in the request body. The endpoint should update the likes column of the recepie with the given id accordingly, and prevent the user from liking or disliking the same recepie multiple times.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step eight"

Note: You may also want to update your client-side code to allow users to indicate whether they like or dislike a recepie and display the number of likes for each recepie.

---

### **Step Nine: Uploading Images to Cloudinary**

**Implement the following user story:**
>As a user, I want to be able to upload images for my recepies so that I can provide a visual representation of the dish.

**Implement this user story by doing the following:**

- To implement this user story, we need to modify our existing recepie creation process to include image upload functionality. We will use Cloudinary to store and manage our images.

Here are the specific steps to implement image upload using Cloudinary:


- Modify our server-side code to accept image uploads and upload the image to Cloudinary. 
- Update our recepie creation form on the client-side to include an image upload component. We can use a third-party library like react-dropzone to handle the image upload component.
When a user submits a recepie with an image, we will include the image URL in the recepie object we save to the database.
**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step eight"

Note: You may also want to update your client-side code to allow users to indicate whether they like or dislike a recepie and display the number of likes for each recepie.

---
### **Step Ten: Adding User Authentication and Authorization :**

**Implement the following user story:**

> As a user, I want to be able to create an account, log in, and only be able to modify or delete recepies that I have created.

**Implement this user story by doing the following:**

   - [ ] Create a Login and a SignUp component that allow users to log in or sign up to your application. You may use a third-party library such as react-router-dom for managing routing between different components.
   - [ ] Design and implement a user authentication process on the server side. You can use Passport.js or another similar library for authentication and JWT for generating and verifying access tokens.
   - [ ] Refactor your client-side code to include an authorization header with the access token when making requests to endpoints that require authentication, such as creating, updating, or deleting a recepie.
   - [ ] Modify your server-side code to only allow authorized users to modify or delete recepies that they have created. You can use the user ID included in the access token to check whether the user has the necessary permissions.

**WHEN THIS STEP IS COMPLETE:** please make a commit with the message "complete step ten"

Note: You may also want to update your UI to display the user's username or profile picture after they log in, and include logout functionality.

---

## Available Resources

- [Postman](https://www.getpostman.com/)
- [ReactJS Docs](https://facebook.github.io/react/)
- [Webpack Docs](https://webpack.github.io/docs/)
- [Babel Docs](https://babeljs.io/docs/setup/)
- [jQuery Docs](https://jquery.com/)
- [axios Docs](https://github.com/axios/axios)
- [Underscore Docs](http://underscorejs.org/)
- [BluebirdJS Docs](http://bluebirdjs.com/)
- [NodeJS Docs](https://nodejs.org/)
- [ExpressJS Docs](https://expressjs.com/)
- [Body Parser Middleware Docs](https://github.com/expressjs/body-parser)
- [MongoDB docs](https://docs.mongodb.com/)
- [Mongoose docs](http://mongoosejs.com/)
- Docs for any npm packages you might use
- [MDN](https://developer.mozilla.org/)
- [MDN](https://developer.mozilla.org/)
- [Cloudinary](https://cloudinary.com) (image uploads)
- [Firebase](https://firebase.google.com) (image uploads)
- [Google Search](https://google.com) to search for the correct page on any of the documentation above
- [MYSQL official documentation](https://dev.mysql.com/doc/)
