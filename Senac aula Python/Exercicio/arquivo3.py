conjunto_strings = {"lucas, Giovanni, Emília, Felipe, Diego"} 
conjunto_numeros = {1,2,3,4,5}
conjunto_misto ={1,'dois',3.0,True}
conjunto_misto.remove(1)
uniao = conjunto_numeros.union(conjunto_strings)
for elemento in conjunto_strings:
    print(elemento)