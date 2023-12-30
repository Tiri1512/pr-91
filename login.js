question_number = "<h4>" + number1 + " X " + number2 + "</h4>";
input_box = "<br>Answer : <input type = 'text' id='input_check_box'>";
check_button = "<br><br><button class='btn btn_info' onclick='check()'>Check</button>";
row =question_number + input_box + check_button;

function addUser()
{
    Player1_Name = document.getElementById("Player1_Name").Value;
    Player2_Name = document.getElementById("Player2_Name").Value;
    localStorage.setItem("Player1_Name", Player1_Name);
    localStorage.setItem("Player2_Name", Player2_Name);
    window.location="index2.html";
}
function send()
{
    number1 = documen.getElementById("number1").value = "";
    number2 = documen.getElementById("number2").value = "";
    actual_answer = parseInt(number1) * parseInt(number2);
    document.getElementById("output").innerHTML = row


}
