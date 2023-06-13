# Monsters Rolodex

## Requirement

**Git.**

>Follow this link to install Git if you do not have it installed already. [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)

**Node.**

>Note: Follow this link to get Node running on your machine. If you have Node JS installed already, skip this and install the packages
[Node](https://nodejs.org/en/download/)

### Step Up

**1. Clone the repository.**

```sh
git clone https://github.com/CalebAckom/Methofest.git
```

>Open the project in your IDE. Visual Studio Code is recommended

**2. Navigate to the development branch.**

```sh
git checkout development
```

**6. Install packages.**

```sh
npm install
```

**7. Start the application.**

```sh
npm start
```

## Running inside Docker

For working in this Setup, Docker is highly recommended. For more instructions on the Setup, follow [Official Docker Docs](https://docs.docker.com).

### Set Up

**1. Build your container:**

```sh
docker build -t <image-name> .
```

**2. Run the container:**

```sh
docker run -p 3000:3000 <image-name>
```

>You can change the host port to your preference

You can access the Service via localhost:

```sh
http://localhost:3000
```
9
**Happy Coding!**
