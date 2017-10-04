function getLinks() {
  var response = JSON.parse(this.responseText);
  var assetCount = response.assets.length;
  var asset;

  for (var i = 0; i < assetCount; i++) {
    asset = response.assets[i]
    if (/^AHGequip-Setup-.+\.exe$/.test(asset.name)) {
      winLink.href = asset.browser_download_url;
    } else if (/^AHGequip-.+\.dmg$/.test(asset.name)) {
      macLink.href = asset.browser_download_url;
    } else if (/AHGequip-.+-x86_64\.AppImage/.test(asset.name)) {
      linLink64.href = asset.browser_download_url;
    } else if (/AHGequip-.+-i386\.AppImage/.test(asset.name)) {
      linLink32.href = asset.browser_download_url;
    }
  }
}

var request = new XMLHttpRequest();
request.onload = getLinks;
request.open('get', 'https://api.github.com/repos/TroopTrack/AHGequip/releases/latest', true);
request.send();
