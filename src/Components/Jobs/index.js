import React, { Component } from 'react'
import './Styles.css'
import ViewJobCard from '../ViewJobCard';
import { Container, Row, Col } from 'react-grid-system';
import Loader from '../Loader';
import Actions from '../../Redux/Actions';
import { connect } from 'react-redux'

class Jobs extends Component {

    constructor(props) {
        super(props)
        this.state = {
            loading: false,
            allJobs: []
        }
    }

    componentDidMount(){
        this.setState({ loading: true })
        this.props.GetAllJobs( success => {
            console.log(success)
            this.setState({ loading: false, allJobs: success.alljobs })
        }, error => {
            this.setState({ loading: false })
        })
    }

    _renderAlljobs = () => {
      return  this.state.allJobs.map(( job, index ) => {
              return <ViewJobCard duration={job.duration} budget={job.budget} description = { job.description }
              category={job.category} status={job.status} email={job.email}/>
        })
    }

    

    render() {
        return ( <Container >
            <Loader loading={this.state.loading}/>
            <Row >
                <Col lg={3} sm={3} md={3}></Col>

                <Col lg={6} sm={6} md={6}>
              {
                  this.state.allJobs.length > 0
                  ? this._renderAlljobs()
                  : <p style={{textAlign: 'center'}}>No new jobs</p>
              }
                </Col>



                <Col lg={3} sm={3} md={3}></Col>
            </Row>
           </Container>
        )
    }
}

const mapStateToProps = (state) => {
    return state
}

const mapDispatchToProps = (dispatch) => {
    return {
        GetAllJobs: (success, error) => dispatch(Actions.GetAllJobs( success, error)),
    }
}
 
export default connect(mapStateToProps, mapDispatchToProps)(Jobs)
