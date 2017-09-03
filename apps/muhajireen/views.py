from django.conf import settings
from django.shortcuts import render, redirect, HttpResponse
import stripe

stripe.api_key = "sk_test_2ZE1QYq46oOi8l6zbS35ZPwb"

# Create your views here.
def index(request):
    return render(request, 'muhajireen/index.html')

def masjid_info(request):
    return render(request, 'muhajireen/masjid_info.html')

def donate(request):
    return render(request, 'muhajireen/donation.html')

def pay(request):
    if request.method == 'POST':
        # Token is created using Stripe.js or Checkout!
        # Get the payment token submitted by the form:
        token = request.POST['stripeToken']
        print token

        stripe.Charge.create(
            amount=2000,
            currency="usd",
            source=token, # obtained with Stripe.js
            description="Charge for ava.martinez@example.com"
        )

    return render (request, 'muhajireen/pay.html')
