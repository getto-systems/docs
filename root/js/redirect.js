var pathnames = location.pathname.split("/");
var current_version;
var path;
if (!pathnames[1] || !(pathnames[1] + "").match(/^[0-9.-]+/)) {
  current_version = "1.0.0";
  path = "";
} else {
  current_version = pathnames[1];
  path = pathnames.slice(2).join("/") + location.search;
}
GettoDetect({
  version_to_path: function(version){
    return "/" + version + "/" + path;
  }
}).from_current_version(current_version,function(href) {
  location.href = href;
});
