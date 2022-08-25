db.createUser({
  user: "chandur",
  pwd: "12345",
  roles: [
    {
      role: "readWrite",
      db: "surge",
    },
  ],
});
