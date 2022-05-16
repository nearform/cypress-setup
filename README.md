# Cypress Setup

To setup cypress locally run the command:
```
npm install
```

This is will install Cypress and all the dependencies, for more information refer the *package.json* file.

To open the Cypress test runner:
```
npm run open
```

To run the tests in the terminal:
```
npm run tests
```

To run the tests in a Docker container
```
docker-compose run cypress
```

Note: Check you have installed Docker and necessary browsers before running this command.

## Workflows

This starter template comes with a variety of workflows that can be used in different use-cases. Please see the [Workflow Readme](.github/workflows/README.md)