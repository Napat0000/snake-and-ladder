namespace SpriteKind {
    export const Snake = SpriteKind.create()
    export const Player1 = SpriteKind.create()
    export const Player2 = SpriteKind.create()
}
function P2_working () {
    if (tiles.locationXY(P2location, tiles.XY.row) == 6) {
        if (tiles.locationXY(P2location, tiles.XY.column) == 9) {
            Player2.y += -16
        } else {
            Player2.x += 16
        }
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 5) {
        if (tiles.locationXY(P2location, tiles.XY.column) == 0) {
            Player2.y += -16
        } else {
            Player2.x += -16
        }
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 4) {
        if (tiles.locationXY(P2location, tiles.XY.column) == 9) {
            Player2.y += -16
        } else {
            Player2.x += 16
        }
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 3) {
        if (tiles.locationXY(P2location, tiles.XY.column) == 0) {
            Player2.y += -16
        } else {
            Player2.x += -16
        }
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 2) {
        if (tiles.locationXY(P2location, tiles.XY.column) == 9) {
            Player2.y += -16
        } else {
            Player2.x += 16
        }
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 1) {
        if (tiles.locationXY(P2location, tiles.XY.column) == 0) {
            Player2.y += -16
        } else {
            Player2.x += -16
        }
    } else {
        if (tiles.locationXY(P2location, tiles.XY.column) == 9) {
            Player2.y += -16
        } else {
            Player2.x += 16
        }
    }
}
scene.onOverlapTile(SpriteKind.Player1, assets.tile`myTile1`, function (sprite, location) {
    game.splash("Player1 Winner!!", "Press A to rematch")
    game.reset()
})
function Sprite_setup () {
    Player1 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . 2 4 4 4 4 4 4 4 4 4 4 4 4 2 . 
        . 2 4 5 5 5 5 5 5 5 5 5 5 4 2 . 
        . 2 4 5 5 5 5 5 5 5 5 5 5 4 2 . 
        . 2 4 5 1 1 5 5 5 5 1 5 5 4 2 . 
        . 2 4 5 1 5 1 5 5 1 1 5 5 4 2 . 
        . 2 4 5 1 1 5 5 5 5 1 5 5 4 2 . 
        . 2 4 5 1 5 5 5 5 5 1 5 5 4 2 . 
        . 2 4 5 1 5 5 5 5 5 1 5 5 4 2 . 
        . 2 4 5 1 5 5 5 5 5 1 5 5 4 2 . 
        . 2 4 5 5 5 5 5 5 5 5 5 5 4 2 . 
        . 2 4 5 5 5 5 5 5 5 5 5 5 4 2 . 
        . 2 4 4 4 4 4 4 4 4 4 4 4 4 2 . 
        . 2 2 2 2 2 2 2 2 2 2 2 2 2 2 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player1)
    Player2 = sprites.create(img`
        . . . . . . . . . . . . . . . . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . 6 7 7 7 7 7 7 7 7 7 7 7 7 6 . 
        . 6 7 5 5 5 5 5 5 5 5 5 5 7 6 . 
        . 6 7 5 5 5 5 5 5 5 5 5 5 7 6 . 
        . 6 7 5 1 1 5 5 5 1 1 5 5 7 6 . 
        . 6 7 5 1 5 1 5 5 1 5 1 5 7 6 . 
        . 6 7 5 1 1 5 5 5 5 5 1 5 7 6 . 
        . 6 7 5 1 5 5 5 5 5 1 5 5 7 6 . 
        . 6 7 5 1 5 5 5 5 1 5 5 5 7 6 . 
        . 6 7 5 1 5 5 5 5 1 1 1 5 7 6 . 
        . 6 7 5 5 5 5 5 5 5 5 5 5 7 6 . 
        . 6 7 5 5 5 5 5 5 5 5 5 5 7 6 . 
        . 6 7 7 7 7 7 7 7 7 7 7 7 7 6 . 
        . 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
        . . . . . . . . . . . . . . . . 
        `, SpriteKind.Player2)
    tiles.placeOnRandomTile(Player1, assets.tile`myTile2`)
    tiles.placeOnRandomTile(Player2, assets.tile`myTile2`)
    P1loc = 1
    P2loc = 1
    P1location = tiles.locationOfSprite(Player1)
    P2location = tiles.locationOfSprite(Player2)
    Dice = 0
    Trun = randint(0, 1)
    Diced = false
}
scene.onOverlapTile(SpriteKind.Player2, assets.tile`myTile1`, function (sprite, location) {
    game.splash("Player2 Winner!!", "Press A to rematch")
    game.reset()
})
function P1_working () {
    if (tiles.locationXY(P1location, tiles.XY.row) == 6) {
        if (tiles.locationXY(P1location, tiles.XY.column) == 9) {
            Player1.y += -16
        } else {
            Player1.x += 16
        }
    } else if (tiles.locationXY(P1location, tiles.XY.row) == 5) {
        if (tiles.locationXY(P1location, tiles.XY.column) == 0) {
            Player1.y += -16
        } else {
            Player1.x += -16
        }
    } else if (tiles.locationXY(P1location, tiles.XY.row) == 4) {
        if (tiles.locationXY(P1location, tiles.XY.column) == 9) {
            Player1.y += -16
        } else {
            Player1.x += 16
        }
    } else if (tiles.locationXY(P1location, tiles.XY.row) == 3) {
        if (tiles.locationXY(P1location, tiles.XY.column) == 0) {
            Player1.y += -16
        } else {
            Player1.x += -16
        }
    } else if (tiles.locationXY(P1location, tiles.XY.row) == 2) {
        if (tiles.locationXY(P1location, tiles.XY.column) == 9) {
            Player1.y += -16
        } else {
            Player1.x += 16
        }
    } else if (tiles.locationXY(P1location, tiles.XY.row) == 1) {
        if (tiles.locationXY(P1location, tiles.XY.column) == 0) {
            Player1.y += -16
        } else {
            Player1.x += -16
        }
    } else {
        if (tiles.locationXY(P1location, tiles.XY.column) == 9) {
            Player1.y += -16
        } else {
            Player1.x += 16
        }
    }
}
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    if (!(Diced)) {
        Dice = randint(1, 6)
        pause(1000)
        Diced = true
    }
})
function Gamesetup () {
    Generator = sprites.create(img`
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 
        `, SpriteKind.Snake)
    Generator.setPosition(24, 8)
    Generator.destroy()
}
let P2level = 0
let Generator: Sprite = null
let Diced = false
let Trun = 0
let P1location: tiles.Location = null
let Player1: Sprite = null
let Player2: Sprite = null
let P2location: tiles.Location = null
let Dice = 0
let P2loc = 0
let P1loc = 0
tiles.loadMap(tiles.createMap(tilemap`level1`))
Gamesetup()
Sprite_setup()
let P1text = textsprite.create("P1 : " + P1loc)
let P2text = textsprite.create("P2 : " + P2loc)
let Dicetext = textsprite.create("Dice : " + Dice)
P1text.setPosition(20, scene.screenHeight() - 4)
Dicetext.setPosition(80, scene.screenHeight() - 4)
P2text.setPosition(scene.screenWidth() - 30, scene.screenHeight() - 4)
forever(function () {
    if (tiles.locationXY(P2location, tiles.XY.row) == 0) {
        P2level = 0
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 1) {
        P2level = 1
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 2) {
        P2level = 0
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 3) {
        P2level = 1
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 4) {
        P2level = 0
    } else if (tiles.locationXY(P2location, tiles.XY.row) == 5) {
        P2level = 1
    } else {
        P2level = 0
    }
})
forever(function () {
    if (Diced) {
        if (Dice > 0) {
            if (Trun == 0) {
                P1_working()
                P1loc += 1
                Dice += -1
            } else {
                P2_working()
                P2loc += 1
                Dice += -1
            }
            pause(500)
        }
    }
})
forever(function () {
    P1location = tiles.locationOfSprite(Player1)
    P2location = tiles.locationOfSprite(Player2)
})
forever(function () {
    if (Trun == 0) {
        Dicetext.setText("P1trun : " + Dice)
        if (Diced) {
            if (Dice == 0) {
                Trun = 1
            }
        }
    } else {
        Dicetext.setText("P2trun : " + Dice)
        if (Diced) {
            if (Dice == 0) {
                Trun = 0
            }
        }
    }
    if (Dice == 0 && Diced == true) {
        Diced = false
    }
    Dicetext.setPosition(80, scene.screenHeight() - 4)
})
forever(function () {
    P1text.setText("P1 : " + P1loc)
    P2text.setText("P2 : " + P2loc)
})
