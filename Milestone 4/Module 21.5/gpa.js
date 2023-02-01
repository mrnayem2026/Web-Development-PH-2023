function gpa ( marks )
{
    if(marks >= 80 && marks <= 100 )
    {
        console.log("Tumi A+ paico  ");
    } else if ( marks >= 70 && marks <= 79 )
    {
        console.log("Tumi A paico  ");
    } else if ( marks >= 60 && marks <= 69)
    {
        console.log("Tumi A- paico  ");
    } else if (marks >= 50 && marks <= 59 )
    {
        console.log("Tumi B paico  ");
    }else if (marks >= 40 && marks <= 49 )
    {
        console.log("Tumi C paico  ");
    } else if (marks >= 33 && marks <=39 )
    {
        console.log("Tumi D paico  ");
    } else{
        console.log("Tumi F paico  ");
    }
}

gpa(55);

