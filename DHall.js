
    var DHall = {
      Image: {
    xmlns: "http://schemas.microsoft.com/deepzoom/2008",
    Url: "//joshp36.github.io/DHallViewer/DHall_pieces/",
    Format: "png",
    Overlap: "1",
    TileSize: "256",
    Size: {
      Width:  "41618",
      Height: "14090"
    },
    minLevel: 13
  }
};
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer",
      prefixUrl: "//openseadragon.github.io/openseadragon/images/",
      tileSources: DHall,
      showNavigator:  false,
      visibilityRatio: 1,
      constrainDuringPan: false,
      minZoomLevel: 1
    });