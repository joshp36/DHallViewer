
    var DHallz = {
      Image: {
    xmlns: "http://schemas.microsoft.com/deepzoom/2008",
    Url: "//joshp36.github.io/DHallViewer/DHall_pieces/",
    Format: "png",
    Overlap: "1",
    TileSize: "256",
    minLevel: 14,
    Size: {
      Width:  "41618",
      Height: "14090"
    }
  }
};
    
    var viewer = OpenSeadragon({
      id: "seadragon-viewer",
      prefixUrl: "//openseadragon.github.io/openseadragon/images/",
      tileSources: DHallz,
      showNavigator:  false,
      visibilityRatio: 0.85,
      constrainDuringPan: true,
      minZoomLevel: 1
    });