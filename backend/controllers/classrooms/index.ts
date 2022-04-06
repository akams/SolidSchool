import { getClassrooms, createClassroom, deleteClassroom } from "@Backend/Models/classrooms";


async function get( ) {
    return getClassrooms();
}

async function create(label: string) {
    return createClassroom(label);
}

async function deleted(id: number) {
    return deleteClassroom(id);
}

export {
    get,
    create,
    deleted,
};
