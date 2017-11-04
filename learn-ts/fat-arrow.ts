var nate = {
    name: "Nate",
    guitars: ['Gibson', 'Fender', 'Yamaha'],
    printGuitar: function(){
        this.guitars.forEach(g => {
            console.log(this.name + ' play ' + g);
        });
    }

}

nate.printGuitar();