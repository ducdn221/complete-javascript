class Town {
  constructor(name, buildYear) {
    this.name = name;
    this.buildYear = buildYear;
  }
}

class Parks extends Town {
  constructor(name, buildYear, trees, parkArea) {
    super(name, buildYear);
    this.trees = trees;
    this.parkArea = parkArea;
  }

  calcAge() {
    var age = new Date().getFullYear() - this.buildYear;
    return age;
  }

  treeDensity() {
    var treePerSquare = this.trees / this.parkArea;
    console.log(
      `${this.name} has a tree density of ${treePerSquare} trees per square km`
    );
    return {
      name: this.name,
      treePerSquare: treePerSquare
    };
  }

  averageParks(ages) {
    var totalAge = 0;
    ages.forEach(cur => {
      totalAge += cur;
    });
    var averageAge = totalAge / ages.length;
    console.log(`Our 3 parks have an average age of ${averageAge}`);
  }

  countTree(trees) {
    trees.forEach(cur => {
      if (cur.treePerSquare > 1000) {
        console.log(`${cur.name} has more than 1000 trees`);
      }
    });
  }
}

class Streets extends Town {
  constructor(name, buildYear, length) {
    super(name, buildYear);
    this.length = length;
  }
  averageLength(...lengths) {
    var totalLength, average;
    totalLength = 0;
    lengths.forEach(cur => (totalLength += cur));
    average = totalLength / lengths.length;
    console.log(
      `Our 4 streets have a total length of ${totalLength}, with an average of ${average} km`
    );
  }
  sizeClassification(...streets) {
    for (let item of streets) {
      if (item.length < 1100) {
        console.log(
          `${item.name}, built in ${item.buildYear}, is a small street`
        );
      } else if (item.length > 1100 && item.length < 3001) {
        console.log(
          `${item.name}, built in ${item.buildYear}, is a big street`
        );
      } else if (item.length >= 3001) {
        console.log(
          `${item.name}, built in ${item.buildYear}, is a huge street`
        );
      } else {
        console.log(
          `${item.name}, built in ${item.buildYear}, is a normal street`
        );
      }
    }
  }
}

var greenPark = new Parks("Green Park", 1762, 5000, 501);
var nationPark = new Parks("Nation Park", 1840, 1230, 10);
var oakPark = new Parks("Oak Park", 1940, 5120, 5);
reportParks();

function reportParks() {
  console.log("------------PARKS REPORT------------");
  var trees = [
    greenPark.treeDensity(),
    nationPark.treeDensity(),
    oakPark.treeDensity()
  ];
  var ages = [greenPark.calcAge(), nationPark.calcAge(), oakPark.calcAge()];
  Parks.prototype.averageParks(ages);
  Parks.prototype.countTree(trees);
}

reportStreet();
function reportStreet() {
  var oceanAvenue = new Streets("Ocean Avenue", 1940, 3000);
  var everGreen = new Streets("Evergreen Street", 1860, 1000);
  var bamboStreet = new Streets("Bamboo Street", 1965, 1200);
  var sunsetStreet = new Streets("Sunset Street", 1994, 4520);
  console.log("-------------------STREET REPORT-----------------");
  Streets.prototype.averageLength(
    oceanAvenue.length,
    everGreen.length,
    bamboStreet.length,
    sunsetStreet.length
  );
  Streets.prototype.sizeClassification(
    oceanAvenue,
    everGreen,
    bamboStreet,
    sunsetStreet
  );
}
