export default function ProjectCard({ image, title, link }) {
    return <>
        <a className="projectCard" href={link} target="_blank">
            <div>
                <img src={image} alt="" />
                <h3>{title}</h3>
            </div>
        </a>
    </>
}