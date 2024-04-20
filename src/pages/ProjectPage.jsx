import {useEffect, useState} from "react";
import {useParams} from "react-router-dom";

const ProjectPage = () => {
    const { id } = useParams();
    const [project, setProject] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const response = await fetch(`/api/projects/${id}`);
                const data = await response.json();
                setProject(data);
                setLoading(false);
            } catch (error) {
                console.error(error);
            }
        };
        fetchProject();
    }, [id]);

    if (loading) {
        // return <Loading />;
    }

    if (!project) {
        // return <NotFound />;
    }

    return (
        <div className="min-h-screen bg-custom-dark flex justify-center items-center text-custom-light">
            test: {id}
        </div>
    )
}

export default ProjectPage;
