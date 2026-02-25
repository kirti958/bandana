from django.shortcuts import render
from .models import *

# Create your views here.
def home(request):
    return render(request,'index.html')

def ecommerce(request):
    return render(request, "ecommerce/index.html")

def contact(request):
    if request.method == 'POST':
        nm= request.POST.get('name')
        em=request.POST.get('email')
        sub=request.POST.get('subject')
        msg=request.POST.get('message')
        print('>>>>>', nm,em,sub,msg)
        user= Contact(name=nm, email=em, subject=sub, message=msg)
        user.save()
    return render(request,'index.html')