const textbox = document.getElementById('textbox');

textbox.addEventListener('input', function() 
{
    var text = this.value;
    let charCount = text.length;
    document.getElementById("char").innerHTML = charCount;
    text = text.trim();
    let words = text.split(" ");
    let cleanList = words.filter(function(elm) 
    {
        return elm !== "";
    });
    document.getElementById("word").innerHTML = cleanList.length;
    console.log(cleanList);
});
