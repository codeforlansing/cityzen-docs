<<<<<<< HEAD
# Developer

## Setup for developers
The cityzen-server can be started locally in two ways:
- run as a docker container
- run the server using npm
### Running the cityzen-server locally as a docker container
- A funtioning docker environment with docker compose is required
    - install docker engine [Docker Engine documentation](https://docs.docker.com/engine/install/)
    - install docker-compose [Docker Compose documentation](https://docs.docker.com/compose/install/)
#### On a linux workstation
- docker requires root privilegs either as the root user, using sudo, or the use of a [docker group](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
- in a terminal, navigate to the docker/development subdirectory of the local [cityzen-server git repository](https://github.com/codeforlansing/cityzen-server)
    - example if repoistory cloned in ~/projects: `cd ~/projects/cityzen-server/docker/development`
- start the server using docker-compose (using sudo if needed)
    - `docker-compose up`
    - `sudo docker-compose up` 
- Currently tested on Ubuntu 20.04. Test your installation by running
    - `docker run hello-world`
#### On a MacOSX development workstation
- docker requires elevated privileges and will request them when docker-desktop is first run.
- [Install Docker desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
- start the server using compose from the terminal
    - change to repository docker/development dircetory. If the repository was cloned in your home directory
        - `cd ~/cityzen-server/docker/development` 
    - start the docker container using docker-compose
        - `docker-compose up`
- Once the docker container has been started the first time, it can be managed from the docker-desktop dashboard
- Currently tested on MacOS Catalina 10.15.5.  Test your installation by running the hello-world container in the terminal
    - `docker run hello-world`
#### On a Windows 10 (pro/enterprise/education) [development workstation](https://docs.docker.com/docker-for-windows/install/#system-requirements)
- User account control is required to install Docker-desktop
- Docker desktop requires Windows 10 Pro/enterprise (15063+)
- [enable hyper-v virtualization in windows](https://docs.microsoft.com/en-us/virtualization/hyper-v-on-windows/quick-start/enable-hyper-v)
- [Download and install docker-desktop](https://docs.docker.com/docker-for-windows/install/#install-docker-desktop-on-windows)
#### On a Windows 10 Home (19018+) using WSL 2 (Windows Subsystem for Linux)
- Administrator access to Powershell
- [Enabel WSL 2](https://docs.microsoft.com/en-us/windows/wsl/install-win10)
-
=======
# Developers

## Setup for developers
### Running the cityzen-server locally
The cityzen-server can be started locally in two ways:
#### Run as a docker container
- A funtioning docker environment with docker compose is required
    - install docker engine [Docker Engine documentation](https://docs.docker.com/engine/install/)
    - install docker-compose [Docker Compose documentation](https://docs.docker.com/compose/install/)
##### On a linux workstation
- docker requires root privilegs either as the root user, using sudo, or the use of a [docker group](https://docs.docker.com/engine/install/linux-postinstall/#manage-docker-as-a-non-root-user)
- in a terminal, navigate to the docker/development subdirectory of the local [cityzen-server git repository](https://github.com/codeforlansing/cityzen-server)
    - example if repoistory cloned in ~/projects: `cd ~/projects/cityzen-server/docker/development`
- start the server using docker-compose (using sudo if needed)
    - `docker-compose up`
    - `sudo docker-compose up` 
- Currently tested on Ubuntu 20.04. Test your installation by running
    - `docker run hello-world`

##### On a MacOSX development workstation
- docker requires elevated privileges and will request them when docker-desktop is first run.
- [Install Docker desktop for Mac](https://docs.docker.com/docker-for-mac/install/)
- start the server using compose from the terminal
    - change to repository docker/development dircetory. If the repository was cloned in your home directory
        - `cd ~/cityzen-server/docker/development` 
    - start the docker container using docker-compose
        - `docker-compose up`
- Currently tested on MacOS Catalina 10.15.5.  Test your installation by running the hello-world container in the terminal
    - `docker run hello-world`
##### On a Windows 10 development workstation


>>>>>>> updated developer documentation with docker instructions
#### run using npm/npx



[Meet the team](https://github.com/codeforlansing/cityzen/tree/master/meta/meet-the-team)







