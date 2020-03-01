var budgetController = (function () {

  var Expense = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
    this.percentage = -1;
  }

  Expense.prototype.calcPercentage = function (totalInc) {
    if (totalInc > 0) {
      this.percentage = Math.round((this.value / totalInc) * 100);
    } else {
      this.percentage = -1
    }
  }

  Expense.prototype.getPercentage = function () {
    return this.percentage;
  }

  var Income = function (id, description, value) {
    this.id = id;
    this.description = description;
    this.value = value;
  }

  var calculateTotal = function (type) {
    var sum = 0;

    data.allItems[type].forEach(function (cur) {
      sum += cur.value;
    })

    data.totals[type] = sum;
  }

  var data = {
    allItems: {
      exp: [],
      inc: []
    },
    totals: {
      exp: 0,
      inc: 0
    },
    budget: 0,
    percentage: -1
  }

  return {
    addItem: function (type, des, val) {
      var newItem, ID, percentage;

      // Create New ID
      if (data.allItems[type].length > 0) {
        ID = data.allItems[type][data.allItems[type].length - 1].id + 1;
      } else {
        ID = 0;
      }

      //Create new item based on exp or inc
      if (type === 'exp') {
        newItem = new Expense(ID, des, val);
      } else {
        newItem = new Income(ID, des, val);
      }

      data.allItems[type].push(newItem);

      return newItem;
    },

    deleteItem: function (type, id) {
      var ids, index;
      ids = data.allItems[type].map(function (current) {
        return current.id;
      })
      index = ids.indexOf(id);
      if (index !== -1) {
        data.allItems[type].splice(index, 1)
      }
    },

    calculateBudget: function () {
      // calculate total income and expenses
      calculateTotal('inc');
      calculateTotal('exp');
      // Calculate the budget: income, expenses
      data.budget = data.totals.inc - data.totals.exp;

      // Calculate the percentage of income that we spent
      if (data.totals.inc > 0) {
        data.percentage = Math.round((data.totals.exp / data.totals.inc) * 100);
      } else {
        data.percentage = -1;
      }
    },

    calculatePercentages: function () {
      data.allItems.exp.forEach(function (cur) {
        cur.calcPercentage(data.totals.inc);
      })
    },

    getPercentages: function () {
      var allPerc = data.allItems.exp.map(function (cur) {
        return cur.getPercentage();
      })

      return allPerc;
    },

    getBudget: function () {
      return {
        budget: data.budget,
        totalInc: data.totals.inc,
        totalExp: data.totals.exp,
        percentage: data.percentage
      }
    },

    testing: function () {
      console.log(data);
    }
  }
})();

var UIController = (function () {
  var DOMstrings = {
    inputType: ".add__type",
    inputDescription: ".add__description",
    inputValue: ".add__value",
    inputBtn: ".add__btn",
    incomeContainer: ".income__list",
    expensesContainer: ".expenses__list",
    budgetLabel: ".budget__value",
    incomeLabel: ".budget__income--value",
    expensesLabel: ".budget__expenses--value",
    percentageLabel: ".budget__expenses--percentage",
    container: ".container",
    expensesPercLabel: ".item__percentage",
    dateLabel: ".budget__title--month"
  };

  var formatNumber = function (num, type) {
    var numSplit, int, dec;
    /*
    + or - before number
    exactly 2 decimal points
    comma separating the thousands

    2310.4567 -> + 2,310.46
    2000 -> + 2,000.00
    */
    num = Math.abs(num);
    num = num.toFixed(2);

    numSplit = num.split('.');
    int = numSplit[0];
    if (int.length > 3) {
      int = int.substr(0, int.length - 3) + ',' + int.substr(int.length - 3, 3);
    }

    dec = numSplit[1];

    return (type === 'exp' ? '-' : '+') + ' ' + int + '.' + dec;
  };

  var nodeListForEach = function (list, callback) {
    for (var i = 0; i < list.length; i++) {
      callback(list[i], i);
    }
  }

  return {
    getinput: function () {
      return {
        type: document.querySelector(DOMstrings.inputType).value, //Will be either inc or exp
        description: document.querySelector(DOMstrings.inputDescription).value,
        value: parseFloat(document.querySelector(DOMstrings.inputValue).value)
      };
    },

    addListItem: function (object, type) {
      var html, newHtml, element;

      //Create HTMl string with placeholder text
      if (type === 'inc') {
        element = DOMstrings.incomeContainer;
        html = '<div class="item clearfix" id="inc-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      } else if (type === 'exp') {
        element = DOMstrings.expensesContainer;
        html = '<div class="item clearfix" id="exp-%id%"><div class="item__description">%description%</div><div class="right clearfix"><div class="item__value">%value%</div><div class="item__percentage">21%</div><div class="item__delete"><button class="item__delete--btn"><i class="ion-ios-close-outline"></i></button></div></div></div>';
      }

      //Replace the placeholder text with some actual data
      newHtml = html.replace('%id%', object.id);
      newHtml = newHtml.replace('%description%', object.description);
      newHtml = newHtml.replace('%value%', formatNumber(object.value, type));
      //Insert the html into DOM
      document.querySelector(element).insertAdjacentHTML('beforeend', newHtml);
    },
    deleteListItem: function (id) {
      var el = document.getElementById(id);
      el.parentNode.removeChild(el);
    },
    displayBudget: function (object) {
      var type;
      object.budget > 0 ? type = 'inc' : type = 'exp';
      document.querySelector(DOMstrings.budgetLabel).textContent = formatNumber(object.budget, type);
      document.querySelector(DOMstrings.incomeLabel).textContent = formatNumber(object.totalInc, 'inc');
      document.querySelector(DOMstrings.expensesLabel).textContent = formatNumber(object.totalExp, 'exp');
      document.querySelector(DOMstrings.percentageLabel).textContent = object.percentage;

      if (object.percentage > 0) {
        document.querySelector(DOMstrings.percentageLabel).textContent = object.percentage + '%';
      } else {
        document.querySelector(DOMstrings.percentageLabel).textContent = '---';
      }
    },

    clearFields: function () {
      var fields, fieldsArr;

      fields = document.querySelectorAll(DOMstrings.inputDescription + ',' + DOMstrings.inputValue);
      fieldsArr = Array.prototype.slice.call(fields); //parse list -> array

      fieldsArr.forEach(function (current, index, array) {
        current.value = "";
      })

      fieldsArr[0].focus();
    },

    displayPercentages: function (percentages) {
      var fields = document.querySelectorAll(DOMstrings.expensesPercLabel);

      nodeListForEach(fields, function (current, index) {
        if (percentages[index] > 0) {
          current.textContent = percentages[index] + '%';
        } else {
          current.textContent = "---"
        }
      });
    },

    displayMonth: function () {
      var now, months, month, year;

      now = new Date();
      months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
      month = now.getMonth();

      year = now.getFullYear();
      document.querySelector(DOMstrings.dateLabel).textContent = months[month] + ' ' + year;
    },
    changedTyped: function () {
      var fields;
      fields = document.querySelectorAll(DOMstrings.inputType + ',' + DOMstrings.inputDescription + ',' + DOMstrings.inputValue);

      nodeListForEach(fields, function(cur) {
        cur.classList.toggle('red-focus');
      })
      document.querySelector(DOMstrings.inputBtn).classList.toggle('red');
    },
    getDOMstrings: function () {
      return DOMstrings;
    }
  };
})();

var controller = (function (budgetCtrl, UICtrl) {

  var setupEventListeners = function () {
    var DOM = UICtrl.getDOMstrings();

    document.querySelector(DOM.inputBtn).addEventListener("click", ctrlAddItem);

    document.addEventListener("keypress", function (event) {
      if (event.keyCode === 13 || event.which === 13) {
        ctrlAddItem();
      }
    });

    document.querySelector(DOM.container).addEventListener("click", ctrlDeleteItem);

    document.querySelector(DOM.inputType).addEventListener("change", UICtrl.changedTyped);
  };

  var updateBudget = function (type) {

    // 1. Calculate the budget
    budgetCtrl.calculateBudget();
    // 2. Return the budget
    var budget = budgetCtrl.getBudget();

    // 3. Display the budget on the UI
    UICtrl.displayBudget(budget);
  }

  var updatePercentages = function () {
    //1. Update percentage
    budgetCtrl.calculatePercentages();

    // 2.Return budget
    var percentages = budgetCtrl.getPercentages();

    // 3. Update the UI with new percentage
    UIController.displayPercentages(percentages);

  }

  var ctrlAddItem = function () {
    var input, newItem;
    // 1. Get the filed input data

    input = UICtrl.getinput();

    if (input.description !== '' && !isNaN(input.value) && input.value > 0) {
      // 2. Add the item to the budget controller

      newItem = budgetCtrl.addItem(input.type, input.description, input.value);

      // 3. Add the item to the UI
      UICtrl.addListItem(newItem, input.type);

      // 4. Clear Fields Input
      UICtrl.clearFields();

      // 5. Calculate and update Budget
      updateBudget();

      // 6.Update Percentage
      updatePercentages();
    }
  };

  var ctrlDeleteItem = function (event) {
    var itemID, splitID, type, ID;

    itemID = event.target.parentNode.parentNode.parentNode.parentNode.id;

    if (itemID) {
      splitID = itemID.split('-');
      type = splitID[0];
      ID = splitID[1];

      // 1. delete item from the data structure
      budgetCtrl.deleteItem(type, parseInt(ID));
      // 2. delete item from the UI
      UICtrl.deleteListItem(itemID);
      // 3. Update and show the new budget
      updateBudget();

      // 4.Update Percentage
      updatePercentages();
    }
  }

  return {
    init: function () {
      setupEventListeners();
      UICtrl.displayMonth();
      UICtrl.displayBudget({
        budget: 0,
        totalInc: 0,
        totalExp: 0,
        percentage: -1
      })
    }
  }
})(budgetController, UIController);

controller.init();