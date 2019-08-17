import React from 'react';

class CreateCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            baseImage : '',
            partNumber : '',
            article : '',
            id : '',
            hasImage : true
        }
        this.handleClick = this.handleClick.bind(this)
        this.updateInput = this.updateInput.bind(this)

    }
    handleClick = e =>{
        this.props.setData(this.state)
    }
    updateInput = (evt) =>{
        this.setState({ [evt.target.name]:evt.target.value })
        console.log(this.state)
    }

    render() {
        return(
            <div className="card m-1 p-1" style={{width: "260px"}}>

                <div className="card-body">
                    <label>Линк на фото<input type="text" name="baseImage" onChange={this.updateInput.bind(this)}/></label>
                    <label>Код производителя<input type="text" name="partNumber" onChange={this.updateInput.bind(this)}/></label>
                    <label>Название продукта<input type="text" name="article" onChange={this.updateInput.bind(this)}/></label>
                    <label>Айди продукта<input type="text" name="id" onChange={this.updateInput.bind(this)}/></label>
                </div>
                <button className="btn btn-primary mb-1" onClick={this.handleClick}>Create</button>
            </div>
        )
    }

}

export default CreateCard