# Todo List

A simple to-do list application with simple to-do creations, edits, and deletion. For local purposes only.

## Table of Contents

- [Todo List](#todo-list)
  - [Table of Contents](#table-of-contents)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Usage](#usage)

---

## Getting Started

Set up a local copy of this project by following these instructions.

### Prerequisites

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)

### Installation

1. Clone the repository:
```bash
$ git clone https://github.com/DDublue/todolist.git
```

2. Navigate to the project directory:
```bash
$ cd todolist
```

3. Install dependencies:
```bash
$ cd client
$ npm install
$ cd ../server
$ npm install
$ cd ..
```

## Usage

1. Create an `.env` file from the `.env.example` and add your PostgreSQL account.
2. Create the PostgreSQL table:
```bash
$ psql -U node_user -d "$database" --single-transaction -f server/db/database.sql -f server/db/schema.sql
```

3. Start the development client:
```bash
$ cd client
$ npm run dev
```

1. In another ternimal, start the development server:
```bash
$ cd server
$ npm run dev
```
