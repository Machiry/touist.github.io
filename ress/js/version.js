
var creator 			= "touist";
var project 			= "touist";
var branch  			= "master";
var changelogfile 		= "CHANGELOG";
var licencefile 		= "LICENSE";
var participatefile		= "CONTRIBUTING.md";
var contributorfile 	= "CONTRIBUTORS.md"


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

//lien de telchargement
function LienTelechargement(version, zip_all) {
  var architecture = "x86_64";
  var type = ".zip";
  var os = "invalide"
  var logo = "invalide";

  if (navigator.appVersion.indexOf("Win") != -1) {
    os = "windows";
    logo = "windows";
    architecture = "x86";
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

  lien = "https://github.com/" + creator + "/" + project + "/releases/download/"
         + version + "/TouIST-jar-" + version + "-" + os + "-" + architecture + type;

  if (navigator.appVersion.indexOf("invalide") != -1)
    lien = "https://api.github.com/replaceos/" + creator + "/" + project + "/zipball/" + version;

  //creation icon
  if (logo.indexOf("invalide") == -1) {
    $("#logo_dl").attr('class','fa fa-' + logo + ' fa-3');
  }
  $('#main_download').attr('href', lien);
}

// Tooltip provided by bootstrap
$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

// Stuff for Google Analytics
(function (i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r; i[r] = i[r] || function () {
        (i[r].q = i[r].q || []).push(arguments)
    }, i[r].l = 1 * new Date(); a = s.createElement(o),
        m = s.getElementsByTagName(o)[0]; a.async = 1; a.src = g; m.parentNode.insertBefore(a, m)
    })(window, document, 'script', 'https://www.google-analytics.com/analytics.js', 'ga');
ga('create', 'UA-88710120-2', 'auto');
ga('send', 'pageview');