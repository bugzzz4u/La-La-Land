function tellStory()
{
   //gather elements
   var txtBoy = document.getElementById("txtBoy");
   var txtGirl= document.getElementById("txtGirl");
   var txtGeol  =document.getElementById("txtGeographic");
   var txtVerb =document.getElementById("txtVerb");
   var txtContainer =document.getElementById("txtContainer");
   var txtLiquid =document.getElementById("txtLiquid");
   var txtPart =document.getElementById("txtPart");
   var txtGerund =document.getElementById("txtGerund");
   var output =document.getElementById("output");

   //create variables for input
   var boy  = txtBoy.value;
   var girl = txtGirl.value;
   var geol =txtGeol.value;
   var verb =txtVerb.value;
   var container =txtContainer.value;
   var liquid =txtLiquid.value;
   var part =txtPart.value;
   var gerund =txtGerund.value;

   //write the story
   var Story = boy + " and " + girl +" went up the "+ geol;
   Story += " to "+ verb +" a "+ container;
   Story +=  " of " + liquid;
   Story += boy + " fell down and broke his " + part;
   Story += " and "+ girl + " came " +gerund+ " after.";

   //copy story to output
   output.innerHTML= Story;   
}