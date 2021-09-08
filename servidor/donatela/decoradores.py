
def registro_decorator(function):
    
    def registro(*args, **kwargs):
        function(*args, **kwargs)
        print("\n\nRegisto para la acción\n\n")

    return registro

    