# How to run with docker

1. docker build -t estibew_backend .

2. docker-compose up

3. To gain seed:
   - Open other terminal
   - docker exec -d estibew_backend npx knex seed:run
