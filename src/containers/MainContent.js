import React from 'react'
import CardHolder from "./CardHolder";
import data_prod from './Data'
import CreateCard from "./CreateCard";
class MaineContent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: [...data_prod]
        }

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
    setData =e=>{
       this.setState(prevState=>({
           data: [...prevState.data,e]
       }))
    }

    render() {
        console.log("I render ",this.state.data)
        return (
            <div className="row">
                { this.state.data.map(items =>
                    <CardHolder key={items.id} {...items} hideData={this.hideData} deleteData={this.deleteData}/> ) }
                <CreateCard setData={this.setData}/>
            </div>

        )
    }
}
export default MaineContent
