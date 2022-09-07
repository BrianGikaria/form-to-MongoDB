const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mongodb+srv://BrianGikaria:dream254@cluster0.mxjazex.mongodb.net/form-practice", {useNewUrlParser: true}, {useUnifiedTopology: true})
 
//create a data schema
const notesSchema = {
    Title: String,
    Content: String
}
//create a model
const note = mongoose.model("Note", notesSchema);


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
})

app.post('/', (req, res) => {
    let newNote = new note({
        Title: req.body.Title,
        Content: req.body.Content
    });
    newNote.save()
    res.redirect('/')
});
app.listen(3000, function() {
    console.log('server is running on port 3000');
})