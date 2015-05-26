var form1 = [
  { type: 'text', label: 'First Name' },
  { type: 'text', label: 'Last Name' },
  { type: 'email', label: 'Email' },
  { type: 'password', label: 'Password' },
  { type: 'password', label: 'Password Verify' },
  { type: 'submit', label: 'Register'}
];

function formBuilder (data) {

  var formHTML = '<form>';

  data.forEach( function (elem) {

    if (elem.type === 'submit') {

      formHTML += '<input type="' + elem.type + '" value="' + elem.label + '" />';

    } else {

      formHTML += '<label>' + elem.label + '</label>';
      formHTML += '<input type="' + elem.type + '" />';
      formHTML += '</br></br>';  

    }

  });

  formHTML += '</form>';

  console.log(formHTML);

  $('#registrationForm').html(formHTML);

}

formBuilder(form1);


