from django.conf.urls import url
from . import views

urlpatterns = [

    url(r'^$', views.index),
    url(r'^masjid_info$', views.masjid_info),
    url(r'^donate$', views.donate),
    url(r'^pay$', views.pay),

    url(r'^faq$', views.faq),
    url(r'^vistus$', views.vistus),
    url(r'^sermons$', views.sermons),
    url(r'^programs$', views.programs),
    url(r'^sundayschool$', views.sundayschool),
    url(r'^contact$', views.contact),
    url(r'^do_donation$', views.paymentpopup)



]
