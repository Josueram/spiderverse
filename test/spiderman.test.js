const Spiderman = require('../app/spiderman');

describe("Unit Test for Spiderman class", () => {
  test("1) Create an spiderman object", () => {
    // Se instancia el objeto
    const andrewGarfield = new Spiderman("Spiderman Sony", 31, "Andrew Garfield", 2, "Sony");
    // Validamos que el código funciones
    expect(andrewGarfield.name).toBe("Spiderman Sony");
    expect(andrewGarfield.age).toBe(31);
    expect(andrewGarfield.actor).toBe("Andrew Garfield");
    expect(andrewGarfield.numMovies).toBe(2);
    expect(andrewGarfield.filmStudio).toBe("Sony");
  },
  test("2) Use the method getInfo()", () => {
    const tomHolland = new Spiderman("Spiderman Marvel", 25, "Tom Holland", 5, "Marvel");
    expect(tomHolland.getInfo()).toBe("Hey, I'm Tom Holland from Marvel studio");
  }));
});