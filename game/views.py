from django.http import HttpResponse

def index(request):
    return HttpResponse("My First Page")
