This repo contains a next.js project for creating SEO ready blogs built on React, using Contentlayer for rendering blogs and leveraging Tailwind for CSS.

# API
The API directory within App contains the nodemailer.js file for handling contact form requests assuming that the email service is coming from Outlook.

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


# Dependencies
Below is a list of third party or libraries used in conjunction with NextJs 13

## content-layer
content-layer is used to render blog posts from markdown files. The native NextJS router is used to handle image rendering.

The `contentlayer.config.js` file contains a schema for how blogs are rendered. In the default `contentlayer.config.js` file, you will see there are parameters for rendering a `title`, `date`, `image` and `alt` text. You can update this file to include any other information. 

Read the Contentlayer docs for more info: https://contentlayer.dev/docs

## rendering blogs
In the `posts` directory, you will find an example markdown file called `1stblog`. Info contained within the horizontal rules or --- --- follows the schema defined in `contentlayer.config.js`. You will need to update the markdown file with relevant content you want rendered.

# rendering images
Images should be placed in the `public` directory. As a suggestion, when rendering images for blogs, create a directory for each blog post you wish to create.

## Version
Update 5/12/23, fixed bug where image were not rendering