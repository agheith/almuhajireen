

$( document ).ready(function() {
    var prayer_times = prayTime.getPrayerTimes(new Date(), 37.6542, -122.115, -08);
    $("#fajr_time").html(prayer_times[0]+" - "+prayer_times[1]);
    $("#dhuhr_time").html(prayer_times[2]+" - "+prayer_times[3]);
    $("#asr_time").html(prayer_times[3]+" - "+prayer_times[4]);
    $("#maghrib_time").html(prayer_times[5]);
    $("#isha_time").html(prayer_times[6]+" - "+prayer_times[0]);



    /** for tabs **/

    // var hash = window.location.hash;
    // hash && $('ul.nav a[href="' + hash + '"]').tab('show');
    //
    // $('.nav-tabs a').click(function (e) {
    //     $(this).tab('show');
    //     var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    //     window.location.hash = this.hash;
    //    // $('html,body').scrollTop(scrollmem);
    // });


	/* turn on all the tooltips -- they are used in the prayer headers */
	  // $('[data-toggle="tooltip"]').tooltip()




    /**
     * Donation stuff
     */

    // jQuery("#donation_submit").click(function () {submit_donation_form();	});
    //
    //
    // function submit_donation_form() {
    //
    //     var amount = jQuery("input[name='donation_price']").val();
    //     var designation = jQuery("#variation_select_1278_12 option:selected").text();
    //     var desig_id     = jQuery("#variation_select_1278_12 option:selected").val();
    //
    //
    //     // for recurring donations, send to Paypal
    //     if (jQuery('#is_recurring').prop('checked')) {
    //
    //         jQuery("form#sbia_paypal_recurring input[name='a3']").val(  amount   );
    //         jQuery("form#sbia_paypal_recurring input[name='item_name']").val(  "SBIA Monthly Recurring Donation (" + designation + ")"   );
    //
    //         jQuery("form#sbia_paypal_recurring").submit();
    //
    //     } else {
    //
    //         jQuery("#submit_donation_form_hidden").click();
    //
    //     }
    //
    //
    // }

    /**
     * END DONATION STUFF
     *
     */

});
