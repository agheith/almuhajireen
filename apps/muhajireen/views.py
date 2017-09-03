from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'muhajireen/index.html')

def masjid_info(request):
    return render(request, 'muhajireen/masjid_info.html')

# we need to edit the following pages SA>
def faq(request):
    return render(request, 'muhajireen/about.html')

def vistus(request):
    return render(request, 'muhajireen/about.html')

def sermons(request):
    return render(request, 'muhajireen/sermons.html')

def programs(request):
    return render(request, 'muhajireen/event.html')

def sundayschool(request):
    return render(request, 'muhajireen/gallery-3-col.html')

def contact(request):
    return render(request, 'muhajireen/contact.html')

def donate(request):
    return render(request, 'muhajireen/donation.html')
