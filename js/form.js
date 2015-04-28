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
    })
    .on('success.form.bv', function(e) {
            // Prevent form submission
            e.preventDefault();
            // Get the form instance
            var $form = $(e.target);
            // Get the BootstrapValidator instance
            var bv = $form.data('bootstrapValidator');
            var html = '<dl>';
            var email = '';
            var subject = 'Courchevel International Music Festival Registration Form';
            $.each($('#defaultForm').serializeArray(), function (k, v) { 
              if(v.name === 'name') { subject += ' for ' + v.value; }
              if(v.name === 'email') { email = v.value; }
              if(v.value) {
                html += '<dt>' + v.name + '</dt><dd>' + v.value + '</dd>' ;
              }
            });
            html += '</dl>';
            var data = { "subject": subject, "email": email, "html": html }
            $('#review').html(html);
            $('#reviewButton').click();
            $('#submit').click(function () {
              $.post('http://api.princetonfestival.info/form.php', data, function(result) {
                console.log(result);
              }, 'json');
              document.location.href = '/';
            });
        });
});
