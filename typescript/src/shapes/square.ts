import {Shape} from './shape'

interface Square extends Shape{
    sideLen: number,
}

function newSquare(sideLen: number): Square {
    return {
        sideLen,
        computeArea: function (): number {
            return sideLen * sideLen
        }
    }
}

export { newSquare }