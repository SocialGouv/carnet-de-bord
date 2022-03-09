#!/usr/bin/env bash

set -eo pipefail

if ! [ -x "$(command -v docker-compose)" ]; then
  echo >&2 "Error: `docker-compose` is not installed."
  exit 1
fi

SCRIPT_DIR=$( cd -- "$( dirname -- "${BASH_SOURCE[0]}" )" &> /dev/null && pwd )
ROOT_DIR=$( dirname $SCRIPT_DIR )

# Load the env variables from .env file
if [ -f ".env.test" ]
then
  # See https://github.com/ko1nksm/shdotenv
  eval "$($SCRIPT_DIR/shdotenv --env .env.test)"
else

  echo >&2 "Missing .env.test file."
  exit 1
fi

CONTAINERS=( db_test hasura_test )

# Clean existing containers
for CONTAINER_NAME in "${CONTAINERS[@]}"
do
  if [ ! "$(docker ps -q -f name=$CONTAINER_NAME)" ]; then
      CONTAINER=$(docker ps -aq -f status=exited -f name=$CONTAINER_NAME)
      if [ "$CONTAINER" ]; then
          echo "Cleaning already existing container $CONTAINER_NAME - $CONTAINER";
          docker rm $CONTAINER
      fi
  fi
done

if [ ! "$(docker ps -q -f name=db_test)" ] && [ ! "$(docker ps -q -f name=hasura_test)" ]; then

    # Clean existing volume
    if [ "$(docker volume ls | grep cdb-pgdata-test)" ]; then
        echo "-> Clean existing volume carnet-de-bord_cdb-pgdata-test"
        docker volume rm carnet-de-bord_cdb-pgdata-test
    fi
    echo "-> Starting docker"
    docker-compose -f docker-compose-test.yaml up -d
else
    echo "Docker test env already started. Use: "
    echo ""
    echo "    docker-compose -f docker-compose-test.yaml stop"
    echo ""
    echo "in $ROOT_DIR to stop it."
    echo ""
    exit 1
fi

# Wait for postgres
# Keep pinging Postgres until it's ready to accept commands
until psql $DATABASE_URL -c '\q'; do
  >&2 echo "Postgres is still unavailable - sleeping"
  sleep 1
done

>&2 echo "Postgres is up and running on port 5433!"

# Wait for Hasura
# Keep pinging Hasura until it's ready to accept commands
until curl http://localhost:5001; do
  >&2 echo "Hasura is still unavailable - sleeping"
  sleep 1
done


>&2 echo ""
>&2 echo "Hasura is up and running on port 5001!"
