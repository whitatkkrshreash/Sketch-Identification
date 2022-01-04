function setup(){
    canvas= createCanvas(280,280);
    canvas.center();
    background("White");
    canvas.mouseReleased(classifyCanvas);
    synth=window.speechSynthesis;

}
function preload(){
    classifier=ml5.imageClassifier('DoodleNet');
}
function draw(){
    strokeWeight(9);
    stroke("black");
    if(mouseIsPressed){
        line(pmouseX,pmouseY,mouseX,mouseY);
    }
}
function clearCanvas(){
    background("White");
}
function classifyCanvas(){
    classifier.classify(canvas,gotResult);
}
function gotResult(error,results){
    if (error){
        console.error(error);
    }
    console.log(results);
    document.getElementById('label').innerHTML='Label : '+results[0].label;
    document.getElementById('Confidence').innerHTML='Confidence : '+Math.round(results[0].confidence *100)+'%' ;
    
}