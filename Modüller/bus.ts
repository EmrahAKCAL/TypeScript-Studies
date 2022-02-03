import { Point } from "./point";
import { Vehicle } from "./vehicle";

export class Bus implements Vehicle{
    travelTo(point: Point): void {
        throw new Error('Error');
    }
}