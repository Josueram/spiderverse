class Spiderman {
  constructor(name, age, actor, numMovies, filmStudio) {
    this.name = name;
    this.age = age;
    this.actor = actor;
    this.numMovies = numMovies;
    this.filmStudio = filmStudio;
  }

  get getName() {
    return this.name;
  }
  set setName(name) {
    this.name = name;
  }

  get getAge() {
    return this.age;
  }
  set setAge(age) {
    this.age = age;
  }

  get getActor() {
    return this.actor;
  }
  set setActor(actor) {
    this.actor = actor;
  }

  get getNumMovies() {
    return this.numMovies;
  }
  set setNumMovies(numMovies) {
    this.numMovies = numMovies;
  }

  get getfilmStudio() {
    return this.filmStudio;
  }
  set setfilmStudio(filmStudio) {
    this.filmStudio = filmStudio;
  }

  getInfo() {
    return `Hey, I'm ${this.actor} from ${this.filmStudio} studio`;
  }
}

module.exports = Spiderman;