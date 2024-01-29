import random
def obter_cor_aleatoria(): 
    cores= ["Azul","vermelho","laranja","amarelo""verde"]
    return random.choices(cores)
cor_atual = obter_cor_aleatoria()
print(f"A cor escolhida desta ver e:{cor_atual}")