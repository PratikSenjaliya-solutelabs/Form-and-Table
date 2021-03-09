import React,{Component} from 'react';
import Form from '../Components/Form';
import Table from '../Components/Table';
import classes from './Layout.module.css';

class Layout extends Component{
    state={
        formData:[],
        editData:null
    }
addDataHandler = (props) => { 
        const copyData = [...this.state.formData]
        copyData.push({
            ...props,
            id: Math.random()    
        })
        this.setState({
            formData: copyData,
            editData: null
        })
    }

    deleteDataHandler = (id) => {
        let copyData = [...this.state.formData]
        copyData = copyData.filter((item) => item.id !== id)
        this.setState({formData: copyData})
    }

    editDataHandler = (index, id) => {
        this.setState({editData: this.state.formData[index]})
        this.deleteDataHandler(id)
    }

    render(){
        return(
             <div className={classes.MainDiv}>
                 <div className={classes.Form}>
                     <Form addData={(data)=>this.addDataHandler(data)}
                    edit={this.state.editData}/>
                 </div>
                <div className={classes.Table}>
                    <Table enteredData={this.state.formData}
                    onDelete={(id)=>this.deleteRowHandler(id)}
                    onEdit={(index,id)=>this.editDataHandler(index,id)}/>
                </div>
                
            </div>
        )
    }
}

export default Layout;