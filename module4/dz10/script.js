let ladder = {
    step: 0,
    up: function () {
        this.step++;
        console.log('+ 1 shodynka = ' + this.step);
        return this;
    },
    down: function () {
        this.step--;
        console.log('- 1 shodynka =  ' + this.step);
        return this;
    },
    showStep: function () { // показывает текущую ступеньку
        console.log('shodynka result ' + this.step);
    }
};


ladder.up().up().up().down().up().showStep();