'use strict'

const Project = use('App/Models/Project');
const Task = use('App/Models/Task');
const AuthorizationService = use('App/Services/AuthorizationService');


class TaskController {

    async index({auth,request,params}) {
        const user = await auth.getUser();
        const {id} = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        return await project.tasks().fetch();
    }

    async create({auth,request,params}){
        const user = await auth.getUser();
        const { description } = request.all();
        const { id } = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        const task = new Task();
        task.fill({
            description,
        });
        await project.tasks().save(task);
        return task;

        // const user = await auth.getUser();
        // const {title} = request.all();
        // const project = new Project();
        // project.fill({
        //     title,
        // });
        // await user.projects().save(project);
        // return project;
    }

}

module.exports = TaskController
