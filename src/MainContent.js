import React from 'react'
import CardHolder from "./CardHolder";
import data_prod from './Data'
class MaineContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [...data_prod]
        }
        this.updateData = this.updateData.bind(this)
    }
    updateData = e => {
        const val = e;
        console.log("I work ",val)
        this.setState(pevState => ({
            data : pevState.data.map( t=>(
                t.id === val && t.hasImage ? !t.hasImage : t  ))
        }))
    }
    render() {
        return (
            <div className="row">
                { this.state.data.map(items =>
                    <CardHolder key={items.id} {...items} updateData={this.updateData}/> ) }
            </div>
        )
    }
}
export default MaineContent