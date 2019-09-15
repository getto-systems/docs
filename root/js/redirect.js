var pathnames = location.pathname.split("/");
var version;
var path;
if (!pathnames[1] || !(pathnames[1] + "").match(/^[0-9.-]+/)) {
  version = "1.0.0";
  path = "";
} else {
  version = pathnames[1];
  path = pathnames.slice(2).join("/") + location.search;
}
GettoDetect().from_current_version(version,function(href) {
  location.href = href.replace(/index.html$/, "") + path;
});
