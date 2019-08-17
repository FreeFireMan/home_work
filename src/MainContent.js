import React from 'react'
import CardHolder from "./CardHolder";
import data_prod from './Data'
class MaineContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [...data_prod]
        }
        this.hideData = this.hideData.bind(this)
        this.deleteData = this.deleteData.bind(this)
    }

    hideData = e => {

        this.setState(pevState => ({
            data: pevState.data.map(t => {
                const tCopy = {...t};
                tCopy.hasImage = tCopy.id === e ? !tCopy.hasImage : tCopy.hasImage
                return tCopy

            })
    }))
    }
    deleteData = e => {
         this.setState(prevState =>({
             data: prevState.data.filter(t=>
                 t.id !== e.toString()
             ),
         }))
    }

    render() {
        console.log("I render ",this.state.data)
        return (
            <div className="row">
                { this.state.data.map(items =>
                    <CardHolder key={items.id} {...items} hideData={this.hideData} deleteData={this.deleteData}/> ) }
            </div>
        )
    }
}
export default MaineContent