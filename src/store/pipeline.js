import { api } from "./api";


export default ({
    state: () => ({
        current_project_files: [],
        project_samples: [],
        unassigned_sample_files: [],



    }),
    getters: {},
    mutations: {},
    actions: {
        getCurrentProjectFiles(context) {
            const project_id = context.rootState.project.current_project.project_id
            const config = {
              params: {project_id: project_id},
            };
            api
              .get("/sample_project/project_sample_files", config)
              .then((res) => {
                context.state.current_project_files = res.data;
                context.rootState.current_project = {
                    project_id: project_id
                }
              })
              .catch((err) => {
                console.log(err);
              });
        },
        getUnassignedSampleFiles(context, study_name) {
            const config = {
              params: {
                project_id: context.rootState.project.current_project.project_id,
                study_name: study_name
              },
            };
            api
              .get("/sample_project/unassigned_sample_files/", config)
              .then((res) => {
                context.state.unassigned_sample_files = res.data;
              })
              .catch((err) => {
                console.log(err);
              });
        },
        getProjectSamples(context, project_id) {
            api
              .get(`/project_sample/${project_id}`)
              .then((res) => {
                context.state.project_samples = res.data;
              })
              .catch((err) => {
                console.log(err);
              });
        },
        postProjectSamples(context) {
            const data = context.state.unassigned_sample_files.map((el) => {
                return {
                    project_id: context.rootState.current_project.project_id,
                    sample_file_id: el.sample_file_id,
                }
            });
            api.post("/sample_project/load_sample_files/", data)
                .then(() => {
                    context.state.current_project_files.push(
                        ...context.state.unassigned_sample_files
                    )
                    context.state.unassigned_sample_files = []
                })
                .catch((err) => {
                    console.log(err)
                })
        },


    }
})