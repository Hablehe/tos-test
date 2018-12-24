'use strict'

const Project = use('App/Models/Project');
const AuthorizationService = use('App/Services/AuthorizationService');


class ProjectController {
    //get数据表
    async index({auth}){
        const user= await auth.getUser();
        return await user.projects().fetch();
        
    }
    //创建数据用户post
    async create({auth,request}) {
        const user= await auth.getUser();
        const {title} = request.all();
        const project = new Project();
        project.fill({
            title,
        });
        await user.projects().save(project);
        return project;
    }

    //删除用户delete
    async destroy({auth, request, params}) {
        const user = await auth.getUser();
        const id = params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        await project.delete();
        return project;
    }

    async update({auth, request, params}) {
        const user = await auth.getUser();
        const {id}=params;
        const project = await Project.find(id);
        AuthorizationService.verifyPermission(project,user);
        project.merge(request.only('title'));
        await project.save();
        return project;
    }

}

module.exports = ProjectController
