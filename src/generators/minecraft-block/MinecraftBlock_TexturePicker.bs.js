// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("rescript/lib/js/curry.js");
var React = require("react");
var Builder = require("../../builder/modules/Builder.bs.js");
var Belt_Array = require("rescript/lib/js/belt_Array.js");
var Caml_int32 = require("rescript/lib/js/caml_int32.js");
var Caml_option = require("rescript/lib/js/caml_option.js");
var MinecraftBlock_Face = require("./MinecraftBlock_Face.bs.js");
var MinecraftBlock_Tints = require("./MinecraftBlock_Tints.bs.js");
var MinecraftBlock_Textures = require("./MinecraftBlock_Textures.bs.js");

function makeOptions(tints) {
  return Belt_Array.concatMany(Belt_Array.mapWithIndex(tints, (function (index1, param) {
                    var color = param.color;
                    return Belt_Array.mapWithIndex(param.biomes, (function (index2, biome) {
                                  var key = index1.toString() + "-" + index2.toString();
                                  return React.createElement("option", {
                                              key: key,
                                              value: color
                                            }, biome);
                                }));
                  })));
}

function isValidTint(tint) {
  return Builder.Texture.hexToRGB(tint) !== undefined;
}

function normalizeTint(tint) {
  var tint$1 = tint.trim();
  if (tint$1.length === 0) {
    return ;
  }
  var tint$2 = tint$1.startsWith("#") ? tint$1 : "#" + tint$1;
  if (isValidTint(tint$2)) {
    return tint$2;
  }
  
}

function MinecraftBlock_TexturePicker$TintSelector(Props) {
  var onChange = Props.onChange;
  var match = React.useState(function () {
        return /* NoTint */0;
      });
  var setSelectedTint = match[1];
  var selectedTint = match[0];
  var match$1 = React.useState(function () {
        
      });
  var setCustomTint = match$1[1];
  var onSelectChange = function (e) {
    var target = e.target;
    var value = target.value;
    var tint;
    if (value !== undefined) {
      var value$1 = Caml_option.valFromOption(value);
      switch (value$1) {
        case "Custom" :
            tint = /* CustomTint */1;
            break;
        case "None" :
            tint = /* NoTint */0;
            break;
        default:
          tint = /* HexTint */{
            _0: value$1
          };
      }
    } else {
      tint = /* NoTint */0;
    }
    Curry._1(setSelectedTint, (function (param) {
            return tint;
          }));
    if (typeof tint === "number") {
      return Curry._1(onChange, undefined);
    } else {
      return Curry._1(onChange, tint._0);
    }
  };
  var onInputChange = function (e) {
    var target = e.target;
    var tint = target.value;
    var tint$1 = tint !== undefined ? normalizeTint(Caml_option.valFromOption(tint)) : undefined;
    Curry._1(setCustomTint, (function (param) {
            return tint$1;
          }));
    if (tint$1 !== undefined) {
      return Curry._1(onChange, tint$1);
    }
    
  };
  var color = typeof selectedTint === "number" ? (
      selectedTint !== 0 ? match$1[0] : undefined
    ) : selectedTint._0;
  return React.createElement("div", {
              className: "flex"
            }, React.createElement("select", {
                  className: "border border-gray-300 rounded text-gray-600 h-8 pl-5 pr-10 mr-4 bg-white hover:border-gray-400 focus:outline-none",
                  placeholder: "Tint",
                  onChange: onSelectChange
                }, React.createElement("option", {
                      value: "None"
                    }, "No tint"), React.createElement("option", {
                      value: "Custom"
                    }, "Custom tint"), React.createElement("optgroup", {
                      key: "grass",
                      label: "Grass"
                    }, makeOptions(MinecraftBlock_Tints.tints.grass)), React.createElement("optgroup", {
                      key: "foliage",
                      label: "Foliage"
                    }, makeOptions(MinecraftBlock_Tints.tints.foliage)), React.createElement("optgroup", {
                      key: "water",
                      label: "Water"
                    }, makeOptions(MinecraftBlock_Tints.tints.water))), typeof selectedTint === "number" && selectedTint !== 0 ? React.createElement("div", undefined, React.createElement("span", undefined, "#"), React.createElement("input", {
                        className: "border border-gray-300 rounded text-gray-600 h-8 px-5 mr-4 bg-white",
                        onChange: onInputChange
                      })) : null, color !== undefined ? React.createElement("div", undefined, React.createElement("div", {
                        className: "border w-8 h-8",
                        style: {
                          backgroundColor: color
                        }
                      })) : null);
}

var TintSelector = {
  makeOptions: makeOptions,
  isValidTint: isValidTint,
  normalizeTint: normalizeTint,
  make: MinecraftBlock_TexturePicker$TintSelector
};

function px(n) {
  return n.toString() + "px";
}

function deg(n) {
  return n.toString() + "deg";
}

function makeTileStyle(textureDef, frameIndex, size, width, height) {
  var y = Math.imul(Caml_int32.div(frameIndex, MinecraftBlock_Textures.textureSize), -size | 0);
  return Object.assign({}, {
              backgroundImage: "url(" + textureDef.url + ")",
              backgroundPosition: "0px " + (y.toString() + "px"),
              backgroundRepeat: "no-repeat",
              height: height.toString() + "px",
              width: width.toString() + "px",
              backgroundSize: "cover"
            }, {
              imageRendering: "pixelated"
            });
}

function makePreviewTileStyle(textureDef, textureFrame, rotation) {
  var base = {
    backgroundColor: "white",
    height: (128).toString() + "px",
    width: (128).toString() + "px",
    transform: "rotate(" + (Math.imul(rotation, 90).toString() + "deg") + ")"
  };
  if (textureFrame !== undefined) {
    return Object.assign({}, base, makeTileStyle(textureDef, textureFrame.frameIndex, 128, 128, 128));
  } else {
    return base;
  }
}

function makeGridTileStyle(textureDef, frameIndex) {
  var width = 40;
  return Object.assign({}, makeTileStyle(textureDef, frameIndex, 32, width, width), {
              borderWidth: (4).toString() + "px",
              display: "inline-block",
              marginRight: (6).toString() + "px",
              marginBottom: (6).toString() + "px"
            });
}

function makeGridTileClassName(isSelected) {
  if (isSelected) {
    return "border-blue-600";
  } else {
    return "border-gray-300 hover:border-gray-400";
  }
}

function MinecraftBlock_TexturePicker$GridTile(Props) {
  var textureDef = Props.textureDef;
  var textureFrame = Props.textureFrame;
  var isSelected = Props.isSelected;
  var onClick = Props.onClick;
  var textureId = textureFrame.textureId;
  var className = makeGridTileClassName(isSelected);
  var style = makeGridTileStyle(textureDef, textureFrame.frameIndex);
  var title = MinecraftBlock_Textures.findTextureFrameCount(textureFrame.versionId, textureId) > 1 ? textureId + " (Frame " + textureFrame.frame.toString() + ")" : textureId;
  return React.createElement("button", {
              className: className,
              style: style,
              title: title,
              onClick: (function (param) {
                  return Curry._1(onClick, undefined);
                })
            }, React.createElement("span", {
                  dangerouslySetInnerHTML: {
                    __html: "&nbsp;"
                  }
                }));
}

var GridTile = {
  make: MinecraftBlock_TexturePicker$GridTile
};

function MinecraftBlock_TexturePicker$PreviewTile(Props) {
  var textureDef = Props.textureDef;
  var textureFrame = Props.textureFrame;
  var rotation = Props.rotation;
  var style = makePreviewTileStyle(textureDef, textureFrame, rotation);
  return React.createElement("div", {
              style: style
            });
}

var PreviewTile = {
  make: MinecraftBlock_TexturePicker$PreviewTile
};

function MinecraftBlock_TexturePicker(Props) {
  var versionId = Props.versionId;
  var onChange = Props.onChange;
  var match = React.useState(function () {
        
      });
  var setSelectedTextureFrame = match[1];
  var selectedTextureFrame = match[0];
  var match$1 = React.useState(function () {
        return 0;
      });
  var setRotation = match$1[1];
  var rotation = match$1[0];
  var match$2 = React.useState(function () {
        
      });
  var setSearch = match$2[1];
  var search = match$2[0];
  var match$3 = React.useState(function () {
        
      });
  var setTint = match$3[1];
  var tint = match$3[0];
  var textureFrames = MinecraftBlock_Textures.findTextureFrames(versionId);
  var textureDef = MinecraftBlock_Textures.findTextureDef(versionId);
  var textureIsSelected = function (textureId, frame) {
    if (selectedTextureFrame !== undefined && textureId === selectedTextureFrame.textureId) {
      return frame === selectedTextureFrame.frame;
    } else {
      return false;
    }
  };
  var getBlend = function (tint) {
    if (tint !== undefined) {
      return {
              NAME: "MultiplyHex",
              VAL: Caml_option.valFromOption(tint)
            };
    } else {
      return "None";
    }
  };
  if (textureDef === undefined) {
    return null;
  }
  if (textureFrames === undefined) {
    return null;
  }
  var onSearchChange = function (e) {
    var target = e.target;
    var value = target.value;
    var value$1;
    if (value !== undefined) {
      var value$2 = Caml_option.valFromOption(value);
      value$1 = value$2.length === 0 ? undefined : Caml_option.some(value$2);
    } else {
      value$1 = undefined;
    }
    return Curry._1(setSearch, (function (param) {
                  return value$1;
                }));
  };
  var textures = search !== undefined ? textureFrames.filter(function (param) {
          return param.textureId.indexOf(search) >= 0;
        }) : textureFrames;
  var onRotate = function (param) {
    var rotation$1 = rotation + 1 | 0;
    var rotation$2 = rotation$1 > 3 ? 0 : rotation$1;
    Curry._1(setRotation, (function (param) {
            return rotation$2;
          }));
    if (selectedTextureFrame === undefined) {
      return ;
    }
    var faceTexture_versionId = selectedTextureFrame.versionId;
    var faceTexture_textureId = selectedTextureFrame.textureId;
    var faceTexture_frame = selectedTextureFrame.frame;
    var faceTexture_blend = getBlend(tint);
    var faceTexture = {
      versionId: faceTexture_versionId,
      textureId: faceTexture_textureId,
      frame: faceTexture_frame,
      rot: rotation$2,
      blend: faceTexture_blend
    };
    return Curry._1(onChange, MinecraftBlock_Face.encodeFaceTexture(faceTexture));
  };
  var onTintChange = function (tint) {
    Curry._1(setTint, (function (param) {
            return tint;
          }));
    if (selectedTextureFrame === undefined) {
      return ;
    }
    var faceTexture_versionId = selectedTextureFrame.versionId;
    var faceTexture_textureId = selectedTextureFrame.textureId;
    var faceTexture_frame = selectedTextureFrame.frame;
    var faceTexture_blend = getBlend(tint);
    var faceTexture = {
      versionId: faceTexture_versionId,
      textureId: faceTexture_textureId,
      frame: faceTexture_frame,
      rot: rotation,
      blend: faceTexture_blend
    };
    return Curry._1(onChange, MinecraftBlock_Face.encodeFaceTexture(faceTexture));
  };
  return React.createElement("div", {
              className: "mb-4"
            }, React.createElement("div", {
                  className: "font-bold"
                }, "Block Texture"), React.createElement("div", undefined, React.createElement("input", {
                      className: "p-2 mb-2 w-full",
                      placeholder: "Search",
                      onChange: onSearchChange
                    })), React.createElement("div", {
                  className: "flex w-full"
                }, React.createElement("div", {
                      className: "w-full"
                    }, React.createElement("div", {
                          className: "h-44 overflow-y-scroll"
                        }, textures.map(function (textureFrame) {
                              var frame = textureFrame.frame;
                              var textureId = textureFrame.textureId;
                              var key = textureId + ":" + frame.toString();
                              var onClick = function (param) {
                                Curry._1(setSelectedTextureFrame, (function (param) {
                                        return textureFrame;
                                      }));
                                Curry._1(setRotation, (function (param) {
                                        return 0;
                                      }));
                                var faceTexture_blend = getBlend(tint);
                                var faceTexture = {
                                  versionId: versionId,
                                  textureId: textureId,
                                  frame: frame,
                                  rot: 0,
                                  blend: faceTexture_blend
                                };
                                return Curry._1(onChange, MinecraftBlock_Face.encodeFaceTexture(faceTexture));
                              };
                              return React.createElement(MinecraftBlock_TexturePicker$GridTile, {
                                          textureDef: textureDef,
                                          textureFrame: textureFrame,
                                          isSelected: textureIsSelected(textureId, frame),
                                          onClick: onClick,
                                          key: key
                                        });
                            }))), React.createElement("div", {
                      className: "flex flex-col w-40 items-center px-8"
                    }, React.createElement(MinecraftBlock_TexturePicker$PreviewTile, {
                          textureDef: textureDef,
                          textureFrame: selectedTextureFrame,
                          rotation: rotation
                        }), React.createElement("div", undefined, React.createElement("button", {
                              className: "bg-blue-500 rounded text-white my-4 py-1 px-4 text-center",
                              onClick: onRotate
                            }, "Rotate")))), React.createElement("div", {
                  className: "mb-2"
                }, React.createElement(MinecraftBlock_TexturePicker$TintSelector, {
                      onChange: onTintChange
                    })));
}

var Textures;

var Face;

var Tints;

var make = MinecraftBlock_TexturePicker;

exports.Textures = Textures;
exports.Face = Face;
exports.Tints = Tints;
exports.TintSelector = TintSelector;
exports.px = px;
exports.deg = deg;
exports.makeTileStyle = makeTileStyle;
exports.makePreviewTileStyle = makePreviewTileStyle;
exports.makeGridTileStyle = makeGridTileStyle;
exports.makeGridTileClassName = makeGridTileClassName;
exports.GridTile = GridTile;
exports.PreviewTile = PreviewTile;
exports.make = make;
/* react Not a pure module */
