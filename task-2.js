class User {
  constructor(us) {
    this.name = us.userName;
    this.age = us.userAge
    this.followers = us.userFol
  }
  showinfo() {
    return `User ${this.name} is ${this.age} years old and has ${this.followers} followers`
  }
}

const flyFus = new User({
    userName: "FlightFUsin",
    userAge: 12,
    userFol: 80
})
console.log(flyFus.showinfo())