---
---
$(document).ready(function() {
    $('#defaultForm').bootstrapValidator({
        message: 'This value is not valid',
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        fields: {
            {% include name.js %},
            {% include age.js %},
            {% include phone.js %},
            {% include email.js %},
            {% include guardian.js %},
            {% include instrument.js %},
            {% include address.js %}
        }
    });
});
