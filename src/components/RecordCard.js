import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'


const RecordCard = ({records, payrolls}) => {

  const recordCards =  records.length > 0 ? records.map(record =>

    	<li key = {record.id}><><Link to ={`/records/${record.id}/edit`} key={record.attributes.id}>
          {record.attributes.workdate} - {record.attributes.totalHours}
          - {record.attributes.groups.map(group =>
            group.name
          )}
          Payroll: {payrolls.filter(payroll => payroll.attributes.id === record.attributes.payroll_id).map(p => p.attributes.name)}
        </Link><br></br><br></br></></li>) : null

  return (
    recordCards
  )
}

  const mapStateToProps = state => {

    return {
      records: state.records,
      payrolls: state.myPayrolls

    }
  }

export default connect(mapStateToProps)(RecordCard)
