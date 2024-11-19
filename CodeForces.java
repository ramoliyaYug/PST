
import java.util.Scanner;

/*
A soldier wants to buy w bananas in the shop. He has to pay k dollars for the first banana, 2k dollars for the second one and so on (in other words, he has to pay i·k dollars for the i-th banana).

He has n dollars. How many dollars does he have to borrow from his friend soldier to buy w bananas?

Input
The first line contains three positive integers k, n, w (1  ≤  k, w  ≤  1000, 0 ≤ n ≤ 109), the cost of the first banana, initial number of dollars the soldier has and number of bananas he wants.

Output
Output one integer — the amount of dollars that the soldier must borrow from his friend. If he doesn't have to borrow money, output 0
*/
public class CodeForces {
    public static void main(String[] args) {
        Scanner sc = new Scanner(System.in);
        int k = sc.nextInt();
        int n = sc.nextInt();
        int w = sc.nextInt();
        int total = 0;
        for(int i=1;i<=w;i++){
            total += i*k;
        }
        if(total <=n){
            System.out.println(0);
        }else{
            System.out.println(total-n);
        }
    }
}
//in the end off this sem i want to become a full stack and mern stack developer, for this i need to learn the react,nodejs,expressjs,mongodb,angular,vue. and want to solve problems on leetcode, codeforces and hackerrank.so that i can manage my both development and dsa journey. and i also want to start freelancing too by the end of this sem, i want to code some really good,unique and amazing projects using the languages i mentioned above. i already have some cool innovative ideas for projects but the only problem is that i don't have knowledge of the tech to start making those projects.so i planned to learn first the tech and then start making the projects.also i want to prepare for the GSoC 2025 so i can get the more experience in the open source projects.

//By the end of this semester, I aim to establish myself as a proficient full-stack and MERN stack developer. To achieve this, I plan to gain expertise in React, Node.js, Express.js, MongoDB, Angular, and Vue. Simultaneously, I intend to strengthen my problem-solving skills by practicing on competitive programming platforms like LeetCode, Codeforces, and HackerRank, ensuring a balanced focus on both development and data structure/algorithm proficiency.

//My goal is to venture into freelancing and work on impactful, innovative projects leveraging the aforementioned technologies. While I already have several creative project ideas, I plan to first acquire the necessary technical skills to execute them effectively. Additionally, I am preparing for GSoC 2025 to gain hands-on experience with open-source contributions, further enhancing my expertise and professional portfolio.

//By the end of this semester, I would look to be a proficient full-stack and MERN stack developer. To do that, I was looking to master React, Node.js, Express.js, MongoDB, Angular, and Vue. At the same time, I was looking to develop my problem-solving abilities by practicing on competitive programming platforms like LeetCode, Codeforces, and HackerRank so that I could maintain a balanced focus between my progress on the development part and the improvement of data structure/algorithm efficiency.

//My objective is to freelance and work on influential, creative projects with the use of the above technologies. Although I have a number of creative project ideas, I first intend to pursue additional technical skills necessary in the execution of such projects. This way, I will be ready for GSoC 2025, where I will further develop hands-on experience in open-source contributions, amplifying my expertise and professional portfolio.