import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { createTaskDto } from 'src/dto/create.task.dto';
import { TaskService } from './task.service';
import { Task } from 'src/interfaces/task';

@Controller('task')
export class TaskController {

    constructor(private TaskSerive: TaskService){}

    @Get()
    getTask():Task[]{
       return  this.TaskSerive.getTasks()
    }


    @Get(':id')
    getUniqueTask(@Param('id') id:string):Task{
        return this.TaskSerive.getTask(parseInt(id))
    }

    @Post()
    createTask(@Body() task: createTaskDto):string{
        console.log(task)
        return 'creating task'
    }

    @Put('id')
    updateTask(@Body() task:createTaskDto, @Param('id') id){
        return 'task is updated'
    }

    @Delete(':id')
    deleteTask(@Param('id') id ){
        return `task number ${id}`
    }
}
