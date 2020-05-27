import React, {Component, Fragment} from 'react';
import instance from '../../services/tokenprovider';
import './statistics.css'

export class GetStatistics extends Component {
    constructor(props){
        super(props);
        this.state = {
            statistics:{}
        }
    }

    componentDidMount(){
        instance.get('getstatiscs')
        .then(result => {
            this.setState({statistics:result.data})
            console.log(result)
        })
    }

    render(){
        const {statistics} = this.state;
        return(
            <Fragment>
                <div className = 'container'>
                    <div className = 'row statisticsContainer'>
                        <div className = 'col-lg-6'>
                            <img id = 'pictureMainOnPage' 
                            src={`${process.env.PUBLIC_URL}/img/croods-3.png`} 
                            alt="logo"/>
                        </div>
                        <div className = 'col-lg-6'>
                            <form className = 'statisticsForm'>
                                <p id = 'statisticsTitle'> your statistics </p>
                                <p><span className = 'statisticsItem'> all tasks </span> <span className = 'statisticsItemCounter'>{statistics.allItems}</span> </p>
                                <p><span className = 'statisticsItem'> complete task</span> <span className = 'statisticsItemCounter'>{statistics.completeItems}</span> </p>
                                <p> <span className = 'statisticsItem'> active task</span> <span className = 'statisticsItemCounter'>{statistics.unCompleteItems}</span> </p>
            
                            </form>
                        </div>
                    </div>
                </div>
            </Fragment>
        )
    }
}

export default GetStatistics;