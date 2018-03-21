// $(function(){
//
//     Stripe.setPublishableKey('{{ publishKey }}');
//
//     function stripeResponseHandler(status, response) {
//
//       // Grab the form:
//       var $form = $('#payment-form');
//
//       if (response.error) { // Problem!
//
//             // Show the errors on the form
//             $form.find('.payment-errors').text(response.error.message);
//             $form.find('button').prop('disabled', false); // Re-enable submission
//
//           } else { // Token was created!
//
//             // Get the token ID:
//             var token = response.id;
//
//             // Insert the token into the form so it gets submitted to the server:
//             $form.append($('<input type="hidden" name="stripeToken" />').val(token));
//
//             // Submit the form:
//             $form.get(0).submit();
//
//           }
//         }
//
//         $('#payment-form').submit(function(event) {
//           var $form = $(this);
//
//           // Disable the submit button to prevent repeated clicks
//           $form.find('button').prop('disabled', true);
//
//           Stripe.card.createToken($form, stripeResponseHandler);
//
//           // Prevent the form from submitting with the default action
//           return false;
//         });
//
//
//
//
// });

var stripe = Stripe('pk_test_Klm4pdAv1nKmUPfI6IHIAZEY');
var elements = stripe.elements();


// card.addEventListener('change', function(event) {
//   var displayError = document.getElementById('card-errors');
//   if (event.error) {
//     displayError.textContent = event.error.message;
//   } else {
//     displayError.textContent = '';
//   }
// });


// Create a token or display an error when the form is submitted.
var form = document.getElementById('payment-form');
form.addEventListener('submit', function(event) {
  event.preventDefault();

  stripe.createToken(card).then(function(result) {
    if (result.error) {
      // Inform the user if there was an error
      var errorElement = document.getElementById('card-errors');
      errorElement.textContent = result.error.message;
    } else {
      // Send the token to your server
      stripeTokenHandler(result.token);
    }
  });
});

function stripeTokenHandler(token) {
  // Insert the token ID into the form so it gets submitted to the server
  var form = document.getElementById('payment-form');
  var hiddenInput = document.createElement('input');
  hiddenInput.setAttribute('type', 'hidden');
  hiddenInput.setAttribute('name', 'stripeToken');
  hiddenInput.setAttribute('value', token.id);
  form.appendChild(hiddenInput);
  // Submit the form
  form.submit();
}
