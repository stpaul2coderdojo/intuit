##Task Scheduler

This is a task scheduling application built using ReactJS and HTML, and using a JSON database hosted on Azure. The application allows customers to request tasks consisting of M tasks, which are then done sequentially by experts. Each task has a deadline and a length, and the application provides a real-time display of the tasks as they are completed. The experts can view a dashboard of the task queue and pick and complete tasks as necessary.
Azure Details

The application uses Azure as the cloud provider for hosting the JSON database. To set up the database, you need to do the following:

    Log in to the Azure portal and create a new resource group for the project.
    Create a new Cosmos DB account in the resource group.
    Create a new database and collection within the Cosmos DB account to store the task data.
    Obtain the connection string for the Cosmos DB account, which will be used by the application to connect to the database.

You will also need to install the Azure SDK for JavaScript in order to use the Azure APIs to interact with the database from your Node.js server.
Installation

To install and run the application, follow these steps:

    Clone the repository to your local machine.

    Navigate to the root directory of the project and run npm install to install the dependencies.

    Create a new file called .env in the root directory of the project and add the following environment variables:

    makefile

    COSMOSDB_CONNSTR=<your Cosmos DB connection string>
    COSMOSDB_DBNAME=<name of the Cosmos DB database>
    COSMOSDB_COLLNAME=<name of the Cosmos DB collection>

    Start the server by running npm start in the root directory of the project. This will start the server at http://localhost:3000.

Usage

To use the application, follow these steps:

    Open a web browser and navigate to http://localhost:3000.
    On the login page, enter your customer ID or expert ID and click the "Login" button.
    If you are a customer, you will be directed to the customer dashboard, where you can request tasks by clicking the appropriate button. You can view the task queue and the expert assigned to each task in real time.
    If you are an expert, you will be directed to the expert dashboard, where you can view the task queue and select tasks to complete. You can mark tasks as completed, which will remove them from the queue and add them to the completed tasks list.

Contributing

Contributions to the project are welcome! If you find a bug or have an idea for a new feature, please open an issue on the GitHub repository or submit a pull request.