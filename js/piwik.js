var pkBaseURL = (("https:" == document.location.protocol) ? "https://stats.arthurburns.co.uk/" : "http://stats.arthurburns.co.uk/");
document.write(unescape("%3Cscript src='" + pkBaseURL + "piwik.js' type='text/javascript'%3E%3C/script%3E"));
try {
    var piwikTracker = Piwik.getTracker(pkBaseURL + "piwik.php", 1);
    piwikTracker.trackPageView();
    piwikTracker.enableLinkTracking();
} catch( err ) {}
