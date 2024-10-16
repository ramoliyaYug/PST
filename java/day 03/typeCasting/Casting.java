class Casting{
    public static void main(String[] args) {
        int a = 5;
        double b = a;
        long c = a;

        System.out.println(a); //5
        System.out.println(b); //5.0
        System.out.println(c); //5

        double d = 5.0;
        int e = (int)d;
        long f = 723;
        int g = (int)f;
        System.out.println(d);
        System.out.println(e);
        System.out.println(f);
        System.out.println(g);

        //there is no problem in assigning the smaller value to the larger value but if we try to assign the larger value to the samller value then we need to conver the dataype.
    }
}