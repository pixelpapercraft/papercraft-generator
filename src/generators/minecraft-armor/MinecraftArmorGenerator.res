let requireImage = id => Generator.requireImage("./images/" ++ id ++ ".png")
let requireTexture = id => Generator.requireImage("./textures/" ++ id ++ ".png")
let requirePalette = id => requireTexture("trims/color_palettes/" ++ id)
let requireTrim = id => requireTexture("trims/models/armor/" ++ id)

let id = "minecraft-armor"

let name = "Minecraft Armor"

let history = []

let thumbnail: Generator.thumnbnailDef = {
  url: Generator.requireImage("./thumbnail/v2-thumbnail-256.jpeg"),
}

let instructions = `
## How to use the Minecraft armor Generator?

We don't know 
`

let images: array<Generator.imageDef> = [
  {id: "Background", url: requireImage("Background")},
  {id: "Foreground", url: requireImage("Foreground")},
  {id: "SteveTabs", url: requireImage("SteveTabs")},
  {id: "SteveFolds", url: requireImage("SteveFolds")},
  {id: "AlexTabs", url: requireImage("AlexTabs")},
  {id: "AlexFolds", url: requireImage("AlexFolds")},
  {id: "Labels", url: requireImage("Labels")},
]

let textures: array<Generator.textureDef> = [
  {
    id: "Steve",
    url: requireTexture("steve"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Alex",
    url: requireTexture("alex"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Debug",
    url: requireTexture("SkinSteveReference64x64"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Helmet",
    url: requireTexture("netherite_layer_1"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Chestplate",
    url: requireTexture("diamond_layer_1"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Leggings",
    url: requireTexture("diamond_layer_2"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Boots",
    url: requireTexture("diamond_layer_1"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Helmet Overlay",
    url: requireTexture("leather_layer_1_overlay"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Chestplate Overlay",
    url: requireTexture("leather_layer_1_overlay"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Leggings Overlay",
    url: requireTexture("leather_layer_2_overlay"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Boots Overlay",
    url: requireTexture("leather_layer_1_overlay"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Chainmail",
    url: requireTexture("chainmail_layer_1"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Chainmail ",
    url: requireTexture("chainmail_layer_2"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Diamond",
    url: requireTexture("diamond_layer_1"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Diamond ",
    url: requireTexture("diamond_layer_2"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Gold",
    url: requireTexture("gold_layer_1"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Gold ",
    url: requireTexture("gold_layer_2"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Iron",
    url: requireTexture("iron_layer_1"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Iron ",
    url: requireTexture("iron_layer_2"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Netherite",
    url: requireTexture("netherite_layer_1"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Netherite ",
    url: requireTexture("netherite_layer_2"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Leather",
    url: requireTexture("leather_layer_1"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Leather Overlay",
    url: requireTexture("leather_layer_1_overlay"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Leather ",
    url: requireTexture("leather_layer_2"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Leather  Overlay",
    url: requireTexture("leather_layer_2_overlay"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Turtle Shell",
    url: requireTexture("turtle_layer_1"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Notch",
    url: requireTexture("Notch"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Steve",
    url: requireTexture("steve"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Helmet Trim Material",
    url: requirePalette("amethyst"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Chestplate Trim Material",
    url: requirePalette("amethyst"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Leggings Trim Material",
    url: requirePalette("amethyst"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Boots Trim Material",
    url: requirePalette("amethyst"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Amethyst  ",
    url: requirePalette("amethyst"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Copper  ",
    url: requirePalette("copper"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Diamond Darker  ",
    url: requirePalette("diamond_darker"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Diamond  ",
    url: requirePalette("diamond"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Emerald  ",
    url: requirePalette("emerald"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Gold Darker  ",
    url: requirePalette("gold_darker"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Gold  ",
    url: requirePalette("gold"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Iron Darker  ",
    url: requirePalette("iron_darker"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Iron  ",
    url: requirePalette("iron"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Lapis Lazuli  ",
    url: requirePalette("lapis"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Netherite Darker  ",
    url: requirePalette("netherite_darker"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Netherite  ",
    url: requirePalette("netherite"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Quartz  ",
    url: requirePalette("quartz"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Redstone  ",
    url: requirePalette("redstone"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Trim Palette  ",
    url: requirePalette("trim_palette"),
    standardWidth: 8,
    standardHeight: 1,
  },
  {
    id: "Helmet Trim",
    url: requireTrim("coast"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Chestplate Trim",
    url: requireTrim("coast"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Leggings Trim",
    url: requireTrim("coast_leggings"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Boots Trim",
    url: requireTrim("coast"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Coast ",
    url: requireTrim("coast_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Coast",
    url: requireTrim("coast"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Dune ",
    url: requireTrim("dune_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Dune",
    url: requireTrim("dune"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Eye ",
    url: requireTrim("eye_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Eye",
    url: requireTrim("eye"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Host ",
    url: requireTrim("host_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Host",
    url: requireTrim("host"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Raiser ",
    url: requireTrim("raiser_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Raiser",
    url: requireTrim("raiser"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Rib ",
    url: requireTrim("rib_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Rib",
    url: requireTrim("rib"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Sentry ",
    url: requireTrim("sentry_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Sentry",
    url: requireTrim("sentry"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Shaper ",
    url: requireTrim("shaper_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Shaper",
    url: requireTrim("shaper"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Silence ",
    url: requireTrim("silence_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Silence",
    url: requireTrim("silence"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Snout ",
    url: requireTrim("snout_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Snout",
    url: requireTrim("snout"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Spire ",
    url: requireTrim("spire_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Spire",
    url: requireTrim("spire"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Tide ",
    url: requireTrim("tide_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Tide",
    url: requireTrim("tide"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Vex ",
    url: requireTrim("vex_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Vex",
    url: requireTrim("vex"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Ward ",
    url: requireTrim("ward_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Ward",
    url: requireTrim("ward"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Wayfinder ",
    url: requireTrim("wayfinder_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Wayfinder",
    url: requireTrim("wayfinder"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Wild ",
    url: requireTrim("wild_leggings"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Wild",
    url: requireTrim("wild"),
    standardWidth: 64,
    standardHeight: 32,
  },
  {
    id: "Enchanted Glint",
    url: requireTexture("enchanted_glint_entity"),
    standardWidth: 128,
    standardHeight: 128,
  },
]

// Armor model
let make2 = ((w, h, d): Minecraft.scale): Minecraft.Cuboid.Source.t => {
  top: (d, 0, w, d * 2),
  bottom: (d + w, 0, w, d * 2),
  front: (d, d * 2, w, h * 2),
  right: (0, d * 2, d, h * 2),
  left: (d + w, d * 2, d, h * 2),
  back: (d * 2 + w, d * 2, w, h * 2),
}
let old: Minecraft.Character.t = {
  base: {
    head: make2((8, 8, 8))->Minecraft.Character.translate((0, 0)),
    rightArm: make2((4, 12, 4))->Minecraft.Character.translate((40, 32)),
    leftArm: make2((4, 12, 4))->Minecraft.Character.translate((40, 32)),
    body: make2((8, 12, 4))->Minecraft.Character.translate((16, 32)),
    rightLeg: make2((4, 12, 4))->Minecraft.Character.translate((0, 32)),
    leftLeg: make2((4, 12, 4))->Minecraft.Character.translate((0, 32)),
  },
  overlay: {
    head: make2((8, 8, 8))->Minecraft.Character.translate((32, 0)),
    rightArm: make2((0, 0, 0))->Minecraft.Character.translate((0, 0)),
    leftArm: make2((0, 0, 0))->Minecraft.Character.translate((0, 0)),
    body: make2((0, 0, 0))->Minecraft.Character.translate((0, 0)),
    rightLeg: make2((0, 0, 0))->Minecraft.Character.translate((0, 0)),
    leftLeg: make2((0, 0, 0))->Minecraft.Character.translate((0, 0)),
  },
}

let materials = ["Leather", "Chainmail", "Gold", "Iron", "Diamond", "Netherite", "Debug"]

let materials2 = ["Leather ", "Chainmail ", "Gold ", "Iron ", "Diamond ", "Netherite ", "Debug"]

let trimTemplates = [
  "Coast",
  "Dune",
  "Eye",
  "Host",
  "Raiser",
  "Rib",
  "Sentry",
  "Shaper",
  "Silence",
  "Snout",
  "Spire",
  "Tide",
  "Vex",
  "Ward",
  "Wayfinder",
  "Wild",
]
let trimTemplates2 = [
  "Coast ",
  "Dune ",
  "Eye ",
  "Host ",
  "Raiser ",
  "Rib ",
  "Sentry ",
  "Shaper ",
  "Silence ",
  "Snout ",
  "Spire ",
  "Tide ",
  "Vex ",
  "Ward ",
  "Wayfinder ",
  "Wild ",
]

let trimMaterials = [
  "Amethyst  ",
  "Copper  ",
  "Diamond Darker  ",
  "Diamond  ",
  "Emerald  ",
  "Gold Darker  ",
  "Gold  ",
  "Iron Darker  ",
  "Iron  ",
  "Lapis Lazuli  ",
  "Netherite Darker  ",
  "Netherite  ",
  "Redstone  ",
  "Quartz  ",
]

let char = old

let script = () => {
  let getTint = (colorId: string) => {
    // Define user variables
    Generator.defineSelectInput(
      colorId,
      [
        "Leather",
        "Black",
        "Red",
        "Green",
        "Brown",
        "Blue",
        "Purple",
        "Cyan",
        "Light Gray",
        "Gray",
        "Pink",
        "Lime",
        "Yellow",
        "Light Blue",
        "Magenta",
        "Orange",
        "White",
      ],
    )

    let hex = switch Generator.getSelectInputValue(colorId) {
    | "Leather" => "A06540"
    | "Black" => "1D1D21"
    | "Red" => "B02E26"
    | "Green" => "5E7C16"
    | "Brown" => "835432"
    | "Blue" => "3C44AA"
    | "Purple" => "8932B8"
    | "Cyan" => "169C9C"
    | "Light Gray" => "9D9D97"
    | "Gray" => "474F52"
    | "Pink" => "F38BAA"
    | "Lime" => "80C71F"
    | "Yellow" => "FED83D"
    | "Light Blue" => "3AB3DA"
    | "Magenta" => "C74EBD"
    | "Orange" => "F9801D"
    | "White" => "F9FFFE"
    | _ => "A06540"
    }
    #MultiplyHex(hex)
  }
  let rgbaToHex: ((int, int, int, int)) => string = %raw(`
  function rgbaToHex(rgba) {
    let r = rgba[0].toString(16);
    let g = rgba[1].toString(16);
    let b = rgba[2].toString(16);
    let a = rgba[3].toString(16);

    if (r.length == 1)
      r = "0" + r;
    if (g.length == 1)
      g = "0" + g;
    if (b.length == 1)
      b = "0" + b;
    if (a.length == 1)
      a = "0" + a;

    return "#" + r + g + b;
  }
`)

  let getTexturePixelColor = (id, x, y) => {
    switch Generator.getTexturePixelColor(id, x, y) {
    | None => "Unknown"
    | Some(color) => rgbaToHex(color)
    }
  }

  let getPalette = (id, length) =>
    Js.Array.map(x => getTexturePixelColor(id, x, 0), Belt.Array.range(0, length - 1))
  let baseColors = getPalette("Trim Palette  ", 8)

  let drawHead = (textureId: string, showHeadOverlay: bool, blend: Generator_Texture.blend) => {
    let (ox, oy) = (137, 21)
    let scale = (80, 80, 80)
    Minecraft.drawCuboid(textureId, char.base.head, (ox, oy), scale, ~blend, ())
    if showHeadOverlay {
      Minecraft.drawCuboid(textureId, char.overlay.head, (ox, oy), scale, ~blend, ())
    }
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ())
    } */
  }

  let drawChestplateBody = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (185, 309)
    let scale = (64, 96, 48)
    Minecraft.drawCuboid(textureId, char.base.body, (ox, oy), scale, ~blend, ())
    Generator.drawTexture(
      textureId,
      char.base.body.back,
      (ox + 48, oy - 96, 64, 96),
      ~rotate=180.0,
      ~blend,
      (),
    ) // Back texture that goes around over the head
    Generator.drawTexture(
      textureId,
      (33, 48, 6, 16),
      (ox + 112, oy - 96, 48, 64),
      ~rotate=180.0,
      ~blend,
      (),
    ) // Tab that goes insie the back face
    Generator.drawTexture(textureId, (20, 42, 8, 2), (ox + 48, oy, 64, 48), ~blend, ()) // Improvised top texture, since no default armor texture has one, and one is needed to facilitate the over the head design of the armor

    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ())
    } */
  }

  let drawRightShoulder = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (-27, 169)
    let scale = (40, 96, 48)
    Minecraft.drawCuboid(textureId, char.base.rightArm, (ox, oy), scale, ~blend, ~rotate=90.0, ())
    Generator.drawTexture(
      textureId,
      char.base.rightArm.back,
      (ox + 192, oy + 83, 40, 96),
      ~blend,
      ~rotate=270.0,
      (),
    ) // Tab that goes inside the back face
    Generator.drawTexture(
      textureId,
      char.base.rightArm.back,
      (ox + 192, oy + 48, 40, 96),
      ~blend,
      ~rotate=270.0,
      (),
    ) // Back texture to loop around
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ())
    } */
  }
  let drawLeftShoulder = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (445, 169)
    let scale = (40, 96, 48)
    //drawLeftCuboid(textureId, char.base.leftArm, (ox, oy), blend)
    Minecraft.drawCuboid(
      textureId,
      char.base.leftArm,
      (ox, oy),
      scale,
      ~blend,
      ~flip=#Horizontal,
      ~rotate=270.0,
      (),
    )
    Generator.drawTexture(
      textureId,
      char.base.leftArm.back,
      (ox - 56, oy + 48, 40, 96),
      ~blend,
      ~flip=#Horizontal,
      ~rotate=90.0,
      (),
    )
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ~flip=#Horizontal, ())
    } */
  }

  let drawLeggingsBody = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (193, 389)
    let scale = (64, 96, 40)
    Minecraft.drawCuboid(textureId, char.base.body, (ox, oy), scale, ~blend, ())
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ())
    } */
  }
  let drawRightLegging = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (49, 541)
    let scale = (32, 96, 40)
    Minecraft.drawCuboid(textureId, char.base.rightLeg, (ox, oy), scale, ~blend, ()) // Boots
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ())
    } */
  }
  let drawLeftLegging = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (401, 541)
    let scale = (32, 96, 40)
    Minecraft.drawCuboid(
      textureId,
      char.base.leftLeg,
      (ox, oy),
      scale,
      ~blend,
      ~flip=#Horizontal,
      (),
    ) // Boots- romove
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ~flip=#Horizontal, ())
    } */
  }

  let drawRightBoot = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (35, 597)
    let scale = (40, 96, 48)
    Minecraft.drawCuboid(textureId, char.base.rightLeg, (ox, oy), scale, ~blend, ()) // Boots
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ())
    } */
  }
  let drawLeftBoot = (textureId: string, blend: Generator_Texture.blend) => {
    let (ox, oy) = (383, 597)
    let scale = (40, 96, 48)
    Minecraft.drawCuboid(
      textureId,
      char.base.leftLeg,
      (ox, oy),
      scale,
      ~blend,
      ~flip=#Horizontal,
      (),
    ) // Boots- romove
    /* if showFolds {
      Generator.drawFoldLineCuboid((ox, oy), scale, ~flip=#Horizontal, ())
    } */
  }

  /* let drawFolds = () => {
    Generator.drawImage("SteveFolds", (0, 0))
    // Later replace with drawLineFold functions
  } */

  let drawHelmet = (showHeadOverlay: bool) => {
    Generator.defineTextureInput(
      "Helmet",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: Belt.Array.concat(materials, ["Turtle Shell"]),
      },
    )
    let tintHelmet = Generator.defineAndGetBooleanInput("Tint Helmet", false)
    if tintHelmet {
      let helmetColor = getTint("Helmet Color")
      drawHead("Helmet", showHeadOverlay, helmetColor)
      Generator.defineTextureInput(
        "Helmet Overlay",
        {
          standardWidth: 64,
          standardHeight: 64,
          choices: ["Leather Overlay"],
        },
      )
      drawHead("Helmet Overlay", showHeadOverlay, #None)
    } else {
      drawHead("Helmet", showHeadOverlay, #None)
    }
    Generator.defineRegionInput((137, 21, 320, 160), () => {
      Generator.setBooleanInputValue("Show Head Overlay", !showHeadOverlay)
    })
  }

  let drawChestplate = () => {
    Generator.defineTextureInput(
      "Chestplate",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: materials,
      },
    )
    let tintChestplate = Generator.defineAndGetBooleanInput("Tint Chestplate", false)
    if tintChestplate {
      let chestplateColor = getTint("Chestplate Color")
      drawChestplateBody("Chestplate", chestplateColor)
      drawLeftShoulder("Chestplate", chestplateColor)
      drawRightShoulder("Chestplate", chestplateColor)
      Generator.defineTextureInput(
        "Chestplate Overlay",
        {
          standardWidth: 64,
          standardHeight: 64,
          choices: ["Leather Overlay"],
        },
      )
      drawChestplateBody("Chestplate Overlay", #None)
      drawLeftShoulder("Chestplate Overlay", #None)
      drawRightShoulder("Chestplate Overlay", #None)
    } else {
      drawChestplateBody("Chestplate", #None)
      drawLeftShoulder("Chestplate", #None)
      drawRightShoulder("Chestplate", #None)
    }
  }

  let drawLeggings = () => {
    Generator.defineTextureInput(
      "Leggings",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: materials2,
      },
    )
    let tintLeggings = Generator.defineAndGetBooleanInput("Tint Leggings", false)
    if tintLeggings {
      let leggingsColor = getTint("Leggings Color")
      drawChestplateBody("Leggings", leggingsColor)
      drawLeftBoot("Leggings", leggingsColor)
      drawRightBoot("Leggings", leggingsColor)
      Generator.defineTextureInput(
        "Leggings Overlay",
        {
          standardWidth: 64,
          standardHeight: 64,
          choices: ["Leather Overlay"],
        },
      )
      drawLeggingsBody("Leggings Overlay", #None)
      drawRightLegging("Leggings Overlay", #None)
      drawLeftLegging("Leggings Overlay", #None)
    } else {
      drawLeggingsBody("Leggings", #None)
      drawRightLegging("Leggings", #None)
      drawLeftLegging("Leggings", #None)
    }
  }

  let drawBoots = () => {
    Generator.defineTextureInput(
      "Boots",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: materials,
      },
    )
    let tintBoots = Generator.defineAndGetBooleanInput("Tint Boots", false)
    if tintBoots {
      let bootsColor = getTint("Boots Color")
      drawLeftBoot("Boots", bootsColor)
      drawRightBoot("Boots", bootsColor)
      Generator.defineTextureInput(
        "Boots Overlay",
        {
          standardWidth: 64,
          standardHeight: 64,
          choices: ["Leather Overlay"],
        },
      )
      drawLeftBoot("Boots Overlay", #None)
      drawRightBoot("Boots Overlay", #None)
    } else {
      drawLeftBoot("Boots", #None)
      drawRightBoot("Boots", #None)
    }
  }

  let drawHelmetTrim = (showHeadOverlay: bool) => {
    Generator.defineTextureInput(
      "Helmet Trim",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: trimTemplates,
      },
    )
    Generator.defineTextureInput(
      "Helmet Trim Material",
      {
        standardWidth: 8,
        standardHeight: 1,
        choices: trimMaterials,
      },
    )
    let helmetTrimColors = getPalette("Helmet Trim Material", 8)
    drawHead("Helmet Trim", showHeadOverlay, #ReplaceHex(baseColors, helmetTrimColors))
  }

  let drawChestplateTrim = () => {
    Generator.defineTextureInput(
      "Chestplate Trim",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: trimTemplates,
      },
    )
    Generator.defineTextureInput(
      "Chestplate Trim Material",
      {
        standardWidth: 8,
        standardHeight: 1,
        choices: trimMaterials,
      },
    )
    let chestplateTrimColors = getPalette("Chestplate Trim Material", 8)
    drawChestplateBody("Chestplate Trim", #ReplaceHex(baseColors, chestplateTrimColors))
    drawLeftShoulder("Chestplate Trim", #ReplaceHex(baseColors, chestplateTrimColors))
    drawRightShoulder("Chestplate Trim", #ReplaceHex(baseColors, chestplateTrimColors))
  }

  let drawLeggingsTrim = () => {
    Generator.defineTextureInput(
      "Leggings Trim",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: trimTemplates2,
      },
    )
    Generator.defineTextureInput(
      "Leggings Trim Material",
      {
        standardWidth: 8,
        standardHeight: 1,
        choices: trimMaterials,
      },
    )
    let leggingsTrimColors = getPalette("Leggings Trim Material", 8)
    drawLeggingsBody("Leggings Trim", #ReplaceHex(baseColors, leggingsTrimColors))
    drawRightLegging("Leggings Trim", #ReplaceHex(baseColors, leggingsTrimColors))
    drawLeftLegging("Leggings Trim", #ReplaceHex(baseColors, leggingsTrimColors))
  }

  let drawBootsTrim = () => {
    Generator.defineTextureInput(
      "Boots Trim",
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: trimTemplates,
      },
    )
    Generator.defineTextureInput(
      "Boots Trim Material",
      {
        standardWidth: 8,
        standardHeight: 1,
        choices: trimMaterials,
      },
    )
    let bootsTrimColors = getPalette("Boots Trim Material", 8)

    drawLeftBoot("Boots Trim", #ReplaceHex(baseColors, bootsTrimColors))
    drawRightBoot("Boots Trim", #ReplaceHex(baseColors, bootsTrimColors))
  }

  // Inputs

  Generator.defineBooleanInput("Show Folds", true)
  Generator.defineBooleanInput("Show Labels", true)

  // Draw

  //let showFolds = Generator.getBooleanInputValue("Show Folds")
  //let showLabels = Generator.getBooleanInputValue("Show Labels")

  let showHeadOverlay = Generator.getBooleanInputValueWithDefault("Show Head Overlay", true)

  // Helmet
  drawHelmet(showHeadOverlay)
  let trimHelmet = Generator.defineAndGetBooleanInput("Trim Helmet", false)
  if trimHelmet {
    drawHelmetTrim(showHeadOverlay)
  }

  // Chestplate
  drawChestplate()
  let trimChestplate = Generator.defineAndGetBooleanInput("Trim Chestplate", false)
  if trimChestplate {
    drawChestplateTrim()
  }

  // Leggings
  drawLeggings()
  let trimLeggings = Generator.defineAndGetBooleanInput("Trim Leggings", false)
  if trimLeggings {
    drawLeggingsTrim()
  }

  // Boots
  drawBoots()
  let trimBoots = Generator.defineAndGetBooleanInput("Trim Boots", false)
  if trimBoots {
    drawBootsTrim()
  }

  // Foreground
  //Generator.fillBackgroundColor("#a71810") //WithWhite()
  Generator.drawImage("Foreground", (0, 0))

  // Folds

  /* if showFolds {
    drawFolds()
  }

  // Labels

  if showLabels {
    Generator.drawImage("Labels", (0, 0))
  }*/
}

let generator: Generator.generatorDef = {
  id: id,
  name: name,
  history: history,
  thumbnail: Some(thumbnail),
  video: None,
  instructions: Some(<Generator.Markdown> {instructions} </Generator.Markdown>),
  images: images,
  textures: textures,
  script: script,
}
