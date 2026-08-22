// map_tooltip_helper.js — MarkerClusterer renderer + cluster tooltips for Flutter web.
window._registerClusterTooltipHelper = function () {
  if (window._clusterTooltipHelper) return;
  window._clusterTooltipHelper = {
    overlay: null,
    activeTooltips: [],
    getPixelPosition: function (map, lat, lng) {
      if (!this.overlay) {
        this.overlay = new google.maps.OverlayView();
        this.overlay.onAdd = function () {};
        this.overlay.draw = function () {};
        this.overlay.onRemove = function () {};
      }
      this.overlay.setMap(map);
      const projection = this.overlay.getProjection();
      if (projection) {
        return projection.fromLatLngToContainerPixel(
          new google.maps.LatLng(lat, lng),
        );
      }
      return null;
    },
    registerTooltip: function (tooltip) {
      if (!this.activeTooltips.includes(tooltip)) {
        this.activeTooltips.push(tooltip);
      }
    },
    hideAllTooltips: function () {
      for (const element of this.activeTooltips) {
        if (element?.style) {
          element.style.display = "none";
        }
      }
      this.activeTooltips = [];
    },
  };
};

window._createCypherviewMarkerClusterer = function (map, markers, config) {
  window._registerClusterTooltipHelper();

  const MC = window.markerClusterer;
  if (!MC || !MC.MarkerClusterer) {
    throw new Error("markerClusterer.MarkerClusterer not loaded");
  }

  const iconUrls = (config && config.iconUrls) || {};
  const isSatellite = !!(config && config.isSatellite);
  const assetNames = (config && config.assetNames) || {};
  const textColor = isSatellite ? "#000000" : "#FFFFFF";

  function iconUrlForDensity(density) {
    return iconUrls[density] || iconUrls.low || iconUrls.medium || "";
  }

  function assetNamesForCluster(cluster) {
    const list = cluster.markers || [];
    const names = [];
    for (let i = 0; i < list.length && names.length < 10; i++) {
      const id = list[i] && list[i].__cypherviewAssetId;
      if (id && assetNames[id]) {
        names.push(assetNames[id]);
      }
    }
    return names;
  }

  function attachClusterTooltip(clusterMarker, tooltip, gMap) {
    const helper = window._clusterTooltipHelper;

    google.maps.event.addListener(clusterMarker, "mouseover", function () {
      try {
        if (!gMap) {
          tooltip.style.display = "block";
          tooltip.style.position = "fixed";
          tooltip.style.left = "50%";
          tooltip.style.top = "50%";
          tooltip.style.transform = "translate(-50%, -50%)";
          return;
        }

        if (helper) {
          helper.registerTooltip(tooltip);
        }

        const position = clusterMarker.getPosition();
        if (!position) return;

        const lat =
          typeof position.lat === "function" ? position.lat() : position.lat;
        const lng =
          typeof position.lng === "function" ? position.lng() : position.lng;

        let point = null;
        if (helper && helper.getPixelPosition) {
          point = helper.getPixelPosition(gMap, lat, lng);
        }

        const mapDiv = gMap.getDiv();
        const mapRect = mapDiv.getBoundingClientRect();

        if (point) {
          tooltip.style.display = "block";
          tooltip.style.position = "fixed";
          tooltip.style.left = mapRect.left + point.x + 30 + "px";
          tooltip.style.top = mapRect.top + point.y - 30 + "px";
          tooltip.style.transform = "none";
        } else {
          tooltip.style.display = "block";
          tooltip.style.position = "fixed";
          tooltip.style.left = mapRect.left + mapRect.width * 0.6 + "px";
          tooltip.style.top = mapRect.top + mapRect.height * 0.4 + "px";
          tooltip.style.transform = "none";
        }
      } catch (e) {
        tooltip.style.display = "block";
        tooltip.style.position = "fixed";
        tooltip.style.left = "50%";
        tooltip.style.top = "50%";
        tooltip.style.transform = "translate(-50%, -50%)";
      }
    });

    google.maps.event.addListener(clusterMarker, "mouseout", function () {
      tooltip.style.display = "none";
      if (helper && helper.activeTooltips) {
        const idx = helper.activeTooltips.indexOf(tooltip);
        if (idx >= 0) {
          helper.activeTooltips.splice(idx, 1);
        }
      }
    });
  }

  const renderer = {
    render: function (cluster, _stats, gMap) {
      const clusterMarkers = cluster.markers;
      const count = clusterMarkers ? clusterMarkers.length : 0;
      let density = "heavy";
      if (count <= 10) density = "low";
      else if (count <= 50) density = "medium";

      const position = cluster.position;
      if (!position) {
        return new google.maps.Marker({
          position: new google.maps.LatLng(0, 0),
        });
      }

      const clusterMarker = new google.maps.Marker({
        position: position,
        icon: {
          url: iconUrlForDensity(density),
          scaledSize: new google.maps.Size(45, 45),
        },
        label: {
          text: String(count),
          color: textColor,
          fontSize: "13px",
          fontWeight: "bold",
        },
      });

      const names = assetNamesForCluster(cluster);
      if (names.length > 0 && document.body) {
        const tooltip = document.createElement("div");
        tooltip.className = "cluster-tooltip";
        tooltip.style.display = "none";
        for (const name of names) {
          const nameDiv = document.createElement("div");
          nameDiv.textContent = name;
          nameDiv.style.margin = "2px 0";
          tooltip.appendChild(nameDiv);
        }
        document.body.appendChild(tooltip);
        attachClusterTooltip(clusterMarker, tooltip, gMap);
      }

      return clusterMarker;
    },
  };

  const options = {
    map: map,
    markers: markers,
    renderer: renderer,
  };

  if (MC.SuperClusterAlgorithm) {
    options.algorithm = new MC.SuperClusterAlgorithm({
      radius: 72,
      maxZoom: 16,
      minPoints: 2,
    });
  }

  const clusterer = new MC.MarkerClusterer(options);

  function hideTooltips() {
    const h = window._clusterTooltipHelper;
    if (h && h.hideAllTooltips) {
      h.hideAllTooltips();
    }
  }
  ["zoom_changed", "bounds_changed", "drag"].forEach(function (evt) {
    google.maps.event.addListener(map, evt, hideTooltips);
  });

  return clusterer;
};
