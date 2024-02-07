from django.shortcuts import render

# Create your views here.

def nomedafuncaoview (request):
    return render(
        request,
        'aulasPY/arquivo.html'
    )
