# Mr. Roboger's Neighborhood

#### By Zhibin Liang

#### A webpage that asks a user to input a number and his name, providing responses from Mr. Roboger   

## Technologies Used

* HTML
* CSS
* JavaScript

## Applicaiton setup instruction

1. Clone the repo
    ```sh
    git clone (https://github.com/zbl14/Mr.Robogers-Neighborhood.git)
    ```
2. Open index.html file
3. Enter a number and a name, then click "Submit" button

## Known Bugs

* The clear result button should stay hidden when submit a negative number
* Should be a prompt states "Please enter a positive number" when only submit with a name   

## TDD Specs

```sh
Describe: countBy()
```
Test: "It should return an array of numbers from 0 to the user's inputted number"<br/>
Code: countBy(5);<br/>  
Expected Output: [0, 1, 2, 3, 4, 5]  

Test: "It should return -1 when the input is either less than 0 or not a number"<br/>  
Code: countBy("abc");<br/>  
Expected Output: -1  

Test: "It should replace all digits with "Won't you be my neighbor?" if inputted numbers contains a 3"<br/>  
Code:<br/>  
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13];  
countBy(num);  
Expected Output: [1,2,"Won't you be my neighbor?",4,5,6,7,8,9,10,11,12,"Won't you be my neighbor?"]  

Test: "It should replace all digits with "Boop!" if inputted numbers contains a 2, but not override the rule for numbers contains a 3"
Code: 
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
countBy(num);
Expected Output: [0, 1, 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, 10, 11, 'Boop!', "Won't you be my neighbor?", 14, 15, 16, 17, 18, 19, 'Boop!', 'Boop!', 'Boop!', "Won't you be my neighbor?"]

Test: "It should replace all digits with "Beep!" if inputted numbers contains a 1, but not override the rule for numbers contains a 2 or a 3"
Code: 
const num = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23];
countBy(num);
Expected Output: [0, "Beep!", 'Boop!', "Won't you be my neighbor?", 4, 5, 6, 7, 8, 9, "Beep!", "Beep!", 'Boop!', "Won't you be my neighbor?", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", "Beep!", 'Boop!', 'Boop!', 'Boop!', "Won't you be my neighbor?"]

Test: "It should return false when the input is either less than 0 or not a number"
Code: countBy("abc");
Expected Output: false

## License
MIT

Copyright &copy; 2022 Zhibin Liang