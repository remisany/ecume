export const defaultProjects = [
    {label: "Non", value: ""},
    {label: "Créer un nouveau projet", value: "jvcunpe"}
]

export const concatProjects = (projects) => {
    let returnProject = []

    if (projects.length !== 0) {
        returnProject = projects.map(project => ({label: project.title, value: project._id}))
    }

    returnProject.unshift(defaultProjects[0])
    returnProject.push(defaultProjects[1])

    return returnProject
}
