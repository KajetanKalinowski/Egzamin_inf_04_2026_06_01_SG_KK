using System.Diagnostics;

static void Main(string[] args)
{
    Console.WriteLine("Aplikacja losująca hasło");
    string[] male = { "a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z" };
    string[] wielkie = { "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z" };
    string[] diakryczne = { "ą", "ę", "ł", "ń", "ó", "ś", "ż", "ź", "Ą", "Ę", "Ł", "Ń", "Ó", "Ś", "Ż", "Ź" };
    string[] cyfry = { "0", "1", "2", "3", "4", "5", "6", "7", "8", "9" };
    string[] specjalne = { "!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "+" };
    string[] hasla = { };
    Random rand = new Random();
    for (int j = 0; j != 5; j++)
    {
        string[] male_losowe = { };
        string[] wielkie_losowe = { };
        string[] diakry_losowe = { };
        string[] cyfry_losowe = { };
        string[] specjal_losowe = { };
        string[] haslo = { };
        string haslo_string = "";
        for (int i = 0; i != 3; i++)
        {
            int rand_male = rand.Next(0, 25);
            male_losowe = male_losowe.Append(male[rand_male]).ToArray();
            haslo = haslo.Append(male[rand_male]).ToArray();
        }
        for (int i = 0; i != 3; i++)
        {
            int rand_wielkie = rand.Next(0, 25);
            wielkie_losowe = wielkie_losowe.Append(wielkie[rand_wielkie]).ToArray();
            haslo = haslo.Append(wielkie[rand_wielkie]).ToArray();
        }
        for (int i = 0; i != 2; i++)
        {
            int rand_diakry = rand.Next(0, 15);
            diakry_losowe = diakry_losowe.Append(diakryczne[rand_diakry]).ToArray();
            haslo = haslo.Append(diakryczne[rand_diakry]).ToArray();
        }
        for (int i = 0; i != 2; i++)
        {
            int rand_cyfry = rand.Next(0, 9);
            cyfry_losowe = cyfry_losowe.Append(cyfry[rand_cyfry]).ToArray();
            haslo = haslo.Append(cyfry[rand_cyfry]).ToArray();
        }
        for (int i = 0; i != 2; i++)
        {
            int rand_specjalne = rand.Next(0, 11);
            specjal_losowe = specjal_losowe.Append(specjalne[rand_specjalne]).ToArray();
            haslo = haslo.Append(specjalne[rand_specjalne]).ToArray();
        }
        Random.Shared.Shuffle(haslo);
        for (int i = 0; i < haslo.Length; i++)
        {
            haslo_string = haslo_string + haslo[i];
        }
        hasla = hasla.Append(haslo_string).ToArray();
    }
    for (int i = 0; i < hasla.Length; i++)
    {
        Console.WriteLine("Hasło "+(i+1)+" : ");
        Console.WriteLine(hasla[i]);
    }
}
    Main(args);