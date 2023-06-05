# portfolio-site

This is my portfolio site for 2023.  It was built using Vite and a React frontend written in Javascript.  Care was taken to ensure responsive design across desktop and mobile displays. The blog posts are accessed via a Ruby on Rails API which is hosted on Heroku.  This allows the blogs to be updated in real time whenever I make a new post to that Rails app.  Additionally the projects are loaded via GraphQL queries made to my Github page, and will automatically pull info from my "pinned" repositories.  As long as those repos conform to a few formatting standards (social media image enabled, a README.md with a basic paragraph) then these projects will automatically be formatted and displayed in the appropriate sections of the site.

Hosted live here: [https://portfolio-site-pi-three.vercel.app/](https://portfolio-site-pi-three.vercel.app/)
