import React from 'react'

class Counter extends React.Component {
    state = {
        number: 0
    }

    componentDidMount() {
        fetch('https://todo-e8a15.firebaseio.com/cappy-counter/number/.json')
            .then(response => response.json())
            .then(data => {
                this.setState({
                    number: data
                })
            })
    }
    
    updataCounter = () => {

        const request = {
            method: 'PUT',
            body: JSON.stringify(
               this.state.number
            )
        }

        fetch('https://todo-e8a15.firebaseio.com/cappy-counter/number/.json'
            , request)
    }
   
    incHandler = () => {

        this.setState({
            number: this.state.number + 1
        })
    }
    decHandler = () => {
        this.setState({
            number: this.state.number - 1
        })

    }
    reset = () => {
        this.setState({
            number: this.state.number = 0
        })

    }



    render(){

       this.updataCounter()
        
        return (
            <div>
                <h2>Hello in my JFDDL5 Counter</h2>
                <h1>{this.state.number}</h1>
                <button
                    onClick={this.incHandler}
                >
                    +
                </button>
                <button
                    onClick={this.decHandler}
                >
                    -
                </button>
                <button
                    onClick={this.reset}
                >
                    RESET
                </button>
            </div >


        )
    }
}
export default Counter