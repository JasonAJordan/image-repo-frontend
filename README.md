
This is the backend for my Shopify's Fall 2021 Backend Developer Internship code challege. 

This app is modeled with Ruby on Rails backend, Reactjs frontend, PostgreSQL as the database, and Cloudinary as the image API. Users can upload images either privatly or publicly and can delete them as well. The app features user authentication with the help of ruby gems bycrpt and jwt. 

[Link to the Backend](https://github.com/JasonAJordan/image-repo-backend)

## Video-Demo 

[![watch the video](https://i.imgur.com/wUfMHNm.png)](https://www.youtube.com/watch?v=6LLflfBslvk)


##  Setup. 

1. You must created your own cloudinary.rb file with your cloudinary acount api information. This file is listed in gitignore and will not transfer over if you clone done the repo. 

```rb
#config/initializers/cloudinary.rb
Cloudinary.config do |config|    
    config.cloud_name = ""   
    config.api_key = ""   
    config.api_secret = ""   
    config.secure = true    
    config.cdn_subdomain = true  
end
```

2. Bundle install 
3. rails db:create db:migrate db:seed
4. rails start
5. Run "npm start" in your console where the frontend is located. 

## Unit Tests

Tests to check HTTP requests are located in the frontend [here](https://github.com/JasonAJordan/image-repo-frontend/blob/main/src/pages/UnitTests.js) 
These test can be also viewed in the app itself.  

## JWT Authentication in a nutshell. 

This app features the use of the ruby gem jwt. 
[Link to their site](https://jwt.io/)

Javascript Web Token will create a bearer token for each acount. Upon login the app validates the user's credentials. Then the app gives the token to the client. This token is needed with every request made by the the client as it proves to the server that they are who they claim to be. 

For this app, I'm using jwt to authenticate user's posting image files. As well as saving a copy of that token onto the client's local storage cookie to keep them login after a page refersh. See image controller's path create and user controller's path profile for code implementation. 

Example of jwt auth:
![jwt auth flow](https://miro.medium.com/max/960/1*l-FS80RhxUgjZOKGgOXnTQ.jpeg)
