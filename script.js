var card_1 = document.querySelector("#card_1");
var card_2 = document.querySelector("#card_2");
var card_3 = document.querySelector("#card_3");

var card_1_btns = document.querySelector(".card_1_btns");
var card_2_btns = document.querySelector(".card_2_btns");
var card_3_btns = document.querySelector(".card_3_btns");

var card_1_next_btn = document.querySelector(".card_1_btns .btn_next");

var card_2_back_btn = document.querySelector(".card_2_btns .btn_back");
var card_2_next_btn = document.querySelector(".card_2_btns .btn_next");

var card_3_back_btn = document.querySelector(".card_3_btns .btn_back");
var card_3_done_btn = document.querySelector(".card_3_btns .btn_done");

var card_2_progressbar = document.querySelector(".card_2_progresbar");
var card_3_progressbar = document.querySelector(".card_3_progresbar");

// functioning of buttons

card_1_next_btn.addEventListener("click", function () {
    card_1.style.display = "none";
    card_2.style.display = "block";

    card_1_btns.style.display = "none";
    card_2_btns.style.display = "flex";

    card_2_progressbar.classList.add("active");
})

card_2_back_btn.addEventListener("click", function () {
    card_1.style.display = "block";
    card_2.style.display = "none";

    card_1_btns.style.display = "flex";
    card_2_btns.style.display = "none";

    card_2_progressbar.classList.remove("active");
})

card_2_next_btn.addEventListener("click", function () {
    card_2.style.display = "none";
    card_3.style.display = "block";

    card_2_btns.style.display = "none";
    card_3_btns.style.display = "flex";

    card_3_progressbar.classList.add("active");
})

card_3_back_btn.addEventListener("click", function () {
    card_2.style.display = "block";
    card_3.style.display = "none";

    card_2_btns.style.display = "flex";
    card_3_btns.style.display = "none";

    card_3_progressbar.classList.remove("active");
})

card_3_done_btn.addEventListener("click", function () {
    alert("We have submitted the your form, don't contact again.... EVER. Thank You");
})


// Add field
var counter = 1;
var limit = 5;
function addField(divname) {

    while (counter != limit) {

        // }
        // if (counter == limit) {
        //     console.log("You have reached the limit of inputs");
        // }
        // else {
        var newdiv1 = document.createElement('div');
        newdiv1.setAttribute("id", "newdiv_1");
        newdiv1.classList.add('card-body-content') + counter;

        var newdiv2 = document.createElement('div');
        newdiv2.setAttribute("id", "newdiv_2");
        newdiv2.setAttribute("class", "st-ed-name");
        newdiv2.innerHTML = "<label>Name of Education:<label>" + "<input type='text' name='education'/>";

        var newdiv3 = document.createElement('div');
        newdiv3.setAttribute("id", "newdiv_3");
        newdiv3.setAttribute("class", "st-ed-board");
        newdiv3.innerHTML = "<label>Name of Board:<label>" + "<input type='text' name='board' />";

        var newdiv4 = document.createElement('div');
        newdiv4.setAttribute("id", "newdiv_4");
        newdiv4.style.marginLeft = "63px";
        newdiv4.setAttribute("class", "st-ed-pasyear");
        newdiv4.innerHTML = "<label>Passing Year:<label/>" + "<input type='text', placeholder='passing year'/>";

        var newdiv5 = document.createElement('div');
        newdiv5.setAttribute("id", "newdiv_5");
        newdiv5.setAttribute("class", "st-ed-marks");
        newdiv5.innerHTML = "<label>Marks:<label/>";

        var newdiv6 = document.createElement('div');
        newdiv6.setAttribute("id", "newdiv_6");
        newdiv6.setAttribute("class", "marks_1");
        newdiv6.innerHTML = "<label><input type='radio' class='radio_mar' onclick='EnableDisableTextBox()'/>Percentage:<label/>" + "<input type='number' max='100' min='1' />";

        var newdiv7 = document.createElement('div');
        newdiv7.setAttribute("id", "newdiv_7");
        newdiv7.setAttribute("class", "marks_1");
        newdiv7.innerHTML = "<label><input type='radio' class='radio_mar' onclick='EnableDisableTextBox()'/>Grade:<label/>" + "<input class='number_grade' type='number' max='10' min='1' style='width:78px' />";

        var removebutton = document.createElement('button');
        removebutton.innerHTML = "Remove";
        removebutton.style.background = "rgb(214, 42, 16)";
        removebutton.style.color = "white";
        removebutton.style.border = "rgb(241, 35, 4)";
        removebutton.style.padding = "5px 10px";
        removebutton.style.marginBottom = "20px";
        removebutton.onclick = function () {
            document.getElementById(divname).removeChild(newdiv1);
            // var card_footer_2 = document.getElementById(card_footer_2);
            // card_footer_2.removeChild(newdiv1)
        }
    }
    newdiv5.append(newdiv6, newdiv7);
    newdiv1.append(newdiv2, newdiv3, newdiv4, newdiv5, removebutton);
    // console.log("abhinav.....", document.getElementById(divname));
    document.getElementById(divname).appendChild(newdiv1);
    counter++;
    console.log(counter);
    console.log(newdiv1.className);
}

// function removeEducation(edudiv, divname) {
//     // console.log("deleted");
//     // document.getElementById(edudiv).removeChild(document.getElementsByClassName(divname)[0]);
//     // counter--;
// }

// enable diisable
function EnableDisableTextBox() {
    var percentage = document.getElementById("percentage");
    var marks_obtained_per = document.getElementById("marks_Obtained_per");
    var marks_obtained_grade = document.getElementById("marks_Obtained_grade");
    marks_obtained_per.disabled = percentage.checked ? false : true;
    marks_obtained_grade.disabled = grade.checked ? false : true;
    if (marks_obtained_per.disabled) {
        marks_obtained_per.focus();
    }
    else {
        (marks_obtained_grade.disabled)
        marks_obtained_grade.focus();
    }
}

// date
var inp1 = document.getElementById("radio_date");
var inp2 = document.getElementById("end_date");
inp1.addEventListener("input", function () {
    document.getElementById("end_date").disabled = this.value != "";
});
inp2.addEventListener("input", function () {
    document.getElementById("radio_date").disabled = this.value != "";
})
// function EnableDisableDate() {
//     document.querySelectorAll('.date_switch');
//     var radio_date = document.getElementById(radio_date).disabled;
//     if (end_date.value == false) {
//         document.getElementById(radio_date).disabled = false;
//     }
//     else {
//         document.getElementById(radio_date).disabled = true
//     }

// }

// skill section
var skillcounter = 1;
var skilllimit = 5;
function addSkill(divname1) {

    if (skillcounter == skilllimit) {
        console.log("You have reached the limit of adding inputs");
    }
    else {
        var snewdiv1 = document.createElement('div');
        snewdiv1.setAttribute("id", "newdivv_1");
        snewdiv1.className = "addskillclass";
        snewdiv1.style.marginTop = "50px";

        var snewdiv2 = document.createElement('div');
        snewdiv2.setAttribute("id", "newdivv_2");
        snewdiv2.className = "st-exp";
        snewdiv2.innerHTML = "<label>Work Type</label>" + "<input type = 'text' placeholder='Name'>" + "<p></p>" + "<label>Company Name</label>" + "<input type = 'text' placeholder='Name'>";

        var snewdiv3 = document.createElement('div');
        snewdiv3.setAttribute("id", "newdivv_3");
        snewdiv3.className = "st-drtn";
        snewdiv3.innerHTML = "<label for='drsn'>Duration:</label>" + "<input type ='date' placeholder ='date'>" + "&nbsp" + "<input id='end_date1' type='date' placeholder='date'>" + "<p>to &nbsp <input id='radio_date1' type='radio' onclick='EnableDisableDate()'>Present<p/>";


        var removebutton1 = document.createElement('button');
        removebutton1.innerHTML = "Remove";
        removebutton1.style.background = "rgb(214, 42, 16)";
        removebutton1.style.color = "white";
        removebutton1.style.border = "rgb(241, 35, 4)";
        removebutton1.style.padding = "5px 10px";
        removebutton1.style.marginBottom = "20px";
        removebutton1.onclick = function () {
            document.getElementById(divname1).removeChild(snewdiv1)
            // var divname_1 = document.getElementById(divname1);
            // divname_1.removeChild(snewdiv1);
        }
    }
    snewdiv1.append(snewdiv2, snewdiv3, removebutton1);
    // var tag_inp = document.getElementById('tag_inp');
    // tag_inp.prepend(snewdiv1);
    // var divname1 = document.getElementById(divname1);
    document.getElementById(divname1).append(snewdiv1);

    // skillcounter++;
    // console.log(counter);

}

// tag section
let tags = [];

function addTag(e) {
    let code = (e.keyCode ? e.keyCode : e.which);
    if (code != 13) {
        return;
    }
    let tag = e.target.value.trim();
    if (tag.length < 1 || tags.includes(tag)) {
        e.target.value = "";
        return;
    }

    let index = tags.push(tag);

    let tagItem = document.createElement("div");
    tagItem.classList.add("item");
    tagItem.innerHTML = `
    <span class = "delete-btn" onclick="deleteTag(this,'${tag}')">
    &times;
    </span>
    <span>${tag}</span>
    `;
    document.querySelector(".tag-input .tag-list").appendChild(tagItem);
    e.target.value = "";



    function deleteTag(ref, tag) {
        let parent = ref.parentNode.parentNode;
        parent.removeChild(ref.parentNode);
        let index = tags.indexOf(tag);
        tags.splice(index);
    }
}

document.querySelector(".tag-input input").addEventListener("keyup", addTag);
