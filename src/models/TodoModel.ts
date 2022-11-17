export class TodoModel {
    rowNumber : number
    rowDescription :string
    rowAssignedTo : string

    constructor(_rowNumber : number, _rowDescription : string, _rowAssignedTo : string){
        this.rowDescription = _rowDescription
        this.rowNumber = _rowNumber
        this.rowAssignedTo = _rowAssignedTo 
    }
}