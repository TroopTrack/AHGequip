function getLinks() {
  var response = JSON.parse(this.responseText);
  var assetCount = response.assets.length;
  var winUrl, macUrl, linUrl, asset;

  console.dir(response)

  for (var i = 0; i < assetCount; i++) {
    asset = response.assets[i]
    console.dir(asset)
    if (/^AHGequip-Setup-.+\.exe$/.test(asset.name)) {
      winUrl = asset.browser_download_url;
    } else if (/^AHGequip-.+\.dmg$/.test(asset.name)) {
      macUrl = asset.browser_download_url;
    } else if (/AHGequip-.+-x86_64\.AppImage/.test(asset.name)) {
      linUrl = asset.browser_download_url;
    }
  }

  console.log('winUrl: ', winUrl)

  winLink.href = winUrl
  macLink.href = macUrl
  linLink.href = linUrl
}

var request = new XMLHttpRequest();
request.onload = getLinks;
request.open('get', 'https://api.github.com/repos/TroopTrack/AHGequip/releases/latest', true);
request.send();
