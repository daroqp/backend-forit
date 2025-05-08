export class UpdateTaskDto {
    private constructor(
        public readonly id: string,
        public readonly title?: string,
        public readonly description?: string,
        public readonly completed?: boolean,
        public readonly createdAt?: Date,
    ){}

    static create(props: {[key: string]: any}): [string?, UpdateTaskDto?] {
        const { id, title, description, completed, createdAt } = props;
        let newCreatedAt: Date = createdAt;

        if( !id ) return ['ID is required!', undefined]

        if( createdAt ) {
            newCreatedAt = new Date( createdAt )

            if (newCreatedAt.toString() === "Invalid Date") {
                return ["CreatedAt must be a valid date!", undefined];
            }
        }

        return [ undefined, new UpdateTaskDto(id, title, description, completed, newCreatedAt) ]
    }
}
