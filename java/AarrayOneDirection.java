import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStreamReader;

/**
 * AarrayOneDirection
 */
public class AarrayOneDirection {
    public static void main(String[] args) throws IOException{
        BufferedReader Stdin = new BufferedReader(new InputStreamReader(System.in));
        int array[] = new int[4];
        for(int i=0;i<array.length;i++){
            System.out.print("array["+i+"] = ");
            array[i] = Integer.parseInt(Stdin.readLine());
        }
        int total = 0;
        for(int i=0;i<array.length;i++){
            total += array[i];
        }
        System.out.println("Total = "+total);
    }
}