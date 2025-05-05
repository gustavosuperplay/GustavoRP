import tkinter as tk
from tkinter import ttk
from tkinter import messagebox
import random

class QuizApp:
    def __init__(self, root):
        self.root = root
        self.root.title("Quiz de Conhecimentos Gerais")
        self.root.geometry("600x400")
        self.root.configure(bg="#f0f0f0")

        # Estilo
        style = ttk.Style()
        style.configure("TLabel", font=("Segoe UI", 12), background="#f0f0f0")
        style.configure("TButton", font=("Segoe UI", 11))

        self.questions = [
            {
                "pergunta": "Qual é a capital do Brasil?",
                "opcoes": ["São Paulo", "Rio de Janeiro", "Brasília", "Salvador"],
                "correta": 2
            },
            {
                "pergunta": "Qual é o maior planeta do Sistema Solar?",
                "opcoes": ["Terra", "Marte", "Júpiter", "Saturno"],
                "correta": 2
            },
            {
                "pergunta": "Quem pintou a Mona Lisa?",
                "opcoes": ["Van Gogh", "Leonardo da Vinci", "Michelangelo", "Pablo Picasso"],
                "correta": 1
            },
            {
                "pergunta": "Qual é o maior oceano do mundo?",
                "opcoes": ["Atlântico", "Índico", "Pacífico", "Ártico"],
                "correta": 2
            },
            {
                "pergunta": "Em que ano o Brasil foi descoberto?",
                "opcoes": ["1500", "1492", "1502", "1498"],
                "correta": 0
            }
        ]

        self.current_question = 0
        self.score = 0
        
        # Criar widgets
        self.create_widgets()
        
        # Iniciar quiz
        self.show_question()

    def create_widgets(self):
        # Frame principal
        self.main_frame = ttk.Frame(self.root, padding="20")
        self.main_frame.pack(fill=tk.BOTH, expand=True)

        # Pergunta
        self.question_label = ttk.Label(
            self.main_frame, 
            wraplength=500, 
            justify="center",
            style="TLabel"
        )
        self.question_label.pack(pady=(0, 20))

        # Frame para botões de opções
        self.options_frame = ttk.Frame(self.main_frame)
        self.options_frame.pack(fill=tk.BOTH, expand=True)

        # Botões de opções
        self.option_buttons = []
        for i in range(4):
            btn = ttk.Button(
                self.options_frame,
                command=lambda x=i: self.check_answer(x)
            )
            btn.pack(fill=tk.X, pady=5)
            self.option_buttons.append(btn)

        # Botão próxima pergunta
        self.next_button = ttk.Button(
            self.main_frame,
            text="Próxima Pergunta",
            command=self.next_question
        )

    def show_question(self):
        question = self.questions[self.current_question]
        self.question_label.config(text=question["pergunta"])
        
        for i, option in enumerate(question["opcoes"]):
            self.option_buttons[i].config(text=option, state="normal")
        
        self.next_button.pack_forget()

    def check_answer(self, choice):
        correct = self.questions[self.current_question]["correta"]
        
        for btn in self.option_buttons:
            btn.config(state="disabled")
        
        if choice == correct:
            self.score += 1
            self.option_buttons[choice].config(style="Correct.TButton")
        else:
            self.option_buttons[choice].config(style="Wrong.TButton")
            self.option_buttons[correct].config(style="Correct.TButton")
        
        self.next_button.pack(pady=(20, 0))

    def next_question(self):
        self.current_question += 1
        
        if self.current_question < len(self.questions):
            for btn in self.option_buttons:
                btn.config(style="TButton")
            self.show_question()
        else:
            self.show_result()

    def show_result(self):
        message = f"Quiz finalizado!\nSua pontuação: {self.score} de {len(self.questions)}"
        answer = messagebox.askquestion("Resultado", message + "\n\nDeseja jogar novamente?")
        
        if answer == "yes":
            self.current_question = 0
            self.score = 0
            random.shuffle(self.questions)
            for btn in self.option_buttons:
                btn.config(style="TButton")
            self.show_question()
        else:
            self.root.quit()

if __name__ == "__main__":
    root = tk.Tk()
    app = QuizApp(root)
    
    # Configurar estilos dos botões
    style = ttk.Style()
    style.configure("Correct.TButton", background="green")
    style.configure("Wrong.TButton", background="red")
    
    root.mainloop() 