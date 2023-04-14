function ProjectBox(props) {
    return (
        <div
            className="max-w-[320px] sm:max-w-[230px] flex flex-col items-center justify-start gap-4 mb-6 cursor-pointer"
            onClick={props.onClick}
        >
            <div className="w-full sm:max-h-[130px] max-h-[180px] overflow-hidden rounded-md font-roboto">
                <img className="aspect-[4/3]" src={props.img} />
            </div>
            <div className="w-full flex flex-col items-center justify-start gap-2 text-center">
                <p className="text-md font-medium">{props.projectName}</p>
                <p className="text-sm ">{props.projectDescription}</p>
            </div>
        </div>
    )
}

export default ProjectBox
