
var zip_all;
var version;
$.get("https://api.github.com/repos/" + creator + "/" + project + "/releases/latest", function (data) {
  zip_all = data.zipball_url;
  version = getVersion(data.zipball_url);
  document.getElementById('version').innerHTML = version;
  LienTelechargement(version, zip_all);
});


function getVersion(zip_all) {
  slashs = zip_all.split('/');
  return slashs[slashs.length - 1];
}

//lien github
document.getElementById('github_link').href = "https://github.com/" + creator + "/" + project;

//lien de telchargement
function LienTelechargement(version, zip_all) {
  var base = "https://github.com/" + creator + "/" + project + "/releases/download/" + version + "/" + project + "-" + version + "-";
  var architecture = "x64";
  var type = ".zip";
  var os = "invalide"
  var logo = "invalide";
  var fin = "-" + architecture + type;

  if (navigator.appVersion.indexOf("Win") != -1) {
    os = "windows";
    logo = "windows";
  }
  if (navigator.appVersion.indexOf("Mac") != -1) {
    os = "mac";
    logo = "apple";
  }
  //if (navigator.appVersion.indexOf("X11")!=-1)       OS  ="UNIX";
  if (navigator.appVersion.indexOf("Linux") != -1) {
    os = "linux";
    logo = "linux";
  }

  lien = base + os + fin;
  if (navigator.appVersion.indexOf("invalide") != -1)
    lien = "https://api.github.com/replaceos/" + creator + "/" + project + "/zipball/" + version;

  //creation icon
  if (logo.indexOf("invalide") == -1) {
    $("#logo_dl").attr('class','fa fa-' + logo + ' fa-3');
  }

  $('#header_download').attr('href', lien);
  $('#main_download').attr('href', lien);

}