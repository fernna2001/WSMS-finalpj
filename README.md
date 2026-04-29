# WSMS-final

## Folder Responsibilities

### `domain`
This folder contains the core business entities and interfaces. It defines the structure of the data and the contracts for the repository and usecase layers.

### `repository`
This folder implements the data access layer. It interacts with the database and provides the data to the usecase layer.

### `usecase`
This folder contains the business logic of the application. It processes the data received from the repository and prepares it for the delivery layer.

### `delivery/http`
This folder handles the HTTP layer of the application. It defines the API endpoints and interacts with the usecase layer to fetch or manipulate data.

### `cmd/api`
This folder contains the `main.go` file, which is responsible for wiring all dependencies together and starting the application.