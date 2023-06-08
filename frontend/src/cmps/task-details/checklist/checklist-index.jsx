import { useState, useEffect } from 'react'
import { ChecklistList } from './checklist-list';
import { utilService } from '../../../services/util.service'


export function ChecklistIndex({ task, onOpenPopover, onUpdateChecklists }) {

    const [localChecklists, setLocalChecklists] = useState(task.checklists ? [...task.checklists] : [])


    useEffect(() => {
        if (task.checklists) setLocalChecklists(task.checklists)
    }, [task])

    function onDeleteChecklist(checklistId) {
        const checklistIdx = localChecklists.findIndex((checklist) => checklistId === checklist._id)
        const updatedChecklists = [...localChecklists]
        updatedChecklists.splice(checklistIdx, 1)
        console.log('vfdsvsdv', updatedChecklists);
        const activity = 'delete-checklist'
        setLocalChecklists(updatedChecklists)
        onUpdateChecklists(updatedChecklists, activity)
    }

    function onDeleteTodo(todoId, checklistId) {
        const checklistIdx = localChecklists.findIndex((checklist) => checklistId === checklist._id)
        const todoIdx = localChecklists[checklistIdx].todos.findIndex((todo) => todoId === todo._id)
        const updatedChecklists = [...localChecklists]
        updatedChecklists[checklistIdx].todos.splice(todoIdx, 1)
        const activity = ''
        onUpdateChecklists(updatedChecklists, activity)
    }

    function onAddTodo(checklistId, title) {
        const newTodo = { _id: utilService.makeId(), title, isDone: false }
        const checklistIdx = localChecklists.findIndex((checklist) => checklistId === checklist._id)
        localChecklists[checklistIdx].todos.push(newTodo);
        const updatedChecklists = localChecklists
        const activity = ''
        onUpdateChecklists(updatedChecklists, activity)
    }

    function onEditTodo(checklistId, title, todoId){
        const checklistIdx = localChecklists.findIndex((checklist) => checklistId === checklist._id)
        const todoIdx = localChecklists[checklistIdx].todos.findIndex((todo) => todoId === todo._id)
        if (localChecklists[checklistIdx].todos[todoIdx].title === title) return
        const updatedTodo = { ...localChecklists[checklistIdx].todos[todoIdx],title: title}
          const updatedChecklists = [...localChecklists]
          updatedChecklists[checklistIdx].todos[todoIdx] = updatedTodo
        const activity = ''
        onUpdateChecklists(updatedChecklists, activity)
    }

    function onEditChecklist(checklistId, title) {
        const checklistIdx = localChecklists.findIndex((checklist) => checklistId === checklist._id)
        if (localChecklists[checklistIdx].title === title) return
        const updatedChecklist = { ...localChecklists[checklistIdx], title }
        const updatedChecklists = [...localChecklists]
        updatedChecklists[checklistIdx] = updatedChecklist
        const activity = 'updated-checklist'
        onUpdateChecklists(updatedChecklists, activity)
    }

    if (!task.checklists) return <div></div>
    return (
        <div className='task-checklist-container'>
            <ChecklistList
                checklists={localChecklists}
                onDeleteChecklist={onDeleteChecklist}
                onOpenPopover={onOpenPopover}
                onEditChecklist={onEditChecklist}
                onAddTodo={onAddTodo}
                onDeleteTodo={onDeleteTodo}
                onEditTodo={onEditTodo}
                 />
        </div>
    )
}
