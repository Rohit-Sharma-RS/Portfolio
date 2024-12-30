import TimelineItem from "./TimelineItem";
import { Card, CardContent } from "./ui/Card";
export default function Timeline(_a) {
    var experience = _a.experience;
    return (<Card>
      <CardContent className="p-0">
        <ul className="ml-10 border-l">
          {experience.map(function (exp, id) { return (<TimelineItem key={id} experience={exp}/>); })}
        </ul>
      </CardContent>
    </Card>);
}
