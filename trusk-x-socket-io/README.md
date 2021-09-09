# Socket.IO Interface for Trusk-X

Run this server by `yarn start` or `yarn dev` for watching mode use [nodemon]()

## Events

| code | trigger | result |
|------|---------|--------|
| post_create-success | Create a new Post via API | send post_refresh-many event |