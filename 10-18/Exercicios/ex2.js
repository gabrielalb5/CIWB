function e_vogal(c){
    c = c.toLowerCase()
    if(c=="a" || c=="e" || c=="i" || c=="o" || c=="u"){
        return true;
    }else{
        return false;
    }
}

e_vogal("A");
e_vogal("B");
e_vogal("C");
e_vogal("D");
e_vogal("E");