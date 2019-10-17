import React from 'react'
import { connect } from 'react-redux'

import { Link } from 'react-router-dom'

class Payrolls extends React.Component {
  state = {
    displaySorted: false,
    inputDate: 0,
    compareDate: 0
   }

   handleChange=(event)=> {
     this.setState({
       inputDate: event.target.value
     })
   }

   handleSubmit =(event) => {
     event.preventDefault()
      this.setState({
        compareDate: this.state.inputDate,
        inputDate: 0
      })
   }

    handleClick = () => {
       this.setState({
         displaySorted: !this.state.displaySorted
      })
    }

render() {
// debugger
      const allPayrollCards = this.props.payrolls.length > 0 ? this.props.payrolls.map(p =>
        <li key = {p.id}><><Link to ={`/payrolls/${p.id}`} >{p.attributes.payPeriod}</Link>
      <br></br><br></br></></li>) : null

      const greaterPayrolls = this.props.payrolls.filter(p =>
        p.attributes.payPeriod > this.state.compareDate
      ).map(p =>
        <><Link to ={`/payrolls/${p.id}`} >{p.attributes.payPeriod}</Link>
      <br></br><br></br></>)


      return (
          <div>
            <h3><label>Payrolls</label></h3>
            <p>{this.state.compareDate > 0 && this.state.displaySorted ? greaterPayrolls
                : allPayrollCards}</p>
                <h4><label>Search Payrolls</label></h4>


           <form onSubmit={this.handleSubmit}>

             <input
               placeholder="Search by Payroll Date"
               onChange={this.handleChange}
               value={this.state.inputDate}>
             </input>
             <input type="submit" />
           </form>

          </div>
        )
      }
    }


  const mapStateToProps = state => {
    return {
      payrolls: state.payrolls,

    }
  }


export default connect(mapStateToProps)(Payrolls)
