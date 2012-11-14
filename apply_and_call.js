// Apply & Call
// Use one objects methods with another objects properties

var Brev = {
  name: 'Brev'
};

var Patty = {
  showName: function() {
    console.log(this.name);
  }
};

//Brev.showName();                              // dies
Patty.showName();                               // undefined
Patty.showName.apply(Brev, [ 'arg1', 'arg2' ]); // Brev
Patty.showName.call(Brev, 'arg1', 'arg2');      // Brev

