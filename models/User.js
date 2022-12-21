class User {
  static usersDB = [
    {
      id: 1,
      login: "admin",
      password: "admin",
    },
    {
      id: 2,
      login: "betterAdmin",
      password: "betterAdmin",
    },
  ];

  static async create(userData) {
    const newUser = {
      ...userData,
      id: Date.now(),
    };

    this.usersDB.push(newUser);

    return newUser;
  }

  static async findAll() {
    return this.usersDB;
  }

  static async findOne(userId) {
    const foundUser = this.usersDB.find((u) => u.id === Number(userId));
    return foundUser;
  }

  static async delete(userId) {
    const foundUser = await User.findOne(userId);

    if (foundUser) {
      this.usersDB = this.usersDB.filter((u) => u.id !== Number(userId));
      return foundUser;
    }

    throw new Error("User not found");
  }

  static async update(userId, newData) {
    const foundUser = await User.findOne(userId);

    if (foundUser) {
      let updatedUser;
      this.usersDB = this.usersDB.map((u) => {
        const isSameUser = u.id === Number(userId);

        if (!isSameUser) {
          return u;
        } else {
          updatedUser = {
            ...u,
            ...newData,
          };
          return updatedUser;
        }
      });

      return updatedUser;
    }

    throw new Error("User not found");
  }
}

module.exports = User;
