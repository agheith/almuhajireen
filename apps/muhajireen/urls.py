from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^masjid_info$', views.masjid_info),
    url(r'^donate$', views.donate),
    url(r'^pay$', views.pay),
]
