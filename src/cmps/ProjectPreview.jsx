export function ProjectPreview({project}){
    return(
       <div className="proj-card">
        <li>Project ID: {project.id}</li>
        <li>Project Name: {project.name}</li>
        <li>Project datatset: {project.dataSet}</li>
        </div>

    )
}