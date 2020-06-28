# Password_Generator

====
Password_Generator
====

Generates strong passwords

Description
===========

Algorithm:

1. Creates arrays of alphabets, numbers, special characters
        var numberPool = "0123456789";
        var lowerCaseLettersPool = "abcdefghijklmnopqrstuvwxyz";
        var specialCharPool = " !#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
2. Randomly selects between the three arrays
        var numberPool = "0123456789";
3. Randomly selects netween elements in the selected array ()
        8
4. Appends to password string
        password = "8..."
5. Jumps to step 1 and repeats until password length reaches.

6. Writes to password field in the index.html

Web design
===========

Using grid to design boxes and media query.


  