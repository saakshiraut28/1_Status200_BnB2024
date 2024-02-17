import { ChevronDown, ChevronUp, Pen, Stethoscope, History, Home,} from "lucide-react";
import { Children, ElementType, ReactNode, useState } from "react";
import { Button, buttonStyles } from "../components/Button";
import { twMerge } from "tailwind-merge";
import { useSidebarContext } from "../contexts/SidebarContext";
import { PageHeaderFirstSection } from "./PageHeader";

export function Sidebar() {
    const { isLargeOpen, isSmallOpen, close } = useSidebarContext()

    return (
        <>
            {isSmallOpen && (
                <div onClick={close} className="lg:hidden fixed inset-0 z-[999] bg-secondary-dark opacity-100" />
            )}

            <aside className={`w-56 lg:sticky absolute top-0 overflow-y-auto scrollbar-hidden pb-4 flex-col gap-2 px-2 ${isLargeOpen ? "lg:flex" : "lg:hidden"} ${isSmallOpen ? "flex z-[999] bg-white max-h-screen" : "hidden"}`}>

                <div className="lg:hidden pt-2 pb-4 px-2 sticky top-0 bg-white">
                    <PageHeaderFirstSection />

                </div>

                <hr />

                <LargeSidebarSection visibleItemCount={5}>
                    <LargeSidebarItem
                        IconorImgUrl={Home}
                        title="Home"
                        url="/library"
                    />
                    <LargeSidebarItem
                        IconorImgUrl={Stethoscope}
                        title="Doctor Profile"
                        url="/your-videos"
                    />
                    <LargeSidebarItem
                        IconorImgUrl={Pen}
                        title="Blogs"
                        url="/playlist?list=WL"
                    />
                    <LargeSidebarItem
                        IconorImgUrl={History}
                        title="History"
                        url="/history"
                    />

                </LargeSidebarSection>

                <hr />

            </aside>
        </>

    )
}



type LargeSidebarSectionProps = {
    children: ReactNode
    title?: string
    visibleItemCount?: number
}

function LargeSidebarSection({ children, title, visibleItemCount = Number.POSITIVE_INFINITY }: LargeSidebarSectionProps) {
    const [isExpanded, setIsExpanded] = useState(false)
    const childrenArray = Children.toArray(children).flat();
    const showExpandButton = childrenArray.length > visibleItemCount;
    const visibleChildren = isExpanded ? childrenArray : childrenArray.slice(0, visibleItemCount)

    const ButtonIcon = isExpanded ? ChevronUp : ChevronDown
    return (
        <div>
            {title && <div className="ml-4 mt-2 text-lg mb-1">
                {title}
            </div>}
            {visibleChildren}
            {showExpandButton && <Button onClick={() => setIsExpanded(e => !e)} variant="ghost" className="w-full flex items-center rounded-lg gap-4 p-3">
                <ButtonIcon className="w-6 h-6" />
                <div>{isExpanded ? "Show Less" : "Show More"}</div>

            </Button>}
        </div>
    )

}

type LargeSidebarItemProps = {
    IconorImgUrl: ElementType | string
    title: string
    url: string
    isActive?: boolean
}



function LargeSidebarItem({ IconorImgUrl, title, url, isActive = false }: LargeSidebarItemProps) {
    return (
        <a href={url} className={twMerge(buttonStyles({ variant: "ghost" }), `w-full flex items-center rounded-lg gap-4 p-3 ${isActive ? "font-bold bg-neutral-100 hover:bg-secondary" : undefined}`)}>
            {typeof IconorImgUrl === "string" ? (
                <img src={IconorImgUrl} className="w-6 h-6 rounded-full" />
            ) : (
                <IconorImgUrl className="w-6 h-6" />

            )}
            <div className="whitespace-nowrap overflow-hidden text-ellipsis">{title}</div>
        </a>
    )
}