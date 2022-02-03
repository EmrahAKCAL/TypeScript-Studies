//Point interface dosyası import edildi.
import { Point} from './point';



//interface dışarıya export edilir.
export interface Vehicle{
    travelTo(point: Point): void; 
}

