import { Controller, Delete, Get, Post, Put, Body, Param } from '@nestjs/common';
import { createTaskDto } from 'src/dto/create.task.dto';


@Controller('task')
export class TaskController {
    @Get()
    getTask():string{
        return 'returning task'
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
