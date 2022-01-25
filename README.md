# The World Weather

This application show weather information of cities around the world.

## How to use?

The main functionalities of the application are:

1. Showing a map. The application must show a map and a button "Search".​

2. Adding a pin. The user should be able to place a pin on the map and click on the button "Search".​

3. The application needs to call Open Weather API considering the LAT/LON where the user placed the pin and search for the closest 15 cities.

4. Listing cities. The application needs to show the list of the city names and the user should be able to visualize more information about the city temperature.​

5. Selecting a city. When the user picks a city, the application opens a new window showing more details:​
   - Name of the selected city​
   - Minimum temperature (Celsius)​
   - Maximum temperature (Celsius)

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purpose.

There are two ways to get started:

<details>
<summary>Get started with local Node;</summary>

### Prerequisites

- [Node](https://nodejs.org/en/) - Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. You need the version 14.

### Installation

1. Clone this repository;

2. Run the following commands:

```Makefile
cd world-weather
make setup
make run
```

3. Next, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Running tests

```Makefile
make test
```

</details>

<details>
<summary>Get started with Docker;</summary>

### Prerequisites

- [Docker](https://www.docker.com/) - is an open platform for developing, shipping, and running applications. Docker enables you to separate your applications from your infrastructure so you can deliver software quickly.

### Installation

1. Clone this repository;

2. Run the following commands:

```Makefile
cd photo-album
make docker-build
make docker-run
```

3. Next, open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. For kill container's Docker, run the following command:

```Makefile
make docker-kill
```

</details>

## Versions

We use [Semantic version](http://semver.org) for versioning. For versions available, see [Changelog](CHANGELOG.md).

## Contribute Us

Contributions are what make the open source community such an amazing place to learn, inspire, and create.
Any contributions you make are greatly appreciated. See [contribute policy](CONTRIBUTE.md).

## License

This project is licensed under the [MIT License](LICENSE).
