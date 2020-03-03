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
        this.parkArea = parkArea
    }

    report() {
        console.log('------------PARKS REPORT------------');
    }

    calcAge() {
        var age = new Date().getFullYear() - this.buildYear;
        return age;
    }

    treeDensity() {
        var treePerSquare = this.trees / this.parkArea;
        console.log(`${this.name} has a tree density of ${treePerSquare} trees per square km`);
    }

    averageParks(...ages) {
        var totalAge = 0;
        ages.forEach((cur) => {
            totalAge += cur;
        })
        var averageAge = totalAge / 3;
        console.log(`Our 3 parks have an average age of ${averageAge}`);
    }
}

class Streets extends Town {
    constructor(name, buildYear) {
        super(name, buildYear);
    }
}

var greenPark = new Parks('Green Park', 1762, 5000, 501);
var nationPark = new Parks('Nation Park', 1840, 1230, 10);
var oakPark = new Parks('Oak Park', 1940, 5120, 5);
greenPark.report();
greenPark.treeDensity();
nationPark.treeDensity();
oakPark.treeDensity();

var ages = [greenPark.calcAge(), nationPark.calcAge(), oakPark.calcAge()]
Parks.prototype.averageParks(...ages);

var oceanAvenue = new Streets('Ocean Avenue', 1940);
var everGreen = new Streets('Evergreen Street', 1860);
var bamboStreet = new Streets('Bamboo Street', 1965);
var sunsetStreet = new Streets('Sunset Street', 1994);