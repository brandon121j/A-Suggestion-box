var express = require('express');
var router = express.Router();
var suggestionController = require('./controller/suggestionController');

router.get('/', function(req, res, next) {
    suggestionController.getAllSuggestions({}, function(err, foundSuggestion) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err });
        } else {
            res.json({ message: "Success", foundSuggestion });
        }
    });
});

router.get('/get-single-suggestion/:id', function(req, res) {
    suggestionController.getSingleSuggestion(req.params.id, function(err, foundSuggestion) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err })
        } else {
            res.json({ message: "Suggestion found", foundSuggestion })
        }
    });
});

router.post('/create-suggestion', function(req, res) {
    suggestionController.createSuggestion(req.body, function(err, createdSuggestion) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err });
        } else {
            res.json({ message: "Success", createdSuggestion });
        }
    });
});

router.put('/update-suggestion-by-id/:id', function(req, res) {
    suggestionController.updatedSuggestion(req.params.id, req.body, function(err, updatedSuggestion) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong!", error: err })
        } else {
            res.json({ message: "Successfully updated", updatedSuggestion })
        }
    });
});

router.delete('/delete-suggestion/:id', function(req, res) {
    suggestionController.deleteSuggestion(req.params.id, function(err, deletedSuggestion) {
        if (err) {
            res
                .status(500)
                .json({ message: "Something went wrong", error: err })
        } else {
            res.json({ message: "Suggestion deleted", deletedSuggestion})
        }
    })
})

module.exports = router;