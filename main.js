const api = new APIManager()
const renderer = new Renderer();
const loadData = () => api.loadData()
const renderall = () => renderer.render(api.data)