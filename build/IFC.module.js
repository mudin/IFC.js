function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _createSuper(Derived) {
  var hasNativeReflectConstruct = _isNativeReflectConstruct();

  return function _createSuperInternal() {
    var Super = _getPrototypeOf(Derived),
        result;

    if (hasNativeReflectConstruct) {
      var NewTarget = _getPrototypeOf(this).constructor;

      result = Reflect.construct(Super, arguments, NewTarget);
    } else {
      result = Super.apply(this, arguments);
    }

    return _possibleConstructorReturn(this, result);
  };
}

function _toConsumableArray(arr) {
  return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}

function _iterableToArray(iter) {
  if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter);
}

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}

function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;

  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

  return arr2;
}

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}

var namedProps = {
  axis: "Axis",
  axis1: "Axis1",
  axis2: "Axis2",
  axis3: "Axis3",
  bound: "Bound",
  bounds: "Bounds",
  cfsFaces: "CfsFaces",
  coordinates: "Coordinates",
  depth: "Depth",
  dirRatios: "DirectionRatios",
  elements: "Elements",
  extDirection: "ExtrudedDirection",
  expressId: "_ExpressId",
  geometry: "_Geometry",
  geomRepresentations: "_GeometryRepresentations",
  hasBuildingElements: "_HasBuildingElements",
  hasFillings: "_HasFillings",
  hasOpenings: "_HasOpenings",
  hasSpatial: "_HasSpatialStructures",
  hasType: "_HasType",
  ifcClass: "_IfcClass",
  innerCurves: "InnerCurves",
  isBrep: "_IsBrep",
  items: "Items",
  location: "Location",
  localOrigin: "LocalOrigin",
  mappingOrigin: "MappingOrigin:",
  mappedRepresentation: "MappedRepresentation:",
  mappingSource: "MappingSource",
  mappingTarget: "MappingTarget",
  objectPlacement: "ObjectPlacement",
  orientation: "Orientation",
  outer: "Outer",
  outerCurve: "OuterCurve",
  pivots: "Pivots",
  placementRelTo: "PlacementRelTo",
  points: "Points",
  polygon: "Polygon",
  position: "Position",
  prefix: "Prefix",
  profile: "Profile",
  radius: "Radius",
  refDirection: "RefDirection",
  relatedBuildingElement: "RelatedBuildingElement",
  relatedElements: "RelatedElements",
  relatedObjects: "RelatedObjects",
  relatedOpeningElement: "RelatedOpeningElement",
  relatingBuildingElement: "RelatingBuildingElement",
  relatingObject: "RelatingObject",
  relatingOpeningElement: "RelatingOpeningElement",
  relatingStructure: "RelatingStructure",
  relatingType: "RelatingType",
  relativePlacement: "RelativePlacement",
  representation: "Representation",
  representations: "Representations",
  representationType: "RepresentationType",
  scale: "Scale",
  semiAxis1: "SEMIAXIS1",
  semiAxis2: "SEMIAXIS2",
  sweptArea: "SweptArea",
  transform: "_Transformation",
  transformedGeometry: "_TransformedGeometry",
  transformOfExtrusion: "_TransformationOfExtrusion",
  transformOfMappedItem: "_TransformOfMappedItem",
  trueGeometry: "_trueGeometry",
  undefined: "undefined",
  units: "Units",
  unitType: "UnitType",
  xDim: "XDim",
  yDim: "YDim"
};
var itemsReaderValues = {
  expressId: "expressId",
  type: "type",
  properties: "properties"
};
var typeValue = {
  type: "type",
  value: "value"
};
var ifcValueType = {
  number: "Number",
  text: "Text",
  "enum": "Enum",
  bool: "Boolean",
  singleNumber: "SingleNumber"
};
var geometryTypes = {
  curve2D: "Curve2D",
  sweptSolid: "SweptSolid",
  mappedRepresentation: "MappedRepresentation",
  brep: "Brep",
  geometricSet: "GeometricSet",
  clipping: "Clipping"
};
var ifcBoolValues = {
  trueValue: ".T.",
  falseValue: ".F."
};
var structuredData = {
  ifcProject: "IfcProject",
  products: "Products",
  spaces: "Spaces",
  units: "Units",
  mainObject: "MainObject"
};
var pivots = {
  pivots: "Pivots",
  locat: "Locations",
  xAxis: "xRotation",
  yAxis: "yRotation",
  zAxis: "zRotation"
};
var defaultValue = "$";

var ifcTypes = {
  //Building elements
  IfcBuildingElementProxy: "IFCBUILDINGELEMENTPROXY",
  IfcColumn: "IFCCOLUMN",
  IfcCovering: "IFCCOVERING",
  IfcCurtainWall: "IFCCURTAINWALL",
  IfcDoor: "IFCDOOR",
  IfcEquipmentElement: "IFCEQUIPMENTELEMENT",
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
  IfcCircleHollowProfileDef: "IFCCIRCLEHOLLOWPROFILEDEF",
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
  IfcCoveringType: "IFCCOVERINGTYPE",
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
  IfcRelAssignsToGroup: "IFCRELASSIGNSTOGROUP",
  IfcRelAssociatesClassification: "IFCRELASSOCIATESCLASSIFICATION",
  IfcRelAssociatesMaterial: "IFCRELASSOCIATESMATERIAL",
  IfcRelConnectsPathElements: "IFCRELCONNECTSPATHELEMENTS",
  IfcRelConnectsPortToElement: "IFCRELCONNECTSPORTTOELEMENT",
  IfcRelContainedInSpatialStructure: "IFCRELCONTAINEDINSPATIALSTRUCTURE",
  IfcRelDefinesByProperties: "IFCRELDEFINESBYPROPERTIES",
  IfcRelDefinesByType: "IFCRELDEFINESBYTYPE",
  IfcRelFillsElement: "IFCRELFILLSELEMENT",
  IfcGroup: "IFCGROUP",
  IfcRelSpaceBoundary: "IFCRELSPACEBOUNDARY",
  IfcRelServicesBuildings: "IFCRELSERVICESBUILDINGS",
  IfcRelVoidsElement: "IFCRELVOIDSELEMENT",
  //Spatial structure elements
  IfcBuilding: "IFCBUILDING",
  IfcBuildingStorey: "IFCBUILDINGSTOREY",
  IfcProject: "IFCPROJECT",
  IfcSite: "IFCSITE",
  IfcSpace: "IFCSPACE",
  //Systems
  IfcDistributionPort: "IFCDISTRIBUTIONPORT",
  IfcSystem: "IFCSYSTEM",
  //Units
  IfcConversionBasedUnit: "IFCCONVERSIONBASEDUNIT",
  IfcDerivedUnit: "IFCDERIVEDUNIT",
  IfcDerivedUnitElement: "IFCDERIVEDUNITELEMENT",
  IfcDimensionalExponents: "IFCDIMENSIONALEXPONENTS",
  IfcMeasureWithUnit: "IFCMEASUREWITHUNIT",
  IfcSIUnit: "IFCSIUNIT",
  IfcUnitAssignment: "IFCUNITASSIGNMENT"
};

function getName(ifcType) {
  return Object.keys(ifcTypes).find(function (key) {
    return ifcTypes[key] === ifcType;
  });
}

var typesParserMap = {};

function newObject(ifcObject) {
  typesParserMap[ifcTypes[ifcObject[namedProps.ifcClass]]] = ifcObject;
}

function parserByType(ifcType) {
  return typesParserMap[ifcType];
}

var ifcDataTypes = {
  asterisk: "Asterisk",
  anything: "Anything",
  bool: "Boolean",
  date: "Date",
  "default": "DefaultValue",
  "enum": "Enum",
  id: "ExpressId",
  idSet: "ExpressIdSet",
  value: "IfcValue",
  number: "Number",
  numSet: "NumberSet",
  valueSet: "ValueSet",
  text: "Text",
  textSet: "TextSet"
};

function isDataTypeValid(dataType) {
  if (Object.values(ifcDataTypes).indexOf(dataType) > -1) return true;
  return false;
}

function getAllDataTypes() {
  return Object.values(ifcDataTypes);
}

var _newObject, _newObject2, _newObject3, _newObject4, _newObject5, _newObject6, _newObject7, _newObject8, _newObject9, _newObject10, _newObject11, _newObject12, _newObject13, _newObject14, _newObject15, _newObject16, _newObject17, _newObject18, _newObject19, _newObject20;
newObject((_newObject = {}, _defineProperty(_newObject, namedProps.ifcClass, getName(ifcTypes.IfcMappedItem)), _defineProperty(_newObject, namedProps.mappingSource, ifcDataTypes.id), _defineProperty(_newObject, namedProps.mappingTarget, ifcDataTypes.id), _newObject));
newObject((_newObject2 = {}, _defineProperty(_newObject2, namedProps.ifcClass, getName(ifcTypes.IfcWall)), _defineProperty(_newObject2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2, "Name", ifcDataTypes.text), _defineProperty(_newObject2, "Description", ifcDataTypes.text), _defineProperty(_newObject2, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject2, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject2, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject2, "Tag", ifcDataTypes.text), _newObject2));
newObject((_newObject3 = {}, _defineProperty(_newObject3, namedProps.ifcClass, getName(ifcTypes.IfcWallStandardCase)), _defineProperty(_newObject3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3, "Name", ifcDataTypes.text), _defineProperty(_newObject3, "Description", ifcDataTypes.text), _defineProperty(_newObject3, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject3, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject3, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject3, "Tag", ifcDataTypes.text), _newObject3));
newObject((_newObject4 = {}, _defineProperty(_newObject4, namedProps.ifcClass, getName(ifcTypes.IfcCurtainWall)), _defineProperty(_newObject4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4, "Name", ifcDataTypes.text), _defineProperty(_newObject4, "Description", ifcDataTypes.text), _defineProperty(_newObject4, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject4, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject4, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject4, "Tag", ifcDataTypes.text), _newObject4));
newObject((_newObject5 = {}, _defineProperty(_newObject5, namedProps.ifcClass, getName(ifcTypes.IfcDoor)), _defineProperty(_newObject5, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5, "Name", ifcDataTypes.text), _defineProperty(_newObject5, "Description", ifcDataTypes.text), _defineProperty(_newObject5, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject5, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject5, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject5, "Tag", ifcDataTypes.text), _defineProperty(_newObject5, "OverallHeight", ifcDataTypes.number), _defineProperty(_newObject5, "OverallWidth", ifcDataTypes.number), _newObject5));
newObject((_newObject6 = {}, _defineProperty(_newObject6, namedProps.ifcClass, getName(ifcTypes.IfcRailing)), _defineProperty(_newObject6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject6, "Name", ifcDataTypes.text), _defineProperty(_newObject6, "Description", ifcDataTypes.text), _defineProperty(_newObject6, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject6, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject6, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject6, "Tag", ifcDataTypes.text), _defineProperty(_newObject6, "PredefinedType", ifcDataTypes["enum"]), _newObject6));
newObject((_newObject7 = {}, _defineProperty(_newObject7, namedProps.ifcClass, getName(ifcTypes.IfcPlate)), _defineProperty(_newObject7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject7, "Name", ifcDataTypes.text), _defineProperty(_newObject7, "Description", ifcDataTypes.text), _defineProperty(_newObject7, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject7, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject7, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject7, "Tag", ifcDataTypes.text), _newObject7));
newObject((_newObject8 = {}, _defineProperty(_newObject8, namedProps.ifcClass, getName(ifcTypes.IfcMember)), _defineProperty(_newObject8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject8, "Name", ifcDataTypes.text), _defineProperty(_newObject8, "Description", ifcDataTypes.text), _defineProperty(_newObject8, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject8, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject8, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject8, "Tag", ifcDataTypes.text), _newObject8));
newObject((_newObject9 = {}, _defineProperty(_newObject9, namedProps.ifcClass, getName(ifcTypes.IfcSlab)), _defineProperty(_newObject9, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject9, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject9, "Name", ifcDataTypes.text), _defineProperty(_newObject9, "Description", ifcDataTypes.text), _defineProperty(_newObject9, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject9, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject9, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject9, "Tag", ifcDataTypes.text), _defineProperty(_newObject9, "PredefinedType", ifcDataTypes["enum"]), _newObject9));
newObject((_newObject10 = {}, _defineProperty(_newObject10, namedProps.ifcClass, getName(ifcTypes.IfcOpeningElement)), _defineProperty(_newObject10, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject10, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject10, "Name", ifcDataTypes.text), _defineProperty(_newObject10, "Description", ifcDataTypes.text), _defineProperty(_newObject10, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject10, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject10, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject10, "Tag", ifcDataTypes.text), _newObject10));
newObject((_newObject11 = {}, _defineProperty(_newObject11, namedProps.ifcClass, getName(ifcTypes.IfcWindow)), _defineProperty(_newObject11, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject11, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject11, "Name", ifcDataTypes.text), _defineProperty(_newObject11, "Description", ifcDataTypes.text), _defineProperty(_newObject11, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject11, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject11, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject11, "Tag", ifcDataTypes.text), _defineProperty(_newObject11, "OverallHeight", ifcDataTypes.number), _defineProperty(_newObject11, "OverallWidth", ifcDataTypes.number), _newObject11));
newObject((_newObject12 = {}, _defineProperty(_newObject12, namedProps.ifcClass, getName(ifcTypes.IfcStair)), _defineProperty(_newObject12, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject12, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject12, "Name", ifcDataTypes.text), _defineProperty(_newObject12, "Description", ifcDataTypes.text), _defineProperty(_newObject12, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject12, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject12, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject12, "Tag", ifcDataTypes.text), _defineProperty(_newObject12, "ShapeType", ifcDataTypes["enum"]), _newObject12));
newObject((_newObject13 = {}, _defineProperty(_newObject13, namedProps.ifcClass, getName(ifcTypes.IfcRoof)), _defineProperty(_newObject13, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject13, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject13, "Name", ifcDataTypes.text), _defineProperty(_newObject13, "Description", ifcDataTypes.text), _defineProperty(_newObject13, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject13, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject13, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject13, "Tag", ifcDataTypes.text), _defineProperty(_newObject13, "ShapeType", ifcDataTypes["enum"]), _newObject13));
newObject((_newObject14 = {}, _defineProperty(_newObject14, namedProps.ifcClass, getName(ifcTypes.IfcColumn)), _defineProperty(_newObject14, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject14, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject14, "Name", ifcDataTypes.text), _defineProperty(_newObject14, "Description", ifcDataTypes.text), _defineProperty(_newObject14, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject14, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject14, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject14, "Tag", ifcDataTypes.text), _newObject14));
newObject((_newObject15 = {}, _defineProperty(_newObject15, namedProps.ifcClass, getName(ifcTypes.IfcStairFlight)), _defineProperty(_newObject15, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject15, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject15, "Name", ifcDataTypes.text), _defineProperty(_newObject15, "Description", ifcDataTypes.text), _defineProperty(_newObject15, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject15, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject15, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject15, "Tag", ifcDataTypes.text), _defineProperty(_newObject15, "NumberOfRiser", ifcDataTypes.number), _defineProperty(_newObject15, "NumberOfThreads", ifcDataTypes.number), _defineProperty(_newObject15, "RiserHeight", ifcDataTypes.number), _defineProperty(_newObject15, "TreadLength", ifcDataTypes.number), _newObject15));
newObject((_newObject16 = {}, _defineProperty(_newObject16, namedProps.ifcClass, getName(ifcTypes.IfcFlowTerminal)), _defineProperty(_newObject16, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject16, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject16, "Name", ifcDataTypes.text), _defineProperty(_newObject16, "Description", ifcDataTypes.text), _defineProperty(_newObject16, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject16, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject16, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject16, "Tag", ifcDataTypes.text), _newObject16));
newObject((_newObject17 = {}, _defineProperty(_newObject17, namedProps.ifcClass, getName(ifcTypes.IfcFurnishingElement)), _defineProperty(_newObject17, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject17, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject17, "Name", ifcDataTypes.text), _defineProperty(_newObject17, "Description", ifcDataTypes.text), _defineProperty(_newObject17, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject17, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject17, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject17, "Tag", ifcDataTypes.text), _newObject17));
newObject((_newObject18 = {}, _defineProperty(_newObject18, namedProps.ifcClass, getName(ifcTypes.IfcCovering)), _defineProperty(_newObject18, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject18, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject18, "Name", ifcDataTypes.text), _defineProperty(_newObject18, "Description", ifcDataTypes.text), _defineProperty(_newObject18, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject18, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject18, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject18, "Tag", ifcDataTypes.text), _defineProperty(_newObject18, "PredefinedType", ifcDataTypes["enum"]), _newObject18));
newObject((_newObject19 = {}, _defineProperty(_newObject19, namedProps.ifcClass, getName(ifcTypes.IfcBuildingElementProxy)), _defineProperty(_newObject19, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject19, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject19, "Name", ifcDataTypes.text), _defineProperty(_newObject19, "Description", ifcDataTypes.text), _defineProperty(_newObject19, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject19, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject19, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject19, "Tag", ifcDataTypes.text), _defineProperty(_newObject19, "CompositionType", ifcDataTypes["enum"]), _newObject19));
newObject((_newObject20 = {}, _defineProperty(_newObject20, namedProps.ifcClass, getName(ifcTypes.IfcEquipmentElement)), _defineProperty(_newObject20, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject20, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject20, "Name", ifcDataTypes.text), _defineProperty(_newObject20, "Description", ifcDataTypes.text), _defineProperty(_newObject20, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject20, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject20, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject20, "Tag", ifcDataTypes.text), _newObject20));

var _newObject$1, _newObject2$1;
newObject((_newObject$1 = {}, _defineProperty(_newObject$1, namedProps.ifcClass, getName(ifcTypes.IfcClassification)), _defineProperty(_newObject$1, "Source", ifcDataTypes.text), _defineProperty(_newObject$1, "Edition", ifcDataTypes.text), _defineProperty(_newObject$1, "EditionDate", ifcDataTypes.id), _defineProperty(_newObject$1, "Name", ifcDataTypes.text), _newObject$1));
newObject((_newObject2$1 = {}, _defineProperty(_newObject2$1, namedProps.ifcClass, getName(ifcTypes.IfcClassificationReference)), _defineProperty(_newObject2$1, "Location", ifcDataTypes.text), _defineProperty(_newObject2$1, "ItemReference", ifcDataTypes.text), _defineProperty(_newObject2$1, "Name", ifcDataTypes.text), _defineProperty(_newObject2$1, "ReferencedSource", ifcDataTypes.id), _newObject2$1));

var _newObject$2, _newObject2$2, _newObject3$1, _newObject4$1, _newObject5$1;
newObject((_newObject$2 = {}, _defineProperty(_newObject$2, namedProps.ifcClass, getName(ifcTypes.IfcGeometricRepresentationContext)), _defineProperty(_newObject$2, "ContextIdentifier", ifcDataTypes.text), _defineProperty(_newObject$2, "ContextType", ifcDataTypes.text), _defineProperty(_newObject$2, "CoordinateSpaceDimension", ifcDataTypes.number), _defineProperty(_newObject$2, "Precision", ifcDataTypes.number), _defineProperty(_newObject$2, "WorldCoordinateSystem", ifcDataTypes.id), _defineProperty(_newObject$2, "TrueNorth", ifcDataTypes.id), _newObject$2));
newObject((_newObject2$2 = {}, _defineProperty(_newObject2$2, namedProps.ifcClass, getName(ifcTypes.IfcGeometricRepresentationSubContext)), _defineProperty(_newObject2$2, "ContextIdentifier", ifcDataTypes.text), _defineProperty(_newObject2$2, "ContextType", ifcDataTypes.text), _defineProperty(_newObject2$2, namedProps.undefined, ifcDataTypes.asterisk), _defineProperty(_newObject2$2, "ParentContext", ifcDataTypes.id), _defineProperty(_newObject2$2, "TargetScale", ifcDataTypes.value), _defineProperty(_newObject2$2, "TargetView", ifcDataTypes["enum"]), _defineProperty(_newObject2$2, "UserDefinedTargetView", ifcDataTypes.text), _newObject2$2));
newObject((_newObject3$1 = {}, _defineProperty(_newObject3$1, namedProps.ifcClass, getName(ifcTypes.IfcGridPlacement)), _defineProperty(_newObject3$1, "PlacementLocation", ifcDataTypes.id), _defineProperty(_newObject3$1, "PlacementRefDirection", ifcDataTypes.id), _newObject3$1));
newObject((_newObject4$1 = {}, _defineProperty(_newObject4$1, namedProps.ifcClass, getName(ifcTypes.IfcLinearPlacement)), _defineProperty(_newObject4$1, "PlacementRelTo", ifcDataTypes.id), _defineProperty(_newObject4$1, "PlacementMeasuredAlong", ifcDataTypes.id), _defineProperty(_newObject4$1, "Distance", ifcDataTypes.id), _defineProperty(_newObject4$1, "Orientation", ifcDataTypes.id), _defineProperty(_newObject4$1, "CartesianPosition", ifcDataTypes.id), _newObject4$1));
newObject((_newObject5$1 = {}, _defineProperty(_newObject5$1, namedProps.ifcClass, getName(ifcTypes.IfcLocalPlacement)), _defineProperty(_newObject5$1, "PlacementRelTo", ifcDataTypes.id), _defineProperty(_newObject5$1, "RelativePlacement", ifcDataTypes.id), _newObject5$1));

var _newObject$3, _newObject2$3, _newObject3$2, _newObject4$2, _newObject5$2, _newObject6$1, _newObject7$1, _newObject8$1, _newObject9$1, _newObject10$1, _newObject11$1, _newObject12$1, _newObject13$1, _newObject14$1, _newObject15$1, _newObject16$1, _newObject17$1, _newObject18$1, _newObject19$1, _newObject20$1, _newObject21, _newObject22, _newObject23, _newObject24, _newObject25, _newObject26, _newObject27, _newObject28, _newObject29, _newObject30, _newObject31, _newObject32, _newObject33, _newObject34;
newObject((_newObject$3 = {}, _defineProperty(_newObject$3, namedProps.ifcClass, getName(ifcTypes.IfcAxis2Placement2D)), _defineProperty(_newObject$3, namedProps.location, ifcDataTypes.id), _defineProperty(_newObject$3, namedProps.refDirection, ifcDataTypes.id), _newObject$3));
newObject((_newObject2$3 = {}, _defineProperty(_newObject2$3, namedProps.ifcClass, getName(ifcTypes.IfcAxis2Placement3D)), _defineProperty(_newObject2$3, namedProps.location, ifcDataTypes.id), _defineProperty(_newObject2$3, namedProps.axis, ifcDataTypes.id), _defineProperty(_newObject2$3, namedProps.refDirection, ifcDataTypes.id), _newObject2$3));
newObject((_newObject3$2 = {}, _defineProperty(_newObject3$2, namedProps.ifcClass, getName(ifcTypes.IfcBooleanClippingResult)), _defineProperty(_newObject3$2, "Operator", ifcDataTypes["enum"]), _defineProperty(_newObject3$2, "FirstOperand", ifcDataTypes.id), _defineProperty(_newObject3$2, "SecondOperand", ifcDataTypes.id), _newObject3$2));
newObject((_newObject4$2 = {}, _defineProperty(_newObject4$2, namedProps.ifcClass, getName(ifcTypes.IfcEllipse)), _defineProperty(_newObject4$2, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject4$2, namedProps.semiAxis1, ifcDataTypes.number), _defineProperty(_newObject4$2, namedProps.semiAxis2, ifcDataTypes.number), _newObject4$2));
newObject((_newObject5$2 = {}, _defineProperty(_newObject5$2, namedProps.ifcClass, getName(ifcTypes.IfcCartesianPoint)), _defineProperty(_newObject5$2, namedProps.coordinates, ifcDataTypes.numSet), _newObject5$2));
newObject((_newObject6$1 = {}, _defineProperty(_newObject6$1, namedProps.ifcClass, getName(ifcTypes.IfcConnectionSurfaceGeometry)), _defineProperty(_newObject6$1, "SurfaceOnRelatingElement", ifcDataTypes.id), _defineProperty(_newObject6$1, "SurfaceOnRelatedElement", ifcDataTypes.id), _newObject6$1));
newObject((_newObject7$1 = {}, _defineProperty(_newObject7$1, namedProps.ifcClass, getName(ifcTypes.IfcCurveBoundedPlane)), _defineProperty(_newObject7$1, "BasisSurface", ifcDataTypes.id), _defineProperty(_newObject7$1, "OuterBoundary", ifcDataTypes.id), _defineProperty(_newObject7$1, "InnerBoundaries", ifcDataTypes.idSet), _newObject7$1));
newObject((_newObject8$1 = {}, _defineProperty(_newObject8$1, namedProps.ifcClass, getName(ifcTypes.IfcDirection)), _defineProperty(_newObject8$1, namedProps.dirRatios, ifcDataTypes.numSet), _newObject8$1));
newObject((_newObject9$1 = {}, _defineProperty(_newObject9$1, namedProps.ifcClass, getName(ifcTypes.IfcExtrudedAreaSolid)), _defineProperty(_newObject9$1, namedProps.sweptArea, ifcDataTypes.id), _defineProperty(_newObject9$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject9$1, namedProps.extDirection, ifcDataTypes.id), _defineProperty(_newObject9$1, namedProps.depth, ifcDataTypes.number), _newObject9$1));
newObject((_newObject10$1 = {}, _defineProperty(_newObject10$1, namedProps.ifcClass, getName(ifcTypes.IfcPlane)), _defineProperty(_newObject10$1, "Position", ifcDataTypes.id), _newObject10$1));
newObject((_newObject11$1 = {}, _defineProperty(_newObject11$1, namedProps.ifcClass, getName(ifcTypes.IfcPolygonalBoundedHalfSpace)), _defineProperty(_newObject11$1, "BaseSurface", ifcDataTypes.id), _defineProperty(_newObject11$1, "AgreementFlag", ifcDataTypes.bool), _defineProperty(_newObject11$1, "Position", ifcDataTypes.id), _defineProperty(_newObject11$1, "PolygonalBoundary", ifcDataTypes.id), _newObject11$1));
newObject((_newObject12$1 = {}, _defineProperty(_newObject12$1, namedProps.ifcClass, getName(ifcTypes.IfcPolyline)), _defineProperty(_newObject12$1, namedProps.points, ifcDataTypes.idSet), _newObject12$1));
newObject((_newObject13$1 = {}, _defineProperty(_newObject13$1, namedProps.ifcClass, getName(ifcTypes.IfcProductDefinitionShape)), _defineProperty(_newObject13$1, "Description", ifcDataTypes.text), _defineProperty(_newObject13$1, namedProps.representationType, ifcDataTypes.text), _defineProperty(_newObject13$1, namedProps.representations, ifcDataTypes.idSet), _newObject13$1));
newObject((_newObject14$1 = {}, _defineProperty(_newObject14$1, namedProps.ifcClass, getName(ifcTypes.IfcRectangleProfileDef)), _defineProperty(_newObject14$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject14$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject14$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject14$1, namedProps.xDim, ifcDataTypes.number), _defineProperty(_newObject14$1, namedProps.yDim, ifcDataTypes.number), _newObject14$1));
newObject((_newObject15$1 = {}, _defineProperty(_newObject15$1, namedProps.ifcClass, getName(ifcTypes.IfcCircleProfileDef)), _defineProperty(_newObject15$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject15$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject15$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject15$1, namedProps.radius, ifcDataTypes.number), _newObject15$1));
newObject((_newObject16$1 = {}, _defineProperty(_newObject16$1, namedProps.ifcClass, getName(ifcTypes.IfcCircleHollowProfileDef)), _defineProperty(_newObject16$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject16$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject16$1, namedProps.position, ifcDataTypes.id), _defineProperty(_newObject16$1, namedProps.radius, ifcDataTypes.number), _defineProperty(_newObject16$1, "WallThickness", ifcDataTypes.number), _newObject16$1));
newObject((_newObject17$1 = {}, _defineProperty(_newObject17$1, namedProps.ifcClass, getName(ifcTypes.IfcArbitraryProfileDefWithVoids)), _defineProperty(_newObject17$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject17$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject17$1, namedProps.outerCurve, ifcDataTypes.id), _defineProperty(_newObject17$1, namedProps.innerCurves, ifcDataTypes.idSet), _newObject17$1));
newObject((_newObject18$1 = {}, _defineProperty(_newObject18$1, namedProps.ifcClass, getName(ifcTypes.IfcArbitraryClosedProfileDef)), _defineProperty(_newObject18$1, "ProfileType", ifcDataTypes["enum"]), _defineProperty(_newObject18$1, "ProfileName", ifcDataTypes.text), _defineProperty(_newObject18$1, namedProps.outerCurve, ifcDataTypes.id), _newObject18$1));
newObject((_newObject19$1 = {}, _defineProperty(_newObject19$1, namedProps.ifcClass, getName(ifcTypes.IfcShapeRepresentation)), _defineProperty(_newObject19$1, "ContextOfItems", ifcDataTypes.id), _defineProperty(_newObject19$1, "RepresentationIdentifier", ifcDataTypes.text), _defineProperty(_newObject19$1, namedProps.representationType, ifcDataTypes.text), _defineProperty(_newObject19$1, namedProps.items, ifcDataTypes.idSet), _newObject19$1));
newObject((_newObject20$1 = {}, _defineProperty(_newObject20$1, namedProps.ifcClass, getName(ifcTypes.IfcFaceOuterBound)), _defineProperty(_newObject20$1, namedProps.bound, ifcDataTypes.id), _defineProperty(_newObject20$1, namedProps.orientation, ifcDataTypes.bool), _newObject20$1));
newObject((_newObject21 = {}, _defineProperty(_newObject21, namedProps.ifcClass, getName(ifcTypes.IfcFaceBound)), _defineProperty(_newObject21, namedProps.bound, ifcDataTypes.id), _defineProperty(_newObject21, namedProps.orientation, ifcDataTypes.bool), _newObject21));
newObject((_newObject22 = {}, _defineProperty(_newObject22, namedProps.ifcClass, getName(ifcTypes.IfcFace)), _defineProperty(_newObject22, namedProps.bounds, ifcDataTypes.idSet), _newObject22));
newObject((_newObject23 = {}, _defineProperty(_newObject23, namedProps.ifcClass, getName(ifcTypes.IfcPolyLoop)), _defineProperty(_newObject23, namedProps.polygon, ifcDataTypes.idSet), _newObject23));
newObject((_newObject24 = {}, _defineProperty(_newObject24, namedProps.ifcClass, getName(ifcTypes.IfcClosedShell)), _defineProperty(_newObject24, namedProps.cfsFaces, ifcDataTypes.idSet), _newObject24));
newObject((_newObject25 = {}, _defineProperty(_newObject25, namedProps.ifcClass, getName(ifcTypes.IfcFacetedBrep)), _defineProperty(_newObject25, namedProps.outer, ifcDataTypes.id), _newObject25));
newObject((_newObject26 = {}, _defineProperty(_newObject26, namedProps.ifcClass, getName(ifcTypes.IfcCartesianTransformationOperator3D)), _defineProperty(_newObject26, namedProps.axis1, ifcDataTypes.id), _defineProperty(_newObject26, namedProps.axis2, ifcDataTypes.id), _defineProperty(_newObject26, namedProps.localOrigin, ifcDataTypes.id), _defineProperty(_newObject26, namedProps.scale, ifcDataTypes.number), _defineProperty(_newObject26, namedProps.axis3, ifcDataTypes.id), _newObject26));
newObject((_newObject27 = {}, _defineProperty(_newObject27, namedProps.ifcClass, getName(ifcTypes.IfcGeometricCurveSet)), _defineProperty(_newObject27, namedProps.elements, ifcDataTypes.idSet), _newObject27));
newObject((_newObject28 = {}, _defineProperty(_newObject28, namedProps.ifcClass, getName(ifcTypes.IfcConnectedFaceSet)), _defineProperty(_newObject28, "CfsFaces", ifcDataTypes.idSet), _newObject28));
newObject((_newObject29 = {}, _defineProperty(_newObject29, namedProps.ifcClass, getName(ifcTypes.IfcFaceBasedSurfaceModel)), _defineProperty(_newObject29, "FbsmFaces", ifcDataTypes.idSet), _newObject29));
newObject((_newObject30 = {}, _defineProperty(_newObject30, namedProps.ifcClass, getName(ifcTypes.IfcHalfSpaceSolid)), _defineProperty(_newObject30, "BaseSurface", ifcDataTypes.id), _defineProperty(_newObject30, "AgreementFlag", ifcDataTypes.bool), _newObject30));
newObject((_newObject31 = {}, _defineProperty(_newObject31, namedProps.ifcClass, getName(ifcTypes.IfcCompositeCurveSegment)), _defineProperty(_newObject31, "Transition", ifcDataTypes["enum"]), _defineProperty(_newObject31, "SameSense", ifcDataTypes.bool), _defineProperty(_newObject31, "ParentCurve", ifcDataTypes.id), _newObject31));
newObject((_newObject32 = {}, _defineProperty(_newObject32, namedProps.ifcClass, getName(ifcTypes.IfcCircle)), _defineProperty(_newObject32, "Position", ifcDataTypes.id), _defineProperty(_newObject32, "Radius", ifcDataTypes.number), _newObject32));
newObject((_newObject33 = {}, _defineProperty(_newObject33, namedProps.ifcClass, getName(ifcTypes.IfcTrimmedCurve)), _defineProperty(_newObject33, "BasisCurve", ifcDataTypes.id), _defineProperty(_newObject33, "Trim1", ifcDataTypes.valueSet), _defineProperty(_newObject33, "Trim2", ifcDataTypes.valueSet), _defineProperty(_newObject33, "SenseAgreement", ifcDataTypes.bool), _defineProperty(_newObject33, "MasterRepresentation", ifcDataTypes["enum"]), _newObject33));
newObject((_newObject34 = {}, _defineProperty(_newObject34, namedProps.ifcClass, getName(ifcTypes.IfcCompositeCurve)), _defineProperty(_newObject34, "Segments", ifcDataTypes.idSet), _defineProperty(_newObject34, "SelfIntersect", ifcDataTypes.bool), _newObject34));

var _newObject$4, _newObject2$4, _newObject3$3, _newObject4$3, _newObject5$3, _newObject6$2;
newObject((_newObject$4 = {}, _defineProperty(_newObject$4, namedProps.ifcClass, getName(ifcTypes.IfcApplication)), _defineProperty(_newObject$4, "ApplicationDeveloper", ifcDataTypes.id), _defineProperty(_newObject$4, "Version", ifcDataTypes.text), _defineProperty(_newObject$4, "ApplicationFullName", ifcDataTypes.text), _defineProperty(_newObject$4, "ApplicationIdentifier", ifcDataTypes.text), _newObject$4));
newObject((_newObject2$4 = {}, _defineProperty(_newObject2$4, namedProps.ifcClass, getName(ifcTypes.IfcOrganization)), _defineProperty(_newObject2$4, "Identification", ifcDataTypes.text), _defineProperty(_newObject2$4, "Name", ifcDataTypes.text), _defineProperty(_newObject2$4, "Description", ifcDataTypes.text), _defineProperty(_newObject2$4, "Roles", ifcDataTypes.idSet), _defineProperty(_newObject2$4, "Addresses", ifcDataTypes.idSet), _newObject2$4));
newObject((_newObject3$3 = {}, _defineProperty(_newObject3$3, namedProps.ifcClass, getName(ifcTypes.IfcOwnerHistory)), _defineProperty(_newObject3$3, "OwningUser", ifcDataTypes.id), _defineProperty(_newObject3$3, "OwningApplication", ifcDataTypes.id), _defineProperty(_newObject3$3, "State", ifcDataTypes["enum"]), _defineProperty(_newObject3$3, "ChangeAction", ifcDataTypes["enum"]), _defineProperty(_newObject3$3, "LastModifiedDate", ifcDataTypes.date), _defineProperty(_newObject3$3, "LastModifyingUser", ifcDataTypes.id), _defineProperty(_newObject3$3, "LastModifyingApplication", ifcDataTypes.id), _defineProperty(_newObject3$3, "CreationDate", ifcDataTypes.date), _newObject3$3));
newObject((_newObject4$3 = {}, _defineProperty(_newObject4$3, namedProps.ifcClass, getName(ifcTypes.IfcPerson)), _defineProperty(_newObject4$3, "Identification", ifcDataTypes.text), _defineProperty(_newObject4$3, "FamilyName", ifcDataTypes.text), _defineProperty(_newObject4$3, "GivenName", ifcDataTypes.text), _defineProperty(_newObject4$3, "MiddleNames", ifcDataTypes.textSet), _defineProperty(_newObject4$3, "PrefixTitles", ifcDataTypes.textSet), _defineProperty(_newObject4$3, "SuffixTitles", ifcDataTypes.textSet), _defineProperty(_newObject4$3, "Roles", ifcDataTypes.idSet), _defineProperty(_newObject4$3, "Addresses", ifcDataTypes.idSet), _newObject4$3));
newObject((_newObject5$3 = {}, _defineProperty(_newObject5$3, namedProps.ifcClass, getName(ifcTypes.IfcPersonAndOrganization)), _defineProperty(_newObject5$3, "ThePerson", ifcDataTypes.id), _defineProperty(_newObject5$3, "TheOrganization", ifcDataTypes.id), _defineProperty(_newObject5$3, "Roles", ifcDataTypes.idSet), _newObject5$3));
newObject((_newObject6$2 = {}, _defineProperty(_newObject6$2, namedProps.ifcClass, getName(ifcTypes.IfcPostalAddress)), _defineProperty(_newObject6$2, "Purpose", ifcDataTypes["enum"]), _defineProperty(_newObject6$2, "Description", ifcDataTypes.text), _defineProperty(_newObject6$2, "UserDefinedPurpose", ifcDataTypes.text), _defineProperty(_newObject6$2, "InternalLocation", ifcDataTypes.text), _defineProperty(_newObject6$2, "AddressLines", ifcDataTypes.textSet), _defineProperty(_newObject6$2, "PostalBox", ifcDataTypes.text), _defineProperty(_newObject6$2, "Town", ifcDataTypes.text), _defineProperty(_newObject6$2, "Region", ifcDataTypes.text), _defineProperty(_newObject6$2, "PostalCode", ifcDataTypes.text), _defineProperty(_newObject6$2, "Country", ifcDataTypes.text), _newObject6$2));

var _newObject$5, _newObject2$5, _newObject3$4, _newObject4$4, _newObject5$4;
newObject((_newObject$5 = {}, _defineProperty(_newObject$5, namedProps.ifcClass, getName(ifcTypes.IfcMaterial)), _defineProperty(_newObject$5, "Name", ifcDataTypes.text), _newObject$5));
newObject((_newObject2$5 = {}, _defineProperty(_newObject2$5, namedProps.ifcClass, getName(ifcTypes.IfcMaterialLayer)), _defineProperty(_newObject2$5, "Material", ifcDataTypes.id), _defineProperty(_newObject2$5, "LayerThickness", ifcDataTypes.number), _defineProperty(_newObject2$5, "IsVentilated", ifcDataTypes.value), _newObject2$5));
newObject((_newObject3$4 = {}, _defineProperty(_newObject3$4, namedProps.ifcClass, getName(ifcTypes.IfcMaterialLayerSet)), _defineProperty(_newObject3$4, "MaterialLayers", ifcDataTypes.idSet), _defineProperty(_newObject3$4, "LayerSetName", ifcDataTypes.text), _newObject3$4));
newObject((_newObject4$4 = {}, _defineProperty(_newObject4$4, namedProps.ifcClass, getName(ifcTypes.IfcMaterialLayerSetUsage)), _defineProperty(_newObject4$4, "ForLayerSet", ifcDataTypes.id), _defineProperty(_newObject4$4, "LayerSetDirection", ifcDataTypes["enum"]), _defineProperty(_newObject4$4, "DirectionSense", ifcDataTypes["enum"]), _defineProperty(_newObject4$4, "OffsetFromReferenceLine", ifcDataTypes.number), _newObject4$4));
newObject((_newObject5$4 = {}, _defineProperty(_newObject5$4, namedProps.ifcClass, getName(ifcTypes.IfcMaterialList)), _defineProperty(_newObject5$4, "Materials", ifcDataTypes.idSet), _newObject5$4));

var _newObject$6, _newObject2$6, _newObject3$5, _newObject4$5, _newObject5$5, _newObject6$3, _newObject7$2, _newObject8$2, _newObject9$2, _newObject10$2;
newObject((_newObject$6 = {}, _defineProperty(_newObject$6, namedProps.ifcClass, getName(ifcTypes.IfcColourRgb)), _defineProperty(_newObject$6, "Name", ifcDataTypes.text), _defineProperty(_newObject$6, "Red", ifcDataTypes.number), _defineProperty(_newObject$6, "Green", ifcDataTypes.number), _defineProperty(_newObject$6, "Blue", ifcDataTypes.number), _newObject$6));
newObject((_newObject2$6 = {}, _defineProperty(_newObject2$6, namedProps.ifcClass, getName(ifcTypes.IfcMaterialDefinitionRepresentation)), _defineProperty(_newObject2$6, "Name", ifcDataTypes.text), _defineProperty(_newObject2$6, "Description", ifcDataTypes.text), _defineProperty(_newObject2$6, namedProps.representations, ifcDataTypes.idSet), _defineProperty(_newObject2$6, "RepresentedMaterial", ifcDataTypes.id), _newObject2$6));
newObject((_newObject3$5 = {}, _defineProperty(_newObject3$5, namedProps.ifcClass, getName(ifcTypes.IfcPresentationStyleAssignment)), _defineProperty(_newObject3$5, "Styles", ifcDataTypes.idSet), _newObject3$5));
newObject((_newObject4$5 = {}, _defineProperty(_newObject4$5, namedProps.ifcClass, getName(ifcTypes.IfcStyledItem)), _defineProperty(_newObject4$5, "Item", ifcDataTypes.id), _defineProperty(_newObject4$5, "Styles", ifcDataTypes.idSet), _defineProperty(_newObject4$5, "Name", ifcDataTypes.id), _newObject4$5));
newObject((_newObject5$5 = {}, _defineProperty(_newObject5$5, namedProps.ifcClass, getName(ifcTypes.IfcStyledRepresentation)), _defineProperty(_newObject5$5, "ContextOfItems", ifcDataTypes.id), _defineProperty(_newObject5$5, "RepresentationIdentifier", ifcDataTypes.text), _defineProperty(_newObject5$5, namedProps.representationType, ifcDataTypes.text), _defineProperty(_newObject5$5, namedProps.items, ifcDataTypes.idSet), _newObject5$5));
newObject((_newObject6$3 = {}, _defineProperty(_newObject6$3, namedProps.ifcClass, getName(ifcTypes.IfcSurfaceStyle)), _defineProperty(_newObject6$3, "Name", ifcDataTypes.text), _defineProperty(_newObject6$3, "Side", ifcDataTypes["enum"]), _defineProperty(_newObject6$3, "Styles", ifcDataTypes.idSet), _newObject6$3));
newObject((_newObject7$2 = {}, _defineProperty(_newObject7$2, namedProps.ifcClass, getName(ifcTypes.IfcSurfaceStyleRendering)), _defineProperty(_newObject7$2, "SurfaceColour", ifcDataTypes.id), _defineProperty(_newObject7$2, "Transparency", ifcDataTypes.value), _defineProperty(_newObject7$2, "DiffuseColour", ifcDataTypes.value), _defineProperty(_newObject7$2, "TransmissionColour", ifcDataTypes.value), _defineProperty(_newObject7$2, "DiffuseTransmissionColour", ifcDataTypes.value), _defineProperty(_newObject7$2, "ReflectionColour", ifcDataTypes.value), _defineProperty(_newObject7$2, "SpecularColour", ifcDataTypes.value), _defineProperty(_newObject7$2, "SpecularHighlight", ifcDataTypes.value), _defineProperty(_newObject7$2, "ReflectanceMethod", ifcDataTypes["enum"]), _newObject7$2));
newObject((_newObject8$2 = {}, _defineProperty(_newObject8$2, namedProps.ifcClass, getName(ifcTypes.IfcRepresentationMap)), _defineProperty(_newObject8$2, namedProps.mappingOrigin, ifcDataTypes.id), _defineProperty(_newObject8$2, namedProps.mappedRepresentation, ifcDataTypes.id), _newObject8$2));
newObject((_newObject9$2 = {}, _defineProperty(_newObject9$2, namedProps.ifcClass, getName(ifcTypes.IfcPresentationLayerAssignment)), _defineProperty(_newObject9$2, "Name", ifcDataTypes.text), _defineProperty(_newObject9$2, "Description", ifcDataTypes.text), _defineProperty(_newObject9$2, "AssignedItems", ifcDataTypes.idSet), _defineProperty(_newObject9$2, "Identifier", ifcDataTypes.text), _newObject9$2));
newObject((_newObject10$2 = {}, _defineProperty(_newObject10$2, namedProps.ifcClass, getName(ifcTypes.IfcSurfaceStyleShading)), _defineProperty(_newObject10$2, "SurfaceColour", ifcDataTypes.id), _newObject10$2));

var _newObject$7, _newObject2$7, _newObject3$6, _newObject4$6, _newObject5$6, _newObject6$4, _newObject7$3, _newObject8$3, _newObject9$3, _newObject10$3, _newObject11$2, _newObject12$2, _newObject13$2, _newObject14$2, _newObject15$2, _newObject16$2, _newObject17$2, _newObject18$2, _newObject19$2;
newObject((_newObject$7 = {}, _defineProperty(_newObject$7, namedProps.ifcClass, getName(ifcTypes.IfcPropertySet)), _defineProperty(_newObject$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$7, "Name", ifcDataTypes.text), _defineProperty(_newObject$7, "Description", ifcDataTypes.text), _defineProperty(_newObject$7, "HasProperties", ifcDataTypes.idSet), _newObject$7));
newObject((_newObject2$7 = {}, _defineProperty(_newObject2$7, namedProps.ifcClass, getName(ifcTypes.IfcPropertySingleValue)), _defineProperty(_newObject2$7, "Name", ifcDataTypes.text), _defineProperty(_newObject2$7, "Description", ifcDataTypes.text), _defineProperty(_newObject2$7, "NominalValue", ifcDataTypes.value), _defineProperty(_newObject2$7, "Unit", ifcDataTypes.id), _newObject2$7));
newObject((_newObject3$6 = {}, _defineProperty(_newObject3$6, namedProps.ifcClass, getName(ifcTypes.IfcSpaceType)), _defineProperty(_newObject3$6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3$6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3$6, "Name", ifcDataTypes.text), _defineProperty(_newObject3$6, "Description", ifcDataTypes.text), _defineProperty(_newObject3$6, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject3$6, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject3$6, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject3$6, "Tag", ifcDataTypes.text), _defineProperty(_newObject3$6, "ElementType", ifcDataTypes.text), _defineProperty(_newObject3$6, "PredefinedType", ifcDataTypes["enum"]), _newObject3$6));
newObject((_newObject4$6 = {}, _defineProperty(_newObject4$6, namedProps.ifcClass, getName(ifcTypes.IfcColumnType)), _defineProperty(_newObject4$6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4$6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4$6, "Name", ifcDataTypes.text), _defineProperty(_newObject4$6, "Description", ifcDataTypes.text), _defineProperty(_newObject4$6, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject4$6, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject4$6, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject4$6, "Tag", ifcDataTypes.text), _defineProperty(_newObject4$6, "ElementType", ifcDataTypes.text), _defineProperty(_newObject4$6, "PredefinedType", ifcDataTypes["enum"]), _newObject4$6));
newObject((_newObject5$6 = {}, _defineProperty(_newObject5$6, namedProps.ifcClass, getName(ifcTypes.IfcPlateType)), _defineProperty(_newObject5$6, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5$6, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5$6, "Name", ifcDataTypes.text), _defineProperty(_newObject5$6, "Description", ifcDataTypes.text), _defineProperty(_newObject5$6, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject5$6, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject5$6, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject5$6, "Tag", ifcDataTypes.text), _defineProperty(_newObject5$6, "ElementType", ifcDataTypes.text), _defineProperty(_newObject5$6, "PredefinedType", ifcDataTypes["enum"]), _newObject5$6));
newObject((_newObject6$4 = {}, _defineProperty(_newObject6$4, namedProps.ifcClass, getName(ifcTypes.IfcMemberType)), _defineProperty(_newObject6$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject6$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject6$4, "Name", ifcDataTypes.text), _defineProperty(_newObject6$4, "Description", ifcDataTypes.text), _defineProperty(_newObject6$4, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject6$4, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject6$4, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject6$4, "Tag", ifcDataTypes.text), _defineProperty(_newObject6$4, "ElementType", ifcDataTypes.text), _defineProperty(_newObject6$4, "PredefinedType", ifcDataTypes["enum"]), _newObject6$4));
newObject((_newObject7$3 = {}, _defineProperty(_newObject7$3, namedProps.ifcClass, getName(ifcTypes.IfcWallType)), _defineProperty(_newObject7$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject7$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject7$3, "Name", ifcDataTypes.text), _defineProperty(_newObject7$3, "Description", ifcDataTypes.text), _defineProperty(_newObject7$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject7$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject7$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject7$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject7$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject7$3, "PredefinedType", ifcDataTypes["enum"]), _newObject7$3));
newObject((_newObject8$3 = {}, _defineProperty(_newObject8$3, namedProps.ifcClass, getName(ifcTypes.IfcStairFlightType)), _defineProperty(_newObject8$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject8$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject8$3, "Name", ifcDataTypes.text), _defineProperty(_newObject8$3, "Description", ifcDataTypes.text), _defineProperty(_newObject8$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject8$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject8$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject8$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject8$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject8$3, "PredefinedType", ifcDataTypes["enum"]), _newObject8$3));
newObject((_newObject9$3 = {}, _defineProperty(_newObject9$3, namedProps.ifcClass, getName(ifcTypes.IfcCoveringType)), _defineProperty(_newObject9$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject9$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject9$3, "Name", ifcDataTypes.text), _defineProperty(_newObject9$3, "Description", ifcDataTypes.text), _defineProperty(_newObject9$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject9$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject9$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject9$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject9$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject9$3, "PredefinedType", ifcDataTypes["enum"]), _newObject9$3));
newObject((_newObject10$3 = {}, _defineProperty(_newObject10$3, namedProps.ifcClass, getName(ifcTypes.IfcCurtainWallType)), _defineProperty(_newObject10$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject10$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject10$3, "Name", ifcDataTypes.text), _defineProperty(_newObject10$3, "Description", ifcDataTypes.text), _defineProperty(_newObject10$3, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject10$3, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject10$3, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject10$3, "Tag", ifcDataTypes.text), _defineProperty(_newObject10$3, "ElementType", ifcDataTypes.text), _defineProperty(_newObject10$3, "PredefinedType", ifcDataTypes["enum"]), _newObject10$3));
newObject((_newObject11$2 = {}, _defineProperty(_newObject11$2, namedProps.ifcClass, getName(ifcTypes.IfcFurnitureType)), _defineProperty(_newObject11$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject11$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject11$2, "Name", ifcDataTypes.text), _defineProperty(_newObject11$2, "Description", ifcDataTypes.text), _defineProperty(_newObject11$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject11$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject11$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject11$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject11$2, "ElementType", ifcDataTypes.text), _defineProperty(_newObject11$2, "AssemblyPlace", ifcDataTypes["enum"]), _newObject11$2));
newObject((_newObject12$2 = {}, _defineProperty(_newObject12$2, namedProps.ifcClass, getName(ifcTypes.IfcSlabType)), _defineProperty(_newObject12$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject12$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject12$2, "Name", ifcDataTypes.text), _defineProperty(_newObject12$2, "Description", ifcDataTypes.text), _defineProperty(_newObject12$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject12$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject12$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject12$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject12$2, "ElementType", ifcDataTypes.text), _defineProperty(_newObject12$2, "PredefinedType", ifcDataTypes["enum"]), _newObject12$2));
newObject((_newObject13$2 = {}, _defineProperty(_newObject13$2, namedProps.ifcClass, getName(ifcTypes.IfcBuildingElementProxyType)), _defineProperty(_newObject13$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject13$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject13$2, "Name", ifcDataTypes.text), _defineProperty(_newObject13$2, "Description", ifcDataTypes.text), _defineProperty(_newObject13$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject13$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject13$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject13$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject13$2, "ElementType", ifcDataTypes.text), _defineProperty(_newObject13$2, "PredefinedType", ifcDataTypes["enum"]), _newObject13$2));
newObject((_newObject14$2 = {}, _defineProperty(_newObject14$2, namedProps.ifcClass, getName(ifcTypes.IfcSanitaryTerminalType)), _defineProperty(_newObject14$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject14$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject14$2, "Name", ifcDataTypes.text), _defineProperty(_newObject14$2, "Description", ifcDataTypes.text), _defineProperty(_newObject14$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject14$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject14$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject14$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject14$2, "ElementType", ifcDataTypes.text), _defineProperty(_newObject14$2, "PredefinedType", ifcDataTypes["enum"]), _newObject14$2));
newObject((_newObject15$2 = {}, _defineProperty(_newObject15$2, namedProps.ifcClass, getName(ifcTypes.IfcDoorLiningProperties)), _defineProperty(_newObject15$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject15$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject15$2, "Name", ifcDataTypes.text), _defineProperty(_newObject15$2, "Description", ifcDataTypes.text), _defineProperty(_newObject15$2, "LiningDepth", ifcDataTypes.number), _defineProperty(_newObject15$2, "LiningThickness", ifcDataTypes.number), _defineProperty(_newObject15$2, "ThresholdDepth", ifcDataTypes.number), _defineProperty(_newObject15$2, "ThresholdThickness", ifcDataTypes.number), _defineProperty(_newObject15$2, "TransomThickness", ifcDataTypes.number), _defineProperty(_newObject15$2, "TransomOffset", ifcDataTypes.number), _defineProperty(_newObject15$2, "LiningOffset", ifcDataTypes.number), _defineProperty(_newObject15$2, "ThresholdOffset", ifcDataTypes.number), _defineProperty(_newObject15$2, "CasingThickness", ifcDataTypes.number), _defineProperty(_newObject15$2, "CasingDepth", ifcDataTypes.number), _defineProperty(_newObject15$2, "ShapeAspectStyle", ifcDataTypes.id), _newObject15$2));
newObject((_newObject16$2 = {}, _defineProperty(_newObject16$2, namedProps.ifcClass, getName(ifcTypes.IfcDoorPanelProperties)), _defineProperty(_newObject16$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject16$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject16$2, "Name", ifcDataTypes.text), _defineProperty(_newObject16$2, "Description", ifcDataTypes.text), _defineProperty(_newObject16$2, "PanelDepth", ifcDataTypes.number), _defineProperty(_newObject16$2, "PanelOperation", ifcDataTypes["enum"]), _defineProperty(_newObject16$2, "PanelWidth", ifcDataTypes.value), _defineProperty(_newObject16$2, "PanelPosition", ifcDataTypes["enum"]), _defineProperty(_newObject16$2, "ShapeAspectStyle", ifcDataTypes.id), _newObject16$2));
newObject((_newObject17$2 = {}, _defineProperty(_newObject17$2, namedProps.ifcClass, getName(ifcTypes.IfcDoorStyle)), _defineProperty(_newObject17$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject17$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject17$2, "Name", ifcDataTypes.text), _defineProperty(_newObject17$2, "Description", ifcDataTypes.text), _defineProperty(_newObject17$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject17$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject17$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject17$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject17$2, "OperationType", ifcDataTypes["enum"]), _defineProperty(_newObject17$2, "ConstructionType", ifcDataTypes["enum"]), _defineProperty(_newObject17$2, "ParameterTakesPrecedence", ifcDataTypes.bool), _defineProperty(_newObject17$2, "Sizeable", ifcDataTypes.bool), _newObject17$2));
newObject((_newObject18$2 = {}, _defineProperty(_newObject18$2, namedProps.ifcClass, getName(ifcTypes.IfcWindowStyle)), _defineProperty(_newObject18$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject18$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject18$2, "Name", ifcDataTypes.text), _defineProperty(_newObject18$2, "Description", ifcDataTypes.text), _defineProperty(_newObject18$2, "ApplicableOccurrence", ifcDataTypes.text), _defineProperty(_newObject18$2, "HasPropertySets", ifcDataTypes.idSet), _defineProperty(_newObject18$2, "RepresentationMaps", ifcDataTypes.idSet), _defineProperty(_newObject18$2, "Tag", ifcDataTypes.text), _defineProperty(_newObject18$2, "ConstructionType", ifcDataTypes["enum"]), _defineProperty(_newObject18$2, "OperationType", ifcDataTypes["enum"]), _defineProperty(_newObject18$2, "ParameterTakesPrecedence", ifcDataTypes.bool), _defineProperty(_newObject18$2, "Sizeable", ifcDataTypes.bool), _newObject18$2));
newObject((_newObject19$2 = {}, _defineProperty(_newObject19$2, namedProps.ifcClass, getName(ifcTypes.IfcWindowLiningProperties)), _defineProperty(_newObject19$2, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject19$2, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject19$2, "Name", ifcDataTypes.text), _defineProperty(_newObject19$2, "Description", ifcDataTypes.text), _defineProperty(_newObject19$2, "LiningDepth", ifcDataTypes.number), _defineProperty(_newObject19$2, "LiningThickness", ifcDataTypes.number), _defineProperty(_newObject19$2, "TransomThickness", ifcDataTypes.number), _defineProperty(_newObject19$2, "MullionThickness", ifcDataTypes.number), _defineProperty(_newObject19$2, "FirstTransomOffset", ifcDataTypes.number), _defineProperty(_newObject19$2, "SecondTransomOffset", ifcDataTypes.number), _defineProperty(_newObject19$2, "FirstMullionOffset", ifcDataTypes.number), _defineProperty(_newObject19$2, "SecondMullionOffset", ifcDataTypes.number), _defineProperty(_newObject19$2, "ShapeAspectStyle", ifcDataTypes.number), _newObject19$2));

var _newObject$8, _newObject2$8, _newObject3$7, _newObject4$7, _newObject5$7, _newObject6$5, _newObject7$4, _newObject8$4, _newObject9$4, _newObject10$4, _newObject11$3, _newObject12$3, _newObject13$3, _newObject14$3;
newObject((_newObject$8 = {}, _defineProperty(_newObject$8, namedProps.ifcClass, getName(ifcTypes.IfcRelAggregates)), _defineProperty(_newObject$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$8, "Name", ifcDataTypes.text), _defineProperty(_newObject$8, "Description", ifcDataTypes.text), _defineProperty(_newObject$8, namedProps.relatingObject, ifcDataTypes.id), _defineProperty(_newObject$8, namedProps.relatedObjects, ifcDataTypes.idSet), _newObject$8));
newObject((_newObject2$8 = {}, _defineProperty(_newObject2$8, namedProps.ifcClass, getName(ifcTypes.IfcRelContainedInSpatialStructure)), _defineProperty(_newObject2$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2$8, "Name", ifcDataTypes.text), _defineProperty(_newObject2$8, "Description", ifcDataTypes.text), _defineProperty(_newObject2$8, namedProps.relatedElements, ifcDataTypes.idSet), _defineProperty(_newObject2$8, namedProps.relatingStructure, ifcDataTypes.id), _newObject2$8));
newObject((_newObject3$7 = {}, _defineProperty(_newObject3$7, namedProps.ifcClass, getName(ifcTypes.IfcRelDefinesByProperties)), _defineProperty(_newObject3$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3$7, "Name", ifcDataTypes.text), _defineProperty(_newObject3$7, "Description", ifcDataTypes.text), _defineProperty(_newObject3$7, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject3$7, "RelatingPropertyDefinition", ifcDataTypes.id), _newObject3$7));
newObject((_newObject4$7 = {}, _defineProperty(_newObject4$7, namedProps.ifcClass, getName(ifcTypes.IfcRelAssociatesMaterial)), _defineProperty(_newObject4$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4$7, "Name", ifcDataTypes.text), _defineProperty(_newObject4$7, "Description", ifcDataTypes.text), _defineProperty(_newObject4$7, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject4$7, "RelatingMaterial", ifcDataTypes.id), _newObject4$7));
newObject((_newObject5$7 = {}, _defineProperty(_newObject5$7, namedProps.ifcClass, getName(ifcTypes.IfcRelAssociatesClassification)), _defineProperty(_newObject5$7, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5$7, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5$7, "Name", ifcDataTypes.text), _defineProperty(_newObject5$7, "Description", ifcDataTypes.text), _defineProperty(_newObject5$7, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject5$7, "RelatingClassification", ifcDataTypes.id), _newObject5$7));
newObject((_newObject6$5 = {}, _defineProperty(_newObject6$5, namedProps.ifcClass, getName(ifcTypes.IfcRelDefinesByType)), _defineProperty(_newObject6$5, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject6$5, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject6$5, "Name", ifcDataTypes.text), _defineProperty(_newObject6$5, "Description", ifcDataTypes.text), _defineProperty(_newObject6$5, namedProps.relatedObjects, ifcDataTypes.idSet), _defineProperty(_newObject6$5, namedProps.relatingType, ifcDataTypes.id), _newObject6$5));
newObject((_newObject7$4 = {}, _defineProperty(_newObject7$4, namedProps.ifcClass, getName(ifcTypes.IfcRelSpaceBoundary)), _defineProperty(_newObject7$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject7$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject7$4, "Name", ifcDataTypes.text), _defineProperty(_newObject7$4, "Description", ifcDataTypes.text), _defineProperty(_newObject7$4, "RelatingSpace", ifcDataTypes.id), _defineProperty(_newObject7$4, "RelatedBuildingElement", ifcDataTypes.id), _defineProperty(_newObject7$4, "ConnectionGeometry", ifcDataTypes.id), _defineProperty(_newObject7$4, "PhysicalOrVirtualBoundary", ifcDataTypes["enum"]), _defineProperty(_newObject7$4, "InternalOrExternalBoundary", ifcDataTypes["enum"]), _newObject7$4));
newObject((_newObject8$4 = {}, _defineProperty(_newObject8$4, namedProps.ifcClass, getName(ifcTypes.IfcRelConnectsPathElements)), _defineProperty(_newObject8$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject8$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject8$4, "Name", ifcDataTypes.text), _defineProperty(_newObject8$4, "Description", ifcDataTypes.text), _defineProperty(_newObject8$4, "ConnectionGeometry", ifcDataTypes.id), _defineProperty(_newObject8$4, "RelatingElement", ifcDataTypes.id), _defineProperty(_newObject8$4, "RelatedElement", ifcDataTypes.id), _defineProperty(_newObject8$4, "RelatingPriorities", ifcDataTypes.numSet), _defineProperty(_newObject8$4, "RelatedPriorities", ifcDataTypes.numSet), _defineProperty(_newObject8$4, "RelatedConnectionType", ifcDataTypes["enum"]), _defineProperty(_newObject8$4, "RelatingConnectionType", ifcDataTypes["enum"]), _newObject8$4));
newObject((_newObject9$4 = {}, _defineProperty(_newObject9$4, namedProps.ifcClass, getName(ifcTypes.IfcRelVoidsElement)), _defineProperty(_newObject9$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject9$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject9$4, "Name", ifcDataTypes.text), _defineProperty(_newObject9$4, "Description", ifcDataTypes.text), _defineProperty(_newObject9$4, namedProps.relatingBuildingElement, ifcDataTypes.id), _defineProperty(_newObject9$4, namedProps.relatedOpeningElement, ifcDataTypes.id), _newObject9$4));
newObject((_newObject10$4 = {}, _defineProperty(_newObject10$4, namedProps.ifcClass, getName(ifcTypes.IfcRelFillsElement)), _defineProperty(_newObject10$4, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject10$4, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject10$4, "Name", ifcDataTypes.text), _defineProperty(_newObject10$4, "Description", ifcDataTypes.text), _defineProperty(_newObject10$4, namedProps.relatingOpeningElement, ifcDataTypes.id), _defineProperty(_newObject10$4, namedProps.relatedBuildingElement, ifcDataTypes.id), _newObject10$4));
newObject((_newObject11$3 = {}, _defineProperty(_newObject11$3, namedProps.ifcClass, getName(ifcTypes.IfcRelConnectsPortToElement)), _defineProperty(_newObject11$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject11$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject11$3, "Name", ifcDataTypes.text), _defineProperty(_newObject11$3, "Description", ifcDataTypes.text), _defineProperty(_newObject11$3, "RelatingPort", ifcDataTypes.id), _defineProperty(_newObject11$3, "RelatedElement", ifcDataTypes.id), _newObject11$3));
newObject((_newObject12$3 = {}, _defineProperty(_newObject12$3, namedProps.ifcClass, getName(ifcTypes.IfcRelAssignsToGroup)), _defineProperty(_newObject12$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject12$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject12$3, "Name", ifcDataTypes.text), _defineProperty(_newObject12$3, "Description", ifcDataTypes.text), _defineProperty(_newObject12$3, "RelatedObjects", ifcDataTypes.idSet), _defineProperty(_newObject12$3, "RelatedObjectsType", ifcDataTypes["enum"]), _defineProperty(_newObject12$3, "RelatingGroup", ifcDataTypes.id), _newObject12$3));
newObject((_newObject13$3 = {}, _defineProperty(_newObject13$3, namedProps.ifcClass, getName(ifcTypes.IfcRelServicesBuildings)), _defineProperty(_newObject13$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject13$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject13$3, "Name", ifcDataTypes.text), _defineProperty(_newObject13$3, "Description", ifcDataTypes.text), _defineProperty(_newObject13$3, "RelatingSystem", ifcDataTypes.id), _defineProperty(_newObject13$3, "RelatedBuildings", ifcDataTypes.idSet), _newObject13$3));
newObject((_newObject14$3 = {}, _defineProperty(_newObject14$3, namedProps.ifcClass, getName(ifcTypes.IfcGroup)), _defineProperty(_newObject14$3, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject14$3, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject14$3, "Name", ifcDataTypes.text), _defineProperty(_newObject14$3, "Description", ifcDataTypes.text), _defineProperty(_newObject14$3, "ObjectType", ifcDataTypes.text), _newObject14$3));

var _newObject$9, _newObject2$9;
newObject((_newObject$9 = {}, _defineProperty(_newObject$9, namedProps.ifcClass, getName(ifcTypes.IfcDistributionPort)), _defineProperty(_newObject$9, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$9, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$9, "Name", ifcDataTypes.text), _defineProperty(_newObject$9, "Description", ifcDataTypes.text), _defineProperty(_newObject$9, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject$9, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject$9, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject$9, "FlowDirection", ifcDataTypes["enum"]), _newObject$9));
newObject((_newObject2$9 = {}, _defineProperty(_newObject2$9, namedProps.ifcClass, getName(ifcTypes.IfcSystem)), _defineProperty(_newObject2$9, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2$9, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2$9, "Name", ifcDataTypes.text), _defineProperty(_newObject2$9, "Description", ifcDataTypes.text), _defineProperty(_newObject2$9, "ObjectType", ifcDataTypes.text), _newObject2$9));

var _newObject$a, _newObject2$a, _newObject3$8, _newObject4$8, _newObject5$8;
newObject((_newObject$a = {}, _defineProperty(_newObject$a, namedProps.ifcClass, getName(ifcTypes.IfcProject)), _defineProperty(_newObject$a, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject$a, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject$a, "Name", ifcDataTypes.text), _defineProperty(_newObject$a, "Description", ifcDataTypes.text), _defineProperty(_newObject$a, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject$a, "LongName", ifcDataTypes.text), _defineProperty(_newObject$a, "Phase", ifcDataTypes.text), _defineProperty(_newObject$a, "RepresentationContexts", ifcDataTypes.idSet), _defineProperty(_newObject$a, "UnitsInContext", ifcDataTypes.id), _newObject$a));
newObject((_newObject2$a = {}, _defineProperty(_newObject2$a, namedProps.ifcClass, getName(ifcTypes.IfcSite)), _defineProperty(_newObject2$a, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject2$a, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject2$a, "Name", ifcDataTypes.text), _defineProperty(_newObject2$a, "Description", ifcDataTypes.text), _defineProperty(_newObject2$a, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject2$a, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject2$a, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject2$a, "LongName", ifcDataTypes.text), _defineProperty(_newObject2$a, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject2$a, "RefLatitude", ifcDataTypes.numSet), _defineProperty(_newObject2$a, "RefLongitude", ifcDataTypes.numSet), _defineProperty(_newObject2$a, "RefElevation", ifcDataTypes.number), _defineProperty(_newObject2$a, "LandTitleNumber", ifcDataTypes.text), _defineProperty(_newObject2$a, "SiteAddress", ifcDataTypes.id), _newObject2$a));
newObject((_newObject3$8 = {}, _defineProperty(_newObject3$8, namedProps.ifcClass, getName(ifcTypes.IfcBuilding)), _defineProperty(_newObject3$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject3$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject3$8, "Name", ifcDataTypes.text), _defineProperty(_newObject3$8, "Description", ifcDataTypes.text), _defineProperty(_newObject3$8, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject3$8, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject3$8, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject3$8, "LongName", ifcDataTypes.text), _defineProperty(_newObject3$8, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject3$8, "ElevationOfRefHeight", ifcDataTypes.number), _defineProperty(_newObject3$8, "ElevationOfTerrain", ifcDataTypes.number), _defineProperty(_newObject3$8, "BuildingAddress", ifcDataTypes.id), _newObject3$8));
newObject((_newObject4$8 = {}, _defineProperty(_newObject4$8, namedProps.ifcClass, getName(ifcTypes.IfcBuildingStorey)), _defineProperty(_newObject4$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject4$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject4$8, "Name", ifcDataTypes.text), _defineProperty(_newObject4$8, "Description", ifcDataTypes.text), _defineProperty(_newObject4$8, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject4$8, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject4$8, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject4$8, "LongName", ifcDataTypes.text), _defineProperty(_newObject4$8, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject4$8, "Elevation", ifcDataTypes.number), _newObject4$8));
newObject((_newObject5$8 = {}, _defineProperty(_newObject5$8, namedProps.ifcClass, getName(ifcTypes.IfcSpace)), _defineProperty(_newObject5$8, "GlobalId", ifcDataTypes.text), _defineProperty(_newObject5$8, "OwnerHistory", ifcDataTypes.id), _defineProperty(_newObject5$8, "Name", ifcDataTypes.text), _defineProperty(_newObject5$8, "Description", ifcDataTypes.text), _defineProperty(_newObject5$8, "ObjectType", ifcDataTypes.text), _defineProperty(_newObject5$8, namedProps.objectPlacement, ifcDataTypes.id), _defineProperty(_newObject5$8, namedProps.representation, ifcDataTypes.id), _defineProperty(_newObject5$8, "LongName", ifcDataTypes.text), _defineProperty(_newObject5$8, "CompositionType", ifcDataTypes["enum"]), _defineProperty(_newObject5$8, "InteriorOrExteriorSpace", ifcDataTypes["enum"]), _defineProperty(_newObject5$8, "ElevationWithFlooring", ifcDataTypes.number), _newObject5$8));

var _newObject$b, _newObject2$b, _newObject3$9, _newObject4$9, _newObject5$9, _newObject6$6, _newObject7$5;
newObject((_newObject$b = {}, _defineProperty(_newObject$b, namedProps.ifcClass, getName(ifcTypes.IfcConversionBasedUnit)), _defineProperty(_newObject$b, "Dimensions", ifcDataTypes.id), _defineProperty(_newObject$b, namedProps.unitType, ifcDataTypes["enum"]), _defineProperty(_newObject$b, "Name", ifcDataTypes.text), _defineProperty(_newObject$b, "ConversionFactor", ifcDataTypes.id), _newObject$b));
newObject((_newObject2$b = {}, _defineProperty(_newObject2$b, namedProps.ifcClass, getName(ifcTypes.IfcDerivedUnit)), _defineProperty(_newObject2$b, "Elements", ifcDataTypes.idSet), _defineProperty(_newObject2$b, namedProps.unitType, ifcDataTypes["enum"]), _defineProperty(_newObject2$b, "UserDefinedType", ifcDataTypes.text), _newObject2$b));
newObject((_newObject3$9 = {}, _defineProperty(_newObject3$9, namedProps.ifcClass, getName(ifcTypes.IfcDerivedUnitElement)), _defineProperty(_newObject3$9, "Unit", ifcDataTypes.id), _defineProperty(_newObject3$9, "Exponent", ifcDataTypes.number), _newObject3$9));
newObject((_newObject4$9 = {}, _defineProperty(_newObject4$9, namedProps.ifcClass, getName(ifcTypes.IfcDimensionalExponents)), _defineProperty(_newObject4$9, "LengthExponent", ifcDataTypes.number), _defineProperty(_newObject4$9, "MassExponent", ifcDataTypes.number), _defineProperty(_newObject4$9, "TimeExponent", ifcDataTypes.number), _defineProperty(_newObject4$9, "ElectricCurrentExponent", ifcDataTypes.number), _defineProperty(_newObject4$9, "ThermodynamicTemperatureExponent", ifcDataTypes.number), _defineProperty(_newObject4$9, "AmountOfSubstanceExponent", ifcDataTypes.number), _defineProperty(_newObject4$9, "LuminousIntensityExponent", ifcDataTypes.number), _newObject4$9));
newObject((_newObject5$9 = {}, _defineProperty(_newObject5$9, namedProps.ifcClass, getName(ifcTypes.IfcMeasureWithUnit)), _defineProperty(_newObject5$9, "ValueComponent", ifcDataTypes.value), _defineProperty(_newObject5$9, "UnitComponent", ifcDataTypes.id), _newObject5$9));
newObject((_newObject6$6 = {}, _defineProperty(_newObject6$6, namedProps.ifcClass, getName(ifcTypes.IfcSIUnit)), _defineProperty(_newObject6$6, namedProps.undefined, ifcDataTypes.asterisk), _defineProperty(_newObject6$6, namedProps.unitType, ifcDataTypes["enum"]), _defineProperty(_newObject6$6, namedProps.prefix, ifcDataTypes["enum"]), _defineProperty(_newObject6$6, "Name", ifcDataTypes["enum"]), _newObject6$6));
newObject((_newObject7$5 = {}, _defineProperty(_newObject7$5, namedProps.ifcClass, getName(ifcTypes.IfcUnitAssignment)), _defineProperty(_newObject7$5, namedProps.units, ifcDataTypes.idSet), _newObject7$5));

var _patterns;
var newToken = chevrotain.createToken;
var Lexer = chevrotain.Lexer; //Tokens / vocabulary for constructing the parser primitives

var tokens = [];
var patterns = (_patterns = {}, _defineProperty(_patterns, ifcDataTypes.id, /#\d+/), _defineProperty(_patterns, ifcDataTypes.asterisk, /\*/), _defineProperty(_patterns, ifcDataTypes["default"], /\$/), _defineProperty(_patterns, ifcDataTypes.value, /IFC[A-Z]+?(?=\()/), _defineProperty(_patterns, ifcDataTypes.bool, /\.T\.|\.F\./), _defineProperty(_patterns, ifcDataTypes["enum"], /\.[A-Z0-9_]+?\./), _defineProperty(_patterns, ifcDataTypes.number, /[0-9.E-]+/), _defineProperty(_patterns, ifcDataTypes.text, /'.*?'(?=[\)|,])/), _defineProperty(_patterns, "EqualSign", /=/), _defineProperty(_patterns, "OpenPar", /\(/), _defineProperty(_patterns, "ClosePar", /\)/), _defineProperty(_patterns, "Semicolon", /;/), _defineProperty(_patterns, "Comma", /\s*,\s*/), _defineProperty(_patterns, ifcDataTypes.anything, /.+/), _patterns);
var ingoredPatterns = {
  NewLine: /[\n\r]+/,
  WhiteSpace: /\s+/
};

function createTokens() {
  Object.keys(patterns).forEach(function (e) {
    tokens.push(newToken({
      name: e,
      pattern: patterns[e]
    }));
  });
}

function createIgnoredTokens() {
  Object.keys(ingoredPatterns).forEach(function (e) {
    tokens.push(newToken({
      name: e,
      pattern: ingoredPatterns[e],
      group: chevrotain.Lexer.SKIPPED
    }));
  });
}

createTokens();
createIgnoredTokens();
var lexer = new Lexer(tokens);
var vocabulary = {};
tokens.forEach(function (token) {
  vocabulary[token.name] = token;
});

var _primitiveParsers;

function addPrimitiveParsers($) {
  var parsers = [];
  Object.values(primitiveParsers).forEach(function (e) {
    if (!parsers.includes(e)) {
      parsers.push(e);
      $.RULE(e.name, e($));
    }
  });
}

var primitiveParsers = (_primitiveParsers = {}, _defineProperty(_primitiveParsers, ifcDataTypes.asterisk, Asterisk_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.number, Number_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.date, Number_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.text, IfcText_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.bool, IfcBool_Parser), _defineProperty(_primitiveParsers, ifcDataTypes["enum"], IfcEnum_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.id, IfcExpressId_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.idSet, IdSet_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.numSet, NumberSet_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.value, IfcValue_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.valueSet, ValueSet_Parser), _defineProperty(_primitiveParsers, ifcDataTypes.textSet, TextSet_Parser), _primitiveParsers);

function getParser(dataType) {
  return primitiveParsers[dataType].name;
}

function Asterisk_Parser($) {
  return function () {
    $.AT_LEAST_ONE(function () {
      $.OR([{
        ALT: function ALT() {
          $.CONSUME(vocabulary[ifcDataTypes.asterisk]);
        }
      }]);
      $.OPTION(function () {
        $.CONSUME(vocabulary.Comma);
      });
    });
  };
}

function IfcValue_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary.IfcValue);
        $.CONSUME(vocabulary.OpenPar);
        $.OR2([{
          ALT: function ALT() {
            $.CONSUME(vocabulary[ifcDataTypes.number]);
          }
        }, {
          ALT: function ALT() {
            $.CONSUME(vocabulary[ifcDataTypes.text]);
          }
        }, {
          ALT: function ALT() {
            $.CONSUME(vocabulary[ifcDataTypes.bool]);
          }
        }, {
          ALT: function ALT() {
            $.CONSUME(vocabulary[ifcDataTypes["enum"]]);
          }
        }]);
        $.CONSUME(vocabulary.ClosePar);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes.id]);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME2(vocabulary[ifcDataTypes.number]);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION(function () {
      $.CONSUME(vocabulary.Comma);
    });
  };
}

function Number_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes.number]);
      }
    }]);
    $.OPTION(function () {
      $.CONSUME(vocabulary.Comma);
    });
  };
}

function NumberSet_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary.OpenPar);
        $.MANY(function () {
          $.CONSUME(vocabulary[ifcDataTypes.number]);
          $.OPTION(function () {
            $.CONSUME(vocabulary.Comma);
          });
        });
        $.CONSUME(vocabulary.ClosePar);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME2(vocabulary.Comma);
    });
  };
}

function TextSet_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary.OpenPar);
        $.MANY(function () {
          $.CONSUME(vocabulary[ifcDataTypes.text]);
          $.OPTION(function () {
            $.CONSUME(vocabulary.Comma);
          });
        });
        $.CONSUME(vocabulary.ClosePar);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME2(vocabulary.Comma);
    });
  };
}

function IdSet_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary.OpenPar);
        $.MANY(function () {
          $.CONSUME(vocabulary[ifcDataTypes.id]);
          $.OPTION(function () {
            $.CONSUME(vocabulary.Comma);
          });
        });
        $.CONSUME(vocabulary.ClosePar);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME2(vocabulary.Comma);
    });
  };
}

function ValueSet_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary.OpenPar);
        $.MANY(function () {
          $.SUBRULE($.IfcValue_Parser);
          $.OPTION(function () {
            $.CONSUME(vocabulary.Comma);
          });
        });
        $.CONSUME(vocabulary.ClosePar);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME2(vocabulary.Comma);
    });
  };
}

function IfcText_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes.text]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME(vocabulary.Comma);
    });
  };
}

function IfcBool_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes.bool]);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME(vocabulary.Comma);
    });
  };
}

function IfcEnum_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["enum"]]);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME(vocabulary.Comma);
    });
  };
}

function IfcExpressId_Parser($) {
  return function () {
    $.OR([{
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes.id]);
      }
    }, {
      ALT: function ALT() {
        $.CONSUME(vocabulary[ifcDataTypes["default"]]);
      }
    }]);
    $.OPTION2(function () {
      $.CONSUME(vocabulary.Comma);
    });
  };
}

function newParser($, ifcItem) {
  resetParserFactory();
  $.CONSUME(vocabulary.OpenPar);
  createRulesForAllProperties($, ifcItem);
  $.CONSUME(vocabulary.ClosePar);
}

function createRulesForAllProperties($, ifcItem) {
  Object.values(ifcItem).forEach(function (dataType) {
    if (isDataTypeValid(dataType)) newRule($, dataType);
  });
}

function newRule($, dataType) {
  var rule = "SUBRULE".concat(getIndex(dataType));
  updateCounter(dataType);
  return $[rule]($[primitiveParsers[dataType].name]);
} //The counter is necessary because chevrotain cannot have
//multiple identical SUBRULEs. The repeated methods need to be
//followed by a suffix (f.e. SUBRULE(X), SUBRULE2(X), ...)


var counter = {};

function resetParserFactory() {
  counter = {};
  getAllDataTypes().forEach(function (e) {
    counter[e] = 0;
  });
}

function updateCounter(dataType) {
  counter[dataType]++;
} //Chevrotain syntax: SUBRULE0(X) is expressed as SUBRULE(X)


function getIndex(dataType) {
  return counter[dataType] === 0 ? "" : counter[dataType];
}

var CstParser = chevrotain.CstParser; //Contains all the syntactical structures (RULEs)

var IfcParser = /*#__PURE__*/function (_CstParser) {
  _inherits(IfcParser, _CstParser);

  var _super = _createSuper(IfcParser);

  function IfcParser() {
    var _this;

    _classCallCheck(this, IfcParser);

    _this = _super.call(this, tokens);
    addPrimitiveParsers(_assertThisInitialized(_this));
    addParsesForAllIfcTypes(_assertThisInitialized(_this));

    _this.performSelfAnalysis();

    return _this;
  }

  return IfcParser;
}(CstParser); //Creates the syntactical structures (RULEs) for all the IFC Classes


function addParsesForAllIfcTypes($) {
  Object.values(typesParserMap).forEach(function (e) {
    $.RULE(e[namedProps.ifcClass], function () {
      newParser($, e);
    });
  });
}

var parser = new IfcParser();

var r = {
  unicode: /\\X2\\[0-9A-F]+?\\X\d\\/,
  getUnicode: /[0-9A-F]+(?=\\X\d\\)/
};

function unicode(text) {
  while (r.unicode.test(text)) {
    var encoded = text.match(r.unicode)[0].match(r.getUnicode)[0];
    text = text.replace(r.unicode, String.fromCharCode(parseInt(encoded, 16)));
  }

  return text;
}

function formatDate(dateAsNumber) {
  if (isNaN(dateAsNumber)) return dateAsNumber;
  var formattedDate = new Date(dateAsNumber * 1000);
  return formattedDate.getTime() ? formattedDate : dateAsNumber;
}

var _semanticUnits;

var semanticUnits = (_semanticUnits = {}, _defineProperty(_semanticUnits, ifcDataTypes.id, getExpressId), _defineProperty(_semanticUnits, ifcDataTypes.idSet, getIdSet), _defineProperty(_semanticUnits, ifcDataTypes.text, getIfcText), _defineProperty(_semanticUnits, ifcDataTypes.textSet, getTextSet), _defineProperty(_semanticUnits, ifcDataTypes.number, getNumber), _defineProperty(_semanticUnits, ifcDataTypes.numSet, getNumberSet), _defineProperty(_semanticUnits, ifcDataTypes.date, getDate), _defineProperty(_semanticUnits, ifcDataTypes.value, getIfcValue), _defineProperty(_semanticUnits, ifcDataTypes.bool, getBool), _defineProperty(_semanticUnits, ifcDataTypes["enum"], getEnum), _defineProperty(_semanticUnits, ifcDataTypes.asterisk, getAsterisk), _defineProperty(_semanticUnits, ifcDataTypes.valueSet, getValueSet), _semanticUnits);

function getProperty(parsed, type) {
  return semanticUnits[type](parsed);
} //The counter is necessary because chevrotain generates indexed
//parsed structures. F.e. if there are two enums in a IFC Class,
//the first one has index=1, the second one index=2, etc


var counter$1 = {};

function resetSemanticFactory() {
  var _counter;

  counter$1 = (_counter = {}, _defineProperty(_counter, ifcDataTypes.id, 0), _defineProperty(_counter, ifcDataTypes.text, 0), _defineProperty(_counter, ifcDataTypes.number, 0), _defineProperty(_counter, ifcDataTypes["enum"], 0), _defineProperty(_counter, ifcDataTypes.idSet, 0), _defineProperty(_counter, ifcDataTypes.numSet, 0), _defineProperty(_counter, ifcDataTypes.value, 0), _defineProperty(_counter, ifcDataTypes.textSet, 0), _defineProperty(_counter, ifcDataTypes.bool, 0), _defineProperty(_counter, ifcDataTypes.valueSet, 0), _counter);
}

function getBool(parsed) {
  return getValue(parsed, ifcDataTypes.bool, formatBool);
}

function getEnum(parsed) {
  return getValue(parsed, ifcDataTypes["enum"], formatEnum);
}

function getNumber(parsed) {
  return getValue(parsed, ifcDataTypes.number, formatNumber);
}

function getDate(parsed) {
  return formatDate(getNumber(parsed));
}

function getExpressId(parsed) {
  return getValue(parsed, ifcDataTypes.id, formatId);
}

function getIfcText(parsed) {
  return getValue(parsed, ifcDataTypes.text, formatText);
}

function getTextSet(parsed) {
  return getSet(parsed, ifcDataTypes.textSet, ifcDataTypes.text, function (e) {
    return unicode(e.image.slice(1, -1));
  });
}

function getIdSet(parsed) {
  return getSet(parsed, ifcDataTypes.idSet, ifcDataTypes.id, function (e) {
    return Number(e.image.slice(1));
  });
}

function getNumberSet(parsed) {
  return getSet(parsed, ifcDataTypes.numSet, ifcDataTypes.number, function (e) {
    return Number(e.image);
  });
}

function getValueSet(parsed) {
  var valueSet = parsed[getParser(ifcDataTypes.valueSet)][counter$1[ifcDataTypes.valueSet]++];
  var values = valueSet.children[getParser(ifcDataTypes.value)];
  return values.map(function (ifcValue) {
    var valueProps = ifcValue.children;
    var type = getIfcValueType(valueProps);
    var value = valueProps[type][0].image;
    var formattedValue = formatIfcValue(type, value);
    var unit = valueProps[ifcDataTypes.value] ? valueProps[ifcDataTypes.value][0].image : "";
    return {
      Value: formattedValue,
      IfcUnit: unit
    };
  });
}

function getIfcValue(parsed) {
  if (isDefaultValue(parsed, ifcDataTypes.value)) return getDefault(parsed, ifcDataTypes.value);
  if (isExpressId(parsed, ifcDataTypes.value)) return getIfcValueId(parsed, ifcDataTypes.value);
  var data = parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children;
  var type = getIfcValueType(data);
  var value = formatIfcValue(type, getIfcValueValue(parsed, type));
  return {
    Value: value,
    IfcUnit: getIfcUnit(parsed)
  };
}

function getEmptySet(type) {
  counter$1[type]++;
  return [];
}

function getAsterisk() {
  return "*";
}

function getValue(parsed, type, formatFunction) {
  if (isDefaultValue(parsed, type)) return getDefault(parsed, type);
  return formatFunction(extract(parsed, type));
}

function getSet(parsed, type, subtype, mapFunction) {
  if (isDefaultValue(parsed, type)) return getDefault(parsed, type);
  if (isEmptySet(parsed, type, subtype)) return getEmptySet(type);
  return parsed[getParser(type)][counter$1[type]++].children[subtype].map(mapFunction);
}

function extract(parsed, type) {
  return getContent(parsed[getParser(type)], type);
}

function getContent(subParsed, type) {
  return subParsed[counter$1[type]++].children[type][0].image;
}

function formatId(id) {
  return Number(id.slice(1));
}

function formatText(text) {
  return unicode(text.slice(1, -1));
}

function formatNumber(number) {
  return Number(number);
}

function formatBool(bool) {
  return bool === ifcBoolValues.trueValue ? true : false;
}

function formatEnum(enumValue) {
  return enumValue.slice(1, -1);
}

function isDefaultValue(parsed, type) {
  return parsed[getParser(type)][counter$1[type]].children[ifcDataTypes["default"]] ? true : false;
}

function isEmptySet(parsed, type, subtype) {
  return parsed[getParser(type)][counter$1[type]].children[subtype] ? false : true;
}

function getDefault(parsed, type) {
  return parsed[getParser(type)][counter$1[type]++].children[ifcDataTypes["default"]][0].image;
}

function isExpressId(parsed, type) {
  return parsed[getParser(type)][counter$1[type]].children[ifcDataTypes.id] ? true : false;
}

function getIfcValueId(parsed, type) {
  var rawId = parsed[getParser(type)][counter$1[type]++].children[ifcDataTypes.id][0].image;
  return Number(rawId.slice(1));
}

function getIfcValueValue(parsed, type) {
  return parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[type][0].image;
}

function formatIfcValue(type, value) {
  if (type === ifcValueType.number) return formatNumber(value);
  if (type === ifcValueType.text) return formatText(value);
  if (type === ifcValueType.bool) return formatBool(value);
  if (type === ifcValueType["enum"]) return formatEnum(value);
  return value;
}

function getIfcValueType(data) {
  if (data[ifcDataTypes.number]) return ifcValueType.number;
  if (data[ifcDataTypes.text]) return ifcValueType.text;
  if (data[ifcDataTypes.bool]) return ifcValueType.bool;
  return ifcValueType["enum"];
}

function getIfcUnit(parsed) {
  var ifcUnit = parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[ifcDataTypes.value] ? parsed[getParser(ifcDataTypes.value)][counter$1[ifcDataTypes.value]].children[ifcDataTypes.value][0].image : "";
  counter$1[ifcDataTypes.value]++;
  return ifcUnit;
}

function newSemantic(parsed, ifcItem) {
  resetSemanticFactory();
  var result = retrieveIfcObjectProperties(parsed, ifcItem);
  addClassName(result, ifcItem);
  cleanUndefinedProperties(result);
  return result;
}

function retrieveIfcObjectProperties(parsed, ifcItem) {
  var result = {};
  Object.keys(ifcItem).forEach(function (e) {
    if (isDataTypeValid(ifcItem[e])) result[e] = newSemanticUnit(parsed, ifcItem[e]);
  });
  return result;
}

function newSemanticUnit(parsed, dataType) {
  var _ref;

  return _ref = {}, _defineProperty(_ref, typeValue.value, getProperty(parsed, dataType)), _defineProperty(_ref, typeValue.type, dataType), _ref;
}

function addClassName(result, ifcItem) {
  result[namedProps.ifcClass] = ifcItem[namedProps.ifcClass];
}

function cleanUndefinedProperties(ifcItem) {
  if (ifcItem.hasOwnProperty([namedProps.undefined])) delete ifcItem[namedProps.undefined];
}

//When the parser outputs a syntactical structure, the visitor
//handles it with the correspondant method using visit()

var BaseVisitor = parser.getBaseCstVisitorConstructor();

var IfcVisitor = /*#__PURE__*/function (_BaseVisitor) {
  _inherits(IfcVisitor, _BaseVisitor);

  var _super = _createSuper(IfcVisitor);

  function IfcVisitor() {
    var _this;

    _classCallCheck(this, IfcVisitor);

    _this = _super.call(this);

    _this.validateVisitor();

    return _this;
  }

  return IfcVisitor;
}(BaseVisitor);

function createPrimitiveSemantic() {
  Object.keys(primitiveParsers).forEach(function (e) {
    IfcVisitor.prototype[primitiveParsers[e].name] = function (parsed) {};
  });
}

function createSemantic() {
  Object.values(typesParserMap).forEach(function (e) {
    IfcVisitor.prototype[e[namedProps.ifcClass]] = function (parsed) {
      return getSemantic(ifcTypes[e[namedProps.ifcClass]], parsed);
    };
  });
}

function getSemantic(ifcType, parsed) {
  var ifcItem = typesParserMap[ifcType];
  return newSemantic(parsed, ifcItem);
}

createPrimitiveSemantic();
createSemantic();
var ifcVisitor = new IfcVisitor();

//1. The lexer tokenizes the input
//2. The tokenized input is given to the parser
//3. The parser is applied using the chosen syntactical structure
//4. The visitor applies semantic rules to the output of the parser

function parse(text, ifcType) {
  var lexingResult = lexer.tokenize(text);
  parser.input = lexingResult.tokens;
  var cstOutput = parser[parserByType(ifcType)[namedProps.ifcClass]]();
  if (parser.errors.length > 0) showErrors(text, ifcType, parser);
  return ifcVisitor.visit(cstOutput);
}

function showErrors(text, ifcType, parser) {
  console.warn(parser.errors);
  console.warn("Error with item: ".concat(text, " of type ").concat(ifcType));
}

var regexp = {
  allNewLines: /\r?\n|\r/g,
  headerSection: /HEADER;.+?(?=ENDSEC;)/,
  dataSection: /DATA;\s+.+(?=ENDSEC;)/,
  singleIfcItems: /#\d+\s*=\s*IFC.+?\)(;\s*(?=#\d*)|;\s*$)/g,
  expressId: /^#\d+/,
  rawIfcType: /IFC\w+/,
  rawIfcProperties: /\(.+?(?=;\s*$)/
};

var IfcItemsReader = /*#__PURE__*/function () {
  function IfcItemsReader(ifcFile) {
    _classCallCheck(this, IfcItemsReader);

    this.ifcFile = ifcFile;
  }

  _createClass(IfcItemsReader, [{
    key: "readItems",
    value: function readItems() {
      var _this$extractSections = this.extractSections(this.ifcFile),
          dataSection = _this$extractSections.dataSection;

      return this.constructRawIfcItems(dataSection);
    }
  }, {
    key: "extractSections",
    value: function extractSections() {
      var ifcPlaneText = this.removeAllNewLines(this.ifcFile);
      return {
        headerSection: this.readHeaderSection(ifcPlaneText),
        dataSection: this.readDataSection(ifcPlaneText)
      };
    }
  }, {
    key: "constructRawIfcItems",
    value: function constructRawIfcItems(dataSection) {
      var _this = this;

      var flatIfcItemList = this.separateIfcEntities(dataSection);
      return flatIfcItemList.map(function (e) {
        var _ref;

        return _ref = {}, _defineProperty(_ref, itemsReaderValues.expressId, _this.getId(e)), _defineProperty(_ref, itemsReaderValues.type, _this.getIfcType(e)), _defineProperty(_ref, itemsReaderValues.properties, _this.getIfcRawProperties(e)), _ref;
      });
    }
  }, {
    key: "separateIfcEntities",
    value: function separateIfcEntities(dataSection) {
      return dataSection.match(regexp.singleIfcItems);
    }
  }, {
    key: "readHeaderSection",
    value: function readHeaderSection(ifcLine) {
      return ifcLine.match(regexp.headerSection)[0];
    }
  }, {
    key: "readDataSection",
    value: function readDataSection(ifcLine) {
      return ifcLine.match(regexp.dataSection)[0];
    }
  }, {
    key: "removeAllNewLines",
    value: function removeAllNewLines(ifcFile) {
      return ifcFile.replace(regexp.allNewLines, " ");
    }
  }, {
    key: "getId",
    value: function getId(rawIfcLine) {
      return parseInt(rawIfcLine.match(regexp.expressId).toString().slice(1));
    }
  }, {
    key: "getIfcType",
    value: function getIfcType(rawIfcLine) {
      return rawIfcLine.match(regexp.rawIfcType).toString();
    }
  }, {
    key: "getIfcRawProperties",
    value: function getIfcRawProperties(ifcLine) {
      return ifcLine.match(regexp.rawIfcProperties).toString();
    }
  }]);

  return IfcItemsReader;
}();

function readIfcItems(loadedIfc) {
  var ifcReader = new IfcItemsReader(loadedIfc);
  return ifcReader.readItems();
}

function referenceEntities(items) {
  var key;

  for (key in items) {
    var ifcLine = items[key];

    for (key in ifcLine) {
      var ifcProperty = ifcLine[key];
      referenceSingleItem(ifcProperty, items);
      referenceMultipleItems(ifcProperty, items);
      trimExplicitTypes(ifcLine, key);
    }
  }
}

function referenceSingleItem(ifcProperty, items) {
  if (isSingleItemValid(ifcProperty, items)) ifcProperty[typeValue.value] = items[ifcProperty[typeValue.value]];
}

function isSingleItemValid(ifcProperty, items) {
  return isItemWithReference(ifcProperty) && items.hasOwnProperty(ifcProperty[typeValue.value]);
}

function referenceMultipleItems(ifcProperty, items) {
  if (ifcProperty[typeValue.type] === ifcDataTypes.idSet) {
    var property = ifcProperty;

    var values = _toConsumableArray(property[typeValue.value]);

    property[typeValue.value] = values.map(function (e) {
      return items.hasOwnProperty(e) ? items[e] : e;
    });
  }
}

function isItemWithReference(item) {
  if (item[typeValue.value] === ifcDataTypes[typeValue.value] && !isNaN(item[typeValue.value])) return true;
  if (item[typeValue.type] === ifcDataTypes.id) return true;
  return false;
}

function trimExplicitTypes(ifcLine, key) {
  var value = ifcLine[key][typeValue.value];
  if (value) ifcLine[key] = value;
}

function findRemainingTypes(items) {
  var remainingTypes = [];
  items.forEach(function (element) {
    if (Object.values(ifcTypes).indexOf(element[itemsReaderValues.type]) < 0) {
      if (!remainingTypes.includes(element[itemsReaderValues.type])) {
        remainingTypes.push(element[itemsReaderValues.type]);
      }
    }
  });
  if (remainingTypes.length > 0) console.log(remainingTypes);
}

function loadIfcFileItems(ifcData) {
  var ifcItems = readIfcItems(ifcData);
  findRemainingTypes(ifcItems);
  return loadItems(ifcItems);
}

function loadItems(ifcData) {
  var loadedItems = {};
  ifcData.map(function (ifcItem) {
    if (isTypeSupported(ifcItem)) loadedItems[ifcItem[itemsReaderValues.expressId]] = parseAndLoadItem(ifcItem);
  });
  referenceEntities(loadedItems);
  return loadedItems;
}

function parseAndLoadItem(ifcItem) {
  var parsed = parse(ifcItem[itemsReaderValues.properties], ifcItem[itemsReaderValues.type]);
  parsed[namedProps.expressId] = ifcItem[itemsReaderValues.expressId];
  return parsed;
}

function isTypeSupported(ifcItem) {
  return Object.values(ifcTypes).indexOf(ifcItem[itemsReaderValues.type]) > -1;
}

var IfcEntityFinder = /*#__PURE__*/function () {
  function IfcEntityFinder(ifcData) {
    _classCallCheck(this, IfcEntityFinder);

    this.ifcData = ifcData;
  }

  _createClass(IfcEntityFinder, [{
    key: "findByType",
    value: function findByType(ifcType) {
      var _this = this;

      var matches = {};
      Object.keys(this.ifcData).forEach(function (e) {
        if (_this.getType(e) === getName(ifcType)) {
          matches[e] = _this.ifcData[e];
        }
      });
      return matches;
    }
  }, {
    key: "getType",
    value: function getType(id) {
      return this.ifcData[id][namedProps.ifcClass];
    }
  }, {
    key: "findAllProducts",
    value: function findAllProducts(spatialStructureElements) {
      var _this2 = this;

      var elements = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      spatialStructureElements.forEach(function (spatial) {
        var buildingElementsHere = spatial[namedProps.hasBuildingElements];
        var spatialElementsHere = spatial[namedProps.hasSpatial];
        if (buildingElementsHere) elements.push.apply(elements, _toConsumableArray(buildingElementsHere));
        if (spatialElementsHere) _this2.findAllProducts(spatialElementsHere, elements);
      });
      return elements;
    }
  }]);

  return IfcEntityFinder;
}();

function createIfcItemsFinder(loadedIfc) {
  return new IfcEntityFinder(loadedIfc);
}

function bindElements(finder, type, relating, related, property) {
  var relations = finder.findByType(type);
  Object.values(relations).forEach(function (relation) {
    return isArray(relation[relating]) ? bindMultiple(relation, relating, related, property) : bindSingle(relation, relating, related, property);
  });
}

function bindSingle(relation, relating, related, property) {
  if (!relation[relating][property]) relation[relating][property] = [];
  bind(relation[relating][property], relation, related);
}

function bindMultiple(relation, relating, related, property) {
  relation[relating].forEach(function (e) {
    if (!e[property]) e[property] = [];
    bind(e[property], relation, related);
  });
}

function bind(property, relation, related) {
  return isArray(relation[related]) ? property.push.apply(property, _toConsumableArray(relation[related])) : property.push(relation[related]);
}

function isArray(item) {
  return item.constructor === Array;
}

var mainObject = new THREE.Object3D();

function constructProject(ifcData) {
  var _ref;

  var finder = createIfcItemsFinder(ifcData);
  bindAllElements(finder);
  var ifcProjects = get(finder, ifcTypes.IfcProject);
  var elements = finder.findAllProducts(ifcProjects);
  var spaces = get(finder, ifcTypes.IfcSpace);
  var units = get(finder, ifcTypes.IfcUnitAssignment)[0];
  return _ref = {}, _defineProperty(_ref, structuredData.ifcProject, ifcProjects), _defineProperty(_ref, structuredData.products, elements), _defineProperty(_ref, structuredData.spaces, spaces), _defineProperty(_ref, structuredData.units, units), _defineProperty(_ref, structuredData.mainObject, mainObject), _ref;
}

function get(finder, type) {
  return Object.values(finder.findByType(type));
}

function bindAllElements(finder) {
  bindSpatialToSpatial(finder);
  bindElementsToSpatial(finder);
  bindVoidsToElements(finder);
  bindFillingsToElements(finder);
  bindTypesToElements(finder);
}

function bindSpatialToSpatial(finder) {
  bindElements(finder, ifcTypes.IfcRelAggregates, namedProps.relatingObject, namedProps.relatedObjects, namedProps.hasSpatial);
}

function bindElementsToSpatial(finder) {
  bindElements(finder, ifcTypes.IfcRelContainedInSpatialStructure, namedProps.relatingStructure, namedProps.relatedElements, namedProps.hasBuildingElements);
}

function bindVoidsToElements(finder) {
  bindElements(finder, ifcTypes.IfcRelVoidsElement, namedProps.relatingBuildingElement, namedProps.relatedOpeningElement, namedProps.hasOpenings);
}

function bindFillingsToElements(finder) {
  bindElements(finder, ifcTypes.IfcRelFillsElement, namedProps.relatingOpeningElement, namedProps.relatedBuildingElement, namedProps.hasFillings);
}

function bindTypesToElements(finder) {
  bindElements(finder, ifcTypes.IfcRelDefinesByType, namedProps.relatedObjects, namedProps.relatingType, namedProps.hasType);
}

function resetTransformData(product, property) {
  var _product$property;

  product[property] = (_product$property = {}, _defineProperty(_product$property, pivots.locat, []), _defineProperty(_product$property, pivots.xAxis, []), _defineProperty(_product$property, pivots.yAxis, []), _defineProperty(_product$property, pivots.zAxis, []), _product$property);
}

function trackLocalTransform(product, placement, property) {
  var transform = initializeTransform(product, property);

  var _getTransform = getTransform(placement),
      locat = _getTransform.locat,
      xAxis = _getTransform.xAxis,
      yAxis = _getTransform.yAxis,
      zAxis = _getTransform.zAxis;

  transform[pivots.locat].push(locat);
  transform[pivots.xAxis].push(xAxis);
  transform[pivots.yAxis].push(yAxis);
  transform[pivots.zAxis].push(zAxis);
}

function initializeTransform(product, property) {
  if (!product[property]) resetTransformData(product, property);
  return product[property];
}

function getTransform(placement) {
  var locat = getLocat(placement);
  var xAxis = getAxisX(placement);
  var zAxis = getAxisZ(placement);
  var yAxis = getAxisY(zAxis, xAxis);
  return {
    locat: locat,
    xAxis: xAxis,
    yAxis: yAxis,
    zAxis: zAxis
  };
}

function getLocat(placement) {
  if (isInvalid(placement[namedProps.location])) return [0, 0, 0];
  var location = placement[namedProps.location][namedProps.coordinates];
  if (location.length === 2) location.push(0);
  return location;
}

function getAxisX(placement) {
  if (isInvalid(placement[namedProps.refDirection])) return [1, 0, 0];
  var x = placement[namedProps.refDirection][namedProps.dirRatios];
  if (x.length === 2) x.push(0);
  return x;
}

function getAxisZ(placement) {
  if (isInvalid(placement[namedProps.axis])) return [0, 0, 1];
  var z = placement[namedProps.axis][namedProps.dirRatios];
  if (z.length === 2) z.push(0);
  return z;
} //In IFC the axis Y is implicit (computed from X and Z)


function getAxisY(X, Z) {
  return [X[1] * Z[2] - X[2] * Z[1], X[2] * Z[0] - X[0] * Z[2], X[0] * Z[1] - X[1] * Z[0]];
}

function isInvalid(prop) {
  if (!prop || prop === defaultValue) return true;
  return false;
}

function applyTransforms(product, property) {
  var pivots = getPivots(product[property]);
  product[namedProps.geometry].forEach(function (geometry) {
    return applyTransform(geometry, pivots);
  });
}

function applyTransformsTo(product, geometry, property) {
  var pivots = getPivots(product[property]);
  applyTransform(geometry, pivots);
  resetTransformData(product, property);
}

function applyTransform(geometry, pivots) {
  if (geometry) {
    bindGeometryToPivots(geometry, pivots);
    mainObject.add(pivots[0]);
    attachGeometryToScene(geometry);
    mainObject.remove(pivots[0]);
  }
}

function attachGeometryToScene(geometry) {
  if (geometry.constructor === Array) return geometry.forEach(function (e) {
    return attachGeometryToScene(e);
  });
  return mainObject.attach(geometry);
}

function bindGeometryToPivots(geometry, pivots) {
  if (geometry.constructor === Array) return geometry.forEach(function (e) {
    return bindGeometryToPivots(e, pivots);
  });
  pivots[pivots.length - 1].add(geometry);
}

function getPivots(transform) {
  var pivots$1 = [];
  var locations = transform[pivots.locat] || [];

  for (var i = locations.length - 1; i >= 0; i--) {
    var _pivot$position;

    var pivot = new THREE.Object3D();
    pivot.rotation.setFromRotationMatrix(getRotMat(transform, i));

    (_pivot$position = pivot.position).set.apply(_pivot$position, _toConsumableArray(locations[i]));

    pivots$1.push(pivot);
  }

  bindPivots(pivots$1);
  return pivots$1;
}

function bindPivots(pivots) {
  for (var i = 0; i < pivots.length; i++) {
    if (pivots[i + 1]) pivots[i].add(pivots[i + 1]);
  }
}

function getRotMat(transform, index) {
  var _getTransforms = getTransforms(transform, index),
      x = _getTransforms.x,
      y = _getTransforms.y,
      z = _getTransforms.z;

  var directionMatrix = new THREE.Matrix4();
  var rotationMatrix = new THREE.Matrix4();
  directionMatrix.set(x[0], x[1], x[2], 0, y[0], y[1], y[2], 0, z[0], z[1], z[2], 0, 0, 0, 0, 1);
  rotationMatrix.getInverse(directionMatrix);
  return rotationMatrix;
}

function getTransforms(transform, index) {
  var x = transform[pivots.xAxis][index];
  var y = transform[pivots.yAxis][index];
  var z = transform[pivots.zAxis][index];
  return {
    x: x,
    y: y,
    z: z
  };
}

function applyTransformations(structured) {
  structured[structuredData.products].forEach(function (product) {
    applyTransform$1(product);
  });
}

function applyTransform$1(product) {
  getTransform$1(product, getPlacement(product));
  applyTransforms(product, namedProps.transform);
  if (product[namedProps.hasOpenings]) product[namedProps.hasOpenings].forEach(function (opening) {
    getTransform$1(opening, getPlacement(opening));
    applyTransforms(opening, namedProps.transform);
  });
  if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(function (spatial) {
    getTransform$1(spatial, getPlacement(spatial));
    applyTransforms(spatial, namedProps.transform);
  });
} //Gets all the transforms (local origins) recursively


function getTransform$1(product, objPlacement) {
  try {
    var placement = objPlacement[namedProps.relativePlacement];
    trackLocalTransform(product, placement, namedProps.transform);

    if (objPlacement[namedProps.placementRelTo] != defaultValue) {
      getTransform$1(product, objPlacement[namedProps.placementRelTo]);
    }
  } catch (e) {
    console.warn(e);
  }
}

function getPlacement(product) {
  try {
    return product[namedProps.objectPlacement];
  } catch (e) {
    console.warn(e);
  }
}

function createLine(coordinates) {
  var material = new THREE.LineBasicMaterial({
    linecap: "round",
    color: 0xff0000
  });
  var points = [];
  coordinates.forEach(function (e) {
    points.push(new THREE.Vector3(e[0], e[1]));
  });
  var geometry = new THREE.BufferGeometry().setFromPoints(points);
  var line = new THREE.Line(geometry, material);
  return line;
}

var _curve2DMap;

function mapIfcGeometricPrimitive(shape) {
  var ifcClass = shape[namedProps.ifcClass].toUpperCase();
  return curve2DMap[ifcClass](shape);
}

var curve2DMap = (_curve2DMap = {}, _defineProperty(_curve2DMap, ifcTypes.IfcPolyline, mapPolyline), _defineProperty(_curve2DMap, ifcTypes.IfcTrimmedCurve, mapTrimmedCurve), _curve2DMap);

function mapPolyline(shape) {
  var points = [];
  shape[namedProps.points].forEach(function (point) {
    points.push(point[namedProps.coordinates]);
  });
  return createLine(points);
}

function mapTrimmedCurve(shape) {
  console.log(shape);
}

function mapCurve2D(shape) {
  return mapIfcGeometricPrimitive(shape[namedProps.items][0]);
}

function createExtrusionsByPoints(points, depth) {
  //Profile
  var shapePoints = [];
  points.forEach(function (e) {
    return shapePoints.push(new THREE.Vector3(e[1], -e[0]));
  });
  var shape = new THREE.Shape(shapePoints);
  return createExtrusion(shape, depth);
}

function createCircularExtrusion(radius, depth) {
  var geometry = new THREE.CylinderGeometry(radius, radius, depth, 64);
  var mesh = new THREE.Mesh(geometry);
  mesh.rotation.x = Math.PI / 2;
  mesh.position.z = depth / 2;
  mesh.updateMatrix();
  return mesh;
}

function createExtrusion(shape, depth) {
  // Material for mesh
  var material = new THREE.MeshPhongMaterial({
    color: 0xffffff
  }); //Direction

  var v1 = new THREE.Vector3(0, 0, 0);
  var v2 = new THREE.Vector3(0, 0, depth);
  var path = new THREE.LineCurve3(v1, v2); //Settings

  var extrudeSettings = {
    bevelEnabled: false,
    steps: 1,
    extrudePath: path
  }; //Mesh

  var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
  var mesh = new THREE.Mesh(geometry, material);
  return mesh;
}

function mapRectangleProfileExtrusion(extruded, product) {
  getRectProfileDimensions(extruded);
  var position = extruded.profile[namedProps.position];
  trackLocalTransform(product, position, namedProps.transformOfExtrusion);
  var points = getRectProfilePoints(extruded);
  return createExtrusionsByPoints(points, extruded.depth);
}

function getRectProfilePoints(extruded) {
  var halfWidth = extruded[namedProps.xDim] / 2;
  var halfHeight = extruded[namedProps.yDim] / 2;
  return [[-halfWidth, halfHeight], [halfWidth, halfHeight], [halfWidth, -halfHeight], [-halfWidth, -halfHeight]];
}

function getRectProfileDimensions(extruded) {
  extruded[namedProps.xDim] = extruded.profile[namedProps.xDim];
  extruded[namedProps.yDim] = extruded.profile[namedProps.yDim];
}

function mapArbitraryProfileExtrusion(extruded) {
  var points = getArbitraryProfilePoints(extruded);
  return createExtrusionsByPoints(points, extruded.depth);
}

function getArbitraryProfilePoints(extruded) {
  var profile = extruded.profile;
  var points = profile[namedProps.outerCurve][namedProps.points];
  return points.map(function (point) {
    var coords = point[namedProps.coordinates];
    return [-coords[0], -coords[1]];
  });
}

function mapArbitraryProfileWithVoidsExtrusion(extruded) {
  var points = getArbitraryProfilePoints$1(extruded);
  return createExtrusionsByPoints(points, extruded.depth);
}

function getArbitraryProfilePoints$1(extruded) {
  var profile = extruded.profile;
  var points = profile[namedProps.outerCurve][namedProps.points];
  return points.map(function (point) {
    var coords = point[namedProps.coordinates];
    return [-coords[0], -coords[1]];
  });
}

function mapCircleProfileExtrusion(extruded, product) {
  var position = extruded.profile[namedProps.position];
  trackLocalTransform(product, position, namedProps.transformOfExtrusion);
  var radius = extruded.profile[namedProps.radius];
  return createCircularExtrusion(radius, extruded.depth);
}

var _extrusionTypes;

function mapSweptSolid(shape, product) {
  var items = [];
  shape[namedProps.items].forEach(function (extruded) {
    return items.push(newSolid(product, extruded));
  });
  return joinAllExtrusions(items);
}

function joinAllExtrusions(items) {
  var singleGeometry = new THREE.Geometry();
  items.forEach(function (item) {
    item.updateMatrix();
    singleGeometry.merge(item.geometry, item.matrix);
    mainObject.remove(item);
  });
  var result = new THREE.Mesh(singleGeometry);
  mainObject.add(result);
  return result;
} //Beware: the creation of the solid must occur BEFORE trackLocalTransformation()
//Because the local transformations are tracked from inside to outside
//Same logic as IfcLocalPlacement used to locate the products


function newSolid(product, extruded) {
  var extrudedProps = getExtrusionProps(extruded);
  var solid = getExtrusionByType(extrudedProps, product);
  var position = extruded[namedProps.position];
  trackLocalTransform(product, position, namedProps.transformOfExtrusion);
  applyTransformsTo(product, solid, namedProps.transformOfExtrusion);
  return solid;
}

function getExtrusionProps(extruded) {
  return {
    profile: extruded[namedProps.sweptArea],
    ifcClass: extruded[namedProps.sweptArea][namedProps.ifcClass],
    depth: extruded[namedProps.depth],
    direction: extruded[namedProps.extDirection][namedProps.dirRatios]
  };
}

var extrusionTypes = (_extrusionTypes = {}, _defineProperty(_extrusionTypes, ifcTypes.IfcRectangleProfileDef, mapRectangleProfileExtrusion), _defineProperty(_extrusionTypes, ifcTypes.IfcCircleProfileDef, mapCircleProfileExtrusion), _defineProperty(_extrusionTypes, ifcTypes.IfcArbitraryClosedProfileDef, mapArbitraryProfileExtrusion), _defineProperty(_extrusionTypes, ifcTypes.IfcArbitraryProfileDefWithVoids, mapArbitraryProfileWithVoidsExtrusion), _extrusionTypes);

function getExtrusionByType(extruded, product) {
  return extrusionTypes[extruded.ifcClass.toUpperCase()](extruded, product);
}

function mapMappedRepresentation(shape, product) {
  var representation = shape[namedProps.items][0];
  var target = getMappingTarget(representation);
  var mapped = getMappingSource(product, representation);
  applyTransformation(product, target, mapped);
  return mapped;
} //The concept of mapped representation is that there are several instances
//of the same geometry. Storing the geometries allows to generate them
//only once and them simply create each instance copying the source geometry.


var mappingSources = {};

function getMappingSource(product, representation) {
  var source = representation[namedProps.mappingSource];
  var origin = source[namedProps.mappingOrigin];
  var geometry = isGeometryGenerated(source) ? getGeneratedGeometry(source) : generateGeometry(source, product);
  applyTransformation(product, origin, geometry);
  return geometry;
}

function generateGeometry(source, product) {
  var mappedGeometry = source[namedProps.mappedRepresentation];
  var geometry = getMappedGeometry(mappedGeometry, product);
  mappingSources[source[namedProps.expressId]] = geometry;
  mainObject.remove(geometry);
  return geometry.clone();
}

function isGeometryGenerated(source) {
  return mappingSources[source[namedProps.expressId]] ? true : false;
}

function getGeneratedGeometry(source) {
  return mappingSources[source[namedProps.expressId]].clone();
}

function applyTransformation(product, origin, geometry) {
  trackLocalTransform(product, origin, namedProps.transformOfMappedItem);
  applyTransformsTo(product, geometry, namedProps.transformOfMappedItem);
} //The mapping target defines the transformation of the mapped items
//Generally, the transformation is read from IfcAxis2Placement instances
//This is an exception: data needs to be structured like an IfcAxis2Placement


function getMappingTarget(representation) {
  var _ref;

  var target = representation[namedProps.mappingTarget];
  return _ref = {}, _defineProperty(_ref, namedProps.location, _defineProperty({}, namedProps.coordinates, getTargetOrigin(target))), _defineProperty(_ref, namedProps.refDirection, _defineProperty({}, namedProps.dirRatios, getAxis(target, namedProps.axis1, [1, 0, 0]))), _defineProperty(_ref, namedProps.axis, _defineProperty({}, namedProps.dirRatios, getAxis(target, namedProps.axis3, [0, 0, 1]))), _defineProperty(_ref, namedProps.scale, target[namedProps.scale]), _ref;
}

function getTargetOrigin(target) {
  return target[namedProps.localOrigin][namedProps.coordinates];
}

function getAxis(target, axis, def) {
  var value = target[axis];
  return value === defaultValue ? def : value;
}

function createFace(faceDefinition) {
  //Credit to the following algorithm:
  //https://stackoverflow.com/questions/50272399/three-js-2d-object-in-3d-space-by-vertices/50274103#50274103
  var outerCoords = faceDefinition.outerBounds.bounds[0];
  var outerPoints = getPoints(outerCoords);

  var _getProjectedPointsAn = getProjectedPointsAndQuaternion(outerPoints),
      tempOuterPoints = _getProjectedPointsAn.tempOuterPoints,
      quaternion = _getProjectedPointsAn.quaternion;

  var outerShape = new THREE.Shape(tempOuterPoints);

  var allPoints = _toConsumableArray(outerPoints);

  if (hasHoles(faceDefinition)) punchHoles(faceDefinition, quaternion, allPoints, outerShape);
  var shapeGeom = new THREE.ShapeGeometry(outerShape, 24);
  var mesh = new THREE.Mesh(shapeGeom);
  mesh.geometry.vertices = allPoints;
  mesh.geometry.computeVertexNormals();
  mesh.geometry.computeFaceNormals();
  return mesh;
}

function getPoints(coordinates) {
  return coordinates.map(function (p) {
    return new THREE.Vector3(p[0], p[1], p[2]);
  });
}

function getTempPoints(points, quaternion) {
  return points.map(function (p) {
    return p.clone().applyQuaternion(quaternion);
  });
}

function hasHoles(faceDefinition) {
  return faceDefinition.innerBounds.bounds.length > 0;
}

function punchHoles(faceDefinition, quaternion, allPoints, outerShape) {
  faceDefinition.innerBounds.bounds.forEach(function (bound) {
    var innerPoints = getPoints(bound);
    var tempInnerPoints = getTempPoints(innerPoints, quaternion);
    var innerShape = new THREE.Path(tempInnerPoints);
    outerShape.holes.push(innerShape);
    allPoints.push.apply(allPoints, _toConsumableArray(innerPoints));
  });
} //To find the normal of the face it is necessary to ensure that:
// 1. the selected triangle of vertices is valid (they are not aligned)
// 2. the area of the selected triangle is big enough to increment the precission of the vector
// 3. the generated 2d surface has its points defined clockwise


function getProjectedPointsAndQuaternion(points) {
  var baseNormal = new THREE.Vector3(0, 0, 1);
  var normal = new THREE.Vector3();
  var triangles = [];
  var index1 = 1,
      index2 = 2;

  while (index2 < points.length) {
    var triangle = new THREE.Triangle(points[index2], points[index1], points[0]);
    var temp = new THREE.Vector3();
    triangle.getNormal(temp); //1.

    if (temp.x != 0 || temp.y != 0 || temp.z != 0) {
      triangles.push({
        area: triangle.getArea(),
        triangle: triangle
      });
    }

    index1++;
    index2++;
  } //2.


  triangles.sort(function (a, b) {
    return a.area > b.area ? 1 : b.area > a.area ? -1 : 0;
  }).reverse(); //3.

  var selectedTriangle = 0;
  var tempOuterPoints = [];
  var quaternion = {};
  var isClockWise = false;

  while (isClockWise === false) {
    var tri = triangles[selectedTriangle];
    tri.triangle.getNormal(normal);
    quaternion = new THREE.Quaternion().setFromUnitVectors(normal, baseNormal);
    tempOuterPoints = getTempPoints(points, quaternion);
    var t = tempOuterPoints.map(function (p) {
      return new THREE.Vector2(p.x, p.y);
    });
    isClockWise = THREE.ShapeUtils.isClockWise(t);
    selectedTriangle++;
  }

  return {
    tempOuterPoints: tempOuterPoints,
    quaternion: quaternion
  };
}

function mapBrep(shape, product) {
  var representations = shape[namedProps.items];
  var definitions = [];
  var faces = [];
  representations.forEach(function (r) {
    return definitions.push.apply(definitions, _toConsumableArray(getBrepGeometry(r)));
  });
  definitions.forEach(function (definition) {
    return faces.push(createFace(definition));
  });
  return joinAllFaces(faces);
}

function joinAllFaces(faces) {
  var joined = new THREE.Geometry();
  faces.forEach(function (face) {
    return joined.merge(face.geometry, face.matrix);
  });
  var material = new THREE.MeshPhongMaterial({
    side: 2
  });
  var mesh = new THREE.Mesh(joined, material);
  mesh.geometry.computeVertexNormals();
  mesh.geometry.computeFaceNormals();
  mesh[namedProps.isBrep] = true;
  return mesh;
}

function getBrepGeometry(representation) {
  var faces = [];
  var ifcFaces = representation[namedProps.outer][namedProps.cfsFaces];
  ifcFaces.forEach(function (face) {
    return faces.push(getAllBounds(face));
  });
  return faces;
}

function getAllBounds(face) {
  var outerBoundsInfo = filterBounds(face, ifcTypes.IfcFaceOuterBound);
  var innerBoundsInfo = filterBounds(face, ifcTypes.IfcFaceBound);
  var outerBounds = getBounds(outerBoundsInfo);
  var innerBounds = innerBoundsInfo ? getBounds(innerBoundsInfo) : {};
  return {
    outerBounds: outerBounds,
    innerBounds: innerBounds
  };
}

function getBounds(ifcBounds) {
  var bounds = [];
  var orientation = [];
  ifcBounds.forEach(function (bound) {
    bounds.push(getPoints$1(bound));
    orientation.push(bound[namedProps.orientation]);
  });
  return {
    orientation: orientation,
    bounds: bounds
  };
}

function getPoints$1(bound) {
  var points = bound[namedProps.bound][namedProps.polygon];
  var coordinates = [];
  points.forEach(function (point) {
    var coord = point[namedProps.coordinates];
    if (coord) coordinates.push(coord);
  });
  return coordinates;
}

function filterBounds(face, type) {
  return face[namedProps.bounds].filter(function (e) {
    return e[namedProps.ifcClass] === getName(type);
  });
}

function mapGeometricSet(shape) {
  var curves = shape[namedProps.items][0][namedProps.elements];
  var result = new THREE.Object3D();
  result.children = _toConsumableArray(curves.map(function (e) {
    return mapIfcGeometricPrimitive(e);
  }));
  return result;
}

function mapClipping(shape) {
  console.log(shape);
}

var _geometryMap;
var geometryMap = (_geometryMap = {}, _defineProperty(_geometryMap, geometryTypes.curve2D, mapCurve2D), _defineProperty(_geometryMap, geometryTypes.sweptSolid, mapSweptSolid), _defineProperty(_geometryMap, geometryTypes.mappedRepresentation, mapMappedRepresentation), _defineProperty(_geometryMap, geometryTypes.brep, mapBrep), _defineProperty(_geometryMap, geometryTypes.geometricSet, mapGeometricSet), _defineProperty(_geometryMap, geometryTypes.clipping, mapClipping), _geometryMap);

function getMappedGeometry(representation, product) {
  var type = getType(representation);

  try {
    return geometryMap[type](representation, product);
  } catch (e) {
    console.warn("Error with item ".concat(product[namedProps.ifcClass], " of type ").concat(type, ": ").concat(e));
  }
}

function getType(representation) {
  return representation[namedProps.representationType];
}

function constructGeometries(structured) {
  structured[structuredData.products].forEach(function (product) {
    return constructGeometry(product);
  });
  structured[structuredData.spaces].forEach(function (space) {
    return constructGeometry(space);
  });
}

function constructGeometry(item) {
  try {
    getRepresentations(item);
    mapRepresentations(item);
  } catch (e) {
    console.warn(e);
  }
}

function getRepresentations(product) {
  getRepresentationValue(product);
  if (product[namedProps.hasOpenings]) product[namedProps.hasOpenings].forEach(function (opening) {
    getRepresentationValue(opening);
  });
  if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(function (spatial) {
    getRepresentationValue(spatial);
  });
}

function getRepresentationValue(product) {
  try {
    var representations = product[namedProps.representation][namedProps.representations];
    product[namedProps.geomRepresentations] = representations ? representations : [];
  } catch (e) {
    console.warn(e);
  }
}

function mapRepresentations(product) {
  mapProductRepresentations(product);
  if (product[namedProps.hasOpenings]) product[namedProps.hasOpenings].forEach(function (opening) {
    mapProductRepresentations(opening);
  });
  if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(function (spatial) {
    mapProductRepresentations(spatial);
  });
}

function mapProductRepresentations(product) {
  product[namedProps.geometry] = [];
  product[namedProps.geomRepresentations].forEach(function (representation) {
    product[namedProps.geometry].push(getMappedGeometry(representation, product));
  });
}

// ## License
// 
// Copyright (c) 2011 Evan Wallace (http://madebyevan.com/), under the MIT license.
// THREE.js rework by thrax


// # class CSG
// Holds a binary space partition tree representing a 3D solid. Two solids can
// be combined using the `union()`, `subtract()`, and `intersect()` methods.

class CSG {
    constructor() {
        this.polygons = [];
    }
    clone() {
        var csg = new CSG();
        csg.polygons = this.polygons.map(function(p) {
            return p.clone();
        });
        return csg;
    }

    toPolygons() {
        return this.polygons;
    }

    union(csg) {
        var a = new Node(this.clone().polygons);
        var b = new Node(csg.clone().polygons);
        a.clipTo(b);
        b.clipTo(a);
        b.invert();
        b.clipTo(a);
        b.invert();
        a.build(b.allPolygons());
        return CSG.fromPolygons(a.allPolygons());
    }

    subtract(csg) {
        var a = new Node(this.clone().polygons);
        var b = new Node(csg.clone().polygons);
        a.invert();
        a.clipTo(b);
        b.clipTo(a);
        b.invert();
        b.clipTo(a);
        b.invert();
        a.build(b.allPolygons());
        a.invert();
        return CSG.fromPolygons(a.allPolygons());
    }

    intersect(csg) {
        var a = new Node(this.clone().polygons);
        var b = new Node(csg.clone().polygons);
        a.invert();
        b.clipTo(a);
        b.invert();
        a.clipTo(b);
        b.clipTo(a);
        a.build(b.allPolygons());
        a.invert();
        return CSG.fromPolygons(a.allPolygons());
    }

    // Return a new CSG solid with solid and empty space switched. This solid is
    // not modified.
    inverse() {
        var csg = this.clone();
        csg.polygons.map(function(p) {
            p.flip();
        });
        return csg;
    }
}

// Construct a CSG solid from a list of `Polygon` instances.
CSG.fromPolygons=function(polygons) {
    var csg = new CSG();
    csg.polygons = polygons;
    return csg;
};

// # class Vector

// Represents a 3D vector.
// 
// Example usage:
// 
//     new CSG.Vector(1, 2, 3);
//     new CSG.Vector([1, 2, 3]);
//     new CSG.Vector({ x: 1, y: 2, z: 3 });

class Vector extends THREE.Vector3 {
    constructor(x, y, z) {
        if (arguments.length == 3)
            super(x, y, z);
        else if (Array.isArray(x))
            super(x[0], x[1], x[2]);
        else if (typeof x == 'object')
            super().copy(x);
        else
            throw "Invalid constructor to vector"
    }

    clone() {
        return new Vector(this)
    }
    negated() {
        return this.clone().multiplyScalar(-1)
    }
    plus(a) {
        return this.clone().add(a);
    }
    minus(a) {
        return this.clone().sub(a)
    }
    times(a) {
        return this.clone().multiplyScalar(a)
    }
    dividedBy(a) {
        return this.clone().divideScalar(a)
    }
    lerp(a, t) {
        return this.plus(a.minus(this).times(t))
    }
    unit() {
        return this.dividedBy(this.length())
    }
    cross(a) {
        return THREE.Vector3.prototype.cross.call(this.clone(), a)
    }
}

// # class Vertex

// Represents a vertex of a polygon. Use your own vertex class instead of this
// one to provide additional features like texture coordinates and vertex
// colors. Custom vertex classes need to provide a `pos` property and `clone()`,
// `flip()`, and `interpolate()` methods that behave analogous to the ones
// defined by `CSG.Vertex`. This class provides `normal` so convenience
// functions like `CSG.sphere()` can return a smooth vertex normal, but `normal`
// is not used anywhere else.

class Vertex {

    constructor(pos, normal, uv) {
        this.pos = new Vector(pos);
        this.normal = new Vector(normal);
        this.uv = new Vector(uv);
    }

    clone() {
        return new Vertex(this.pos.clone(),this.normal.clone(),this.uv.clone());
    }

    // Invert all orientation-specific data (e.g. vertex normal). Called when the
    // orientation of a polygon is flipped.
    flip() {
        this.normal = this.normal.negated();
    }

    // Create a new vertex between this vertex and `other` by linearly
    // interpolating all properties using a parameter of `t`. Subclasses should
    // override this to interpolate additional properties.
    interpolate(other, t) {
        return new Vertex(this.pos.lerp(other.pos, t),this.normal.lerp(other.normal, t),this.uv.lerp(other.uv, t))
    }
}
// # class Plane

// Represents a plane in 3D space.

class Plane {
    constructor(normal, w) {
        this.normal = normal;
        this.w = w;
    }

    clone() {
        return new Plane(this.normal.clone(),this.w);
    }

    flip() {
        this.normal = this.normal.negated();
        this.w = -this.w;
    }

    // Split `polygon` by this plane if needed, then put the polygon or polygon
    // fragments in the appropriate lists. Coplanar polygons go into either
    // `coplanarFront` or `coplanarBack` depending on their orientation with
    // respect to this plane. Polygons in front or in back of this plane go into
    // either `front` or `back`.
    splitPolygon(polygon, coplanarFront, coplanarBack, front, back) {
        var COPLANAR = 0;
        var FRONT = 1;
        var BACK = 2;
        var SPANNING = 3;

        // Classify each point as well as the entire polygon into one of the above
        // four classes.
        var polygonType = 0;
        var types = [];
        for (var i = 0; i < polygon.vertices.length; i++) {
            var t = this.normal.dot(polygon.vertices[i].pos) - this.w;
            var type = (t < -Plane.EPSILON) ? BACK : (t > Plane.EPSILON) ? FRONT : COPLANAR;
            polygonType |= type;
            types.push(type);
        }

        // Put the polygon in the correct list, splitting it when necessary.
        switch (polygonType) {
        case COPLANAR:
            (this.normal.dot(polygon.plane.normal) > 0 ? coplanarFront : coplanarBack).push(polygon);
            break;
        case FRONT:
            front.push(polygon);
            break;
        case BACK:
            back.push(polygon);
            break;
        case SPANNING:
            var f = []
              , b = [];
            for (var i = 0; i < polygon.vertices.length; i++) {
                var j = (i + 1) % polygon.vertices.length;
                var ti = types[i]
                  , tj = types[j];
                var vi = polygon.vertices[i]
                  , vj = polygon.vertices[j];
                if (ti != BACK)
                    f.push(vi);
                if (ti != FRONT)
                    b.push(ti != BACK ? vi.clone() : vi);
                if ((ti | tj) == SPANNING) {
                    var t = (this.w - this.normal.dot(vi.pos)) / this.normal.dot(vj.pos.minus(vi.pos));
                    var v = vi.interpolate(vj, t);
                    f.push(v);
                    b.push(v.clone());
                }
            }
            if (f.length >= 3)
                front.push(new Polygon(f,polygon.shared));
            if (b.length >= 3)
                back.push(new Polygon(b,polygon.shared));
            break;
        }
    }

}

// `Plane.EPSILON` is the tolerance used by `splitPolygon()` to decide if a
// point is on the plane.
Plane.EPSILON = 1e-5;

Plane.fromPoints = function(a, b, c) {
    var n = b.minus(a).cross(c.minus(a)).unit();
    return new Plane(n,n.dot(a));
};


// # class Polygon

// Represents a convex polygon. The vertices used to initialize a polygon must
// be coplanar and form a convex loop. They do not have to be `Vertex`
// instances but they must behave similarly (duck typing can be used for
// customization).
// 
// Each convex polygon has a `shared` property, which is shared between all
// polygons that are clones of each other or were split from the same polygon.
// This can be used to define per-polygon properties (such as surface color).

class Polygon {

    constructor(vertices, shared) {
        this.vertices = vertices;
        this.shared = shared;
        this.plane = Plane.fromPoints(vertices[0].pos, vertices[1].pos, vertices[2].pos);
    }

    clone() {
        var vertices = this.vertices.map(function(v) {
            return v.clone();
        });
        return new Polygon(vertices,this.shared);
    }
    flip() {
        this.vertices.reverse().map(function(v) {
            v.flip();
        });
        this.plane.flip();
    }
}

// # class Node

// Holds a node in a BSP tree. A BSP tree is built from a collection of polygons
// by picking a polygon to split along. That polygon (and all other coplanar
// polygons) are added directly to that node and the other polygons are added to
// the front and/or back subtrees. This is not a leafy BSP tree since there is
// no distinction between internal and leaf nodes.

class Node {
    constructor(polygons) {
        this.plane = null;
        this.front = null;
        this.back = null;
        this.polygons = [];
        if (polygons)
            this.build(polygons);
    }
    clone() {
        var node = new Node();
        node.plane = this.plane && this.plane.clone();
        node.front = this.front && this.front.clone();
        node.back = this.back && this.back.clone();
        node.polygons = this.polygons.map(function(p) {
            return p.clone();
        });
        return node;
    }

    // Convert solid space to empty space and empty space to solid space.
    invert() {
        for (var i = 0; i < this.polygons.length; i++)
            this.polygons[i].flip();
        
        this.plane.flip();
        if (this.front)
            this.front.invert();
        if (this.back)
            this.back.invert();
        var temp = this.front;
        this.front = this.back;
        this.back = temp;
    }

    // Recursively remove all polygons in `polygons` that are inside this BSP
    // tree.
    clipPolygons(polygons) {
        if (!this.plane)
            return polygons.slice();
        var front = []
          , back = [];
        for (var i = 0; i < polygons.length; i++) {
            this.plane.splitPolygon(polygons[i], front, back, front, back);
        }
        if (this.front)
            front = this.front.clipPolygons(front);
        if (this.back)
            back = this.back.clipPolygons(back);
        else
            back = [];
        return front.concat(back);
    }

    // Remove all polygons in this BSP tree that are inside the other BSP tree
    // `bsp`.
    clipTo(bsp) {
        this.polygons = bsp.clipPolygons(this.polygons);
        if (this.front)
            this.front.clipTo(bsp);
        if (this.back)
            this.back.clipTo(bsp);
    }

    // Return a list of all polygons in this BSP tree.
    allPolygons() {
        var polygons = this.polygons.slice();
        if (this.front)
            polygons = polygons.concat(this.front.allPolygons());
        if (this.back)
            polygons = polygons.concat(this.back.allPolygons());
        return polygons;
    }

    // Build a BSP tree out of `polygons`. When called on an existing tree, the
    // new polygons are filtered down to the bottom of the tree and become new
    // nodes there. Each set of polygons is partitioned using the first polygon
    // (no heuristic is used to pick a good split).
    build(polygons) {
        if (!polygons.length)
            return;
        if (!this.plane)
            this.plane = polygons[0].plane.clone();
        var front = []
          , back = [];
        for (var i = 0; i < polygons.length; i++) {
            this.plane.splitPolygon(polygons[i], this.polygons, this.polygons, front, back);
        }
        if (front.length) {
            if (!this.front)
                this.front = new Node();
            this.front.build(front);
        }
        if (back.length) {
            if (!this.back)
                this.back = new Node();
            this.back.build(back);
        }
    }
}

CSG.fromGeometry=function(geom){
    if(geom.isBufferGeometry)
        geom = new THREE.Geometry().fromBufferGeometry(geom);
    var fs = geom.faces;
    var vs = geom.vertices;
    var polys=[];
    var fm=['a','b','c'];
    for(var i=0;i<fs.length;i++){
        var f = fs[i];
        var vertices=[];
        for(var j=0;j<3;j++) vertices.push(new Vertex(vs[f[fm[j]]],f.vertexNormals[j],geom.faceVertexUvs[0][i][j]));
        polys.push(new Polygon(vertices));
    }
    return CSG.fromPolygons(polys)
};
CSG._tmpm3 = new THREE.Matrix3();
CSG.fromMesh=function(mesh){

    var csg = CSG.fromGeometry(mesh.geometry);
    CSG._tmpm3.getNormalMatrix(mesh.matrix);
    for(var i=0;i<csg.polygons.length;i++){
        var p = csg.polygons[i];
        for(var j=0;j<p.vertices.length;j++){
            var v=p.vertices[j];
            v.pos.applyMatrix4(mesh.matrix);
            v.normal.applyMatrix3(CSG._tmpm3);
        }
    }
    return csg;
};

CSG.toMesh=function(csg,toMatrix){
    var geom = new THREE.Geometry();
    var ps = csg.polygons;
    var vs = geom.vertices;
    var fvuv = geom.faceVertexUvs[0];
    for(var i=0;i<ps.length;i++){
        var p = ps[i];
        var pvs=p.vertices;
        var v0=vs.length;
        var pvlen=pvs.length;
        
        for(var j=0;j<pvlen;j++)
            vs.push(new THREE.Vector3().copy(pvs[j].pos));


        for(var j=3;j<=pvlen;j++){
            var fc = new THREE.Face3();
            var fuv = [];
            fvuv.push(fuv);
            var fnml = fc.vertexNormals;
            fc.a=v0;
            fc.b=v0+j-2;
            fc.c=v0+j-1;

            fnml.push(new THREE.Vector3().copy(pvs[0].normal));
            fnml.push(new THREE.Vector3().copy(pvs[j-2].normal));
            fnml.push(new THREE.Vector3().copy(pvs[j-1].normal));
            fuv.push(new THREE.Vector3().copy(pvs[0].uv));
            fuv.push(new THREE.Vector3().copy(pvs[j-2].uv));
            fuv.push(new THREE.Vector3().copy(pvs[j-1].uv));

            fc.normal = new THREE.Vector3().copy(p.plane.normal);
            geom.faces.push(fc);
        }
    }
    var inv = new THREE.Matrix4().getInverse(toMatrix);
    geom.applyMatrix4(inv);
    geom.verticesNeedUpdate = geom.elementsNeedUpdate = geom.normalsNeedUpdate = true;
    geom.computeBoundingSphere();
    geom.computeBoundingBox();
    var m = new THREE.Mesh(geom);
    m.matrix.copy(toMatrix);
    m.matrix.decompose(m.position,m.rotation,m.scale);
    m.updateMatrixWorld();
    return m
};


CSG.ieval=function(tokens,index=0){
    if(typeof tokens === 'string')
        CSG.currentOp=tokens;
    else if(tokens instanceof Array){
        for(let i=0;i<tokens.length;i++)CSG.ieval(tokens[i],0);
    }else if(typeof tokens==='object'){
        var op=CSG.currentOp;
        tokens.updateMatrix();
        tokens.updateMatrixWorld();
        if(!CSG.sourceMesh)
            CSG.currentPrim =  CSG.fromMesh(CSG.sourceMesh = tokens);
        else {
            CSG.nextPrim = CSG.fromMesh(tokens);
            CSG.currentPrim = CSG.currentPrim[op](CSG.nextPrim);
        }
        if(CSG.doRemove)tokens.parent.remove(tokens);
    }//union,subtract,intersect,inverse
};

CSG.eval=function(tokens,doRemove){//[['add',mesh,mesh,mesh,mesh],['sub',mesh,mesh,mesh,mesh]]
    CSG.currentOp=null;
    CSG.sourceMesh=null;
    CSG.doRemove=doRemove;
    CSG.ieval(tokens);
    var result = CSG.toMesh( CSG.currentPrim, CSG.sourceMesh.matrix );
    result.material = CSG.sourceMesh.material;
    result.castShadow  = result.receiveShadow = true;
    return result;
};
// Return a new CSG solid representing space in either this solid or in the
// solid `csg`. Neither this solid nor the solid `csg` are modified.
// 
//     A.union(B)
// 
//     +-------+            +-------+
//     |       |            |       |
//     |   A   |            |       |
//     |    +--+----+   =   |       +----+
//     +----+--+    |       +----+       |
//          |   B   |            |       |
//          |       |            |       |
//          +-------+            +-------+
// 
// Return a new CSG solid representing space in this solid but not in the
// solid `csg`. Neither this solid nor the solid `csg` are modified.
// 
//     A.subtract(B)
// 
//     +-------+            +-------+
//     |       |            |       |
//     |   A   |            |       |
//     |    +--+----+   =   |    +--+
//     +----+--+    |       +----+
//          |   B   |
//          |       |
//          +-------+
// 
// Return a new CSG solid representing space both this solid and in the
// solid `csg`. Neither this solid nor the solid `csg` are modified.
// 
//     A.intersect(B)
// 
//     +-------+
//     |       |
//     |   A   |
//     |    +--+----+   =   +--+
//     +----+--+    |       +--+
//          |   B   |
//          |       |
//          +-------+
//

function applyBooleanOperations(structured) {
  structured[structuredData.products].forEach(function (product) {
    if (product[namedProps.hasOpenings]) {
      for (var i = 0; i < product[namedProps.geometry].length; i++) {
        var geometryItem = product[namedProps.geometry][i];
        var openings = product[namedProps.hasOpenings];

        if (geometryItem.type === "Mesh" && !geometryItem[namedProps.isBrep]) {
          geometryItem.geometry.computeFaceNormals();
          geometryItem.updateMatrix();
          var bspA = CSG.fromMesh(geometryItem);

          for (var _i = 0; _i < openings.length; _i++) {
            var opening = openings[_i][namedProps.geometry][0];
            opening.updateMatrix();
            var bspB = CSG.fromMesh(opening);
            bspA = bspA.subtract(bspB);
          }

          var result = CSG.toMesh(bspA, geometryItem.matrix);
          result.geometry = new THREE.BufferGeometry().fromGeometry(result.geometry);

          for (var _i2 = 0; _i2 < openings.length; _i2++) {
            var _opening = openings[_i2][namedProps.geometry][0];
            result.attach(_opening);
          }

          result.material = new THREE.MeshPhongMaterial();
          result.attach.apply(result, _toConsumableArray(geometryItem.children));
          mainObject.add(result);
          mainObject.remove(geometryItem);
          product[namedProps.geometry][i] = result;
        }
      }
    }
  });
}

var _materialsMap;

function applyMaterials(structured) {
  structured[structuredData.products].forEach(function (product) {
    product[namedProps.geometry].forEach(function (item) {
      if (item.type === 'Mesh') item.material = getmaterial(product[namedProps.ifcClass]);
      if (item.material && item.material.transparent === true) item.renderOrder = 1;
    });
    if (product[namedProps.hasOpenings]) product[namedProps.hasOpenings].forEach(function (opening) {
      var openingMesh = opening[namedProps.geometry][0];
      openingMesh.material = getmaterial(opening[namedProps.ifcClass]);
    });
    if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(function (spatial) {
      var spatialMesh = spatial[namedProps.geometry][0];
      spatialMesh.material = getmaterial(spatial[namedProps.ifcClass]);
    });
  });
  structured[structuredData.spaces].forEach(function (space) {
    space[namedProps.geometry].forEach(function (item) {
      if (item.type === 'Mesh') item.material = getmaterial(space[namedProps.ifcClass]);
    });
  });
}

var colors = {
  black: 0x000000,
  brown: 0xc2893a,
  grey: 0x606060,
  darkBrown: 0x5c3d1e,
  darkBlue: 0x23395d,
  lightBlue: 0xadd8e6,
  white: 0xffffff
};
var materialsMap = (_materialsMap = {}, _defineProperty(_materialsMap, ifcTypes.IfcWall, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcWallStandardCase, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcSlab, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcFurnishingElement, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcDoor, {
  material: getDiffuseMat(colors.brown),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcRailing, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcStair, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcStairFlight, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcPlate, {
  material: getTransparentMat(colors.lightBlue, 0.2),
  lineColor: colors.darkBlue
}), _defineProperty(_materialsMap, ifcTypes.IfcMember, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _defineProperty(_materialsMap, ifcTypes.IfcWindow, {
  material: getTransparentMat(colors.lightBlue, 0.2),
  lineColor: colors.darkBlue
}), _defineProperty(_materialsMap, ifcTypes.IfcSpace, {
  material: getTransparentMat(colors.lightBlue, 0.2),
  lineColor: colors.black
}), _defineProperty(_materialsMap, ifcTypes.IfcOpeningElement, {
  material: getTransparentMat(colors.lightBlue, 0),
  lineColor: colors.grey
}), _defineProperty(_materialsMap, ifcTypes.IfcBuildingElementProxy, {
  material: getDiffuseMat(colors.white),
  lineColor: colors.darkBrown
}), _materialsMap);

function getmaterial(ifcType) {
  return materialsMap[ifcTypes[ifcType]].material;
}

function getLineColor(ifcType) {
  return materialsMap[ifcTypes[ifcType]].lineColor;
}

function getTransparentMat(color) {
  var opacity = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0.2;
  return new THREE.MeshBasicMaterial({
    color: color,
    side: 2,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1,
    opacity: opacity,
    transparent: true,
    depthWrite: false
  });
}

function getDiffuseMat(color) {
  return new THREE.MeshLambertMaterial({
    color: color,
    side: 2,
    polygonOffset: true,
    polygonOffsetFactor: 1,
    polygonOffsetUnits: 1
  });
}

function drawEdges(structured) {
  var products = structured[structuredData.products];
  products.forEach(function (product) {
    product[namedProps.geometry].forEach(function (item) {
      var ifcClass = product[namedProps.ifcClass];

      if (item.type === "Mesh" && ifcClass) {
        var lineColor = getLineColor(ifcClass);
        var geo = new THREE.EdgesGeometry(item.geometry);
        var mat = new THREE.LineBasicMaterial({
          color: lineColor
        });
        var wireframe = new THREE.LineSegments(geo, mat);
        item.add(wireframe);
        if (product[namedProps.hasOpenings]) product[namedProps.hasOpenings].forEach(function (opening) {
          opening[namedProps.geometry].forEach(function (item) {
            var geo2 = new THREE.EdgesGeometry(item.geometry);
            var openingLineColor = getLineColor(opening[namedProps.ifcClass]);
            var openingMat = new THREE.LineBasicMaterial({
              color: openingLineColor
            });
            var wireframe2 = new THREE.LineSegments(geo2, openingMat);
            item.add(wireframe2);
          });
        });
      }
    });
    if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(function (spatial) {
      spatial[namedProps.geometry].forEach(function (item) {
        var geo3 = new THREE.EdgesGeometry(item.geometry);
        var spatialLineColor = getLineColor(spatial[namedProps.ifcClass]);
        var spatialMat = new THREE.LineBasicMaterial({
          color: spatialLineColor
        });
        var wireframe3 = new THREE.LineSegments(geo3, spatialMat);
        item.add(wireframe3);
      });
    });
  });
}

function applyScale(structured) {
  var units = structured[structuredData.units][namedProps.units];
  var scale = getUnitScale(units);
  applyScaleOnObjects(scale, structured);
}

function applyScaleOnObjects(scale, structured) {
  if (scale === 1) return;
  var axis = new THREE.Object3D();
  mainObject.add(axis);
  var geometries = getALlGeometries(structured);
  geometries.forEach(function (geometry) {
    axis.attach(geometry);
    axis.scale.set(scale, scale, scale);
    mainObject.attach(geometry);
    axis.scale.set(1, 1, 1);
  });
}

function getALlGeometries(structured) {
  var allGeometry = [];
  structured[structuredData.products].forEach(function (product) {
    return getGeometry(product, allGeometry);
  });
  return allGeometry;
}

function getGeometry(product, allGeometry) {
  allGeometry.push.apply(allGeometry, _toConsumableArray(product[namedProps.geometry]));
  if (product[namedProps.hasSpatial]) product[namedProps.hasSpatial].forEach(function (spatial) {
    return getGeometry(spatial, allGeometry);
  });
}

function getUnitScale(units) {
  var lengthUnit = units.filter(function (unitType) {
    return unitType[namedProps.unitType] === 'LENGTHUNIT';
  })[0];
  var prefix = lengthUnit[namedProps.prefix];
  return unitMap[prefix];
}

var unitMap = {
  EXA: 100000000,
  PETA: 10000000,
  TERA: 1000000,
  GIGA: 100000,
  MEGA: 10000,
  KILO: 1000,
  HECTO: 100,
  DECA: 10,
  $: 1,
  DECI: 0.1,
  CENTI: 0.01,
  MILLI: 0.001,
  MICRO: 0.0001,
  NANO: 0.00001,
  PICO: 0.000001,
  FEMTO: 0.0000001,
  ATTO: 0.00000001
};

function buildGeometry(structured) {
  console.log(structured);
  constructGeometries(structured);
  applyTransformations(structured);
  drawEdges(structured);
  applyBooleanOperations(structured);
  applyMaterials(structured);
  applyScale(structured);
  return structured;
}

function loadIfc(ifcData) {
  var loaded = loadIfcFileItems(ifcData);
  var structured = constructProject(loaded);
  return buildGeometry(structured);
}

export { loadIfc };
