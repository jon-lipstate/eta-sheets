class CellRange {
    private _cells: Cell[];
    public get value(): any[][]|any[] { //RowColData[[]] ... .AsRC() or .AsCR() or .transpose()
        return [[]]
    }
}
class Cell {
    private address: [r:number,c:number];
    private mergedRange: CellRange;
    private attrs: Record<string,any>; //readonly here or at cell-level?
    private format: unknown;
    private style: string;
    private validator: (value)=> boolean; //strategy: acept & format or reject? maybe use onchange to exec clearing in combination with an attr?
}
class Sheet {
    _data: Cell[][]; //[] | [][] ?
    width: number; //allow any css type for distance..? or just pixels as #?
    height:number;
    style: {
        columns:{};
        rows:{};
        cells:{};
        default:{}
    }
    settings: SheetSettings;
    renderer: SheetRenderer;
    /** continouous sequences (rectangles) */
    getRange(start:[r:number,c:number],end:[r:number,c:number]): CellRange { throw Error("not impl")}
    /** capture non-continous sequences e.g. ctrl clicking cells */
    getRange2(cells:Cell[]): CellRange { throw Error("not impl")}

}
class SheetRenderer{
    private _selection: CellRange[]; //allow discontinuities. each range is continouous..?
    private _viewport: Cell[][]; // visible cells in table
    private _px: number; //%x
    private _py: number; //%y
}
class SheetSettings{

}