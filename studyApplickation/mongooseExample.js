const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});
var schema= mongoose.Schema({name:String})
schema.methods.nam=function () {
    console.log(this.get('name'))
}
const Cat = mongoose.model('Cat', schema);

const kitty = new Cat({ name: 'Zildjian','qq':'qqqq' });
kitty.save(function (err,kitty,affected) {
    kitty.nam()
})
//        .then(() => console.log('meow'));
 console.log(kitty);