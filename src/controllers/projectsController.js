import projectsService from "../services/projectsService.js";


const getProjects = async (req, res) => {
  try {
    const projects = await projectsService.getProjects();

    res.status(200).json({
      success: true,
      message: "Projects fetched successfully",
      data: projects,
    })

  } catch (error) {
    console.error("Error in getProjects:", error);
    res.status(500).json({
      success: false,
      message: error.message || "Error fetching projects",
      data: null,
   }) 
  }
};

export default {
  getProjects,
}