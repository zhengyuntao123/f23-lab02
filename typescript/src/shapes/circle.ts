import {Shape} from './shape'

interface Circle extends Shape{
    radius: number,
}


function newCircle(radius: number): Circle {
    return {
        radius,
        computeArea: function (): number {
            return Math.PI * radius * radius
        }
    }
}

export { newCircle }




