import {Shape} from './shape'

interface Rectangle extends Shape{
    width: number,
    height: number,
}

function newRectangle(width: number, height: number): Rectangle {
    return {
        width,
        height,

        computeArea: function (): number {
            return width * height
        }
    }
}

export { Rectangle,newRectangle }
