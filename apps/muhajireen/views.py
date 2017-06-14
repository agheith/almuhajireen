from django.shortcuts import render, redirect, HttpResponse

# Create your views here.
def index(request):
    return render(request, 'muhajireen/index.html')

def masjid_info(request):
    return render(request, 'muhajireen/masjid_info.html')
