import { getClassrooms } from "@Backend/Models/classrooms";


async function get( ) {
    return getClassrooms();
}

export {
    get,
};
