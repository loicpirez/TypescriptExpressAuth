#!/usr/bin/env bash
set -eu

mongosh -- "$MONGO_DB" <<EOF
    var rootUser = '$MONGO_INITDB_ROOT_USERNAME';
    var rootPassword = '$MONGO_INITDB_ROOT_PASSWORD';
    var admin = db.getSiblingDB('admin');
    admin.auth(rootUser, rootPassword);

    var user = '$MONGO_USER';
    var passwd = '${MONGO_PASSWORD-}' || user;
    db.createUser({user: user, pwd: passwd, roles: ["readWrite"]});
EOF
