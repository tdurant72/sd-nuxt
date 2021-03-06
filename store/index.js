export const state = () => ({
    githubProjects: []
})

// export const getters = {
//     getterValue: state => {
//         return state.value
//     }
// }

export const mutations = {
    updateGithubProjects: (state, payload) => {
        state.githubProjects = payload
    }
}

export const actions = {
    async getGithubProjects({ state, commit }) {
        if (state.githubProjects.length) return
        try {
            let githubProjects = await fetch(
                `https://api.github.com/users/tdurant72/repos?page=1&per_page=100`
            ).then(res => res.json())

            githubProjects = githubProjects.filter(el => el.fork === false)
                .map(({ id, name, description, html_url }) => ({ id, name, description, html_url }))
            //console.log(githubProjects)
            commit("updateGithubProjects", githubProjects)
        } catch (error) {
            console.log(error)
        }

    }
}