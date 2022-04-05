import { getClassrooms, createClassroom } from "@Backend/Models/classrooms";


async function get( ) {
    return getClassrooms();
}

async function create(label: string) {
    return createClassroom(label);
}

export {
    get,
    create,
};
