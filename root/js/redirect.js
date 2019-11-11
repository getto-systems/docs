(function(info) {
  FindNextVersion.find({ from: info.version, url: FindNextVersion.url.index }).then(function(version) {
    location.href = "/" + version + "/" + info.path + location.search;
  });
})(FindNextVersion.parse_pathname(location.pathname, { fallback_version: "1.23.0" }));
