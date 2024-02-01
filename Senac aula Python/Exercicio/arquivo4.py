import random

def jogo_adivinhacao():
    numero_aleatorio = random.randint(0, 5000)
    tentativas = 0

    print("Bem-vindo ao jogo de adivinhação!")
    print("Tente adivinhar o número entre 0 e 5000.")

    while True:
        tentativa_usuario = input("Digite sua tentativa: ")

        try:
            tentativa_usuario = int(tentativa_usuario)
        except ValueError:
            print("Por favor, insira um número inteiro válido.")
            continue

        tentativas += 1

        if tentativa_usuario == numero_aleatorio:
            print(f"Parabéns! Você acertou em {tentativas} tentativas.")
            break
        elif tentativa_usuario < numero_aleatorio:
            print("Tente um número maior.")
        else:
            print("Tente um número menor.")

# Executa o jogo de adivinhação
jogo_adivinhacao()
