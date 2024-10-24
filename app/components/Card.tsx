import { Link } from "@remix-run/react"
import GradientTracker from "~/components/GradientTracker"

export const LinkCard = ({children, id, color}: {children: React.ReactNode, id: string, color: string}) => {

    return (
        <div id="link-card" className="2xl:h-work-card-2xl lg:h-work-card-lg md:h-work-card-md h-work-card-default card-container shadow-card-mobile md:shadow-card">
            <Link to={`/work/${id}`}  className="overflow-hidden group card flex flex-col md:bg-transparent relative" style={{ '--card-color': color } as React.CSSProperties}>
                <GradientTracker className="hover-none:hidden"/>
                <div>
                    {children}
                </div>
            </Link>
        </div>
    )
}

export const ImageCard = ({children}: {children: React.ReactNode}) => {
    return (
        <div id="image-card" className="card-container shadow-card-mobile md:shadow-card">
            <div className="card">
                {children}
            </div>
        </div>
    )
}

export const MacWindowCard = ({children}: {children: React.ReactNode}) => {
    return (
        <div id="mac-window-card" className="mac-window-card-container shadow-card-mobile md:shadow-card mt-32 lg:mt-40 2xl:mt-48 2xl:w-page-2xl 2xl:h-mac-window-card-2xl lg:w-page-lg lg:h-mac-window-card-lg md:w-page-md md:h-mac-window-card-md w-work-card-default h-work-card-default">
            <div className="card flex justify-center items-center relative">
                {children}
            </div>
        </div>
    )
}
