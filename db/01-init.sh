#!/bin/bash
set -e
export PGPASSWORD=1234;
psql -v ON_ERROR_STOP=1 --username "testuser" --dbname "testdb" <<-EOSQL
  CREATE USER testuser WITH PASSWORD 1234;
  CREATE DATABASE testdb;
  GRANT ALL PRIVILEGES ON DATABASE testdb TO testuser;
EOSQL