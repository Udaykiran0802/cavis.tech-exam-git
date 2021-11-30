import {Component} from  "react" 

class App extends Component {
    state = {items :[]}

    componentDidMount(){
        this.renderFunction()

    }

    renderFunction = async () => {
        const apiUrl = "https://api.tvmaze.com/search/shows?q=snow"
        const options = {
            method : 'GET',
        }
        const response = await fetch(apiUrl,options)
        const data =  await response.json()
        console.log(data)
    }

    render () {
        return(
            <div>
               Hellow world !
            </div>
        )
    }
}
export default App
