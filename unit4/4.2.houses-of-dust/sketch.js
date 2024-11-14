/* Knowles' poem causes people to imagine different houses in different settings with different inhabitants.
   I wanted to replicate that imagination with more creative or unnatural pictures. I wanted to invoke
   images of houses with inhabitants that didn't make sense. I also wanted to use more abstract feelings
   to describe a house like "a house of love". This type of abstract symbolism will invoke different
   images based on the viewer. I really like how my specific words create some reasonable houses that are
   very easy to imagine and others that take some time and creativity to picture.
*/


//Initialize poem variable
let poem = '';
//Define grammar
let grammar = tracery.createGrammar({
   "material":["glass", "wood", "metal", "seashells", "nature", "fabric", "calm", "sand",
               "paper", "plastic", "love", "leaves", "stones", "dirt", "clay", "cardboard", "canvas"],
   "place":["On a hill", "In the mountains", "In the sea", "At the seaside", "In the suburbs",
            "Deep in the forest", "On a farm", "In the city", "In a meadow", "Atop a mountain",
            "On the beach", "In the sky", "Below the ground", "In the country", "In Virginia", "In a neighborhood",
            "In a cave", "On a cloud", "In the waves", "In the desert", "In the rainforest", "In the snow",
            "Atop a tree", "Between skyscrapers", "Within a tree", "In Maine"],
   "light_source":["candlelight", "natural light", "firelight", "fireflies"], 
   "inhabitants":["people who love to laugh", "a family", "nature lovers", "friends", "newlyweds", "sisters",
                  "children", "college students", "Michael Myers", "avid readers", "computer scientists", 
                  "people and pets", "little girls", "ancient Greeks", "people trying to do better",
                  "an old couple", "a woman", "someone chasing a dream", "three witches", "rubber duck enthusiasts",
                  "Julius Caesar's ghost", "people seeking refuge"],
   "origin":"A house of #material#\n#place#\nUsing #light_source#\nInhabited by #inhabitants#"
});

function setup() {
  //Made canvas slightly wider to accomodate words.
  createCanvas(1000, 800);
  //Added no loop
  noLoop();
}

function draw() {
  background(220);
  //Set text size to 25
  textSize(25);
  //Change text color to indigo
  fill('Indigo');
 
  //A loop to create the stanzas on the left side of the screen
  for(let i = 1; i < 15; i+=3){
    //Generate the poem using the defined grammar
    poem = grammar.flatten("#origin#");
    //Put the poem on the screen
    text(poem, 50, i*50);
  }
  
  //A loop to create the stanzas on the right side of the screen
  for(let i = 1; i < 15; i+=3){
    //Generate the poem using the defined grammar
    poem = grammar.flatten("#origin#");
    //Put the poem on the screen
    text(poem, 550, i*50);
  }

}
