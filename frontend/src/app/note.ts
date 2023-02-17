export class Note {
    id: number;
    label: string;
    description: string;

    constructor(id: number, label: string, description: string) {
        this.id = id;
        this.label = label;
        this.description = description;
    }
}
