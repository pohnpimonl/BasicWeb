/**
 * AdefineArray
 */
public class AdefineArray {
    public static void main(String[] args) {
        int array[] = {1,2,3,4};
        int total = 0;
        for(int i=0;i<array.length;i++){
            total += array[i];
        }
        System.out.println("Total = "+total);
    }
}