import data from "../data/projects.json";
import { projectSchema } from "../lib/schemas";
import { ProjectCard } from "./ProjectCard";
export default function Projects(_a) {
    var limit = _a.limit;
    var projects = projectSchema.parse(data).projects;
    if (limit) {
        projects = projects.slice(0, limit);
    }
    return (<section className="grid grid-cols-1 gap-4 sm:grid-cols-2">
      {projects.map(function (project, id) { return (<ProjectCard key={id} project={project}/>); })}
    </section>);
}
