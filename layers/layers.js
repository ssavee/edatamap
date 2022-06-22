var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_MV_SPARCEL_1 = new ol.layer.Tile({
                            source: new ol.source.TileWMS(({
                              url: "http://110.164.49.68:8081/geoserver/WMSDOL/wms?version%3D1.1.0",
    attributions: ' ',
                              params: {
                                "LAYERS": "MV_SPARCEL",
                                "TILED": "true",
                                "VERSION": "1.1.1"},
                            })),
                            title: "MV_SPARCEL",
                            opacity: 1.000000,
                            
                            
                          });
              wms_layers.push([lyr_MV_SPARCEL_1, 0]);
var format__2 = new ol.format.GeoJSON();
var features__2 = format__2.readFeatures(json__2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__2.addFeatures(features__2);
var lyr__2 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__2, 
                style: style__2,
                interactive: true,
                title: 'แนวเขตเทศบาลเมืองทุ่งสง'
            });
var format_boundarypoint_3 = new ol.format.GeoJSON();
var features_boundarypoint_3 = format_boundarypoint_3.readFeatures(json_boundarypoint_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundarypoint_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundarypoint_3.addFeatures(features_boundarypoint_3);
var lyr_boundarypoint_3 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundarypoint_3, 
                style: style_boundarypoint_3,
                interactive: true,
                title: '<img src="styles/legend/boundarypoint_3.png" /> boundarypoint'
            });
var format_block_4 = new ol.format.GeoJSON();
var features_block_4 = format_block_4.readFeatures(json_block_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_block_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_block_4.addFeatures(features_block_4);
var lyr_block_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_block_4, 
                style: style_block_4,
                interactive: true,
                title: '<img src="styles/legend/block_4.png" /> block'
            });
var format_boundary_5 = new ol.format.GeoJSON();
var features_boundary_5 = format_boundary_5.readFeatures(json_boundary_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_boundary_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_boundary_5.addFeatures(features_boundary_5);
var lyr_boundary_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_boundary_5, 
                style: style_boundary_5,
                interactive: true,
                title: '<img src="styles/legend/boundary_5.png" /> boundary'
            });
var format_community_6 = new ol.format.GeoJSON();
var features_community_6 = format_community_6.readFeatures(json_community_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_community_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_community_6.addFeatures(features_community_6);
var lyr_community_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_community_6, 
                style: style_community_6,
                interactive: true,
                title: '<img src="styles/legend/community_6.png" /> community'
            });
var format__7 = new ol.format.GeoJSON();
var features__7 = format__7.readFeatures(json__7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__7.addFeatures(features__7);
var lyr__7 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__7, 
                style: style__7,
                interactive: true,
                title: '<img src="styles/legend/_7.png" /> ชั้นข้อมูลแนวเขตชุมชน'
            });
var format_building_8 = new ol.format.GeoJSON();
var features_building_8 = format_building_8.readFeatures(json_building_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_building_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_building_8.addFeatures(features_building_8);
var lyr_building_8 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_building_8, 
                style: style_building_8,
                interactive: true,
                title: '<img src="styles/legend/building_8.png" /> building'
            });
var format_hydrop_9 = new ol.format.GeoJSON();
var features_hydrop_9 = format_hydrop_9.readFeatures(json_hydrop_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hydrop_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hydrop_9.addFeatures(features_hydrop_9);
var lyr_hydrop_9 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hydrop_9, 
                style: style_hydrop_9,
                interactive: true,
                title: '<img src="styles/legend/hydrop_9.png" /> hydrop'
            });
var format_parcel_10 = new ol.format.GeoJSON();
var features_parcel_10 = format_parcel_10.readFeatures(json_parcel_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcel_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_parcel_10.addFeatures(features_parcel_10);
var lyr_parcel_10 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcel_10, 
                style: style_parcel_10,
                interactive: true,
                title: '<img src="styles/legend/parcel_10.png" /> parcel'
            });
var format__11 = new ol.format.GeoJSON();
var features__11 = format__11.readFeatures(json__11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__11.addFeatures(features__11);
var lyr__11 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__11, 
                style: style__11,
                interactive: true,
                title: '<img src="styles/legend/_11.png" /> แนวเขตเลือกตั้ง'
            });
var format_hydrol_12 = new ol.format.GeoJSON();
var features_hydrol_12 = format_hydrol_12.readFeatures(json_hydrol_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_hydrol_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_hydrol_12.addFeatures(features_hydrol_12);
var lyr_hydrol_12 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_hydrol_12, 
                style: style_hydrol_12,
                interactive: true,
                title: '<img src="styles/legend/hydrol_12.png" /> hydrol'
            });
var format__13 = new ol.format.GeoJSON();
var features__13 = format__13.readFeatures(json__13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__13.addFeatures(features__13);cluster__13 = new ol.source.Cluster({
  distance: 10,
  source: jsonSource__13
});
var lyr__13 = new ol.layer.Vector({
                declutter: true,
                source:cluster__13, 
                style: style__13,
                interactive: true,
                title: '<img src="styles/legend/_13.png" /> ชั้นข้อมูลสถานที่สำคัญทางศาสนา'
            });
var format__14 = new ol.format.GeoJSON();
var features__14 = format__14.readFeatures(json__14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__14.addFeatures(features__14);
var lyr__14 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__14, 
                style: style__14,
                interactive: true,
                title: 'ชุมชนเทศบาลเมืองทุ่งสง'
            });
var format__smartcity_15 = new ol.format.GeoJSON();
var features__smartcity_15 = format__smartcity_15.readFeatures(json__smartcity_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__smartcity_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__smartcity_15.addFeatures(features__smartcity_15);
var lyr__smartcity_15 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__smartcity_15, 
                style: style__smartcity_15,
                interactive: true,
                title: '<img src="styles/legend/_smartcity_15.png" /> ข้อมูล_smartcity'
            });
var format_signaltower_16 = new ol.format.GeoJSON();
var features_signaltower_16 = format_signaltower_16.readFeatures(json_signaltower_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_signaltower_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_signaltower_16.addFeatures(features_signaltower_16);
var lyr_signaltower_16 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_signaltower_16, 
                style: style_signaltower_16,
                interactive: true,
                title: '<img src="styles/legend/signaltower_16.png" /> signal tower'
            });
var format__17 = new ol.format.GeoJSON();
var features__17 = format__17.readFeatures(json__17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__17.addFeatures(features__17);
var lyr__17 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__17, 
                style: style__17,
                interactive: true,
                title: '<img src="styles/legend/_17.png" /> ข้อมูลร้านค้า'
            });
var format__18 = new ol.format.GeoJSON();
var features__18 = format__18.readFeatures(json__18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__18.addFeatures(features__18);
var lyr__18 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__18, 
                style: style__18,
                interactive: true,
                title: '<img src="styles/legend/_18.png" /> ชั้นข้อมูลสถานศึกษา'
            });
var format__19 = new ol.format.GeoJSON();
var features__19 = format__19.readFeatures(json__19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__19.addFeatures(features__19);
var lyr__19 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__19, 
                style: style__19,
                interactive: true,
                title: '<img src="styles/legend/_19.png" /> ชั้นข้อมูลสถานพยาบาล'
            });
var format__20 = new ol.format.GeoJSON();
var features__20 = format__20.readFeatures(json__20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource__20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource__20.addFeatures(features__20);
var lyr__20 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource__20, 
                style: style__20,
                interactive: true,
                title: '<img src="styles/legend/_20.png" /> ชั้นข้อมูลสถานที่สำคัญทางศาสนา'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_MV_SPARCEL_1.setVisible(true);lyr__2.setVisible(true);lyr_boundarypoint_3.setVisible(true);lyr_block_4.setVisible(true);lyr_boundary_5.setVisible(true);lyr_community_6.setVisible(true);lyr__7.setVisible(true);lyr_building_8.setVisible(true);lyr_hydrop_9.setVisible(true);lyr_parcel_10.setVisible(true);lyr__11.setVisible(true);lyr_hydrol_12.setVisible(true);lyr__13.setVisible(true);lyr__14.setVisible(true);lyr__smartcity_15.setVisible(true);lyr_signaltower_16.setVisible(true);lyr__17.setVisible(true);lyr__18.setVisible(true);lyr__19.setVisible(true);lyr__20.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_MV_SPARCEL_1,lyr__2,lyr_boundarypoint_3,lyr_block_4,lyr_boundary_5,lyr_community_6,lyr__7,lyr_building_8,lyr_hydrop_9,lyr_parcel_10,lyr__11,lyr_hydrol_12,lyr__13,lyr__14,lyr__smartcity_15,lyr_signaltower_16,lyr__17,lyr__18,lyr__19,lyr__20];
lyr__2.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_boundarypoint_3.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'x': 'x', 'y': 'y', 'txt_desc': 'txt_desc', 'mgrs': 'mgrs', 'no': 'no', });
lyr_block_4.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid1': 'ogc_fid1', 'ogc_fid0': 'ogc_fid0', 'boundaryor': 'boundaryor', 'zone_id': 'zone_id', 'block_id': 'block_id', });
lyr_boundary_5.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid1': 'ogc_fid1', 'ogc_fid0': 'ogc_fid0', 'boundaryor': 'boundaryor', 'area': 'area', });
lyr_community_6.set('fieldAliases', {'name': 'name', 'rai': 'rai', 'ngan': 'ngan', 'sarwa': 'sarwa', });
lyr__7.set('fieldAliases', {'name': 'name', 'rai': 'rai', 'ngan': 'ngan', 'sarwa': 'sarwa', });
lyr_building_8.set('fieldAliases', {'building_c': 'building_c', 'hs_no': 'hs_no', 'road': 'road', 'name': 'name', 'id': 'id', 'community': 'community', });
lyr_hydrop_9.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'hydrop_nam': 'hydrop_nam', 'area': 'area', 'deep': 'deep', 'volume': 'volume', 'budget': 'budget', 'startdate': 'startdate', 'maintainda': 'maintainda', });
lyr_parcel_10.set('fieldAliases', {'zone_id': 'zone_id', 'block_id': 'block_id', 'lot': 'lot', 'parcel_cod': 'parcel_cod', 'mapsheet': 'mapsheet', 'land_no': 'land_no', 'survey': 'survey', 'land_type': 'land_type', 'scale': 'scale', });
lyr__11.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'เขต': 'เขต', 'หน่�': 'หน่�', 'เนื�': 'เนื�', 'ไร่': 'ไร่', });
lyr_hydrol_12.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'ogc_fid0': 'ogc_fid0', 'hydrol_nam': 'hydrol_nam', 'width': 'width', 'length': 'length', 'deep': 'deep', 'budget': 'budget', 'startdate': 'startdate', 'maintainda': 'maintainda', });
lyr__13.set('fieldAliases', {'hs_no': 'hs_no', 'road': 'road', 'name': 'name', 'community': 'community', });
lyr__14.set('fieldAliases', {'Name': 'Name', 'description': 'description', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMode': 'altitudeMode', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr__smartcity_15.set('fieldAliases', {'building_c': 'building_c', 'hs_no': 'hs_no', 'road': 'road', 'community': 'community', });
lyr_signaltower_16.set('fieldAliases', {'id': 'id', 'name': 'name', 'Pecel': 'Pecel', 'deed': 'deed', });
lyr__17.set('fieldAliases', {'ogc_fid': 'ogc_fid', 'sg_no': 'sg_no', 'sg_name': 'sg_name', });
lyr__18.set('fieldAliases', {'hs_no': 'hs_no', 'road': 'road', 'name': 'name', 'community': 'community', });
lyr__19.set('fieldAliases', {'hs_no': 'hs_no', 'road': 'road', 'name': 'name', 'community': 'community', });
lyr__20.set('fieldAliases', {'hs_no': 'hs_no', 'road': 'road', 'name': 'name', 'community': 'community', });
lyr__2.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr_boundarypoint_3.set('fieldImages', {'ogc_fid': '', 'ogc_fid0': '', 'x': '', 'y': '', 'txt_desc': '', 'mgrs': '', 'no': '', });
lyr_block_4.set('fieldImages', {'ogc_fid': '', 'ogc_fid1': '', 'ogc_fid0': '', 'boundaryor': '', 'zone_id': '', 'block_id': '', });
lyr_boundary_5.set('fieldImages', {'ogc_fid': '', 'ogc_fid1': '', 'ogc_fid0': '', 'boundaryor': '', 'area': '', });
lyr_community_6.set('fieldImages', {'name': 'TextEdit', 'rai': 'TextEdit', 'ngan': 'TextEdit', 'sarwa': 'TextEdit', });
lyr__7.set('fieldImages', {'name': 'TextEdit', 'rai': 'TextEdit', 'ngan': 'TextEdit', 'sarwa': 'TextEdit', });
lyr_building_8.set('fieldImages', {'building_c': '', 'hs_no': '', 'road': '', 'name': '', 'id': '', 'community': '', });
lyr_hydrop_9.set('fieldImages', {'ogc_fid': '', 'hydrop_nam': '', 'area': '', 'deep': '', 'volume': '', 'budget': '', 'startdate': '', 'maintainda': '', });
lyr_parcel_10.set('fieldImages', {'zone_id': '', 'block_id': '', 'lot': '', 'parcel_cod': '', 'mapsheet': '', 'land_no': '', 'survey': '', 'land_type': '', 'scale': '', });
lyr__11.set('fieldImages', {'ogc_fid': 'TextEdit', 'ogc_fid0': 'TextEdit', 'เขต': 'TextEdit', 'หน่�': 'TextEdit', 'เนื�': 'TextEdit', 'ไร่': 'TextEdit', });
lyr_hydrol_12.set('fieldImages', {'ogc_fid': '', 'ogc_fid0': '', 'hydrol_nam': '', 'width': '', 'length': '', 'deep': '', 'budget': '', 'startdate': '', 'maintainda': '', });
lyr__13.set('fieldImages', {'hs_no': '', 'road': '', 'name': '', 'community': '', });
lyr__14.set('fieldImages', {'Name': '', 'description': '', 'timestamp': '', 'begin': '', 'end': '', 'altitudeMode': '', 'tessellate': '', 'extrude': '', 'visibility': '', 'drawOrder': '', 'icon': '', });
lyr__smartcity_15.set('fieldImages', {'building_c': '', 'hs_no': '', 'road': '', 'community': '', });
lyr_signaltower_16.set('fieldImages', {'id': '', 'name': '', 'Pecel': '', 'deed': '', });
lyr__17.set('fieldImages', {'ogc_fid': '', 'sg_no': '', 'sg_name': '', });
lyr__18.set('fieldImages', {'hs_no': '', 'road': '', 'name': '', 'community': '', });
lyr__19.set('fieldImages', {'hs_no': '', 'road': '', 'name': '', 'community': '', });
lyr__20.set('fieldImages', {'hs_no': '', 'road': '', 'name': '', 'community': '', });
lyr__2.set('fieldLabels', {'Name': 'inline label', 'description': 'inline label', 'timestamp': 'inline label', 'begin': 'inline label', 'end': 'inline label', 'altitudeMode': 'inline label', 'tessellate': 'inline label', 'extrude': 'inline label', 'visibility': 'inline label', 'drawOrder': 'inline label', 'icon': 'inline label', });
lyr_boundarypoint_3.set('fieldLabels', {'ogc_fid': 'inline label', 'ogc_fid0': 'inline label', 'x': 'inline label', 'y': 'inline label', 'txt_desc': 'inline label', 'mgrs': 'inline label', 'no': 'inline label', });
lyr_block_4.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid1': 'no label', 'ogc_fid0': 'no label', 'boundaryor': 'no label', 'zone_id': 'no label', 'block_id': 'no label', });
lyr_boundary_5.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid1': 'no label', 'ogc_fid0': 'no label', 'boundaryor': 'no label', 'area': 'no label', });
lyr_community_6.set('fieldLabels', {'name': 'no label', 'rai': 'no label', 'ngan': 'no label', 'sarwa': 'no label', });
lyr__7.set('fieldLabels', {'name': 'inline label', 'rai': 'inline label', 'ngan': 'inline label', 'sarwa': 'inline label', });
lyr_building_8.set('fieldLabels', {'building_c': 'no label', 'hs_no': 'no label', 'road': 'no label', 'name': 'no label', 'id': 'no label', 'community': 'no label', });
lyr_hydrop_9.set('fieldLabels', {'ogc_fid': 'no label', 'hydrop_nam': 'no label', 'area': 'no label', 'deep': 'no label', 'volume': 'no label', 'budget': 'no label', 'startdate': 'no label', 'maintainda': 'no label', });
lyr_parcel_10.set('fieldLabels', {'zone_id': 'no label', 'block_id': 'no label', 'lot': 'no label', 'parcel_cod': 'no label', 'mapsheet': 'no label', 'land_no': 'no label', 'survey': 'no label', 'land_type': 'no label', 'scale': 'no label', });
lyr__11.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'เขต': 'no label', 'หน่�': 'no label', 'เนื�': 'no label', 'ไร่': 'no label', });
lyr_hydrol_12.set('fieldLabels', {'ogc_fid': 'no label', 'ogc_fid0': 'no label', 'hydrol_nam': 'no label', 'width': 'no label', 'length': 'no label', 'deep': 'no label', 'budget': 'no label', 'startdate': 'no label', 'maintainda': 'no label', });
lyr__13.set('fieldLabels', {'hs_no': 'inline label', 'road': 'inline label', 'name': 'inline label', 'community': 'inline label', });
lyr__14.set('fieldLabels', {'Name': 'no label', 'description': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMode': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr__smartcity_15.set('fieldLabels', {'building_c': 'no label', 'hs_no': 'no label', 'road': 'no label', 'community': 'no label', });
lyr_signaltower_16.set('fieldLabels', {'id': 'no label', 'name': 'no label', 'Pecel': 'no label', 'deed': 'no label', });
lyr__17.set('fieldLabels', {'ogc_fid': 'no label', 'sg_no': 'no label', 'sg_name': 'no label', });
lyr__18.set('fieldLabels', {'hs_no': 'no label', 'road': 'no label', 'name': 'no label', 'community': 'no label', });
lyr__19.set('fieldLabels', {'hs_no': 'no label', 'road': 'no label', 'name': 'no label', 'community': 'no label', });
lyr__20.set('fieldLabels', {'hs_no': 'no label', 'road': 'no label', 'name': 'no label', 'community': 'no label', });
lyr__20.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});