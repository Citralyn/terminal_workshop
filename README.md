# terminal_workshop

Notes:

To host Vite on Githubio, I had to edit the base
(base: "/terminal_workshop/") to the repo

I needed to specify the homepage: "homepage": "https://Citralyn.github.io/terminal_workshop/"

I needed to install the package gh-pages and add some scripts:
    "predeploy" : "npm run build", // this one is moreso optional 
    "deploy" : "gh-pages -d dist",

On Github, under Pages,
I selected Deploy from a branch for Source
-> and then selected gh-pages (root) as my branch

More updates
-
I have to use the HASH router for github pages routes,
and I can access the routes with a #
such as -> .com/main/#/about 