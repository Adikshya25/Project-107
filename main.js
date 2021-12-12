function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier= ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/s-gF0o4Rh/model.json", modelReady);
}

function modelReady(){
    classifier.classify(gotResults);
}