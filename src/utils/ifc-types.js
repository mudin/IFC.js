const ifcTypes = {
  //Building elements
  IfcBuildingElementProxy: "IFCBUILDINGELEMENTPROXY",
  IfcColumn: "IFCCOLUMN",
  IfcCurtainWall: "IFCCURTAINWALL",
  IfcDoor: "IFCDOOR",
  IfcFlowTerminal: "IFCFLOWTERMINAL",
  IfcFurnishingElement: "IFCFURNISHINGELEMENT",
  IfcMappedItem: "IFCMAPPEDITEM",
  IfcMember: "IFCMEMBER",
  IfcPlate: "IFCPLATE",
  IfcRailing: "IFCRAILING",
  IfcSlab: "IFCSLAB",
  IfcOpeningElement: "IFCOPENINGELEMENT",
  IfcRoof: "IFCROOF",
  IfcStairFlight: "IFCSTAIRFLIGHT",
  IfcStair: "IFCSTAIR",
  IfcWallStandardCase: "IFCWALLSTANDARDCASE",
  IfcWall: "IFCWALL",
  IfcWindow: "IFCWINDOW",
  //Classification
  IfcClassification: "IFCCLASSIFICATION",
  IfcClassificationReference: "IFCCLASSIFICATIONREFERENCE",
  //Contexts
  IfcGeometricRepresentationContext: "IFCGEOMETRICREPRESENTATIONCONTEXT",
  IfcGeometricRepresentationSubContext: "IFCGEOMETRICREPRESENTATIONSUBCONTEXT",
  IfcGridPlacement: "IFCGRIDPLACEMENT",
  IfcLinearPlacement: "IFCLINEARPLACEMENT",
  IfcLocalPlacement: "IFCLOCALPLACEMENT",
  //Geometry
  IfcArbitraryClosedProfileDef: "IFCARBITRARYCLOSEDPROFILEDEF",
  IfcArbitraryProfileDefWithVoids: "IFCARBITRARYPROFILEDEFWITHVOIDS",
  IfcAxis2Placement2D: "IFCAXIS2PLACEMENT2D",
  IfcAxis2Placement3D: "IFCAXIS2PLACEMENT3D",
  IfcBooleanClippingResult: "IFCBOOLEANCLIPPINGRESULT",
  IfcCartesianPoint: "IFCCARTESIANPOINT",
  IfcCartesianTransformationOperator3D: "IFCCARTESIANTRANSFORMATIONOPERATOR3D",
  IfcCircle: "IFCCIRCLE",
  IfcClosedShell: "IFCCLOSEDSHELL",
  IfcCircleProfileDef: "IFCCIRCLEPROFILEDEF",
  IfcCompositeCurve: "IFCCOMPOSITECURVE",
  IfcCompositeCurveSegment: "IFCCOMPOSITECURVESEGMENT",
  IfcConnectedFaceSet: "IFCCONNECTEDFACESET",
  IfcConnectionSurfaceGeometry: "IFCCONNECTIONSURFACEGEOMETRY",
  IfcCurveBoundedPlane: "IFCCURVEBOUNDEDPLANE",
  IfcDirection: "IFCDIRECTION",
  IfcEllipse: "IfcEllipse",
  IfcExtrudedAreaSolid: "IFCEXTRUDEDAREASOLID",
  IfcFaceBound: "IFCFACEBOUND",
  IfcFace: "IFCFACE",
  IfcFaceBasedSurfaceModel: "IFCFACEBASEDSURFACEMODEL",
  IfcFaceOuterBound: "IFCFACEOUTERBOUND",
  IfcFacetedBrep: "IFCFACETEDBREP",
  IfcGeometricCurveSet: "IFCGEOMETRICCURVESET",
  IfcHalfSpaceSolid: "IFCHALFSPACESOLID",
  IfcPlane: "IFCPLANE",
  IfcPolygonalBoundedHalfSpace: "IFCPOLYGONALBOUNDEDHALFSPACE",
  IfcPolyline: "IFCPOLYLINE",
  IfcPolyLoop: "IFCPOLYLOOP",
  IfcProductDefinitionShape: "IFCPRODUCTDEFINITIONSHAPE",
  IfcRectangleProfileDef: "IFCRECTANGLEPROFILEDEF",
  IfcShapeRepresentation: "IFCSHAPEREPRESENTATION",
  IfcTrimmedCurve: "IFCTRIMMEDCURVE",
  //Identities
  IfcApplication: "IFCAPPLICATION",
  IfcOrganization: "IFCORGANIZATION",
  IfcOwnerHistory: "IFCOWNERHISTORY",
  IfcPerson: "IFCPERSON",
  IfcPersonAndOrganization: "IFCPERSONANDORGANIZATION",
  IfcPostalAddress: "IFCPOSTALADDRESS",
  //Materials
  IfcMaterial: "IFCMATERIAL",
  IfcMaterialLayer: "IFCMATERIALLAYER",
  IfcMaterialLayerSet: "IFCMATERIALLAYERSET",
  IfcMaterialLayerSetUsage: "IFCMATERIALLAYERSETUSAGE",
  IfcMaterialList: "IFCMATERIALLIST",
  //Presentation
  IfcColourRgb: "IFCCOLOURRGB",
  IfcMaterialDefinitionRepresentation: "IFCMATERIALDEFINITIONREPRESENTATION",
  IfcRepresentationMap: "IFCREPRESENTATIONMAP",
  IfcPresentationLayerAssignment: "IFCPRESENTATIONLAYERASSIGNMENT",
  IfcPresentationStyleAssignment: "IFCPRESENTATIONSTYLEASSIGNMENT",
  IfcStyledItem: "IFCSTYLEDITEM",
  IfcStyledRepresentation: "IFCSTYLEDREPRESENTATION",
  IfcSurfaceStyle: "IFCSURFACESTYLE",
  IfcSurfaceStyleRendering: "IFCSURFACESTYLERENDERING",
  IfcSurfaceStyleShading: "IFCSURFACESTYLESHADING",
  //Properties
  IfcBuildingElementProxyType: "IFCBUILDINGELEMENTPROXYTYPE",
  IfcColumnType: "IFCCOLUMNTYPE",
  IfcCurtainWallType: "IFCCURTAINWALLTYPE",
  IfcFurnitureType: "IFCFURNITURETYPE",
  IfcDoorLiningProperties: "IFCDOORLININGPROPERTIES",
  IfcDoorPanelProperties: "IFCDOORPANELPROPERTIES",
  IfcDoorStyle: "IFCDOORSTYLE",
  IfcMemberType: "IFCMEMBERTYPE",
  IfcPlateType: "IFCPLATETYPE",
  IfcPropertySet: "IFCPROPERTYSET",
  IfcPropertySingleValue: "IFCPROPERTYSINGLEVALUE",
  IfcSanitaryTerminalType: "IFCSANITARYTERMINALTYPE",
  IfcSpaceType: "IFCSPACETYPE",
  IfcStairFlightType: "IFCSTAIRFLIGHTTYPE",
  IfcWallType: "IFCWALLTYPE",
  IfcWindowStyle: "IFCWINDOWSTYLE",
  IfcSlabType: "IFCSLABTYPE",
  IfcWindowLiningProperties: "IFCWINDOWLININGPROPERTIES",
  // Relationships
  IfcRelAggregates: "IFCRELAGGREGATES",
  IfcRelAssociatesClassification: "IFCRELASSOCIATESCLASSIFICATION",
  IfcRelAssociatesMaterial: "IFCRELASSOCIATESMATERIAL",
  IfcRelConnectsPathElements: "IFCRELCONNECTSPATHELEMENTS",
  IfcRelContainedInSpatialStructure: "IFCRELCONTAINEDINSPATIALSTRUCTURE",
  IfcRelDefinesByProperties: "IFCRELDEFINESBYPROPERTIES",
  IfcRelDefinesByType: "IFCRELDEFINESBYTYPE",
  IfcRelFillsElement: "IFCRELFILLSELEMENT",
  IfcRelSpaceBoundary: "IFCRELSPACEBOUNDARY",
  IfcRelVoidsElement: "IFCRELVOIDSELEMENT",
  //Spatial structure elements
  IfcBuilding: "IFCBUILDING",
  IfcBuildingStorey: "IFCBUILDINGSTOREY",
  IfcProject: "IFCPROJECT",
  IfcSite: "IFCSITE",
  IfcSpace: "IFCSPACE",
  //Units
  IfcConversionBasedUnit: "IFCCONVERSIONBASEDUNIT",
  IfcDerivedUnit: "IFCDERIVEDUNIT",
  IfcDerivedUnitElement: "IFCDERIVEDUNITELEMENT",
  IfcDimensionalExponents: "IFCDIMENSIONALEXPONENTS",
  IfcMeasureWithUnit: "IFCMEASUREWITHUNIT",
  IfcSIUnit: "IFCSIUNIT",
  IfcUnitAssignment: "IFCUNITASSIGNMENT",
};

function getName(ifcType) {
  return Object.keys(ifcTypes).find((key) => ifcTypes[key] === ifcType);
}

export { ifcTypes, getName };
