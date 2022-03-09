function downloadApp(){

    window.open("https://exp-shell-app-assets.s3.us-west-1.amazonaws.com/android/%40aleff.resler/icmsSt-6430111ffb2f489bbce0d7d383c161d0-signed.apk", "_blank");

    alert("")

}

var btnDownload = window.document.getElementById("btnDownload")

btnDownload.addEventListener("click", downloadApp)