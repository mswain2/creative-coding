/* I wanted to use Tracery for this project because I really like the random generation of Tracery and how it
   works. I wanted to create a "life tips" kind of book that would have some sentences that made sense in the
   realm of advice, and other sentences that seemed a little ridiculous when seen as advice. I also have a lot
   of different options within my grammar because I wanted plenty of variety in the final product. I really
   like how this turned out content wise. For the appearance of the book, I added page numbers and split it
   into chapters.
*/

//Grammar randomly generated using https://perchance.org/useful-generators
let grammar = tracery.createGrammar({
    bookTitle : "#help# about #topic#",
    chapterTitle : "#question# to #verb.capitalize#",
    sentence : "It is #adjective# to #adverb# #verb# #adjective# #noun#.",
    help : ["Tips", "Facts", "Details", "Advice", "Pointers", "Hints"],
    topic : ["Life", "College", "School", "Relaxation"],
    question : ["How", "What", "Why", "Who", "When", "Where"],
    verb : ["kiss", "dream of", "call", "succeed", "command", "smash", "cheer for", "shock", "impress", "destroy", "compare", "fail", "influence", "shrug at", "wail at", "applaud", "obey", "reflect on", "watch", "smile at", "harass", "scratch", "advise", "grin at", "ignore", "suck up to", "sniff at", "sparkle at", "appreciate", "encourage", "rock", "kneel before", "rejoice at", "ask of"],
    adjective : ["measly", "colossal", "distressed", "crabby", "qualified", "assorted", "grouchy", "maniacal", "blushing", "aggravating", "insecure", "feisty", "abrasive", "critical", "striking", "lonely", "radiant", "wary", "happy", "cowardly", "fair", "trustworthy", "encouraging", "big-hearted", "wrathful", "exhausted", "childlike", "available", "nonchalant", "harmless", "condescending", "hospitable", "simple", "authentic", "likeable", "gentle", "youthful", "knowledgeable", "imperfect", "fretful"],
    adverb : ["always", "never", "often", "recklessly", "unexpectedly", "softly", "promptly", "briefly", "rightfully", "loudly", "daily", "bravely", "instantly", "thoroughly", "swiftly", "clearly", "frequently", "mockingly", "playfully", "politely", "justly", "victoriously", "honestly", "tenderly", "seldom", "boldly", "weakly", "meaningfully", "kindheartedly", "slowly", "frightfully", "monthly", "silently", "quietly", "truthfully", "valiantly", "calmly", "kiddingly"],
    noun : ["whales", "mice", "cows", "crows", "monkeys", "ostriches", "tailors", "sharks", "gentlemen", "ladies", "players", "bears", "panthers", "men in suits", "superiors", "teachers", "engineers", "hairdressers", "motel desk clerks", "proofreaders", "officers", "cartographers", "librarians", "waiters", "real estate agents", "sailors", "heavy truck drivers", "fabric menders", "social workers", "computer support specialists", "tree pruners", "floor sanders", "watch repairers", "referees", "historians", "general managers", "street vendors", "statisticians", "railroad conductors", "janitors", "legal assistants"],
    paragraph : "#addSentences#", 
    addSentences : ["#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#","#sentenceLoop# #sentence#", "#sentence#"],
    sentenceLoop : "#addSentences#",

});

//Add modifiers
grammar.addModifiers(tracery.baseEngModifiers);


function setup() {
  noCanvas();
  
  // create the HTML #content container
  let content = createElement("div");
  content.attribute("id","content");
  
  // add the book title
  content.child(createElement("h1",grammar.flatten("#bookTitle#")))
  
  // chapter loop
  let c = 1;
  do {
    
    // pick a chapter title
    content.child(createElement("h2",  "Chapter " + c + ": " + grammar.flatten("#chapterTitle#")));
    
    // paragraph loop
    let p = 0;
    do {
      content.child(createElement("p",grammar.flatten("#paragraph#")));
      p++;
    }while (p < random(40,130));
    c++;
  }while (c < 55);
 
  // trigger the polyfill rendering
  window.PagedPolyfill.preview();
  
}
