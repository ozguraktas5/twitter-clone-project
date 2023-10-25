
import Premium from "./premium";
import Search from "./search";
import Topics from "./topics";


export default function RightSidebar() {
    return(
        <aside className="w-[350px] mr-2.5">
            <Search />
            <Premium />
            <Topics />
        </aside>
    )
}