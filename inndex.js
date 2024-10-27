function copyText() {
    var copyText = document.getElementById("input");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}