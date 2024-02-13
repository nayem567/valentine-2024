console.log('hi');

var yes = document.getElementById('yes');
var no = document.getElementById('no');
var title = document.querySelector('#title');
var title_hidden = document.querySelector('h2');
var angry_img = document.querySelector('#angry_img');
var top_img = document.querySelector('#top_img');
var yes_img = document.querySelector('#yes_img');


no.addEventListener('click', increase_yes);

function increase_yes() {
    yes.style.width = (yes.offsetWidth + 20) + 'px';
    yes.style.height = (yes.offsetHeight + 20) + 'px';
    yes.style.fontSize = (parseFloat(window.getComputedStyle(yes).fontSize) + 12) + 'px';
    no.innerText = "No :/ ?";
    // ==========================
    no.style.width = (no.offsetWidth - 8) + 'px';
    no.style.height = (no.offsetHeight - 8) + 'px';
    no.style.fontSize = (parseFloat(window.getComputedStyle(no).fontSize) - 3) + 'px';
    angry_img.style.display = 'block';
    // angry_img.style.width = (angry_img.offsetWidth - 10) + 'px';
    // angry_img.style.height = (angry_img.offsetHeight - 10) + 'px';

    top_img.style.display = 'none';
    // 

    // changing no text one after another 
    no.addEventListener('click', text_3);
    function text_3() {
        no.innerText = "Nooooo?";
        no.addEventListener('click', text_4);
        function text_4() {
            no.innerText = "Nooooo? No No No?";
            
            no.addEventListener('click', text_5);
            function text_5() {
                no.innerText = "No No? Or Yes No? ";

                no.addEventListener('click', text_6);
                function text_6() {
                    no.innerText = "No No? No?";

                }
            }
        }
    }
    
}

// Yes =========================================

yes.addEventListener('click', bubu_dudu);

function bubu_dudu(){
    yes_img.style.display = 'block';
    no.style.display = 'none';
    title.style.display = 'none';
    title_hidden.style.display = 'block';
    yes.style.display = 'none';
    angry_img.style.display = 'none';
    // 

}

