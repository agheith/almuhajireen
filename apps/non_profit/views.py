from django.conf import settings
from django.shortcuts import render, redirect, HttpResponse, HttpResponseRedirect
import stripe

stripe.api_key = "sk_test_2ZE1QYq46oOi8l6zbS35ZPwb"

# Create your views here.
def index(request):
    return render(request, 'muhajireen/index.html')

def masjid_info(request):
    return render(request, 'muhajireen/masjid_info.html')

def pay(request):
    if request.method == 'POST':
        # Token is created using Stripe.js or Checkout!
        # Get the payment token submitted by the form:
        token = request.POST['stripeToken']
        amount = request.POST['amount']
        print amount
        print token
        stripe.Charge.create(
            amount=str(int(amount)*100),
            currency="usd",
            source=token, # obtained with Stripe.js
            description="Charge for ava.martinez@example.com"
        )
    # redirect to a new URL:
    return redirect('/')
    
def faq(request):
    return render(request, 'muhajireen/faq.html')

def visitus(request):
    return render(request, 'muhajireen/visitus.html')

def about(request):
    return render(request, 'muhajireen/about.html')

def khutbas(request):
    return render(request, 'muhajireen/khutbas.html')

def programs(request):
    return render(request, 'muhajireen/event.html')

def sundayschool(request):
    return render(request, 'muhajireen/gallery-3-col.html')

def contact(request):
    return render(request, 'muhajireen/contact.html')

def donate(request):
    return render(request, 'muhajireen/donation.html')

def paymentpopup(request):
    return render(request, 'muhajireen/paymentpopup.html')
