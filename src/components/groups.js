import React from 'react'
import { connect } from 'react-redux'
// import { addLoansToPool } from '../actions/loans.js'


const Groups = ({groups}) => {

  const groupCards =  groups.length > 0 ? groups.map(group =>

    	<li key = {group.id}>
          {group.attributes.name} - {group.attributes.hours}
          - {group.attributes.inGym} - {group.attributes.offSite} - {group.attributes.team}
        </li>) : null

  return (
    groupCards
  )
}

  const mapStateToProps = state => {

    return {
      groups: state.groups,

    }
  }

export default connect(mapStateToProps)(Groups)
