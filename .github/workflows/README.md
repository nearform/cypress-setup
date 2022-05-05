# Workflows

# CI

This makes use of the standard `cypress` Github Action, where the action installs the latest dependencies and runs the tests; and if those tests pass then the PR is automatically merged.

# Cypress with backend

This follows the project structure of having two repositories, one being the frontend, one being the backend.

It also includes the use of a Postgres database.

You will also notice that the workflow does not use the `cypress` provided Github Actions, that is intentional as some organisations have an allowed list relating to Github Actions and the `cypress` action is not on that list.

## Things to be aware of:

- You need to ensure that you have setup the SSH Keys on the respective repositories. An example of this is that you need to use the private key on the frontend and the public key on the backend repository, and that the key name is set to BACKEND_DEPLOY_KEY in this case. This allows the two repositories to talk to each other even if they are private.

- You can invert the workflow, so that the tests are also run on the backend.