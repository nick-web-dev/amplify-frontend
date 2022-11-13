class TaskService {

  constructor(client) {
    this.client = client;
  }

  fetchPaginated(queryParams) {
    this.client.get('linquer/tasks', queryParams).then((resp) => {
      return resp.data;
    }, (err) => {
      console.log(err.toString())
    });
  }
}


export default TaskService;
