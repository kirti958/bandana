from django.urls import path
from.views import *
urlpatterns=[
    path('',home,name='index'),
    path('ecommerce/',ecommerce, name='ecommerce'),
    path('/',contact,name='contact')
]
