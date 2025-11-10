using System;

class Program
{
    static void Main(string[] args)
    {
        string nome = "Airbus A320";
        Console.WriteLine("string" + nome);

        object dado = 159;
        Console.WriteLine("object" + dado);

        string[] Pilotos = { "maria", "joao", "carlos", };
        Console.WriteLine("Array" + Pilotos[0] + "," + Pilotos[1] + "," + Pilotos[2]);

        Carro car1 = new Carro();
        car1.modelo = "Gol";
        car2.ano = 2020;

        Console.WriteLine("classe (carro): modelo = " + car1.modelo + "" + car1.ano);

        Console.ReadLine();
    }    
}

class Carro

{
public string modelo = { get; set; } = "";

public int ano = { get; set; };

}

    
