var nate = {
    name: "Nate",
    guitars: ['Gibson', 'Fender', 'Yamaha'],
    printGuitar: function () {
        var _this = this;
        this.guitars.forEach(function (g) {
            console.log(_this.name + ' play ' + g);
        });
    }
};
nate.printGuitar();
