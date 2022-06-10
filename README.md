```sh
Describe: countBy()
```
Test: "It should return an array of numbers from 0 to the user's inputted number"
Code: countBy(5);
Expected Output: [0, 1, 2, 3, 4, 5]

Test: "It should return -1 when the input is either less than 0 or not a number"
Code: countBy("abc");
Expected Output: -1