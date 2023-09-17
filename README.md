This repo contains a next.js project for creating SEO ready websites built on React and leveraging Tailwind for CSS.

# API
The API directory within App contains the nodemailer.js file for handling contact form requests assuming that the emails ervice is coming from Outlook.

Using this module requires the installation of dotenv module to serve creentials securely from the server rather than client side.
# UI Components

## Button
Contains an opinionated module for creating a button. Takes a parameter for button color, margin, witdth of border and border color.

## Image
Contains an opinionated module cor calling the Image module from Next Js. The `sizes` prop can be used to size images using `vw` and `hw` properties.

## HorizontalLine
Call this module to create a horizontal line next to another UI component within a flex container

## ImageWithLink
Allows the render of an image that links to an external href. Accepts the props of `href`, image `src` and `alt`
