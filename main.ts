namespace SpriteKind {
    export const House = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    Speed = 2
    Look = 1
    animation.runImageAnimation(
    HeRoy,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f e e e e f f . . . . 
        . . . f e e e f f e e e f . . . 
        . . f f f f f 2 2 f f f f f . . 
        . . f f e 2 e 2 2 e 2 e f f . . 
        . . f e 2 f 2 f f 2 f 2 e f . . 
        . . f f f 2 2 e e 2 2 f f f . . 
        . f f e f 2 f e e f 2 f e f f . 
        . f e e f f e e e e f e e e f . 
        . . f e e e e e e e e e e f . . 
        . . . f e e e e e e e e f . . . 
        . . e 4 f f f f f f f f 4 e . . 
        . . 4 d f 2 2 2 2 2 2 f d 4 . . 
        . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
        . . . . . f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f f 2 f e f . . . 
        . f f f 2 f e e 2 2 f f f . . . 
        . f e 2 f f e e 2 f e e f . . . 
        f f e f f e e e f e e e f f . . 
        f f e e e e e e e e e e f d f . 
        . . f e e e e e e e e f f b f . 
        . . e f f f f f f f f 4 f b f . 
        . . 4 f 2 2 2 2 2 e d d f c f . 
        . . e f f f f f f e e 4 f f . . 
        . . . f f f . . . . . . . . . . 
        `,img`
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . f f f f f 2 2 f f f f f . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e 2 f 2 f f 2 f 2 e f . . . 
        . f f f 2 2 e e 2 2 f f f . . . 
        f f e f 2 f e e f 2 f e f f . . 
        f e e f f e e e e f e e e f . . 
        . f e e e e e e e e e e f . . . 
        . . f e e e e e e e e f . . . . 
        . e 4 f f f f f f f f 4 e . . . 
        . 4 d f 2 2 2 2 2 2 f d 4 . . . 
        . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
        . . . . f f f f f f . . . . . . 
        . . . . f f . . f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f . . . . . . . 
        . . . f f e e e e f f . . . . . 
        . . f e e e f f e e e f . . . . 
        . . f f f f 2 2 f f f f . . . . 
        . f f e 2 e 2 2 e 2 e f f . . . 
        . f e f 2 f f f 2 f 2 e f . . . 
        . f f f 2 2 e e f 2 f f f . . . 
        . f e e f 2 e e f f 2 e f . . . 
        . f e e e f e e e f f e f f . . 
        . f e e e e e e e e e e f f . . 
        . f f e e e e e e e e f . . . . 
        . f 4 f f f f f f f f e . . . . 
        . f d d e 2 2 2 2 2 f 4 . . . . 
        . f 4 e e f f f f f f e . . . . 
        . . . . . . . . f f f . . . . . 
        `],
    200,
    true
    )
    HeRoy.vy += -30
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Speed == 1) {
        animation.runImageAnimation(
        HeRoy,
        [img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . . f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . f f 4 4 4 e d d e b f . . 
            . . . f f f f f f e e f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f f . . 
            . . f e e e 4 d d d d f d d f . 
            . . . f f e e 4 e e e f b b f . 
            . . . . f 2 2 2 4 d d e b b f . 
            . . . . e 2 2 2 e d d e b f . . 
            . . . . f 4 4 4 f e e f f . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . f f f . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . f f e e e e f 2 f . . . . 
            . . f f e e e e f 2 2 2 f . . . 
            . . f e e e f f e e e e f . . . 
            . . f f f f e e 2 2 2 2 e f . . 
            . . f e 2 2 2 f f f f e 2 f . . 
            . f f f f f f f e e e f f f . . 
            . f f e 4 4 e b f 4 4 e e f . . 
            . f e e 4 d 4 1 f d d e f . . . 
            . . f e e e e e d d d f . . . . 
            . . . . f 4 d d e 4 e f . . . . 
            . . . . f e d d e 2 2 f . . . . 
            . . . f f f e e f 5 5 f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f . . . f f f . . . . 
            `],
        200,
        true
        )
        HeRoy.vx += 40
        pause(2000)
    } else if (Speed == 2) {
        animation.runImageAnimation(
        HeRoy,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f f 2 f e f . . . 
            . f f f 2 f e e 2 2 f f f . . . 
            . f e 2 f f e e 2 f e e f . . . 
            f f e f f e e e f e e e f f . . 
            f f e e e e e e e e e e f d f . 
            . . f e e e e e e e e f f b f . 
            . . e f f f f f f f f 4 f b f . 
            . . 4 f 2 2 2 2 2 e d d f c f . 
            . . e f f f f f f e e 4 f f . . 
            . . . f f f . . . . . . . . . . 
            `,img`
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . f f f f f 2 2 f f f f f . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e 2 f 2 f f 2 f 2 e f . . . 
            . f f f 2 2 e e 2 2 f f f . . . 
            f f e f 2 f e e f 2 f e f f . . 
            f e e f f e e e e f e e e f . . 
            . f e e e e e e e e e e f . . . 
            . . f e e e e e e e e f . . . . 
            . e 4 f f f f f f f f 4 e . . . 
            . 4 d f 2 2 2 2 2 2 f d 4 . . . 
            . 4 4 f 4 4 4 4 4 4 f 4 4 . . . 
            . . . . f f f f f f . . . . . . 
            . . . . f f . . f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f . . . . . . . 
            . . . f f e e e e f f . . . . . 
            . . f e e e f f e e e f . . . . 
            . . f f f f 2 2 f f f f . . . . 
            . f f e 2 e 2 2 e 2 e f f . . . 
            . f e f 2 f f f 2 f 2 e f . . . 
            . f f f 2 2 e e f 2 f f f . . . 
            . f e e f 2 e e f f 2 e f . . . 
            . f e e e f e e e f f e f f . . 
            . f e e e e e e e e e e f f . . 
            . f f e e e e e e e e f . . . . 
            . f 4 f f f f f f f f e . . . . 
            . f d d e 2 2 2 2 2 f 4 . . . . 
            . f 4 e e f f f f f f e . . . . 
            . . . . . . . . f f f . . . . . 
            `],
        200,
        true
        )
        HeRoy.vy += -40
        pause(2000)
    } else if (Speed == 3) {
        animation.runImageAnimation(
        HeRoy,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . . f e 2 f f f f f f 2 e f . . 
            . . f f f f e e e e f f f f . . 
            . f f e f b f 4 4 f b f e f f . 
            . f e e 4 1 f d d f 1 4 e e f . 
            . . f f f f d d d d d e e f . . 
            . f d d d d f 4 4 4 e e f . . . 
            . f b b b b f 2 2 2 2 f 4 e . . 
            . f b b b b f 2 2 2 2 f d 4 . . 
            . . f c c f 4 5 5 4 4 f 4 4 . . 
            . . . f f f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f f e 2 2 2 2 2 2 e e f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . f f e 4 1 f d d f 1 4 e f . . 
            f d f f e 4 d d d d 4 e f e . . 
            f b f e f 2 2 2 2 e d d 4 e . . 
            f b f 4 f 2 2 2 2 e d d e . . . 
            f c f . f 4 4 5 5 f e e . . . . 
            . f f . f f f f f f f . . . . . 
            . . . . f f f . . . . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f . . 
            . . e f f f f d d d 4 e f . . . 
            . . f d d d d f 2 2 2 f e f . . 
            . . f b b b b f 2 2 2 f 4 e . . 
            . . f b b b b f 5 4 4 f . . . . 
            . . . f c c f f f f f f . . . . 
            . . . . f f . . . f f f . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . f f f f . . . . . . 
            . . . . f f f 2 2 f f f . . . . 
            . . . f f f 2 2 2 2 f f f . . . 
            . . f f f e e e e e e f f f . . 
            . . f e e 2 2 2 2 2 2 e f f . . 
            . f f e 2 f f f f f f 2 e f f . 
            . f f f f f e e e e f f f f f . 
            . . f e f b f 4 4 f b f e f . . 
            . . f e 4 1 f d d f 1 4 e f f . 
            . . e f e 4 d d d d 4 e f f d f 
            . . e 4 d d e 2 2 2 2 f e f b f 
            . . . e d d e 2 2 2 2 f 4 f b f 
            . . . . e e f 5 5 4 4 f . f c f 
            . . . . . f f f f f f f . f f . 
            . . . . . . . . . f f f . . . . 
            `],
        200,
        true
        )
        HeRoy.vy += 40
        pause(2000)
    } else if (Speed == 4) {
        animation.runImageAnimation(
        HeRoy,
        [img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . . f e d d f 1 4 d 4 e e f . 
            . . . . f d d d e e e e e f . . 
            . . . . f e 4 e d d 4 f . . . . 
            . . . . f 2 2 e d d e f . . . . 
            . . . f f 5 5 f e e f f f . . . 
            . . . f f f f f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f . . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 4 4 4 f f . . . 
            . . . f f e e f f f f f f . . . 
            . . . . f f f . . . f f . . . . 
            `,img`
            . . . . . f f f f f f . . . . . 
            . . . . f 2 f e e e e f f . . . 
            . . . f 2 2 2 f e e e e f f . . 
            . . . f e e e e f f e e e f . . 
            . . f e 2 2 2 2 e e f f f f . . 
            . . f 2 e f f f f 2 2 2 e f . . 
            . . f f f e e e f f f f f f f . 
            . . f e e 4 4 f b e 4 4 e f f . 
            . . f f e d d f 1 4 d 4 e e f . 
            . f d d f d d d d 4 e e e f . . 
            . f b b f e e e 4 e e f f . . . 
            . f b b e d d 4 2 2 2 f . . . . 
            . . f b e d d e 2 2 2 e . . . . 
            . . . f f e e f 4 4 4 f . . . . 
            . . . . . f f f f f f . . . . . 
            . . . . . . . f f f . . . . . . 
            `,img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `],
        200,
        true
        )
        HeRoy.vx += -40
        pause(2000)
    } else {
        Speed = 0
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Look == 1) {
        music.magicWand.play()
        animation.runImageAnimation(
        HeRoy,
        [img`
            . . . . . . f f f f . . . . . . 
            . . . . f f e e e e f f . . . . 
            . . . f e e e f f e e e f . . . 
            . . f f f f f 2 2 f f f f f . . 
            . . f f e 2 e 2 2 e 2 e f f . . 
            . . f e 2 f 2 f f 2 f 2 e f . . 
            . . f f f 2 2 e e 2 2 f f f . . 
            . f f e f 2 f e e f 2 f e f f . 
            . f e e f f e e e e f e e e f . 
            . . f e e e e e e e e e e f . . 
            . . . f e e e e e e e e f . . . 
            . . e 4 f f f f f f f f 4 e . . 
            . . 4 d f 2 2 2 2 2 2 f d 4 . . 
            . . 4 4 f 4 4 4 4 4 4 f 4 4 . . 
            . . . . . f f f f f f . . . . . 
            . . . . . f f . . f f . . . . . 
            `,img`
            ........................
            .....ffff...............
            ...fff22fff.............
            ..fff2222fff............
            .fffeeeeeefff...........
            .ffe222222eef...........
            .fe2ffffff2ef...........
            .ffffeeeeffff...........
            ffefbf44fbfeff..........
            fee41fddf14eef..........
            dfeeddddd4eff...........
            bffee444edd4e...........
            bf4f2222edde............
            cf.f22cccee.............
            ff.f44cdc4f.............
            ...fffddcff.............
            ....fddcff..............
            ...cddc.................
            ...cdc..................
            ...cc...................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            ..feeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            fdfefbf44fbfeff.........
            fbfe41fddf14ef..........
            fbffe4dddd4efe..........
            fcfef22222f4e...........
            .ff4f44554f4e...........
            ....ffffffdde...........
            .....ffffedde...........
            ..........ee............
            .........ccc............
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else if (Look == 2) {
        music.magicWand.play()
        animation.runImageAnimation(
        HeRoy,
        [img`
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef............
            .ffffee2222ef...........
            .fe222ffffe2f...........
            fffffffeeefff...........
            ffe44ebf44eef...........
            fee4d41fddef............
            .feee4ddddf.............
            ..fdde444ef.............
            ..fdde22ccc.............
            ...eef22cdc.............
            ...f4444cddc............
            ....fffffcddc...........
            .....fff..cddc..........
            ...........cdc..........
            ............cc..........
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            .......ff...............
            ....ffff2ff.............
            ..ffeeeef2ff............
            .ffeeeeef22ff...........
            .feeeeffeeeef...........
            .fffffee2222ef..........
            fffe222ffffe2f..........
            ffffffffeeefff..........
            fefe44ebf44eef..........
            .fee4d4bfddef...........
            ..feee4dddee.c..........
            ...f2222eeddeccccccc....
            ...f444e44ddecddddd.....
            ...fffffeeee.ccccc......
            ..ffffffff...c..........
            ..fff..ff...............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            .......fff..............
            ....fffff2f.............
            ..ffeeeee22ff...........
            .ffeeeeee222ff..........
            .feeeefffeeeef..........
            .fffffeee2222ef.........
            fffe222fffffe2f.........
            fffffffffeeefff.....cc..
            fefe44ebbf44eef...ccdc..
            .fee4d4bbfddef..ccddcc..
            ..feee4dddddfeecdddc....
            ...f2222222eeddcdcc.....
            ...f444445e44ddccc......
            ...ffffffffeeee.........
            ...fff...ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ....ffffff..............
            ..ffeeeef2f.............
            .ffeeeef222f............
            .feeeffeeeef...cc.......
            .ffffee2222ef.cdc.......
            .fe222ffffe2fcddc.......
            fffffffeeeffcddc........
            ffe44ebf44ecddc.........
            fee4d41fddecdc..........
            .feee4dddedccc..........
            ..ffee44e4dde...........
            ...f222244ee............
            ...f2222e2f.............
            ...f444455f.............
            ....ffffff..............
            .....fff................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else if (Look == 3) {
        music.magicWand.play()
        animation.runImageAnimation(
        HeRoy,
        [img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            .......ff...............
            .....ff22ff.............
            ...fff2222fff...........
            ..fff222222fff..........
            ..fff222222fff..........
            ..feeeeeeeeeeff.........
            .ffe22222222eff.........
            .fffffeeeefffff.........
            fdfefbf44fbfeff.........
            fbfe41fddf14ef..........
            fbffe4dddd4efe..........
            fcfef22222f4e...........
            .ff4f44554f4e...........
            ....ffffffdde...........
            .....ffffedde...........
            ..........ee............
            .........ccc............
            ........cc1cc...........
            .........c1c............
            .........c1c............
            .........c1c............
            .........c1c............
            `,img`
            ......ffff..............
            ....fff22fff............
            ...fff2222fff...........
            ..fffeeeeeefff..........
            ..ffe222222eef..........
            ..fe2ffffff2ef..........
            ..ffffeeeeffff......ccc.
            .ffefbf44fbfeff....cddc.
            .ffefbf44fbfeff...cddc..
            .fee4dddddd4eef.ccddc...
            fdfeeddddd4eeffecddc....
            fbffee4444ee4fddccc.....
            fbf4f222222f1edde.......
            fcf.f222222f44ee........
            .ff.f445544f............
            ....ffffffff............
            .....ff..ff.............
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ........................
            ......ff................
            ....ff22ff..............
            ..fff2222fff............
            .fff222222fff...........
            .fff222222fff...........
            .feeeeeeeeeeff..........
            ffe22222222eff..........
            fffffeeeefffff..........
            dfefbf44fbfeff..........
            bfe41fddf14ef...........
            bffe4dddd4efe...........
            cfef22222f4e............
            ff4f44554f4e............
            ...ffffffdde............
            ....ffffedde............
            .........ee.............
            ........ccc.............
            .......cc1cc............
            ........c1c.............
            ........c1c.............
            ........c1c.............
            ........c1c.............
            `],
        200,
        true
        )
    } else if (Look == 4) {
        music.magicWand.play()
        animation.runImageAnimation(
        HeRoy,
        [img`
            ..............ffffff....
            .............f2feeeeff..
            ............f222feeeeff.
            .......cc...feeeeffeeef.
            .......cdc.fe2222eeffff.
            .......cddcf2effff222ef.
            ........cddcffeeefffffff
            .........cddce44fbe44eff
            ..........cdceddf14d4eef
            ..........cccdeddd4eeef.
            ...........edd4e44eeff..
            ............ee442222f...
            .............f2e2222f...
            .............f554444f...
            ..............ffffff....
            ................fff.....
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ...............ff.......
            .............ff2ffff....
            ............ff2feeeeff..
            ...........ff22feeeeeff.
            ...........feeeeffeeeef.
            ..........fe2222eefffff.
            ..........f2effff222efff
            ..........fffeeeffffffff
            ..........fee44fbe44efef
            ...........feddfb4d4eef.
            ..........c.eeddd4eeef..
            ....ccccccceddee2222f...
            .....dddddcedd44e444f...
            ......ccccc.eeeefffff...
            ..........c...ffffffff..
            ...............ff..fff..
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `,img`
            ........................
            ..............fff.......
            .............f2fffff....
            ...........ff22eeeeeff..
            ..........ff222eeeeeeff.
            ..........feeeefffeeeef.
            .........fe2222eeefffff.
            .........f2efffff222efff
            ..cc.....fffeeefffffffff
            ..cdcc...fee44fbbe44efef
            ..ccddcc..feddfbb4d4eef.
            ....cdddceefddddd4eeef..
            .....ccdcddee2222222f...
            ......cccdd44e544444f...
            .........eeeeffffffff...
            .............ff...fff...
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            ........................
            `],
        200,
        true
        )
    } else {
    	
    }
    Attacking = 0
})
controller.down.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, HeRoy)
    HeRoy.vy = 0
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    Speed = 4
    Look = 4
    animation.runImageAnimation(
    HeRoy,
    [img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . . f e d d f 1 4 d 4 e e f . 
        . . . . f d d d e e e e e f . . 
        . . . . f e 4 e d d 4 f . . . . 
        . . . . f 2 2 e d d e f . . . . 
        . . . f f 5 5 f e e f f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f . . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 4 4 4 f f . . . 
        . . . f f e e f f f f f f . . . 
        . . . . f f f . . . f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . . f 2 f e e e e f f . . . 
        . . . f 2 2 2 f e e e e f f . . 
        . . . f e e e e f f e e e f . . 
        . . f e 2 2 2 2 e e f f f f . . 
        . . f 2 e f f f f 2 2 2 e f . . 
        . . f f f e e e f f f f f f f . 
        . . f e e 4 4 f b e 4 4 e f f . 
        . . f f e d d f 1 4 d 4 e e f . 
        . f d d f d d d d 4 e e e f . . 
        . f b b f e e e 4 e e f f . . . 
        . f b b e d d 4 2 2 2 f . . . . 
        . . f b e d d e 2 2 2 e . . . . 
        . . . f f e e f 4 4 4 f . . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . . f f f . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        `],
    200,
    true
    )
    HeRoy.vx += -30
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, HeRoy)
    HeRoy.vx = 0
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, HeRoy)
    HeRoy.vx = 0
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    Speed = 1
    Look = 2
    animation.runImageAnimation(
    HeRoy,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . . f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . f f 4 4 4 e d d e b f . . 
        . . . f f f f f f e e f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f f . . 
        . . f e e e 4 d d d d f d d f . 
        . . . f f e e 4 e e e f b b f . 
        . . . . f 2 2 2 4 d d e b b f . 
        . . . . e 2 2 2 e d d e b f . . 
        . . . . f 4 4 4 f e e f f . . . 
        . . . . . f f f f f f . . . . . 
        . . . . . . f f f . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . f f f f f f . . . . . 
        . . . f f e e e e f 2 f . . . . 
        . . f f e e e e f 2 2 2 f . . . 
        . . f e e e f f e e e e f . . . 
        . . f f f f e e 2 2 2 2 e f . . 
        . . f e 2 2 2 f f f f e 2 f . . 
        . f f f f f f f e e e f f f . . 
        . f f e 4 4 e b f 4 4 e e f . . 
        . f e e 4 d 4 1 f d d e f . . . 
        . . f e e e e e d d d f . . . . 
        . . . . f 4 d d e 4 e f . . . . 
        . . . . f e d d e 2 2 f . . . . 
        . . . f f f e e f 5 5 f f . . . 
        . . . f f f f f f f f f f . . . 
        . . . . f f . . . f f f . . . . 
        `],
    200,
    true
    )
    HeRoy.vx += 30
})
controller.up.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, HeRoy)
    HeRoy.vy = 0
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    Speed = 3
    Look = 3
    animation.runImageAnimation(
    HeRoy,
    [img`
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . . f e 2 f f f f f f 2 e f . . 
        . . f f f f e e e e f f f f . . 
        . f f e f b f 4 4 f b f e f f . 
        . f e e 4 1 f d d f 1 4 e e f . 
        . . f f f f d d d d d e e f . . 
        . f d d d d f 4 4 4 e e f . . . 
        . f b b b b f 2 2 2 2 f 4 e . . 
        . f b b b b f 2 2 2 2 f d 4 . . 
        . . f c c f 4 5 5 4 4 f 4 4 . . 
        . . . f f f f f f f f . . . . . 
        . . . . . f f . . f f . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f f e 2 2 2 2 2 2 e e f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . f f e 4 1 f d d f 1 4 e f . . 
        f d f f e 4 d d d d 4 e f e . . 
        f b f e f 2 2 2 2 e d d 4 e . . 
        f b f 4 f 2 2 2 2 e d d e . . . 
        f c f . f 4 4 5 5 f e e . . . . 
        . f f . f f f f f f f . . . . . 
        . . . . f f f . . . . . . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f . . 
        . . e f f f f d d d 4 e f . . . 
        . . f d d d d f 2 2 2 f e f . . 
        . . f b b b b f 2 2 2 f 4 e . . 
        . . f b b b b f 5 4 4 f . . . . 
        . . . f c c f f f f f f . . . . 
        . . . . f f . . . f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . f f f 2 2 f f f . . . . 
        . . . f f f 2 2 2 2 f f f . . . 
        . . f f f e e e e e e f f f . . 
        . . f e e 2 2 2 2 2 2 e f f . . 
        . f f e 2 f f f f f f 2 e f f . 
        . f f f f f e e e e f f f f f . 
        . . f e f b f 4 4 f b f e f . . 
        . . f e 4 1 f d d f 1 4 e f f . 
        . . e f e 4 d d d d 4 e f f d f 
        . . e 4 d d e 2 2 2 2 f e f b f 
        . . . e d d e 2 2 2 2 f 4 f b f 
        . . . . e e f 5 5 4 4 f . f c f 
        . . . . . f f f f f f f . f f . 
        . . . . . . . . . f f f . . . . 
        `],
    200,
    true
    )
    HeRoy.vy += 30
})
controller.B.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, HeRoy)
    Speed = 0
})
function HeRoy_to_red_block () {
    for (let value of tiles.getTilesByType(myTiles.tile2)) {
        tiles.placeOnTile(HeRoy, value)
        console.logValue("x", value)
        tiles.setTileAt(value, sprites.castle.tilePath5)
    }
}
let Look = 0
let Speed = 0
let HeRoy: Sprite = null
let Attacking = 0
Attacking = -1
HeRoy = sprites.create(img`
    . . . . . . f f f f . . . . . . 
    . . . . f f f 2 2 f f f . . . . 
    . . . f f f 2 2 2 2 f f f . . . 
    . . f f f e e e e e e f f f . . 
    . . f f e 2 2 2 2 2 2 e e f . . 
    . . f e 2 f f f f f f 2 e f . . 
    . . f f f f e e e e f f f f . . 
    . f f e f b f 4 4 f b f e f f . 
    . f e e 4 1 f d d f 1 4 e e f . 
    . . f e e d d d d d d e e f . . 
    . . . f e e 4 4 4 4 e e f . . . 
    . . e 4 f 2 2 2 2 2 2 f 4 e . . 
    . . 4 d f 2 2 2 2 2 2 f d 4 . . 
    . . 4 4 f 4 4 5 5 4 4 f 4 4 . . 
    . . . . . f f f f f f . . . . . 
    . . . . . f f . . f f . . . . . 
    `, SpriteKind.Player)
HeRoy_to_red_block()
scene.cameraFollowSprite(HeRoy)
tiles.setTilemap(tiles.createTilemap(hex`3200320003030303030303030303030303030303030303030303030303030303050302030503030305030303050303030503030305030303030303030303030303030303030303030303030303030303050305030503050305030503050205030503050305030503050505050505050505050505050505050505050503030303030305030503050305030503050305020503050305030503050301010101010101010101010101010101010101050303030303030503050205030503050305020502050305030503050305030101010101010101010101010101010101010105030303030303050305020503050305030502050205030503050305030503050505050505050505050505050505010101010503030303030305030502050305030503050205020503050305030503050303030303030303030303030303030501010101050303030303030503050205030503050305020502050305030503050305030303030303030303030303030303050101010105030303030303050305020503050305030503050205030503050305030503030303030303030303030303030305010101010503030303030305030502050302030503030305020303050303030503030303030303030303030303030303030501010101050303030303030503030305050505050505050505050505050505050505050303030303030303030303030303050101010105030303030303050505050503030303030303030303030303030303030303030303030303030303030303030305010101010502030303030303030303030303030303030303030303030303030303030303030303030303030303030303030501010101050203030303030303030303030303030303030303030303030303030303030303030303030303030303030303050101010105020303030303030303030303030303030303030303030303030303030303030303030303030303030303030305010101010502030303030303030303030303030303030303030303030303030303030303030303030303030303030303030501010101050203030303030303030303030303030303030303030303030303030303030303030303030303030305050505050101010105050505050505050505050505050505050503030303030303030303030303030303030303030303030501010101010101010101010101010101010101010101010101050503030303030303030303030303030303030303030303050101080709010101010101010101010101010807070901010101050303030303030303030303030303030303030303030305010807070709010101010101010101010108070707070901010105030303030303030303030303030303030303030303030508070707070709010101010101010101080707070707070901010503030303030303030303030303030303030303030303050707070707070701010101010101010107070707070707070101050203030303030303030303030303030303030303030305070707070707070101010101010101010707070707070707010105020303030303030303030303030303030303030303030507070707070707010101010101040101070707070707070701010502030303030303030303030303030303030303030303050707070607070701010101010101010107070607070707070101050202030303030303030303030303030303030303030305010101010101010101010101010101010101010101010101010105030303030303030303030303030303030303030303030501010101010101010101010101010101010101010101010101010503030303030303030303030303030303030303030303050101010101010101010101010101010101010101010101010101050303030303030303030303030303030303030303030305010101010101010101010101010101010101010101010101010105030303030303030303030303030303030303030303030501010101010101010101010101050505050505050505050505050503030303030303030303030303030303030303030303050101010101010101010101010105030303030303030303030303030303030303030303030303030303030303030303030305010101010101010101010101010503030303030303030303030303030303030303030303030303030303030303030303030501010101010101010101010101050303030303030303030303030303030303030303030303030303030303030303030303050101010101010101010101010105030303030303030303030303030303030303030303030303030303030303030303030305010101010101010101010101010503030303030303030303030303030303030303030303030303030303030303030303030501010101010101010101010101050303030303030303030303030303030303030303030303030303030303030303030303050101010101010101010101010105030303030303030303030303030303030303030303030303030303030303030303030305010101010105050505050505050503030303030303030303030303030303030303030303030303030303030303030303030501010101010503030303030303030303030303030303030303030303030303030303030303030303030202030303030303050101010101050203030303030303030303030303030303030303030303030303030303030303030303030303030303030305010101010105020303030303030303030303030303030303030303030303030303030303030303030303030202020202030501010101010502030303030303030303030303030303030303030303030303030303030303030302020202020303030303050101010101050203030303030303030303030303030303030303030303030303030303030303030202020202030302020205010101010105030303030303030303030303030303030303030303030303030303030303030303020202020203020303030501010101010503030303030303030303030303030303030303030303030303030303030303030302020202020302030303050101010101050303030303030303030303030303030303030303030303030303030303030303030202020202030203030305010101010105030303030303030303030303030303030303030303030303030303030303030303020202020203020303030501010101010503030303030303030303030303030303030303030303030303030303030303030302020202020302030303050101010101050303030303030303030303030303030303030303030303030303030303030303030202020202030303030305010101010105030303030303030303030303030303030303030303030303030303030303030303`, img`
    ............................2...2...2...2...2...2.
    ..........................2.2.2.2.2.2.2.2.2.2.2.2.
    .2222222222222222222......2.2.2.2.2.2.2.2.2.2.2.2.
    ...................2......2.2.2.2.2.2.2.2.2.2.2.2.
    ...................2......2.2.2.2.2.2.2.2.2.2.2.2.
    .22222222222222....2......2.2.2.2.2.2.2.2.2.2.2.2.
    ...2..........2....2......2.2.2.2.2.2.2.2.2.2.2.2.
    ..............2....2......2.2.2.2.2.2.2.2.2.2.2.2.
    ..............2....2......2.2.2...2...2...2...2...
    ..............2....2......2...22222222222222222222
    ..............2....2......22222...................
    ..............2....2..............................
    ..............2....2..............................
    ..............2....2..............................
    ..............2....2..............................
    ..............2....2..............................
    ..........22222....222222222222222222.............
    ..........2.........................22............
    ..........2..222.............2222....2............
    ..........2.22222...........22..222..2............
    ..........22222222.........22.....2..2............
    ..........22222222.........2......2..2............
    ..........22222222.........2......2..2............
    ..........22222222.........2......22.2............
    ..........22222222.........222222222.2............
    ..........2..........................2............
    ..........2..........................2............
    ..........2..........................2............
    ..........2..........................2............
    ..........2.............22222222222222............
    ..........2.............2.........................
    ..........2.............2.........................
    ..........2.............2.........................
    ..........2.............2.........................
    ..........2.............2.........................
    ..........2.............2.........................
    ..........2.............2.........................
    ..........2.....222222222.........................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....2.................................
    ..........2.....22................................
    ..........2.....2.................................
    `, [myTiles.transparency16,sprites.castle.tilePath5,sprites.castle.tileGrass1,sprites.castle.tileGrass3,myTiles.tile2,sprites.builtin.forestTiles0,myTiles.tile3,myTiles.tile5,myTiles.tile6,myTiles.tile7], TileScale.Sixteen))
forever(function () {
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(440, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(311, music.beat(BeatFraction.Whole))
    music.playTone(349, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Double))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(370, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(247, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(494, music.beat(BeatFraction.Double))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(587, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(554, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(415, music.beat(BeatFraction.Whole))
    music.playTone(523, music.beat(BeatFraction.Whole))
    music.playTone(466, music.beat(BeatFraction.Double))
    music.playTone(494, music.beat(BeatFraction.Whole))
    music.playTone(233, music.beat(BeatFraction.Whole))
    music.playTone(392, music.beat(BeatFraction.Whole))
    music.playTone(330, music.beat(BeatFraction.Double))
})
forever(function () {
	
})
game.onUpdateInterval(100, function () {
    if (Attacking >= 0) {
        Attacking += 1
        if (Look == 0) {
            console.log("hi")
            HeRoy.image.flipX()
        } else {
        	
        }
    }
    if (Attacking == 6) {
        animation.stopAnimation(animation.AnimationTypes.All, HeRoy)
        Attacking = -1
    }
})
