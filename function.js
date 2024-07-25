const input = require("readline-sync");
// let a = 5;
// let b = 10;
// sum = a+b;
// console.log(sum);

// function sum(a,b) {
//     sum = a+b
//     console.log(sum);
// }
//    sum (6,9)

// function sum(A,B) {
//     sum = A+B;
//     return sum
// }
// console.log(sum(6,9));

// function sum(a,b) {
//     sum = a+b;
//     return sum
// }
// let a =input.questionInt('input:-');
// let b =input.questionInt('input:-');
// console.log(sum(a,b));

// function sum(a,b) {
//     sum = a+b;
//     return sum
// }
// let a =input.questionInt('input:-');
// let b =input.questionInt('input:-');
// console.log(sum(a,b));
//////////////////////////////////////////////////////////////////
// define of weather

// let n = input.questionInt("n:-")
// switch (true) {
//     case n>0:
//         console.log("possitive");
//         break;
//     case n<0:
//         console.log("negative");
//        break;
//     default:
//         console.log("zero");
//         break;
// }

// function xyz(num) {
//     str = ''
// switch (true) {
//     case num>0:
//         str = "possitive";
//         break;
//     case num<0:
//         str = ("negative");
//        break;
//     default:
//       str = ("zero");
//         break;
// }
// return str}
// let n = input.questionInt("n:-")
// console.log(xyz(n));

///////////////////////////////////////////////////////////////////////////////
// function me odd find and count

// function oddfindout(n){
// let i = 1;
// let c = 0;
// sum = 0;
// while (i<n) {
//      if(i%2!==0) {
//          console.log(i);
//          sum+=i;
//          c++;
//         }
//         i++;
// }
//   return [c,sum]
// }
// let num = input.questionInt("n = ");
// console.log(oddfindout(num));

// function arr(N,callcak){
//   arr = [];
//   for (let i = 0; i < N; i++) {
//    arr[i]=input.questionInt("no:-")
//   }
//   return Callback(arr);
// }
// function sum(arr) {
//   sum = 0;
//   for(ele of arr){
//     sum += ele;
//   }
//   return sum;
// }
// let N = input.questionInt();
// console.log(arr(N,sum));
//////////////////////////////////////////////////////////////
//   target in object question

// let obj = [{name:'a'},
//            {name:'b'},
//            {name:'c'},];
//  function  deletname (obj,target)
// {
//   for(let key of obj)
//   {
//     if(key.name == target)
//     {
//       obj.splice(obj.indexOf(key),1)
//     }
//   }
//   return obj;
// }
// let target = input.question("target = ")
// console.log(deletname(obj, target));

// function web(name) {
//     let rel = "hello"+" "+name;
//     return rel
// }
// console.log(web("somya"));

// function sayBye(name) {
//     return "Bye"+" "+ name;
// }
//   console.log(sayBye("babli"));

// function getfullname(name, fullname) {
//     return name+ " "+ fullname;
// }
// let a = input.question("a:-");
// let b = input.question("b:-")
// console.log(getfullname(a,b));
///////////////////////////////////////////////////////////////////////////////
//    error questions in case sensitive(GetFullName)
//  function getFullName(firstName,lastName){
//      console.log(firstName+" "+lastName)
//     }
//   getFullName("kumar","Nayak");

// function DisplaySum(a,b) {
//     var sum = a+b;
//  return sum
// }
// let a = input.questionInt("a:-");
// let b = input.questionInt("b:-");
// console.log(DisplaySum(a,b));

// function DisplayMaltifly(No1,No2,No3) {
//     return No1*No2*No3;
// }
// let No1 = input.questionInt("No1:-");
// let No2 = input.questionInt("No2:-");
// let No3 = input.questionInt("No3:-");
// console.log(DisplayMaltifly(No1,No2,No3));

// function getresult(No1,No2,No3,No4) {
//     console.log(No1-No2+No3-No4);
// }
//  getresult(2,3,4,5)

// function displaySubtraction(a,b){
//     console.log(a-b);
//  }
//  displaySubtraction(2,3);

// function averageOfSubjects(maths,science){
//     return ((maths+science)/2);
//  }
//  console.log(averageOfSubjects(25,30));

// function insertingElement(arr){
//     var a=5;
//     arr.push(a);
//     return arr;
//     console.log(arr);

//  }
//  console.log(insertingElement([1,2,3,4]));

// function Element(arr) {
//     let a = 5
//     arr.push(5);
//     return arr;
//     console.log(arr);
// }
//  console.log(Element([1,2,3,4]));

// function multiplyString(string,num){
//      string*num;
//  }

//  console.log(multiplyString("kumar",2));

//  let babli = input.question("enter name:-").split(" ");
//  console.log(babli);
//  let str = babli.join(" ")
//  console.log(str);

//  let arr  = input.questionInt("input:-");
//  console.log(arr);

// // for (let i = 0; i < babli.length; i++) {
// if (babli[i]=='#') {
//     delete babli[i]

// }
// console.log(babli[i]);
// }

// What will be the output of this code?

// function outerFunction() {

// let outerVar = "Outer";

// function innerFunction() {

// console.log(outerVar);

// }

// return innerFunction;

// }

// let myFunc = outerFunction();

// myFunc();

// let str = "Alie";

// let newstring = str.replace('l', 'r');
//   newstring = newstring.replace('e', 't')
//   console.log(newstring);
///////////////////////////////////////////////////////////////////////////////
// let Menu = [{Name:"pani puri",Ingredient:["pani","puri","mint"]},
//          {Name:"Bhel puri",Ingredient:["puri","sev","potato"]},
//           {Name: "Dahi puri",Ingredient:["Onian","potato","Dahi"]}]
// Ingredients =["pani","puri","potato","mint","Dahi"]
// let arr = [];
// function xyz(Menu,Ingredients) {
//             for (let i = 0; i < Menu.length; i++) {
//               let avi = true;
//              for (let j = 0; j < Menu[i].Ingredient.length;j++) {
//               if (!Ingredients.includes(Menu[i].Ingredient[j])) {
//                 avi = false;
//                 break;
//               }
//              }
//               if (avi == true) {
//                 arr.push(Menu[i].Name);
//               }
//             }
//             return arr;
// }
// console.log(xyz(Menu,Ingredients));
////////////////////////////////////////////////////////////////////
// let arr = [];
// let a = input.questionInt("a:-");
//    for (let i = 0; i < a; i++) {
//     let  arr1 = [];
//     let B = input.questionInt("b:-");
//     for (let j = 0; j < B; j++) {
//       let ing = input.question("ing:-");
//       arr1.push(ing)
//     }
//     let name = input.question("name:-");
//     arr.push({Name:name,Ingredient:arr1})
//    }
//    console.log(arr);
////////////////////////////////////////////
// let a = input.question("string:-");
// let str = "";
// for (let i = 0; i < a.length; i++) {
//  if (a[i]=="a") {
//   str +="@";
//  }else if(a[i]=="s"||a[i]=="S"){
//   str += "$"
//  }else{
//   str += a[i];
//  }

// }console.log(str);
////////////////////////////////////////////////////////////
//  Lucky No.
// let a = input.questionInt("no:-");
// while(true){
//   let sum = 0;
//   while (a>0) {
//     let r = a%10;
//     a = Math.floor(a/10);
//     sum = sum+r;
//   }
//   if (sum<10) {
//     console.log(sum);
//     break;
//   }else{
//     a = sum;
//   }
// }

///////////////////////////////////////////////////////////////////////////////////////
//Happpy Nomber
// let p = input.questionInt("no:-");
// while(true){
//   let sum = 0;
//   while (p>0) {
//     let r = p%10;
//     p = Math.floor(p/10);
//     sum = sum+r**2;
//   }
//   if (sum==1) {
//     console.log(sum, "happy nomber");
//     break;
//   }else{
//     p = sum;
//   }
// }
//////////////////////////////////////////////////////////
// harshad number
// let a = input.questionInt("no:-");
//   let sum = 0;
// let h = a;
//   while (h>0) {
//     let r = h%10;
//     h = Math.floor(h/10);
//     sum = sum+r;

//   }
//   if (a%sum==0) {
//    console.log("harshad nomber");
//   }else{
//    console.log("no");
//   }
/////////////////////////////////////////////////////
// spie nomber
//   let a = input.questionInt("no:-");
//   let sum = 0;
//   let m = 1;
//   let w = m;
//   let t = sum
// let h = a;
//   while (h>0) {
//     let r = h%10;
//     h = Math.floor(h/10);
//     m = m*r;
//     sum = sum+r;

//   }
//   if (sum==m) {
//     console.log("spie nomber");
//   }
//     else{
//       console.log("no");
//     }

////////////////////////////////////////////////////
// perfect nomber
// let k = input.questionInt("k:-");
// let i = 1;
// let sum = 0;
// let m = sum;
// while (i<k) {
//   if(k%i==0){
//     sum +=i;
//     // i++;
//   }
//   i++;
// }
// if (k==sum) {
//   console.log("perfect no",k,sum);
// }else{
//   console.log("not perfect ",k,sum);
// }

////////////////////////////////////////////////////////////////
//  Neon Nomber

// let n = input.questionInt("no:-");
// let sum = 0;
//    let q = sum;
// let m = 1;
// let k = n**2;

//    while (k>0) {
//     let r = k%10;
//     k = Math.floor(k/10);
//     sum = sum +r;
//    }
//      if (sum == n) {
//       console.log("neon no.",sum,n);
//      }else{
//       console.log("Not ",sum,n);
//      }

///////////////////////////////////////////////////////////////////
// let num = input.questionInt("num:-");
// let k= 1;

// for (let i = 1; i <= num; i++) {
// let str = "";
// for (let j = 1; j <=i; j++) {
//   str += k+ ' '
//   k++
// }
// console.log(str);
// }

// let num = input.questionInt("num:-");
// let k= "A";
// ascii = k.charCodeAt(0)
// for (let i = 1; i <= num; i++) {
// let str = "";
// for (let j = 1; j <=i; j++) {
//   str += String.fromCharCode(ascii)," "
//   ascii++;
// }
// console.log(str);
// }

////////////////////////////////////////
//  fibonachi  question
// let n = input.questionInt("n:-")
// let a = 0;
// let b = 1;
// for (let i = 0; i < n; i++) {
//  let c = a+b;
//     b  = a;
//     a = c;
//     console.log(b);

// }

//////////////////////////////////
// buble short
// const arr = [4,2,10,5,8,1,7];
// for (let i = 0; i < arr.length; i++) {
//   for (let j = i+1; j < arr.length; j++) {
// if (arr[i]>arr[j]) {
//   [arr[i],arr[j]]=[arr[j],arr[i]]
// }
// }

// console.log(arr);
// }

////////////////////////////////////////////////////////////
// Binary search
// const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let k = input.questionInt("k:-");
// let l = 0;
// let R = arr.length - 1;
// let result = "not pound";
// while (l <= R) {
//   let m = Math.floor((l + R) / 2);
//   if (arr[m] == k) {
//     result = "found";
//     break;
//   } else if (arr[m] < k) {
//     l = m + 1;
//   } else {
//     R = m - 1;
//   }
// }
// console.log(result);

///////////////////////////////////////////////////////////
//  0 sepret;
// let arr = ["1","0","0","1","1","0","0"];
// let i = 0;
// let str = '';
// let str1 = '';
// for (let i = 0; i < arr.length; i++) {
// if (arr[i]=='1') {
//   str += +arr[i]," ";
// }else{
//   str1 += +arr[i]," ";
// }
// }  console.log(str,str1);

//////////////////////////////////////////////////////////////////////
// Rotation question
// let arr = [1,2,3,4,5];
//  nomberofrotation = 3;
//  let count = 1;
//  while (count<=arr.length) {
//     arr.push(arr.shift())
//     count++;
//     console.log(arr);
//  }

///////////////////////////////////////////////////////////////////////////
// //
// let arr = [6,3,4,1,2,4,3,6,6]
// let i = 0;
// for (let i = 0; i < arr.length; i++) {
//     let count = 0;
//     if (arr[i]==1) {
//         count++;
//     }
//     console.log(count);
// }

// let arr = [ 1,5,8,2,78,34,22];
// let max = 0;
// for (let i = 0; i < arr.length; i++) {
//     let j = 1;
//   if (j<arr.length) {
//     let k = j-1;
//     max<k;
//     console.log(j,i);
//   }
//   j++;

// }

// let arr = ["abc","cba","ab","cab","defg","ilk","gfde","hl","kite","kil"];
// let count = 0;
// // // output = abc = 3, ab = 1;
// for (let i = 0; i < arr.length; i++) {
//   let j = i+1;
// if (j<arr.length) {
//   if (arr[i]==arr[j]) {
//     count ++;
//   }else{
//     j++;
//   }
// }
// console.log(count);
// }

// let arr = ["abc", "cba", "ab", "cab", "defg", "ilk", "gfde", "hl", "kite", "kil"];
// let counts = {};
// // output = abc = 3, ab = 1;
// const sortString = str => str.split('').sort().join('');

// function addtwono(no1,no2) {
//     sum = no1+no2;
//     return sum;
// }
// let no1=input.questionInt("no1:-");
// let no2 = input.questionInt("no2:-");
// console.log(addtwono(no1,no2));

// function fullname(firstName,lastName) {
//     fullname = firstName + " "+ lastName;
//     return fullname;
// }
// let firstName = input.question("firstname:-");
// let lastName = input.question("lastname:-");
//   console.log(fullname(firstName,lastName));

// function displaymultiply(No1,No2,No3) {
// console.log(No1*No2*No3);
// }
// let No1=input.questionInt("No:-");
// let No2=input.questionInt("No:-");
// let No3=input.questionInt("No:-");
// // console.log()
//     displaymultiply(No1,No2,No3);

// function getSum(num1, num2) {
//     var total = num1 + num2;
//     return total;
//    }
//   console.log(getSum(2,3));

// Average of subject;
// function Average(sub1,sub2) {
//   let result = (sub1+sub2)/2;
//     return result;
// }
//  let sub1=input.questionInt("sub1:-");
//  let sub2=input.questionInt("sub1:-");
// console.log(Average(sub1,sub2));

// array of function
// function insertingElement(arr){
//     var a=5;
//     arr.push(a);
//     return arr;
//     console.log(arr);

//  }
//  console.log(insertingElement([1,2,3,4]));

// function insertingElement(arr) {
//     let a = 0;
//     arr.unshift(a);
//     return arr;
// }
//  console.log(insertingElement([8,9,7,4,1,2,3,]));

///////////////   string and no
// function multiplyString(string,no1) {
//    let result= string*no1;
//    return result;

// }
// console.log(multiplyString("pawan",4));
///////////////////////////////////////////////////////////////////////
// var greet = "Hello World!";
// function greetWorld(greet) {
//     return greet;
//    }
//    greetWorld(); // Outputs: Hello World!
//    console.log(greetWorld(greet)); // Uncaught ReferenceError: greet is not defined

////////////////////////////////////////////////////////////////////////////////////////
// var getSum = function(num1, num2) {
//     var total = num1 + num2;
//     return total;
//    };

//    console.log(getSum(5, 10)); // 0utputs: 15

//    var sum = getSum(7, 25);
//    console.log(sum); // 0utputs: 32

// function Element(arr) {
//     let a = 4;
//     arr.push(a)
//    return arr
// }
// console.log(Element([1,2,5,8,]));

// function Element(a,b) {
//     return arr = [a,b]
// }
// let x = input.questionInt("input:-");
// let y = input.questionInt("input:-");
// console.log(Element(x,y));
/////////////////////////////////////////////////////////////////////////////////////////////////////
// function Element() {
//   let length = input.questionInt("length:-");
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr[i] = input.questionInt("input:-");
//   }
//   // let a = 7;
//   arr.unshift(2);
//   return arr;
// }
// console.log(Element());
///////////////////////////////////////////////////////////////////////////////
//00000000000000000000000000000000000000000000000000000000000000000000000000000
// function Element() {
//   let length = input.questionInt("length:-");
//   let arr = [];
//   for (let i = 0; i < length; i++) {
//     arr[i] = input.questionInt("input:-");
//   }

//   let k = 2;
//   for (let t = 0; t < k; t++) {
//     for (let j = 0; j < arr.length; j++) {
//       arr.push(arr.shift(j));
//       break;
//     }
//     console.log(arr);
//   }
// }
// Element();
/////////////////////////////////////////
// function checknumberlist() {
//   let i = 0;
//   let j = 0;
//   while(i<arr.length && j<arr1.length){
//     if (arr[i]%2==0 && arr1[j]%2==0) {
//       console.log("dono even hai");
//     }else{
//       console.log("dono even nahi hai");
//     }
//     i++;
//     j++;
//   }
// }let arr = [2,6,18,10,3,75];
// let arr1 = [6,19,24,12,3,87];
// (checknumberlist(arr,arr1));

/////////////////////////////////////////////////////
// function eligibleforvote(a) {
//   if (a>=18) {
//     console.log("you are eligible");
//   }else{
//     console.log("not eligible");
//   }
// }
// let a = input.questionInt("a:-");
// eligibleforvote(a)

//////////////////////////////////////////////
// function perfect() {
//   let sum = 0;
//   for (let i = 1; i <number; i++) {
//        if (number%i==0) {
//        sum =sum+i;
//        }
//   }
//     if (sum ==number) {
//       console.log("perfect number");
//     }else{
//       console.log("not perfect");
//     }
// }
// let number = input.questionInt("number:-");
// perfect(number);

///////////////////////////////////////////////////////
// function average(num,num1,num2) {
//   let sum = num + num1+num2;
//   console.log("sum of three number ",sum);
//   let b = sum/3;
//   console.log("average of three num" ,b);

// }
// let num = input.questionInt("num:-");
// let num1 = input.questionInt("num1:-");
// let num2 = input.questionInt("num2:-");
// average(num,num1,num2);

//////////////////////////////////////////////////
// function showNumber(x) {
//   for (let i = 0; i <=x; i++) {
//    if (i%2==0) {
//     console.log("even",i);
//    }else{
//     console.log("odd",i);
//    }
    
//   }
// }
// let x = input.questionInt("x:-");
// showNumber(x);

////////////////////////////////////////////////////

// function multiplesOfNumbers (num) {
//   let sum = 0;
//   for (let i = 0; i <= num; i++) {
//     if (i%3==0) {
//       sum +=i;
//     }
//     if (i%5==0) {
//       sum += i;
//     }
//   }
//  console.log(sum);
// }
// let num = input.questionInt("num:-");
// multiplesOfNumbers(num);

/////////////////////////////////////////////////////
// function license_checker (speed) {
//   if (speed<70) {
//     console.log("ok");
//   }else if(speed>70){
//     points=0
//     for(var i=70;i12){
//         console.log("License suspended");
//     }
//     else{
//         console.log(points);
//     }
// } 
  
// }
// let speed = input.questionInt("speed:-");
// license_checker(speed);
//-----------------------------------------------------------------------------------------------
// function license_checker(speed){
//   if(speed < 70){
//       console.log("ok");
//   }
//   else if(speed > 70){
//     var m = speed-70;
//     var point = 0;
//     if (m>0 && m>=5) {
//       point++;
//       let k = m-5;
//       m = k;
//     }else{
//       if (point>=12) {
//         console.log("license suspended",point);
//       }else{
//         console.log("points",point);
//       }
//     }

//   }
// }
// let speed = input.questionInt("speed:-");
// license_checker(speed)

////////////////////////////////////////////
// function is_equal_lenth(str1,str2){
//   if(str1.length === str2.length){
//       console.log(str1);
//       console.log(str2);
//   }
//   else if(str1.length > str2.length){
//       console.log(str1);
//   }
//   else{
//       console.log(str2);
//   }
// }

// is_equal_lenth("hello","125");
// function squares_of_numbers(limit){
//   var output={ };
//   for(var i=1;i<=limit;i++){
//       output[i]=i*i
//   }
//   console.log(output);
// }
// squares_of_numbers(20)
//--------------------------------------------------------
// let a = input.question("str:-");
// let y = a.split(' ');
// console.log(y);
// let result = 0;
// for (let i = 0; i < y.length; i++) {
//        var c = 0;
//     for (let j = 0; j < y.length; j++) {
//        if (y[i]== 1) {
//       c++;                                               //   1 1 0 0 0 1 1 1 1 0 0 ?
//        }
//    }
//     let m = 0;
//     m>c;
//   result += c;
//   console.log(result);

// }  

////////////////////////////////////////////////////////////////////////////////
//  if arr in have even number so in that place put 10;
// function newArr(arr) {
//   let result = [ ];
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i]%2==0) {
//       // result += 10 + " ";     
//       result.push(10)
//     }else{
//       // result +=  arr[i]+ " ";
//       result.push(arr[i])
//     }
//   }
//   console.log(result);
// }
// let arr = [1,2,3,4,5];
// newArr(arr);
/////////////////////////////////////////////////////////////////
// output blank arr[];
// function Element(arr) {
//   for (let i = 0; 0< arr.length; i++) {
    
//    arr.pop(arr) 
   
//   }
//   return arr;

// }
// let arr = [1,2,3,4,5];
// console.log(Element(arr));
// // Element(arr);

////////////////////////////////////////////////////////////////////
//  In this question  add 2 and mul 3;
// function addmultiply(arr) {
//   let result = [];
//   for (let i = 0; i < arr.length; i++) {
//     result += (arr[i]+2)*3 + " ";
//   }
//   return result;
// }
// let arr = [1,2,3,4,5];
// console.log(addmultiply(arr));

/////////////////////////////////////////////////////////////////
//    question is arr[1,2,3,4,5]  $ output = [ 5,4,3,2,1]
// function reversearry(arr) {
//   let arr1 = [];
//   for (let i = 0; 0 < arr.length; i++) {
//     arr1.unshift(arr.shift())
//     // console.log(arr1);
//   }
//   return arr1;
// }
// let arr = [1,2,3,4,5];
// console.log(reversearry(arr));






