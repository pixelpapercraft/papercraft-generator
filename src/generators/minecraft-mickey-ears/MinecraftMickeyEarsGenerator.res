let requireImage = id => Generator.requireImage("./images/" ++ id ++ ".png")
let requireTexture = id => Generator.requireImage("./textures/" ++ id ++ ".png")

let id = "minecraft-mickey-ears"

let name = "Minecraft Mickey Ears"

let history = [
  "Originally developed by ArgentiCityZen14.",
]

let instructions = `
## How to use the Minecraft Mickey Ears Generator?

1. Select your Minecraft skin file.
2. Choose the your Minecraft skin file model type.
3. Download and print your Mickey Ears papercraft.
`

let thumbnail: Generator.thumnbnailDef = {
  url: Generator.requireImage("./thumbnail/v2-thumbnail-256.jpeg"),
}

let images: array<Generator.imageDef> = [
  {id: "Background", url: requireImage("Background")},
  {id: "Tabs", url: requireImage("Tabs")},
  {id: "Folds", url: requireImage("Folds")},
    {id: "Minnie Bow", url: requireImage("Minnie-Bow")},
]

let textures: array<Generator.textureDef> = [
  {
    id: "Skin 1",
    url: requireTexture("Original"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Original",
    url: requireTexture("Original"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Steve",
    url: requireTexture("Steve"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Alex",
    url: requireTexture("Alex"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Zombie",
    url: requireTexture("Zombie"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Enderman",
    url: requireTexture("Enderman"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Skeleton",
    url: requireTexture("Skeleton"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Wither Skeleton",
    url: requireTexture("Wither_Skeleton"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Creeper",
    url: requireTexture("Creeper"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Blaze",
    url: requireTexture("Blaze"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "R2-D2",
    url: requireTexture("R2-D2"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Mickey",
    url: requireTexture("Mickey"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "EPCOT",
    url: requireTexture("Epcot"),
    standardWidth: 64,
    standardHeight: 64,
  },
  {
    id: "Minnie",
    url: requireTexture("Minnie"),
    standardWidth: 64,
    standardHeight: 64,
  },
]

let script = () => {
  // Define user inputs
  for i in 1 to 1 {
    Generator.defineTextureInput(
      "Skin " ++ Js.Int.toString(i),
      {
        standardWidth: 64,
        standardHeight: 64,
        choices: [
          "Original",
          "Steve",
          "Alex",
          "Zombie",
          "Enderman",
          "Skeleton",
          "Wither Skeleton",
          "Creeper",
          "Blaze",
          "R2-D2",
          "Mickey",
          "EPCOT",
          "Minnie",
        ],
      },
    )
  }

  // Define and get user variables
  let showFolds = Generator.defineAndGetBooleanInput("Show Folds", true)
  let actionFigure = Generator.defineAndGetBooleanInput("Minnie Bow", false)

  let steve = Minecraft.Character.steve

  // Helper Function to draw heads
  let drawHead = (textureId, x, y) => {
    let x = x - 64
    let y = y - 64
    if Generator.hasTexture(textureId) {
      // Draw Tabs
      Generator.drawImage("Tabs", (x - 26, y - 1))
      // Define Overlay Input
      let showOverlay = Generator.getBooleanInputValueWithDefault(
        "Show " ++ textureId ++ " Overlay",
        true,
      )
      Generator.defineRegionInput((x, y, 256, 192), () => {
        Generator.setBooleanInputValue("Show " ++ textureId ++ " Overlay", !showOverlay)
      })
      // Draw Head
      Minecraft.drawCuboid(textureId, steve.base.head, (x, y), (64, 64, 64), ())
      if showOverlay {
        Minecraft.drawCuboid(textureId, steve.overlay.head, (x, y), (64, 64, 64), ())
      }
      // draw Folds and Action Figure Cut lines
      if showFolds {
        //Generator.drawFoldLineCuboid((x, y), (64, 64, 64), ())

        Generator.drawImage("Folds", (x - 26, y - 1))
      }
      if actionFigure {
        Generator.drawImage("Minnie Bow", (x + 64, y + 128))
      }
    }
  }

  // Background
  Generator.drawImage("Background", (0, 0))

  // Draw the heads
  drawHead("Skin 1", 99, 79)
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
