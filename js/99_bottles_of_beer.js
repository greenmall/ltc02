function beersong(count){

if(count > 1) {
  
  minus = count - 1;

  console.log("count + "bottles of beer on the wall,\n"
   + count + "bottles of beer. \n" +
"Take one down, pass it around,\n"
+ minus + "bottles of beer on the wall...\n"");

beersong(minus);
}

else {console.log("If that one bottle should happen to fall,\n" +
  "what a waste of alcohol!\n")
}
else  {console.log("No more bottles of beer on the wall, \n" +
"No more bottles of beer. \n" +
"We've taken them down and passed them around \n" +
"Now we're drunk and passed out! \n");
}
}

beersong(99);
