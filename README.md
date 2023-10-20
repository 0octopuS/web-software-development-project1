# Project 1: Shared shopping list

Welcome to the Shared Shopping Lists Application! This application allows users to create, manage, and share shopping lists with others. It provides a web interface accessible via a local server running on port 7777.

## Table of Contents

- [Project 1: Shared shopping list](#project-1-shared-shopping-list)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)
    - [Main Page](#main-page)
    - [Shopping Lists](#shopping-lists)
    - [Individual Shopping Lists](#individual-shopping-lists)
    - [Adding Items](#adding-items)
    - [Collecting Items](#collecting-items)
    - [Statistics](#statistics)

## Getting Started


### Prerequisites

Before you can run the application, make sure you have the following software installed on your system:

- Node.js: You can download it [here](https://nodejs.org/).

### Installation


1. Navigate to the project directory:

    ```cd shared-shopping-lists```

2. Docker run application:

    ```docker compose up```

3. For test,  run:

    ```docker compose run --entrypoint=npx e2e-playwright playwright test```

The application should now be running and accessible at [http://localhost:7777](http://localhost:7777).

## Usage


### Main Page

- Access the main page at [http://localhost:7777](http://localhost:7777).
- The main page displays the title "Shared shopping lists" and application statistics.
- Click the "Lists" link to navigate to the shopping lists page.

### Shopping Lists

- Access the shopping lists page at [http://localhost:7777/lists](http://localhost:7777/lists).
- Here, you can see a list of active shopping lists.
- You can add a new shopping list using the form.
- Each shopping list can be deactivated by clicking the "Deactivate list!" button.

### Individual Shopping Lists

- Access an individual shopping list page at [http://localhost:7777/lists/{id}](http://localhost:7777/lists/%7Bid%7D), where `{id}` corresponds to the database id of the specific shopping list.
- This page shows the name of the shopping list, existing items, and allows you to add new items.
- Each item can be marked as collected using the "Mark collected!" button.

### Adding Items

- While on an individual shopping list page, use the form to add new items.
- Items are added using the POST/Redirect/GET pattern, redirecting you to the updated shopping list page.

### Collecting Items

- On the individual shopping list page, you can mark items as collected by clicking the "Mark collected!" button.
- Collected items are visually indicated as strikethrough text.

### Statistics

- The main page displays application statistics.
- It shows the number of created shopping lists and items, including both active and deactivated lists and collected and uncollected items.
- If there are no shopping lists, it displays "No shopping lists yet."
