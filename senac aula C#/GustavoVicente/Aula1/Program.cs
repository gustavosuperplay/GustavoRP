using System;

// O References | Windsurf Refactor | Explain
class Program
{
 // O references | windsurf: refactor | Explain | Generate Documentation | x
 static void Main(string[] args)
 {
    // STRING -> Nao primitivo (class)
    string nome = "Arbus A360";
    Console.WriteLine("string: " + nome);

    // OBJETO -> Base de todos tipos 
    object dado = 159;
    Console.WriteLine("object: " + dado);

    // ARRAY -> colecao de elementos 
    string[] piloto = {"Maria", "Joao", "Carlos"};
    Console.WriteLine("Array: " + piloto[0] + " " + piloto[1] + " " + piloto[2]);

    // CLASS -> Objeto criado a partir de uma classe
    Carro car1 = new Carro();
    car1.Modelo = "Gol";
    car1.Ano = 2020;

     Console.WriteLine("Classe (Carro): Modelo = " + car1.Modelo + " Ano = " + car1.Ano);
     Console.ReadLine(); 
}
}   

class Carro
{
    public string Modelo { get; set; } = "";

    public int Ano { get; set;}
}

