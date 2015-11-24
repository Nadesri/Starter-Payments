// A starter project for Amazon Payments
define(["jquery"], function($) {

  function start() {
    amazonPayBtn();
  }

  function amazonPayBtn() {
    /* globals OffAmazonPayments:true */
    var authRequest;
    OffAmazonPayments.Button("AmazonPayButton", "YOUR_SELLER_ID_HERE", {
      type:  "PwA",
      color: "Gold",
      size:  "medium",
      useAmazonAddressBook: true,
      authorization: function() {
        var loginOptions = {scope: 'profile payments:widget'};
        authRequest = amazon.Login.authorize(loginOptions, "YOUR_REDIRECT_URL_HERE");
      },
      onError: function(error) {
        // Write your custom error handling
      }
    });
  }

  // return an object to define the module.
  return {
    run: start
  }
});
