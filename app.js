var pronoun = ['the','our'];
var adj = ['great', 'big' ];
var noun = ['jogger','racoon'];
var dom = ['.com','.net','.es']

for ( var i= 0; i < pronoun.length; i++){
    for(var j = 0; j < adj.length; j++){
        for (var l = 0; l < noun.length; l++){
            for ( var r = 0; r < dom.length; r++){
                console.log(pronoun[i] + adj [j] + noun[l] + dom [r])
            }
        }
    }
}