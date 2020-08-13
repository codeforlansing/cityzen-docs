<nav class="navbar navbar-dark fixed-top bg-dark flex-md-nowrap p-0 shadow">[CityZen](/readme.md)</nav>

<div class="container-fluid">

<div class="row">

<nav class="col-md-2 d-none d-md-block bg-light sidebar">

<div class="sidebar-sticky">

*   [<span data-feather="home"></span>Introduction <span class="sr-only">(current)</span>](/readme.md)

###### <span>Setup</span>[<span data-feather="plus-circle"></span>](#)

*   [<span data-feather="setup-trello"></span>Setting up Trello](/setting-up-trello.md)
*   [<span data-feather="setup-citiyzen"></span>Setting up CityZen](/setting-up-cityzen.md

###### <span>Developers</span>[<span data-feather="plus-circle"></span>](#)

*   [<span data-feather="npm install"></span>NPM Install](/npm-install.md)
*   [<span data-feather="GitHub install"></span>GitHub Install](/gitHub-install.md)
*   [<span data-feather="Docker install"></span>Docker Install](/docker-install.md)
*   [<span data-feather="Link Trello"></span>Link Trello](/link-trello.md)

###### <span>Meta</span>[<span data-feather="plus-circle"></span>](#)

*   [<span data-feather="meet-the-team"></span>Meet the team](/meet-the-team.md)

</div>

</nav>

<main role="main" class="col-md-9 ml-sm-auto col-lg-10 px-4">

<div class="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">

# GitHub Install

</div>

<div class="col-md-9 text-justify align-top">The CityZen client is built using Vue.js. The server backend is Node.js with a SQL Lite database.

**Tip** CityZen requires a fairly recent version of both npm and Node.js. To install both go here: [Get NPM](https://www.npmjs.com/get-npm)  
For reference when these docs were written we were using version 12.18.1 of Node.js and version 6.14.5 of npm

#### Install using GitHub

The CityZen-Server project page on GitHub: [CityZen-Server](https://github.com/codeforlansing/cityzen-server)

There are two different methods to install CityZen from GithHub

The first method is to clone the project. Note you need to have the GIT CLI installed to use this method.

To install CityZen-Server go to the directory you want to use and type:

**git clone https://github.com/codeforlansing/cityzen-server.git**

Then go to the directory you chose and type:

**npm install**

To launch the server type:

**npm start**

<style>hr { margin-top: 1rem; margin-bottom: 1rem; border: 20; border-top: 10px solid rgba(0, 0, 0, 0.1); }</style>

* * *

The CityZen-Client page on Github: <a href="">CityZen-Client</a>

Here are directions to install the CityZen-Client from GitHub.

**git clone https://github.com/codeforlansing/cityzen-client-vue.git**

Then go to the directory you chose and type:

**npm install**

To start the client once it is successfully installed type and you're in the client directory:

**npm start serve**

The second method for installing is to download the zip files for both [server](https://github.com/codeforlansing/cityzen-server) and [client](https://github.com/codeforlansing/cityzen-client-vue). To do that on the respective GitHub repository sites, hit the green clone or download button and choose download and then download zip

**TIP** If you need a local development web server CityZen recommends [http-server](https://www.npmjs.com/package/http-server)

<p align="right">
 <a href="docker-install.md">Docker Install</a>
</p>

</div>

</main>

</div>

</div>