var pathnames = location.pathname.split("/");
GettoDetect({
  version_to_path: function(version){
    return "/" + version + "/" + path + location.search;
  }
}).from_current_version((pathnames[1] || "0.0.0"),function(path) {
  location.href = path;
});
