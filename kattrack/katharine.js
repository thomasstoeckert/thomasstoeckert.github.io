var request = new XMLHttpRequest();
request.onload = function() {

    // get the file contents
    var fileContent = this.responseText;

    // split into lines
    var fileContentLines = fileContent.split( '\n').filter(function(line){
        return line !== '';
    });

    // get a random index (line number)
    var randomLineIndex = Math.floor( Math.random() * fileContentLines.length );

    // add the random line in a div
    document.getElementById( 'katquote' ).textContent = fileContentLines[randomLineIndex];
};
request.open( 'GET', 'katharine.txt', true );
request.send();