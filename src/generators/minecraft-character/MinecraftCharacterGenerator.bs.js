// Generated by ReScript, PLEASE EDIT WITH CARE
'use strict';

var Generator = require("../../builder/modules/Generator.bs.js");

function requireImage(id) {
  return require("./images/" + id + ".png");
}

function requireTexture(id) {
  return require("./textures/" + id + ".png");
}

var id = "minecraft-character";

var name = "Minecraft Character";

var thumbnail = {
  url: require("./thumbnail.jpg")
};

var imageIds = [
  "Background-Alex",
  "Background-Steve",
  "Folds-Alex",
  "Folds-Steve",
  "Labels"
];

function toImageDef(id) {
  return {
          id: id,
          url: requireImage(id)
        };
}

var images = imageIds.map(toImageDef);

var textures = [{
    id: "Skin",
    url: requireTexture("Skin64x64Steve"),
    standardWidth: 64,
    standardHeight: 64
  }];

function script(param) {
  Generator.defineSelectInput("Skin Model Type", [
        "Steve",
        "Alex"
      ]);
  Generator.defineTextureInput("Skin", {
        standardWidth: 64,
        standardHeight: 64,
        choices: []
      });
  Generator.defineBooleanInput("Show Folds", true);
  Generator.defineBooleanInput("Show Labels", true);
  var alexModel = Generator.getSelectInputValue("Skin Model Type") === "Alex";
  var showFolds = Generator.getBooleanInputValue("Show Folds");
  var showLabels = Generator.getBooleanInputValue("Show Labels");
  var hideHelmet = Generator.getBooleanInputValue("Hide Helmet");
  var hideJacket = Generator.getBooleanInputValue("Hide Jacket");
  var hideLeftSleeve = Generator.getBooleanInputValue("Hide Left Sleeve");
  var hideRightSleeve = Generator.getBooleanInputValue("Hide Right Sleeve");
  var hideLeftPant = Generator.getBooleanInputValue("Hide Left Pant");
  var hideRightPant = Generator.getBooleanInputValue("Hide Right Pant");
  Generator.defineRegionInput([
        74,
        25,
        256,
        192
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Helmet", !hideHelmet);
        }));
  Generator.defineRegionInput([
        268,
        201,
        192,
        160
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Jacket", !hideJacket);
        }));
  Generator.defineRegionInput([
        383,
        373,
        128,
        160
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Left Sleeve", !hideLeftSleeve);
        }));
  Generator.defineRegionInput([
        99,
        373,
        128,
        160
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Right Sleeve", !hideRightSleeve);
        }));
  Generator.defineRegionInput([
        383,
        587,
        128,
        160
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Left Pant", !hideLeftPant);
        }));
  Generator.defineRegionInput([
        99,
        587,
        128,
        160
      ], (function (param) {
          return Generator.setBooleanInputValue("Hide Right Pant", !hideRightPant);
        }));
  if (alexModel) {
    Generator.drawImage("Background-Alex", [
          0,
          0
        ]);
  } else {
    Generator.drawImage("Background-Steve", [
          0,
          0
        ]);
  }
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 74,
        y: 89,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 138,
        y: 89,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 202,
        y: 89,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 8,
        w: 8,
        h: 8
      }, {
        x: 266,
        y: 89,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 138,
        y: 25,
        w: 64,
        h: 64
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 0,
        w: 8,
        h: 8
      }, {
        x: 138,
        y: 153,
        w: 64,
        h: 64
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 268,
        y: 233,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 20,
        w: 8,
        h: 12
      }, {
        x: 300,
        y: 233,
        w: 64,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 364,
        y: 233,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 32,
        y: 20,
        w: 8,
        h: 12
      }, {
        x: 396,
        y: 233,
        w: 64,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 16,
        w: 8,
        h: 4
      }, {
        x: 300,
        y: 201,
        w: 64,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 16,
        w: 8,
        h: 4
      }, {
        x: 300,
        y: 329,
        w: 64,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  if (alexModel) {
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 20,
          w: 4,
          h: 12
        }, {
          x: 107,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 44,
          y: 20,
          w: 3,
          h: 12
        }, {
          x: 139,
          y: 405,
          w: 24,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 47,
          y: 20,
          w: 4,
          h: 12
        }, {
          x: 163,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 51,
          y: 20,
          w: 3,
          h: 12
        }, {
          x: 195,
          y: 405,
          w: 24,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 44,
          y: 16,
          w: 3,
          h: 4
        }, {
          x: 139,
          y: 373,
          w: 24,
          h: 32
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 47,
          y: 16,
          w: 3,
          h: 4
        }, {
          x: 139,
          y: 501,
          w: 24,
          h: 32
        }, "Vertical", undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 32,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 415,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 36,
          y: 52,
          w: 3,
          h: 12
        }, {
          x: 447,
          y: 405,
          w: 24,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 39,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 471,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 43,
          y: 52,
          w: 3,
          h: 12
        }, {
          x: 391,
          y: 405,
          w: 24,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 36,
          y: 48,
          w: 3,
          h: 4
        }, {
          x: 447,
          y: 373,
          w: 24,
          h: 32
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 39,
          y: 48,
          w: 3,
          h: 4
        }, {
          x: 447,
          y: 501,
          w: 24,
          h: 32
        }, "Vertical", undefined, undefined, undefined);
  } else {
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 20,
          w: 4,
          h: 12
        }, {
          x: 99,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 44,
          y: 20,
          w: 4,
          h: 12
        }, {
          x: 131,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 48,
          y: 20,
          w: 4,
          h: 12
        }, {
          x: 163,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 52,
          y: 20,
          w: 4,
          h: 12
        }, {
          x: 195,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 44,
          y: 16,
          w: 4,
          h: 4
        }, {
          x: 131,
          y: 373,
          w: 32,
          h: 32
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 48,
          y: 16,
          w: 4,
          h: 4
        }, {
          x: 131,
          y: 501,
          w: 32,
          h: 32
        }, "Vertical", undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 32,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 415,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 36,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 447,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 479,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 44,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 383,
          y: 405,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 36,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 447,
          y: 373,
          w: 32,
          h: 32
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 447,
          y: 501,
          w: 32,
          h: 32
        }, "Vertical", undefined, undefined, undefined);
  }
  Generator.drawTextureLegacy("Skin", {
        x: 0,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 99,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 131,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 163,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 12,
        y: 20,
        w: 4,
        h: 12
      }, {
        x: 195,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 4,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 131,
        y: 587,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 8,
        y: 16,
        w: 4,
        h: 4
      }, {
        x: 131,
        y: 715,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 16,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 415,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 447,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 479,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 28,
        y: 52,
        w: 4,
        h: 12
      }, {
        x: 383,
        y: 619,
        w: 32,
        h: 96
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 20,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 447,
        y: 587,
        w: 32,
        h: 32
      }, undefined, undefined, undefined, undefined);
  Generator.drawTextureLegacy("Skin", {
        x: 24,
        y: 48,
        w: 4,
        h: 4
      }, {
        x: 447,
        y: 715,
        w: 32,
        h: 32
      }, "Vertical", undefined, undefined, undefined);
  if (!hideHelmet) {
    Generator.drawTextureLegacy("Skin", {
          x: 32,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 74,
          y: 89,
          w: 64,
          h: 64
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 138,
          y: 89,
          w: 64,
          h: 64
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 48,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 202,
          y: 89,
          w: 64,
          h: 64
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 56,
          y: 8,
          w: 8,
          h: 8
        }, {
          x: 266,
          y: 89,
          w: 64,
          h: 64
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 40,
          y: 0,
          w: 8,
          h: 8
        }, {
          x: 138,
          y: 25,
          w: 64,
          h: 64
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 48,
          y: 0,
          w: 8,
          h: 8
        }, {
          x: 138,
          y: 153,
          w: 64,
          h: 64
        }, "Vertical", undefined, undefined, undefined);
  }
  if (!hideJacket) {
    Generator.drawTextureLegacy("Skin", {
          x: 16,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 268,
          y: 233,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 20,
          y: 36,
          w: 8,
          h: 12
        }, {
          x: 300,
          y: 233,
          w: 64,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 28,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 364,
          y: 233,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 32,
          y: 36,
          w: 8,
          h: 12
        }, {
          x: 396,
          y: 233,
          w: 64,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 20,
          y: 32,
          w: 8,
          h: 4
        }, {
          x: 300,
          y: 201,
          w: 64,
          h: 32
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 28,
          y: 32,
          w: 8,
          h: 4
        }, {
          x: 300,
          y: 329,
          w: 64,
          h: 32
        }, "Vertical", undefined, undefined, undefined);
  }
  if (alexModel) {
    if (!hideRightSleeve) {
      Generator.drawTextureLegacy("Skin", {
            x: 40,
            y: 36,
            w: 4,
            h: 12
          }, {
            x: 107,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 44,
            y: 36,
            w: 3,
            h: 12
          }, {
            x: 139,
            y: 405,
            w: 24,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 47,
            y: 36,
            w: 4,
            h: 12
          }, {
            x: 163,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 51,
            y: 36,
            w: 3,
            h: 12
          }, {
            x: 195,
            y: 405,
            w: 24,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 44,
            y: 32,
            w: 3,
            h: 4
          }, {
            x: 139,
            y: 373,
            w: 24,
            h: 32
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 47,
            y: 32,
            w: 3,
            h: 4
          }, {
            x: 139,
            y: 501,
            w: 24,
            h: 32
          }, undefined, undefined, undefined, undefined);
    }
    if (!hideLeftSleeve) {
      Generator.drawTextureLegacy("Skin", {
            x: 48,
            y: 52,
            w: 4,
            h: 12
          }, {
            x: 415,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 52,
            y: 52,
            w: 3,
            h: 12
          }, {
            x: 447,
            y: 405,
            w: 24,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 55,
            y: 52,
            w: 4,
            h: 12
          }, {
            x: 471,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 59,
            y: 52,
            w: 3,
            h: 12
          }, {
            x: 391,
            y: 405,
            w: 24,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 52,
            y: 48,
            w: 3,
            h: 4
          }, {
            x: 447,
            y: 373,
            w: 24,
            h: 32
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 55,
            y: 48,
            w: 3,
            h: 4
          }, {
            x: 447,
            y: 501,
            w: 24,
            h: 32
          }, undefined, undefined, undefined, undefined);
    }
    
  } else {
    if (!hideRightSleeve) {
      Generator.drawTextureLegacy("Skin", {
            x: 40,
            y: 36,
            w: 4,
            h: 12
          }, {
            x: 99,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 44,
            y: 36,
            w: 4,
            h: 12
          }, {
            x: 131,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 48,
            y: 36,
            w: 4,
            h: 12
          }, {
            x: 163,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 52,
            y: 36,
            w: 4,
            h: 12
          }, {
            x: 195,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 44,
            y: 32,
            w: 4,
            h: 4
          }, {
            x: 131,
            y: 373,
            w: 32,
            h: 32
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 48,
            y: 32,
            w: 4,
            h: 4
          }, {
            x: 131,
            y: 501,
            w: 32,
            h: 32
          }, "Vertical", undefined, undefined, undefined);
    }
    if (!hideLeftSleeve) {
      Generator.drawTextureLegacy("Skin", {
            x: 48,
            y: 52,
            w: 4,
            h: 12
          }, {
            x: 415,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 52,
            y: 52,
            w: 4,
            h: 12
          }, {
            x: 447,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 56,
            y: 52,
            w: 4,
            h: 12
          }, {
            x: 479,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 60,
            y: 52,
            w: 4,
            h: 12
          }, {
            x: 383,
            y: 405,
            w: 32,
            h: 96
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 52,
            y: 48,
            w: 4,
            h: 4
          }, {
            x: 447,
            y: 373,
            w: 32,
            h: 32
          }, undefined, undefined, undefined, undefined);
      Generator.drawTextureLegacy("Skin", {
            x: 56,
            y: 48,
            w: 4,
            h: 4
          }, {
            x: 447,
            y: 501,
            w: 32,
            h: 32
          }, "Vertical", undefined, undefined, undefined);
    }
    
  }
  if (!hideRightPant) {
    Generator.drawTextureLegacy("Skin", {
          x: 0,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 99,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 131,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 163,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 12,
          y: 36,
          w: 4,
          h: 12
        }, {
          x: 195,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 32,
          w: 4,
          h: 4
        }, {
          x: 131,
          y: 587,
          w: 32,
          h: 32
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 32,
          w: 4,
          h: 4
        }, {
          x: 131,
          y: 715,
          w: 32,
          h: 32
        }, "Vertical", undefined, undefined, undefined);
  }
  if (!hideLeftPant) {
    Generator.drawTextureLegacy("Skin", {
          x: 0,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 415,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 447,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 479,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 12,
          y: 52,
          w: 4,
          h: 12
        }, {
          x: 383,
          y: 619,
          w: 32,
          h: 96
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 4,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 447,
          y: 587,
          w: 32,
          h: 32
        }, undefined, undefined, undefined, undefined);
    Generator.drawTextureLegacy("Skin", {
          x: 8,
          y: 48,
          w: 4,
          h: 4
        }, {
          x: 447,
          y: 715,
          w: 32,
          h: 32
        }, "Vertical", undefined, undefined, undefined);
  }
  if (showFolds) {
    if (alexModel) {
      Generator.drawImage("Folds-Alex", [
            0,
            0
          ]);
    } else {
      Generator.drawImage("Folds-Steve", [
            0,
            0
          ]);
    }
  }
  if (showLabels) {
    return Generator.drawImage("Labels", [
                0,
                0
              ]);
  }
  
}

var generator_thumbnail = thumbnail;

var generator = {
  id: id,
  name: name,
  thumbnail: generator_thumbnail,
  video: undefined,
  instructions: undefined,
  images: images,
  textures: textures,
  script: script
};

exports.requireImage = requireImage;
exports.requireTexture = requireTexture;
exports.id = id;
exports.name = name;
exports.thumbnail = thumbnail;
exports.imageIds = imageIds;
exports.toImageDef = toImageDef;
exports.images = images;
exports.textures = textures;
exports.script = script;
exports.generator = generator;
/* thumbnail Not a pure module */
