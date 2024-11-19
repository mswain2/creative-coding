/*I chose to use Alice in Wonderland as my source text because I like how whimsical it is and I thought
  it would make for an interesting source of a generative letter. The link to the exact copy I used is in
  the index.html file.
*/

//Initialize the RiTa markov
let rm = RiTa.markov(2);
//Get the source text (Alice in Wonderland)
let data = document.getElementById("source").innerText;
//Add the source text to RiTa
rm.addText(data);


function setup(){
    //Generate lines from the source text
    let lines = rm.generate(6);
	// find the element to add to
    let letter = select("#letter"); 

    // add a salutation. Edited
    letter.child( createP('My Dearest Reader,'));

    // loop through the array of lines, adding each as a new p element
    for (let l = 0; l < lines.length; l++){
	    let paragraph = createP(lines[l]);
	    letter.child(paragraph);
    }

    // add a closing. Edited
    letter.child( createP('Sincerest Goodbyes,<br>Kenzie'));
}

//Add mouse pressed function
function mousePressed(){
    //Remove the letter
	letter.remove();
    //Create a new letter
	letter = createDiv();
    //Set the id back to letter
	letter.id("letter");
    //Call the setup method to generate another letter
	setup();
}
