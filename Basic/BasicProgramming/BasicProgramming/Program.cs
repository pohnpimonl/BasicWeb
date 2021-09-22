using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BasicProgramming
{
    class Program
    {

        static void Main(string[] args)
        {
            int a, b, max, min;
            int.TryParse(System.Console.ReadLine(), out a);
            int.TryParse(System.Console.ReadLine(), out b);
            if (a > b) { max = a; min = b; }
            else max = b; min = a;
            System.Console.WriteLine("MAX : {0}", max);
            System.Console.WriteLine("MIN : {0}", min);

            Console.ReadLine();
        }
    }
}

