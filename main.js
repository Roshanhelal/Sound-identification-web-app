//https://teachablemachine.withgoogle.com/models/2P7yo-Y2E/

function startClassification(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/2P7yo-Y2E/model.json',modelready)

}

function modelready(){
    classifier.classify(gotResults)
}