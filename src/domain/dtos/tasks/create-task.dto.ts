export class CreateTaskDto {
    private constructor(
        public readonly id: string,
        public readonly title: string,
        public readonly description: string,
        public readonly completed: boolean,
        public readonly createdAt: Date,
    ){}

    static create(props: {[key: string]: any}): [string?, CreateTaskDto?] {
        const { id, title, description, completed = false, createdAt = new Date() } = props;

        if( !id ) return ['ID is required!', undefined]
        if( !title ) return ['Title is required!', undefined]
        if( !description ) return ['Description is required!', undefined]

        return [ undefined, new CreateTaskDto(id, title, description, completed, createdAt) ]
    }
}
