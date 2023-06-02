import React from 'react'
import GroupPreview from './group-preview'
import AddGroup from './add-group'

function GroupList({ groups, onUpdateGroupTitle, onAddGroup }) {
  return (
    <ul className="group-list clean-list flex">
      {groups.map((group) => (
        <li key={group._id}>
          <GroupPreview group={group} onUpdateGroupTitle={onUpdateGroupTitle}></GroupPreview>
        </li>
      ))}
      <li key={'add-group'}>
        <AddGroup onAddGroup={onAddGroup} />
      </li>
    </ul>
  )
}

export default GroupList
